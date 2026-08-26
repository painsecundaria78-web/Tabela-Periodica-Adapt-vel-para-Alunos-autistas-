import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpenCheck, HeartHandshake, Eye, Volume2, Sparkles } from 'lucide-react';

interface PedagogicalGuideProps {
  isHighContrast: boolean;
}

export const PedagogicalGuide: React.FC<PedagogicalGuideProps> = ({ isHighContrast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      id="secao-pedagogica"
      className={`max-w-4xl mx-auto mt-10 mb-8 p-6 sm:p-7 rounded-[32px] border-4 transition-all ${
        isHighContrast
          ? 'bg-neutral-950 border-white text-yellow-300'
          : 'bg-white border-indigo-100 text-slate-800 shadow-xl'
      }`}
    >
      <button
        id="btn-toggle-guia"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="conteudo-guia-pedagogico"
        className="w-full flex items-center justify-between font-black text-lg sm:text-xl cursor-pointer text-left gap-3"
      >
        <span className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-neutral-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400 border-2 border-indigo-200 dark:border-white">
            <BookOpenCheck className="w-6 h-6" />
          </div>
          <span className="text-indigo-600 dark:text-yellow-300">
            Guia para Professores, Pais e Mediadores de Inclusão
          </span>
        </span>
        <span className="p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      {isOpen && (
        <div
          id="conteudo-guia-pedagogico"
          className="mt-6 pt-6 border-t-2 border-slate-100 dark:border-white/30 text-base space-y-5 animate-in fade-in"
        >
          <p className="leading-relaxed font-medium text-slate-600 dark:text-yellow-200">
            Este recurso pedagógico foi desenvolvido com foco em <strong>previsibilidade, desenho universal para aprendizagem (DUA) e baixa sobrecarga sensorial</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-black border-cyan-400 text-cyan-300'
                  : 'bg-indigo-50/70 border-indigo-200 text-slate-800'
              }`}
            >
              <div className="font-black flex items-center gap-2 mb-1.5 text-base text-indigo-700 dark:text-cyan-300">
                <Volume2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                <span>Modulação Auditiva</span>
              </div>
              <p className="text-sm leading-relaxed m-0 font-medium">
                Se o estudante tiver hipersensibilidade auditiva ou Transtorno do Espectro Autista (TEA), você pode desativar o <strong>Som Automático</strong> no topo e acionar a voz somente quando desejado, ajustando também a velocidade para 0.8x.
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-black border-yellow-400 text-yellow-300'
                  : 'bg-yellow-50/80 border-yellow-200 text-slate-800'
              }`}
            >
              <div className="font-black flex items-center gap-2 mb-1.5 text-base text-yellow-800 dark:text-yellow-400">
                <Eye className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <span>Acessibilidade Visual</span>
              </div>
              <p className="text-sm leading-relaxed m-0 font-medium">
                Utilize o botão de <strong>Alto Contraste</strong> (WCAG AAA) para estudantes com baixa visão, daltonismo ou preferências de contraste forte, e utilize os botões <strong>A+ / A-</strong> para redimensionar toda a tipografia.
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-black border-green-400 text-green-300'
                  : 'bg-emerald-50/70 border-emerald-200 text-slate-800'
              }`}
            >
              <div className="font-black flex items-center gap-2 mb-1.5 text-base text-emerald-800 dark:text-green-400">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-green-400" />
                <span>Linguagem Clara e Concreta</span>
              </div>
              <p className="text-sm leading-relaxed m-0 font-medium">
                Conceitos abstratos de química foram traduzidos para objetos táteis e familiares do cotidiano (água, lápis, ossos, sal, baterias de celular e moedas).
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-black border-purple-400 text-purple-300'
                  : 'bg-purple-50/70 border-purple-200 text-slate-800'
              }`}
            >
              <div className="font-black flex items-center gap-2 mb-1.5 text-base text-purple-800 dark:text-purple-400">
                <HeartHandshake className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Navegação por Teclado e Leitor</span>
              </div>
              <p className="text-sm leading-relaxed m-0 font-medium">
                Todos os cartões possuem anotações ARIA e são 100% navegáveis via tecla <kbd className="font-mono bg-black/10 px-1 rounded">Tab</kbd> e acionáveis via <kbd className="font-mono bg-black/10 px-1 rounded">Enter</kbd> ou <kbd className="font-mono bg-black/10 px-1 rounded">Espaço</kbd>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
