'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { fadeUp, staggerContainer, staggerFast } from '@/lib/animations'

const industries = [
  'Enterprise Technology',
  'SaaS & Cloud',
  'Healthcare & Life Sciences',
  'Financial Services',
  'Professional Services',
  'Manufacturing & Industrial',
  'Retail & E-Commerce',
  'Consumer Brands',
  'Startups & Growth-Stage',
  'Private Equity Portfolio',
  'Legal & Compliance',
  'Education & EdTech',
]

export default function IndustriesSection() {
  const header = useScrollAnimation()
  const tags = useScrollAnimation()

  return (
    <section
      id="industries"
      className="bg-gold-light border-y border-yellow-700/15 px-6 py-20 lg:px-12 lg:py-28"
    >
      <motion.div
        ref={header.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={header.isInView ? 'visible' : 'hidden'}
        className="mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-gold mb-5"
        >
          <span className="block w-6 h-px bg-gold" />
          Industry Experience
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-display text-display-lg text-ink">
          Sector depth that
          <br />
          <em className="italic text-gold">accelerates trust.</em>
        </motion.h2>
      </motion.div>

      <motion.div
        ref={tags.ref}
        variants={staggerFast}
        initial="hidden"
        animate={tags.isInView ? 'visible' : 'hidden'}
        className="flex flex-wrap gap-3"
      >
        {industries.map((ind) => (
          <motion.span
            key={ind}
            variants={fadeUp}
            className="text-[13px] font-normal text-ink-mid bg-white/60 border border-yellow-700/25 px-5 py-2.5 hover:bg-white hover:border-gold hover:text-ink transition-all duration-200 cursor-default"
          >
            {ind}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
