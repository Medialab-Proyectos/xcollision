import {
  siAcura,
  siChevrolet,
  siFord,
  siGeneralmotors,
  siHonda,
  siHyundai,
  siInfiniti,
  siJeep,
  siKia,
  siNissan,
  siSubaru,
  type SimpleIcon,
} from "simple-icons"

const BRAND_LOGOS = [
  { name: "Ford", detail: "Authorized", icon: siFord },
  { name: "General Motors", detail: "Certified", icon: siGeneralmotors },
  { name: "Chevrolet", detail: "OEM Standards", icon: siChevrolet },
  { name: "Honda", detail: "Certified", icon: siHonda },
  { name: "Acura", detail: "Certified", icon: siAcura },
  { name: "INFINITI", detail: "Certified Repair", icon: siInfiniti },
  { name: "Hyundai", detail: "Factory Trained", icon: siHyundai },
  { name: "Jeep", detail: "OEM Standards", icon: siJeep },
  { name: "Kia", detail: "Factory Trained", icon: siKia },
  { name: "Nissan", detail: "OEM Standards", icon: siNissan },
  { name: "Subaru", detail: "Factory Trained", icon: siSubaru },
] as const

const CERT_BADGES = [
  { name: "I-CAR", detail: "Gold Class", accent: "text-red-600" },
  { name: "ASE", detail: "Certified Techs", accent: "text-blue-700" },
] as const

const CAROUSEL_ITEMS = [...CERT_BADGES, ...BRAND_LOGOS]

function SimpleBrandLogo({ icon, className = "h-7 w-auto" }: { icon: SimpleIcon; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  )
}

export function TrustStrip() {
  return (
    <section aria-label="Manufacturer certifications" className="overflow-hidden border-b border-border bg-secondary py-9">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Manufacturer Certified &amp; Industry Trained
        </p>
      </div>

      <div className="brand-carousel relative">
        <div className="brand-carousel-track flex w-max gap-4">
          {[...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex h-32 w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-lg bg-white px-6 shadow-sm ring-1 ring-border sm:h-36 sm:w-64"
            >
              {"icon" in item ? (
                <SimpleBrandLogo icon={item.icon} className="h-14 w-auto max-w-40 sm:h-16 sm:max-w-44" />
              ) : (
                <span className={`font-heading text-4xl font-bold uppercase ${item.accent}`}>
                  {item.name}
                </span>
              )}
              <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
