import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Logo light />
          <p className="mt-2 text-sm text-gray-500">Transformando madeira em arte.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Pergolife. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};