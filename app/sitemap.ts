import type { MetadataRoute } from "next"
import { locations } from "@/lib/locations"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/contact",
    "/services",
    "/services/land-surveying",
    "/services/boundary-survey",
    "/services/minor-land-division",
    "/services/alta-nsps-land-title",
    "/services/topographic",
    "/services/consulting",
    "/services/mapping",
    "/testimonials",
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))

  const locationEntries: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${SITE_URL}/locations/land-surveyor-${location.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticEntries, ...locationEntries]
}
