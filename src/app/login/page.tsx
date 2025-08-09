import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LoginForm from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Log In - Access Your Ivy Ascent Account',
  description: 'Sign in to your Ivy Ascent account to access personalized college prep resources, track your progress, and get expert guidance.',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <LoginForm />
      <Footer />
    </main>
  )
}
