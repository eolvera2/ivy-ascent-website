import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SignupForm from '@/components/auth/SignupForm'

export const metadata: Metadata = {
  title: 'Get Started - Create Your Ivy Ascent Account',
  description: 'Join thousands of students who have successfully gained admission to top universities with Ivy Ascent. Start your journey today.',
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <SignupForm />
      <Footer />
    </main>
  )
}
