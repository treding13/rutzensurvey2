import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Land Surveyor in Central Wisconsin | Rutzen Survey Services",
  description:
    "Rutzen Survey Services provides professional land surveying in central Wisconsin, including Wausau, Stevens Point, Wisconsin Rapids, Merrill, and surrounding areas.",
  keywords: [
    "land surveyor central wisconsin",
    "land surveyor wausau wi",
    "land surveyor stevens point wi",
    "boundary survey central wisconsin",
    "property survey wisconsin",
  ],
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
