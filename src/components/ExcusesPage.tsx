import React, { useState } from 'react';
import { RefreshCw, MessageSquare, Copy } from 'lucide-react';

const ExcusesPage: React.FC = () => {
  const [currentExcuse, setCurrentExcuse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [excuseHistory, setExcuseHistory] = useState<string[]>([]);

  const excuses = [
    "Um pombo roubou minha capa e eu precisei persegui-lo por três quarteirões",
    "O elevador fechou antes de eu chegar e meus poderes não incluem teleporte",
    "Meu traje estava na lavanderia e heróis não podem trabalhar de pijama",
    "Confundi a missão e acabei salvando um gato que não estava em perigo",
    "Meu GPS de herói me levou para o endereço errado (existe um bug na versão 2.3)",
    "Parei para ajudar uma velhinha atravessar a rua e ela demorou 47 minutos",
    "Minha identidade secreta foi descoberta e precisei mudar de cidade rapidamente",
    "O vilão cancelou no último minuto, algo sobre 'problemas familiares'",
    "Esqueci de carregar meu celular de herói e fiquei perdido sem o Waze",
    "Um fã pediu autógrafo e virou uma sessão de fotos de 2 horas",
    "Meu carro quebrou e o Uber não aceita corridas para 'salvar o mundo'",
    "Confundi o dia da missão porque minha agenda de herói não sincronizou com o Google Calendar",
    "Tive uma crise existencial sobre se realmente vale a pena ser herói",
    "Meu parceiro heroico ficou doente e eu não sabia trabalhar sozinho",
    "O café da manhã demorou mais que o esperado e herói com fome não funciona",
    "Minha mãe ligou bem na hora da missão e eu não posso ignorar minha mãe",
    "O trânsito estava impossível e meus poderes não incluem voar sobre carros",
    "Esqueci onde guardei meus poderes especiais (eles estavam no bolso da outra calça)",
    "O vilão estava tendo um dia ruim e precisamos fazer terapia em grupo primeiro",
    "Meu detector de problemas estava com defeito e indicou um falso alarme",
    "Parei para comprar um lanche e a fila do McDonald's estava enorme",
    "Meu traje super-herói encolheu na lavanderia e ficou constrangedor",
    "Recebi uma ligação do trabalho e tive que fingir que estava doente",
    "Meu poder especial estava em manutenção (volta na próxima atualização)",
    "O Google Maps não reconhece 'onde o mal está acontecendo' como destino válido"
  ];

  const generateExcuse = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
      setCurrentExcuse(randomExcuse);
      setExcuseHistory(prev => [randomExcuse, ...prev.slice(0, 4)]);
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎭 Gerador de Desculpas Heroicas
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Porque até os melhores heróis precisam de uma boa desculpa quando as coisas não saem como planejado!
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Sua Desculpa Oficial
              </h2>
            </div>

            {currentExcuse ? (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">💭</div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-800 leading-relaxed">
                      "{currentExcuse}"
                    </p>
                    <button
                      onClick={() => copyToClipboard(currentExcuse)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mt-3 text-sm transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copiar desculpa</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🤔</div>
                <p>Clique no botão abaixo para gerar sua primeira desculpa heroica!</p>
              </div>
            )}

            <button
              onClick={generateExcuse}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <RefreshCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>
                {isGenerating ? 'Gerando desculpa...' : 'Gerar Nova Desculpa'}
              </span>
            </button>
          </div>
        </div>

        {excuseHistory.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📚 Histórico de Desculpas Utilizadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {excuseHistory.map((excuse, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">
                      {index === 0 ? '🆕' : '📝'}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 mb-3">"{excuse}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {index === 0 ? 'Mais recente' : `Desculpa #${index + 1}`}
                        </span>
                        <button
                          onClick={() => copyToClipboard(excuse)}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm transition-colors"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Copiar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-yellow-800 mb-3">
              💡 Dicas para Usar Suas Desculpas
            </h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Sempre mantenha contato visual quando usar a desculpa</li>
              <li>• Adicione detalhes específicos para maior credibilidade</li>
              <li>• Use um tom de sincera frustração heroica</li>
              <li>• Lembre-se: a culpa nunca é do herói, sempre das circunstâncias!</li>
              <li>• Guarde algumas desculpas para emergências futuras</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcusesPage;