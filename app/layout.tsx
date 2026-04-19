import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insurify Clone',
  description: 'Compare Car Insurance Quotes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
