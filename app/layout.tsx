import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata = {
  title: 'VSM - International Student Application Process',
  description: 'Value Stream Mapping for International Student Applications to U.S. Graduate Programs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable, robotoMono.variable)}>
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}