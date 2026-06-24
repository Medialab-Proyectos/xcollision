import { ShieldCheck } from "lucide-react"

const CERTS = [
  "I-CAR Gold Class",
  "ASE Certified",
  "Infiniti Certified",
  "Honda / Acura Certified",
  "GM Certified",
  "Ford Authorized",
]

export function TrustStrip() {
  return (
    <section aria-label="Certifications" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Manufacturer Certified &amp; Industry Trained
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {CERTS.map((cert) => (
            <li
              key={cert}
              className="flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
