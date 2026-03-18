import Image from "next/image"
import { Users, Shield, Compass, TreePine } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Professional Expertise",
    description: "Tim Rutzen is a Professional Licensed Land Surveyor in Wisconsin with broad field and office experience.",
  },
  {
    icon: Compass,
    title: "Quality Focused",
    description: "We are passionate about quality and strive to deliver reliable, consistent, and accurate services.",
  },
  {
    icon: Users,
    title: "One-on-One Service",
    description: "As a small privately owned business, we emphasize personal attention and direct communication.",
  },
  {
    icon: TreePine,
    title: "Statewide Coverage",
    description: "We provide services throughout Wisconsin, with most projects centered in central Wisconsin communities.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/rutzen-about.jpg"
                alt="Rutzen Survey Services owner in the field"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg max-w-[200px] hidden sm:block">
              <p className="text-3xl font-bold">2018</p>
              <p className="text-sm opacity-90">Founded in</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              About Rutzen Survey Services
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Rutzen Survey Services, LLC was founded in 2018 and is a small privately
              owned and operated business located in central Wisconsin. We provide
              professional land surveying services throughout the state.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The majority of our work is performed in the central Wisconsin areas,
              including Wausau, Stevens Point, Marshfield, and Wisconsin Rapids. We
              build relationships with our clients by understanding their requirements
              and expectations.
            </p>
            
            {/* Values Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{value.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
