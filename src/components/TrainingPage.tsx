import React, { useState } from 'react';
import { Check, Clock, Star, Zap } from 'lucide-react';

const TrainingPage: React.FC = () => {
  const [completedMissions, setCompletedMissions] = useState<number[]>([]);

  const missions = [
    {
      id: 1,
      title: "Missão: Corrida Anti-Pombo",
      description: "Correr atrás de 3 pombos no parque sem tropeçar",
      difficulty: "Fácil",
      points: 10,
      icon: "🐦",
      time: "5-10 min"
    },
    {
      id: 2,
      title: "Operação Sanduíche Caído",
      description: "Salvar um sanduíche que caiu no chão (regra dos 5 segundos)",
      difficulty: "Médio",
      points: 25,
      icon: "🥪",
      time: "2-3 min"
    },
    {
      id: 3,
      title: "Guardião do Elevador",
      description: "Segurar a porta do elevador para 5 pessoas consecutivas",
      difficulty: "Difícil",
      points: 50,
      icon: "🚪",
      time: "15-30 min"
    },
    {
      id: 4,
      title: "Resgate do Café Frio",
      description: "Reaquecer um café esquecido sem usar microondas",
      difficulty: "Extremo",
      points: 100,
      icon: "☕",
      time: "20-45 min"
    },
    {
      id: 5,
      title: "Operação WiFi Perdido",
      description: "Ajudar alguém a conectar no WiFi usando apenas gestos",
      difficulty: "Lendário",
      points: 200,
      icon: "📶",
      time: "30-60 min"
    },
    {
      id: 6,
      title: "Missão: Planta Abandonada",
      description: "Regar uma planta de escritório que todos esqueceram",
      difficulty: "Fácil",
      points: 15,
      icon: "🪴",
      time: "3-5 min"
    }
  ];

  const completeMission = (missionId: number) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions([...completedMissions, missionId]);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'Fácil': 'bg-green-100 text-green-800',
      'Médio': 'bg-yellow-100 text-yellow-800',
      'Difícil': 'bg-orange-100 text-orange-800',
      'Extremo': 'bg-red-100 text-red-800',
      'Lendário': 'bg-purple-100 text-purple-800'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const totalPoints = completedMissions.reduce((sum, missionId) => {
    const mission = missions.find(m => m.id === missionId);
    return sum + (mission?.points || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Centro de Treinamento Heroico
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Escolha suas missões e prove que você tem o que precisa para ser um herói... amador
          </p>

          <div className="max-w-md mx-auto bg-white rounded-full p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <div className="flex-1">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Pontos de Herói</span>
                  <span>{totalPoints} pts</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((totalPoints / 400) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission) => {
            const isCompleted = completedMissions.includes(mission.id);

            return (
              <div
                key={mission.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${isCompleted ? 'ring-2 ring-green-400' : ''
                  }`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{mission.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(mission.difficulty)}`}>
                    {mission.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {mission.title}
                </h3>

                <p className="text-gray-600 mb-4 text-center">
                  {mission.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{mission.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>{mission.points} pts</span>
                  </div>
                </div>

                <button
                  onClick={() => completeMission(mission.id)}
                  disabled={isCompleted}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${isCompleted
                      ? 'bg-green-500 text-white cursor-default'
                      : 'bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] text-white hover:shadow-lg'
                    }`}
                >
                  {isCompleted ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Check className="w-5 h-5" />
                      <span>Missão Concluída!</span>
                    </div>
                  ) : (
                    'Iniciar Missão'
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {completedMissions.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Parabéns, Herói!
              </h3>
              <p className="text-gray-600 mb-4">
                Você completou {completedMissions.length} missão(ões) e acumulou {totalPoints} pontos!
              </p>
              <div className="text-sm text-gray-500">
                {totalPoints < 100 && "Continue treinando para desbloquear novos poderes!"}
                {totalPoints >= 100 && totalPoints < 300 && "Você está se tornando um herói respeitável!"}
                {totalPoints >= 300 && "Você é oficialmente um Herói Amador Certificado!"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingPage;