import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Marble Baths - Built Perfect. Built to Last.',
  description: 'Premium bathroom remodeling services crafted with precision and elegance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col font-body ${inter.variable} ${playfair.variable} text-brand-dark bg-brand-surface`}>
        <Header />
        <main className="flex-grow pt-24 border-none bg-brand-surface">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
