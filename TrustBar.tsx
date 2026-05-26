'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'

const pillars = [
  {
    num: '01',
    title: 'Strategy Before Tactics',
    body: 'A deep audit of your market position, buyer journey, and competitive landscape before any execution begins.',
  },
  {
    num: '02',
    title: 'Senior Talent, Always',
    body: "Your account is led by professionals who've owned P&Ls and built marketing orgs — not coordinated by account managers.",
  },
  {
    num: '03',
    title: 'AI-Amplified Velocity',
    body: 'Proprietary AI workflows compress timelines, improve content quality, and surface insights human teams miss at scale.',
  },
  {
    num: '04',
    title: 'Radical Transparency',
    body: 'Live dashboards, attribution-clear reporting, and weekly strategic reviews. You always know where every dollar performs.',
  },
]

export default function WhySection() {
  const left = useScrollAnimation()
  const right = useScrollAnimation()

  return (
    <section
      id="about"
      className="border-t border-black/10 grid lg:grid-cols-2"
    >
      {/* Left */}
      <motion.div
        ref={left.ref}
        variants={slideInLeft}
        initial="hidden"
        animate={left.isInView ? 'visible' : 'hidden'}
        className="px-6 py-20 lg:px-12 lg:py-32 lg:pr-16 lg:border-r border-black/10"
      >
        <p className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-5">
          <span className="block w-6 h-px bg-accent" />
          Our Difference
        </p>
        <h2 className="font-display text-display-lg text-ink mb-10">
          Built for outcomes,
          <br />
          <em className="italic text-accent">not deliverables.</em>
        </h2>
        <p className="text-[17px] font-light leading-[1.85] text-ink-mid max-w-[520px]">
          Most agencies optimize for busy work. We optimize for revenue. Every
          engagement begins with a rigorous strategic diagnosis — not a
          templated proposal — and ends with measurable, attributable growth.
        </p>
        <p className="text-[17px] font-light leading-[1.85] text-ink-mid max-w-[520px] mt-6">
          <strong className="font-medium text-ink">
            No junior hand-offs. No black-box reporting.
          </strong>{' '}
          You work directly with senior practitioners who have built and scaled
          marketing functions at companies across North America.
        </p>
      </motion.div>

      {/* Right */}
      <motion.div
        ref={right.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={right.isInView ? 'visible' : 'hidden'}
        className="px-6 py-20 lg:px-12 lg:py-32 lg:pl-16"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.num}
            variants={fadeUp}
            className="py-8 border-b border-black/10 first:border-t grid grid-cols-[48px_1fr] gap-5 group"
          >
            <span className="font-display text-[26px] font-normal text-ink-light leading-none pt-0.5 group-hover:text-accent transition-colors duration-300">
              {p.num}
            </span>
            <div>
              <p className="text-[15px] font-medium text-ink mb-2 tracking-tight">
                {p.title}
              </p>
              <p className="text-[13px] font-light text-ink-mid leading-[1.75]">
                {p.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
