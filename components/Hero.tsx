import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./imgs/deck-piscina-lazer.jpg" 
          alt="Deck de madeira luxuoso" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if local image not found
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="block">Transforme seu</span>
          <span className="block text-wood-300">Espaço Exterior</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200 mb-10 font-light">
          Especialistas na construção de decks de madeira e pergolados de alto padrão. 
          Beleza, durabilidade e conforto para o seu lar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-wood-900 bg-white hover:bg-wood-50 transition-colors duration-200"
          >
            Ver Projetos
          </a>
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
          >
            Fale Conosco <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};