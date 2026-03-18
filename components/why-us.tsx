import { CheckCircle, Clock, FileText, Headphones } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Timely Response",
    description: "Clients consistently note quick response times and dependable scheduling for project needs.",
  },
  {
    icon: FileText,
    title: "Broad Service Range",
    description: "From boundary and topographic surveys to mapping and consulting, services are tailored to each project.",
  },
  {
    icon: Headphones,
    title: "Direct Communication",
    description: "As a small owner-operated firm, clients receive one-on-one attention and clear project communication.",
  },
  {
    icon: CheckCircle,
    title: "Quality Driven",
    description: "Quality service is a core priority, with consistent focus on reliable and accurate survey delivery.",
  },
]

const testimonials = [
  {
    quote: "Had a somewhat complicated project for Tim to tackle. His expertise and professional relationships with county authorities moved the project forward ahead of schedule. Excellent experience.",
    author: "Client Review",
    location: "Marathon, WI",
  },
  {
    quote: "Excellent customer service, was able to respond in a very timely fashion to allow construction to begin on time, good cost value to amount of work required and very professional at all times. Highly recommend.",
    author: "Client Review",
    location: "Stevens Point, WI",
  },
  {
    quote: "Tim was great answered all our questions that we had. He got back to us immediately and was there when he made the appointment with us. He was easy to work with and very knowledgeable.",
    author: "Client Review",
    location: "Dorchester, WI",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Why Choose Us */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Clients Choose Rutzen Survey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Feedback from Wisconsin property owners and project teams.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-card rounded-xl p-6 border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
