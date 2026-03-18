"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "/#about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

const serviceNavigation = [
  { name: "Land Surveying", href: "/services/land-surveying" },
  { name: "Mapping", href: "/services/mapping" },
  { name: "Consulting", href: "/services/consulting" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-card/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/rutzen-logo-white.png"
              alt="Rutzen Survey Services"
              width={282}
              height={113}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          <div className="relative group">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-card hover:text-accent transition-colors"
            >
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="invisible absolute left-0 top-full mt-2 w-56 rounded-lg border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {serviceNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-card hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href="tel:+17158910735"
            className="flex items-center gap-2 text-sm font-medium text-card/80 hover:text-card transition-colors"
          >
            <Phone className="h-4 w-4" />
            (715) 891-0735
          </a>
          <Button asChild>
            <Link href="/contact">Free Quote</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-foreground border-b border-card/20">
          <div className="space-y-1 px-6 pb-4">
            <Link
              href="/services"
              className="block py-2 text-base font-medium text-card hover:text-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div className="pl-4 pb-2">
              {serviceNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-1.5 text-sm font-medium text-card/80 hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-card hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+17158910735"
              className="flex items-center gap-2 py-2 text-base font-medium text-card/80"
            >
              <Phone className="h-4 w-4" />
              (715) 891-0735
            </a>
            <Button asChild className="w-full mt-2">
              <Link href="/contact">Free Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
