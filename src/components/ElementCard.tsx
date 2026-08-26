import React from 'react';
import { ChemicalElement } from '../types';
import { getElementTheme } from '../utils/theme';

interface ElementCardProps {
  elemento: ChemicalElement;
  isSelecionado: boolean;
  onSelecionar: (elemento: ChemicalElement) => void;
  isHighContrast: boolean;
}

export const ElementCard: React.FC<ElementCardProps> = ({
  elemento,
  isSelecionado,
  onSelecionar,
  isHighContrast,
}) => {
  const theme = getElementTheme(elemento.simbolo, elemento.categoria);

  return (
    <button
      id={`btn-elemento-${elemento.simbolo.toLowerCase()}`}
      type="button"
      onClick={() => onSelecionar(elemento)}
      aria-label={`${elemento.nome}, Símbolo ${elemento.simbolo}, Número Atômico ${elemento.numAtomico}. Clique para ver detalhes e ouvir explicação.`}
      aria-pressed={isSelecionado}
      className={`relative min-h-[115px] sm:min-h-[130px] p-3 sm:p-4 rounded-3xl font-bold cursor-pointer transition-all flex flex-col items-center justify-between text-center group active:translate-y-1 active:border-b-2 ${
        isHighContrast
          ? isSelecionado
            ? 'bg-yellow-400 text-black border-4 border-white outline-4 outline-fuchsia-500 shadow-[0_0_20px_rgba(255,255,0,0.9)] scale-105'
            : 'bg-black text-yellow-300 border-4 border-white hover:bg-neutral-900 hover:border-yellow-400'
          : isSelecionado
          ? `${theme.bg} border-b-8 ${theme.borderBottom} ring-4 ${theme.ring} ring-offset-2 scale-105 shadow-xl`
          : `${theme.bg} border-b-6 sm:border-b-8 ${theme.borderBottom} hover:brightness-105 hover:scale-[1.03] shadow-md opacity-95`
      }`}
    >
      {/* Atomic number in upper corner */}
      <div className="w-full flex items-center justify-between text-xs sm:text-sm font-black">
        <span
          className={`px-2 py-0.5 rounded-lg text-xs font-black ${
            isHighContrast
              ? 'bg-black text-white'
              : 'bg-black/20 text-white backdrop-blur-xs'
          }`}
        >
          {elemento.numAtomico}
        </span>
        <span className="text-base sm:text-xl drop-shadow-sm" aria-hidden="true">
          {elemento.icone}
        </span>
      </div>

      {/* Main Chemical Symbol */}
      <div className="text-3xl sm:text-5xl font-black tracking-tight my-0.5 sm:my-1 drop-shadow-xs">
        {elemento.simbolo}
      </div>

      {/* Element Name */}
      <div className="text-xs sm:text-sm font-black uppercase tracking-wider truncate w-full px-1 drop-shadow-xs">
        {elemento.nome}
      </div>

      {/* Selection indicator checkmark */}
      {isSelecionado && (
        <span
          className={`absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shadow-md border-2 border-white ${
            isHighContrast ? 'bg-fuchsia-500 text-white' : 'bg-green-500 text-white animate-bounce'
          }`}
          aria-hidden="true"
        >
          ✓
        </span>
      )}
    </button>
  );
};
