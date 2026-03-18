import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Rutzen Survey Services terms governing use of this website and service inquiries.",
  alternates: {
    canonical: "/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 18, 2026
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                By using this website, you agree to these Terms of Service. If you do not
                agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Website Use</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You may use this website for lawful purposes only. You agree not to misuse
                the website or interfere with its normal operation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Service Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Information on this website is for general informational purposes and does
                not constitute a final survey scope, proposal, or legal opinion. Specific
                service terms are provided separately in project proposals and agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Quotes and Communications</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Quote requests submitted through the site do not create a contract.
                We may contact you to clarify project details and provide service options.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Website content, branding, and design are owned by Rutzen Survey Services
                or used with permission. You may not reproduce or distribute content without
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Rutzen Survey Services is not liable
                for indirect or consequential damages arising from use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may update these terms from time to time. Continued use of the website
                after changes are posted constitutes acceptance of those updates.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Rutzen Survey Services<br />
                4340 Pine Road, Junction City, WI 54443<br />
                Phone: (715) 891-0735<br />
                Email: tim@rutzensurvey.com
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
