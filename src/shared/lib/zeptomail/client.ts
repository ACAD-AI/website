/**
 * Minimal ZeptoMail client for transactional email.
 *
 * ZeptoMail is used (rather than our marketing sender) for the signup welcome
 * email so transactional volume can't get our main account throttled/blocked.
 *
 * Required environment variables:
 * - ZEPTOMAIL_TOKEN         "Send Mail" token (used as `Zoho-enczapikey <token>`)
 * - ZEPTOMAIL_FROM_ADDRESS  Verified sender address
 * - ZEPTOMAIL_FROM_NAME     Optional sender display name (defaults to "Anjola, Acad AI")
 * - ZEPTOMAIL_API_URL       Optional endpoint (defaults to global .com; use .eu for EU)
 */

import { SITE_URL, SOCIAL_LINKS } from "@/shared/config/seo";

const API_URL =
  process.env.ZEPTOMAIL_API_URL ?? "https://api.zeptomail.com/v1.1/email";
const TOKEN = process.env.ZEPTOMAIL_TOKEN;
const FROM_ADDRESS = process.env.ZEPTOMAIL_FROM_ADDRESS;
const FROM_NAME = process.env.ZEPTOMAIL_FROM_NAME ?? "Anjola, Acad AI";

export function isZeptoMailConfigured(): boolean {
  return Boolean(TOKEN && FROM_ADDRESS);
}

function firstNameOf(name: string): string {
  return name.trim().split(/\s+/)[0] ?? "";
}

function socialIcon(href: string, icon: string, alt: string): string {
  return `
    <a href="${href}" style="text-decoration: none; margin: 0 8px;">
      <img src="${SITE_URL}/icons/social/${icon}.png" alt="${alt}" width="24" height="24" style="display: inline-block; border: 0;" />
    </a>`;
}

function welcomeHtml(name: string): string {
  const firstName = firstNameOf(name);
  const greeting = firstName ? `Hey ${firstName},` : "Hey there,";

  return `
  <div style="margin: 0; padding: 0; background: #f4f6fb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #f4f6fb; padding: 32px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 16px; overflow: hidden; font-family: Arial, Helvetica, sans-serif; color: #141b34;">
            <tr>
              <td style="padding: 32px 40px 8px;">
                <img src="${SITE_URL}/images/email/acad-ai-logo.png" alt="Acad AI" width="120" height="29" style="display: block; border: 0;" />
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 40px 32px; font-size: 16px; line-height: 1.65; color: #141b34;">
                <p style="margin: 0 0 20px;">${greeting}</p>
                <p style="margin: 0 0 20px;">
                  Anjola here, founder of Acad AI. Thanks for subscribing to our newsletter!
                </p>
                <p style="margin: 0 0 20px;">
                  Every week, our team will share new insights on how Acad AI is reshaping
                  the educational landscape, plus practical tips for students, teachers, and
                  school admins alike.
                </p>
                <p style="margin: 0 0 20px;">
                  No spam, no fluff… just valuable updates straight to your inbox.
                </p>
                <p style="margin: 0 0 24px;">Stay tuned for our next edition!</p>
                <p style="margin: 0 0 4px;">With love,</p>
                <p style="margin: 0; font-weight: 600;">Anjola, Founder @ Acad AI</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 40px 32px; border-top: 1px solid #e3e8f5;" align="center">
                <p style="margin: 0 0 12px; font-size: 13px; color: #5b6b8c;">Follow us on social media</p>
                <p style="margin: 0;">
                  ${socialIcon(SOCIAL_LINKS.linkedin, "linkedin", "LinkedIn")}
                  ${socialIcon(SOCIAL_LINKS.youtube, "youtube", "YouTube")}
                  ${socialIcon(SOCIAL_LINKS.tiktok, "tiktok", "TikTok")}
                </p>
                <p style="margin: 16px 0 0; font-size: 12px; color: #9aa6c8;">
                  © 2025 Acad Artificial Intellectuals, Ltd
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
  `;
}

/** Sends the welcome email to a new subscriber. Throws on a non-2xx response. */
export async function sendWelcomeEmail(params: {
  email: string;
  name: string;
}): Promise<void> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Zoho-enczapikey ${TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      from: { address: FROM_ADDRESS, name: FROM_NAME },
      to: [
        {
          email_address: { address: params.email, name: params.name },
        },
      ],
      subject: "You're In!",
      htmlbody: welcomeHtml(params.name),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `ZeptoMail send failed with status ${response.status}: ${detail}`,
    );
  }
}
