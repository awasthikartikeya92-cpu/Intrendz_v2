'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { slideInLeft, slideInRight } from '@/lib/animations'

const contactInfo = [
  {
    type: 'Email',
    value: 'contact@intrendzmedia.com',
    href: 'mailto:contact@intrendzmedia.com',
    note: 'Typically responds within one business day',
  },
  {
    type: 'Headquarters',
    value: 'North America — Serving US Markets',
    href: null,
    note: 'Remote-first, senior team',
  },
  {
    type: 'Engagement Type',
    value: 'Retainer · Project · Fractional',
    href: null,
    note: 'Engagements from 3 months and up',
  },
]

export default function CTASection() {
  const left = useScrollAnimation()
  const right = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In production: connect to your form handler / CRM
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="bg-accent grid lg:grid-cols-2 overflow-hidden"
    >
      {/* Left — CTA copy */}
      <motion.div
        ref={left.ref}
        variants={slideInLeft}
        initial="hidden"
        animate={left.isInView ? 'visible' : 'hidden'}
        className="relative px-6 py-20 lg:px-12 lg:py-32 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/12"
      >
        {/* Large decorative quote mark */}
        <span
          className="absolute top-0 left-4 font-display text-[240px] lg:text-[320px] text-white/[0.04] leading-none select-none pointer-events-none"
          aria-hidden
        >
          "
        </span>

        <div className="relative z-10">
          <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-white/40 mb-8">
            <span className="block w-6 h-px bg-white/30" />
            Get Started
          </p>
          <h2 className="font-display text-display-lg text-white mb-7 leading-[1.06]">
            Ready to build a
            <br />
            marketing engine that
            <br />
            <em className="italic text-white/55">earns its keep?</em>
          </h2>
          <p className="text-[16px] font-light text-white/60 leading-[1.8] max-w-[420px] mb-12">
            A senior strategist will personally review your current marketing
            landscape and outline a clear, honest path forward. No generic
            decks. No junior sales reps. No pressure.
          </p>

          {/* Contact info */}
          <div>
            {contactInfo.map((item) => (
              <div
                key={item.type}
                className="py-5 border-b border-white/12 first:border-t"
              >
                <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/35 mb-1">
                  {item.type}
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[15px] font-normal text-white hover:text-white/70 transition-colors"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-[15px] font-normal text-white">{item.value}</p>
                )}
                <p className="text-[11px] text-white/30 mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right — Contact form */}
      <motion.div
        ref={right.ref}
        variants={slideInRight}
        initial="hidden"
        animate={right.isInView ? 'visible' : 'hidden'}
        className="px-6 py-20 lg:px-12 lg:py-32 lg:pl-16 flex flex-col justify-center"
      >
        {submitted ? (
          <div className="text-center py-16">
            <p className="font-display text-[48px] font-medium text-white mb-4">✓</p>
            <h3 className="font-display text-[28px] font-medium text-white mb-3">
              Message received.
            </h3>
            <p className="text-[15px] font-light text-white/55 leading-relaxed">
              A senior strategist will be in touch within one business day.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-display text-[26px] font-medium text-white mb-8">
              Start the conversation.
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.1em] uppercase text-white/40 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-[14px] font-light focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium tracking-[0.1em] uppercase text-white/40 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-[14px] font-light focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.1em] uppercase text-white/40 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@company.com"
                  className="w-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-[14px] font-light focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.1em] uppercase text-white/40 mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="We're looking to increase qualified pipeline in the enterprise segment..."
                  className="w-full bg-white/[0.06] border border-white/15 text-white placeholder:text-white/25 px-4 py-3 text-[14px] font-light focus:outline-none focus:border-white/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full bg-white text-accent text-[12px] font-medium tracking-[0.08em] uppercase py-4 hover:bg-cream-dark transition-colors duration-200"
              >
                Schedule a Strategy Call →
              </button>
              <p className="text-[11px] text-white/25 text-center">
                No sales pressure. Senior-only conversations.
              </p>
            </form>
          </>
        )}
      </motion.div>
    </section>
  )
}
