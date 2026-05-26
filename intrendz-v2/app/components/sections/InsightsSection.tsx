'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Link from 'next/link'

const articles = [
  { category: 'B2B Strategy', title: 'The Modern B2B Buying Journey Has Changed. Has Your Marketing?', excerpt: "Decision-making units are larger, cycles are longer, and digital touchpoints have multiplied. The companies winning deals aren’t running more ads — they’re engineering buying confidence at every stage of the committee journey.", readTime: '6 min read', featured: true },
  { category: 'AI & Marketing', title: 'How AI Is Reshaping Performance Marketing at Scale', excerpt: 'From predictive bidding to dynamic creative, AI-enabled workflows are delivering compounding efficiency gains for marketers who know how to deploy them.', readTime: '8 min read', featured: false },
  { category: 'Revenue Growth', title: 'Why Siloed Channels Stall Revenue — and the Fix', excerpt: 'When demand gen, SEO, and CRO operate in isolation, pipeline plateaus. Here is the integrated framework that breaks through.', readTime: '5 min read', featured: false },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }

export default function InsightsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="insights" style={{ borderTop: '1px solid rgba(15,14,12,0.1)', padding: '120px 48px' }} className="insights-section">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', marginBottom: '56px' }}>
        <div>
          <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A3A5C', marginBottom: '20px' }}>
            <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A3A5C' }} />
            Thought Leadership
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0F0E0C' }}>
            Perspectives for<br /><em style={{ fontStyle: 'italic', color: '#1A3A5C' }}>marketing leaders.</em>
          </h2>
        </div>
        <Link href="#insights" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F0E0C', borderBottom: '1px solid #0F0E0C', paddingBottom: '2px', textDecoration: 'none', transition: 'color 0.2s' }}>
          View All Articles →
        </Link>
      </div>

      <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', border: '1px solid rgba(15,14,12,0.1)' }} className="insights-grid">
        {articles.map((a) => (
          <motion.article key={a.title} variants={fadeUp} className="insight-card"
            style={{ padding: '48px 40px', borderRight: '1px solid rgba(15,14,12,0.1)', transition: 'background 0.2s', cursor: 'default' }}>
            <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1A3A5C', marginBottom: '20px' }}>{a.category}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: a.featured ? '28px' : '20px', fontWeight: 500, lineHeight: 1.25, letterSpacing: '-0.01em', color: '#0F0E0C', marginBottom: '16px' }}>{a.title}</h3>
            <p style={{ fontSize: '13px', fontWeight: 300, color: '#3A3831', lineHeight: 1.75, marginBottom: '28px' }}>{a.excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href="#" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F0E0C', borderBottom: '1px solid #0F0E0C', paddingBottom: '2px', textDecoration: 'none' }}>Read Article →</Link>
              <span style={{ fontSize: '11px', color: '#7A7872' }}>{a.readTime}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <style>{`
        .insights-section { padding: 80px 24px; }
        @media (min-width: 768px) { .insights-section { padding: 120px 48px; } }
        .insights-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .insights-grid { grid-template-columns: 2fr 1fr 1fr !important; } }
        .insight-card:last-child { border-right: none !important; }
        .insight-card:hover { background: #F2EFE8 !important; }
      `}</style>
    </section>
  )
}
