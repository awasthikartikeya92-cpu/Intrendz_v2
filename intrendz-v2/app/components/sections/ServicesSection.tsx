'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const svcs = [
  { icon: '→', name: 'Growth Strategy', desc: 'Data-backed go-to-market roadmaps tied directly to revenue objectives and 90-day execution milestones.' },
  { icon: '◈', name: 'Performance Marketing', desc: 'Paid media and demand gen across LinkedIn, Google, and programmatic — optimized for pipeline quality, not clicks.' },
  { icon: '↑', name: 'SEO & Organic Growth', desc: 'Technical authority-building and content pipelines engineered to dominate category keywords and capture intent.' },
  { icon: '✦', name: 'Content & Brand', desc: 'Thought leadership, executive brand-building, and editorial strategy that earns trust with buying committees.' },
  { icon: '⊕', name: 'Marketing Automation', desc: 'CRM integration, intelligent nurture sequences, and ops infrastructure that converts pipeline into revenue.' },
  { icon: '◎', name: 'Analytics & CRO', desc: 'Attribution modeling, funnel analytics, and conversion optimization that compounds performance over time.' },
  { icon: '⬚', name: 'Website & UX Design', desc: 'Conversion-architected digital experiences built to establish authority and turn visitors into qualified conversations.' },
  { icon: '◇', name: 'Fractional CMO', desc: 'Senior marketing leadership — strategic direction, team oversight, board-level reporting — without the full-time cost.' },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="services" style={{ background: '#0F0E0C', padding: '120px 48px' }} className="services-section">
      <div style={{ marginBottom: '72px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
          What We Do
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff' }}>
          Full-spectrum capabilities,<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.45)' }}>one unified system.</em>
        </h2>
      </div>

      <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)' }} className="svc-grid">
        {svcs.map((svc) => (
          <motion.div key={svc.name} variants={fadeUp} className="svc-card"
            style={{ padding: '40px 32px', borderRight: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s', cursor: 'default' }}>
            <div style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'rgba(255,255,255,0.45)', fontSize: '18px' }}>
              {svc.icon}
            </div>
            <p style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '12px', letterSpacing: '-0.01em' }}>{svc.name}</p>
            <p style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{svc.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .services-section { padding: 80px 24px; }
        @media (min-width: 768px) { .services-section { padding: 120px 48px; } }
        .svc-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 640px) { .svc-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(4,1fr) !important; } }
        .svc-card:hover { background: rgba(255,255,255,0.04) !important; }
      `}</style>
    </section>
  )
}
