export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  coverImage: BlogImage;
  /** External canonical URL (e.g. the Substack post). When set, cards link out. */
  externalUrl?: string;
}

export interface BlogPost extends BlogPostSummary {
  author: string;
  body: unknown[];
  fallbackParagraphs: string[];
}

export interface BlogPostNavigation {
  previous: BlogPostSummary | null;
  next: BlogPostSummary | null;
}
