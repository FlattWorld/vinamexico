
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: '500',
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Viña México',
  description: 'Construyendo Juntos un nuevo futuro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
