const STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "15,000+", label: "Vehicles Restored" },
  { value: "5.0", label: "Average Star Rating" },
  { value: "100%", label: "Major Insurers Accepted" },
]

export function StatsBar() {
  return (
    <section aria-label="Xtreme Collision by the numbers" className="bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-10 lg:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center px-4 py-2 text-center">
            <span className="font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              {value}
            </span>
            <span className="mt-1 text-sm font-medium leading-snug text-primary-foreground/80">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
