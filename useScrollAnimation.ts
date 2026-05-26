'use client'

const pills = [
  'Senior-Led Execution',
  'AI-Enabled Delivery',
  'Full-Funnel Strategy',
  'Demand Generation',
  'B2B Pipeline Growth',
  'Fractional CMO',
  'Performance Marketing',
  'Revenue Attribution',
  'Enterprise SEO',
  'Marketing Operations',
]

export default function TrustBar() {
  // Duplicate for seamless loop
  const doubled = [...pills, ...pills]

  return (
    <div className="bg-cream-dark border-y border-black/10 py-4 overflow-hidden">
      <div className="flex items-center gap-12">
        <span className="shrink-0 pl-8 lg:pl-12 text-[10px] font-medium tracking-[0.14em] uppercase text-ink-light whitespace-nowrap">
          Trusted Expertise In
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((pill, i) => (
              <span
                key={i}
                className="inline-flex items-center shrink-0 mr-3 text-[11px] font-normal text-ink-mid bg-cream border border-black/10 px-4 py-1.5 whitespace-nowrap"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
