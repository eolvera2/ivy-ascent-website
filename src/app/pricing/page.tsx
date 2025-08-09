import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Pricing from '@/components/sections/Pricing'

export const metadata: Metadata = {
  title: 'Pricing - Affordable College Prep Plans | Ivy Ascent',
  description: 'Choose the perfect plan for your college preparation journey. From free resources to premium coaching, we have options for every student and budget.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Pricing Plans
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Choose the perfect plan for your college preparation journey. 
              From free resources to premium coaching, we have options for every student and budget.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Component */}
      <div className="py-0">
        <Pricing />
      </div>

      <Footer />
    </main>
  )
}
