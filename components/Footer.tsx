import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#231e1a] text-[#d5c4b3] py-12 border-t border-[#3a332d]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-body tracking-wide">
          &copy; {new Date().getFullYear()} Marble Baths. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-body tracking-wide">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
