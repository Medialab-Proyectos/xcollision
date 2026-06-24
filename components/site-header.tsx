import Image from "next/image"
import { Phone } from "lucide-react"
import { CallBar } from "@/components/call-bar"
import { SITE } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <CallBar />
      <div className="border-b border-border/70 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur supports-[backdrop-filter]:bg-white/88">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a
            href="#top"
            className="rounded-2xl bg-white px-3 py-2 shadow-sm ring-1 ring-border/70 transition-transform hover:scale-[1.01]"
            aria-label={SITE.name}
          >
            <Image
              src="/images/xtreme-logo.png"
              alt={SITE.name}
              width={176}
              height={70}
              priority
              className="h-14 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <a
              href="#services"
              className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
            >
              Services
            </a>
            <a
              href="#insurance"
              className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
            >
              Insurance
            </a>
            <a
              href="#why-us"
              className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
            >
              Why Us
            </a>
            <a
              href="#estimate"
              className="font-heading text-base font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-accent"
            >
              Free Estimate
            </a>
          </nav>

          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-accent-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{SITE.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </div>
    </header>
  )
}
