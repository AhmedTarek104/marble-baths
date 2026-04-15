"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Bath, DollarSign, Calendar, MapPin, User, ChevronRight, ChevronLeft, ShowerHead, LayoutGrid, Droplet, Box, Droplets, Layers, CheckCircle2, CheckCircle, Plus } from 'lucide-react';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import Link from 'next/link';

const PROJECT_SCOPES = [
  { label: "Showers", icon: ShowerHead },
  { label: "Bathtubs", icon: Bath },
  { label: "Flooring", icon: LayoutGrid },
  { label: "Toilets", icon: Droplet },
  { label: "Cabinets", icon: Box },
  { label: "Sinks", icon: Droplets },
  { label: "Countertops", icon: Layers },
  { label: "Other", icon: Plus }
];

const BUDGETS = [
  "Under $5,000",
  "$5,000–$10,000",
  "$10,000–$20,000",
  "$20,000+"
];

const TIMELINES = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Just exploring"
];

export default function GetStarted() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherError, setShowOtherError] = useState(false);
  const [formData, setFormData] = useState({
    projectScope: '',
    projectScopeOther: '',
    propertyType: 'Single Family',
    ownProperty: 'Yes',
    bathroomsCount: '1',
    budget: '',
    timeline: '',
    zipCode: '',
    city: '',
    state: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false
  });

  const updateForm = (key: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(6, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleStep1Next = () => {
    if (formData.projectScope === 'Other' && !formData.projectScopeOther.trim()) {
      setShowOtherError(true);
      return;
    }
    setShowOtherError(false);
    nextStep();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 6) return nextStep();

    if (!formData.consent) {
      alert("Please accept the terms to continue.");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = { ...formData };
      if (payload.projectScope === 'Other' && payload.projectScopeOther) {
        payload.projectScope = `Other: ${payload.projectScopeOther}`;
      }

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="relative min-h-[calc(100vh-96px)] py-12 px-4 flex flex-col items-center justify-center border-none -mt-4"
      style={{
        backgroundImage: "url('/marble-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Very light transparent overlay so the marble is 100% visible but glare is reduced */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        <div className="mb-12 px-4 md:px-12 max-w-3xl mx-auto">
          <ProgressBar currentStep={step} totalSteps={6} />
        </div>

        <div className="bg-white rounded-none p-8 md:p-14 shadow-xl border border-[#e8dfd8] relative max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative z-10 w-full flex flex-col items-center">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-4xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <Bath className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">What do you need help with?</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">Select the main focus of your project.</p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                  {PROJECT_SCOPES.map(({ label, icon: Icon }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        updateForm('projectScope', label);
                        if (label !== 'Other') {
                          setTimeout(nextStep, 400);
                        }
                      }}
                      className={`group relative py-8 px-4 rounded-xl border-2 text-center transition-all duration-300 flex flex-col items-center gap-5 ${formData.projectScope === label
                          ? 'border-brand-primary bg-white shadow-lg ring-4 ring-[#ab9073]/20 scale-105'
                          : 'border-[#e8dfd8] bg-[#f9f5f2] hover:border-brand-primary hover:shadow-lg hover:bg-white hover:-translate-y-1'
                        }`}
                    >
                      {formData.projectScope === label && (
                        <div className="absolute top-3 right-3 text-brand-primary animate-in zoom-in">
                          <CheckCircle2 className="w-5 h-5 fill-brand-primary/10" />
                        </div>
                      )}
                      <div className={`p-4 rounded-full transition-colors ${formData.projectScope === label ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary border border-[#e8dfd8] group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent'
                        }`}>
                        <Icon className="w-7 h-7" strokeWidth={1.5} />
                      </div>
                      <span className={`font-body tracking-wide text-sm sm:text-base ${formData.projectScope === label ? 'text-brand-primary font-semibold' : 'text-brand-dark'}`}>
                        {label}
                      </span>
                    </button>
                  ))}
                </div>

                {formData.projectScope === 'Other' && (
                  <div className="mt-12 pt-10 border-t border-[#e8dfd8] animate-in fade-in slide-in-from-top-4 duration-500 max-w-xl mx-auto w-full">
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-4 text-center">Please specify your requirements</label>
                    <input
                      type="text"
                      required
                      value={formData.projectScopeOther}
                      onChange={(e) => {
                        updateForm('projectScopeOther', e.target.value);
                        if (e.target.value.trim()) setShowOtherError(false);
                      }}
                      className={`w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:ring-4 transition-all text-lg font-body bg-[#f9f5f2] focus:bg-white mb-6 text-center shadow-inner placeholder-slate-400 ${showOtherError
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10'
                          : 'focus:border-brand-primary focus:ring-[#ab9073]/20 text-brand-dark'
                        }`}
                      placeholder="e.g., Shower conversion, plumbing repair..."
                    />
                    {showOtherError && (
                      <p className="text-red-500 text-sm font-body mb-6 text-center animate-in fade-in slide-in-from-top-1">
                        Please specify what else you want remodeled.
                      </p>
                    )}
                    <div className="flex justify-center">
                      <Button type="button" onClick={handleStep1Next} className="rounded-full text-lg py-4 px-12 shadow-lg">
                        Continue <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <Home className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">Property Details</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">Help us understand the space we'll be transforming.</p>

                <div className="space-y-10 w-full">
                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Property Type</label>
                    <div className="relative">
                      <select
                        value={formData.propertyType}
                        onChange={(e) => updateForm('propertyType', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark appearance-none cursor-pointer"
                      >
                        <option>Single Family</option>
                        <option>Townhouse</option>
                        <option>Condo</option>
                        <option>Multi-Family</option>
                      </select>
                      <ChevronRight className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Do you own the property?</label>
                    <div className="grid grid-cols-2 gap-6">
                      {['Yes', 'No'].map(opt => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => updateForm('ownProperty', opt)}
                          className={`py-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center gap-3 ${formData.ownProperty === opt
                              ? 'border-brand-primary bg-white text-brand-primary ring-4 ring-[#ab9073]/20 shadow-lg scale-105'
                              : 'border-[#e8dfd8] bg-[#f9f5f2] hover:border-brand-primary hover:bg-white text-brand-dark'
                            }`}
                        >
                          <span className="font-body text-lg">{opt}</span>
                          {formData.ownProperty === opt && <CheckCircle2 className="w-5 h-5 animate-in zoom-in" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Number of Bathrooms</label>
                    <div className="relative">
                      <select
                        value={formData.bathroomsCount}
                        onChange={(e) => updateForm('bathroomsCount', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark appearance-none cursor-pointer"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                      <ChevronRight className="w-5 h-5 absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="mt-14 flex items-center gap-6 w-full justify-between">
                  <button type="button" onClick={prevStep} className="p-4 rounded-full border border-[#e8dfd8] text-brand-dark hover:bg-[#f9f5f2] transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <Button type="button" onClick={nextStep} className="rounded-full text-lg py-4 px-12 shadow-lg flex-1">
                    Continue <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <DollarSign className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">Investment Level</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">Determine a comfortable budget for your premium remodel.</p>

                <div className="grid gap-5 w-full">
                  {BUDGETS.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => { updateForm('budget', budget); setTimeout(nextStep, 400); }}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between group ${formData.budget === budget
                          ? 'border-brand-primary bg-white shadow-lg ring-4 ring-[#ab9073]/20 scale-[1.02]'
                          : 'border-[#e8dfd8] bg-[#f9f5f2] hover:border-brand-primary hover:shadow-lg hover:bg-white'
                        }`}
                    >
                      <span className={`font-body tracking-wide text-lg ${formData.budget === budget ? 'text-brand-primary font-semibold' : 'text-brand-dark'}`}>
                        {budget}
                      </span>
                      <div className={`w-6 h-6 rounded-full border border-[#e8dfd8] flex items-center justify-center transition-colors ${formData.budget === budget ? 'border-brand-primary bg-brand-primary' : 'bg-white group-hover:border-brand-primary'
                        }`}>
                        {formData.budget === budget && <div className="w-2.5 h-2.5 bg-white rounded-full animate-in zoom-in" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-14 flex justify-center w-full">
                  <button type="button" onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-body tracking-wide pb-1 border-b border-transparent hover:border-brand-primary">
                    <ChevronLeft className="w-4 h-4" /> Go Back
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <Calendar className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">Project Timeline</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">When would you like to reveal your new space?</p>

                <div className="grid gap-5 w-full">
                  {TIMELINES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => { updateForm('timeline', time); setTimeout(nextStep, 400); }}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex items-center justify-between group ${formData.timeline === time
                          ? 'border-brand-primary bg-white shadow-lg ring-4 ring-[#ab9073]/20 scale-[1.02]'
                          : 'border-[#e8dfd8] bg-[#f9f5f2] hover:border-brand-primary hover:shadow-lg hover:bg-white'
                        }`}
                    >
                      <span className={`font-body tracking-wide text-lg ${formData.timeline === time ? 'text-brand-primary font-semibold' : 'text-brand-dark'}`}>
                        {time}
                      </span>
                      <div className={`w-6 h-6 rounded-full border border-[#e8dfd8] flex items-center justify-center transition-colors ${formData.timeline === time ? 'border-brand-primary bg-brand-primary' : 'bg-white group-hover:border-brand-primary'
                        }`}>
                        {formData.timeline === time && <div className="w-2.5 h-2.5 bg-white rounded-full animate-in zoom-in" />}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-14 flex justify-center w-full">
                  <button type="button" onClick={prevStep} className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-body tracking-wide pb-1 border-b border-transparent hover:border-brand-primary">
                    <ChevronLeft className="w-4 h-4" /> Go Back
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <MapPin className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">Location</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">Where will the installation take place?</p>

                <div className="space-y-8 w-full">
                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => updateForm('zipCode', e.target.value)}
                      className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                      placeholder="e.g. 90210"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => updateForm('city', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => updateForm('state', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-14 flex items-center gap-6 w-full justify-between">
                  <button type="button" onClick={prevStep} className="p-4 rounded-full border border-[#e8dfd8] text-brand-dark hover:bg-[#f9f5f2] transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <Button type="submit" className="rounded-full text-lg py-4 px-12 shadow-lg flex-1">
                    Continue <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-xl">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-[#f9f5f2] text-brand-primary rounded-full flex items-center justify-center border border-[#e8dfd8]">
                    <User className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                <h2 className="text-4xl font-heading text-brand-primary text-center mb-4">Complete Request</h2>
                <p className="text-slate-500 font-body text-center mb-12 text-lg font-light">Where should we send your custom design consultation?</p>

                <div className="space-y-6 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => updateForm('firstName', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => updateForm('lastName', e.target.value)}
                        className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                      className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body tracking-wide text-brand-dark mb-3">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                      className="w-full px-6 py-4 rounded-full border border-[#e8dfd8] outline-none focus:border-brand-primary focus:ring-4 focus:ring-[#ab9073]/20 bg-[#f9f5f2] focus:bg-white transition-all text-lg font-body text-brand-dark"
                      placeholder="Phone number"
                    />
                  </div>

                  <div className="pt-6 pb-2">
                    <label className="flex items-start gap-5 cursor-pointer p-6 rounded-xl bg-[#f9f5f2] border border-[#e8dfd8] hover:border-brand-primary transition-colors group">
                      <div className="relative flex flex-shrink-0 items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          required
                          checked={formData.consent}
                          onChange={(e) => updateForm('consent', e.target.checked)}
                          className="w-6 h-6 rounded border border-slate-300 text-brand-primary focus:ring-brand-primary appearance-none transition-all checked:bg-brand-primary checked:border-brand-primary cursor-pointer"
                        />
                        <CheckCircle className="w-5 h-5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100" />
                      </div>
                      <span className="text-sm text-slate-600 font-body font-light leading-relaxed">
                        By clicking "Complete Request", I consent to Marble Baths and its partners contacting me regarding my project via email and phone. I agree to the <Link href="/terms" target="_blank" className="text-brand-primary hover:underline font-normal">Terms of Service</Link>. Free & no obligation.
                      </span>
                    </label>
                  </div>
                </div>

                <div className="mt-14 flex items-center gap-6 w-full justify-between">
                  <button type="button" onClick={prevStep} className="p-4 rounded-full border border-[#e8dfd8] text-brand-dark hover:bg-[#f9f5f2] transition-colors">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <Button type="submit" isLoading={isSubmitting} className="rounded-full text-lg py-5 px-8 shadow-xl flex-1">
                    Complete Request
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
