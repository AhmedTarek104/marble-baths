import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ThankYou() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-50 py-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <Card className="text-center py-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-brand-dark">Thank You!</h1>
          <p className="text-slate-600 mb-8">
            Your quote request has been received successfully. A remodeling professional will contact you shortly to discuss your project.
          </p>
          <Link href="/">
            <Button variant="primary" fullWidth className="py-3">
              Return to Home
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
