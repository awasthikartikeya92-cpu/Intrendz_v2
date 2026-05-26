'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Insights', href: '#insights' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backgroundColor: scrolled ? 'rgba(250,248,244,0.96)' : 'rgba(250,248,244,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(15,14,12,0.12)' : '1px solid transparent',
          transition: 'all 0.3s',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', color: '#0F0E0C', textDecoration: 'none' }}>
            Intrendz<span style={{ color: '#1A3A5C' }}>Media</span>
          </Link>

          <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }} className="hidden-mobile">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3A3831', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="#contact" style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#0F0E0C', color: '#FAF8F4', padding: '10px 22px', textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s' }} className="hidden-mobile">
            Book a Strategy Call
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0F0E0C', padding: '8px' }} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 40, background: '#FAF8F4', borderBottom: '1px solid rgba(15,14,12,0.12)', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
          >
            <ul style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none', margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3A3831', textDecoration: 'none', borderBottom: '1px solid rgba(15,14,12,0.08)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ paddingTop: '16px', paddingBottom: '8px' }}>
                <Link href="#contact" onClick={() => setMenuOpen(false)} style={{ display: 'block', textAlign: 'center', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', background: '#0F0E0C', color: '#FAF8F4', padding: '12px 20px', textDecoration: 'none' }}>
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) { .show-mobile { display: none !important; } }
        @media (max-width: 1023px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </>
  )
}
