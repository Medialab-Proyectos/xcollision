import Image from "next/image"
import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    title: "Body & paintwork",
    quote: "Work was excellent on a rear bumper paint job for a mint E39.",
  },
  {
    title: "F-150 repair",
    quote: "They did an awesome job on an F-150 and helped through the full process.",
  },
  {
    title: "GM owner experience",
    quote: "The repair followed GM standards, used OEM parts, and the process was smooth.",
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            5-Star Google Reviews 2025
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl"
          >
            North Texas Trusts Xtreme Collision
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <Image
              src="/images/xtreme-collision-repairs.png"
              alt="Xtreme Collision Google reviews profile shown on a phone"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
            {REVIEWS.map(({ title, quote }) => (
              <figure
                key={title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
                <blockquote className="flex-1 leading-relaxed text-foreground">
                  {`"${quote}"`}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-accent">
                    5
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-primary">{title}</span>
                    <span className="block text-sm text-muted-foreground">Google Review 2025</span>
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Google
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
