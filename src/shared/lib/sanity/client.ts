import "server-only";

import { createClient, type QueryParams } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-04-30";
const token = process.env.SANITY_API_READ_TOKEN;

const sanityClient =
  projectId && dataset
    ? createClient({
        apiVersion,
        dataset,
        projectId,
        token,
        useCdn: !token,
      })
    : null;

export function isSanityConfigured() {
  return Boolean(sanityClient);
}

export async function fetchSanity<T>(
  query: string,
  params: QueryParams = {},
): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error("Sanity fetch failed.", error);
    return null;
  }
}
