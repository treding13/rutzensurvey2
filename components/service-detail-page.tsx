import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"
import { type Service } from "@/lib/services"

type ServiceDetailPageProps = {
  service: Service
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
                Service Detail
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                {service.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="h-12 px-6 text-base font-semibold" asChild>
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button variant="outline" className="h-12 px-6 text-base font-semibold" asChild>
                  <Link href="/services">All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {service.intro.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.detailSections.map((section) => (
                  <article key={section.title} className="rounded-xl border border-border bg-card p-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-xl border border-border bg-card p-6 h-fit">
              <h2 className="text-lg font-semibold text-foreground">
                Related Capabilities
              </h2>
              <ul className="mt-4 space-y-2">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-muted-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
