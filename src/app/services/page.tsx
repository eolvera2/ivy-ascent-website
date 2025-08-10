import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { 
  AcademicCapIcon,
  DocumentTextIcon,
  UserGroupIcon,
  VideoCameraIcon,
  ClockIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Services - Expert College Admissions Coaching | Ivy Ascent',
  description: 'Professional college admissions services including essay review, one-on-one coaching, interview prep, and comprehensive application support.',
}

const services = [
  {
    name: 'Essay Review & Editing',
    description: 'Get expert feedback on your college essays from former admissions officers and writing specialists.',
    icon: DocumentTextIcon,
    color: 'from-blue-500 to-blue-600',
    pricing: 'Starting at $425 for 5-essay bundle',
    features: [
      'Detailed feedback on content, structure, and style',
      'Grammar and clarity improvements',
      'Alignment with university values and culture',
      'Multiple revision rounds included',
      '48-hour turnaround time',
      'Written feedback report with specific suggestions'
    ],
    process: [
      'Submit your essays through our secure portal',
      'Expert review within 48 hours',
      'Receive detailed feedback and suggestions',
      'Revise and resubmit for additional review',
      'Finalize your essays with confidence'
    ],
    ideal: 'Students who have drafted their essays and want professional feedback to make them exceptional.'
  },
  {
    name: 'One-on-One Coaching',
    description: 'Personalized guidance from former admissions officers to maximize your admission chances.',
    icon: UserGroupIcon,
    color: 'from-purple-500 to-purple-600',
    pricing: 'Starting at $200 per session',
    features: [
      'Former admissions officers from top universities',
      'Personalized college list development',
      'Application strategy planning',
      'Interview preparation and practice',
      'Activity list optimization',
      'Regular check-ins and progress tracking'
    ],
    process: [
      'Initial consultation to assess your profile',
      'Develop personalized strategy and timeline',
      'Regular coaching sessions (weekly or bi-weekly)',
      'Application review and feedback',
      'Final application submission support'
    ],
    ideal: 'Students who want comprehensive, personalized guidance throughout their entire application process.'
  },
  {
    name: 'Interview Preparation',
    description: 'Practice interviews with experts who know what admissions committees are looking for.',
    icon: VideoCameraIcon,
    color: 'from-green-500 to-green-600',
    pricing: '$150 per session',
    features: [
      'Mock interviews with former admissions officers',
      'University-specific interview prep',
      'Common question practice and strategies',
      'Body language and presentation coaching',
      'Confidence building techniques',
      'Video recording for self-review (optional)'
    ],
    process: [
      'Schedule mock interview session',
      'Practice with realistic interview scenarios',
      'Receive immediate feedback and tips',
      'Work on areas for improvement',
      'Build confidence for the real interview'
    ],
    ideal: 'Students who have been invited for interviews or want to prepare in advance.'
  },
  {
    name: 'Application Review',
    description: 'Comprehensive review of your complete application before submission.',
    icon: ClockIcon,
    color: 'from-orange-500 to-orange-600',
    pricing: '$300 per application',
    features: [
      'Complete application audit',
      'Consistency check across all components',
      'Strategic recommendations for improvement',
      'Deadline and requirement verification',
      'Submission checklist and timeline',
      'Last-minute optimization suggestions'
    ],
    process: [
      'Submit your complete application draft',
      'Expert review of all components',
      'Receive comprehensive feedback report',
      'Make recommended improvements',
      'Final review before submission'
    ],
    ideal: 'Students who want a final expert check before submitting their applications.'
  },
  {
    name: 'College List Consultation',
    description: 'Strategic guidance on building the perfect college list based on your profile and goals.',
    icon: AcademicCapIcon,
    color: 'from-red-500 to-red-600',
    pricing: '$175 per session',
    features: [
      'Analysis of your academic and extracurricular profile',
      'Reach, match, and safety school recommendations',
      'Fit assessment for each university',
      'Application strategy for each school type',
      'Timeline and priority planning',
      'Backup options and contingency planning'
    ],
    process: [
      'Complete comprehensive profile assessment',
      'Research and analyze potential schools',
      'Present curated college list with rationale',
      'Refine list based on your preferences',
      'Develop application strategy for each school'
    ],
    ideal: 'Students who are unsure which colleges to target or want to optimize their college list.'
  },
  {
    name: 'Scholarship Search & Strategy',
    description: 'Identify and apply for scholarships that match your profile and reduce college costs.',
    icon: SparklesIcon,
    color: 'from-yellow-500 to-yellow-600',
    pricing: '$125 per session',
    features: [
      'Personalized scholarship database search',
      'Application strategy for each scholarship',
      'Essay writing guidance for scholarship applications',
      'Timeline and deadline management',
      'Interview preparation for scholarship committees',
      'Financial aid optimization strategies'
    ],
    process: [
      'Profile assessment for scholarship eligibility',
      'Research and identify relevant scholarships',
      'Develop application strategy and timeline',
      'Support with applications and essays',
      'Track applications and follow up'
    ],
    ideal: 'Students looking to reduce college costs through scholarships and financial aid.'
  }
]

const packages = [
  {
    name: 'Complete Application Package',
    price: '$2,500',
    description: 'Everything you need for a successful application',
    includes: [
      '5 one-on-one coaching sessions',
      'Essay review bundle (up to 8 essays)',
      'Complete application review',
      'Interview preparation session',
      'College list consultation'
    ],
    savings: 'Save $500 compared to individual services'
  },
  {
    name: 'Essay Excellence Package',
    price: '$650',
    description: 'Perfect your essays with expert guidance',
    includes: [
      'Essay brainstorming session',
      'Essay review bundle (up to 8 essays)',
      'Writing workshop access',
      'Final polish and review'
    ],
    savings: 'Save $150 compared to individual services'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Expert Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Work directly with former admissions officers and college prep experts 
              to maximize your chances of admission to your dream schools.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Admissions Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from our comprehensive range of services designed to support 
              every aspect of your college application journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="card p-8 group flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                    <p className="text-lg font-semibold text-primary-600 mt-2">{service.pricing}</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Perfect For:</h4>
                    <p className="text-sm text-gray-600">{service.ideal}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group-hover:shadow-lg"
                  >
                    Book Consultation
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Package Deals */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Package Deals
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Save money and get comprehensive support with our bundled service packages.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className="card p-8 border-2 border-primary-200 relative flex flex-col h-full">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary-600 text-white">
                    <StarIcon className="w-4 h-4 mr-1" />
                    Popular Package
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                  <ul className="space-y-2">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-green-800">{pkg.savings}</p>
                </div>

                <Link
                  href="/consultation"
                  className="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-auto"
                >
                  Choose This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our streamlined process ensures you get the expert help you need, when you need it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Book Consultation',
                description: 'Schedule a free 30-minute consultation to discuss your needs and goals.'
              },
              {
                step: '2',
                title: 'Get Matched',
                description: 'We match you with the perfect expert based on your target schools and needs.'
              },
              {
                step: '3',
                title: 'Start Working',
                description: 'Begin working with your expert on your chosen service or package.'
              },
              {
                step: '4',
                title: 'Achieve Success',
                description: 'Submit outstanding applications and get accepted to your dream schools.'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Expert Help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Book a free consultation to discuss your goals and find the perfect service for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/consultation" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Book Free Consultation
              </Link>
              <Link href="/pricing" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
