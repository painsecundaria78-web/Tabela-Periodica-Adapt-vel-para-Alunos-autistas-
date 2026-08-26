import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Volume2, Shuffle, Sparkles, Award } from 'lucide-react';
import { ELEMENTOS_QUIMICOS } from '../data/elements';
import { QuizQuestion } from '../types';
import { obterPerguntasSorteadas } from '../utils/quizGenerator';
import { speakText } from '../utils/speech';
import { getElementTheme } from '../utils/theme';

interface QuizSectionProps {
  isHighContrast: boolean;
  speechRate: number;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ isHighContrast, speechRate }) => {
  // Inicializa as perguntas sorteadas de forma dinâmica a cada atualização/abertura do site
  const [perguntas, setPerguntas] = useState<QuizQuestion[]>(() => obterPerguntasSorteadas(6));
  const [perguntaAtualIdx, setPerguntaAtualIdx] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [pontuacao, setPontuacao] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const totalPerguntas = perguntas.length;
  const pergunta = perguntas[perguntaAtualIdx] || perguntas[0];

  // Função para sortear novas perguntas a qualquer momento ou ao reiniciar
  const handleSortearNovasPerguntas = () => {
    const novasPerguntas = obterPerguntasSorteadas(6);
    setPerguntas(novasPerguntas);
    setPerguntaAtualIdx(0);
    setRespostaSelecionada(null);
    setMostrarResultado(false);
    setPontuacao(0);
    setJogoFinalizado(false);
    speakText('Novas perguntas do cotidiano foram sorteadas!', { rate: speechRate });
  };

  const handleEscolherResposta = (simbolo: string) => {
    if (respostaSelecionada !== null || !pergunta) return;
    setRespostaSelecionada(simbolo);
    setMostrarResultado(true);

    const estaCorreto = simbolo === pergunta.respostaCorretaSimbolo;
    if (estaCorreto) {
      setPontuacao((prev) => prev + 1);
      speakText(`Muito bem! Resposta correta! ${pergunta.explicacao}`, { rate: speechRate });
    } else {
      const elementoCorreto = ELEMENTOS_QUIMICOS.find((e) => e.simbolo === pergunta.respostaCorretaSimbolo);
      speakText(`Não foi dessa vez. A resposta certa era ${elementoCorreto?.nome || pergunta.respostaCorretaSimbolo}. ${pergunta.explicacao}`, { rate: speechRate });
    }
  };

  const handleProximaPergunta = () => {
    if (perguntaAtualIdx < totalPerguntas - 1) {
      const proximoIdx = perguntaAtualIdx + 1;
      setPerguntaAtualIdx(proximoIdx);
      setRespostaSelecionada(null);
      setMostrarResultado(false);
      const proxima = perguntas[proximoIdx];
      if (proxima) {
        speakText(`Pergunta ${proximoIdx + 1}: ${proxima.pergunta}`, { rate: speechRate });
      }
    } else {
      setJogoFinalizado(true);
      const acertosFinais = pontuacao + (respostaSelecionada === pergunta.respostaCorretaSimbolo ? 1 : 0);
      speakText(`Parabéns! Você concluiu o desafio dos elementos químicos com ${acertosFinais} acertos de ${totalPerguntas}!`, { rate: speechRate });
    }
  };

  const handleLerPergunta = () => {
    if (!pergunta) return;
    speakText(`Pergunta: ${pergunta.pergunta}. Dica: ${pergunta.dica}`, { rate: speechRate });
  };

  if (!pergunta) {
    return null;
  }

  return (
    <section
      id="secao-quiz"
      aria-label="Jogo e Quiz Interativo de Elementos do Cotidiano"
      className={`rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border-4 max-w-3xl mx-auto my-8 transition-all shadow-2xl ${
        isHighContrast
          ? 'bg-black border-white text-yellow-300'
          : 'bg-white border-indigo-100 text-slate-900'
      }`}
    >
      {/* Topo do Quiz com Informações e Botão de Sortear */}
      <div className="flex flex-wrap items-center justify-between border-b-2 pb-4 mb-6 border-slate-100 dark:border-white gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-300 font-bold border-2 border-amber-300 shadow-xs text-2xl">
            🧩
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-indigo-600 dark:text-yellow-300 m-0">
                Desafio do Cotidiano
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300">
                Fácil & Concreto 🌟
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-yellow-200 m-0">
              Perguntas diretas com figuras e objetos do dia a dia
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSortearNovasPerguntas}
            aria-label="Sortear novas perguntas aleatórias do quiz"
            className={`px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm border-2 cursor-pointer transition-all flex items-center gap-1.5 active:scale-95 shadow-xs ${
              isHighContrast
                ? 'bg-neutral-900 text-cyan-300 border-cyan-400 hover:bg-neutral-800'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200'
            }`}
          >
            <Shuffle className="w-4 h-4" />
            <span>Outras Perguntas</span>
          </button>

          <div className="text-xs sm:text-sm font-black px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 dark:bg-neutral-800 dark:text-cyan-300 border-2 border-indigo-200 dark:border-white">
            {!jogoFinalizado ? `Pergunta ${perguntaAtualIdx + 1} de ${totalPerguntas}` : 'Concluído'}
          </div>
        </div>
      </div>

      {!jogoFinalizado ? (
        <div className="space-y-6">
          {/* Card da Pergunta Atual com destaque visual */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border-3 shadow-md ${
              isHighContrast
                ? 'bg-neutral-950 border-cyan-400 text-cyan-300'
                : 'bg-indigo-50/50 border-indigo-200 text-slate-900'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xl sm:text-2xl font-black leading-snug text-slate-800 dark:text-yellow-300 m-0">
                {pergunta.pergunta}
              </p>
              <button
                type="button"
                onClick={handleLerPergunta}
                aria-label="Ouvir a pergunta em voz alta"
                className="p-3 rounded-2xl bg-white dark:bg-black border-2 border-indigo-200 dark:border-white cursor-pointer hover:bg-indigo-50 active:scale-95 transition-all shrink-0 shadow-sm flex items-center gap-1.5"
              >
                <Volume2 className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                <span className="text-xs font-bold hidden sm:inline text-indigo-700 dark:text-cyan-300">Ouvir</span>
              </button>
            </div>

            {/* Dica da Pergunta Fácil e Visual */}
            <div className="mt-4 p-3.5 bg-yellow-100/80 dark:bg-neutral-900 rounded-2xl border-2 border-yellow-300 dark:border-white/40 text-sm sm:text-base font-bold text-yellow-900 dark:text-yellow-300 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <span>{pergunta.dica}</span>
              </div>
              <button
                type="button"
                onClick={() => speakText(`Dica: ${pergunta.dica}`, { rate: speechRate })}
                aria-label="Ouvir dica em voz alta"
                className="p-1.5 rounded-lg bg-yellow-200 dark:bg-neutral-800 text-yellow-900 dark:text-yellow-300 hover:bg-yellow-300 shrink-0 cursor-pointer text-xs font-black"
              >
                🔊 Ouvir Dica
              </button>
            </div>
          </div>

          {/* Grade de 4 Opções de Resposta em Cartões Claros com Ícones Grandes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {pergunta.opcoes.map((simbolo) => {
              const el = ELEMENTOS_QUIMICOS.find((e) => e.simbolo === simbolo);
              const theme = getElementTheme(simbolo, el?.categoria);
              const isSelected = respostaSelecionada === simbolo;
              const isCorrect = simbolo === pergunta.respostaCorretaSimbolo;

              let btnStyle = `${theme.bg} border-b-8 ${theme.borderBottom} shadow-md hover:scale-102`;

              if (mostrarResultado) {
                if (isCorrect) {
                  btnStyle = isHighContrast
                    ? 'bg-green-400 text-black border-white ring-4 ring-green-300'
                    : 'bg-green-500 text-white border-b-8 border-green-700 ring-4 ring-green-300 scale-105 shadow-xl';
                } else if (isSelected && !isCorrect) {
                  btnStyle = isHighContrast
                    ? 'bg-red-500 text-white border-white'
                    : 'bg-rose-500 text-white border-b-8 border-rose-700 opacity-60 scale-95';
                } else {
                  btnStyle = 'bg-slate-200 text-slate-400 border-b-8 border-slate-300 opacity-40';
                }
              }

              return (
                <button
                  key={simbolo}
                  type="button"
                  onClick={() => handleEscolherResposta(simbolo)}
                  disabled={mostrarResultado}
                  aria-label={`${el?.nome || simbolo}, Símbolo ${simbolo}`}
                  className={`p-4 sm:p-5 rounded-3xl font-black text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[140px] active:border-b-2 active:translate-y-1 ${btnStyle}`}
                >
                  <span className="text-4xl sm:text-5xl mb-1.5 drop-shadow-sm transition-transform hover:scale-110">
                    {el?.icone || '🧪'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black drop-shadow-xs">
                    {simbolo}
                  </span>
                  <span className="text-sm sm:text-base font-black tracking-wide truncate w-full mt-0.5">
                    {el?.nome || ''}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback de Resposta Correta ou Incorreta */}
          {mostrarResultado && (
            <div
              className={`p-6 rounded-3xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in shadow-md ${
                respostaSelecionada === pergunta.respostaCorretaSimbolo
                  ? isHighContrast
                    ? 'bg-neutral-950 border-green-400 text-green-300'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : isHighContrast
                  ? 'bg-neutral-950 border-yellow-400 text-yellow-300'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-3">
                {respostaSelecionada === pergunta.respostaCorretaSimbolo ? (
                  <CheckCircle2 className="w-9 h-9 text-green-600 shrink-0" />
                ) : (
                  <XCircle className="w-9 h-9 text-amber-600 shrink-0" />
                )}
                <div>
                  <div className="font-black text-lg">
                    {respostaSelecionada === pergunta.respostaCorretaSimbolo
                      ? 'Muito bem! Resposta certinha! 🎉'
                      : 'Quase lá! Veja a explicação:'}
                  </div>
                  <p className="text-base font-medium m-0 leading-relaxed">
                    {pergunta.explicacao}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProximaPergunta}
                className={`px-6 py-3 rounded-2xl font-black text-base cursor-pointer shrink-0 transition-all border-b-6 active:border-b-0 active:translate-y-1 shadow-md ${
                  isHighContrast
                    ? 'bg-yellow-400 text-black border-white'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-800'
                }`}
              >
                {perguntaAtualIdx < totalPerguntas - 1 ? 'Próxima Pergunta ➔' : 'Ver Resultado Final 🏆'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Tela de Desafio Concluído com Novo Sorteio */
        <div className="text-center py-8 space-y-5">
          <div className="text-7xl animate-bounce" aria-hidden="true">
            🏆
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-yellow-300">
            Parabéns! Desafio Concluído!
          </h3>
          <p className="text-xl font-bold text-slate-700 dark:text-yellow-200">
            Você acertou <span className="text-green-600 dark:text-green-400 font-black text-3xl">{pontuacao}</span> de {totalPerguntas} perguntas sobre os elementos químicos do cotidiano!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={handleSortearNovasPerguntas}
              className={`px-8 py-4 rounded-2xl font-black text-lg cursor-pointer inline-flex items-center gap-3 transition-all border-b-8 active:border-b-0 active:translate-y-1 shadow-lg ${
                isHighContrast
                  ? 'bg-yellow-400 text-black border-white'
                  : 'bg-green-500 hover:bg-green-600 text-white border-green-700'
              }`}
            >
              <RotateCcw className="w-6 h-6" /> JOGAR NOVAMENTE COM NOVAS PERGUNTAS 🎲
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
