import Link from "next/link"

const navigation = {
  services: [
    { name: "Land Surveying", href: "/services/land-surveying" },
    { name: "Mapping", href: "/services/mapping" },
    { name: "Consulting", href: "/services/consulting" },
    { name: "All Services", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <span className="text-xl font-bold">Rutzen Survey Services</span>
            <p className="mt-4 text-sm text-card/70 leading-relaxed">
              Professional land surveying, consulting, and mapping services for
              clients across Wisconsin.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-card/70 hover:text-card transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-card/70 hover:text-card transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm text-card/70">
              <p>4340 Pine Road<br />Junction City, WI 54443</p>
              <p>
                <a href="tel:+17158910735" className="hover:text-card transition-colors">
                  (715) 891-0735
                </a>
              </p>
              <p>
                <a href="mailto:tim@rutzensurvey.com" className="hover:text-card transition-colors">
                  tim@rutzensurvey.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-card/70">
              &copy; {new Date().getFullYear()} Rutzen Survey Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-card/70 hover:text-card transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
