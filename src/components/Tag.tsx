import { ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Tag({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: TagProps) {
  const baseClasses = 'inline-block rounded-2xl font-medium';
  
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-gray-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-400 text-gray-900',
    danger: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <span className={classes}>
      {children}
    </span>
  );
}
