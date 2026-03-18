import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[72vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rutzen-home.jpg"
          alt="Rutzen Survey field work in Wisconsin"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
            Quality Service Is Our Passion
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-card sm:text-5xl lg:text-6xl text-balance">
            Land Surveying, Consulting &amp; Mapping
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-card/90">
            We serve the entire state of Wisconsin and consistently perform work across
            central Wisconsin, including Marathon, Portage, Lincoln, Langlade, Shawano,
            Waupaca, Wood, Clark, Taylor, and Adams counties.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
              <Link href="/contact">Click for a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base font-semibold bg-card/10 border-card/30 text-card hover:bg-card/20 hover:text-card">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          <div className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-card/20">
            <MapPin className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <p className="text-2xl font-bold text-card">10</p>
              <p className="text-sm text-card/80">Core Counties Served</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-card/20">
            <Clock className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <p className="text-2xl font-bold text-card">20+</p>
              <p className="text-sm text-card/80">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-lg p-4 border border-card/20">
            <Award className="h-8 w-8 text-accent flex-shrink-0" />
            <div>
              <p className="text-2xl font-bold text-card">2018</p>
              <p className="text-sm text-card/80">Founded</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
