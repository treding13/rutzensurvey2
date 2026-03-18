import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

const testimonials = [
  {
    quote:
      "Had a somewhat complicated project for Tim to tackle. His expertise and professional relationships with county authorities moved the project forward ahead of schedule. Excellent experience.",
    location: "Marathon, WI",
  },
  {
    quote:
      'Tim did a very professional job and was willing to go the extra "mile" to help us define/locate our property boundaries, even in very wooded areas. We recommend him highly!',
    location: "Knowlton, WI",
  },
  {
    quote:
      "Excellent customer service, was able to respond in a very timely fashion to allow construction to begin on time, good cost value to amount of work required and very professional at all times. Highly Recommend",
    location: "Stevens Point, WI",
  },
  {
    quote:
      "Awesome level of service! Quick to respond and got the job done faster than expected, I could not have asked for a better experience!",
    location: "Stevens Point, WI",
  },
  {
    quote:
      "Tim was great! He was knowledgeable, efficient, and easy to work with. Highly recommend....",
    location: "Merrill, WI",
  },
  {
    quote:
      "Rutzen Survey Service did a survey for us. Tim was great answered all our questions that we had. He got back to us immediately and was there when he made the appointment with us. He was easy to work with and very knowledgeable about doing the survey. Would definitely have Tim at Rutzen Survey Service do another survey for us and would highly recommend him.",
    location: "Dorchester, WI",
  },
  {
    quote:
      "We contacted Tim to subdivide our property. He was prompt, very professional, and went above and beyond to get all issues addressed and completed. He worked with Portage County and Plover personnel to answer all questions. We highly recommend Tim.",
    location: "Stevens Point, WI",
  },
]

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Read customer testimonials from Rutzen Survey Services clients across Wisconsin.",
  keywords: [
    "land surveyor reviews wisconsin",
    "customer testimonials land surveying",
    "rutzen survey reviews",
    "land survey company central wisconsin",
  ],
  alternates: {
    canonical: "/testimonials",
  },
}

export default function TestimonialsPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              Customer Testimonials
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What Clients Are Saying
            </h1>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="rounded-xl border border-border bg-card p-6">
                <p className="text-muted-foreground leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  - {testimonial.location}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}


