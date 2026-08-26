import React, { useState } from 'react';
import { X, Volume2, Award, Sparkles, Heart, Zap, Globe, ArrowRight, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { ChemicalElement } from '../types';
import { ELEMENTOS_QUIMICOS } from '../data/elements';
import { speakText } from '../utils/speech';

// Importação direta dos arquivos locais de fotos históricas reais autênticas (Domínio Público)
import fotoMarie1920 from '../assets/images/marie_curie_1920s.jpg';
import fotoMarie1903 from '../assets/images/marie_curie_1903.jpg';
import fotoMarieLab from '../assets/images/marie_curie_lab_real.jpg';

const FOTOS_HISTORICAS_MARIE_CURIE = [
  {
    src: fotoMarie1920,
    legenda: 'Retrato de Marie Curie (c. 1920)',
    descricao: 'Fotografia real de Marie Curie, cientista laureada com 2 Prêmios Nobel',
    epoca: 'Paris, França',
  },
  {
    src: fotoMarie1903,
    legenda: 'Marie Curie no 1º Prêmio Nobel (1903)',
    descricao: 'Fotografia oficial da época em que ganhou o Prêmio Nobel de Física',
    epoca: 'Ano de 1903',
  },
  {
    src: fotoMarieLab,
    legenda: 'Marie e Pierre Curie no Laboratório',
    descricao: 'Foto histórica real do casal operando os instrumentos de pesquisa de radioatividade',
    epoca: 'Laboratório em Paris',
  },
];

interface MarieCurieModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectElement: (element: ChemicalElement) => void;
  isHighContrast: boolean;
  speechRate: number;
}

