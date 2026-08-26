import React from 'react';
import { Volume2, VolumeX, Type, SunMoon, BookOpen, Square, Maximize2, Minimize2 } from 'lucide-react';

interface AccessibilityBarProps {
  fontSize: number;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
  isAutoSpeech: boolean;
  onToggleAutoSpeech: () => void;
  speechRate: number;
  onChangeSpeechRate: (rate: number) => void;
  isDyslexicFont: boolean;
  onToggleDyslexicFont: () => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
  onOpenPeriodicTable?: () => void;
  onOpenMarieCurie?: () => void;
}

export const AccessibilityBar: React.FC<AccessibilityBarProps> = ({
  fontSize,
  onIncreaseFont,
  onDecreaseFont,
  isHighContrast,
  onToggleHighContrast,
  isAutoSpeech,
  onToggleAutoSpeech,
  speechRate,
  onChangeSpeechRate,
  isDyslexicFont,
  onToggleDyslexicFont,
  isSpeaking,
  onStopSpeaking,
  onOpenPeriodicTable,
  onOpenMarieCurie,
}) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <aside
      id="barra-acessibilidade"
      aria-label="Controles de Acessibilidade e Preferências Sensoriais"
      className={`rounded-2xl sm:rounded-3xl p-3 sm:p-4 mb-6 border-2 transition-colors shadow-sm ${
        isHighContrast
          ? 'bg-black border-white text-yellow-300'
          : 'bg-white border-slate-200 text-slate-800'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Controles de Visão e Leitura com botões táteis */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Alto Contraste Button */}
          <button
            id="btn-alto-contraste"
            type="button"
            onClick={onToggleHighContrast}
            aria-pressed={isHighContrast}
            aria-label="Alternar modo de alto contraste com fundo preto e amarelo"
            className={`px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 inline-flex items-center gap-1.5 shadow-xs ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-white'
                : 'bg-yellow-400 hover:bg-yellow-300 text-slate-900 border-yellow-600'
            }`}
          >
            <SunMoon className="w-4 h-4" />
            <span>🌓 Alto Contraste</span>
          </button>

          {/* Tamanho da Fonte / Tela */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-neutral-900 p-1 rounded-xl border border-slate-200 dark:border-white/30">
            <button
              id="btn-fonte-aumentar"
              type="button"
              onClick={onIncreaseFont}
              aria-label="Aumentar tamanho das letras"
              className={`px-2.5 py-1 rounded-lg font-black text-xs sm:text-sm border-b-3 cursor-pointer transition-all active:border-b-0 active:translate-y-0.5 inline-flex items-center gap-1 ${
                isHighContrast
                  ? 'bg-black text-yellow-300 border-white'
                  : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border-indigo-300'
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>A+ Letra Maior</span>
            </button>
            <button
              id="btn-fonte-diminuir"
              type="button"
              onClick={onDecreaseFont}
              aria-label="Diminuir tamanho das letras"
              className={`px-2.5 py-1 rounded-lg font-black text-xs sm:text-sm border-b-3 cursor-pointer transition-all active:border-b-0 active:translate-y-0.5 inline-flex items-center gap-1 ${
                isHighContrast
                  ? 'bg-black text-yellow-300 border-white'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-700 border-slate-400'
              }`}
            >
              <span>A-</span>
            </button>
            <span className="text-xs font-mono font-black px-1.5 text-slate-600 dark:text-yellow-300">
              {fontSize}px
            </span>
          </div>

          {/* Fonte Leitura Fácil */}
          <button
            id="btn-fonte-dislexia"
            type="button"
            onClick={onToggleDyslexicFont}
            aria-pressed={isDyslexicFont}
            aria-label="Alternar fonte espaçada para leitura facilitada"
            className={`px-3 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 inline-flex items-center gap-1.5 ${
              isDyslexicFont
                ? isHighContrast
                  ? 'bg-cyan-400 text-black border-white'
                  : 'bg-purple-600 text-white border-purple-800'
                : isHighContrast
                ? 'bg-black text-yellow-300 border-white'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-300'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{isDyslexicFont ? '🔤 Leitura Fácil: ON' : '🔤 Leitura Fácil'}</span>
          </button>

          {/* Botão Consulte a Tabela Periódica em Destaque Especial */}
          {onOpenPeriodicTable && (
            <button
              id="btn-consulte-tabela-periodica"
              type="button"
              onClick={onOpenPeriodicTable}
              aria-label="Abrir e consultar a Tabela Periódica Completa oficial"
              className={`px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 inline-flex items-center gap-1.5 shadow-md ${
                isHighContrast
                  ? 'bg-cyan-400 text-black border-white hover:bg-cyan-300 ring-2 ring-yellow-400 animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-900 shadow-indigo-200 ring-2 ring-indigo-300 hover:scale-105'
              }`}
            >
              <span className="text-base leading-none">🏛️</span>
              <span>Consulte a tabela periódica</span>
            </button>
          )}

          {/* Botão Quem foi Marie Curie? */}
          {onOpenMarieCurie && (
            <button
              id="btn-marie-curie-historia"
              type="button"
              onClick={onOpenMarieCurie}
              aria-label="Conhecer a história, importância e elementos descobertos por Marie Curie"
              className={`px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 inline-flex items-center gap-1.5 shadow-md ${
                isHighContrast
                  ? 'bg-yellow-400 text-black border-white hover:bg-yellow-300 ring-2 ring-cyan-400'
                  : 'bg-purple-600 hover:bg-purple-700 text-white border-purple-900 shadow-purple-200 ring-2 ring-purple-300 hover:scale-105'
              }`}
            >
              <span className="text-base leading-none">👩‍🔬</span>
              <span>Quem foi Marie Curie?</span>
            </button>
          )}

          {/* Botão de Tela Cheia para Computador */}
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Alternar tela cheia no computador"
            className={`hidden sm:inline-flex px-3 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 items-center gap-1.5 ${
              isHighContrast
                ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span>{isFullscreen ? 'Janela' : '🖥️ Tela Cheia'}</span>
          </button>
        </div>

        {/* Som Automático & Velocidade de Leitura */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Som Automático Toggle */}
          <button
            id="btn-som-auto"
            type="button"
            onClick={onToggleAutoSpeech}
            aria-pressed={isAutoSpeech}
            aria-label={`Alternar voz automática ao selecionar elemento. Atualmente ${
              isAutoSpeech ? 'Ligado' : 'Desligado'
            }`}
            className={`px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm border-b-4 cursor-pointer transition-all active:border-b-0 active:translate-y-1 inline-flex items-center gap-1.5 shadow-xs ${
              isAutoSpeech
                ? isHighContrast
                  ? 'bg-green-400 text-black border-white'
                  : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
                : isHighContrast
                ? 'bg-black text-yellow-300 border-white'
                : 'bg-slate-200 hover:bg-slate-300 text-slate-700 border-slate-400'
            }`}
          >
            {isAutoSpeech ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{isAutoSpeech ? '🔊 Voz Automática: ON' : '🔇 Voz: Manual'}</span>
          </button>

          {/* Seletor de Velocidade da Voz */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-neutral-900 p-1 rounded-xl border border-slate-200 dark:border-white/30">
            <span className="text-xs font-black px-1 text-slate-500 dark:text-yellow-300">
              Voz:
            </span>
            <button
              type="button"
              onClick={() => onChangeSpeechRate(0.8)}
              aria-pressed={speechRate <= 0.8}
              className={`px-2 py-0.5 rounded-lg text-xs font-black border-b-2 cursor-pointer transition-all ${
                speechRate <= 0.8
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white'
                    : 'bg-indigo-600 text-white border-indigo-800'
                  : 'bg-slate-200 dark:bg-black text-slate-700 dark:text-yellow-300 border-slate-300'
              }`}
            >
              Lenta
            </button>
            <button
              type="button"
              onClick={() => onChangeSpeechRate(0.95)}
              aria-pressed={speechRate > 0.8 && speechRate <= 1.0}
              className={`px-2 py-0.5 rounded-lg text-xs font-black border-b-2 cursor-pointer transition-all ${
                speechRate > 0.8 && speechRate <= 1.0
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white'
                    : 'bg-indigo-600 text-white border-indigo-800'
                  : 'bg-slate-200 dark:bg-black text-slate-700 dark:text-yellow-300 border-slate-300'
              }`}
            >
              Normal
            </button>
          </div>

          {/* Botão de Parar Áudio se estiver falando */}
          {isSpeaking && (
            <button
              id="btn-parar-audio-global"
              type="button"
              onClick={onStopSpeaking}
              aria-label="Parar narração de áudio agora"
              className="px-3 py-1.5 rounded-xl font-black text-xs bg-rose-500 text-white border-b-3 border-rose-700 hover:bg-rose-600 cursor-pointer flex items-center gap-1 shadow-xs animate-bounce"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              <span>Parar Voz</span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
