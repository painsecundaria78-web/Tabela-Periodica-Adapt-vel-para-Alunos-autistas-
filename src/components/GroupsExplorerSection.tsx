import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, ChevronRight, ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';
import { GRUPOS_TABELA, GroupExplanation, EXPLICACAO_GERAL_GRUPOS } from '../data/elementGroups';
import { ChemicalElement } from '../types';
import { ELEMENTOS_QUIMICOS } from '../data/elements';

interface GroupsExplorerSectionProps {
  isHighContrast: boolean;
  onOuvirTexto: (texto: string) => void;
  onSelecionarGrupoParaFiltrar: (grupoId: string, elementoInicial?: ChemicalElement) => void;
}

export const GroupsExplorerSection: React.FC<GroupsExplorerSectionProps> = ({
  isHighContrast,
  onOuvirTexto,
  onSelecionarGrupoParaFiltrar,
}) => {
  const [grupoAtivoId, setGrupoAtivoId] = useState<string>(GRUPOS_TABELA[0].id);

  const grupoAtivo = GRUPOS_TABELA.find((g) => g.id === grupoAtivoId) || GRUPOS_TABELA[0];

  // Ouvir explicação geral
  const handleOuvirGeral = () => {
    const texto = `${EXPLICACAO_GERAL_GRUPOS.titulo}. ${EXPLICACAO_GERAL_GRUPOS.resumoSimples}. ${EXPLICACAO_GERAL_GRUPOS.regraDeOuro}. ${EXPLICACAO_GERAL_GRUPOS.dicaParaMemorizar}`;
    onOuvirTexto(texto);
  };

  // Ouvir grupo específico
  const handleOuvirGrupo = (grupo: GroupExplanation) => {
    const texto = `${grupo.numeroGrupo}: ${grupo.nome}, conhecida como ${grupo.apelidoFacil}. O que é: ${grupo.explicacaoSimples}. Como aplicar: ${grupo.comoAplicarGrupo}. Onde encontrar no dia a dia: ${grupo.ondeEncontrar.join(', ')}. Curiosidade: ${grupo.curiosidadeGrupo}.`;
    onOuvirTexto(texto);
  };

  // Obter elementos pertencentes ao grupo ativo
  const getElementosDoGrupo = (grupo: GroupExplanation): ChemicalElement[] => {
    if (grupo.id === 'lantanideos') {
      return ELEMENTOS_QUIMICOS.filter((e) => e.numAtomico >= 57 && e.numAtomico <= 71);
    }
    if (grupo.id === 'actinideos') {
      return ELEMENTOS_QUIMICOS.filter((e) => e.numAtomico >= 89 && e.numAtomico <= 103);
    }
    if (grupo.id === 'grupo-1') {
      return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 1);
    }
    if (grupo.id === 'grupo-2') {
      return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 2);
    }
    if (grupo.id === 'metais-transicao') {
      return ELEMENTOS_QUIMICOS.filter(
        (e) => (e.grupo && e.grupo >= 3 && e.grupo <= 12) || (e.familiaQuimica?.includes('Transição'))
      );
    }
    if (grupo.id === 'grupo-13') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 13);
    if (grupo.id === 'grupo-14') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 14);
    if (grupo.id === 'grupo-15') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 15);
    if (grupo.id === 'grupo-16') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 16);
    if (grupo.id === 'grupo-17') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 17);
    if (grupo.id === 'grupo-18') return ELEMENTOS_QUIMICOS.filter((e) => e.grupo === 18);
    return [];
  };

  const elementosDesteGrupo = getElementosDoGrupo(grupoAtivo);

  return (
    <div id="secao-grupos-computador" className="space-y-6 animate-fadeIn">
      {/* Banner Principal de Explicação Super Fácil */}
      <section
        id="card-explicacao-geral"
        aria-label="Explicação sobre o que são grupos e famílias"
        className={`p-6 sm:p-8 rounded-[32px] border-4 transition-all shadow-xl ${
          isHighContrast
            ? 'bg-black border-yellow-400 text-yellow-300'
            : 'bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white border-indigo-700'
        }`}
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-3 bg-white/20 text-white backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Regra de Ouro dos Elementos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black mb-3 tracking-tight flex items-center gap-3">
            <span>🏛️</span>
            <span>O que são as Famílias e Grupos?</span>
          </h2>

          <p className="text-lg sm:text-2xl font-bold leading-relaxed text-indigo-100 dark:text-yellow-200 mb-4">
            A tabela tem <strong>18 colunas em pé</strong>. Cada coluna é uma <strong>Família de elementos químicos</strong>!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-900 border-white text-yellow-300'
                  : 'bg-white/10 border-white/20 text-white'
              }`}
            >
              <div className="text-xl mb-1">👨‍👩‍👧‍👦 <strong>Irmãos com os mesmos poderes</strong></div>
              <p className="text-sm sm:text-base opacity-90 m-0">
                Elementos da mesma família fazem coisas parecidas (como guardar energia, limpar ou endurecer).
              </p>
            </div>

            <div
              className={`p-4 rounded-2xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-900 border-white text-yellow-300'
                  : 'bg-white/10 border-white/20 text-white'
              }`}
            >
              <div className="text-xl mb-1">⬇️ <strong>Olhe de cima para baixo</strong></div>
              <p className="text-sm sm:text-base opacity-90 m-0">
                Basta seguir a coluna vertical da tabela para encontrar elementos que trabalham do mesmo jeito.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              id="btn-ouvir-explicacao-grupos"
              type="button"
              onClick={handleOuvirGeral}
              aria-label="Ouvir explicação geral sobre as famílias e colunas da tabela periódica"
              className={`px-6 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 active:border-b-0 active:translate-y-1 cursor-pointer transition-all inline-flex items-center gap-2 shadow-lg ${
                isHighContrast
                  ? 'bg-green-400 text-black border-white hover:bg-green-300'
                  : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
              }`}
            >
              <Volume2 className="w-6 h-6" />
              <span>OUVIR EXPLICAÇÃO EM VOZ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Navegação de Famílias no Computador: Seletor à Esquerda e Detalhes da Família à Direita */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Coluna Esquerda: Lista de Botões de Cada Família (Col-Span 5) */}
        <div className="lg:col-span-5 space-y-2.5" aria-label="Seletor de Famílias da Tabela">
          <div className="flex items-center justify-between pb-2 px-1">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-yellow-300">
              Escolha uma Família para Entender:
            </span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-neutral-800 text-slate-700 dark:text-yellow-300">
              {GRUPOS_TABELA.length} Famílias
            </span>
          </div>

          <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1">
            {GRUPOS_TABELA.map((grupo) => {
              const isAtivo = grupo.id === grupoAtivoId;
              return (
                <button
                  key={grupo.id}
                  id={`btn-familia-${grupo.id}`}
                  type="button"
                  onClick={() => {
                    setGrupoAtivoId(grupo.id);
                    handleOuvirGrupo(grupo);
                  }}
                  aria-pressed={isAtivo}
                  aria-label={`${grupo.numeroGrupo}: ${grupo.nome} - ${grupo.apelidoFacil}`}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl font-bold border-b-4 cursor-pointer transition-all flex items-center justify-between gap-3 active:border-b-0 active:translate-y-1 ${
                    isHighContrast
                      ? isAtivo
                        ? 'bg-yellow-400 text-black border-white shadow-lg'
                        : 'bg-neutral-950 text-yellow-300 border-white hover:bg-neutral-900'
                      : isAtivo
                      ? 'bg-indigo-600 text-white border-indigo-900 ring-4 ring-indigo-300 shadow-lg scale-[1.01]'
                      : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl sm:text-3xl shrink-0 p-1.5 rounded-xl bg-slate-100 dark:bg-black border border-slate-200 dark:border-white/30" aria-hidden="true">
                      {grupo.icone}
                    </span>
                    <div className="min-w-0">
                      <div className={`text-xs font-black uppercase tracking-wider ${
                        isAtivo
                          ? isHighContrast ? 'text-black' : 'text-indigo-200'
                          : isHighContrast ? 'text-cyan-300' : 'text-indigo-600'
                      }`}>
                        {grupo.numeroGrupo}
                      </div>
                      <div className="text-base sm:text-lg font-black truncate leading-tight">
                        {grupo.apelidoFacil}
                      </div>
                      <div className={`text-xs truncate ${
                        isAtivo ? 'opacity-90' : 'text-slate-500 dark:text-neutral-400'
                      }`}>
                        {grupo.nome}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 ${isAtivo ? 'translate-x-1' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Coluna Direita: Cartão Detalhado e Elementos da Família Ativa (Col-Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <section
            id="detalhes-familia-ativa"
            aria-live="polite"
            className={`p-6 sm:p-8 rounded-[32px] border-4 transition-all shadow-2xl ${
              isHighContrast
                ? 'bg-black border-white text-yellow-300'
                : 'bg-white border-indigo-100 text-slate-900'
            }`}
          >
            {/* Header da Família Ativa */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-slate-100 dark:border-white/30 mb-5">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl border-4 shadow-md ${
                    isHighContrast
                      ? 'bg-neutral-900 border-yellow-400'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  }`}
                >
                  {grupoAtivo.icone}
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-neutral-800 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-white/30">
                    {grupoAtivo.numeroGrupo}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-indigo-700 dark:text-yellow-300 m-0 mt-1 leading-tight">
                    {grupoAtivo.apelidoFacil}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-slate-500 dark:text-yellow-200">
                    Nome Oficial: {grupoAtivo.nome}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleOuvirGrupo(grupoAtivo)}
                aria-label={`Ouvir explicação da ${grupoAtivo.apelidoFacil}`}
                className={`px-4 py-2.5 rounded-2xl font-black text-sm sm:text-base border-b-4 active:border-b-0 active:translate-y-1 cursor-pointer transition-all inline-flex items-center gap-2 shadow-md ${
                  isHighContrast
                    ? 'bg-green-400 text-black border-white'
                    : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                }`}
              >
                <Volume2 className="w-5 h-5" />
                <span>Ouvir Família</span>
              </button>
            </div>

            {/* 3 Blocos de Explicação Simples */}
            <div className="space-y-4 mb-6">
              {/* O que é */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border-2 ${
                  isHighContrast
                    ? 'bg-neutral-950 border-cyan-400 text-cyan-300'
                    : 'bg-sky-50/80 border-sky-200 text-slate-900'
                }`}
              >
                <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-sky-700 dark:text-cyan-300 flex items-center gap-2 mb-1">
                  <span>⚡ O que esta família faz de especial?</span>
                </div>
                <p className="text-base sm:text-lg font-medium leading-relaxed m-0 text-slate-800 dark:text-yellow-200">
                  {grupoAtivo.explicacaoSimples}
                </p>
              </div>

              {/* Como a gente usa */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border-2 ${
                  isHighContrast
                    ? 'bg-neutral-950 border-white text-yellow-300'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-indigo-700 dark:text-yellow-300 flex items-center gap-2 mb-1">
                  <span>🔧 Como a gente aplica na vida real?</span>
                </div>
                <p className="text-base sm:text-lg font-medium leading-relaxed m-0 text-slate-800 dark:text-yellow-200">
                  {grupoAtivo.comoAplicarGrupo}
                </p>
              </div>

              {/* Onde você encontra no dia a dia */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border-2 ${
                  isHighContrast
                    ? 'bg-neutral-950 border-yellow-400 text-yellow-300'
                    : 'bg-amber-50/80 border-amber-200 text-slate-900'
                }`}
              >
                <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-amber-800 dark:text-yellow-300 flex items-center gap-2 mb-2">
                  <span>🏠 Onde você vê no seu dia a dia?</span>
                </div>
                <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                  {grupoAtivo.ondeEncontrar.map((onde, idx) => (
                    <li
                      key={idx}
                      className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-xl font-black border-2 ${
                        isHighContrast
                          ? 'bg-black text-cyan-300 border-cyan-400'
                          : 'bg-white text-slate-800 border-amber-300 shadow-xs'
                      }`}
                    >
                      📍 {onde}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curiosidade */}
              <div
                className={`p-4 rounded-2xl border-2 flex items-start gap-3 ${
                  isHighContrast
                    ? 'bg-neutral-950 border-white text-yellow-300'
                    : 'bg-yellow-50 border-yellow-200 text-slate-800'
                }`}
              >
                <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-semibold m-0 leading-relaxed text-slate-800 dark:text-yellow-100">
                  <strong>Curiosidade:</strong> {grupoAtivo.curiosidadeGrupo}
                </p>
              </div>
            </div>

            {/* Elementos Desta Família com Botão de Ação Direta */}
            <div className="pt-4 border-t-2 border-slate-100 dark:border-white/30">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 dark:text-cyan-300">
                  🧪 Elementos desta família ({elementosDesteGrupo.length}):
                </span>
                <button
                  type="button"
                  onClick={() => onSelecionarGrupoParaFiltrar(grupoAtivo.id, elementosDesteGrupo[0])}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black border-b-4 active:border-b-0 active:translate-y-1 cursor-pointer transition-all inline-flex items-center gap-2 shadow-sm ${
                    isHighContrast
                      ? 'bg-yellow-400 text-black border-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900'
                  }`}
                >
                  <span>Explorar todos na Grade</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pills dos Elementos da Família com clique fácil */}
              <div className="flex flex-wrap gap-2">
                {elementosDesteGrupo.map((el) => (
                  <button
                    key={el.simbolo}
                    type="button"
                    onClick={() => onSelecionarGrupoParaFiltrar(grupoAtivo.id, el)}
                    aria-label={`Ver detalhes do elemento ${el.nome}, símbolo ${el.simbolo}`}
                    className={`px-3 py-1.5 rounded-xl font-black text-xs sm:text-sm border-2 cursor-pointer transition-all flex items-center gap-1.5 shadow-xs active:scale-95 ${
                      isHighContrast
                        ? 'bg-black text-yellow-300 border-white hover:bg-neutral-800'
                        : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border-indigo-200'
                    }`}
                  >
                    <span>{el.icone}</span>
                    <span className="font-mono text-indigo-600 dark:text-cyan-300 font-black">{el.simbolo}</span>
                    <span>{el.nome}</span>
                    <span className="text-[10px] opacity-70">({el.numAtomico})</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
