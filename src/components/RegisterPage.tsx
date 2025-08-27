import React, { useState } from 'react';
import { User, Zap, Shirt, MessageSquare, Send, CheckCircle } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    heroName: '',
    power: '',
    costume: '',
    catchphrase: '',
    email: '',
    experience: 'beginner'
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const uselessPowers = [
    "Lembrar aniversários de pessoas aleatórias",
    "Fazer café perfeito apenas às terças-feiras",
    "Detectar quando alguém está mentindo sobre gostar de pizza de abacaxi",
    "Transformar qualquer situação constrangedora em ainda mais constrangedora",
    "Encontrar a última vaga de estacionamento quando não precisa mais dela",
    "Acordar 5 minutos antes do despertador tocar",
    "Saber exatamente quantos grãos de arroz tem no prato",
    "Fazer pombos formarem fila indiana",
    "Conseguir que elevadores sempre parem no andar errado",
    "Detectar quando o WiFi vai cair 3 segundos antes",
    "Fazer plantas artificiais parecerem mais vivas que as reais",
    "Lembrar de todas as senhas, exceto a que precisa no momento",
    "Fazer com que todas as impressoras funcionem... só quando ninguém está olhando",
    "Encontrar meias perdidas, mas apenas as que não combinam"
  ];

  const costumes = [
    "Capa feita de lençol da vovó",
    "Pijama com estampa de super-herói",
    "Terno social com gravata de desenho animado",
    "Roupa de ginástica com toalha amarrada no pescoço",
    "Uniforme de trabalho customizado",
    "Fantasia de festa junina adaptada",
    "Roupa casual com adesivos de super-herói",
    "Avental de cozinha estilizado"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Todo herói precisa de um nome! (Mesmo que seja só João)";
    }

    if (!formData.heroName.trim()) {
      newErrors.heroName = "Cadê seu nome de herói? 'Pessoa Normal' não conta!";
    }

    if (!formData.power.trim()) {
      newErrors.power = "Escolha um poder! Mesmo que seja inútil, é seu poder!";
    }

    if (!formData.costume.trim()) {
      newErrors.costume = "Todo herói precisa de um traje! Nem que seja um pijama!";
    }

    if (!formData.catchphrase.trim()) {
      newErrors.catchphrase = "Onde está sua frase de efeito? 'Oi' não intimida vilões!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Precisamos do seu email para mandar as missões!";
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Esse email parece suspeito... Tem certeza que não é um vilão?";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        console.log('Hero registered:', formData);
      }, 1000);
    }
  };

  const suggestRandomPower = () => {
    const randomPower = uselessPowers[Math.floor(Math.random() * uselessPowers.length)];
    setFormData(prev => ({
      ...prev,
      power: randomPower
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-12 shadow-xl text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🎉</div>
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo à Liga, {formData.heroName}!
          </h1>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Seu Perfil de Herói:</h2>
            <div className="text-left space-y-2 text-gray-700">
              <p><strong>Nome Civil:</strong> {formData.name}</p>
              <p><strong>Nome de Herói:</strong> {formData.heroName}</p>
              <p><strong>Super Poder:</strong> {formData.power}</p>
              <p><strong>Traje:</strong> {formData.costume}</p>
              <p><strong>Frase de Efeito:</strong> "{formData.catchphrase}"</p>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            Sua ficha foi enviada para análise do Conselho de Heróis Amadores. 
            Você receberá suas primeiras missões por email em breve!
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                heroName: '',
                power: '',
                costume: '',
                catchphrase: '',
                email: '',
                experience: 'beginner'
              });
            }}
            className="bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Cadastrar Outro Herói
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            📝 Cadastro de Herói Amador
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pronto para se juntar à mais prestigiosa academia de heróis... amadores? 
            Preencha o formulário abaixo e comece sua jornada heroica!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <User className="w-6 h-6 text-red-600" />
                <span>Informações Pessoais</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Civil *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome verdadeiro"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="heroi@exemplo.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span>Identidade Heroica</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="heroName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome de Herói *
                  </label>
                  <input
                    type="text"
                    id="heroName"
                    name="heroName"
                    value={formData.heroName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.heroName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ex: Capitão Café, Super Atrasado, Miss Procrastinação"
                  />
                  {errors.heroName && (
                    <p className="text-red-500 text-sm mt-1">{errors.heroName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="power" className="block text-sm font-semibold text-gray-700 mb-2">
                    Super Poder *
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      id="power"
                      name="power"
                      value={formData.power}
                      onChange={handleInputChange}
                      className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                        errors.power ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Descreva seu poder único (pode ser inútil!)"
                    />
                    <button
                      type="button"
                      onClick={suggestRandomPower}
                      className="px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
                      title="Sugerir poder aleatório"
                    >
                      🎲
                    </button>
                  </div>
                  {errors.power && (
                    <p className="text-red-500 text-sm mt-1">{errors.power}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="costume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Traje Favorito *
                  </label>
                  <select
                    id="costume"
                    name="costume"
                    value={formData.costume}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      errors.costume ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Escolha seu traje...</option>
                    {costumes.map((costume, index) => (
                      <option key={index} value={costume}>{costume}</option>
                    ))}
                  </select>
                  {errors.costume && (
                    <p className="text-red-500 text-sm mt-1">{errors.costume}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-orange-600" />
                <span>Toque Final</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="catchphrase" className="block text-sm font-semibold text-gray-700 mb-2">
                    Frase de Efeito *
                  </label>
                  <textarea
                    id="catchphrase"
                    name="catchphrase"
                    value={formData.catchphrase}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                      errors.catchphrase ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ex: 'Não tem problema, eu resolvo... eventualmente!'"
                  />
                  {errors.catchphrase && (
                    <p className="text-red-500 text-sm mt-1">{errors.catchphrase}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nível de Experiência
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="beginner">Iniciante Total (nunca salvei nada)</option>
                    <option value="amateur">Amador Experiente (já segurei uma porta)</option>
                    <option value="semi-pro">Semi-Profissional (tenho uma capa de verdade)</option>
                    <option value="veteran">Veterano (sobrevivi a 3 missões)</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4169E1] via-[#DC143C] to-[#FF8C00] hover:from-[#2B58DE] hover:via-[#BB1133] hover:to-[#F58700] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Virar Herói Oficial!</span>
            </button>
          </form>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-yellow-800 mb-3 flex items-center space-x-2">
              <Shirt className="w-5 h-5" />
              <span>💡 Dicas para Novos Heróis</span>
            </h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Capas são opcionais, mas recomendadas para efeito dramático</li>
              <li>• Mesmo poderes inúteis podem salvar o dia (às vezes)</li>
              <li>• Frases de efeito devem ser praticadas no espelho</li>
              <li>• Não se preocupe se falhar nas primeiras missões, temos desculpas prontas!</li>
              <li>• Lembre-se: até o Superman tem dias ruins</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;