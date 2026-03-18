import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { LocationPage } from "@/components/location-page"
import { locations, locationsBySlug } from "@/lib/locations"
import { SITE_URL } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

function normalizeLocationSlug(slug: string) {
  return slug.replace(/^land-surveyor-/, "")
}

function hasSeoPrefix(slug: string) {
  return slug.startsWith("land-surveyor-")
}

function getSeoLocationPath(slug: string) {
  return `/locations/land-surveyor-${slug}`
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: `land-surveyor-${loc.slug}`,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locationsBySlug[normalizeLocationSlug(slug)]
  if (!location) return {}

  const canonicalUrl = `${SITE_URL}${getSeoLocationPath(location.slug)}`

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.topKeywords.join(", "),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: canonicalUrl,
      siteName: "Rutzen Survey Services",
      locale: "en_US",
      type: "website",
    },
  }
}

export default async function LocationSlugPage({ params }: Props) {
  const { slug } = await params
  const normalizedSlug = normalizeLocationSlug(slug)
  const location = locationsBySlug[normalizedSlug]

  if (!location) {
    notFound()
  }

  if (!hasSeoPrefix(slug)) {
    redirect(getSeoLocationPath(location.slug))
  }

  // JSON-LD structured data for LocalBusiness + FAQPage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://rutzensurvey.com/#business",
    name: "Rutzen Survey Services",
    description: location.metaDescription,
    telephone: "+17158910735",
    email: "tim@rutzensurvey.com",
    url: `${SITE_URL}${getSeoLocationPath(location.slug)}`,
    logo: `${SITE_URL}/images/rutzen-logo-white.png`,
    image: `${SITE_URL}/images/rutzen-home.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4340 Pine Road",
      addressLocality: "Junction City",
      addressRegion: "WI",
      postalCode: "54443",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.5917,
      longitude: -89.7584,
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: "Wisconsin",
      },
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Land Surveying Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boundary Survey" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Minor Land Division" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ALTA/NSPS Land Title Survey" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Topographic Survey" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consulting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mapping" } },
      ],
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocationPage location={location} />
    </>
  )
}
