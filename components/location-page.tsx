import Link from "next/link"
import { MapPin, Phone, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { type Location } from "@/lib/locations"

const serviceLinks = [
  {
    title: "Boundary Survey",
    href: "/services/boundary-survey",
    description:
      "Establish and document property lines, lot corners, and acreage using Wisconsin minimum survey standards.",
  },
  {
    title: "Minor Land Division",
    href: "/services/minor-land-division",
    description:
      "Divide land into up to four parcels with a Certified Survey Map (CSM) and county coordination.",
  },
  {
    title: "ALTA/NSPS Land Title",
    href: "/services/alta-nsps-land-title",
    description:
      "Due-diligence surveys for commercial real estate transactions with full ALTA/NSPS standard compliance.",
  },
  {
    title: "Topographic Survey",
    href: "/services/topographic",
    description:
      "Map natural and man-made features and elevation data for planning, architecture, and engineering projects.",
  },
  {
    title: "Consulting",
    href: "/services/consulting",
    description:
      "Short-term or long-term surveying and drafting support for firms needing experienced production help.",
  },
  {
    title: "Mapping",
    href: "/services/mapping",
    description:
      "Custom property maps with flexible detail levels, GIS/CAD workflows, and multiple output formats.",
  },
]

const whyUs = [
  "Licensed Wisconsin land surveyor with 20+ years of experience",
  "Deep familiarity with central Wisconsin county records & PLSS monuments",
  "Accurate, certified survey maps meeting Wisconsin's A-E 7 standards",
  "Transparent communication and free project quotes",
  "Locally owned — based right here in central Wisconsin",
]

type LocationPageProps = {
  location: Location
}

export function LocationPage({ location }: LocationPageProps) {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-foreground text-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-accent" />
              <p className="text-sm font-medium uppercase tracking-wider text-accent">
                Service Area — {location.county}
              </p>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              {location.h1}
            </h1>
            <p className="mt-5 text-lg text-card/85 leading-relaxed">
              {location.heroTagline}. Rutzen Survey Services is a licensed central Wisconsin land surveying
              firm based in Junction City — providing accurate, professional survey services to clients
              throughout {location.city} and {location.county}.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-14 px-8 text-base font-semibold bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
              >
                <a href="tel:+17158910735">
                  <Phone className="h-5 w-5 mr-2" />
                  (715) 891-0735
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-sm font-medium uppercase tracking-wider text-primary">
                Land Surveying in {location.city}, {location.state}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Your Trusted {location.city} Land Surveyor
              </h2>
              {location.introParas.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Sidebar — Why Us */}
            <aside className="rounded-2xl border border-border bg-card p-7 h-fit">
              <h2 className="text-lg font-semibold text-foreground mb-5">
                Why Choose Rutzen Survey?
              </h2>
              <ul className="space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-1">Based in Junction City, WI</p>
                <p className="text-xs text-muted-foreground">4340 Pine Road · Junction City, WI 54443</p>
                <a
                  href="tel:+17158910735"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" />
                  (715) 891-0735
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Land Surveying Services Available in {location.city}
            </h2>
            <p className="mt-4 text-muted-foreground">
              We provide a full range of professional surveying services to {location.city} residents,
              businesses, and developers throughout {location.county}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services" className="gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                About the Area
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-5">
                Serving {location.city} and {location.county}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{location.localContext}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Rutzen Survey Services is based in Junction City, WI — just down the road from{" "}
                {location.city}. Our proximity to the area means faster response times and a genuine
                understanding of local land characteristics, county records, and the communities we serve.
              </p>
            </div>

            <div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h3 className="font-semibold text-foreground mb-4">
                  Also Serving Nearby Communities
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {location.nearbyAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    We serve the entire state of Wisconsin and consistently perform work across
                    central Wisconsin, including Marathon, Portage, Lincoln, Wood, Clark, and
                    surrounding counties.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/20 p-7">
                <h3 className="font-semibold text-foreground mb-2">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Contact Rutzen Survey Services for a free quote on your {location.city} surveying project.
                  We typically respond the same business day.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/contact">Request a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Common Questions
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Land Surveying FAQs for {location.city}, WI
              </h2>
            </div>

            <div className="space-y-5">
              {location.faqs.map((faq, i) => (
                <article
                  key={i}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground text-base">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-foreground text-card p-7 text-center">
              <h3 className="text-lg font-bold mb-2">Have More Questions?</h3>
              <p className="text-card/80 text-sm mb-5">
                Our team is happy to answer any questions about land surveying in {location.city} or
                anywhere in central Wisconsin. Call us or submit a request and we&apos;ll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="h-11 px-6" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-11 px-6 bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card"
                  asChild
                >
                  <a href="tel:+17158910735">(715) 891-0735</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}
