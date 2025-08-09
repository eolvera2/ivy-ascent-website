'use client'

import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <SparklesIcon className="h-16 w-16 text-white/80" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Ivy League Journey Starts Today
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Don&apos;t leave your college admissions to chance. Join thousands of students 
            who have transformed their dreams into acceptance letters with our proven system.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Free Trial
            </Link>
            <Link
              href="/demo"
              className="text-lg font-semibold leading-6 text-white hover:text-white/80 transition-colors flex items-center"
            >
              Watch Demo <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-white/80">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free 7-day trial
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
