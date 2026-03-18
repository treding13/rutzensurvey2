import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Compass, MapPinned, FileText, Mountain } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"

const coreServices = [
  {
    title: "Boundary Survey",
    description:
      "Boundary surveys are the most common type of surveys. Most often, a standard boundary survey depicts a property and includes an accurate location of the existing property lines, exterior lot corners, parcel acreage, improvements and encroachments.",
    href: "/services/boundary-survey",
    icon: MapPinned,
  },
  {
    title: "Minor Land Division",
    description:
      "Minor Land divisions are typically handled with the preparation of a Certified Survey Map (CSM). The purpose can vary but may include dividing land for a sale or exchange, the creation of new lots, adding or reconfiguring a lot and clarifying legal descriptions.",
    href: "/services/minor-land-division",
    icon: Compass,
  },
  {
    title: "ALTA/NSPS Land Title",
    description:
      "ALTA/NSPS Land Title Surveys are typically required in real estate transactions involving commercial and development properties and include specific NSPS requirements and minimum standards.",
    href: "/services/alta-nsps-land-title",
    icon: FileText,
  },
  {
    title: "Topographic",
    description:
      "Topographic surveys are most often utilized by design professionals as a basis for site planning, architecture, engineering, landscaping and other uses.",
    href: "/services/topographic",
    icon: Mountain,
  },
]

const additionalServices = [
  "PLSS Remonumentation and Maintenance",
  "Right of Way Platting",
  "Utility As-builts",
  "Utility & Ingress-Egress Easements",
  "Site Planning",
  "Drafting Services",
  "Civil Design Plan Development",
  "Flood Certificate",
]

export const metadata: Metadata = {
  title: "Land Surveying Services",
  description:
    "Rutzen Survey Services has extensive experience in all areas of land surveying throughout Wisconsin.",
}

export default function Page() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Project Description
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Land Surveying
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Rutzen Survey Services has extensive experience in all areas of
                Land Surveying. We serve the entire great state of Wisconsin and
                will gladly travel statewide.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We consistently perform work in Marathon, Portage, Lincoln,
                Langlade, Shawano, Waupaca, Wood, Clark, Taylor, and Adams
                counties.
              </p>
              <div className="mt-8">
                <Button className="h-12 px-6 text-base font-semibold" asChild>
                  <Link href="/contact">Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/rutzen-banner-5.jpg"
                alt="Land surveying field operations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">Types of Land Surveying</h2>
            <p className="mt-2 text-muted-foreground">
              Select a service below to view details.
            </p>
          </section>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreServices.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5">
                  <Button variant="outline" className="h-11 px-5 text-sm font-semibold" asChild>
                    <Link href={service.href}>Read More</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground">Additional Services</h2>
            <p className="mt-3 text-muted-foreground">
              In addition to the items listed above, we also routinely provide:
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalServices.map((item) => (
                <div key={item} className="rounded-lg bg-secondary/60 p-4 text-sm text-foreground">
                  {item}
                </div>
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


