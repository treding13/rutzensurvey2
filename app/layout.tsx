import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Land Surveying in Central Wisconsin`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Licensed land surveying in central Wisconsin. Boundary surveys, ALTA/NSPS land title, topographic surveys, consulting, and mapping.',
  keywords: [
    'land surveyor central wisconsin',
    'land surveying wisconsin',
    'boundary survey wisconsin',
    'ALTA survey wisconsin',
    'topographic survey wisconsin',
    'land surveyor wausau wi',
    'land surveyor stevens point wi',
  ],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Land Surveying in Central Wisconsin`,
    description:
      'Professional land surveying services for central Wisconsin property owners, developers, and businesses.',
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Land Surveying in Central Wisconsin`,
    description:
      'Boundary, ALTA/NSPS, topographic, consulting, and mapping services in central Wisconsin.',
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: '/favicon-rutzen.png',
    shortcut: '/favicon-rutzen.png',
    apple: '/favicon-rutzen.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    telephone: '+17158910735',
    email: 'tim@rutzensurvey.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4340 Pine Road',
      addressLocality: 'Junction City',
      addressRegion: 'WI',
      postalCode: '54443',
      addressCountry: 'US',
    },
    areaServed: ['Central Wisconsin', 'Wisconsin'],
    serviceType: [
      'Boundary Survey',
      'Minor Land Division',
      'ALTA/NSPS Land Title Survey',
      'Topographic Survey',
      'Consulting',
      'Mapping',
    ],
  }

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
