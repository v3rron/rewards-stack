import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import { Footer, Header } from '@components';
import '@styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rewards App',
  description:
    'Rewards is a simple and powerful app that lets users redeem points for products, track their activity, and get the most out of loyalty programs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen items-center p-8 gap-16`}
      >
        <Header />
        <main className="flex-1 min-h-0 flex flex-col">{children}</main>
        <Toaster richColors position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
