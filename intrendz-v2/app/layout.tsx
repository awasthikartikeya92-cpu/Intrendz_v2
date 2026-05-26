import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Intrendz Media — AI-Powered Growth for B2B Leaders',
  description:
    'AI-enabled marketing strategy, creative, and performance execution designed to accelerate revenue, strengthen brand equity, and unlock measurable business outcomes for US enterprise brands.',
  keywords:
    'B2B marketing agency, performance marketing, growth strategy, SEO, demand generation, fractional CMO, AI marketing, enterprise marketing USA',
  authors: [{ name: 'Intrendz Media' }],
  openGraph: {
    title: 'Intrendz Media — AI-Powered Growth for B2B Leaders',
    description:
      'Senior-led digital marketing for US enterprise and B2B brands. Strategy, performance, and AI-enabled execution that drives measurable revenue.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.intrendzmedia.com',
    siteName: 'Intrendz Media',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intrendz Media — AI-Powered Growth for B2B Leaders',
    description: 'AI-enabled marketing strategy and performance execution for modern B2B brands.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.intrendzmedia.com'),
}

export const viewport: Viewport = {
  themeColor: '#FAF8F4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
