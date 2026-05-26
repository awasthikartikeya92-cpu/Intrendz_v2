'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const steps = [
  { num: '01', name: 'Discover', desc: 'Deep audit of your business, buyers, competitors, and growth blockers' },
  { num: '02', name: 'Strategize', desc: 'Clear, prioritized roadmap with defined KPIs, channels, and a 90-day plan' },
  { num: '03', name: 'Execute', desc: 'Senior-led campaigns, content, creative, and tech — all in parallel' },
  { num: '04', name: 'Optimize', desc: 'Continuous data-driven iteration to improve ROI and accelerate results' },
  { num: '05', name: 'Scale', desc: 'Expand what works — new channels, wider audiences, multiplied revenue' },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" style={{ borderTop: '1px solid rgba(15,14,12,0.1)', padding: '120px 48px' }} className="process-section">
      <div style={{ marginBottom: '80px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A3A5C', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A3A5C' }} />
          How We Work
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0F0E0C' }}>
          A disciplined path<br /><em style={{ fontStyle: 'italic', color: '#1A3A5C' }}>to compounding growth.</em>
        </h2>
      </div>

      <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)' }} className="steps-grid">
        <div className="connector-line" style={{ position: 'absolute', top: '31px', left: '10%', right: '10%', height: '1px', background: 'rgba(15,14,12,0.1)', zIndex: 0 }} />
        {steps.map((step) => (
          <motion.div key={step.num} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 16px' }} className="step-item">
            <div className="step-dot" style={{ position: 'relative', zIndex: 1, width: '64px', height: '64px', border: '1px solid rgba(15,14,12,0.12)', background: '#FAF8F4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 400, color: '#7A7872', transition: 'all 0.3s', cursor: 'default' }}>
              {step.num}
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: '#0F0E0C', marginBottom: '8px', letterSpacing: '-0.01em' }}>{step.name}</p>
            <p style={{ fontSize: '12px', fontWeight: 300, color: '#7A7872', lineHeight: 1.75, maxWidth: '160px' }}>{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .process-section { padding: 80px 24px; }
        @media (min-width: 768px) { .process-section { padding: 120px 48px; } }
        .steps-grid { grid-template-columns: 1fr !important; gap: 40px; }
        @media (min-width: 640px) { .steps-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (min-width: 1024px) { .steps-grid { grid-template-columns: repeat(5,1fr) !important; } }
        .connector-line { display: none; }
        @media (min-width: 1024px) { .connector-line { display: block; } }
        .step-dot:hover { background: #1A3A5C !important; border-color: #1A3A5C !important; color: #fff !important; }
      `}</style>
    </section>
  )
}
