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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-black/10 shadow-sm'
            : 'bg-cream/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[22px] font-semibold tracking-tight text-ink hover:opacity-80 transition-opacity"
          >
            Intrendz<span className="text-accent">Media</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] font-medium tracking-[0.1em] uppercase text-ink-mid hover:text-ink transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex items-center text-[11px] font-medium tracking-[0.08em] uppercase bg-ink text-cream px-5 py-[10px] hover:bg-accent transition-colors duration-200"
          >
            Book a Strategy Call
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-ink p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-cream border-b border-black/10 shadow-lg lg:hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[13px] font-medium tracking-[0.08em] uppercase text-ink-mid hover:text-ink border-b border-black/06 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 pb-2">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-[12px] font-medium tracking-[0.08em] uppercase bg-ink text-cream px-5 py-3 hover:bg-accent transition-colors"
                >
                  Book a Strategy Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
