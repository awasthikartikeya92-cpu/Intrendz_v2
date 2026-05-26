'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { fadeUp, staggerContainer } from '@/lib/animations'

const articles = [
  {
    category: 'B2B Strategy',
    title: 'The Modern B2B Buying Journey Has Changed. Has Your Marketing?',
    excerpt:
      "Decision-making units are larger, cycles are longer, and digital touchpoints have multiplied. The companies winning deals aren't running more ads — they're engineering buying confidence at every stage of the committee journey.",
    readTime: '6 min read',
    featured: true,
  },
  {
    category: 'AI & Marketing',
    title: 'How AI Is Reshaping Performance Marketing at Scale',
    excerpt:
      'From predictive bidding to dynamic creative, AI-enabled workflows are delivering compounding efficiency gains for marketers who know how to deploy them.',
    readTime: '8 min read',
    featured: false,
  },
  {
    category: 'Revenue Growth',
    title: 'Why Siloed Channels Stall Revenue — and the Fix',
    excerpt:
      'When demand gen, SEO, and CRO operate in isolation, pipeline plateaus. Here is the integrated framework that breaks through.',
    readTime: '5 min read',
    featured: false,
  },
]

export default function InsightsSection() {
  const header = useScrollAnimation()
  const grid = useScrollAnimation()

  return (
    <section
      id="insights"
      className="border-t border-black/10 px-6 py-24 lg:px-12 lg:py-32"
    >
      <motion.div
        ref={header.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={header.isInView ? 'visible' : 'hidden'}
        className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8"
      >
        <div>
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-accent mb-5"
          >
            <span className="block w-6 h-px bg-accent" />
            Thought Leadership
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-display-lg text-ink">
            Perspectives for
            <br />
            <em className="italic text-accent">marketing leaders.</em>
          </motion.h2>
        </div>
        <motion.div variants={fadeUp}>
          <Link
            href="#insights"
            className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            View All Articles →
          </Link>
        </motion.div>
      </motion.div>

      {/* Grid */}
      <motion.div
        ref={grid.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={grid.isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] border border-black/10"
      >
        {articles.map((article) => (
          <motion.article
            key={article.title}
            variants={fadeUp}
            className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10 last:border-r-0 hover:bg-cream-dark transition-colors duration-200 group"
          >
            <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-accent mb-5">
              {article.category}
            </p>
            <h3
              className={`font-display font-medium text-ink leading-[1.25] mb-4 tracking-tight ${
                article.featured ? 'text-[26px] lg:text-[30px]' : 'text-[20px]'
              }`}
            >
              {article.title}
            </h3>
            <p className="text-[13px] font-light text-ink-mid leading-[1.75] mb-7">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="text-[11px] font-medium tracking-[0.08em] uppercase text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                Read Article →
              </Link>
              <span className="text-[11px] text-ink-light">{article.readTime}</span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
