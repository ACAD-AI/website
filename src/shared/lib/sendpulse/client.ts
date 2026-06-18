/**
 * Minimal SendPulse REST client for managing the newsletter address book.
 *
 * SendPulse is the system of record for newsletter contacts — we push each
 * signup straight into an address book rather than holding our own database.
 *
 * Required environment variables:
 * - SENDPULSE_CLIENT_ID       OAuth client id (API credentials)
 * - SENDPULSE_CLIENT_SECRET   OAuth client secret
 * - SENDPULSE_ADDRESSBOOK_ID  Numeric id of the address book to add contacts to
 * - SENDPULSE_API_URL         Optional base URL (defaults to https://api.sendpulse.com)
 */

const API_URL = process.env.SENDPULSE_API_URL ?? "https://api.sendpulse.com";
const CLIENT_ID = process.env.SENDPULSE_CLIENT_ID;
const CLIENT_SECRET = process.env.SENDPULSE_CLIENT_SECRET;
const ADDRESSBOOK_ID = process.env.SENDPULSE_ADDRESSBOOK_ID;

export function isSendPulseConfigured(): boolean {
  return Boolean(CLIENT_ID && CLIENT_SECRET && ADDRESSBOOK_ID);
}

// Cached OAuth token shared across requests in this server instance.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  const response = await fetch(`${API_URL}/oauth/access_token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error(`SendPulse auth failed with status ${response.status}`);
  }

  const data = (await response.json()) as {
    access_token?: string;
    expires_in?: number;
  };

  if (!data.access_token) {
    throw new Error("SendPulse auth response did not include an access token.");
  }

  // Refresh a minute early to avoid using a token that expires mid-request.
  const ttlMs = (data.expires_in ?? 3600) * 1000;
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + ttlMs - 60_000,
  };

  return data.access_token;
}

async function authedFetch(
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const token = await getAccessToken();
  return fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
      Authorization: `Bearer ${token}`,
    },
  });
}

/** Returns true if the email already exists in the address book. */
export async function isSubscribed(email: string): Promise<boolean> {
  const response = await authedFetch(
    `/addressbooks/${ADDRESSBOOK_ID}/emails/${encodeURIComponent(email)}`,
  );

  // SendPulse returns 404 (and an error body) when the email is not in the book.
  if (response.status === 404) {
    return false;
  }

  if (!response.ok) {
    throw new Error(`SendPulse lookup failed with status ${response.status}`);
  }

  const data = (await response.json()) as { email?: string } | null;
  return Boolean(data?.email);
}

/** Adds a contact to the address book. Stored variables ride along as fields. */
export async function addSubscriber(params: {
  email: string;
  name: string;
  role: string;
}): Promise<void> {
  const response = await authedFetch(`/addressbooks/${ADDRESSBOOK_ID}/emails`, {
    method: "POST",
    body: JSON.stringify({
      emails: [
        {
          email: params.email,
          variables: { name: params.name, role: params.role },
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`SendPulse add failed with status ${response.status}`);
  }

  const data = (await response.json()) as { result?: boolean };
  if (data.result !== true) {
    throw new Error("SendPulse did not confirm the contact was added.");
  }
}
