'use client'

import Link from 'next/link'
import { ArrowRightIcon, StarIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const universities = [
  {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    acceptanceRate: '3.4%',
    avgSAT: '1520-1580',
    color: 'from-red-600 to-red-700',
    description: 'Academic excellence, leadership, and diverse perspectives',
    keyTraits: ['Intellectual curiosity', 'Leadership potential', 'Community impact'],
    slug: 'harvard'
  },
  {
    name: 'Yale University',
    location: 'New Haven, CT',
    acceptanceRate: '4.6%',
    avgSAT: '1510-1570',
    color: 'from-blue-600 to-blue-700',
    description: 'Liberal arts education with strong school spirit',
    keyTraits: ['Well-rounded excellence', 'Creative thinking', 'School engagement'],
    slug: 'yale'
  },
  {
    name: 'Princeton University',
    location: 'Princeton, NJ',
    acceptanceRate: '4.0%',
    avgSAT: '1500-1570',
    color: 'from-orange-600 to-orange-700',
    description: 'Undergraduate focus with prestigious alumni network',
    keyTraits: ['Academic achievement', 'Personal character', 'Future potential'],
    slug: 'princeton'
  },
  {
    name: 'Stanford University',
    location: 'Stanford, CA',
    acceptanceRate: '3.9%',
    avgSAT: '1510-1570',
    color: 'from-red-500 to-red-600',
    description: 'Innovation, entrepreneurship, and changing the world',
    keyTraits: ['Innovation mindset', 'Risk-taking', 'Global impact'],
    slug: 'stanford'
  },
  {
    name: 'MIT',
    location: 'Cambridge, MA',
    acceptanceRate: '4.1%',
    avgSAT: '1540-1580',
    color: 'from-gray-600 to-gray-700',
    description: 'Scientific innovation and technical excellence',
    keyTraits: ['STEM excellence', 'Problem-solving', 'Hands-on learning'],
    slug: 'mit'
  },
  {
    name: 'Columbia University',
    location: 'New York, NY',
    acceptanceRate: '3.7%',
    avgSAT: '1510-1570',
    color: 'from-blue-500 to-blue-600',
    description: 'Global perspective in the heart of NYC',
    keyTraits: ['Global citizenship', 'Urban engagement', 'Diverse perspectives'],
    slug: 'columbia'
  }
]

export default function Universities() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">University Hubs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Target-Specific Guidance
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Deep dive into each top university with detailed admissions insights, 
            ideal applicant profiles, and tailored strategies for success.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((university) => (
            <div key={university.name} className="group relative card p-0 overflow-hidden">
              {/* Header with Gradient */}
              <div className={`p-6 bg-gradient-to-r ${university.color} text-white`}>
                <h3 className="text-xl font-bold">{university.name}</h3>
                <p className="text-sm opacity-90">{university.location}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <UserGroupIcon className="w-5 h-5 text-gray-400 mr-2" />
                    </div>
                    <p className="text-sm text-gray-500">Acceptance Rate</p>
                    <p className="font-bold text-gray-900">{university.acceptanceRate}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <AcademicCapIcon className="w-5 h-5 text-gray-400 mr-2" />
                    </div>
                    <p className="text-sm text-gray-500">SAT Range</p>
                    <p className="font-bold text-gray-900">{university.avgSAT}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{university.description}</p>

                {/* Key Traits */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">What They Look For:</p>
                  <div className="space-y-2">
                    {university.keyTraits.map((trait, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {trait}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={`/universities/${university.slug}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Explore Hub
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Target School?
            </h3>
            <p className="text-gray-600 mb-6">
              We cover all top-tier universities including additional Ivy League schools, 
              top liberal arts colleges, and elite technical institutions.
            </p>
            <Link href="/universities" className="btn-primary">
              View All Universities
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
