'use client'

import {
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  ChartBarIcon,
  UserGroupIcon,
  BookOpenIcon,
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Personalized Four-Year Blueprint',
    description: 'Get a customized roadmap for each year of high school, tailored to your academic interests and target universities.',
    icon: ClipboardDocumentListIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Interactive Checklists',
    description: 'Track your progress with detailed, actionable checklists covering academics, extracurriculars, and standardized testing.',
    icon: UserGroupIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'University-Specific Hubs',
    description: 'Deep dive into each Ivy League school with admissions philosophy, ideal applicant profiles, and essay guides.',
    icon: AcademicCapIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Expert Coaching & Mentorship',
    description: 'Work with former admissions officers and successful alumni for personalized guidance and application review.',
    icon: ChartBarIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    name: 'Comprehensive Resource Library',
    description: 'Access in-depth guides, video courses, case studies, and successful application examples.',
    icon: BookOpenIcon,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    name: 'AI-Powered Insights',
    description: 'Leverage artificial intelligence to analyze your application strength and get personalized recommendations.',
    icon: CogIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  },
  {
    name: 'Multilingual Support',
    description: 'Platform available in English, Mandarin, and Cantonese to serve our global community of students.',
    icon: GlobeAltIcon,
    color: 'text-teal-600',
    bgColor: 'bg-teal-50'
  },
  {
    name: 'Privacy & Security',
    description: 'Your personal information and application data are protected with enterprise-grade security measures.',
    icon: ShieldCheckIcon,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive College Admissions Platform
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From freshman year planning to senior year applications, our platform provides all the tools, 
            resources, and expert guidance you need to succeed.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                  </div>
                  <span className="group-hover:text-primary-600 transition-colors duration-300">{feature.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
