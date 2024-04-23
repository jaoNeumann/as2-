import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ 
    subsets: ['latin'],
    weight:['400', '500', '600']
  })

export const metadata: Metadata = {
  title: 'João Pedro Neumann',
  description: 'João Pedro Neumann is a front-end developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
