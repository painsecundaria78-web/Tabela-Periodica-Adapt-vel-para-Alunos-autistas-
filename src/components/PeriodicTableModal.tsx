import React, { useState } from 'react';
import { X, Volume2, Check } from 'lucide-react';
import { ChemicalElement } from '../types';
import { ELEMENTOS_QUIMICOS } from '../data/elements';
import { getElementTheme } from '../utils/theme';
import { speakText } from '../utils/speech';

interface PeriodicTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectElement: (element: ChemicalElement) => void;
  isHighContrast: boolean;
  speechRate: number;
}

export const PeriodicTableModal: React.FC<PeriodicTableModalProps> = ({
  isOpen,
  onClose,
  onSelectElement,
  isHighContrast,
  speechRate,
}) => {
  const [elementoEmDestaque, setElementoEmDestaque] = useState<ChemicalElement | null>(null);

  if (!isOpen) return null;

  // Mapa rápido de elementos por Z (Número Atômico 1 até 118)
  const elementosPorNumero = new Map<number, ChemicalElement>();
  ELEMENTOS_QUIMICOS.forEach((el) => {
    elementosPorNumero.set(el.numAtomico, el);
  });

  const handleElementoClick = (el: ChemicalElement) => {
    setElementoEmDestaque(el);
    speakText(`Elemento ${el.nome}, símbolo ${el.simbolo}, número atômico ${el.numAtomico}. Está presente em: ${el.uso}`, {
      rate: speechRate,
    });
  };

  const handleSelecionarEFechar = (el: ChemicalElement) => {
    onSelectElement(el);
    onClose();
  };

  const handleLerResumoTabela = () => {
    speakText(
      'Tabela Periódica Completa com 18 colunas. Clique em qualquer elemento para ver seu símbolo, foto e ouvir o que ele faz!',
      { rate: speechRate }
    );
  };

  // Renderiza a célula de um elemento na grade 18x7
  const renderElementCell = (numAtomico: number) => {
    const el = elementosPorNumero.get(numAtomico);
    if (!el) return <div className="w-10 h-12 sm:w-12 sm:h-14 lg:w-14 lg:h-16" />;

    const theme = getElementTheme(el.simbolo, el.categoria);
    const isDestaque = elementoEmDestaque?.simbolo === el.simbolo;

    return (
      <button
        key={el.simbolo}
        type="button"
        onClick={() => handleElementoClick(el)}
        onDoubleClick={() => handleSelecionarEFechar(el)}
        title={`${el.numAtomico} - ${el.nome} (${el.simbolo})`}
        aria-label={`${el.nome}, Símbolo ${el.simbolo}, Número ${el.numAtomico}`}
        className={`w-9 h-12 sm:w-11 sm:h-14 lg:w-13 lg:h-16 p-0.5 rounded-lg sm:rounded-xl border-b-3 sm:border-b-4 flex flex-col items-center justify-between cursor-pointer transition-all duration-150 active:scale-95 ${
          theme.bg
        } ${theme.borderBottom} ${
          isDestaque
            ? 'ring-4 ring-yellow-400 scale-110 z-20 shadow-xl'
            : 'hover:scale-105 hover:z-10 hover:shadow-md'
        } ${isHighContrast ? 'border-white text-black font-black' : ''}`}
      >
        <div className="flex items-center justify-between w-full px-1 text-[9px] sm:text-[10px] font-black leading-none">
          <span>{el.numAtomico}</span>
          <span className="text-[10px] sm:text-xs">{el.icone || '🧪'}</span>
        </div>
        <div className="text-xs sm:text-sm lg:text-base font-black leading-none my-auto drop-shadow-xs">
          {el.simbolo}
        </div>
        <div className="text-[8px] sm:text-[9px] font-black truncate w-full px-0.5 text-center leading-none">
          {el.nome}
        </div>
      </button>
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal-tabela"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in"
    >
      <div
        className={`relative w-full max-w-[1450px] max-h-[95vh] flex flex-col rounded-3xl sm:rounded-[36px] border-4 shadow-2xl overflow-hidden transition-all ${
          isHighContrast
            ? 'bg-black text-yellow-300 border-white'
            : 'bg-white text-slate-900 border-indigo-200'
        }`}
      >
        {/* Topo do Modal com Título e Ações */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 border-b-2 border-slate-100 dark:border-white/20 bg-slate-50/80 dark:bg-neutral-900 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-md">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="titulo-modal-tabela" className="text-xl sm:text-2xl lg:text-3xl font-black text-indigo-600 dark:text-yellow-300 m-0">
                  Tabela Periódica
                </h2>
                <span className="px-3 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 dark:bg-neutral-800 dark:text-yellow-300 border border-indigo-300">
                  18 Colunas • 118 Elementos
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-200 m-0">
                Toque em qualquer elemento para ouvir e ver onde ele está no dia a dia.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleLerResumoTabela}
              aria-label="Ouvir explicação da tabela periódica em voz alta"
              className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-neutral-800 dark:text-yellow-300 border-2 border-indigo-200 dark:border-white font-black text-xs sm:text-sm cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-xs"
            >
              <Volume2 className="w-4 h-4" />
              <span>Ouvir Ajuda 🔊</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar consulta da tabela periódica"
              className="p-2.5 rounded-2xl bg-slate-200 hover:bg-rose-500 hover:text-white dark:bg-neutral-800 dark:hover:bg-rose-600 text-slate-700 dark:text-white border-2 border-slate-300 dark:border-white cursor-pointer transition-all active:scale-95 shadow-xs"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Corpo com a Tabela Periódica em Grade 18 Colunas - Simples e Direta */}
        <div className="p-4 sm:p-6 overflow-x-auto overflow-y-auto flex-1 scrollbar-thin">
          <div className="min-w-[850px] lg:min-w-[1050px] mx-auto space-y-2.5">
            {/* Números das 18 Colunas (Grupos) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5 text-center text-[10px] sm:text-xs font-black text-indigo-700 dark:text-yellow-300 bg-indigo-50/60 dark:bg-neutral-800/60 py-1 rounded-xl">
              {Array.from({ length: 18 }, (_, i) => (
                <div key={i + 1} className="py-0.5 font-black">
                  Col. {i + 1}
                </div>
              ))}
            </div>

            {/* Linha 1 (H e He) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {renderElementCell(1)}
              <div className="col-span-16" />
              {renderElementCell(2)}
            </div>

            {/* Linha 2 (Li até Ne) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {renderElementCell(3)}
              {renderElementCell(4)}
              <div className="col-span-10" />
              {renderElementCell(5)}
              {renderElementCell(6)}
              {renderElementCell(7)}
              {renderElementCell(8)}
              {renderElementCell(9)}
              {renderElementCell(10)}
            </div>

            {/* Linha 3 (Na até Ar) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {renderElementCell(11)}
              {renderElementCell(12)}
              <div className="col-span-10" />
              {renderElementCell(13)}
              {renderElementCell(14)}
              {renderElementCell(15)}
              {renderElementCell(16)}
              {renderElementCell(17)}
              {renderElementCell(18)}
            </div>

            {/* Linha 4 (K até Kr) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {Array.from({ length: 18 }, (_, i) => renderElementCell(19 + i))}
            </div>

            {/* Linha 5 (Rb até Xe) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {Array.from({ length: 18 }, (_, i) => renderElementCell(37 + i))}
            </div>

            {/* Linha 6 (Cs, Ba, Marcador 57-71, Hf até Rn) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {renderElementCell(55)}
              {renderElementCell(56)}
              {/* Marcador dos Lantanídeos */}
              <div className="p-0.5 rounded-lg border-2 border-dashed border-pink-400 bg-pink-50 dark:bg-pink-950/40 text-[9px] font-black text-pink-700 dark:text-pink-300 flex items-center justify-center text-center leading-tight">
                57-71
                <br />
                Lantan.
              </div>
              {Array.from({ length: 15 }, (_, i) => renderElementCell(72 + i))}
            </div>

            {/* Linha 7 (Fr, Ra, Marcador 89-103, Rf até Og) */}
            <div className="grid grid-cols-18 gap-1 sm:gap-1.5">
              {renderElementCell(87)}
              {renderElementCell(88)}
              {/* Marcador dos Actinídeos */}
              <div className="p-0.5 rounded-lg border-2 border-dashed border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-[9px] font-black text-rose-700 dark:text-rose-300 flex items-center justify-center text-center leading-tight">
                89-103
                <br />
                Actin.
              </div>
              {Array.from({ length: 15 }, (_, i) => renderElementCell(104 + i))}
            </div>

            {/* Séries inferiores */}
            <div className="pt-3 border-t-2 border-dashed border-slate-200 dark:border-white/20">
              {/* Série dos Lantanídeos (57 ao 71) */}
              <div className="grid grid-cols-18 gap-1 sm:gap-1.5 items-center">
                <div className="col-span-2 text-[10px] sm:text-xs font-black text-pink-700 dark:text-pink-300 text-right pr-2">
                  Lantanídeos:
                </div>
                <div className="col-span-1" />
                {Array.from({ length: 15 }, (_, i) => renderElementCell(57 + i))}
              </div>

              {/* Série dos Actinídeos (89 ao 103) */}
              <div className="grid grid-cols-18 gap-1 sm:gap-1.5 items-center mt-1.5">
                <div className="col-span-2 text-[10px] sm:text-xs font-black text-rose-700 dark:text-rose-300 text-right pr-2">
                  Actinídeos:
                </div>
                <div className="col-span-1" />
                {Array.from({ length: 15 }, (_, i) => renderElementCell(89 + i))}
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé com Informações do Elemento Selecionado */}
        {elementoEmDestaque ? (
          <div className="p-4 sm:p-5 bg-indigo-50 dark:bg-neutral-900 border-t-3 border-indigo-300 dark:border-white flex flex-wrap items-center justify-between gap-4 shrink-0 animate-in slide-in-from-bottom-2">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-black border-3 border-indigo-400 flex flex-col items-center justify-center text-center shadow-md shrink-0">
                <span className="text-2xl leading-none">{elementoEmDestaque.icone || '🧪'}</span>
                <span className="text-xl font-black text-indigo-700 dark:text-yellow-300 leading-none mt-1">
                  {elementoEmDestaque.simbolo}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-yellow-300 m-0">
                    {elementoEmDestaque.nome} (Número {elementoEmDestaque.numAtomico})
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-800 dark:bg-neutral-800 dark:text-yellow-200 border border-indigo-300">
                    {elementoEmDestaque.familiaQuimica}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-700 dark:text-yellow-100 m-0 mt-0.5 max-w-2xl">
                  <strong>Onde está no dia a dia:</strong> {elementoEmDestaque.uso}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  speakText(
                    `${elementoEmDestaque.nome}, símbolo ${elementoEmDestaque.simbolo}. Onde está: ${elementoEmDestaque.uso}`,
                    { rate: speechRate }
                  )
                }
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-indigo-700 dark:bg-black dark:text-yellow-300 border-2 border-indigo-300 dark:border-white font-black text-xs sm:text-sm cursor-pointer flex items-center gap-1.5 shadow-xs"
              >
                <Volume2 className="w-4 h-4" />
                <span>Ouvir</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelecionarEFechar(elementoEmDestaque)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm cursor-pointer flex items-center gap-2 shadow-md border-b-3 border-indigo-900 active:border-b-0 active:translate-y-0.5"
              >
                <Check className="w-4 h-4" />
                <span>Ver Elemento</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-slate-100 dark:bg-neutral-900 text-center text-xs sm:text-sm font-bold text-slate-600 dark:text-yellow-200 border-t border-slate-200 dark:border-white/20">
            💡 Toque em qualquer elemento para ver seu símbolo, figura e uso no dia a dia!
          </div>
        )}
      </div>
    </div>
  );
};
