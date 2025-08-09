'use client'

import Link from 'next/link'
import { 
  ChevronRightIcon,
  AcademicCapIcon,
  ChartBarIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Success Rate', value: '94%', icon: ChartBarIcon },
  { label: 'Students Coached', value: '2,500+', icon: UsersIcon },
  { label: 'Top Universities', value: '50+', icon: AcademicCapIcon },
  { label: 'Average Rating', value: '4.9/5', icon: StarIcon },
]

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* Announcement Badge */}
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-primary-700 ring-1 ring-primary-600/20 hover:ring-primary-600/30 transition-all duration-300">
                <span className="font-semibold">New:</span> AI-Powered Application Review{' '}
                <Link href="/features" className="font-semibold text-primary-600 hover:text-primary-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <ChevronRightIcon className="inline h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Your Path to{' '}
              <span className="text-gradient font-serif">Ivy League</span>{' '}
              Success
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
              Demystify elite college admissions with our comprehensive four-year roadmap, 
              personalized guidance, and expert insights. Build an authentic, compelling application 
              that stands out to top-tier universities.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </Link>
              <Link 
                href="/demo" 
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors flex items-center"
              >
                Watch Demo <ChevronRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16">
              <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                Trusted by students at
              </p>
              <div className="mt-6 flex justify-center items-center space-x-8 grayscale opacity-60">
                <div className="text-2xl font-bold text-gray-400">Harvard</div>
                <div className="text-2xl font-bold text-gray-400">Yale</div>
                <div className="text-2xl font-bold text-gray-400">Princeton</div>
                <div className="text-2xl font-bold text-gray-400">Stanford</div>
                <div className="text-2xl font-bold text-gray-400">MIT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Proven Results
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our platform has helped thousands of students achieve their dreams
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-primary-50 p-8 hover:bg-primary-100 transition-colors duration-300">
                  <stat.icon className="mx-auto h-8 w-8 text-primary-600 mb-4" />
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-bold tracking-tight text-primary-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Video/Demo Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
              See The Platform In Action
            </h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full transition-all duration-300 transform hover:scale-105">
                  <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
              <img
                src="/api/placeholder/800/450"
                alt="Platform Demo"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
