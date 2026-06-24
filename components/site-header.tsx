import Image from "next/image"
import { Phone } from "lucide-react"
import { CallBar } from "@/components/call-bar"
import { SITE } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <CallBar />
      <div className="border-b border-primary-foreground/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <a href="#top" className="flex items-center" aria-label={SITE.name}>
            <Image
              src="/images/xtreme-logo.png"
              alt={SITE.name}
              width={150}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <a href="#services" className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent">
              Services
            </a>
            <a href="#insurance" className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent">
              Insurance
            </a>
            <a href="#why-us" className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent">
              Why Us
            </a>
            <a href="#estimate" className="text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent">
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
