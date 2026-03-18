import { SITE_URL } from "@/lib/site"

export async function GET() {
  const content = `# Rutzen Survey Services

> Professional land surveying, consulting, and mapping services in central Wisconsin.

## Primary Pages
- Home: ${SITE_URL}/
- Contact: ${SITE_URL}/contact
- Services: ${SITE_URL}/services
- Testimonials: ${SITE_URL}/testimonials

## Service Pages
- Land Surveying: ${SITE_URL}/services/land-surveying
- Boundary Survey: ${SITE_URL}/services/boundary-survey
- Minor Land Division: ${SITE_URL}/services/minor-land-division
- ALTA/NSPS Land Title: ${SITE_URL}/services/alta-nsps-land-title
- Topographic: ${SITE_URL}/services/topographic
- Consulting: ${SITE_URL}/services/consulting
- Mapping: ${SITE_URL}/services/mapping

## Service Area
- Location pages are available under: ${SITE_URL}/locations/land-surveyor-{city-state}
`

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
