"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Contact Us Today
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you&apos;re looking for more information about the services we offer, or
              you would like a quote, call us or fill out the form below.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Office Location</h3>
                  <p className="text-muted-foreground text-sm">
                    4340 Pine Road<br />
                    Junction City, WI 54443
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a
                    href="tel:+17158910735"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    (715) 891-0735
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:tim@rutzensurvey.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    tim@rutzensurvey.com
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Office Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday<br />
                    Available by call or form submission
                  </p>
                </div>
              </div>
            </div>
            
            {/* Service Area */}
            <div className="mt-10 p-6 bg-secondary/50 rounded-xl">
              <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
              <p className="text-sm text-muted-foreground">
                Proudly serving the following areas in Wisconsin:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  { label: "Wausau, WI", slug: "wausau-wi" },
                  { label: "Merrill, WI", slug: "merrill-wi" },
                  { label: "Weston, WI", slug: "weston-wi" },
                  { label: "Mosinee, WI", slug: "mosinee-wi" },
                  { label: "Junction City, WI", slug: "junction-city-wi" },
                  { label: "Marshfield, WI", slug: "marshfield-wi" },
                  { label: "Wisconsin Rapids, WI", slug: "wisconsin-rapids-wi" },
                  { label: "Stevens Point, WI", slug: "stevens-point-wi" },
                  { label: "Plover, WI", slug: "plover-wi" },
                  { label: "Rosholt, WI", slug: "rosholt-wi" },
                ].map((town) => (
                  <Link
                    key={town.slug}
                    href={`/locations/land-surveyor-${town.slug}`}
                    className="rounded-md bg-background px-3 py-2 text-xs font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {town.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Thank You!</h3>
                <p className="mt-2 text-muted-foreground">
                  We&apos;ve received your request and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Telephone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    placeholder="Telephone"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="propertyAddress">Property Address *</Label>
                  <Textarea
                    id="propertyAddress"
                    name="propertyAddress"
                    required
                    rows={4}
                    placeholder="Property Address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="legalDescription">Legal Description (if known)</Label>
                  <Textarea
                    id="legalDescription"
                    name="legalDescription"
                    rows={4}
                    placeholder="Legal Description (if known)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workDescription">Description of Work Needed</Label>
                  <Textarea
                    id="workDescription"
                    name="workDescription"
                    rows={4}
                    placeholder="Description of Work Needed"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our team regarding 
                  your survey request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
