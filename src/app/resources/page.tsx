import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { 
  BookOpenIcon,
  VideoCameraIcon,
  CalculatorIcon,
  ChatBubbleBottomCenterTextIcon,
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Resources - College Prep Tools & Guides | Ivy Ascent',
  description: 'Comprehensive college preparation resources including guides, tools, calculators, and expert insights for Ivy League success.',
}

const resourceCategories = [
  {
    title: 'College Guides',
    description: 'In-depth guides covering every aspect of college preparation',
    icon: BookOpenIcon,
    color: 'from-blue-500 to-blue-600',
    resources: [
      { title: 'Complete Guide to College Essays', type: 'Guide', readTime: '45 min' },
      { title: 'SAT/ACT Test Prep Strategy', type: 'Guide', readTime: '30 min' },
      { title: 'Extracurricular Activities That Matter', type: 'Guide', readTime: '25 min' },
      { title: 'Letters of Recommendation Guide', type: 'Guide', readTime: '20 min' },
      { title: 'Financial Aid and Scholarships', type: 'Guide', readTime: '35 min' }
    ]
  },
  {
    title: 'Video Courses',
    description: 'Expert-led video courses on key admission topics',
    icon: VideoCameraIcon,
    color: 'from-purple-500 to-purple-600',
    resources: [
      { title: 'Essay Writing Masterclass', type: 'Video Course', duration: '3 hours' },
      { title: 'Interview Preparation Workshop', type: 'Video Course', duration: '2 hours' },
      { title: 'Academic Planning Strategy', type: 'Video Course', duration: '2.5 hours' },
      { title: 'Building Your Spike', type: 'Video Course', duration: '1.5 hours' },
      { title: 'College Application Timeline', type: 'Video Course', duration: '1 hour' }
    ]
  },
  {
    title: 'Tools & Calculators',
    description: 'Interactive tools to help plan and track your progress',
    icon: CalculatorIcon,
    color: 'from-green-500 to-green-600',
    resources: [
      { title: 'College Admissions Calculator', type: 'Tool', description: 'Estimate admission chances' },
      { title: 'GPA Calculator', type: 'Tool', description: 'Calculate weighted/unweighted GPA' },
      { title: 'Cost of Attendance Calculator', type: 'Tool', description: 'Estimate college costs' },
      { title: 'Application Timeline Planner', type: 'Tool', description: 'Plan your application schedule' },
      { title: 'Activity Tracker', type: 'Tool', description: 'Track extracurricular hours' }
    ]
  },
  {
    title: 'Blog & Insights',
    description: 'Latest trends, tips, and insights from admissions experts',
    icon: ChatBubbleBottomCenterTextIcon,
    color: 'from-orange-500 to-orange-600',
    resources: [
      { title: 'What Admissions Officers Really Want', type: 'Article', date: 'Dec 2024' },
      { title: '2025 College Admissions Trends', type: 'Article', date: 'Nov 2024' },
      { title: 'Building Authentic Leadership', type: 'Article', date: 'Oct 2024' },
      { title: 'Test-Optional Strategies', type: 'Article', date: 'Sep 2024' },
      { title: 'Summer Program Selection Guide', type: 'Article', date: 'Aug 2024' }
    ]
  }
]

const featuredResources = [
  {
    title: 'The Complete College Application Checklist',
    description: 'A comprehensive checklist covering every step of the college application process, from freshman year planning to senior year submissions.',
    type: 'Featured Guide',
    readTime: '60 min',
    image: '/resources/checklist-guide.jpg',
    tags: ['Planning', 'Applications', 'Timeline']
  },
  {
    title: 'Ivy League Essay Examples & Analysis',
    description: 'Real examples of successful essays that got students into Harvard, Yale, Princeton, and other top schools, with expert analysis.',
    type: 'Premium Content',
    readTime: '90 min',
    image: '/resources/essay-examples.jpg',
    tags: ['Essays', 'Examples', 'Analysis']
  },
  {
    title: 'Building Your Academic Spike',
    description: 'Learn how to develop a compelling academic specialty that sets you apart from other high-achieving students.',
    type: 'Strategy Guide',
    readTime: '40 min',
    image: '/resources/academic-spike.jpg',
    tags: ['Strategy', 'Academics', 'Differentiation']
  }
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Everything you need to succeed in your college journey. From comprehensive guides 
              to interactive tools, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Resources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our most popular and comprehensive resources to accelerate your college preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <div key={resource.title} className="card p-6 group flex flex-col h-full">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-6 flex items-center justify-center">
                  <AcademicCapIcon className="w-16 h-16 text-primary-400" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {resource.type}
                  </span>
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-auto"
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore by Category
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find exactly what you need with our organized resource categories.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {resourceCategories.map((category) => (
              <div key={category.title} className="card p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 flex-grow">
                  {category.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <h4 className="font-medium text-gray-900">{resource.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{resource.type}</span>
                          {'readTime' in resource && resource.readTime && (
                            <>
                              <span>•</span>
                              <span>{resource.readTime}</span>
                            </>
                          )}
                          {'duration' in resource && resource.duration && (
                            <>
                              <span>•</span>
                              <span>{resource.duration}</span>
                            </>
                          )}
                          {'date' in resource && resource.date && (
                            <>
                              <span>•</span>
                              <span>{resource.date}</span>
                            </>
                          )}
                        </div>
                        {'description' in resource && resource.description && (
                          <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        )}
                      </div>
                      <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link
                    href="#"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    View All {category.title} →
                  </Link>
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
              Need Personalized Guidance?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              While our resources are comprehensive, sometimes you need one-on-one help. 
              Our expert coaches are here to provide personalized guidance.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Explore Coaching Services
              </Link>
              <Link href="/consultation" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
