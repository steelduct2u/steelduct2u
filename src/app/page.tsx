import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Expertise from '@/components/sections/Expertise'
import Sectors from '@/components/sections/Sectors'
import QuoteCta from '@/components/sections/QuoteCta'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import BackToTop from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-orange-500 selection:text-black">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* 1 – Hero Section (own entrance animation, no scroll reveal needed) */}
        <Hero />

        {/* 2 – Trust & Credibility Metrics (negative translateY overlap with Hero — no scroll reveal) */}
        <StatsBar />

        {/* 3 – Core Ventilation & Duct Steel Fabrication Services */}
        <Services />

        {/* 4 – Project Showcase & Visual Gallery */}
        <Gallery />

        {/* 5 – Full Lifecycle Engineering & Support */}
        <Expertise />

        {/* 6 – Industries & Sectors Served */}
        <Sectors />

        {/* 6b – Clear next step: free inspection & quote */}
        <QuoteCta />

        {/* 7 – Frequently Asked Questions */}
        <FAQ />

        {/* 8 – Direct Contact & Project Team */}
        <Contact />
      </main>

      {/* Footer — no scroll reveal, always visible */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  )
}
