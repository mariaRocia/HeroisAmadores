import React from 'react';
import { Coffee, Star, Trophy, Users } from 'lucide-react';

interface HomePageProps {
  onSectionChange: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSectionChange }) => {
  const stats = [
    { icon: Users, label: 'Heróis Treinados', value: '1,247' },
    { icon: Trophy, label: 'Missões Concluídas', value: '3,891' },
    { icon: Star, label: 'Desculpas Geradas', value: '12,456' },
    { icon: Coffee, label: 'Cafés Salvos', value: '867' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Academia dos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00]">
              {' '}Heróis Amadores
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Transformamos pessoas comuns em heróis... ou quase isso. 
            <br />
            <span className="text-lg italic">
              "Porque nem todo mundo pode ser o Batman, mas todo mundo pode tentar!"
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange('training')}
              className="bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Começar Treinamento
            </button>
            <button
              onClick={() => onSectionChange('register')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200"
            >
              📝 Virar Herói
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Resultados Impressionantes*
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
        <p className="text-center text-gray-500 mt-8 italic">
          *Resultados podem incluir exageros para fins dramáticos
        </p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          O Que Você Vai Aprender
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Missões Épicas
            </h3>
            <p className="text-gray-600">
              Desde salvar sanduíches caídos até segurar portas de elevador. 
              Cada missão é uma oportunidade de crescimento!
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Desculpas Criativas
            </h3>
            <p className="text-gray-600">
              Nosso gerador de desculpas vai te ajudar quando as coisas não saírem 
              como planejado. Porque até heróis precisam de uma boa desculpa!
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🍿</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Clube de Filmes
            </h3>
            <p className="text-gray-600">
              Se reúna com outros heróis para assistir e comentar os piores 
              filmes de super-herói já feitos. É terapia em grupo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;