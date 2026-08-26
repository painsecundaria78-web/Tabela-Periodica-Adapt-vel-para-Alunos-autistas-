import React, { useState, useEffect } from 'react';
import { Volume2, ArrowLeft, ArrowRight, Sparkles, MapPin, Wrench, Lightbulb, Tag, Square, BookOpen } from 'lucide-react';
import { ChemicalElement } from '../types';
import { getElementTheme } from '../utils/theme';
import { getGroupInfoForElement } from '../data/elementGroups';

interface SingleElementFocusViewProps {
  elemento: ChemicalElement;
  totalElementos: number;
  indiceAtual: number;
  onAnterior: () => void;
  onProximo: () => void;
  onOuvirAudio: (elemento: ChemicalElement) => void;
  onPararAudio: () => void;
  isSpeaking: boolean;
  isHighContrast: boolean;
  onAbrirExplicacaoGrupos?: () => void;
}

export const SingleElementFocusView: React.FC<SingleElementFocusViewProps> = ({
  elemento,
  totalElementos,
  indiceAtual,
  onAnterior,
  onProximo,
  onOuvirAudio,
  onPararAudio,
  isSpeaking,
  isHighContrast,
  onAbrirExplicacaoGrupos,
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [elemento.simbolo]);

  const theme = getElementTheme(elemento.simbolo, elemento.categoria);
  const infoGrupo = getGroupInfoForElement(elemento.grupo, elemento.familiaQuimica);

  return (
    <div id="modo-foco-computador" className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
      {/* Barra Superior de Controle de Foco: Anterior / Progresso / Próximo */}
      <div
        id="barra-navegacao-foco"
        className={`p-4 sm:p-5 rounded-3xl border-4 flex flex-wrap items-center justify-between gap-4 shadow-lg ${
          isHighContrast
            ? 'bg-black border-white text-yellow-300'
            : 'bg-white border-indigo-100 text-slate-900 shadow-md'
        }`}
      >
        <button
          id="btn-elemento-anterior"
          type="button"
          onClick={onAnterior}
          aria-label="Ir para o elemento anterior (Atalho: Seta Esquerda do teclado)"
          className={`px-5 sm:px-7 py-3.5 rounded-2xl font-black text-base sm:text-lg border-b-6 active:border-b-0 active:translate-y-1 cursor-pointer transition-all flex items-center gap-2 shadow-md ${
            isHighContrast
              ? 'bg-yellow-400 text-black border-white hover:bg-yellow-300'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900'
          }`}
        >
          <ArrowLeft className="w-6 h-6" />
          <span>⬅️ ANTERIOR</span>
        </button>

        {/* Indicador de Progresso com Passo a Passo Limpo */}
        <div className="text-center">
          <div className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-yellow-300 mb-1">
            Passo a Passo dos Elementos
          </div>
          <div className="text-xl sm:text-2xl font-black text-indigo-700 dark:text-cyan-300">
            Elemento {indiceAtual + 1} de {totalElementos}
          </div>
          <div className="w-48 sm:w-64 h-3 bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden mx-auto mt-2 border border-slate-300 dark:border-white/20">
            <div
              className={`h-full transition-all duration-300 ${
                isHighContrast ? 'bg-yellow-400' : 'bg-indigo-600'
              }`}
              style={{ width: `${((indiceAtual + 1) / totalElementos) * 100}%` }}
            />
          </div>
        </div>

        <button
          id="btn-elemento-proximo"
          type="button"
          onClick={onProximo}
          aria-label="Ir para o próximo elemento (Atalho: Seta Direita do teclado)"
          className={`px-5 sm:px-7 py-3.5 rounded-2xl font-black text-base sm:text-lg border-b-6 active:border-b-0 active:translate-y-1 cursor-pointer transition-all flex items-center gap-2 shadow-md ${
            isHighContrast
              ? 'bg-yellow-400 text-black border-white hover:bg-yellow-300'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900'
          }`}
        >
          <span>PRÓXIMO ➡️</span>
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Cartão de Foco Gigante e Imersivo */}
      <section
        id="painel-foco-principal"
        aria-live="polite"
        className={`p-6 sm:p-10 rounded-[40px] border-4 transition-all shadow-2xl ${
          isHighContrast
            ? 'bg-black border-white text-yellow-300'
            : 'bg-white border-indigo-100 text-slate-900'
        }`}
      >
        {/* Topo do Elemento */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b-2 border-slate-100 dark:border-white/30 mb-8">
          <div className="flex items-center gap-5">
            <div
              className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center text-4xl sm:text-6xl font-black border-4 shadow-xl ${
                isHighContrast
                  ? 'bg-black text-cyan-300 border-cyan-400'
                  : `${theme.badgeBg} ${theme.badgeBorder} ${theme.shadowColor}`
              }`}
            >
              {elemento.simbolo}
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span
                  className={`text-sm uppercase tracking-wider font-black px-3 py-1 rounded-full inline-flex items-center gap-1.5 ${
                    isHighContrast
                      ? 'bg-neutral-800 text-cyan-300 border border-white'
                      : `${theme.badgeBg} border ${theme.badgeBorder}`
                  }`}
                >
                  <Tag className="w-4 h-4" /> {elemento.categoria}
                </span>
                <span className="text-sm font-black px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-yellow-300">
                  {elemento.estadoFisico}
                </span>
                {elemento.grupo && (
                  <span className="text-sm font-black px-3 py-1 rounded-full bg-indigo-100 dark:bg-neutral-800 text-indigo-700 dark:text-cyan-300 border border-indigo-200">
                    Grupo {elemento.grupo}
                  </span>
                )}
              </div>

              <h2
                id="foco-nome-elemento"
                className={`text-3xl sm:text-5xl font-black tracking-tight leading-tight m-0 ${
                  isHighContrast ? 'text-yellow-300' : 'text-indigo-600'
                }`}
              >
                {elemento.nome}
              </h2>
            </div>
          </div>

          {/* Botão de Áudio Gigante */}
          <button
            id="btn-ouvir-foco"
            type="button"
            onClick={() => onOuvirAudio(elemento)}
            aria-label={`Ouvir explicação completa de ${elemento.nome} (Atalho: Barra de Espaço)`}
            className={`px-8 py-4 rounded-3xl font-black text-xl sm:text-2xl border-b-6 active:border-b-0 active:translate-y-1 cursor-pointer transition-all inline-flex items-center gap-3 shadow-xl ${
              isHighContrast
                ? 'bg-green-400 text-black border-white hover:bg-green-300'
                : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
            }`}
          >
            <Volume2 className="w-8 h-8" />
            <span>🔊 OUVIR EXPLICAÇÃO</span>
          </button>
        </div>

        {/* 3 Cartões de Identidade Atômica Gigantes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* Número Atômico */}
          <div
            className={`p-5 rounded-3xl border-2 text-center shadow-sm ${
              isHighContrast
                ? 'bg-neutral-900 border-cyan-400 text-yellow-300'
                : 'bg-indigo-50 border-indigo-200 text-slate-800'
            }`}
          >
            <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-slate-500 dark:text-cyan-300">
              Número Atômico (Z)
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-indigo-700 dark:text-yellow-300 my-1">
              {elemento.numAtomico}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-100">
              {elemento.numAtomico} prótons no átomo
            </div>
          </div>

          {/* Símbolo */}
          <div
            className={`p-5 rounded-3xl border-2 text-center shadow-sm ${
              isHighContrast
                ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
                : 'bg-pink-50 border-pink-200 text-slate-800'
            }`}
          >
            <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-slate-500 dark:text-yellow-300">
              Símbolo Oficial
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-pink-600 dark:text-cyan-300 my-1">
              {elemento.simbolo}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-100">
              Letra da química mundial
            </div>
          </div>

          {/* Número de Massa */}
          <div
            className={`p-5 rounded-3xl border-2 text-center shadow-sm ${
              isHighContrast
                ? 'bg-neutral-900 border-emerald-400 text-yellow-300'
                : 'bg-emerald-50 border-emerald-200 text-slate-800'
            }`}
          >
            <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-slate-500 dark:text-emerald-300">
              Número de Massa (A)
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-emerald-700 dark:text-yellow-300 my-1">
              {elemento.numeroMassa}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-100">
              Peso atômico aproximado
            </div>
          </div>
        </div>

        {/* Explicação da Família do Elemento */}
        {infoGrupo && (
          <div
            className={`p-5 sm:p-6 rounded-3xl border-2 mb-8 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              isHighContrast
                ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
                : 'bg-indigo-50/90 border-indigo-200 text-indigo-950 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl p-2 rounded-2xl bg-white dark:bg-black border border-indigo-200 dark:border-white/40 shadow-sm" aria-hidden="true">
                {infoGrupo.icone}
              </span>
              <div>
                <div className="text-xs sm:text-sm uppercase font-black tracking-wider text-indigo-600 dark:text-cyan-300">
                  Família do Elemento ({infoGrupo.numeroGrupo})
                </div>
                <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-yellow-300">
                  {infoGrupo.nome} — <span className="text-indigo-600 dark:text-yellow-200 font-bold">{infoGrupo.apelidoFacil}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-600 dark:text-yellow-100 m-0 mt-1">
                  {infoGrupo.explicacaoSimples}
                </p>
              </div>
            </div>

            {onAbrirExplicacaoGrupos && (
              <button
                type="button"
                onClick={onAbrirExplicacaoGrupos}
                className={`px-5 py-3 rounded-2xl text-sm font-black border-2 cursor-pointer shrink-0 transition-all flex items-center justify-center gap-2 ${
                  isHighContrast
                    ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-neutral-800'
                    : 'bg-white text-indigo-700 border-indigo-300 hover:bg-indigo-100 shadow-sm'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Entender Todos os Grupos</span>
              </button>
            )}
          </div>
        )}

        {/* Detalhes de Aplicação, Onde Encontrar e Foto em Grid Widescreen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-8">
          {/* Coluna 1: Como Aplicar & Curiosidade */}
          <div className="space-y-6">
            {/* Como Aplicar */}
            <div
              className={`p-6 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-950 border-cyan-400 text-cyan-300'
                  : 'bg-sky-50/80 border-sky-200'
              }`}
            >
              <h3 className="text-sky-700 dark:text-cyan-300 font-black text-xl flex items-center gap-2 mb-2">
                <Wrench className="w-6 h-6" />
                <span>Como aplicar este elemento? (Explicação fácil)</span>
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
                {elemento.comoAplicar}
              </p>
            </div>

            {/* Curiosidade Divertida */}
            <div
              className={`p-6 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-950 border-yellow-400 text-yellow-300'
                  : 'bg-yellow-50 border-yellow-200'
              }`}
            >
              <h3 className="text-yellow-800 dark:text-yellow-300 font-black text-xl flex items-center gap-2 mb-2">
                <Lightbulb className="w-6 h-6 text-amber-500" />
                <span>Curiosidade fácil e legal</span>
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
                {elemento.curiosidade}
              </p>
            </div>
          </div>

          {/* Coluna 2: Onde Está no Dia a Dia & Foto Real */}
          <div className="space-y-6">
            {/* Onde Está no Dia a Dia */}
            <div
              className={`p-6 rounded-3xl border-2 ${
                isHighContrast
                  ? 'bg-neutral-950 border-white text-yellow-300'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h3 className="text-indigo-600 dark:text-yellow-300 font-black text-xl flex items-center gap-2 mb-2">
                <span className="text-2xl" aria-hidden="true">🏠</span>
                <span>Onde está no seu dia a dia?</span>
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
                {elemento.uso}
              </p>

              {elemento.ondeEsta && elemento.ondeEsta.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-neutral-800">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-400 dark:text-cyan-300 block mb-2.5 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Exemplos para ver e tocar:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {elemento.ondeEsta.map((item, idx) => (
                      <span
                        key={idx}
                        className={`text-sm sm:text-base px-3.5 py-1.5 rounded-xl font-black border-2 ${
                          isHighContrast
                            ? 'bg-black text-cyan-300 border-cyan-400'
                            : 'bg-white text-slate-800 border-slate-300 shadow-xs'
                        }`}
                      >
                        📍 {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Imagem / Pictograma */}
            <div className="text-center">
              <div
                className={`inline-block p-4 rounded-3xl border-2 shadow-inner ${
                  isHighContrast
                    ? 'bg-black border-white'
                    : 'bg-indigo-50/50 border-indigo-100'
                }`}
              >
                {!imageError ? (
                  <img
                    src={elemento.imagemUrl}
                    alt={elemento.altImagem}
                    onError={() => setImageError(true)}
                    className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl border-2 border-white shadow-md mx-auto"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-56 h-56 sm:w-64 sm:h-64 flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-indigo-100 text-slate-700 shadow-md">
                    <span className="text-7xl mb-2">{elemento.icone}</span>
                    <span className="text-xl font-black text-indigo-600">{elemento.nome}</span>
                  </div>
                )}
                <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-yellow-200 mt-2 max-w-xs mx-auto">
                  {elemento.altImagem}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Indicador de Fala Ativa */}
        {isSpeaking && (
          <div className="flex items-center justify-between gap-3 bg-green-50 dark:bg-neutral-900 p-4 rounded-2xl border-2 border-green-300 dark:border-green-800 animate-pulse">
            <div className="flex items-center gap-3 text-base font-black text-green-700 dark:text-green-400">
              <span className="w-4 h-4 rounded-full bg-green-600 animate-ping"></span>
              <span>Narrando explicação do elemento em voz alta...</span>
            </div>
            <button
              type="button"
              onClick={onPararAudio}
              aria-label="Parar áudio (Atalho: Tecla ESC)"
              className="px-4 py-2 rounded-xl font-black text-sm bg-rose-500 text-white hover:bg-rose-600 cursor-pointer flex items-center gap-2 shadow-md"
            >
              <Square className="w-4 h-4 fill-current" /> Parar Voz
            </button>
          </div>
        )}

        {/* Atalhos de Teclado no Rodapé do Modo Foco */}
        <div className="mt-8 pt-4 border-t-2 border-slate-100 dark:border-white/20 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-400 dark:text-yellow-300">
          <span>⌨️ Atalhos do Teclado:</span>
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-neutral-800 border">← Seta Esquerda: Anterior</span>
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-neutral-800 border">→ Seta Direita: Próximo</span>
          <span className="px-2 py-1 rounded bg-slate-100 dark:bg-neutral-800 border">Espaço: Ouvir Áudio</span>
        </div>
      </section>
    </div>
  );
};
