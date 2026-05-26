'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '@/lib/animations'

const services = [
  {
    icon: '→',
    name: 'Growth Strategy',
    desc: 'Data-backed go-to-market roadmaps tied directly to revenue objectives and 90-day execution milestones.',
  },
  {
    icon: '◈',
    name: 'Performance Marketing',
    desc: 'Paid media and demand gen across LinkedIn, Google, and programmatic — optimized for pipeline quality, not clicks.',
  },
  {
    icon: '↑',
    name: 'SEO & Organic Growth',
    desc: 'Technical authority-building and content pipelines engineered to dominate category keywords and capture intent.',
  },
  {
    icon: '✦',
    name: 'Content & Brand',
    desc: 'Thought leadership, executive brand-building, and editorial strategy that earns trust with buying committees.',
  },
  {
    icon: '⊕',
    name: 'Marketing Automation',
    desc: 'CRM integration, intelligent nurture sequences, and ops infrastructure that converts pipeline into revenue.',
  },
  {
    icon: '◎',
    name: 'Analytics & CRO',
    desc: 'Attribution modeling, funnel analytics, and conversion optimization that compounds performance over time.',
  },
  {
    icon: '⬚',
    name: 'Website & UX Design',
    desc: 'Conversion-architected digital experiences built to establish authority and turn visitors into qualified conversations.',
  },
  {
    icon: '◇',
    name: 'Fractional CMO',
    desc: 'Senior marketing leadership — strategic direction, team oversight, board-level reporting — without the full-time cost.',
  },
]

export default function ServicesSection() {
  const header = useScrollAnimation()
  const grid = useScrollAnimation()

  return (
    <section id="services" className="bg-ink py-24 lg:py-32 px-6 lg:px-12">
      {/* Header */}
      <motion.div
        ref={header.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={header.isInView ? 'visible' : 'hidden'}
        className="mb-16 lg:mb-20"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-white/35 mb-5"
        >
          <span className="block w-6 h-px bg-white/30" />
          What We Do
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-display-lg text-white"
        >
          Full-spectrum capabilities,
          <br />
          <em className="italic text-white/50">one unified system.</em>
        </motion.h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        ref={grid.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={grid.isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10"
      >
        {services.map((svc) => (
          <motion.div
            key={svc.name}
            variants={fadeUp}
            className="p-8 lg:p-10 border-r border-b border-white/10 group hover:bg-white/[0.04] transition-colors duration-300"
          >
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-6 text-white/40 text-[18px] group-hover:border-white/40 group-hover:text-white/60 transition-all duration-300">
              {svc.icon}
            </div>
            <p className="text-[15px] font-medium text-white mb-3 tracking-tight">
              {svc.name}
            </p>
            <p className="text-[13px] font-light text-white/45 leading-[1.75]">
              {svc.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
