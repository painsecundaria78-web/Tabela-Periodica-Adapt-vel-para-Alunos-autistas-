import React, { useState, useEffect } from 'react';
import { Volume2, ArrowLeft, ArrowRight, Sparkles, MapPin, Tag, Square, Wrench, Lightbulb, Atom, BookOpen, ChevronRight } from 'lucide-react';
import { ChemicalElement } from '../types';
import { getElementTheme } from '../utils/theme';
import { getGroupInfoForElement } from '../data/elementGroups';

interface ElementDetailsPanelProps {
  elemento: ChemicalElement | null;
  onOuvirAudio: (elemento: ChemicalElement) => void;
  onPararAudio: () => void;
  isSpeaking: boolean;
  isHighContrast: boolean;
  onAbrirExplicacaoGrupos?: () => void;
  onAnterior?: () => void;
  onProximo?: () => void;
  posicaoInfo?: { atual: number; total: number };
}

export const ElementDetailsPanel: React.FC<ElementDetailsPanelProps> = ({
  elemento,
  onOuvirAudio,
  onPararAudio,
  isSpeaking,
  isHighContrast,
  onAbrirExplicacaoGrupos,
  onAnterior,
  onProximo,
  posicaoInfo,
}) => {
  const [imageError, setImageError] = useState(false);

  // Reset image error when element changes
  useEffect(() => {
    setImageError(false);
  }, [elemento?.simbolo]);

  if (!elemento) {
    return (
      <section
        id="painel-detalhes-vazio"
        aria-live="polite"
        className={`rounded-[32px] sm:rounded-[40px] p-8 text-center border-4 w-full transition-all ${
          isHighContrast
            ? 'bg-black border-white text-yellow-300'
            : 'bg-white border-indigo-100 text-slate-600 shadow-2xl'
        }`}
      >
        <div className="text-6xl mb-3 animate-bounce" aria-hidden="true">
          ✨
        </div>
        <h2 id="nome-elemento" className="text-2xl sm:text-3xl font-black text-indigo-600 dark:text-yellow-300 mb-2">
          Selecione um elemento
        </h2>
        <p className="text-base sm:text-lg max-w-md mx-auto font-semibold text-slate-500 dark:text-yellow-200">
          Toque em qualquer um dos 118 cartões coloridos para ver o Número Atômico, Símbolo, Massa, Família, Como Aplicar, Onde Encontrar e ouvir a narração!
        </p>
      </section>
    );
  }

  const theme = getElementTheme(elemento.simbolo, elemento.categoria);
  const infoGrupo = getGroupInfoForElement(elemento.grupo, elemento.familiaQuimica);

  return (
    <section
      id="painel"
      aria-live="polite"
      className={`rounded-[32px] sm:rounded-[40px] p-5 sm:p-7 border-4 w-full transition-all shadow-2xl ${
        isHighContrast
          ? 'bg-black border-white text-yellow-300'
          : 'bg-white border-indigo-100 text-slate-900'
      }`}
    >
      {/* Barra de Navegação Rápida Anterior / Próximo (Ideal para Computador) */}
      {onAnterior && onProximo && posicaoInfo && (
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b-2 border-slate-100 dark:border-white/20">
          <button
            type="button"
            onClick={onAnterior}
            aria-label="Elemento anterior"
            className={`px-3 py-1.5 rounded-xl font-black text-xs sm:text-sm border-2 cursor-pointer transition-all flex items-center gap-1 active:scale-95 ${
              isHighContrast
                ? 'bg-neutral-900 text-yellow-300 border-white hover:bg-black'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-600 dark:text-yellow-300">
            {posicaoInfo.atual} de {posicaoInfo.total}
          </span>

          <button
            type="button"
            onClick={onProximo}
            aria-label="Próximo elemento"
            className={`px-3 py-1.5 rounded-xl font-black text-xs sm:text-sm border-2 cursor-pointer transition-all flex items-center gap-1 active:scale-95 ${
              isHighContrast
                ? 'bg-neutral-900 text-yellow-300 border-white hover:bg-black'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
            }`}
          >
            <span>Próximo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Element Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b-2 border-slate-100 dark:border-white/30 mb-5">
        <div className="flex items-center gap-3.5">
          <div
            className={`w-18 h-18 sm:w-22 sm:h-22 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl font-black border-4 shadow-lg ${
              isHighContrast
                ? 'bg-black text-cyan-300 border-cyan-400'
                : `${theme.badgeBg} ${theme.badgeBorder} ${theme.shadowColor}`
            }`}
          >
            {elemento.simbolo}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span
                className={`text-xs uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1 ${
                  isHighContrast
                    ? 'bg-neutral-800 text-cyan-300 border border-white'
                    : `${theme.badgeBg} border ${theme.badgeBorder}`
                }`}
              >
                <Tag className="w-3 h-3" /> {elemento.categoria}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-neutral-800 text-slate-700 dark:text-yellow-300">
                {elemento.estadoFisico}
              </span>
              {elemento.grupo && (
                <span className="text-xs font-black px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-cyan-800">
                  Grupo {elemento.grupo}
                </span>
              )}
            </div>
            <h2
              id="nome-elemento"
              className={`text-2xl sm:text-3xl font-black tracking-tight m-0 leading-tight ${
                isHighContrast ? 'text-yellow-300' : 'text-indigo-600'
              }`}
            >
              {elemento.nome}
            </h2>
          </div>
        </div>

        {/* Action Audio Control Button */}
        <button
          id="btn-audio"
          type="button"
          onClick={() => onOuvirAudio(elemento)}
          aria-label={`Ouvir explicação completa e fácil de ${elemento.nome}`}
          className={`px-5 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 active:border-b-0 active:translate-y-1 transition-all cursor-pointer inline-flex items-center gap-2 shadow-lg ${
            isHighContrast
              ? 'bg-green-400 text-black border-white hover:bg-green-300'
              : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
          }`}
        >
          <Volume2 className="w-6 h-6" />
          <span>OUVIR VOZ</span>
        </button>
      </div>

      {/* 3 Core Atomic Identity Cards: Número Atômico, Símbolo, Número de Massa */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {/* Número Atômico (Z) */}
        <div
          className={`p-3 rounded-2xl border-2 text-center shadow-xs transition-all ${
            isHighContrast
              ? 'bg-neutral-900 border-cyan-400 text-yellow-300'
              : 'bg-indigo-50/70 border-indigo-200 text-slate-800'
          }`}
        >
          <div className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-slate-500 dark:text-cyan-300">
            Nº Atômico (Z)
          </div>
          <div id="num-atomico" className="text-2xl sm:text-3xl font-black font-mono text-indigo-700 dark:text-yellow-300">
            {elemento.numAtomico}
          </div>
          <div className="text-[10px] font-bold text-slate-400 dark:text-yellow-100">
            {elemento.numAtomico} prótons
          </div>
        </div>

        {/* Símbolo */}
        <div
          className={`p-3 rounded-2xl border-2 text-center shadow-xs transition-all ${
            isHighContrast
              ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
              : 'bg-pink-50/70 border-pink-200 text-slate-800'
          }`}
        >
          <div className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-slate-500 dark:text-yellow-300">
            Símbolo
          </div>
          <div id="simbolo" className="text-2xl sm:text-3xl font-black font-mono text-pink-600 dark:text-cyan-300">
            {elemento.simbolo}
          </div>
          <div className="text-[10px] font-bold text-slate-400 dark:text-yellow-100">
            Letra oficial
          </div>
        </div>

        {/* Número de Massa (A) */}
        <div
          className={`p-3 rounded-2xl border-2 text-center shadow-xs transition-all ${
            isHighContrast
              ? 'bg-neutral-900 border-emerald-400 text-yellow-300'
              : 'bg-emerald-50/70 border-emerald-200 text-slate-800'
          }`}
        >
          <div className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-slate-500 dark:text-emerald-300">
            Nº de Massa (A)
          </div>
          <div id="num-massa" className="text-2xl sm:text-3xl font-black font-mono text-emerald-700 dark:text-yellow-300">
            {elemento.numeroMassa}
          </div>
          <div className="text-[10px] font-bold text-slate-400 dark:text-yellow-100">
            Peso aproximado
          </div>
        </div>
      </div>

      {/* Explicação da Família/Grupo do Elemento (Super Fácil) */}
      {infoGrupo && (
        <div
          className={`p-3.5 sm:p-4 rounded-2xl border-2 mb-4 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
            isHighContrast
              ? 'bg-neutral-900 border-yellow-400 text-yellow-300'
              : 'bg-indigo-50/90 border-indigo-200 text-indigo-950'
          }`}
        >
          <div className="flex items-start sm:items-center gap-3">
            <span className="text-3xl p-1.5 rounded-xl bg-white dark:bg-black border border-indigo-200 dark:border-white/40 shadow-xs" aria-hidden="true">
              {infoGrupo.icone}
            </span>
            <div>
              <div className="text-xs uppercase font-black tracking-wider text-indigo-600 dark:text-cyan-300">
                Família do Elemento ({infoGrupo.numeroGrupo})
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-yellow-300 leading-tight">
                {infoGrupo.nome} — <span className="text-indigo-600 dark:text-yellow-200 font-bold">{infoGrupo.apelidoFacil}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-yellow-100 m-0 mt-0.5">
                {infoGrupo.explicacaoSimples}
              </p>
            </div>
          </div>

          {onAbrirExplicacaoGrupos && (
            <button
              type="button"
              onClick={onAbrirExplicacaoGrupos}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black border-2 cursor-pointer flex items-center justify-center gap-1.5 shrink-0 transition-all ${
                isHighContrast
                  ? 'bg-black text-yellow-300 border-yellow-400 hover:bg-neutral-800'
                  : 'bg-white text-indigo-700 border-indigo-300 hover:bg-indigo-100 shadow-xs'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Todos os Grupos</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      <div id="conteudo-elemento" className="flex flex-col gap-4">
        {/* 1. Como Aplicar esse Elemento (Linguagem Super Fácil) */}
        <div
          className={`p-4 sm:p-5 rounded-3xl border-2 transition-colors ${
            isHighContrast
              ? 'bg-neutral-950 border-cyan-400 text-cyan-300'
              : 'bg-sky-50/70 border-sky-200'
          }`}
        >
          <h3 className="text-sky-700 dark:text-cyan-300 font-black text-lg sm:text-xl flex items-center gap-2 mb-1.5">
            <Wrench className="w-5 h-5 text-sky-600 dark:text-cyan-300" />
            <span>Como aplicar este elemento? (Explicação fácil)</span>
          </h3>
          <p id="como-aplicar" className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
            {elemento.comoAplicar}
          </p>
        </div>

        {/* 2. Onde Está Presente no Dia a Dia */}
        <div
          className={`p-4 sm:p-5 rounded-3xl border-2 transition-colors ${
            isHighContrast
              ? 'bg-neutral-950 border-white text-yellow-300'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <h3 className="text-indigo-600 dark:text-yellow-300 font-black text-lg sm:text-xl flex items-center gap-2 mb-1.5">
            <span className="text-xl" aria-hidden="true">🏠</span>
            <span>Onde está no dia a dia?</span>
          </h3>
          <p id="uso-cotidiano" className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
            {elemento.uso}
          </p>

          {/* Concrete list pills */}
          {elemento.ondeEsta && elemento.ondeEsta.length > 0 && (
            <div className="mt-3 pt-3 border-t border-slate-200/80 dark:border-neutral-800">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-cyan-300 block mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Exemplos concretos para ver e tocar:
              </span>
              <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                {elemento.ondeEsta.map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-xs sm:text-sm px-3 py-1 rounded-xl font-bold border-2 transition-all ${
                      isHighContrast
                        ? 'bg-black text-cyan-300 border-cyan-400'
                        : 'bg-white text-slate-800 border-slate-200 shadow-xs'
                    }`}
                  >
                    📍 {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 3. Visual Pictogram illustration Area */}
        <div className="text-center py-1">
          <div
            className={`inline-block p-3.5 rounded-3xl border-2 transition-all ${
              isHighContrast
                ? 'bg-black border-white'
                : 'bg-indigo-50/40 border-indigo-100 shadow-inner'
            }`}
          >
            {!imageError ? (
              <img
                id="imagem-pictograma"
                src={elemento.imagemUrl}
                alt={elemento.altImagem}
                onError={() => setImageError(true)}
                className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-2xl border-2 border-white shadow-md mx-auto"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-44 h-44 sm:w-52 sm:h-52 flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-indigo-100 text-slate-700 shadow-md">
                <span className="text-6xl mb-2">{elemento.icone}</span>
                <span className="text-base font-black text-indigo-600">{elemento.nome}</span>
              </div>
            )}
            <p className="text-xs sm:text-sm font-bold text-slate-600 dark:text-yellow-200 mt-2 max-w-xs mx-auto">
              {elemento.altImagem}
            </p>
          </div>
        </div>

        {/* 4. Curiosidade Fácil */}
        <div
          className={`p-4 sm:p-5 rounded-3xl border-2 transition-colors ${
            isHighContrast
              ? 'bg-neutral-950 border-yellow-400 text-yellow-300'
              : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <h3 className="text-yellow-800 dark:text-yellow-300 font-black text-lg sm:text-xl flex items-center gap-2 mb-1.5">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>Curiosidade fácil</span>
          </h3>
          <p id="curiosidade" className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-yellow-200 font-medium m-0">
            {elemento.curiosidade}
          </p>
        </div>

        {/* Speech feedback indicator and Stop button */}
        {isSpeaking && (
          <div className="flex items-center justify-between gap-3 bg-green-50 dark:bg-neutral-900 p-3 rounded-2xl border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 text-sm font-black text-green-700 dark:text-green-400">
              <span className="w-3 h-3 rounded-full bg-green-600 animate-ping"></span>
              <span>Narrando explicação simples do elemento...</span>
            </div>
            <button
              id="btn-parar-audio-detalhe"
              type="button"
              onClick={onPararAudio}
              aria-label="Parar narração de voz"
              className="px-3.5 py-1.5 rounded-xl font-black text-xs bg-rose-500 text-white border-b-2 border-rose-700 hover:bg-rose-600 cursor-pointer flex items-center gap-1.5"
            >
              <Square className="w-3.5 h-3.5 fill-current" /> Parar
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
