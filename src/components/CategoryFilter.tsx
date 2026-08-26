import React from 'react';
import { CategoriaFiltro } from '../types';

interface CategoryFilterProps {
  filtroAtivo: CategoriaFiltro;
  onSelecionarFiltro: (filtro: CategoriaFiltro) => void;
  isHighContrast: boolean;
}

const CATEGORIAS: {
  id: CategoriaFiltro;
  rotulo: string;
  emoji: string;
  corAtiva: string;
  borderAtiva: string;
}[] = [
  {
    id: 'todos',
    rotulo: 'Todos os Elementos',
    emoji: '🧪',
    corAtiva: 'bg-indigo-600 text-white',
    borderAtiva: 'border-indigo-800',
  },
  {
    id: 'Vida e Natureza',
    rotulo: 'Vida e Natureza',
    emoji: '🌱',
    corAtiva: 'bg-pink-600 text-white',
    borderAtiva: 'border-pink-800',
  },
  {
    id: 'Gases e Ar',
    rotulo: 'Gases e o Ar',
    emoji: '💨',
    corAtiva: 'bg-purple-600 text-white',
    borderAtiva: 'border-purple-800',
  },
  {
    id: 'Nosso Corpo e Saúde',
    rotulo: 'Corpo e Saúde',
    emoji: '❤️',
    corAtiva: 'bg-emerald-600 text-white',
    borderAtiva: 'border-emerald-800',
  },
  {
    id: 'Metais do Dia a Dia',
    rotulo: 'Metais do Dia a Dia',
    emoji: '⚙️',
    corAtiva: 'bg-orange-500 text-white',
    borderAtiva: 'border-orange-700',
  },
  {
    id: 'Tecnologia e Construção',
    rotulo: 'Tecnologia',
    emoji: '⚡',
    corAtiva: 'bg-sky-500 text-white',
    borderAtiva: 'border-sky-700',
  },
  {
    id: 'Ciência e Laboratório',
    rotulo: 'Ciência e Espaço',
    emoji: '🔬',
    corAtiva: 'bg-violet-600 text-white',
    borderAtiva: 'border-violet-800',
  },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  filtroAtivo,
  onSelecionarFiltro,
  isHighContrast,
}) => {
  return (
    <nav
      id="filtro-categorias"
      aria-label="Filtrar elementos por contexto do cotidiano"
      className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
    >
      {CATEGORIAS.map((cat) => {
        const isSelected = filtroAtivo === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelecionarFiltro(cat.id)}
            aria-pressed={isSelected}
            className={`px-4 py-2 rounded-2xl text-sm sm:text-base font-black border-b-4 transition-all cursor-pointer inline-flex items-center gap-2 active:border-b-0 active:translate-y-1 ${
              isSelected
                ? isHighContrast
                  ? 'bg-yellow-400 text-black border-white shadow-lg'
                  : `${cat.corAtiva} ${cat.borderAtiva} shadow-md scale-105`
                : isHighContrast
                ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-neutral-900'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400'
            }`}
          >
            <span className="text-base sm:text-lg">{cat.emoji}</span>
            <span>{cat.rotulo}</span>
          </button>
        );
      })}
    </nav>
  );
};
