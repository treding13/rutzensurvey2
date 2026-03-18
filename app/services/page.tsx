import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

const serviceDescriptions: Record<string, string> = {
  "boundary-survey":
    "Boundary surveys are the most common type of surveys. Most often, a standard boundary survey depicts a property and includes an accurate location of the existing property lines, exterior lot corners, parcel acreage, improvements and encroachments.",
  "minor-land-division":
    "Minor Land divisions are typically handled with the preparation of a Certified Survey Map (CSM). The purpose can vary but may include dividing land for a sale or exchange, the creation of new lots, adding or reconfiguring a lot and clarifying legal descriptions.",
  "alta-nsps-land-title":
    "ALTA/NSPS Land Title Surveys are typically required in real estate transactions involving commercial and development properties and include specific NSPS requirements and minimum standards.",
  topographic:
    "Topographic surveys are most often utilized by design professionals as a basis for site planning, architecture, engineering, landscaping and other uses.",
  consulting:
    "After 20+ years of being entrenched in the land surveying and engineering industry, we have become well versed in all aspects of surveying, planning and design.",
  mapping:
    "With our wealth of experience in various CAD programs, ESRI ArcGIS and the fact that Tim Rutzen is a licensed surveyor that understands the manipulation of the data available on the web, the possibilities are endless.",
}

const otherServices = [
  "PLSS Remonumentation and Maintenance",
  "Right of Way Platting",
  "Utility As-builts",
  "Utility & Ingress-Egress Easements",
  "Site Planning",
  "Drafting Services",
  "Civil Design Plan Development",
  "Flood Certificate",
]

const reasons = [
  {
    title: "Quality",
    copy: "I feel passionate about quality and will always deliver reliable, consistent, and accurate survey services efficiently to each and every client.",
  },
  {
    title: "Ethical",
    copy: "I act in an honest, trustworthy, and respectful manner to fellow co-workers, clients, and everyone I encounter in the field or in public.",
  },
  {
    title: "Flexible",
    copy: "As client requirements and governmental rules and regulations evolve, I will adapt to meet your needs and expectations.",
  },
]

export const metadata: Metadata = {
  title: "Land Surveying Services",
  description:
    "At Rutzen Survey we offer a variety of land surveying services ranging from Boundary Survey to Topographic Survey.",
  keywords: [
    "land surveying services wisconsin",
    "boundary survey wisconsin",
    "minor land division wisconsin",
    "ALTA NSPS survey wisconsin",
    "topographic survey wisconsin",
    "land survey consulting wisconsin",
    "property mapping wisconsin",
  ],
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              Land Surveying Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Services Offered
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              At Rutzen Survey we offer a variety of land surveying services
              ranging from Boundary Survey to Topographic Survey. Scroll down
              to see a full list of all services we currently offer.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Land surveying has traditionally been defined as the science and
              art of determining relative positions of points above, on, or
              beneath the surface of the earth, or establishing such points.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.slug}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {serviceDescriptions[service.slug]}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.highlights.slice(0, 4).map((highlight) => (
                      <li key={highlight} className="text-sm text-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="h-11 px-5 text-sm font-semibold" asChild>
                      <Link href={`/services/${service.slug}`} className="gap-2">
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-foreground">Other Services</h2>
            <p className="mt-3 text-muted-foreground">
              In addition to the items listed above, we routinely provide the
              following services:
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((item) => (
                <div key={item} className="rounded-lg bg-secondary/60 p-4 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-foreground">Why Choose Us?</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {reason.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>

        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

