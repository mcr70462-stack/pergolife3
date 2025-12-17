import React from 'react';

interface LogoProps {
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ light = false }) => {
  const textColor = light ? 'text-white' : 'text-wood-800';
  const iconColor = light ? 'text-wood-300' : 'text-wood-600';

  return (
    <div className="flex items-center gap-2 select-none">
      <div className={`relative w-10 h-10 ${iconColor}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Stylized Pergola/Roof structure */}
          <path d="M3 10L12 4L21 10" />
          <path d="M5 10V20" />
          <path d="M19 10V20" />
          <path d="M9 10V20" />
          <path d="M15 10V20" />
          <path d="M3 10H21" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-xl font-bold tracking-tight uppercase leading-none ${textColor}`}>
          Pergolife
        </span>
        <span className={`text-[0.65rem] tracking-widest uppercase opacity-80 ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          Decks & Pergolados
        </span>
      </div>
    </div>
  );
};