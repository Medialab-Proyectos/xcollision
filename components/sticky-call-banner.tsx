import { Phone, CalendarCheck } from "lucide-react"
import { SITE } from "@/lib/site"

export function StickyCallBanner() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/15 bg-primary px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.25)] md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-accent-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <a
          href="#estimate"
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary-foreground"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Book
        </a>
      </div>
    </div>
  )
}
