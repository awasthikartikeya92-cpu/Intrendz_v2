'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const list = [
  'Enterprise Technology','SaaS & Cloud','Healthcare & Life Sciences',
  'Financial Services','Professional Services','Manufacturing & Industrial',
  'Retail & E-Commerce','Consumer Brands','Startups & Growth-Stage',
  'Private Equity Portfolio','Legal & Compliance','Education & EdTech',
]

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="industries" style={{ background: '#F5EDD9', borderTop: '1px solid rgba(184,144,42,0.2)', borderBottom: '1px solid rgba(184,144,42,0.2)', padding: '80px 48px' }} className="ind-section">
      <div style={{ marginBottom: '48px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8902A', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#B8902A' }} />
          Industry Experience
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0F0E0C' }}>
          Sector depth that<br /><em style={{ fontStyle: 'italic', color: '#B8902A' }}>accelerates trust.</em>
        </h2>
      </div>
      <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
        {list.map((ind) => (
          <motion.span key={ind} variants={fadeUp} className="ind-tag"
            style={{ fontSize: '13px', fontWeight: 400, color: '#3A3831', background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(184,144,42,0.3)', padding: '10px 22px', transition: 'all 0.2s', cursor: 'default' }}>
            {ind}
          </motion.span>
        ))}
      </motion.div>
      <style>{`
        .ind-section { padding: 60px 24px; }
        @media (min-width: 768px) { .ind-section { padding: 80px 48px; } }
        .ind-tag:hover { background: #fff !important; border-color: #B8902A !important; color: #0F0E0C !important; }
      `}</style>
    </section>
  )
}
