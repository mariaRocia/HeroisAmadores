import React, { useState } from 'react';
import { Star, Film, ThumbsUp, ThumbsDown, Eye } from 'lucide-react';

const MoviesPage: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const movies = [
    {
      id: 1,
      title: "Super-Herói do Microondas",
      year: 2019,
      rating: 2.3,
      poster: "🦸‍♂️",
      synopsis: "Um funcionário de lanchonete ganha poderes após ser atingido por radiação do microondas. Seus poderes incluem esquentar qualquer comida em 30 segundos e detectar quando algo está passando do ponto.",
      heroReviews: [
        { hero: "Capitão Café", comment: "Chorei de rir quando ele salvou o jantar queimado da família", rating: 3 },
        { hero: "Miss Procrastinação", comment: "Finalmente um herói que entende minha relação com comida!", rating: 4 }
      ],
      funFacts: "O ator principal realmente queimou 47 sanduíches durante as filmagens"
    },
    {
      id: 2,
      title: "Os Guardiões da Lavanderia",
      year: 2020,
      rating: 1.8,
      poster: "🧺",
      synopsis: "Uma equipe de heróis que protege o mundo... das máquinas de lavar rebeldes. Com poderes como 'detectar meias perdidas' e 'dobrar lençóis perfeitamente', eles enfrentam a ameaça das máquinas sencientes.",
      heroReviews: [
        { hero: "Dobra-Tudo", comment: "Muito realista. Já perdi várias meias assim mesmo", rating: 2 },
        { hero: "Capitão Sabão", comment: "Os efeitos especiais da espuma eram surpreendentemente bons", rating: 3 }
      ],
      funFacts: "Três máquinas de lavar foram danificadas durante as cenas de ação"
    },
    {
      id: 3,
      title: "WiFi-Man: Conexão Perdida",
      year: 2021,
      rating: 3.1,
      poster: "📶",
      synopsis: "Após ser atingido por um roteador radioativo, um técnico de TI ganha a habilidade de se conectar mentalmente com qualquer rede WiFi. Seu maior inimigo? O terrível Dr. Senha-Errada.",
      heroReviews: [
        { hero: "Super Streaming", comment: "Finalmente alguém que entende minha dor com internet lenta", rating: 4 },
        { hero: "Mega Upload", comment: "A cena da batalha no data center foi épica", rating: 5 }
      ],
      funFacts: "O filme foi inteiramente financiado por uma empresa de internet que queria melhorar sua imagem"
    },
    {
      id: 4,
      title: "A Liga dos Procrastinadores",
      year: 2018,
      rating: 2.7,
      poster: "⏰",
      synopsis: "Um grupo de heróis que sempre deixa para depois acaba salvando o mundo... na última hora. Literalmente. Seus poderes incluem 'fazer tudo no último minuto' e 'funcionar bem sob pressão extrema'.",
      heroReviews: [
        { hero: "Miss Procrastinação", comment: "Assisti esse filme há 3 anos, mas só agora escrevo a resenha", rating: 3 },
        { hero: "Capitão Deadline", comment: "Muito inspirador. Me fez sentir melhor sobre meus hábitos", rating: 4 }
      ],
      funFacts: "A pós-produção foi terminada literalmente no dia do lançamento"
    },
    {
      id: 5,
      title: "Super Delivery: O Entregador Supremo",
      year: 2022,
      rating: 1.5,
      poster: "🏍️",
      synopsis: "Um entregador de comida ganha superpoderes e jura entregar cada pedido no tempo prometido, não importa quantos vilões tentem impedi-lo. Seu lema: 'Nem chuva, nem calor, nem apocalipse zumbi!'",
      heroReviews: [
        { hero: "Flash Food", comment: "Irrealista. Ninguém entrega pizza em 15 minutos no trânsito de SP", rating: 1 },
        { hero: "Super Fome", comment: "Me deu vontade de pedir comida durante o filme todo", rating: 2 }
      ],
      funFacts: "O filme foi patrocinado por 12 apps de delivery diferentes"
    },
    {
      id: 6,
      title: "Mestre das Plantas de Escritório",
      year: 2023,
      rating: 4.2,
      poster: "🪴",
      synopsis: "Um funcionário de escritório descobre que pode se comunicar com plantas de ambiente e monta uma resistência verde contra o malvado chefe que quer substituir toda vegetação por plantas artificiais.",
      heroReviews: [
        { hero: "Folha Verde", comment: "Finalmente um filme que valoriza nossos companheiros vegetais!", rating: 5 },
        { hero: "Capitão Fotossíntese", comment: "Chorei quando a samambaia se sacrificou no final", rating: 4 }
      ],
      funFacts: "Após o filme, as vendas de plantas de escritório aumentaram 300%"
    }
  ];

  const getRatingColor = (rating: number) => {
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3) return 'text-yellow-500';
    if (rating >= 2) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🍿 Clube de Filmes Ruins da Liga
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Onde heróis se reúnem para assistir e comentar as obras-primas do cinema trash super-heroico.
            Porque às vezes rir é melhor que chorar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{movie.poster}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {movie.title}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span>{movie.year}</span>
                    <div className="flex items-center space-x-1">
                      <Star className={`w-4 h-4 ${getRatingColor(movie.rating)}`} />
                      <span className={getRatingColor(movie.rating)}>
                        {movie.rating}/5
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {movie.synopsis}
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                  <p className="text-xs text-yellow-800">
                    <strong>Curiosidade:</strong> {movie.funFacts}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMovie(selectedMovie === movie.id ? null : movie.id)}
                  className="w-full bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>
                    {selectedMovie === movie.id ? 'Ocultar Resenhas' : 'Ver Resenhas dos Heróis'}
                  </span>
                </button>
              </div>

              {selectedMovie === movie.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Film className="w-5 h-5" />
                    <span>Resenhas dos Heróis</span>
                  </h4>
                  <div className="space-y-4">
                    {movie.heroReviews.map((review, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-gray-800 text-sm">
                            {review.hero}
                          </h5>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                          "{review.comment}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📊 Estatísticas do Clube
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">847</div>
                <div className="text-sm text-gray-600">Sessões Realizadas</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-600 mb-1">156</div>
                <div className="text-sm text-gray-600">Filmes Assistidos</div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-600 mb-1">2.8</div>
                <div className="text-sm text-gray-600">Nota Média</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">43</div>
                <div className="text-sm text-gray-600">Heróis Membros</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4">🎬 Próxima Sessão</h3>
            <p className="text-lg mb-2">
              <strong>"Capitão Delivery vs. O Entregador Fantasma"</strong>
            </p>
            <p className="mb-4">Sexta-feira, 20:00 - Sala de Cinema da Academia</p>
            <p className="text-sm opacity-90">
              Tragam pipoca e preparem-se para 90 minutos de puro entretenimento questionável!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;