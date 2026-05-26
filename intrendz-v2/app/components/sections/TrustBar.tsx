'use client'

const pills = [
  'Senior-Led Execution','AI-Enabled Delivery','Full-Funnel Strategy',
  'Demand Generation','B2B Pipeline Growth','Fractional CMO',
  'Performance Marketing','Revenue Attribution','Enterprise SEO','Marketing Operations',
]

export default function TrustBar() {
  const doubled = [...pills, ...pills]
  return (
    <div style={{ background: '#F2EFE8', borderTop: '1px solid rgba(15,14,12,0.1)', borderBottom: '1px solid rgba(15,14,12,0.1)', padding: '16px 0', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '48px' }}>
      <span style={{ flexShrink: 0, paddingLeft: '48px', fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7A7872', whiteSpace: 'nowrap' }}>
        Trusted Expertise In
      </span>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        <div className="animate-ticker" style={{ display: 'flex', whiteSpace: 'nowrap', gap: '12px' }}>
          {doubled.map((pill, i) => (
            <span key={i} style={{ display: 'inline-flex', flexShrink: 0, fontSize: '11px', fontWeight: 400, color: '#3A3831', background: '#FAF8F4', border: '1px solid rgba(15,14,12,0.1)', padding: '6px 16px', whiteSpace: 'nowrap' }}>
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
