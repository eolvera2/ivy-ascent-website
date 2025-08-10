'use client'

import Link from 'next/link'
import { CheckIcon, StarIcon, SparklesIcon } from '@heroicons/react/24/outline'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with college planning',
    features: [
      'High-level Four-Year Blueprint overview',
      'University Hubs with admissions philosophy',
      'Public blog with admissions insights',
      'College Admissions Calculator',
      'GPA Calculator',
      'Free introductory webinars'
    ],
    cta: 'Get Started Free',
    ctaLink: '/signup',
    popular: false,
    color: 'border-gray-200'
  },
  {
    name: 'Plus',
    price: '$49',
    period: 'per month',
    yearlyPrice: '$499',
    yearlyPeriod: 'per year',
    description: 'Comprehensive strategy and tools for serious students',
    features: [
      'Everything in Free, plus:',
      'Complete Four-Year Blueprint with detailed checklists',
      'Deep-Dive Strategy Guides',
      'Video Course Library',
      'Case Study Database with successful applications',
      'A La Carte Essay Review (5-essay bundles: $425)',
      'Personalized dashboard and progress tracking',
      'Priority email support'
    ],
    cta: 'Start Plus Trial',
    ctaLink: '/signup?plan=plus',
    popular: true,
    color: 'border-primary-500 ring-2 ring-primary-500'
  },
  {
    name: 'Concierge',
    price: '$6,000',
    period: 'per year',
    highEndPrice: '$20,000',
    description: 'Premium coaching with former admissions officers',
    features: [
      'Everything in Plus, plus:',
      'One-on-One Coaching with former admissions officers',
      'Personalized Four-Year Roadmap Service',
      '"Spike" Development Lab with specialized mentorship',
      'Application "PostMortem" review service',
      'Mock Interview Preparation',
      'Unlimited essay reviews and feedback',
      'Direct access to coaching team',
      'Family strategy sessions'
    ],
    cta: 'Schedule Consultation',
    ctaLink: '/consultation',
    popular: false,
    color: 'border-purple-200'
  }
]

const additionalServices = [
  {
    name: 'Essay Review Bundle',
    price: '$425',
    description: '5 essay reviews with expert feedback'
  },
  {
    name: 'Individual Deep-Dive Guide',
    price: '$29',
    description: 'Specialized guides on specific topics'
  }
]

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Path to Success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From free resources to premium coaching, we have options for every student and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ${tier.color} ${
                tier.popular ? 'scale-105' : ''
              } flex flex-col h-full`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary-600 text-white">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-lg text-gray-500">/{tier.period}</span>
                </div>
                {tier.yearlyPrice && (
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-green-600">{tier.yearlyPrice}</span>
                    <span className="text-sm text-green-600">/{tier.yearlyPeriod}</span>
                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Save 16%
                    </span>
                  </div>
                )}
                {tier.highEndPrice && (
                  <div className="mt-2">
                    <span className="text-lg text-gray-500">up to </span>
                    <span className="text-2xl font-bold text-gray-900">{tier.highEndPrice}</span>
                    <span className="text-lg text-gray-500">/year</span>
                  </div>
                )}
                <p className="mt-4 text-gray-600">{tier.description}</p>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3 flex-grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className={`text-sm ${feature.startsWith('Everything') ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href={tier.ctaLink}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-700'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">À La Carte Services</h3>
            <p className="text-gray-600">Need specific help? Purchase individual services as needed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service) => (
              <div key={service.name} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{service.name}</h4>
                  <span className="text-2xl font-bold text-primary-600">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <SparklesIcon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600">
              Not satisfied with your Plus or Concierge subscription? 
              Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
