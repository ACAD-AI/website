export const blogPostSummariesQuery = `
  *[_type == "post" && defined(slug.current)]
    | order(coalesce(publishedAt, _createdAt) desc) {
      "id": coalesce(_id, slug.current),
      title,
      "slug": slug.current,
      "excerpt": coalesce(excerpt, summary, seoDescription, ""),
      "description": coalesce(description, excerpt, summary, seoDescription, ""),
      "publishedAt": coalesce(publishedAt, _createdAt),
      "readingTime": coalesce(readingTime, estimatedReadingTime, "5 min read"),
      "coverImage": {
        "src": coverImage.asset->url,
        "alt": coalesce(coverImage.alt, title),
        "width": coalesce(coverImage.asset->metadata.dimensions.width, 1440),
        "height": coalesce(coverImage.asset->metadata.dimensions.height, 960)
      }
    }
`;

export const blogPostBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    "id": coalesce(_id, slug.current),
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, summary, seoDescription, ""),
    "description": coalesce(description, excerpt, summary, seoDescription, ""),
    "publishedAt": coalesce(publishedAt, _createdAt),
    "readingTime": coalesce(readingTime, estimatedReadingTime, "5 min read"),
    "author": coalesce(author->name, "The Acad AI Team"),
    body,
    "coverImage": {
      "src": coverImage.asset->url,
      "alt": coalesce(coverImage.alt, title),
      "width": coalesce(coverImage.asset->metadata.dimensions.width, 1440),
      "height": coalesce(coverImage.asset->metadata.dimensions.height, 960)
    }
  }
`;
