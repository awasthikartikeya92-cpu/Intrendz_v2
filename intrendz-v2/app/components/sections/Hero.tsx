'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const HeroCanvas = dynamic(() => import('../three/HeroCanvas'), { ssr: false, loading: () => null })

const stats = [
  { number: '20+', desc: 'Years of combined marketing leadership experience' },
  { number: '3×', desc: 'Faster time-to-pipeline with AI-powered workflows' },
  { number: '100%', desc: 'Senior talent — no junior hand-offs, ever' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '68px' }} className="hero-grid">
      {/* Left Panel */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 64px 80px 48px', borderRight: '1px solid rgba(15,14,12,0.12)', overflow: 'hidden' }} className="hero-left">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
        <motion.div variants={stagger} initial="hidden" animate="visible" style={{ position: 'relative', zIndex: 10, maxWidth: '560px' }}>
          <motion.p variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1A3A5C', marginBottom: '32px' }}>
            <span style={{ display: 'block', width: '32px', height: '1px', background: '#1A3A5C' }} />
            AI-Enabled B2B Marketing
          </motion.p>
          <motion.h1 variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(48px,5vw,76px)', fontWeight: 500, lineHeight: 1.04, letterSpacing: '-0.02em', color: '#0F0E0C', marginBottom: '28px' }}>
            Marketing that moves{' '}
            <em style={{ fontStyle: 'italic', color: '#1A3A5C' }}>decision&#8209;makers</em>{' '}
            to&nbsp;act.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.8, color: '#3A3831', maxWidth: '480px', marginBottom: '48px' }}>
            We help US-based B2B and enterprise brands accelerate pipeline, compress sales cycles, and build market authority that makes buying decisions easy — for your buyers.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link href="#contact" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#0F0E0C', color: '#FAF8F4', padding: '14px 32px', border: '1px solid #0F0E0C', textDecoration: 'none', transition: 'all 0.25s' }}>
              Schedule a Consultation
            </Link>
            <Link href="#services" style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'transparent', color: '#0F0E0C', padding: '14px 32px', border: '1px solid rgba(15,14,12,0.2)', textDecoration: 'none', transition: 'all 0.25s' }}>
              Explore Capabilities
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div style={{ background: '#1A3A5C', padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', overflow: 'hidden' }} className="hero-right">
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.8) 39px,rgba(255,255,255,0.8) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.8) 39px,rgba(255,255,255,0.8) 40px)' }} />
        <motion.div animate={{ scale: [1,1.15,1], opacity: [0.05,0.1,0.05] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '25%', right: '25%', width: '320px', height: '320px', borderRadius: '50%', background: 'white', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '48px' }}>
            What senior-led execution delivers
          </p>
          <div>
            {stats.map((stat, i) => (
              <motion.div key={stat.number} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.22,1,0.36,1] }} style={{ padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '52px', fontWeight: 500, color: '#fff', lineHeight: 1, letterSpacing: '-0.02em', flexShrink: 0 }}>{stat.number}</span>
                <span style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: '220px', lineHeight: 1.5 }}>{stat.desc}</span>
              </motion.div>
            ))}
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding: 80px 24px 60px !important; border-right: none !important; border-bottom: 1px solid rgba(15,14,12,0.12) !important; }
          .hero-right { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}
