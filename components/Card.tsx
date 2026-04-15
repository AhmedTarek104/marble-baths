import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-slate-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
