import {
  CloudHail,
  SprayCan,
  FileCheck2,
  Frame,
  Boxes,
  ShieldAlert,
  Ruler,
  Cable,
  Cog,
  Car,
  Palette,
} from "lucide-react"

const SERVICES = [
  {
    icon: CloudHail,
    title: "Hail Damage & Paintless Dent Repair",
    desc: "From minor dings to extensive hail damage, we restore your vehicle to its original condition using paintless dent repair.",
  },
  {
    icon: SprayCan,
    title: "Dents & Scratches Repair",
    desc: "Comprehensive dent and scratch repair that erases all traces of dings and scratches.",
  },
  {
    icon: FileCheck2,
    title: "Insurance Claims Assistance",
    desc: "We work with ALL major insurance companies and fight to return your vehicle to its pre-accident condition.",
  },
  {
    icon: Frame,
    title: "Auto Frame Repair",
    desc: "Frame straightening machines paired with industry-leading certified technicians for precise results.",
  },
  {
    icon: Boxes,
    title: "Auto Unibody Repair",
    desc: "Expert unibody repair that restores structural integrity and the original glory of your vehicle.",
  },
  {
    icon: ShieldAlert,
    title: "Airbag Services & Repair",
    desc: "Your airbag is a safety system — our certified technicians make sure it works when you need it most.",
  },
  {
    icon: Ruler,
    title: "Computerized Frame & Unibody Measuring",
    desc: "Our computerized frame straightening system ensures your vehicle's frame is properly aligned.",
  },
  {
    icon: Cable,
    title: "Electrical Wiring Repair",
    desc: "Dead battery? Misfiring starter or alternator? We handle all of your auto electrical repair needs.",
  },
  {
    icon: Cog,
    title: "Steering & Suspension Repair",
    desc: "Accurate steering response and a well-maintained suspension keep your wheels planted firmly on the road.",
  },
  {
    icon: Car,
    title: "Rental Car Scheduling",
    desc: "We arrange a rental car through our partnerships while we repair your vehicle.",
  },
  {
    icon: Palette,
    title: "Sherwin Williams Certified Color Matching",
    desc: "Certified color matching for a flawless, factory-perfect finish on every repair.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-primary text-balance sm:text-4xl">
            Collision Repair Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold uppercase tracking-tight text-primary">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
