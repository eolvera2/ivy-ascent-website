import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'The Ivy Ascent Platform - Elite College Admissions Guidance',
  description: 'Demystify the elite college admissions process with personalized guidance, strategic planning, and expert insights for Ivy League success.',
  keywords: 'college admissions, ivy league, elite universities, college prep, admissions consulting',
  authors: [{ name: 'The Ivy Ascent Platform' }],
  openGraph: {
    title: 'The Ivy Ascent Platform - Elite College Admissions Guidance',
    description: 'Demystify the elite college admissions process with personalized guidance, strategic planning, and expert insights for Ivy League success.',
    url: 'https://ivyascent.com',
    siteName: 'The Ivy Ascent Platform',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Ivy Ascent Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ivy Ascent Platform - Elite College Admissions Guidance',
    description: 'Demystify the elite college admissions process with personalized guidance, strategic planning, and expert insights for Ivy League success.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
