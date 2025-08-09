import { render, screen } from '@testing-library/react'
import BlueprintPage from '@/app/blueprint/page'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Blueprint Page', () => {
  it('renders without crashing', () => {
    render(<BlueprintPage />)
    expect(screen.getByText(/Four-Year College Prep Blueprint/i)).toBeInTheDocument()
  })

  it('renders all grade sections', () => {
    render(<BlueprintPage />)
    expect(screen.getByText(/9th Grade/i)).toBeInTheDocument()
    expect(screen.getByText(/10th Grade/i)).toBeInTheDocument()
    expect(screen.getByText(/11th Grade/i)).toBeInTheDocument()
    expect(screen.getByText(/12th Grade/i)).toBeInTheDocument()
  })

  it('renders academic recommendations', () => {
    render(<BlueprintPage />)
    expect(screen.getByText(/Academic Excellence/i)).toBeInTheDocument()
    expect(screen.getByText(/Extracurricular Leadership/i)).toBeInTheDocument()
  })
})
