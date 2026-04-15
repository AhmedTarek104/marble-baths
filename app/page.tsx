import React from 'react';
import Link from 'next/link';
import { Shield, Clock, BadgeCheck } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center text-center sm:-mt-24 pt-24"
        style={{
          backgroundImage: "url('/background.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Subtle warm/dark overlay to reduce glare but retain visibility */}
        <div className="absolute inset-0 bg-[#231e1a]/40 z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center pb-20 mt-10">
          <h1 className="font-heading text-6xl md:text-8xl mb-6 tracking-[0.02em] leading-tight text-brand-surface drop-shadow-lg">
            Transform Your Bathroom Into a Luxury Space
          </h1>
          <p className="font-body text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed text-[#ece6e0] font-light drop-shadow-md">
            Premium remodeling services crafted with precision and elegance.
          </p>
          
          <Link href="/get-started">
            <Button className="text-lg py-4 px-10 rounded-full shadow-xl hover:shadow-2xl">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Highlights - minimal */}
      <section className="py-24 bg-brand-surface border-b border-[#e8dfd8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-start">
            <div className="flex flex-col items-center">
              <BadgeCheck className="w-12 h-12 text-brand-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-3xl mb-4 text-brand-primary">Built Perfect</h3>
              <p className="font-body text-[#231e1a] leading-relaxed text-lg font-light">Uncompromising quality in every detail, using premium materials crafted to perfection.</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-brand-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-3xl mb-4 text-brand-primary">Built To Last</h3>
              <p className="font-body text-[#231e1a] leading-relaxed text-lg font-light">Enduring elegance designed for longevity. A bathroom that maintains its luxury for decades.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-brand-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-3xl mb-4 text-brand-primary">Master Craftsmanship</h3>
              <p className="font-body text-[#231e1a] leading-relaxed text-lg font-light">Expert installation by verified professionals who understand the nuance of luxury design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Symmetrical and clean */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-primary mb-6 tracking-wide">
              Our Process
            </h2>
            <div className="w-20 h-0.5 bg-brand-primary rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            <Card className="text-center p-12 hover:shadow-xl transition-all duration-500 border border-[#e8dfd8] bg-brand-surface rounded-none">
              <div className="w-14 h-14 bg-transparent text-brand-primary border border-brand-primary rounded-full flex items-center justify-center font-heading text-2xl mx-auto mb-8">1</div>
              <h3 className="font-heading text-3xl mb-4 text-brand-primary transition-colors">Consultation</h3>
              <p className="font-body text-[#231e1a] leading-relaxed font-light text-lg">Tell us your vision. We tailor our approach to your unique aesthetic and functional needs.</p>
            </Card>
            <Card className="text-center p-12 hover:shadow-xl transition-all duration-500 border border-[#e8dfd8] bg-brand-surface rounded-none">
              <div className="w-14 h-14 bg-transparent text-brand-primary border border-brand-primary rounded-full flex items-center justify-center font-heading text-2xl mx-auto mb-8">2</div>
              <h3 className="font-heading text-3xl mb-4 text-brand-primary transition-colors">Design & Quote</h3>
              <p className="font-body text-[#231e1a] leading-relaxed font-light text-lg">Receive a transparent, customized quote and design plan for your premium remodel.</p>
            </Card>
            <Card className="text-center p-12 hover:shadow-xl transition-all duration-500 border border-[#e8dfd8] bg-brand-surface rounded-none">
              <div className="w-14 h-14 bg-transparent text-brand-primary border border-brand-primary rounded-full flex items-center justify-center font-heading text-2xl mx-auto mb-8">3</div>
              <h3 className="font-heading text-3xl mb-4 text-brand-primary transition-colors">Installation</h3>
              <p className="font-body text-[#231e1a] leading-relaxed font-light text-lg">Our experts seamlessly bring your vision to life, ensuring minimum disruption.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* We Know Maryland Homes */}
      <section className="py-24 px-4 bg-brand-surface border-t border-[#e8dfd8]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side */}
          <div className="flex-1">
            <div className="inline-block px-4 py-1.5 bg-[#e8dfd8] text-brand-dark rounded-full text-[11px] font-body tracking-[0.2em] font-semibold uppercase mb-6 shadow-sm">
              Built for Maryland
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-primary mb-6">
              We Know Maryland Homes
            </h2>
            <p className="font-body text-xl text-brand-dark mb-12 leading-relaxed font-light">
              From humid summers to aging infrastructure, we understand the unique challenges of remodeling in the Baltimore–Washington corridor. Every material and technique is chosen with your home in mind.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-[#e8dfd8] hover:shadow-md transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#f9f5f2] border border-[#e8dfd8] flex items-center justify-center text-brand-primary">
                  <Shield className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-brand-primary mb-2">Humidity-Resistant Materials</h4>
                  <p className="font-body text-brand-dark font-light leading-relaxed">Maryland's humid summers wreak havoc on cheap finishes. We use materials tested for Mid-Atlantic conditions.</p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-[#e8dfd8] hover:shadow-md transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#f9f5f2] border border-[#e8dfd8] flex items-center justify-center text-brand-primary">
                  <BadgeCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-brand-primary mb-2">Aging Plumbing Expertise</h4>
                  <p className="font-body text-brand-dark font-light leading-relaxed">Older homes in Baltimore, Columbia, and Annapolis often need plumbing updates. We handle it all.</p>
                </div>
              </div>
              
              <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-sm border border-[#e8dfd8] hover:shadow-md transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#f9f5f2] border border-[#e8dfd8] flex items-center justify-center text-brand-primary">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-heading text-2xl text-brand-primary mb-2">Locally Licensed</h4>
                  <p className="font-body text-brand-dark font-light leading-relaxed">Licensed and insured in Maryland. We understand local codes, permits, and inspection requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex-1 w-full relative flex flex-col">
            <Card className="p-8 md:p-10 bg-white border border-[#e8dfd8] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] rounded-xl relative overflow-hidden flex flex-col flex-1">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary"></div>
              <h3 className="font-heading text-3xl text-brand-primary mb-4">Service Area</h3>
              <p className="font-body text-brand-dark font-light leading-relaxed mb-8 text-lg">
                We bring luxury remodeling services directly to your neighborhood throughout Maryland.
              </p>
              <div className="w-full mt-auto rounded-xl overflow-hidden shadow-sm border border-[#e8dfd8]">
                <img 
                  src="/Marylandmap.png" 
                  alt="Maryland Service Area Map" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </Card>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-brand-surface border-t border-[#e8dfd8]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-8 text-brand-primary tracking-wide">
            Ready to Experience Luxury?
          </h2>
          <div className="w-16 h-0.5 bg-brand-primary rounded-full mb-8"></div>
          <p className="font-body text-xl text-[#231e1a] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Step into a world of elegance. Get your free, no-obligation quote today and start your journey towards the perfect bathroom.
          </p>
          <Link href="/get-started">
            <Button className="text-lg py-4 px-12 rounded-full shadow-lg hover:shadow-xl">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
