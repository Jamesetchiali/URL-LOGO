import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FIBAER - Première fibre polyester recyclée en Algérie',
  description: 'Startup industrielle basée à Oran, pionnière dans la transformation de bouteilles plastiques en fibre polyester creuse haut de gamme. Production 100% locale en dinars.',
  keywords: 'fibre polyester, recyclage, Algérie, économie circulaire, matière première',
  generator: 'v0.app',
  openGraph: {
    title: 'FIBAER - Première fibre polyester recyclée en Algérie',
    description: 'Startup industrielle transformant les déchets plastiques en fibre polyester de qualité.',
    url: 'https://fibaer.vercel.app',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#45926f',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#faf9f6]">
      <body className="antialiased bg-[#faf9f6] text-[#262522]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
