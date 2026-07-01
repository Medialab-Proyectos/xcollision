import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { StatsBar } from "@/components/stats-bar"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { Insurance } from "@/components/insurance"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { AppointmentForm } from "@/components/appointment-form"
import { SiteFooter } from "@/components/site-footer"
import { StickyCallBanner } from "@/components/sticky-call-banner"
import { SITE } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  image: [
    `${SITE.url}/images/paintless-dent-repair-carrollton.webp`,
    `${SITE.url}/images/auto-body-panel-refinishing-carrollton.webp`,
    `${SITE.url}/images/collision-repair-technician-carrollton.webp`,
  ],
  logo: `${SITE.url}/images/xtreme-logo.png`,
  description: SITE.description,
  telephone: SITE.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2025 Midway Road, Suite E",
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.coordinates.latitude,
    longitude: SITE.coordinates.longitude,
  },
  areaServed: SITE.areas.split(", ").map((area) => ({
    "@type": "City",
    name: area,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  makesOffer: SITE.services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service,
      serviceType: service,
      areaServed: SITE.areas,
    },
  })),
  sameAs: SITE.socials.map(({ href }) => href),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="pb-16 md:pb-0">
        {/* Attention */}
        <Hero />
        <TrustStrip />
        <StatsBar />
        {/* Interest */}
        <Services />
        <HowItWorks />
        {/* Desire */}
        <Insurance />
        <WhyUs />
        <Testimonials />
        {/* Action */}
        <FinalCta />
        <AppointmentForm />
      </main>
      <SiteFooter />
      <StickyCallBanner />
    </>
  )
}
