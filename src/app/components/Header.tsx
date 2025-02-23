'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [activeButton, setActiveButton] = useState('Home')

  const navButtons = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
          DOURBIA          
          </Link>
          <div className="hidden md:flex space-x-8">
            {navButtons.map((button) => (
              <Link
                key={button.name}
                href={button.path}
                className={`${
                  activeButton === button.name
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors`}
                onClick={() => setActiveButton(button.name)}
              >
                {button.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}