import './globals.css'

export const metadata = {
  title: 'Turing - Etkinlik Dünyasının Dijital Buluşma Noktası',
  description: 'Turing, müzik ve etkinlik sektöründe hizmet sağlayıcılarla organizatörleri tek platformda buluşturur.',
  keywords: 'etkinlik, organizasyon, booking, ses sistemi, ışık, sahne, konaklama, ulaşım',
  openGraph: {
    title: 'Turing - Planla, Yönet, Gerçekleştir',
    description: 'Etkinlik dünyasının dijital buluşma noktası',
    url: 'https://turingtr.com',
    siteName: 'Turing',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/turing-icon.png" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
