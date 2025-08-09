/**
 * Integration test for the entire website
 * Tests all routes, basic functionality, and ensures no 404 errors
 */

import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import path from 'path'

describe('Website Integration Tests', () => {
  // Test that all expected page files exist
  describe('Page Files Existence', () => {
    const expectedPages = [
      'src/app/page.tsx',           // Home page
      'src/app/blueprint/page.tsx',  // Blueprint page
      'src/app/universities/page.tsx', // Universities page
      'src/app/resources/page.tsx',  // Resources page
      'src/app/services/page.tsx',   // Services page
      'src/app/pricing/page.tsx',    // Pricing page
      'src/app/login/page.tsx',      // Login page
      'src/app/get-started/page.tsx' // Get Started page
    ]

    expectedPages.forEach(pagePath => {
      it(`should have ${pagePath} file`, () => {
        const fullPath = path.join(process.cwd(), pagePath)
        expect(existsSync(fullPath)).toBe(true)
      })
    })
  })

  // Test that all page files have proper structure
  describe('Page Structure Validation', () => {
    const pageFiles = [
      'src/app/page.tsx',
      'src/app/blueprint/page.tsx',
      'src/app/universities/page.tsx',
      'src/app/resources/page.tsx',
      'src/app/services/page.tsx',
      'src/app/pricing/page.tsx',
      'src/app/login/page.tsx',
      'src/app/get-started/page.tsx'
    ]

    pageFiles.forEach(pageFile => {
      it(`${pageFile} should have proper structure`, () => {
        const filePath = path.join(process.cwd(), pageFile)
        const content = readFileSync(filePath, 'utf8')
        
        // Should have metadata export
        expect(content).toMatch(/export const metadata/)
        
        // Should have default export
        expect(content).toMatch(/export default function/)
        
        // Should import Header and Footer components
        expect(content).toMatch(/import.*Header/)
        expect(content).toMatch(/import.*Footer/)
        
        // Should render Header and Footer
        expect(content).toMatch(/<Header/)
        expect(content).toMatch(/<Footer/)
      })
    })
  })

  // Test that component files exist
  describe('Component Files Existence', () => {
    const expectedComponents = [
      'src/components/layout/Header.tsx',
      'src/components/layout/Footer.tsx',
      'src/components/sections/Hero.tsx',
      'src/components/sections/Features.tsx',
      'src/components/sections/Blueprint.tsx',
      'src/components/sections/Universities.tsx',
      'src/components/sections/Pricing.tsx',
      'src/components/sections/Testimonials.tsx',
      'src/components/sections/CTA.tsx'
    ]

    expectedComponents.forEach(componentPath => {
      it(`should have ${componentPath} file`, () => {
        const fullPath = path.join(process.cwd(), componentPath)
        expect(existsSync(fullPath)).toBe(true)
      })
    })
  })

  // Test TypeScript compilation
  describe('TypeScript Compilation', () => {
    it('should compile without TypeScript errors', () => {
      try {
        // Run TypeScript compiler check
        execSync('npx tsc --noEmit', { 
          cwd: process.cwd(),
          stdio: 'pipe'
        })
      } catch (error: any) {
        // If there are TypeScript errors, fail the test with details
        console.error('TypeScript compilation errors:', error.stdout?.toString())
        throw new Error(`TypeScript compilation failed: ${error.message}`)
      }
    })
  })

  // Test Next.js build
  describe('Next.js Build', () => {
    it('should build successfully', () => {
      try {
        // Run Next.js build
        execSync('npm run build', { 
          cwd: process.cwd(),
          stdio: 'pipe',
          timeout: 120000 // 2 minutes timeout
        })
      } catch (error: any) {
        console.error('Build errors:', error.stdout?.toString())
        throw new Error(`Build failed: ${error.message}`)
      }
    }, 120000) // 2 minutes timeout for this test
  })

  // Test that all navigation links point to existing pages
  describe('Navigation Link Validation', () => {
    it('Header component should have valid navigation links', () => {
      const headerPath = path.join(process.cwd(), 'src/components/layout/Header.tsx')
      const content = readFileSync(headerPath, 'utf8')
      
      // Check that navigation links point to existing routes
      const navigationLinks = [
        '/blueprint',
        '/universities', 
        '/resources',
        '/services',
        '/pricing',
        '/login',
        '/get-started'
      ]
      
      navigationLinks.forEach(link => {
        expect(content).toMatch(new RegExp(`href=["']${link}["']`))
      })
    })
  })

  // Test imports and dependencies
  describe('Import Validation', () => {
    it('should not have any missing imports', () => {
      const pageFiles = [
        'src/app/page.tsx',
        'src/app/blueprint/page.tsx',
        'src/app/universities/page.tsx',
        'src/app/resources/page.tsx',
        'src/app/services/page.tsx',
        'src/app/pricing/page.tsx',
        'src/app/login/page.tsx',
        'src/app/get-started/page.tsx'
      ]

      pageFiles.forEach(pageFile => {
        const filePath = path.join(process.cwd(), pageFile)
        const content = readFileSync(filePath, 'utf8')
        
        // Check for proper Next.js imports
        expect(content).toMatch(/import.*from ['"]next\//)
        
        // Check for component imports
        expect(content).toMatch(/import.*from ['"]@\/components\//)
      })
    })
  })

  // Test configuration files
  describe('Configuration Files', () => {
    const configFiles = [
      'next.config.js',
      'tailwind.config.js',
      'postcss.config.js',
      'tsconfig.json',
      'package.json'
    ]

    configFiles.forEach(configFile => {
      it(`should have ${configFile}`, () => {
        const filePath = path.join(process.cwd(), configFile)
        expect(existsSync(filePath)).toBe(true)
      })
    })
  })

  // Test package.json scripts
  describe('Package.json Scripts', () => {
    it('should have all required scripts', () => {
      const packagePath = path.join(process.cwd(), 'package.json')
      const packageContent = JSON.parse(readFileSync(packagePath, 'utf8'))
      
      const requiredScripts = ['dev', 'build', 'start', 'lint', 'test']
      
      requiredScripts.forEach(script => {
        expect(packageContent.scripts).toHaveProperty(script)
      })
    })
  })
})
