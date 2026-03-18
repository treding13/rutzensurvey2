import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const mainServices = [
  {
    title: "Land Surveying",
    shortDescription:
      "Rutzen Survey Services has extensive experience in all areas of land surveying throughout Wisconsin.",
    image: "/images/rutzen-banner-5.jpg",
    highlights: [
      "Boundary Survey",
      "Minor Land Division",
      "ALTA/NSPS Land Title",
      "Topographic",
    ],
    href: "/services/land-surveying",
  },
  {
    title: "Mapping",
    shortDescription:
      "Custom mapping services with flexible detail levels, GIS/CAD workflows, and multiple output formats.",
    image: "/images/rutzen-mapping.jpg",
    highlights: [
      "Aerial and historical imagery",
      "Boundary and contour overlays",
      "Utility and water feature layers",
      "Large-format map outputs",
    ],
    href: "/services/mapping",
  },
  {
    title: "Consulting",
    shortDescription:
      "Surveying and drafting consulting support for short-term and long-term project needs.",
    image: "/images/rutzen-survey-img1.jpg",
    highlights: [
      "Field and office support",
      "Construction staking",
      "Civil plan development",
      "Municipal and WisDOT projects",
    ],
    href: "/services/consulting",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
            Our Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Professional Surveying Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Our three core service categories are Land Surveying, Mapping, and
            Consulting.
          </p>
        </div>
        
        <div className="mt-16 space-y-16">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col gap-8 lg:flex-row lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {service.highlights.slice(0, 4).map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="outline" asChild>
                    <Link href={service.href} className="gap-2">
                      Service Details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
