import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "In addition to land surveying and mapping services, Rutzen Survey Services offers consulting services.",
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
                Consulting
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                In addition to land surveying and mapping services, we also offer
                consulting services. We welcome the chance to partner with firms
                that have short-term or long-term surveying or drafting needs.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                After 20+ years in the land surveying and engineering industry,
                Tim has become well versed in all aspects of surveying,
                planning, and design.
              </p>
              <div className="mt-8">
                <Button className="h-12 px-6 text-base font-semibold" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/rutzen-survey-img1.jpg"
                alt="Survey consulting field operations"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-semibold text-foreground">Surveying Consulting</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tim has consistently delivered high quality projects in both field
                and office settings and aims to bring that same level of quality
                and production to firms in need of support.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-2xl font-semibold text-foreground">Technology and Delivery</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Tim uses Trimble technology and Autodesk products and can deliver
                field duties, data collection, construction staking, drafting of
                survey maps, and civil plan development.
              </p>
            </article>
            <article className="rounded-xl border border-border bg-card p-6 md:col-span-2">
              <h2 className="text-2xl font-semibold text-foreground">Project Experience</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Experience includes local municipal road and site work, WisDOT
                plan development, right of way platting, AutoCAD C3D workflows,
                and MicroStation software delivery.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}


