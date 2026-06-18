import type { BlogPostSummary } from "./blog-types";

/**
 * Pulls posts from the Acad AI Substack RSS feed. Substack returns the full
 * archive (title, excerpt, link, author, date, cover image, body) so this is
 * the source of truth for the blog list. New posts appear automatically within
 * the revalidate window below.
 *
 * Override the feed with NEXT_PUBLIC_SUBSTACK_FEED_URL if the publication moves.
 */
const FEED_URL =
  process.env.NEXT_PUBLIC_SUBSTACK_FEED_URL ??
  "https://acadai.substack.com/feed";

const REVALIDATE_SECONDS = 3600; // re-fetch hourly so new posts sync

function stripCdata(value: string): string {
  return value
    .replace(/^\s*<!\[CDATA\[/, "")
    .replace(/\]\]>\s*$/, "")
    .trim();
}

function readTag(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"),
  );
  return match ? stripCdata(match[1]) : "";
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadingTime(html: string): string {
  const words = stripHtml(html).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function slugFromLink(link: string): string {
  // e.g. https://acadai.substack.com/p/how-to-study -> "how-to-study"
  const match = link.match(/\/p\/([^/?#]+)/);
  return match?.[1] ?? link.replace(/[^a-z0-9]+/gi, "-");
}

function parseItem(block: string): BlogPostSummary | null {
  const link = readTag(block, "link");
  const title = readTag(block, "title");

  if (!link || !title) {
    return null;
  }

  const description = stripHtml(readTag(block, "description"));
  const body = readTag(block, "content:encoded");
  const pubDate = readTag(block, "pubDate");
  const enclosure = block.match(/<enclosure[^>]*\surl="([^"]+)"/i)?.[1] ?? "";
  const slug = slugFromLink(link);

  const publishedAt = pubDate
    ? new Date(pubDate).toISOString()
    : new Date(0).toISOString();

  return {
    id: slug,
    slug,
    title,
    excerpt: description,
    description,
    publishedAt,
    readingTime: estimateReadingTime(body || description),
    coverImage: {
      src: enclosure,
      alt: title,
      width: 1440,
      height: 960,
    },
    externalUrl: link,
  };
}

export async function fetchSubstackPosts(): Promise<BlogPostSummary[]> {
  const response = await fetch(FEED_URL, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(`Substack feed responded with ${response.status}`);
  }

  const xml = await response.text();
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];

  return itemBlocks
    .map(parseItem)
    .filter((post): post is BlogPostSummary => post !== null);
}
