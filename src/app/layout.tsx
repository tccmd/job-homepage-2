import '../css/main.scss'
import type { Metadata } from 'next'
import Header from './components/Header'
import Favicon from '@/public/images/favicon.ico'
import Script from 'next/script';
import { Suspense } from 'react'
import { NavigationEvents } from './components/navigation-events'

export const metadata: Metadata = {
  title: '회사 이름',
  description: '설명',
  keywords: '키워드, 키워드, 키워드',
  openGraph: {
    type: "website",
    url: "allrounder-vercel-psi.vercel.app",
    title: "올라운더 All Rounder 3D studio",
    description: "오픈그래프 설명",
    siteName: "사이트 이름",
    images: [{
      url: "allrounder-vercel-psi.vercel.app/logo11.svg",
    },
    { url: "allrounder-vercel-psi.vercel.app/logo10.svg", }
    ],
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-49VP51VWJS`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-49VP51VWJS', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </body>
    </html>
  )
}
