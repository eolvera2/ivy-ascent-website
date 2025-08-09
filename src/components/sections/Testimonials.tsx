'use client'

import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: 'Sarah Chen',
    school: 'Harvard University \'26',
    image: '/testimonials/sarah.jpg',
    quote: 'The Ivy Ascent Platform gave me the roadmap I needed. The personalized guidance helped me craft a compelling narrative that got me into Harvard.',
    rating: 5,
    background: 'STEM Research in Bioengineering'
  },
  {
    name: 'Marcus Johnson',
    school: 'Stanford University \'25',
    image: '/testimonials/marcus.jpg',
    quote: 'The university-specific hubs were game-changers. Understanding Stanford&apos;s culture helped me write essays that truly resonated with admissions officers.',
    rating: 5,
    background: 'Social Entrepreneurship'
  },
  {
    name: 'Emma Rodriguez',
    school: 'Yale University \'26',
    image: '/testimonials/emma.jpg',
    quote: 'Working with the Concierge team transformed my application. The former admissions officer helped me see my story from their perspective.',
    rating: 5,
    background: 'Creative Writing & Community Service'
  },
  {
    name: 'David Kim',
    school: 'MIT \'25',
    image: '/testimonials/david.jpg',
    quote: 'The four-year blueprint kept me on track from freshman year. By senior year, I had everything I needed for a strong MIT application.',
    rating: 5,
    background: 'Computer Science & Robotics'
  },
  {
    name: 'Sofia Patel',
    school: 'Princeton University \'26',
    image: '/testimonials/sofia.jpg',
    quote: 'The multilingual support was crucial for my family. Having resources in multiple languages helped my parents understand the process.',
    rating: 5,
    background: 'International Relations'
  },
  {
    name: 'Alex Thompson',
    school: 'Columbia University \'25',
    image: '/testimonials/alex.jpg',
    quote: 'The platform&apos;s essay review service was incredible. The feedback helped me write authentic, compelling essays that stood out.',
    rating: 5,
    background: 'Journalism & Media Studies'
  }
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Success Stories</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Dreams to Reality
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our platform has helped students from diverse backgrounds 
            achieve their Ivy League dreams.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card p-6 group">
              {/* Quote */}
              <div className="relative mb-6">
                <div className="h-8 w-8 text-primary-200 absolute -top-2 -left-2">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="text-gray-600 italic pl-6">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-primary-600 font-medium">{testimonial.school}</p>
                  <p className="text-xs text-gray-500">{testimonial.background}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 text-center text-white">
            <div>
              <div className="text-4xl font-bold">94%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold">2,500+</div>
              <div className="text-sm opacity-90">Students Coached</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-sm opacity-90">Top Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with 
            personalized guidance and expert strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary">
              Start Your Journey
            </a>
            <a href="/success-stories" className="btn-outline">
              Read More Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
