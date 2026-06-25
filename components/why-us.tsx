import Image from "next/image"
import { BadgeCheck, Wrench, Award } from "lucide-react"

const POINTS = [
  {
    icon: BadgeCheck,
    title: "Lifetime Limited Warranty",
    desc: "Every repair is backed by our lifetime limited warranty for total peace of mind.",
  },
  {
    icon: Wrench,
    title: "State-of-the-Art Facility",
    desc: "Modern equipment and computerized measuring deliver factory-standard results.",
  },
  {
    icon: Award,
    title: "Factory-Trained Technicians",
    desc: "Expert, certified technicians diagnose and repair your car, truck, or SUV the right way.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Why Xtreme Collision
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl">
            More Than an Auto Body Shop
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            We&apos;re a service that gets you back on the road safe and sound. Our expert auto
            body technicians repair your vehicle to factory standards — backed by certifications
            you can trust.
          </p>

          <div className="mt-8 space-y-6">
            {POINTS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-first aspect-[4/5] overflow-hidden rounded-2xl shadow-xl lg:order-last">
          <Image
            src="/images/real-auto-color-paint-match.jpg"
            alt="Technician checking auto paint color matching during collision repair"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
