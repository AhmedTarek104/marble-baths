import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-sans tracking-wide text-slate-500">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-sans tracking-wide text-brand-primary">{Math.round(percentage)}%</span>
      </div>
      <div className="h-1 w-full bg-[#e8dfd8] rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
