'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { fadeUp, staggerContainer } from '@/lib/animations'

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
  loading: () => null,
})

const stats = [
  { number: '20+', desc: 'Years of combined marketing leadership experience' },
  { number: '3×', desc: 'Faster time-to-pipeline with AI-powered workflows' },
  { number: '100%', desc: 'Senior talent — no junior hand-offs, ever' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen grid lg:grid-cols-2 pt-[68px]"
    >
      {/* Left Panel */}
      <div className="relative flex flex-col justify-center px-6 py-24 lg:px-12 lg:py-28 lg:border-r border-black/10 overflow-hidden">
        {/* Three.js canvas behind left content */}
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-8"
          >
            <span className="block w-8 h-px bg-accent" />
            AI-Enabled B2B Marketing
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-display-xl text-ink mb-8 leading-[1.04]"
          >
            Marketing that moves{' '}
            <em className="italic text-accent">decision&#8209;makers</em>{' '}
            to&nbsp;act.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            className="text-[17px] font-light leading-[1.8] text-ink-mid mb-14 max-w-[480px]"
          >
            We help US-based B2B and enterprise brands accelerate pipeline,
            compress sales cycles, and build market authority that makes buying
            decisions easy — for your buyers.
          </motion.p>

          {/* Actions */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center text-[12px] font-medium tracking-[0.08em] uppercase bg-ink text-cream px-8 py-4 border border-ink hover:bg-accent hover:border-accent transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center text-[12px] font-medium tracking-[0.08em] uppercase bg-transparent text-ink px-8 py-4 border border-black/20 hover:border-ink transition-all duration-300"
            >
              Explore Capabilities
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Panel — Navy */}
      <div className="relative bg-accent flex flex-col justify-end px-8 py-16 lg:px-14 lg:py-24 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px)
            `,
          }}
        />

        {/* Floating orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-white pointer-events-none"
        />

        <div className="relative z-10">
          <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/40 mb-12">
            What senior-led execution delivers
          </p>

          <div className="flex flex-col">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.number}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-6 border-t border-white/15 last:border-b flex items-baseline gap-5"
              >
                <span className="font-display text-[52px] font-medium text-white leading-none tracking-tight shrink-0">
                  {stat.number}
                </span>
                <span className="text-[14px] font-light text-white/60 leading-[1.5] max-w-[220px]">
                  {stat.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
