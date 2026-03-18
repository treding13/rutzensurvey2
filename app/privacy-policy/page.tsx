import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Rutzen Survey Services privacy policy covering how contact and website data is collected and used.",
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: March 18, 2026
          </p>

          <div className="mt-10 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Rutzen Survey Services (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
                This Privacy Policy explains what information we collect, how we use it,
                and the choices you have.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We may collect information you submit through our contact and quote forms,
                including your name, phone number, email address, property details, and
                project information. We may also collect limited technical information such
                as browser type and basic usage analytics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We use your information to respond to inquiries, provide quotes, communicate
                about services, improve website performance, and operate our business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Information Sharing</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share information with
                trusted service providers who help us operate our business, or when required
                by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Data Security</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We use reasonable administrative and technical safeguards to protect your
                information. No method of transmission or storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">Your Choices</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                You may request updates or deletion of your personal information by contacting
                us directly.
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
