import Image from "next/image"
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Image
            src="/images/xtreme-logo.png"
            alt={SITE.name}
            width={170}
            height={68}
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            5-star auto body &amp; collision repair serving {SITE.areas} and surrounding areas.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SITE.socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-primary-foreground/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {name}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {SITE.address}
            </span>
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-heading text-lg font-semibold uppercase tracking-tight">
            <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
            Business Hours
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm">
            {SITE.hours.map(({ day, time }) => (
              <li key={day} className="flex justify-between gap-4 text-primary-foreground/80">
                <span className="font-medium text-primary-foreground">{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative mb-5 aspect-[3/2] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-primary-foreground/15">
            <Image
              src="/images/ChatGPT Image Jul 1, 2026, 03_49_35 PM.png"
              alt={`${SITE.name} auto body and collision repair shop location in ${SITE.city}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <h3 className="font-heading text-lg font-semibold uppercase tracking-tight">
            Ready to get started?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Get your free estimate today and let our certified team get you back on the road.
          </p>
          <a
            href="#estimate"
            className="mt-5 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Schedule An Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60">
          &copy; {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
