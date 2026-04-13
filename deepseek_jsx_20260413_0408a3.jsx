// app/layout.js
import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  metadataBase: new URL('https://jay404.in'),
  title: {
    default: 'J404 | Building Ideas into Digital Reality',
    template: '%s | J404'
  },
  description: 'Software developer & AI builder crafting futuristic digital experiences. Explore projects, products, and thoughts at the intersection of code and creativity.',
  keywords: ['Software Developer', 'AI Builder', 'Next.js', 'React', 'Portfolio', 'J404', 'Future Tech'],
  authors: [{ name: 'J404' }],
  creator: 'J404',
  openGraph: {
    title: 'J404 | Building Ideas into Digital Reality',
    description: 'Explore the portfolio of a next-gen developer building AI tools and web experiences.',
    url: 'https://jay404.in',
    siteName: 'J404',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'J404 Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J404 | Building Ideas into Digital Reality',
    description: 'Explore the portfolio of a next-gen developer building AI tools and web experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-gray-100 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}