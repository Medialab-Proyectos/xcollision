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

export default function Page() {
  return (
    <>
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
