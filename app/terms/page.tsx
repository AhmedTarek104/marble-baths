import React from 'react';
import Card from '@/components/Card';

export default function TermsOfService() {
  return (
    <div className="bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <h1 className="text-3xl font-bold mb-6 text-brand-dark">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">1. Agreement to Terms</h2>
              <p>By using the Bath Select website and our services, you agree to these Terms of Service. If you do not agree to these terms, please do not use our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">2. Description of Service</h2>
              <p>Bath Select provides a matching service connecting homeowners with remodeling contractors. We are not a contractor ourselves and do not guarantee the quality, safety, or legality of the services provided by third-party professionals.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">3. User Responsibilities</h2>
              <p>You agree to provide accurate, current, and complete information when filling out our quote request form. You remain solely responsible for any decisions made based on the information provided through our service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-3">4. Limitation of Liability</h2>
              <p>In no event shall Bath Select be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services or any services rendered by matched professionals.</p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
