import { Phone, MapPin } from "lucide-react"
import { SITE } from "@/lib/site"

export function CallBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:text-sm">
        <a
          href={SITE.phoneHref}
          className="flex items-center gap-2 font-medium transition-colors hover:text-accent"
        >
          <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Call Us Today! {SITE.phone}</span>
        </a>
        <span className="flex items-center gap-2 whitespace-nowrap text-primary-foreground/80">
          <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          {SITE.address}
        </span>
      </div>
    </div>
  )
}
