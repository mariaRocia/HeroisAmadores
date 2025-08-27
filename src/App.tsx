import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import TrainingPage from './components/TrainingPage';
import ExcusesPage from './components/ExcusesPage';
import MoviesPage from './components/MoviesPage';
import RegisterPage from './components/RegisterPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onSectionChange={setActiveSection} />;
      case 'training':
        return <TrainingPage />;
      case 'excuses':
        return <ExcusesPage />;
      case 'movies':
        return <MoviesPage />;
      case 'register':
        return <RegisterPage />;
      default:
        return <HomePage onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <main>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;