import Link from 'next/link'

const serviceLinks = ['Growth Strategy','Performance Marketing','SEO & Organic','Content & Brand','Fractional CMO']
const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'How We Work', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0F0E0C', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '64px 48px 40px' }} className="footer-section">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '64px' }} className="footer-grid">
        <div style={{ gridColumn: 'span 1' }} className="footer-brand-col">
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '24px', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Intrendz<span style={{ color: 'rgba(255,255,255,0.3)' }}>Media</span>
          </p>
          <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.35)', lineHeight: 1.8, maxWidth: '280px', marginBottom: '28px' }}>
            A boutique, senior-led digital marketing agency driving measurable revenue growth for B2B and enterprise brands across North America.
          </p>
          <Link href="mailto:contact@intrendzmedia.com" style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
            contact@intrendzmedia.com
          </Link>
        </div>

        <div>
          <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Services</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {serviceLinks.map(s => (
              <li key={s}><Link href="#services" style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Company</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {companyLinks.map(l => (
              <li key={l.label}><Link href={l.href} style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '20px' }}>Contact</p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><Link href="mailto:contact@intrendzmedia.com" style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>contact@intrendzmedia.com</Link></li>
            <li><Link href="#contact" style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>Book a Strategy Call</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>© 2026 Intrendz Media. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="#" style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>

      <style>{`
        .footer-section { padding: 48px 24px 32px !important; }
        @media (min-width: 768px) { .footer-section { padding: 64px 48px 40px !important; } }
        .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        @media (min-width: 640px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; gap: 48px !important; } }
      `}</style>
    </footer>
  )
}
