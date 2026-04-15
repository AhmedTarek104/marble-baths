import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  isLoading = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-body tracking-wide font-semibold transition-all duration-300 rounded-full py-3 px-6 shadow-sm";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-[#8e765e] disabled:bg-[#d5c4b3]",
    secondary: "bg-brand-dark text-white hover:bg-[#3a332d] disabled:bg-slate-400",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white disabled:opacity-50"
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
      {children}
    </button>
  );
}
