import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
