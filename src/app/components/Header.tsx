'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'

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
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Image src='/img/FINAL 3.png' alt="Custom Icon" width={139} height={71.27} />
        </Link>
          
          <div className="hidden md:flex items-center">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {navButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.path}
                  className={`${
                    activeButton === button.name
                      ? 'text-blue-900 border-b-2 border-blue-900'
                      : 'text-gray-600 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-colors`}
                  onClick={() => setActiveButton(button.name)}
                >
                  {button.name}
                </Link>
              ))}
            </div>

            {/* Language Selector and Auth */}
            <div className="ml-8 flex items-center space-x-4">
              {/* Language Selector */}

              {/* Sign Up/User Button */}
              <div className="flex items-center space-x-1">
                <SignedOut>
                  <div className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <SignUpButton />
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton/>
                </SignedIn>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <select
                  defaultValue="fr"
                  className="bg-transparent border-none focus:outline-none text-sm"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}