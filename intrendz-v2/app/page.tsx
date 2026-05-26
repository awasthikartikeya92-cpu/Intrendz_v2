import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import WhySection from './components/sections/WhySection'
import ServicesSection from './components/sections/ServicesSection'
import ProcessSection from './components/sections/ProcessSection'
import IndustriesSection from './components/sections/IndustriesSection'
import InsightsSection from './components/sections/InsightsSection'
import CTASection from './components/sections/CTASection'
import Footer from './components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <WhySection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <InsightsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