export const MarieCurieModal: React.FC<MarieCurieModalProps> = ({
  isOpen,
  onClose,
  onSelectElement,
  isHighContrast,
  speechRate,
}) => {
  const [fotoIndex, setFotoIndex] = useState(0);

  if (!isOpen) return null;

  const fotoAtual = FOTOS_HISTORICAS_MARIE_CURIE[fotoIndex];
  const polonio = ELEMENTOS_QUIMICOS.find((el) => el.simbolo === 'Po') || ELEMENTOS_QUIMICOS[0];
  const radio = ELEMENTOS_QUIMICOS.find((el) => el.simbolo === 'Ra') || ELEMENTOS_QUIMICOS[0];

  const handleOuvirHistoria = () => {
    const texto = `Quem foi Marie Curie? Ela nasceu em 1867 na Polônia com o nome de Maria Skłodowska.
    Naquela época, mulheres eram proibidas de entrar na faculdade no seu país.
    Para conseguir estudar, Marie participou de uma universidade clandestina secreta chamada Universidade Voadora.
    Trabalhou por muitos anos como governanta para ajudar a pagar os estudos da irmã e depois mudou-se para Paris, onde estudou na famosa Sorbonne, passando frio e fome, mas nunca desistiu do seu sonho.
    Com muita dedicação e ao lado do seu marido Pierre Curie, Marie descobriu dois novos elementos químicos para a Tabela Periódica: o Polônio, em homenagem ao seu país natal, e o Rádio, que emitia uma luz brilhante.
    Ela inventou o termo Radioatividade e é a única pessoa na história da humanidade a ter ganhado dois Prêmios Nobel em duas ciências diferentes: Física e Química!`;

    speakText(texto, { rate: speechRate });
  };

  const handleIrParaElemento = (el: ChemicalElement) => {
    onSelectElement(el);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-marie-curie"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in"
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl sm:rounded-[36px] border-4 shadow-2xl overflow-hidden transition-all ${
          isHighContrast
            ? 'bg-black text-yellow-300 border-white'
            : 'bg-white text-slate-900 border-purple-200'
        }`}
      >
        {/* Topo do Modal */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-slate-100 dark:border-white/20 bg-purple-50/80 dark:bg-neutral-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
              👩‍🔬
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 id="titulo-marie-curie" className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-700 dark:text-yellow-300 m-0">
                  Marie Curie (1867 – 1934)
                </h2>
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-300 border border-purple-300">
                  A Mãe da Física e da Química Moderna 🏆
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-200 m-0">
                Pioneira da Ciência, heroína histórica e descobridora de elementos químicos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOuvirHistoria}
              aria-label="Ouvir a história completa de Marie Curie em voz alta"
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white dark:bg-yellow-300 dark:text-black font-black text-xs sm:text-sm cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-md"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">Ouvir História</span>
              <span className="sm:hidden">Ouvir</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar janela de Marie Curie"
              className="p-2.5 rounded-2xl bg-slate-200 hover:bg-rose-500 hover:text-white dark:bg-neutral-800 dark:hover:bg-rose-600 text-slate-700 dark:text-white border-2 border-slate-300 dark:border-white cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Conteúdo com Imagem e História Adaptada */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 scrollbar-thin">
          {/* Card Principal com Foto Histórica Real e Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-purple-50/50 dark:bg-neutral-900 p-4 sm:p-6 rounded-2xl border-2 border-purple-200 dark:border-white/20">
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-4 border-purple-300 dark:border-white shadow-xl bg-slate-900 flex items-center justify-center">
                <img
                  src={fotoAtual.src}
                  alt={fotoAtual.legenda}
                  className="w-full h-full object-cover object-top filter contrast-105"
                />
                <div className="absolute top-2 left-2 bg-black/80 text-yellow-300 border border-yellow-400/50 text-[11px] font-black px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                  <Camera className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Foto Real Histórica</span>
                </div>
                <div className="absolute top-2 right-2 bg-purple-900/85 text-white border border-purple-400 text-[10px] font-black px-2 py-0.5 rounded-full backdrop-blur-xs">
                  {fotoAtual.epoca}
                </div>

                {/* Controles de Navegação Anterior / Próxima */}
                <button
                  type="button"
                  onClick={() => setFotoIndex((prev) => (prev === 0 ? FOTOS_HISTORICAS_MARIE_CURIE.length - 1 : prev - 1))}
                  aria-label="Ver foto anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer border border-white/40 shadow-lg active:scale-90 transition-transform"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setFotoIndex((prev) => (prev === FOTOS_HISTORICAS_MARIE_CURIE.length - 1 ? 0 : prev + 1))}
                  aria-label="Ver próxima foto"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer border border-white/40 shadow-lg active:scale-90 transition-transform"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 text-center">
                  <span className="text-white text-xs sm:text-sm font-black block drop-shadow-md">
                    {fotoAtual.legenda}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-bold block mt-0.5">
                    {fotoAtual.descricao}
                  </span>
                </div>
              </div>

              {/* Botões para alternar fotos históricas reais */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                {FOTOS_HISTORICAS_MARIE_CURIE.map((foto, idx) => (
                  <button
                    key={foto.legenda}
                    type="button"
                    onClick={() => setFotoIndex(idx)}
                    className={`px-3 py-1 rounded-xl text-xs font-black border-2 cursor-pointer transition-all ${
                      fotoIndex === idx
                        ? 'bg-purple-600 text-white border-purple-800 shadow-sm ring-2 ring-purple-300 scale-105'
                        : 'bg-white dark:bg-black text-slate-700 dark:text-yellow-200 border-slate-300 dark:border-white/30 hover:bg-purple-50'
                    }`}
                  >
                    Foto {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-yellow-300 border border-amber-300 text-xs font-black">
                <Award className="w-4 h-4 text-amber-600" />
                <span>2 Prêmios Nobel (Física em 1903 e Química em 1911)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-yellow-300 leading-tight">
                Quem foi Marie Curie?
              </h3>
              <p className="text-sm sm:text-base font-bold text-slate-700 dark:text-yellow-100 leading-relaxed">
                Nascida na Polônia como <strong>Maria Skłodowska</strong>, Marie Curie foi uma das maiores cientistas de todos os tempos. Ela descobriu a <strong>Radioatividade</strong> (termo que ela mesma inventou!) e abriu as portas da física atômica e dos tratamentos modernos contra o câncer.
              </p>
            </div>
          </div>

          {/* Seção 1: A superação numa época sem direitos para as mulheres */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-neutral-900 border-2 border-amber-200 dark:border-white/20 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-800 dark:text-yellow-300">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500 shrink-0" />
              <h4 className="text-lg font-black m-0">
                Como ela conseguiu estudar mesmo sendo mulher em uma época sem direitos?
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-yellow-100 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-base leading-none">🚫</span>
                <span>
                  <strong>Mulheres eram proibidas de entrar na faculdade:</strong> No final do século XIX, na Polônia (ocupada pelo Império Russo), as mulheres não podiam cursar o ensino superior.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base leading-none">🕵️‍♀️</span>
                <span>
                  <strong>A &quot;Universidade Voadora&quot; clandestina:</strong> Marie não desistiu. Ela começou a estudar em segredo em uma rede clandestina de aulas noturnas que mudava de lugar todo dia para não ser descoberta pela polícia.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base leading-none">🤝</span>
                <span>
                  <strong>Pacto de irmãs:</strong> Marie trabalhou durante anos como governanta e professora particular para pagar a faculdade de Medicina da sua irmã Bronisława em Paris. Mais tarde, foi a vez de a irmã ajudá-la.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base leading-none">🎓</span>
                <span>
                  <strong>Superação em Paris:</strong> Em 1891, Marie mudou-se para a França e entrou na famosa <em>Universidade de Sorbonne</em>. Morava em um sótão frio, comia pouco para economizar dinheiro para os livros, e formou-se em <strong>1º lugar em Física</strong> e <strong>2º lugar em Matemática</strong>!
                </span>
              </li>
            </ul>
          </div>

          {/* Seção 2: Os Elementos que ela descobriu para a Tabela Periódica */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-yellow-300">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
              <h4 className="text-lg font-black m-0">
                Quais elementos Marie Curie descobriu para a Tabela Periódica?
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Polônio */}
              <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-neutral-900 border-2 border-indigo-200 dark:border-white/30 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-lg">
                        Po
                      </div>
                      <div>
                        <h5 className="text-base font-black text-slate-900 dark:text-yellow-300 m-0">
                          Polônio (Nº 84)
                        </h5>
                        <span className="text-[11px] font-bold text-slate-500 dark:text-yellow-200">
                          Descoberto em 1898
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl">🇵🇱</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-yellow-100 mt-2">
                    Marie batizou este elemento de <strong>Polônio</strong> para homenagear sua terra natal, a <strong>Polônia</strong>, que na época nem sequer existia como país independente no mapa.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleIrParaElemento(polonio)}
                  className="w-full py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Ver Polônio na Tabela</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Rádio */}
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-neutral-900 border-2 border-rose-200 dark:border-white/30 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-rose-600 text-white font-black flex items-center justify-center text-lg">
                        Ra
                      </div>
                      <div>
                        <h5 className="text-base font-black text-slate-900 dark:text-yellow-300 m-0">
                          Rádio (Nº 88)
                        </h5>
                        <span className="text-[11px] font-bold text-slate-500 dark:text-yellow-200">
                          Descoberto em 1898
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-yellow-100 mt-2">
                    Chamado de <strong>Rádio</strong> (do latim <em>radius</em> = raio de luz) porque emitia uma luz azul-esverdeada brilhante no escuro. Foi a base para o tratamento de radioterapia.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleIrParaElemento(radio)}
                  className="w-full py-2 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-black flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Ver Rádio na Tabela</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Seção 3: O Impacto para a Humanidade e a Tabela Periódica */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-neutral-900 border-2 border-slate-200 dark:border-white/20 space-y-2">
            <h4 className="text-sm sm:text-base font-black text-slate-900 dark:text-yellow-300 flex items-center gap-2 m-0">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>Legado Imortal: Curiosidades Marcantes</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-700 dark:text-yellow-100">
              <div className="p-2.5 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-white/20">
                <span className="block text-base mb-0.5">🚑</span>
                <strong>As &quot;Petites Curies&quot;:</strong> Durante a 1ª Guerra Mundial, ela montou ambulâncias com aparelhos de Raio-X móveis para salvar a vida de mais de 1 milhão de soldados.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-white/20">
                <span className="block text-base mb-0.5">👩‍🏫</span>
                <strong>1ª Professora de Sorbonne:</strong> Tornou-se a primeira mulher a lecionar como professora titular na história da Universidade de Paris.
              </div>
              <div className="p-2.5 rounded-xl bg-white dark:bg-black border border-slate-200 dark:border-white/20">
                <span className="block text-base mb-0.5">🧪</span>
                <strong>Elemento 96 (Cúrio - Cm):</strong> Em sua homenagem e de seu marido Pierre, a tabela periódica ganhou o elemento de número 96 chamado <strong>Cúrio (Cm)</strong>.
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="p-3 sm:p-4 bg-slate-100 dark:bg-neutral-950 border-t border-slate-200 dark:border-white/20 flex items-center justify-between text-xs font-bold text-slate-600 dark:text-yellow-200">
          <span>💡 &quot;Na vida, nada deve ser temido, apenas compreendido.&quot; — Marie Curie</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 text-white dark:bg-yellow-300 dark:text-black font-black text-xs cursor-pointer active:scale-95"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
