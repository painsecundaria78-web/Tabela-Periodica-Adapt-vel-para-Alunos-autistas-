import React, { useState } from 'react';
import { X, Volume2, Sparkles, BookOpen, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { GRUPOS_TABELA, EXPLICACAO_GERAL_GRUPOS, GroupExplanation } from '../data/elementGroups';

interface GroupsExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isHighContrast: boolean;
  onOuvirTexto: (texto: string) => void;
  onSelecionarGrupo?: (grupoId: string) => void;
}

export const GroupsExplainerModal: React.FC<GroupsExplainerModalProps> = ({
  isOpen,
  onClose,
  isHighContrast,
  onOuvirTexto,
}) => {
  const [grupoAtivo, setGrupoAtivo] = useState<GroupExplanation>(GRUPOS_TABELA[0]);

  if (!isOpen) return null;

  const handleOuvirGeral = () => {
    const texto = `${EXPLICACAO_GERAL_GRUPOS.titulo}. ${EXPLICACAO_GERAL_GRUPOS.resumoSimples}. ${EXPLICACAO_GERAL_GRUPOS.regraDeOuro}. ${EXPLICACAO_GERAL_GRUPOS.dicaParaMemorizar}`;
    onOuvirTexto(texto);
  };

  const handleOuvirGrupo = (grupo: GroupExplanation) => {
    const texto = `${grupo.numeroGrupo}: ${grupo.nome}. Apelido: ${grupo.apelidoFacil}. Explicação simples: ${grupo.explicacaoSimples}. Como aplicar no dia a dia: ${grupo.comoAplicarGrupo}. Exemplos no dia a dia: ${grupo.ondeEncontrar.join(', ')}. Curiosidade: ${grupo.curiosidadeGrupo}`;
    onOuvirTexto(texto);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal-grupos"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs animate-in fade-in"
    >
      <div
        className={`w-full max-w-5xl max-h-[92vh] flex flex-col rounded-[32px] sm:rounded-[40px] border-4 shadow-2xl overflow-hidden ${
          isHighContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : 'bg-white border-indigo-200 text-slate-800'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`p-4 sm:p-6 flex items-center justify-between border-b-2 ${
            isHighContrast
              ? 'bg-neutral-900 border-white/40'
              : 'bg-indigo-50/80 border-indigo-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shadow-md">
              🏛️
            </div>
            <div>
              <h2
                id="titulo-modal-grupos"
                className="text-xl sm:text-2xl font-black text-indigo-700 dark:text-yellow-300 leading-tight m-0"
              >
                Grupos e Famílias da Tabela Periódica
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-200 m-0">
                Explicação super fácil e direta para entender as 18 colunas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleOuvirGeral}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-black border-b-3 cursor-pointer flex items-center gap-1.5 transition-all ${
                isHighContrast
                  ? 'bg-green-400 text-black border-white'
                  : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Ouvir Resumo</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar janela de explicação dos grupos"
              className={`w-10 h-10 rounded-full flex items-center justify-center font-black border-2 cursor-pointer transition-all ${
                isHighContrast
                  ? 'bg-neutral-900 text-yellow-300 border-yellow-400 hover:bg-neutral-800'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700 border-slate-300'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Golden Rule Summary Box */}
        <div
          className={`p-4 sm:p-5 border-b-2 ${
            isHighContrast
              ? 'bg-neutral-950 border-yellow-400/40 text-yellow-300'
              : 'bg-amber-50 border-amber-200 text-amber-950'
          }`}
        >
          <div className="flex items-start gap-3">
            <span className="text-3xl" aria-hidden="true">💡</span>
            <div>
              <h3 className="font-black text-sm sm:text-base text-amber-800 dark:text-yellow-300 mb-1">
                O que é um Grupo ou Família?
              </h3>
              <p className="text-sm sm:text-base font-semibold leading-relaxed m-0 text-slate-700 dark:text-yellow-200">
                A Tabela Periódica tem <strong>18 colunas em pé</strong>. Cada coluna em pé é uma <strong>Família</strong>. Elementos da mesma família são como <strong>irmãos</strong>: eles têm o mesmo jeito de agir e superpoderes parecidos!
              </p>
            </div>
          </div>
        </div>

        {/* Modal Main Body (2 Columns Layout) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Column: List of Groups */}
          <div
            className={`w-full md:w-5/12 overflow-y-auto p-3 sm:p-4 border-b md:border-b-0 md:border-r-2 flex flex-col gap-2 ${
              isHighContrast ? 'border-neutral-800 bg-neutral-950' : 'border-slate-200 bg-slate-50/50'
            }`}
          >
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-yellow-300 px-2 py-1">
              Escolha uma Família para ver:
            </span>

            {GRUPOS_TABELA.map((grupo) => {
              const isSelected = grupoAtivo.id === grupo.id;
              return (
                <button
                  key={grupo.id}
                  type="button"
                  onClick={() => setGrupoAtivo(grupo)}
                  className={`p-3 rounded-2xl text-left border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? isHighContrast
                        ? 'bg-yellow-400 text-black border-white shadow-lg'
                        : 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-200'
                      : isHighContrast
                      ? 'bg-neutral-900 text-yellow-300 border-neutral-700 hover:border-yellow-400'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {grupo.icone}
                    </span>
                    <div>
                      <div className="text-xs font-bold opacity-75">
                        {grupo.numeroGrupo}
                      </div>
                      <div className="text-sm font-black leading-tight">
                        {grupo.nome}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 opacity-60" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Group Details */}
          <div className="w-full md:w-7/12 overflow-y-auto p-4 sm:p-6 flex flex-col gap-4">
            {/* Active Group Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="text-4xl p-2 rounded-2xl bg-indigo-50 dark:bg-neutral-900 border-2 border-indigo-200 dark:border-white/30">
                  {grupoAtivo.icone}
                </div>
                <div>
                  <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${grupoAtivo.corBadge}`}>
                    {grupoAtivo.numeroGrupo}
                  </span>
                  <h3 className="text-2xl font-black text-indigo-700 dark:text-yellow-300 m-0 mt-1">
                    {grupoAtivo.nome}
                  </h3>
                  <p className="text-sm font-bold text-slate-500 dark:text-yellow-200 m-0">
                    ✨ {grupoAtivo.apelidoFacil}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleOuvirGrupo(grupoAtivo)}
                className={`px-4 py-2 rounded-2xl font-black text-sm border-b-4 cursor-pointer transition-all flex items-center gap-1.5 shrink-0 ${
                  isHighContrast
                    ? 'bg-green-400 text-black border-white'
                    : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                }`}
              >
                <Volume2 className="w-4 h-4" />
                <span>Ouvir Grupo</span>
              </button>
            </div>

            {/* 1. O que é esse Grupo */}
            <div
              className={`p-4 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-900 border-cyan-400 text-cyan-300'
                  : 'bg-indigo-50/70 border-indigo-200'
              }`}
            >
              <h4 className="text-xs uppercase font-black tracking-wider text-indigo-600 dark:text-cyan-300 mb-1">
                💬 O que é essa família?
              </h4>
              <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-yellow-200 m-0 leading-relaxed">
                {grupoAtivo.explicacaoSimples}
              </p>
            </div>

            {/* 2. Como Aplicar no Dia a Dia */}
            <div
              className={`p-4 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-900 border-emerald-400 text-yellow-300'
                  : 'bg-emerald-50/70 border-emerald-200'
              }`}
            >
              <h4 className="text-xs uppercase font-black tracking-wider text-emerald-700 dark:text-emerald-300 mb-1 flex items-center gap-1.5">
                🛠️ Como aplicar no dia a dia?
              </h4>
              <p className="text-base sm:text-lg font-bold text-slate-800 dark:text-yellow-200 m-0 leading-relaxed">
                {grupoAtivo.comoAplicarGrupo}
              </p>
            </div>

            {/* 3. Exemplos Famosos & Onde Encontrar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Elementos Famosos */}
              <div
                className={`p-3.5 rounded-2xl border-2 ${
                  isHighContrast ? 'bg-neutral-900 border-white/40' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h4 className="text-xs uppercase font-black tracking-wider text-slate-500 dark:text-yellow-300 mb-2">
                  ⭐ Elementos Famosos:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {grupoAtivo.exemplosFamosos.map((ex, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-xl font-black border ${
                        isHighContrast
                          ? 'bg-black text-cyan-300 border-cyan-400'
                          : 'bg-white text-indigo-700 border-indigo-200 shadow-2xs'
                      }`}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              {/* Onde Encontrar */}
              <div
                className={`p-3.5 rounded-2xl border-2 ${
                  isHighContrast ? 'bg-neutral-900 border-white/40' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h4 className="text-xs uppercase font-black tracking-wider text-slate-500 dark:text-yellow-300 mb-2">
                  🏠 Onde Encontrar:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {grupoAtivo.ondeEncontrar.map((onde, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-xl font-bold border ${
                        isHighContrast
                          ? 'bg-black text-yellow-300 border-yellow-400'
                          : 'bg-white text-slate-700 border-slate-200 shadow-2xs'
                      }`}
                    >
                      📍 {onde}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Curiosidade Fácil */}
            <div
              className={`p-4 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
                  : 'bg-yellow-50 border-yellow-200 text-yellow-950'
              }`}
            >
              <h4 className="text-xs uppercase font-black tracking-wider text-yellow-800 dark:text-yellow-300 mb-1 flex items-center gap-1.5">
                💡 Curiosidade Fácil:
              </h4>
              <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-yellow-200 m-0">
                {grupoAtivo.curiosidadeGrupo}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`p-4 border-t-2 flex items-center justify-between ${
            isHighContrast ? 'bg-neutral-900 border-white/40' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="text-xs font-bold text-slate-500 dark:text-yellow-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Dica: Ao clicar em qualquer elemento na tabela, você também vê a família dele!</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-5 py-2 rounded-xl font-black text-sm border-b-3 cursor-pointer transition-all ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-800'
            }`}
          >
            Entendido! Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
