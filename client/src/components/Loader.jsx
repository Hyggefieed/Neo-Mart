import React from 'react';
import { Loader as LoaderIcon } from 'lucide-react';

const Loader = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <LoaderIcon className={`${sizes[size]} text-[#A6D3A0] animate-spin`} />
    </div>
  );
};

export default Loader;