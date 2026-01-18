import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { profutureData } from '@constants/profuture-data';
import Header from '@shared/Header';
import Footer from '@shared/Footer';
import * as motion from 'motion/react-client';

import '@styles/globals.css';

const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: profutureData.title,
  description: profutureData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='tr'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#f9f9f9' />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#f9f9f9' />
        <meta name='msapplication-config' content='/favicons/browserconfig.xml' />
        <meta name='theme-color' content='#f9f9f9' />
      </head>

      <motion.body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          scale: { type: 'spring', visualDuration: 0.5, bounce: 0.5 },
        }}
        className={`${inter.variable} relative flex min-h-screen flex-col antialiased`}
      >
        <Header />

        {children}

        <Footer />
      </motion.body>
    </html>
  );
}
