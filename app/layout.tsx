import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://v0-phoeber.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'PHŒBER | Recycled HCS Polyester Fiber Manufacturer in Algeria',
  description: 'PHŒBER manufactures recycled HCS polyester fiber in Oran, Algeria. Discover our 7D and 15D fiber solutions for mattress, pillow and cushion manufacturers.',
  keywords: ['Recycled polyester fiber Algeria', 'HCS rPET fiber', 'Polyester fiber manufacturer Algeria', 'Siliconized hollow polyester fiber', 'Polyester fiber for mattresses', 'Polyester fiber for pillows', 'Recycled filling fiber'],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'PHŒBER | Recycled HCS Polyester Fiber Manufacturer in Algeria',
    description: 'Recycled HCS polyester fiber manufactured in Oran, Algeria for industrial bedding and filling applications.',
    url: siteUrl,
    siteName: 'PHŒBER',
    type: 'website',
    images: [{ url: '/phoeber-fibre-showcase.jpeg', width: 2048, height: 1152, alt: 'PHŒBER recycled HCS polyester fiber' }],
  },
  icons: { icon: '/logo.png' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#105fb8', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-white"><body className="antialiased bg-white text-[#1a2c5a]">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
