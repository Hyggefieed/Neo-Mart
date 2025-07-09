import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled, className = '', ...props }) => {
  const base = "font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-200";
  const variants = {
    primary: "bg-[#B3FFB3] text-[#656565] hover:bg-[#A6D3A0] active:scale-95",
    secondary: "bg-[#A6D3A0] text-[#656565] hover:bg-[#808782] hover:text-white",
    outline: "border-2 border-[#A6D3A0] text-[#656565] hover:bg-[#A6D3A0] hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "text-[#656565] hover:bg-[#D1FFD7]"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;