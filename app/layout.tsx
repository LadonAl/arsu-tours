import type { Metadata } from 'next';
import { Manrope, Noto_Kufi_Arabic } from 'next/font/google';
import './globals.css';
import { SITE } from '@/content/site';
import { CurrencyProvider } from '@/components/CurrencyProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBar } from '@/components/DemoBar';
import { SiteMotion } from '@/components/SiteMotion';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const kufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600'],
  variable: '--font-kufi',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} — demonstration site`,
    template: `%s · ${SITE.name} (demo)`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — demonstration site`,
    description: SITE.description,
    siteName: SITE.name,
    type: 'website',
  },
  robots: {
    // A demo that presents itself as a tour operator should not be competing
    // for real search traffic from people planning real travel.
    index: false,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${kufi.variable}`}>
      <head>
        {/* Runs before first paint. The server sends the hero at full opacity,
            so without this it paints once and then snaps to the animation's
            from-state — a visible flash the design never had, because it is
            client-rendered. The timeout is a safety net: if React never
            hydrates, the content reveals itself rather than staying blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.setAttribute('data-motion','1');setTimeout(function(){d.removeAttribute('data-motion')},2500)}}catch(e){}",
          }}
        />
      </head>
      <body>
        <CurrencyProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <DemoBar />
          <Header />
          <SiteMotion />
          <main id="main">{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
