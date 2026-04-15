import React from 'react';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-brand-surface/90 backdrop-blur-lg border-b border-[#e8dfd8] z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-5 sm:gap-6 group">
          <div className="relative w-20 h-16 md:w-24 md:h-20 shrink-0 flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="Marble Baths Logo" 
              fill 
              sizes="96px"
              className="object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-heading text-brand-primary tracking-wide leading-none">Marble Baths</span>
            <span className="text-[11px] md:text-sm font-body text-brand-primary/80 uppercase tracking-[0.2em] mt-1.5">Built Perfect. Built to Last.</span>
          </div>
        </Link>
        <nav>
          <Link href="/get-started">
            <Button className="text-sm sm:text-base font-body tracking-wide py-3 px-8 shadow hover:shadow-lg transition-all duration-300">
              Get Your Free Quote
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
