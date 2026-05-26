'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import Link from 'next/link'

const contactRows = [
  { type: 'Email', value: 'contact@intrendzmedia.com', href: 'mailto:contact@intrendzmedia.com', note: 'Typically responds within one business day' },
  { type: 'Headquarters', value: 'North America — Serving US Markets', href: null, note: 'Remote-first, senior team' },
  { type: 'Engagement Type', value: 'Retainer · Project · Fractional', href: null, note: 'Engagements from 3 months and up' },
]

export default function CTASection() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const leftInView = useInView(leftRef, { once: true, amount: 0.1 })
  const rightInView = useInView(rightRef, { once: true, amount: 0.1 })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff', padding: '12px 16px', fontSize: '14px', fontWeight: 300,
    fontFamily: "'DM Sans', system-ui, sans-serif", outline: 'none',
  }

  return (
    <section id="contact" style={{ background: '#1A3A5C', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }} className="cta-grid">
      <motion.div ref={leftRef} initial={{ opacity: 0, x: -40 }} animate={leftInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        style={{ position: 'relative', padding: '120px 64px 120px 48px', borderRight: '1px solid rgba(255,255,255,0.12)' }} className="cta-left">
        <span style={{ position: 'absolute', top: '-40px', left: '16px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '300px', color: 'rgba(255,255,255,0.04)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }} aria-hidden="true">&ldquo;</span>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
            <span style={{ display: 'block', width: '24px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            Get Started
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(34px,4vw,56px)', fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.02em', color: '#fff', marginBottom: '24px' }}>
            Ready to build a<br />marketing engine that<br /><em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>earns its keep?</em>
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, maxWidth: '420px', marginBottom: '48px' }}>
            A senior strategist will personally review your current marketing landscape and outline a clear, honest path forward. No generic decks. No junior sales reps. No pressure.
          </p>
          <div>
            {contactRows.map((row) => (
              <div key={row.type} style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.12)' }} className="contact-row-first">
                <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '4px' }}>{row.type}</p>
                {row.href
                  ? <Link href={row.href} style={{ fontSize: '15px', fontWeight: 400, color: '#fff', textDecoration: 'none' }}>{row.value}</Link>
                  : <p style={{ fontSize: '15px', fontWeight: 400, color: '#fff' }}>{row.value}</p>
                }
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '2px' }}>{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div ref={rightRef} initial={{ opacity: 0, x: 40 }} animate={rightInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
        style={{ padding: '120px 48px 120px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="cta-right">
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '56px', fontWeight: 500, color: '#fff', marginBottom: '16px' }}>✓</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '28px', fontWeight: 500, color: '#fff', marginBottom: '12px' }}>Message received.</h3>
            <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>A senior strategist will be in touch within one business day.</p>
          </div>
        ) : (
          <>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '26px', fontWeight: 500, color: '#fff', marginBottom: '32px' }}>Start the conversation.</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Company *</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Work Email *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '8px' }}>Tell us about your goals</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your growth goals..." style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <button type="submit" style={{ marginTop: '8px', width: '100%', background: '#fff', color: '#1A3A5C', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'background 0.2s' }}>
                Schedule a Strategy Call →
              </button>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>No sales pressure. Senior-only conversations.</p>
            </form>
          </>
        )}
      </motion.div>

      <style>{`
        .cta-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 1024px) { .cta-grid { grid-template-columns: 1fr 1fr !important; } }
        .cta-left { padding: 80px 24px !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12) !important; }
        .cta-right { padding: 60px 24px !important; }
        @media (min-width: 1024px) {
          .cta-left { padding: 120px 64px 120px 48px !important; border-right: 1px solid rgba(255,255,255,0.12) !important; border-bottom: none !important; }
          .cta-right { padding: 120px 48px 120px 64px !important; }
        }
        .form-grid { grid-template-columns: 1fr !important; }
        @media (min-width: 480px) { .form-grid { grid-template-columns: 1fr 1fr !important; } }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(255,255,255,0.4) !important; }
      `}</style>
    </section>
  )
}
