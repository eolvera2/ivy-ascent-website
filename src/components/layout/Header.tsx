'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Bars3Icon, 
  XMarkIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'The Blueprint', href: '/blueprint' },
  { name: 'Universities', href: '/universities' },
  { name: 'Resources', href: '/resources' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Services', href: '/services' },
]

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'zh-HK', name: '繁體中文', flag: '🇭🇰' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(languages[0])

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <AcademicCapIcon className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gradient">Ivy Ascent</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <GlobeAltIcon className="h-4 w-4" />
              <span>{currentLanguage.flag} {currentLanguage.name}</span>
            </button>
            
            {languageMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setCurrentLanguage(language)
                      setLanguageMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {language.flag} {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors flex items-center space-x-1"
          >
            <UserIcon className="h-4 w-4" />
            <span>Log in</span>
          </Link>
          
          <Link
            href="/get-started"
            className="btn-primary text-sm py-2 px-4"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
                <span className="text-xl font-bold text-gradient">Ivy Ascent</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500">Language</p>
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setCurrentLanguage(language)
                          setMobileMenuOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        {language.flag} {language.name}
                      </button>
                    ))}
                  </div>
                  <Link
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/get-started"
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
