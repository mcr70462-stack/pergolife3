import React from 'react';
import { Hammer, Trees, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-wood-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-wood-600 font-semibold tracking-wider uppercase text-sm">Sobre a Pergolife</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excelência em Estruturas de Madeira
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Na Pergolife, não construímos apenas estruturas; criamos extensões do seu estilo de vida. 
                Com anos de experiência no mercado, somos especializados em transformar áreas externas em 
                refúgios de conforto e elegância.
              </p>
              <p>
                Utilizamos madeiras nobres tratadas e técnicas de construção avançadas para garantir que 
                seu deck ou pergolado resista ao tempo e valorize seu imóvel.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Hammer className="w-8 h-8 text-wood-600" />}
              title="Mão de Obra Especializada"
              description="Profissionais experientes em carpintaria fina."
            />
            <FeatureCard 
              icon={<Trees className="w-8 h-8 text-wood-600" />}
              title="Materiais de Qualidade"
              description="Madeiras nobres e tratadas para longa durabilidade."
            />
            <FeatureCard 
              icon={<Award className="w-8 h-8 text-wood-600" />}
              title="Garantia de Execução"
              description="Compromisso com prazos e acabamento impecável."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-wood-100 text-center hover:shadow-md transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);