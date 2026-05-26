'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const pillars = [
  { num: '01', title: 'Strategy Before Tactics', body: 'A deep audit of your market position, buyer journey, and competitive landscape before any execution begins.' },
  { num: '02', title: 'Senior Talent, Always', body: "Your account is led by professionals who've owned P&Ls and built marketing orgs — not coordinated by account managers." },
  { num: '03', title: 'AI-Amplified Velocity', body: 'Proprietary AI workflows compress timelines, improve content quality, and surface insights human teams miss at scale.' },
  { num: '04', title: 'Radical Transparency', body: 'Live dashboards, attribution-clear reporting, and weekly strategic reviews. You always know where every dollar performs.' },
]

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }

export default function WhySection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const leftInView = useInView(leftRef, { once: true, amount: 0.15 })
  const rightInView = useInView(rightRef, { once: true, amount: 0.15 })

  return (
    <section id="about" style={{ borderTop: '1px solid rgba(15,14,12,0.1)', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="why-grid">
      <motion.div ref={leftRef} initial={{ opacity: 0, x: -40 }} animate={leftInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        style={{ padding: '120px 64px 120px 48px', borderRight: '1px solid rgba(15,14,12,0.1)' }} className="why-left">
        <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A3A5C', marginBottom: '20px' }}>
          <span style={{ display: 'block', width: '24px', height: '1px', background: '#1A3A5C' }} />
          Our Difference
        </p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0F0E0C', marginBottom: '32px' }}>
          Built for outcomes,<br /><em style={{ fontStyle: 'italic', color: '#1A3A5C' }}>not deliverables.</em>
        </h2>
        <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.85, color: '#3A3831', maxWidth: '520px', marginBottom: '24px' }}>
          Most agencies optimize for busy work. We optimize for revenue. Every engagement begins with a rigorous strategic diagnosis — not a templated proposal — and ends with measurable, attributable growth.
        </p>
        <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.85, color: '#3A3831', maxWidth: '520px' }}>
          <strong style={{ fontWeight: 500, color: '#0F0E0C' }}>No junior hand-offs. No black-box reporting.</strong>{' '}
          You work directly with senior practitioners who have built and scaled marketing functions at companies across North America.
        </p>
      </motion.div>

      <motion.div ref={rightRef} variants={stagger} initial="hidden" animate={rightInView ? 'visible' : 'hidden'}
        style={{ padding: '120px 48px 120px 64px' }} className="why-right">
        {pillars.map((p) => (
          <motion.div key={p.num} variants={fadeUp} style={{ padding: '32px 0', borderBottom: '1px solid rgba(15,14,12,0.1)', display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px', alignItems: 'start' }}
            className="pillar-row">
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', fontWeight: 400, color: '#7A7872', lineHeight: 1, paddingTop: '2px' }}>{p.num}</span>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 500, color: '#0F0E0C', marginBottom: '8px', letterSpacing: '-0.01em' }}>{p.title}</p>
              <p style={{ fontSize: '13px', fontWeight: 300, color: '#3A3831', lineHeight: 1.75 }}>{p.body}</p>
            </div>
          </motion.div>
        ))}
        <div style={{ borderTop: '1px solid rgba(15,14,12,0.1)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-left { padding: 80px 24px !important; border-right: none !important; border-bottom: 1px solid rgba(15,14,12,0.1) !important; }
          .why-right { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
