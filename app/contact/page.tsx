import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us & Free Quote",
  description:
    "Request a free quote from Rutzen Survey Services for land surveying, mapping, or consulting.",
  keywords: [
    "free land survey quote",
    "contact land surveyor wisconsin",
    "land surveyor junction city wi",
    "land surveyor central wisconsin",
  ],
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-12 md:pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

