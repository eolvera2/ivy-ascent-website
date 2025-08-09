import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import {
  CheckIcon,
  ArrowRightIcon,
  ClockIcon,
  BookOpenIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'The Four-Year Blueprint - Strategic College Prep | Ivy Ascent',
  description: 'Your complete roadmap to Ivy League success. Grade-by-grade planning from freshman to senior year with actionable checklists and expert guidance.',
}

const blueprintYears = [
  {
    year: '9th Grade',
    theme: 'Exploration & Foundation',
    color: 'from-blue-500 to-blue-600',
    icon: BookOpenIcon,
    description: 'Build strong academic foundations while exploring diverse interests and activities.',
    keyGoals: [
      'Establish excellent study habits',
      'Explore 3-5 different extracurricular activities',
      'Build relationships with teachers',
      'Maintain GPA above 3.7'
    ],
    academicFocus: [
      'Take challenging courses (Honors if available)',
      'Develop strong writing skills',
      'Begin building relationships with teachers',
      'Focus on core subjects: Math, English, Science, History'
    ],
    extracurriculars: [
      'Join 3-5 clubs or activities to explore interests',
      'Try different types of activities (academic, sports, arts, service)',
      'Focus on exploration rather than leadership initially',
      'Document experiences and reflections'
    ],
    summer: [
      'Academic enrichment programs',
      'Volunteer work in community',
      'Explore career interests through shadowing',
      'Read extensively across different genres'
    ],
    testing: [
      'No standardized testing required',
      'Focus on strong performance in school assessments',
      'Begin familiarizing with PSAT format (optional)'
    ]
  },
  {
    year: '10th Grade',
    theme: 'Focus & Commitment',
    color: 'from-green-500 to-green-600',
    icon: ClockIcon,
    description: 'Narrow your focus to 2-3 core interests while deepening your commitment and seeking early leadership opportunities.',
    keyGoals: [
      'Take PSAT 10 for practice',
      'Focus on 2-3 core extracurricular activities',
      'Seek initial leadership opportunities',
      'Maintain GPA above 3.8'
    ],
    academicFocus: [
      'Continue rigorous course load',
      'Consider taking first AP course if ready',
      'Strengthen relationships with teachers',
      'Begin developing academic "spike" or specialty'
    ],
    extracurriculars: [
      'Narrow focus to 2-3 core activities',
      'Seek leadership roles or special projects',
      'Deepen involvement and impact',
      'Begin planning summer activities around interests'
    ],
    summer: [
      'Competitive programs related to interests',
      'Internships or job shadowing',
      'Service trips or intensive volunteer work',
      'Academic camps or pre-college programs'
    ],
    testing: [
      'Take PSAT 10 in spring',
      'Review results and identify areas for improvement',
      'Begin light SAT/ACT preparation if needed'
    ]
  },
  {
    year: '11th Grade',
    theme: 'Excellence & Leadership',
    color: 'from-purple-500 to-purple-600',
    icon: AcademicCapIcon,
    description: 'Achieve peak academic performance while demonstrating significant leadership and pursuing your "spike" with passion.',
    keyGoals: [
      'Take SAT/ACT and achieve target scores',
      'Secure major leadership positions',
      'Excel in rigorous course load',
      'Begin college research and visits'
    ],
    academicFocus: [
      'Take multiple AP courses (3-5 depending on school)',
      'Maintain highest possible GPA',
      'Develop expertise in chosen academic area',
      'Build strong relationships for recommendations'
    ],
    extracurriculars: [
      'Hold significant leadership positions',
      'Make measurable impact in chosen activities',
      'Pursue awards and recognition',
      'Develop your unique "spike" or expertise area'
    ],
    summer: [
      'Highly selective programs or internships',
      'Independent research projects',
      'Significant service or impact projects',
      'College visits and information sessions'
    ],
    testing: [
      'Take PSAT/NMSQT for National Merit consideration',
      'Take SAT/ACT (aim for 1500+ SAT or 34+ ACT)',
      'Take SAT Subject Tests if required',
      'Retake tests if needed to reach target scores'
    ]
  },
  {
    year: '12th Grade',
    theme: 'Application & Presentation',
    color: 'from-red-500 to-red-600',
    icon: UserGroupIcon,
    description: 'Craft compelling applications that tell your unique story while maintaining academic excellence and leadership.',
    keyGoals: [
      'Submit outstanding college applications',
      'Secure strong letters of recommendation',
      'Write compelling personal essays',
      'Maintain senior year academic performance'
    ],
    academicFocus: [
      'Continue rigorous course load (no senioritis!)',
      'Perform well on AP exams',
      'Maintain or improve GPA',
      'Complete any remaining graduation requirements'
    ],
    extracurriculars: [
      'Continue leadership roles with impact',
      'Complete capstone projects or initiatives',
      'Mentor underclassmen in your activities',
      'Document achievements for applications'
    ],
    summer: [
      'Summer before: Pre-college programs or internships',
      'Work on college applications and essays',
      'Prepare for interviews',
      'Finalize college list and visit top choices'
    ],
    testing: [
      'Retake SAT/ACT if needed (by November)',
      'Take any remaining SAT Subject Tests',
      'Send test scores to colleges',
      'Focus on AP exam preparation'
    ]
  }
]

export default function BlueprintPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Four-Year Blueprint
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Your comprehensive roadmap to Ivy League success. Every year has a purpose, 
              every action has intention, and every step brings you closer to your dream school.
            </p>
          </div>
        </div>
      </div>

      {/* Blueprint Overview */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Strategic Planning for Every Year
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our blueprint breaks down the college preparation journey into manageable, 
              year-specific goals that build upon each other for maximum impact.
            </p>
          </div>

          {/* Year-by-Year Breakdown */}
          <div className="space-y-24">
            {blueprintYears.map((year, index) => (
              <div key={year.year} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-x-16`}>
                {/* Content */}
                <div className="lg:flex-1">
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${year.color}`}>
                        <year.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{year.year}</h3>
                        <p className={`text-lg font-semibold bg-gradient-to-r ${year.color} bg-clip-text text-transparent`}>
                          {year.theme}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600">{year.description}</p>
                  </div>

                  {/* Key Goals */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-primary-600" />
                      Key Goals
                    </h4>
                    <div className="space-y-2">
                      {year.keyGoals.map((goal, goalIndex) => (
                        <div key={goalIndex} className="flex items-start space-x-3">
                          <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Academic Focus</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {year.academicFocus.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Extracurriculars</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {year.extracurriculars.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Summer Planning</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {year.summer.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Testing Timeline</h5>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {year.testing.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/blueprint/${year.year.toLowerCase().replace(' ', '-')}`}
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                    >
                      <DocumentTextIcon className="w-4 h-4 mr-2" />
                      View Detailed Checklist
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:flex-1 mt-12 lg:mt-0">
                  <div className={`relative rounded-2xl p-8 bg-gradient-to-br ${year.color} text-white`}>
                    <div className="text-center">
                      <year.icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <h4 className="text-2xl font-bold mb-2">{year.year}</h4>
                      <p className="text-lg opacity-90 mb-6">{year.theme}</p>
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-sm opacity-80 mb-2">Focus Areas:</p>
                        <div className="space-y-1">
                          {year.keyGoals.slice(0, 2).map((goal, goalIndex) => (
                            <div key={goalIndex} className="text-sm">• {goal}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              Ready to Start Your Blueprint?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Get personalized checklists, timeline reminders, and expert guidance 
              tailored to your grade level and goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Create Your Blueprint
              </Link>
              <Link href="/demo" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
