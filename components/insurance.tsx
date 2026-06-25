import Image from "next/image"
import { Check } from "lucide-react"

const INSURERS = [
  { name: "State Farm", className: "bg-red-600 text-white" },
  { name: "GEICO", className: "bg-blue-700 text-white" },
  { name: "Progressive", className: "bg-sky-600 text-white" },
  { name: "Allstate", className: "bg-blue-900 text-white" },
  { name: "USAA", className: "bg-slate-800 text-white" },
  { name: "Farmers", className: "bg-red-700 text-white" },
  { name: "Liberty Mutual", className: "bg-yellow-400 text-primary" },
  { name: "Nationwide", className: "bg-blue-800 text-white" },
] as const

const COVERED = [
  "We work directly with your insurance adjuster",
  "Free, no-obligation repair estimates",
  "Help filing and managing your claim",
  "OEM parts to restore factory standards",
  "Lifetime limited warranty on our repairs",
  "Rental car coordination during your repair",
]

export function Insurance() {
  return (
    <section id="insurance" className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/real-insurance-claims.jpg"
            alt="Insurance paperwork and vehicle keys for an auto collision claim"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Insurance Made Easy
          </p>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
            We Work With ALL Major Insurance Companies
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/80">
            Dealing with an insurance claim is stressful. Our team handles the paperwork and
            negotiates directly with your provider so your vehicle is returned to its
            pre-accident condition — the right way.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {COVERED.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
              A few of the providers we partner with
            </p>
            <div className="flex flex-wrap gap-2.5">
              {INSURERS.map(({ name, className }) => (
                <span
                  key={name}
                  className={`inline-flex h-8 items-center rounded px-3 font-heading text-xs font-bold uppercase tracking-wide shadow-sm ring-1 ring-white/20 ${className}`}
                >
                  {name}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs italic text-primary-foreground/60">
              Don&apos;t see yours? We work with all major carriers — just ask.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
