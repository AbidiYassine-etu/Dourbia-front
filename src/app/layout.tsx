// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { AuthProvider } from './context/auth-context'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DOURBIA',
  description: 'Discover Tunisia Together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
              <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          </AuthProvider>
      </body>
    </html>

  )
}
