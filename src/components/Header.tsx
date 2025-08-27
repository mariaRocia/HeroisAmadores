import React from 'react';
import { Shield, Users, Film, UserPlus, Zap } from 'lucide-react';
import logo from '../../img/logo.png';


interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'home', label: 'Início', icon: Shield },
    { id: 'training', label: 'Treinamento', icon: Zap },
    { id: 'excuses', label: 'Desculpas', icon: Users },
    { id: 'movies', label: 'Filme Club', icon: Film },
    { id: 'register', label: 'Cadastro', icon: UserPlus },
  ];

  return (
    <header className="bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo Academia dos Heróis Amadores"
              className="w-12 h-12"
            />
            <h1 className="text-2xl font-bold">Academia dos Heróis Amadores</h1>
          </div>
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeSection === item.id
                    ? 'bg-white/20 text-yellow-300'
                    : 'hover:bg-white/10'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <nav className="md:hidden mt-4">
          <div className="flex flex-wrap gap-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeSection === item.id
                    ? 'bg-white/20 text-yellow-300'
                    : 'hover:bg-white/10'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;