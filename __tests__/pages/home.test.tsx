import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />)
  })

  it('renders the main heading', () => {
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Your Gateway to Elite Universities/i)
  })

  it('renders the hero section', () => {
    expect(screen.getByText(/Transform your college dreams into reality/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    expect(screen.getByRole('link', { name: /blueprint/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /universities/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /resources/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
  })

  it('renders the features section', () => {
    expect(screen.getByText(/Expert Guidance/i)).toBeInTheDocument()
    expect(screen.getByText(/Proven Track Record/i)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive Resources/i)).toBeInTheDocument()
  })

  it('renders the pricing section', () => {
    expect(screen.getByText(/Choose Your Path to Success/i)).toBeInTheDocument()
    expect(screen.getByText(/Free/i)).toBeInTheDocument()
    expect(screen.getByText(/Plus/i)).toBeInTheDocument()
    expect(screen.getByText(/Concierge/i)).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    expect(screen.getByText(/What Our Students Say/i)).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    expect(screen.getByText(/Ready to Begin Your Journey/i)).toBeInTheDocument()
  })

  it('renders the footer', () => {
    expect(screen.getByText(/© 2024 Ivy Ascent Platform/i)).toBeInTheDocument()
  })
})
