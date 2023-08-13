import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redit Al',
  description: 'A Reddit clone by Ari Alghifari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        'bg-zinc-50 text-zinc-900 antialiased light',
        inter.className
      )}
    >
      <body className="min-h-screen bg-zinc-50 antialiased">
        {/* <Navbar /> */}

        <div className="container mx-auto h-full">{children}</div>
      </body>
    </html>
  )
}
