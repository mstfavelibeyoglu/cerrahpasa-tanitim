import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Cerrahpaşa Tıp Fakültesi – Tanıtım ve Oryantasyon',
  description: 'Cerrahpaşa Tıp Fakültesi aday öğrenciler için tanıtım ve oryantasyon rehberi. Tıp eğitimi, kayıt bilgileri ve kampüs yaşamı hakkında her şey.',
  generator: 'v0.app',
  keywords: ['Cerrahpaşa', 'Tıp Fakültesi', 'İstanbul Üniversitesi', 'Tıp Eğitimi', 'Oryantasyon'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF7F2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${dmSerifDisplay.variable} ${dmSans.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
