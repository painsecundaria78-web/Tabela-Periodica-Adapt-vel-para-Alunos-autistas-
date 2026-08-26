import React from 'react';
import { GRUPOS_TABELA, GroupExplanation } from '../data/elementGroups';
import { Sparkles, Volume2, X } from 'lucide-react';

interface QuickGroupSelectorProps {
  grupoSelecionadoId: string | null;
  onSelecionarGrupo: (grupoId: string | null) => void;
  isHighContrast: boolean;
  onOuvirFamilia?: (grupo: GroupExplanation) => void;
}

export const QuickGroupSelector: React.FC<QuickGroupSelectorProps> = ({
  grupoSelecionadoId,
  onSelecionarGrupo,
  isHighContrast,
  onOuvirFamilia,
}) => {
  const grupoAtivo = GRUPOS_TABELA.find((g) => g.id === grupoSelecionadoId);

  return (
    <div className="space-y-3" aria-label="Seletor Rápido de Famílias">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-yellow-300">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-yellow-400" />
          <span>Explorar por Família (Coluna):</span>
        </div>

        {grupoSelecionadoId && (
          <button
            type="button"
            onClick={() => onSelecionarGrupo(null)}
            className="text-xs font-black px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-neutral-800 text-slate-700 dark:text-yellow-300 hover:bg-slate-300 cursor-pointer flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            <span>Limpar Filtro de Família</span>
          </button>
        )}
      </div>

      {/* Carrossel de botões de Família com clique fácil */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          type="button"
          onClick={() => onSelecionarGrupo(null)}
          aria-pressed={grupoSelecionadoId === null}
          className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black shrink-0 border-b-3 cursor-pointer transition-all active:translate-y-0.5 ${
            grupoSelecionadoId === null
              ? isHighContrast
                ? 'bg-yellow-400 text-black border-white ring-2 ring-yellow-400'
                : 'bg-indigo-600 text-white border-indigo-900 shadow-sm'
              : isHighContrast
              ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
          }`}
        >
          <span>🌟 Todos (118)</span>
        </button>

        {GRUPOS_TABELA.map((grupo) => {
          const isAtivo = grupo.id === grupoSelecionadoId;
          return (
            <button
              key={grupo.id}
              id={`quick-btn-${grupo.id}`}
              type="button"
              onClick={() => onSelecionarGrupo(isAtivo ? null : grupo.id)}
              aria-pressed={isAtivo}
              aria-label={`Filtrar pela ${grupo.apelidoFacil}`}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-black shrink-0 border-b-3 cursor-pointer transition-all flex items-center gap-1.5 active:translate-y-0.5 ${
                isAtivo
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white ring-2 ring-yellow-400'
                    : 'bg-indigo-600 text-white border-indigo-900 shadow-md scale-105'
                  : isHighContrast
                  ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                  : 'bg-white text-slate-800 border-slate-300 hover:bg-indigo-50 shadow-xs'
              }`}
            >
              <span className="text-base" aria-hidden="true">{grupo.icone}</span>
              <span>{grupo.apelidoFacil}</span>
            </button>
          );
        })}
      </div>

      {/* Mini banner explicativo da família ativa */}
      {grupoAtivo && (
        <div
          className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all flex flex-wrap items-center justify-between gap-3 animate-fadeIn ${
            isHighContrast
              ? 'bg-neutral-950 border-yellow-400 text-yellow-300'
              : 'bg-indigo-50/90 border-indigo-200 text-slate-900'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl p-1.5 rounded-xl bg-white dark:bg-black border border-indigo-200 dark:border-white/30" aria-hidden="true">
              {grupoAtivo.icone}
            </span>
            <div>
              <div className="text-xs uppercase font-black tracking-wider text-indigo-600 dark:text-cyan-300">
                Família Ativa: {grupoAtivo.numeroGrupo}
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-yellow-300">
                {grupoAtivo.apelidoFacil} ({grupoAtivo.nome})
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-yellow-100 m-0">
                {grupoAtivo.explicacaoSimples}
              </p>
            </div>
          </div>

          {onOuvirFamilia && (
            <button
              type="button"
              onClick={() => onOuvirFamilia(grupoAtivo)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black border-2 cursor-pointer transition-all flex items-center gap-1.5 shrink-0 ${
                isHighContrast
                  ? 'bg-green-400 text-black border-white'
                  : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Ouvir Família</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
