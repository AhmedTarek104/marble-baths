import React from 'react';
import Card from '@/components/Card';

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <h1 className="text-3xl font-bold mb-6 text-brand-dark">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Information We Collect</h2>
              <p>We collect information that you manually provide to us when you fill out our quote request form, including your name, email address, phone number, physical address, and details about your projected remodeling needs.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. How We Use Your Information</h2>
              <p>The information we collect is strictly used to connect you with home service professionals in your area. We may use your contact information to communicate with you about your request and provide support.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. Information Sharing</h2>
              <p>By submitting a quote request, you consent to us sharing your details with our network of contractors and service providers who can assist with your project.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
