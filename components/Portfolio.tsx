import React, { useState } from 'react';
import { PORTFOLIO_IMAGES } from '../constants';
import { Maximize2, X } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const activeImage = PORTFOLIO_IMAGES.find(img => img.id === selectedImage);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-wood-600 font-semibold tracking-wider uppercase text-sm">Nosso Portfólio</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Obras Executadas</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Confira alguns dos nossos projetos recentes. Cada detalhe é pensado para proporcionar sofisticação e durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_IMAGES.map((image) => (
            <div 
              key={image.id} 
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to picsum if local image fails to load
                  (e.target as HTMLImageElement).src = `https://picsum.photos/800/800?random=${image.id}`;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center">
                    <Maximize2 className="text-white mb-2" />
                    <span className="text-white font-medium text-sm px-4 text-center">{image.category}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={40} />
          </button>
          
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-h-[80vh] w-auto rounded-md shadow-2xl object-contain"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = `https://picsum.photos/1200/800?random=${activeImage.id}`;
              }}
            />
            <p className="mt-4 text-white text-lg font-medium tracking-wide">
              {activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};