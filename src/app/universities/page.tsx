import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  StarIcon, 
  MapPinIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'University Hubs - Target School Strategies | Ivy Ascent',
  description: 'Deep dive into each top university with detailed admissions insights, ideal applicant profiles, and tailored strategies for success.',
}

const universities = [
  {
    name: 'Harvard University',
    location: 'Cambridge, MA',
    acceptanceRate: '3.4%',
    avgSAT: '1520-1580',
    avgGPA: '4.18',
    color: 'from-red-600 to-red-700',
    description: 'The oldest institution of higher education in the United States, Harvard seeks students who demonstrate academic excellence, leadership potential, and diverse perspectives.',
    keyTraits: [
      'Intellectual curiosity and academic excellence',
      'Leadership potential in chosen activities',
      'Community impact and service orientation',
      'Diverse perspectives and experiences'
    ],
    admissionsPhilosophy: 'Harvard looks for students who will make the most of their educational opportunities and contribute to the vibrant Harvard community. They value intellectual curiosity, character, and the potential to contribute to society.',
    idealApplicant: {
      academic: 'Top 1-5% of class, rigorous curriculum with multiple APs, exceptional performance in chosen academic focus area',
      extracurricular: 'Significant leadership roles, national/international recognition, deep impact in chosen activities',
      personal: 'Strong character, resilience, cultural awareness, ability to contribute unique perspectives'
    },
    essayTips: [
      'Show intellectual curiosity through specific examples',
      'Demonstrate leadership through measurable impact',
      'Share authentic personal stories that reveal character',
      'Connect your goals to Harvard\'s mission and values'
    ],
    slug: 'harvard',
    founded: '1636',
    undergraduateSize: '6,700',
    graduationRate: '98%'
  },
  {
    name: 'Yale University',
    location: 'New Haven, CT',
    acceptanceRate: '4.6%',
    avgSAT: '1510-1570',
    avgGPA: '4.14',
    color: 'from-blue-600 to-blue-700',
    description: 'Yale University combines a commitment to liberal arts education with cutting-edge research, seeking students who will thrive in a collaborative academic environment.',
    keyTraits: [
      'Well-rounded excellence across multiple areas',
      'Creative thinking and artistic expression',
      'Strong school spirit and community engagement',
      'Collaborative mindset and team leadership'
    ],
    admissionsPhilosophy: 'Yale seeks students who will take advantage of Yale\'s rich resources and contribute to the Yale community. They look for academic ability, extracurricular distinction, and personal character.',
    idealApplicant: {
      academic: 'Top 5% of class, challenging coursework, strong performance across subjects with particular strength in chosen field',
      extracurricular: 'Leadership in multiple activities, creative pursuits, community service, athletic achievement',
      personal: 'Collaborative spirit, intellectual engagement, commitment to community, personal growth mindset'
    },
    essayTips: [
      'Showcase your intellectual vitality through specific examples',
      'Demonstrate how you contribute to communities',
      'Share moments of personal growth and learning',
      'Connect your interests to Yale\'s residential college system'
    ],
    slug: 'yale',
    founded: '1701',
    undergraduateSize: '6,000',
    graduationRate: '97%'
  },
  {
    name: 'Princeton University',
    location: 'Princeton, NJ',
    acceptanceRate: '4.0%',
    avgSAT: '1500-1570',
    avgGPA: '3.95',
    color: 'from-orange-600 to-orange-700',
    description: 'Princeton University is renowned for its undergraduate focus, honor code, and eating clubs, seeking students who demonstrate academic excellence and personal integrity.',
    keyTraits: [
      'Academic achievement and intellectual passion',
      'Personal character and integrity',
      'Future leadership potential',
      'Commitment to service and community'
    ],
    admissionsPhilosophy: 'Princeton looks for students who have achieved academic excellence while making meaningful contributions to their communities. They value character, leadership, service, and diverse perspectives.',
    idealApplicant: {
      academic: 'Top 5% of class, rigorous curriculum, exceptional academic performance, research experience preferred',
      extracurricular: 'Sustained leadership, significant achievements, community impact, diverse interests',
      personal: 'Strong moral character, intellectual curiosity, resilience, commitment to serving others'
    },
    essayTips: [
      'Highlight your academic passions with specific examples',
      'Demonstrate personal integrity through stories',
      'Show commitment to serving your community',
      'Explain how Princeton\'s honor code resonates with you'
    ],
    slug: 'princeton',
    founded: '1746',
    undergraduateSize: '5,400',
    graduationRate: '97%'
  },
  {
    name: 'Stanford University',
    location: 'Stanford, CA',
    acceptanceRate: '3.9%',
    avgSAT: '1510-1570',
    avgGPA: '4.18',
    color: 'from-red-500 to-red-600',
    description: 'Stanford University sits at the heart of Silicon Valley, seeking innovative students who want to make a positive impact on the world through entrepreneurship and leadership.',
    keyTraits: [
      'Innovation mindset and entrepreneurial spirit',
      'Risk-taking and resilience',
      'Global impact orientation',
      'Collaborative leadership style'
    ],
    admissionsPhilosophy: 'Stanford seeks students who will be tomorrow\'s leaders and innovators. They look for intellectual vitality, demonstrated leadership, and a commitment to making a positive difference.',
    idealApplicant: {
      academic: 'Top 5% of class, challenging curriculum, evidence of intellectual curiosity and innovation',
      extracurricular: 'Entrepreneurial ventures, leadership roles, innovative projects, global engagement',
      personal: 'Resilience, adaptability, global mindset, commitment to positive impact'
    },
    essayTips: [
      'Share examples of innovation and creative problem-solving',
      'Demonstrate your entrepreneurial mindset',
      'Show how you plan to make a positive impact',
      'Connect your goals to Stanford\'s culture of innovation'
    ],
    slug: 'stanford',
    founded: '1885',
    undergraduateSize: '7,000',
    graduationRate: '94%'
  },
  {
    name: 'MIT',
    location: 'Cambridge, MA',
    acceptanceRate: '4.1%',
    avgSAT: '1540-1580',
    avgGPA: '4.17',
    color: 'from-gray-600 to-gray-700',
    description: 'The Massachusetts Institute of Technology is a world leader in science, technology, and innovation, seeking students who are passionate about solving complex problems.',
    keyTraits: [
      'STEM excellence and technical aptitude',
      'Problem-solving mindset',
      'Hands-on learning approach',
      'Collaborative innovation'
    ],
    admissionsPhilosophy: 'MIT seeks students who will use science, technology, and other areas of scholarship to serve the nation and the world in the 21st century. They look for academic excellence, character, and the ability to work collaboratively.',
    idealApplicant: {
      academic: 'Exceptional performance in STEM subjects, research experience, evidence of scientific curiosity',
      extracurricular: 'Science competitions, technical projects, research participation, STEM leadership',
      personal: 'Collaborative spirit, resilience, problem-solving mindset, commitment to using technology for good'
    },
    essayTips: [
      'Showcase your passion for STEM through specific projects',
      'Demonstrate collaborative problem-solving abilities',
      'Share how you want to use technology to help others',
      'Explain your fit with MIT\'s hands-on learning culture'
    ],
    slug: 'mit',
    founded: '1861',
    undergraduateSize: '4,500',
    graduationRate: '95%'
  },
  {
    name: 'Columbia University',
    location: 'New York, NY',
    acceptanceRate: '3.7%',
    avgSAT: '1510-1570',
    avgGPA: '4.15',
    color: 'from-blue-500 to-blue-600',
    description: 'Columbia University leverages its location in New York City to provide students with unparalleled opportunities for internships, cultural experiences, and global engagement.',
    keyTraits: [
      'Global citizenship and cultural awareness',
      'Urban engagement and city appreciation',
      'Diverse perspectives and experiences',
      'Intellectual curiosity across disciplines'
    ],
    admissionsPhilosophy: 'Columbia seeks students who are intellectually curious, academically excellent, and eager to engage with the world around them. They value diversity, global perspective, and urban engagement.',
    idealApplicant: {
      academic: 'Strong academic performance, interdisciplinary interests, global awareness',
      extracurricular: 'Cultural engagement, international experience, urban involvement, diverse activities',
      personal: 'Global mindset, cultural sensitivity, adaptability, intellectual curiosity'
    },
    essayTips: [
      'Demonstrate your global perspective and cultural awareness',
      'Show how you would take advantage of NYC opportunities',
      'Highlight your intellectual curiosity across disciplines',
      'Connect your background to Columbia\'s diverse community'
    ],
    slug: 'columbia',
    founded: '1754',
    undergraduateSize: '8,200',
    graduationRate: '95%'
  }
]

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              University Hubs
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Deep dive into each top university with detailed admissions insights, 
              ideal applicant profiles, and tailored strategies for success.
            </p>
          </div>
        </div>
      </div>

      {/* Universities Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Target School Strategies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each university has its own culture, values, and ideal applicant profile. 
              Our detailed hubs help you understand exactly what each school is looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {universities.map((university) => (
              <div key={university.name} className="card p-0 overflow-hidden group flex flex-col h-full">
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${university.color} text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{university.name}</h3>
                      <div className="flex items-center mt-2 text-sm opacity-90">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {university.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-75">Founded</div>
                      <div className="font-bold">{university.founded}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Acceptance Rate</div>
                      <div className="font-bold text-lg text-red-600">{university.acceptanceRate}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">SAT Range</div>
                      <div className="font-bold text-lg text-blue-600">{university.avgSAT}</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-sm text-gray-500">Avg GPA</div>
                      <div className="font-bold text-lg text-green-600">{university.avgGPA}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">{university.description}</p>

                  {/* Key Traits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <StarIcon className="w-4 h-4 mr-2 text-yellow-400" />
                      What They Value
                    </h4>
                    <div className="space-y-2">
                      {university.keyTraits.slice(0, 3).map((trait, index) => (
                        <div key={index} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {trait}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="text-gray-500">Undergrad Size</div>
                      <div className="font-medium">{university.undergraduateSize}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Graduation Rate</div>
                      <div className="font-medium">{university.graduationRate}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/universities/${university.slug}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 group-hover:shadow-lg mt-auto"
                  >
                    <DocumentTextIcon className="w-4 h-4 mr-2" />
                    View Complete Strategy Guide
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Universities */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                More Top Universities Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;re expanding our university hubs to include all Ivy League schools, 
                top liberal arts colleges, and elite technical institutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
                <div>• University of Pennsylvania</div>
                <div>• Dartmouth College</div>
                <div>• Brown University</div>
                <div>• Cornell University</div>
                <div>• Williams College</div>
                <div>• Amherst College</div>
                <div>• Caltech</div>
                <div>• Duke University</div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary">
                  Request Specific School
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gradient-bg py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Target Your Dream School?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Get personalized strategies, application timelines, and expert guidance 
              tailored to your target universities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/signup" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Start Your Strategy
              </Link>
              <Link href="/consultation" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
