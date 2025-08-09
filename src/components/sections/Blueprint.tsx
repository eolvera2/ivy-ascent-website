'use client'

import Link from 'next/link'
import {
  CheckIcon,
  ArrowRightIcon,
  ClockIcon,
  BookOpenIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const blueprintYears = [
  {
    year: '9th Grade',
    theme: 'Exploration',
    color: 'from-blue-500 to-blue-600',
    icon: BookOpenIcon,
    description: 'Discover your passions and build strong foundations',
    checklist: [
      'Take challenging courses and establish good study habits',
      'Explore diverse extracurricular activities',
      'Build relationships with teachers and counselors',
      'Start a reading habit and improve writing skills',
      'Begin tracking achievements and experiences'
    ],
    goals: 'GPA: 3.7+, Explore 3-5 different activities'
  },
  {
    year: '10th Grade',
    theme: 'Focus',
    color: 'from-green-500 to-green-600',
    icon: ClockIcon,
    description: 'Narrow your focus and deepen commitments',
    checklist: [
      'Take PSAT 10 for practice and diagnostic',
      'Choose 2-3 core extracurricular activities',
      'Seek leadership opportunities in chosen activities',
      'Plan meaningful summer experiences',
      'Begin building your academic "spike"'
    ],
    goals: 'GPA: 3.8+, Leadership role in 1-2 activities'
  },
  {
    year: '11th Grade',
    theme: 'Excellence',
    color: 'from-purple-500 to-purple-600',
    icon: AcademicCapIcon,
    description: 'Achieve peak performance and demonstrate leadership',
    checklist: [
      'Take SAT/ACT and aim for target scores',
      'Maintain rigorous course load with APs',
      'Secure significant leadership positions',
      'Plan impactful summer programs or internships',
      'Begin college research and visits'
    ],
    goals: 'SAT: 1500+, Major leadership accomplishments'
  },
  {
    year: '12th Grade',
    theme: 'Presentation',
    color: 'from-red-500 to-red-600',
    icon: UserGroupIcon,
    description: 'Craft compelling applications and secure admission',
    checklist: [
      'Finalize college list and application strategy',
      'Write outstanding personal statements and essays',
      'Secure strong letters of recommendation',
      'Submit applications by deadlines',
      'Prepare for interviews and await decisions'
    ],
    goals: 'Submit compelling applications, secure admission'
  }
]

export default function Blueprint() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">The Four-Year Blueprint</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Strategic Roadmap to Success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Each year of high school has a unique focus and set of goals. Our blueprint breaks down 
            exactly what you need to accomplish when, ensuring you&apos;re always on track.
          </p>
        </div>

        {/* Blueprint Timeline */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {blueprintYears.map((year, index) => (
              <div key={year.year} className="relative group">
                {/* Connector Line (hidden on mobile) */}
                {index < blueprintYears.length - 1 && (
                  <div className="hidden xl:block absolute top-24 left-full w-8 h-0.5 bg-gray-300 z-10" />
                )}
                
                {/* Card */}
                <div className="card p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${year.color} mb-4`}>
                      <year.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{year.year}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${year.color} bg-clip-text text-transparent`}>
                      {year.theme}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6">{year.description}</p>

                  {/* Goals */}
                  <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Key Goals:</p>
                    <p className="text-sm text-gray-600">{year.goals}</p>
                  </div>

                  {/* Checklist Preview */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-gray-700">Action Items:</p>
                    {year.checklist.slice(0, 3).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-2">
                        <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{item}</p>
                      </div>
                    ))}
                    {year.checklist.length > 3 && (
                      <p className="text-sm text-gray-500 italic">+{year.checklist.length - 3} more items</p>
                    )}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/blueprint/${year.year.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group"
                  >
                    View Full Plan
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Get access to the complete four-year blueprint with detailed checklists, 
              timelines, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary">
                Start Free Trial
              </Link>
              <Link href="/blueprint" className="btn-outline">
                Explore Blueprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
