import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"
import { Button } from "@/components/ui/button"

const mapFeatures = [
  "Current color or black and white aerial background images",
  "1938 historical imagery",
  "Approximate boundary lines (or survey grade if a survey is performed)",
  "Planned construction",
  "Lakes, rivers, creeks",
  "Existing utility lines",
  "Contour elevation lines",
  "Fence lines",
  "Roads and trails",
  "Building",
  "Deer stands",
  "Deer travel corridors",
]

export const metadata: Metadata = {
  title: "Mapping Services",
  description:
    "Rutzen Survey Services is here to meet all your mapping needs large and small.",
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
                Mapping
              </h1>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Rutzen Survey Services is here to meet all your mapping needs,
                large and small. We encourage pushing the limits to create a
                visually exciting map while clearly depicting the details you need.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With experience in various CAD programs and ESRI ArcGIS, and with
                a licensed surveyor who understands data manipulation, the
                possibilities are extensive.
              </p>
              <div className="mt-8">
                <Button className="h-12 px-6 text-base font-semibold" asChild>
                  <Link href="/contact">Free Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/rutzen-mapping.jpg"
                alt="Custom mapping services"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">More About Mapping</h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Custom Detail</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Maps can be custom tailored to your required level of detail,
                  whether for residential landscaping, rural hunting properties,
                  trails, cabins, or other project goals.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Typical Map Sizes</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  11x17, 22x34, and 24x36. Larger formats available upon request.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-card p-6 md:col-span-2">
                <h3 className="text-lg font-semibold text-foreground">Available Features</h3>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {mapFeatures.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}


