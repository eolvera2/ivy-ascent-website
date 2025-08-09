import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Blueprint from '@/components/sections/Blueprint'
import Universities from '@/components/sections/Universities'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ivy Ascent - Your Gateway to Elite Universities',
  description: 'Transform your college dreams into reality with expert guidance from former admissions officers. Get personalized strategies, proven resources, and one-on-one coaching to maximize your chances at top universities.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Blueprint />
      <Universities />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
