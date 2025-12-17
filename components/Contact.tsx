import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { INSTAGRAM_URL, CONTACT_EMAIL } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-wood-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="lg:w-1/2 p-10 sm:p-14 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10" 
                 style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")'}}>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-wood-200 mb-10 text-lg">
                Pronto para iniciar seu projeto? Fale conosco e solicite um orçamento sem compromisso.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-4 hover:text-wood-200 transition-colors">
                  <div className="bg-wood-700 p-3 rounded-full">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg">{CONTACT_EMAIL}</span>
                </a>
                
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 hover:text-wood-200 transition-colors group"
                >
                  <div className="bg-wood-700 p-3 rounded-full group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-500 transition-all">
                    <Instagram size={24} />
                  </div>
                  <span className="text-lg">@pergolife</span>
                </a>

                <div className="flex items-center gap-4 text-wood-200">
                  <div className="bg-wood-700 p-3 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <span className="text-lg">Atendemos toda a região</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2 p-10 sm:p-14 bg-white">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wood-500 focus:border-transparent outline-none transition-all"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-wood-600 text-white font-bold py-4 rounded-lg hover:bg-wood-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};