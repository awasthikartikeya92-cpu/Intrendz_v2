import Link from 'next/link'

const serviceLinks = [
  'Growth Strategy',
  'Performance Marketing',
  'SEO & Organic',
  'Content & Brand',
  'Fractional CMO',
]

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'How We Work', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
]

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.07] px-6 py-16 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-[24px] font-semibold text-white tracking-tight mb-4">
            Intrendz<span className="text-white/35">Media</span>
          </p>
          <p className="text-[13px] font-light text-white/35 leading-[1.8] max-w-[280px] mb-8">
            A boutique, senior-led digital marketing agency driving measurable
            revenue growth for B2B and enterprise brands across North America.
          </p>
          <Link
            href="mailto:contact@intrendzmedia.com"
            className="text-[12px] font-normal text-white/50 hover:text-white transition-colors"
          >
            contact@intrendzmedia.com
          </Link>
        </div>

        {/* Services */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  href="#services"
                  className="text-[14px] font-light text-white/45 hover:text-white transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
            Company
          </p>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[14px] font-light text-white/45 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/25 mb-5">
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="mailto:contact@intrendzmedia.com"
                className="text-[14px] font-light text-white/45 hover:text-white transition-colors"
              >
                contact@intrendzmedia.com
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-[14px] font-light text-white/45 hover:text-white transition-colors"
              >
                Book a Strategy Call
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07] pt-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-[11px] text-white/20">
          © 2026 Intrendz Media. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-[11px] text-white/20 hover:text-white/50 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
