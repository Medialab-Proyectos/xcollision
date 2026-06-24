import { Star, Quote } from "lucide-react"

const REVIEWS = [
  {
    name: "Maria G.",
    location: "Carrollton, TX",
    quote:
      "After a bad accident I was so stressed about insurance. Xtreme Collision handled everything with my adjuster and my car looks brand new. Couldn't recommend them more.",
  },
  {
    name: "James R.",
    location: "Plano, TX",
    quote:
      "Hail destroyed my hood and they fixed it like it never happened. Fast, professional, and they set me up with a rental the same day. Five stars all the way.",
  },
  {
    name: "Denise T.",
    location: "Addison, TX",
    quote:
      "The team kept me updated through the whole repair. The paint match is flawless and the lifetime warranty gave me real peace of mind. These folks know their craft.",
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
            Rated 5.0 by Our Customers
          </p>
          <h2
            id="reviews-heading"
            className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl"
          >
            North Texas Trusts Xtreme Collision
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map(({ name, location, quote }) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-accent" aria-hidden="true" />
              <blockquote className="flex-1 leading-relaxed text-foreground">
                {`"${quote}"`}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-accent">
                  {name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-primary">{name}</span>
                  <span className="block text-sm text-muted-foreground">{location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
