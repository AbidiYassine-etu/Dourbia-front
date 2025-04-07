'use client'

import { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/Header.module.css'
import { useAuth } from '../context/auth-context'
import router from 'next/router'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeButton, setActiveButton] = useState('Home')
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {isLoggedIn, setIsLoggedIn} = useAuth();
  const [username, setUsername] = useState("");

  const navButtons = [
    { name: 'Home', path: '/' },
    { name: "à propos", path: '/about' },
    { name: 'Déstinations', path: '/destination' },
    { name: 'Expérience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false)
      }
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      const parsedUser = JSON.parse(user);
      setIsLoggedIn(true);
      setUsername(parsedUser.username);
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isMenuOpen,isDropdownOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.navContent}>
          <button 
            ref={hamburgerRef}
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href="/" className={styles.logoLink}>
            <Image 
              src='/img/FINAL 3.png' 
              alt="Logo" 
              width={139} 
              height={71.27}
            />
          </Link>

          {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

          <div ref={menuRef} className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.menuContent}>
              <div className={styles.navLinks}>
                {navButtons.map((button) => (
                  <Link
                    key={button.name}
                    href={button.path}
                    className={`${styles.navLink} ${activeButton === button.name ? styles.active : ''}`}
                    onClick={() => {
                      setActiveButton(button.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    {button.name}
                  </Link>
                ))}
                <div className={styles.loginSection}>
                  <div className={styles.userIcon}>
                    {isLoggedIn ? (
                      <div className={styles.dropdown}>
                        <button className={styles.dropdownToggle}
                        onClick={()=> setIsDropdownOpen(prev => !prev)}
                        aria-expanded={isDropdownOpen}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                            <g clipPath="url(#clip0_2_230)">
                              <path d="M10.74 10.22C12.72 9.45 14.12 7.53 14.12 5.29C14.12 2.37 11.75 0 8.83 0C5.91 0 3.54 2.37 3.54 5.29C3.54 7.53 4.95 9.45 6.92 10.22C2.97 11.1 0 14.62 0 18.84C0 20.58 1.42 22 3.17 22H14.5C16.25 22 17.67 20.58 17.67 18.83C17.66 14.62 14.69 11.1 10.74 10.22ZM5.84 5.29C5.84 3.64 7.18 2.3 8.83 2.3C10.48 2.3 11.82 3.64 11.82 5.29C11.82 6.94 10.48 8.28 8.83 8.28C7.18 8.28 5.84 6.94 5.84 5.29ZM14.5 19.7H3.17C2.69 19.7 2.3 19.31 2.3 18.83C2.3 15.23 5.23 12.3 8.83 12.3C12.43 12.3 15.36 15.23 15.36 18.83C15.36 19.32 14.97 19.7 14.5 19.7Z" fill="#002863"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_2_230">
                                <rect width="17.66" height="22" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                          
                        </button>
                        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownOpen : ''}`}>
                        <span className={styles.dropdownUser}>Bonjour, {username}</span>
                          <Link href="/profile">Profil</Link>
                          <Link href="/settings">Paramètres</Link>
                          <a onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            localStorage.removeItem("isLoggedIn");
                            setIsLoggedIn(false);
                            router.push("/");
                          }}>Déconnexion</a>
                        </div>
                      </div>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                          <g clipPath="url(#clip0_2_230)">
                            <path d="M10.74 10.22C12.72 9.45 14.12 7.53 14.12 5.29C14.12 2.37 11.75 0 8.83 0C5.91 0 3.54 2.37 3.54 5.29C3.54 7.53 4.95 9.45 6.92 10.22C2.97 11.1 0 14.62 0 18.84C0 20.58 1.42 22 3.17 22H14.5C16.25 22 17.67 20.58 17.67 18.83C17.66 14.62 14.69 11.1 10.74 10.22ZM5.84 5.29C5.84 3.64 7.18 2.3 8.83 2.3C10.48 2.3 11.82 3.64 11.82 5.29C11.82 6.94 10.48 8.28 8.83 8.28C7.18 8.28 5.84 6.94 5.84 5.29ZM14.5 19.7H3.17C2.69 19.7 2.3 19.31 2.3 18.83C2.3 15.23 5.23 12.3 8.83 12.3C12.43 12.3 15.36 15.23 15.36 18.83C15.36 19.32 14.97 19.7 14.5 19.7Z" fill="#002863"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_2_230">
                              <rect width="17.66" height="22" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                        <Link href="/sign-in" className={styles.loginText}>
                          <span>Connexion</span>
                        </Link>
                      </>
                    )}
                  </div>

                  <div className={styles.langSelector}>
                    <div className={styles.selectWrapper}>
                    <div className={styles.langIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <g clipPath="url(#clip1)">
                            <path d="M10.86 0C4.87 0 0 4.87 0 10.86C0 16.85 4.87 21.72 10.86 21.72C16.85 21.72 21.72 16.85 21.72 10.86C21.72 4.87 16.84 0 10.86 0ZM19.32 9.71H16.02C15.9 7.33 15.42 4.97 14.59 3.18C17.11 4.4 18.93 6.82 19.32 9.71ZM10.86 19.41C9.8 19.41 8.23 16.5 8 12.01H13.73C13.48 16.5 11.92 19.41 10.86 19.41ZM7.99 9.71C8.22 5.22 9.79 2.3 10.85 2.3C11.91 2.3 13.48 5.21 13.71 9.71H7.99ZM7.12 3.17C6.29 4.97 5.81 7.32 5.69 9.7H2.39C2.78 6.82 4.6 4.4 7.12 3.17ZM2.39 12.01H5.69C5.81 14.39 6.29 16.75 7.12 18.54C4.6 17.31 2.78 14.89 2.39 12.01ZM14.59 18.54C15.42 16.74 15.9 14.39 16.02 12.01H19.32C18.93 14.89 17.11 17.31 14.59 18.54Z" fill="#002863" fillOpacity="0.83"/>
                          </g>
                          <defs>
                            <clipPath id="clip1">
                              <rect width="21.71" height="21.71" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <select defaultValue="fr" className={styles.selectLang}>
                        <option value="fr">Français</option>
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="de">Deutsch</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
