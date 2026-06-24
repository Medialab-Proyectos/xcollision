import { PhoneCall, ClipboardList, Car } from "lucide-react"

const STEPS = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Contact Us",
    desc: "Call or request your free estimate online. We answer fast and walk you through your options — no obligation.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "We Handle the Claim",
    desc: "We inspect the damage, work directly with your insurance adjuster, and arrange a rental car so you're never stuck.",
  },
  {
    icon: Car,
    step: "03",
    title: "Drive Away Restored",
    desc: "Our factory-trained technicians return your vehicle to pre-accident condition, backed by our lifetime limited warranty.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Simple &amp; Stress-Free
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl">
            Getting Back on the Road in 3 Steps
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, step, title, desc }) => (
            <li
              key={step}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-6 font-heading text-5xl font-bold leading-none text-secondary"
              >
                {step}
              </span>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold uppercase tracking-tight text-primary">
                {title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
