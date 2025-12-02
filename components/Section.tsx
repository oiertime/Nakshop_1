import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id = '', fullWidth = false }) => {
  return (
    <section id={id} className={`w-full py-32 ${className}`}>
      <div className={`${fullWidth ? 'w-full px-4 md:px-8' : 'max-w-6xl mx-auto px-6'}`}>
        {children}
      </div>
    </section>
  );
};