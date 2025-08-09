/**
 * Test for Header component navigation links
 */

import { readFileSync } from 'fs'
import path from 'path'

describe('Header Component', () => {
  let headerContent: string

  beforeAll(() => {
    const headerPath = path.join(process.cwd(), 'src/components/layout/Header.tsx')
    headerContent = readFileSync(headerPath, 'utf8')
  })

  it('should contain all required navigation links', () => {
    const requiredLinks = [
      '/blueprint',
      '/universities',
      '/resources', 
      '/services',
      '/pricing',
      '/login',
      '/get-started'
    ]

    requiredLinks.forEach(linkPath => {
      expect(headerContent).toMatch(new RegExp(`href=["']${linkPath}["']`))
    })
  })

  it('should import required dependencies', () => {
    expect(headerContent).toMatch(/import.*Link.*from ['"]next\/link['"]/)
    expect(headerContent).toMatch(/import.*useState.*from ['"]react['"]/)
  })

  it('should have proper TypeScript types', () => {
    expect(headerContent).toMatch(/export default function Header/)
  })

  it('should contain brand/logo section', () => {
    expect(headerContent).toMatch(/Ivy Ascent/i)
  })

  it('should have mobile menu functionality', () => {
    expect(headerContent).toMatch(/mobile/i)
    expect(headerContent).toMatch(/menu/i)
  })
})
