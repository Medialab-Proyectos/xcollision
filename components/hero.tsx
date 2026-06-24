import Image from "next/image"
import { Star, Phone, CalendarCheck, Check } from "lucide-react"
import { SITE } from "@/lib/site"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-shop.png"
        alt="Pristine vehicle inside the Xtreme Collision auto body repair facility"
        fill
        priority
        className="-z-10 object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 md:py-32 lg:py-40">
        <div className="flex items-center gap-1" aria-label="Rated 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-accent text-accent" aria-hidden="true" />
          ))}
        </div>

        <h1 className="max-w-3xl font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
          5-Star Collision Repair in North Texas
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Factory-trained technicians, a lifetime limited warranty, and we work with{" "}
          <span className="font-semibold text-accent">ALL major insurance companies.</span> Serving {SITE.areas}.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#estimate"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Schedule An Appointment
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-4 font-heading text-base font-semibold uppercase tracking-wide text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-primary-foreground/80">
          {["Free, no-obligation estimate", "Lifetime limited warranty", "Rental car coordination"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  )
}
