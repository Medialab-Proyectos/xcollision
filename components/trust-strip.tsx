import Image from "next/image"

const CERTIFICATIONS = [
  { name: "Ford Certified Collision Center", src: "/images/cert-ford.png" },
  { name: "Honda Acura ProFirst Certified Collision Center", src: "/images/cert-honda-acura.jpg" },
  { name: "Infiniti Certified Collision Center", src: "/images/cert-infiniti.jpg" },
  { name: "Kia Certified Collision Center", src: "/images/cert-kia.png" },
  { name: "Hyundai Certified Collision Center", src: "/images/cert-hyundai.png" },
  { name: "Nissan Certified Collision Repair", src: "/images/cert-nissan.png" },
  { name: "Subaru Certified Collision Center", src: "/images/cert-subaru.jpg" },
  { name: "Jeep Certified Collision Center", src: "/images/cert-jeep.png" },
] as const

const CERT_BADGES = [
  { name: "I-CAR", detail: "Gold Class", accent: "text-red-600" },
  { name: "ASE", detail: "Certified Techs", accent: "text-blue-700" },
] as const

const CAROUSEL_ITEMS = [...CERT_BADGES, ...CERTIFICATIONS]

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
              {"src" in item ? (
                <Image
                  src={item.src}
                  alt={item.name}
                  width={220}
                  height={92}
                  className="max-h-24 w-auto object-contain"
                />
              ) : (
                <span className={`font-heading text-4xl font-bold uppercase ${item.accent}`}>
                  {item.name}
                </span>
              )}
              {"detail" in item ? (
                <span className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.detail}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
