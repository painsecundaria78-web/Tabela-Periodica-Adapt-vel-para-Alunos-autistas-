import React, { useState, useEffect, useCallback } from 'react';
import { AccessibilityBar } from './components/AccessibilityBar';
import { CategoryFilter } from './components/CategoryFilter';
import { QuickGroupSelector } from './components/QuickGroupSelector';
import { ElementCard } from './components/ElementCard';
import { ElementDetailsPanel } from './components/ElementDetailsPanel';
import { SingleElementFocusView } from './components/SingleElementFocusView';
import { GroupsExplorerSection } from './components/GroupsExplorerSection';
import { QuizSection } from './components/QuizSection';
import { PedagogicalGuide } from './components/PedagogicalGuide';
import { PeriodicTableModal } from './components/PeriodicTableModal';
import { MarieCurieModal } from './components/MarieCurieModal';
import { ELEMENTOS_QUIMICOS } from './data/elements';
import { getGroupInfoForElement, GRUPOS_TABELA } from './data/elementGroups';
import { ChemicalElement, CategoriaFiltro, ModoVisualizacao } from './types';
import { speakText, stopSpeaking } from './utils/speech';
import { Search, Sparkles, LayoutGrid, HelpCircle, BookOpen, Eye, Monitor } from 'lucide-react';

export default function App() {
  // Accessibility state
  const [fontSize, setFontSize] = useState<number>(18);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isAutoSpeech, setIsAutoSpeech] = useState<boolean>(true);
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [isDyslexicFont, setIsDyslexicFont] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Application state
  // Default to Hydrogen (H) as in the reference test
  const [elementoSelecionado, setElementoSelecionado] = useState<ChemicalElement | null>(ELEMENTOS_QUIMICOS[0]);
  const [filtroCategoria, setFiltroCategoria] = useState<CategoriaFiltro>('todos');
  const [filtroGrupoId, setFiltroGrupoId] = useState<string | null>(null);
  const [busca, setBusca] = useState<string>('');
  const [modoAba, setModoAba] = useState<ModoVisualizacao>('grade');
  const [isModalTabelaAberta, setIsModalTabelaAberta] = useState<boolean>(false);
  const [isModalMarieCurieAberta, setIsModalMarieCurieAberta] = useState<boolean>(false);

  // Apply font size and classes to document/body
  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    if (isHighContrast) {
      document.body.classList.add('alto-contraste');
    } else {
      document.body.classList.remove('alto-contraste');
    }
  }, [isHighContrast]);

  useEffect(() => {
    if (isDyslexicFont) {
      document.body.classList.add('fonte-dislexia');
    } else {
      document.body.classList.remove('fonte-dislexia');
    }
  }, [isDyslexicFont]);

  // Audio Speech Handler for Elements
  const handleOuvirAudio = useCallback((elemento: ChemicalElement) => {
    const grupoInfo = getGroupInfoForElement(elemento.grupo, elemento.familiaQuimica);
    const textoGrupo = grupoInfo ? `Família: ${grupoInfo.nome}, conhecida como ${grupoInfo.apelidoFacil}.` : '';

    const textoParaLer = `Elemento ${elemento.nome}. Símbolo: ${elemento.simbolo}. Número atômico: ${elemento.numAtomico}. Número de massa aproximado: ${elemento.numeroMassa}. ${textoGrupo} Como aplicar este elemento: ${elemento.comoAplicar}. Onde está presente no dia a dia: ${elemento.uso}. Curiosidade fácil: ${elemento.curiosidade}.`;

    speakText(textoParaLer, {
      rate: speechRate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  }, [speechRate]);

  // Audio Speech Handler for Custom Text
  const handleOuvirTextoGenerico = useCallback((texto: string) => {
    speakText(texto, {
      rate: speechRate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });
  }, [speechRate]);

  const handlePararAudio = useCallback(() => {
    stopSpeaking();
    setIsSpeaking(false);
  }, []);

  // Element Selection Handler
  const handleSelecionarElemento = useCallback((elemento: ChemicalElement) => {
    setElementoSelecionado(elemento);

    if (isAutoSpeech) {
      handleOuvirAudio(elemento);
    }
  }, [isAutoSpeech, handleOuvirAudio]);

  // Navegação Anterior / Próximo
  const handleElementoAnterior = useCallback(() => {
    if (!elementoSelecionado) return;
    const currentIndex = ELEMENTOS_QUIMICOS.findIndex((e) => e.simbolo === elementoSelecionado.simbolo);
    const prevIndex = (currentIndex - 1 + ELEMENTOS_QUIMICOS.length) % ELEMENTOS_QUIMICOS.length;
    handleSelecionarElemento(ELEMENTOS_QUIMICOS[prevIndex]);
  }, [elementoSelecionado, handleSelecionarElemento]);

  const handleElementoProximo = useCallback(() => {
    if (!elementoSelecionado) return;
    const currentIndex = ELEMENTOS_QUIMICOS.findIndex((e) => e.simbolo === elementoSelecionado.simbolo);
    const nextIndex = (currentIndex + 1) % ELEMENTOS_QUIMICOS.length;
    handleSelecionarElemento(ELEMENTOS_QUIMICOS[nextIndex]);
  }, [elementoSelecionado, handleSelecionarElemento]);

  // Atalhos de teclado no computador
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar se estiver digitando na caixa de busca
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleElementoAnterior();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleElementoProximo();
      } else if (e.key === ' ' && elementoSelecionado) {
        e.preventDefault();
        if (isSpeaking) {
          handlePararAudio();
        } else {
          handleOuvirAudio(elementoSelecionado);
        }
      } else if (e.key === 'Escape') {
        handlePararAudio();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleElementoAnterior, handleElementoProximo, elementoSelecionado, isSpeaking, handleOuvirAudio, handlePararAudio]);

  // Font adjustments
  const handleAumentarFonte = () => {
    setFontSize((prev) => Math.min(prev + 2, 28));
  };

  const handleDiminuirFonte = () => {
    setFontSize((prev) => Math.max(prev - 2, 14));
  };

  // Filtro de elementos
  const elementosFiltrados = ELEMENTOS_QUIMICOS.filter((el) => {
    const matchCategoria = filtroCategoria === 'todos' || el.categoria === filtroCategoria;

    let matchGrupo = true;
    if (filtroGrupoId) {
      if (filtroGrupoId === 'lantanideos') {
        matchGrupo = el.numAtomico >= 57 && el.numAtomico <= 71;
      } else if (filtroGrupoId === 'actinideos') {
        matchGrupo = el.numAtomico >= 89 && el.numAtomico <= 103;
      } else if (filtroGrupoId === 'grupo-1') {
        matchGrupo = el.grupo === 1;
      } else if (filtroGrupoId === 'grupo-2') {
        matchGrupo = el.grupo === 2;
      } else if (filtroGrupoId === 'metais-transicao') {
        matchGrupo = (!!el.grupo && el.grupo >= 3 && el.grupo <= 12) || (!!el.familiaQuimica && el.familiaQuimica.includes('Transição'));
      } else if (filtroGrupoId === 'grupo-13') matchGrupo = el.grupo === 13;
      else if (filtroGrupoId === 'grupo-14') matchGrupo = el.grupo === 14;
      else if (filtroGrupoId === 'grupo-15') matchGrupo = el.grupo === 15;
      else if (filtroGrupoId === 'grupo-16') matchGrupo = el.grupo === 16;
      else if (filtroGrupoId === 'grupo-17') matchGrupo = el.grupo === 17;
      else if (filtroGrupoId === 'grupo-18') matchGrupo = el.grupo === 18;
    }

    const matchBusca =
      busca.trim() === '' ||
      el.nome.toLowerCase().includes(busca.toLowerCase()) ||
      el.simbolo.toLowerCase().includes(busca.toLowerCase()) ||
      el.numAtomico.toString() === busca.trim() ||
      el.uso.toLowerCase().includes(busca.toLowerCase());

    return matchCategoria && matchGrupo && matchBusca;
  });

  const indiceAtualElemento = elementoSelecionado
    ? ELEMENTOS_QUIMICOS.findIndex((e) => e.simbolo === elementoSelecionado.simbolo)
    : 0;

  // Ação ao selecionar um grupo a partir da aba de Grupos
  const handleSelecionarGrupoParaFiltrar = (grupoId: string, elementoInicial?: ChemicalElement) => {
    setFiltroGrupoId(grupoId);
    setFiltroCategoria('todos');
    if (elementoInicial) {
      handleSelecionarElemento(elementoInicial);
    }
    setModoAba('grade');
  };

  return (
    <div
      id="app-container"
      className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors ${
        isHighContrast ? 'bg-black text-yellow-300' : 'bg-slate-50 text-slate-900 font-sans'
      }`}
    >
      {/* Container Widescreen para Computador */}
      <div className="max-w-[1600px] mx-auto w-full">
        {/* Barra Superior de Acessibilidade */}
        <AccessibilityBar
          fontSize={fontSize}
          onIncreaseFont={handleAumentarFonte}
          onDecreaseFont={handleDiminuirFonte}
          isHighContrast={isHighContrast}
          onToggleHighContrast={() => setIsHighContrast(!isHighContrast)}
          isAutoSpeech={isAutoSpeech}
          onToggleAutoSpeech={() => {
            const novoValor = !isAutoSpeech;
            setIsAutoSpeech(novoValor);
            if (!novoValor) {
              handlePararAudio();
            }
          }}
          speechRate={speechRate}
          onChangeSpeechRate={setSpeechRate}
          isDyslexicFont={isDyslexicFont}
          onToggleDyslexicFont={() => setIsDyslexicFont(!isDyslexicFont)}
          isSpeaking={isSpeaking}
          onStopSpeaking={handlePararAudio}
          onOpenPeriodicTable={() => setIsModalTabelaAberta(true)}
          onOpenMarieCurie={() => setIsModalMarieCurieAberta(true)}
        />

        {/* Cabeçalho Principal Otimizado para Computador */}
        <header className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-2 border-2 border-indigo-200 dark:border-white/30 bg-indigo-50 text-indigo-700 dark:bg-neutral-900 dark:text-yellow-300 shadow-xs">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-yellow-400" />
            <span>Educação Inclusiva • Ensino Médio Acessível</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-indigo-600 dark:text-yellow-300 tracking-tight mb-2">
            Tabela Periódica Adaptável Marie Curie
          </h1>
          <div className="flex justify-center my-2">
            <button
              type="button"
              onClick={() => setIsModalMarieCurieAberta(true)}
              aria-label="Conhecer a história inspiradora de Marie Curie"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black border-2 border-purple-300 dark:border-white bg-purple-50 hover:bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-yellow-300 shadow-xs cursor-pointer transition-all hover:scale-105 active:scale-95"
            >
              <span className="text-base">👩‍🔬</span>
              <span>Homenagem a <strong>Marie Curie</strong> • Descobridora do Polônio e Rádio (Clique para conhecer)</span>
            </button>
          </div>
          <p className="instrucao-simples text-base sm:text-xl font-bold max-w-3xl mx-auto text-slate-500 dark:text-yellow-200">
            Aprenda os 118 elementos e suas famílias com voz, ilustrações grandes e exemplos fáceis do dia a dia:
          </p>

          {/* Seletor de Modos de Visualização para Computador */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            {/* Modo Grade / Painel Duplo */}
            <button
              id="btn-modo-grade"
              type="button"
              onClick={() => setModoAba('grade')}
              aria-pressed={modoAba === 'grade'}
              className={`px-5 sm:px-6 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 cursor-pointer transition-all inline-flex items-center gap-2.5 active:border-b-0 active:translate-y-1 ${
                modoAba === 'grade'
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white shadow-lg'
                    : 'bg-indigo-600 text-white border-indigo-900 shadow-lg scale-105'
                  : isHighContrast
                  ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span>🖥️ Visão Completa (Catálogo)</span>
            </button>

            {/* Modo Foco / 1 Elemento por Vez (Ideal para Autismo Nível 3) */}
            <button
              id="btn-modo-foco"
              type="button"
              onClick={() => setModoAba('foco')}
              aria-pressed={modoAba === 'foco'}
              className={`px-5 sm:px-6 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 cursor-pointer transition-all inline-flex items-center gap-2.5 active:border-b-0 active:translate-y-1 ${
                modoAba === 'foco'
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white shadow-lg'
                    : 'bg-indigo-600 text-white border-indigo-900 shadow-lg scale-105'
                  : isHighContrast
                  ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
              }`}
            >
              <Eye className="w-5 h-5" />
              <span>🔍 Modo Foco (1 por Vez)</span>
            </button>

            {/* Guia das Famílias e Grupos */}
            <button
              id="btn-modo-grupos"
              type="button"
              onClick={() => setModoAba('grupos')}
              aria-pressed={modoAba === 'grupos'}
              className={`px-5 sm:px-6 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 cursor-pointer transition-all inline-flex items-center gap-2.5 active:border-b-0 active:translate-y-1 ${
                modoAba === 'grupos'
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white shadow-lg'
                    : 'bg-emerald-600 text-white border-emerald-900 shadow-lg scale-105'
                  : isHighContrast
                  ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>🏛️ Guia das Famílias (Grupos)</span>
            </button>

            {/* Desafio do Cotidiano */}
            <button
              id="btn-modo-quiz"
              type="button"
              onClick={() => setModoAba('quiz')}
              aria-pressed={modoAba === 'quiz'}
              className={`px-5 sm:px-6 py-3 rounded-2xl font-black text-base sm:text-lg border-b-6 cursor-pointer transition-all inline-flex items-center gap-2.5 active:border-b-0 active:translate-y-1 ${
                modoAba === 'quiz'
                  ? isHighContrast
                    ? 'bg-yellow-400 text-black border-white shadow-lg'
                    : 'bg-indigo-600 text-white border-indigo-900 shadow-lg scale-105'
                  : isHighContrast
                  ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-xs'
              }`}
            >
              <HelpCircle className="w-5 h-5 text-amber-500" />
              <span>🧩 Desafio do Cotidiano</span>
            </button>
          </div>
        </header>

        {/* Conteúdo Principal Conforme o Modo Ativo */}
        {modoAba === 'grade' && (
          <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10">
            {/* Coluna Esquerda: Filtros, Seletor de Famílias e Grade de Elementos (Col-Span 7 no Desktop) */}
            <section className="lg:col-span-7 space-y-4" aria-label="Seleção de elementos químicos">
              {/* Barra de Busca Grande */}
              <div className="w-full relative">
                <label htmlFor="busca-elemento" className="sr-only">
                  Buscar elemento por nome, símbolo ou número
                </label>
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-yellow-400 pointer-events-none" />
                <input
                  id="busca-elemento"
                  type="text"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Buscar por nome, símbolo ou uso (ex: Ferro, H, bateria, leite, piscina)..."
                  className={`w-full pl-12 pr-12 py-3.5 rounded-2xl border-2 font-bold text-base transition-all focus:outline-none focus:ring-4 focus:ring-indigo-200 ${
                    isHighContrast
                      ? 'bg-neutral-950 text-yellow-300 border-white placeholder:text-neutral-500'
                      : 'bg-white text-slate-900 border-slate-300 placeholder:text-slate-400 shadow-xs'
                  }`}
                />
                {busca && (
                  <button
                    type="button"
                    onClick={() => setBusca('')}
                    aria-label="Limpar busca"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-black px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-white/20 text-slate-700 dark:text-white"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Seletor Rápido de Famílias da Tabela Periódica */}
              <QuickGroupSelector
                grupoSelecionadoId={filtroGrupoId}
                onSelecionarGrupo={setFiltroGrupoId}
                isHighContrast={isHighContrast}
                onOuvirFamilia={(g) => {
                  const texto = `${g.numeroGrupo}: ${g.nome} (${g.apelidoFacil}). ${g.explicacaoSimples}. Onde encontrar: ${g.ondeEncontrar.join(', ')}.`;
                  handleOuvirTextoGenerico(texto);
                }}
              />

              {/* Filtro por Categorias Temáticas */}
              <CategoryFilter
                filtroAtivo={filtroCategoria}
                onSelecionarFiltro={(cat) => {
                  setFiltroCategoria(cat);
                  setFiltroGrupoId(null);
                }}
                isHighContrast={isHighContrast}
              />

              {/* Barra de Acesso Rápido aos Elementos mais Famosos */}
              <div className="p-3 rounded-2xl bg-white dark:bg-neutral-950 border-2 border-slate-200 dark:border-white/30 flex flex-wrap items-center justify-between gap-2 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-yellow-300">
                    ⭐ Mais Comuns:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[
                      { sym: 'H', color: 'bg-blue-500 border-blue-700' },
                      { sym: 'Li', color: 'bg-sky-500 border-sky-700' },
                      { sym: 'C', color: 'bg-pink-500 border-pink-700' },
                      { sym: 'O', color: 'bg-rose-500 border-rose-700' },
                      { sym: 'Na', color: 'bg-amber-500 border-amber-700' },
                      { sym: 'Fe', color: 'bg-orange-500 border-orange-700' },
                      { sym: 'Au', color: 'bg-yellow-500 border-yellow-700' },
                      { sym: 'U', color: 'bg-lime-600 border-lime-800' },
                    ].map(({ sym, color }) => {
                      const el = ELEMENTOS_QUIMICOS.find((e) => e.simbolo === sym);
                      if (!el) return null;
                      const isSelected = elementoSelecionado?.simbolo === sym;
                      return (
                        <button
                          key={sym}
                          type="button"
                          onClick={() => handleSelecionarElemento(el)}
                          aria-pressed={isSelected}
                          className={`px-2.5 py-1 rounded-xl text-xs font-black border-b-3 cursor-pointer transition-all active:border-b-0 active:translate-y-0.5 ${
                            isSelected
                              ? isHighContrast
                                ? 'bg-yellow-400 text-black border-white'
                                : `${color} text-white ring-2 ring-indigo-300 scale-105 shadow-md`
                              : isHighContrast
                              ? 'bg-black text-yellow-300 border-white hover:bg-neutral-900'
                              : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
                          }`}
                        >
                          {el.icone} {el.simbolo}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="text-xs font-black px-3 py-1 rounded-full bg-indigo-50 dark:bg-neutral-900 text-indigo-700 dark:text-yellow-300 border border-indigo-200 dark:border-white/30">
                  {elementosFiltrados.length} de 118 elementos
                </div>
              </div>

              {/* Grade de Elementos Químicos com Tamanho Confortável */}
              <div
                className="grid-elementos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-3.5 max-h-[750px] overflow-y-auto p-1 scrollbar-thin"
                aria-label="Elementos químicos disponíveis para consulta"
              >
                {elementosFiltrados.length > 0 ? (
                  elementosFiltrados.map((elemento) => (
                    <ElementCard
                      key={elemento.simbolo}
                      elemento={elemento}
                      isSelecionado={elementoSelecionado?.simbolo === elemento.simbolo}
                      onSelecionar={handleSelecionarElemento}
                      isHighContrast={isHighContrast}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 opacity-80">
                    <p className="text-lg font-black text-slate-700 dark:text-yellow-300">
                      Nenhum elemento encontrado para "{busca}".
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setBusca('');
                        setFiltroCategoria('todos');
                        setFiltroGrupoId(null);
                      }}
                      className="mt-2 text-sm font-black underline cursor-pointer text-indigo-600 dark:text-yellow-300"
                    >
                      Mostrar todos os elementos
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Coluna Direita: Painel Detalhado do Elemento Selecionado (Col-Span 5 no Desktop, Sticky) */}
            <aside className="lg:col-span-5 lg:sticky lg:top-4" aria-label="Painel de detalhes do elemento selecionado">
              <ElementDetailsPanel
                elemento={elementoSelecionado}
                onOuvirAudio={handleOuvirAudio}
                onPararAudio={handlePararAudio}
                isSpeaking={isSpeaking}
                isHighContrast={isHighContrast}
                onAbrirExplicacaoGrupos={() => setModoAba('grupos')}
                onAnterior={handleElementoAnterior}
                onProximo={handleElementoProximo}
                posicaoInfo={{
                  atual: indiceAtualElemento + 1,
                  total: ELEMENTOS_QUIMICOS.length,
                }}
              />
            </aside>
          </main>
        )}

        {/* Modo Foco / Passo a Passo (1 Elemento Gigante por Vez) */}
        {modoAba === 'foco' && elementoSelecionado && (
          <main className="mb-10">
            <SingleElementFocusView
              elemento={elementoSelecionado}
              totalElementos={ELEMENTOS_QUIMICOS.length}
              indiceAtual={indiceAtualElemento}
              onAnterior={handleElementoAnterior}
              onProximo={handleElementoProximo}
              onOuvirAudio={handleOuvirAudio}
              onPararAudio={handlePararAudio}
              isSpeaking={isSpeaking}
              isHighContrast={isHighContrast}
              onAbrirExplicacaoGrupos={() => setModoAba('grupos')}
            />
          </main>
        )}

        {/* Modo Grupos e Famílias */}
        {modoAba === 'grupos' && (
          <main className="mb-10">
            <GroupsExplorerSection
              isHighContrast={isHighContrast}
              onOuvirTexto={handleOuvirTextoGenerico}
              onSelecionarGrupoParaFiltrar={handleSelecionarGrupoParaFiltrar}
            />
          </main>
        )}

        {/* Modo Desafio / Quiz */}
        {modoAba === 'quiz' && (
          <main className="mb-10">
            <QuizSection isHighContrast={isHighContrast} speechRate={speechRate} />
          </main>
        )}

        {/* Guia Pedagógico para Professores e Mediadores */}
        <PedagogicalGuide isHighContrast={isHighContrast} />

        {/* Rodapé Vibrante Adaptado para Computador */}
        <footer className="mt-8 py-6 border-t-2 border-slate-200 dark:border-white/20 flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-indigo-50 dark:bg-neutral-900 px-4 py-2 rounded-xl text-indigo-600 dark:text-cyan-300 font-black text-sm border border-indigo-100 dark:border-neutral-800">
              <span className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></span>
              <span>Versão para Computador (Widescreen)</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 dark:bg-neutral-900 px-4 py-2 rounded-xl text-green-600 dark:text-green-400 font-black text-sm border border-green-100 dark:border-neutral-800">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              <span>Acessibilidade Nível 3 Ativa</span>
            </div>
          </div>
          <p className="text-slate-400 dark:text-yellow-300 font-black text-xs sm:text-sm uppercase tracking-widest">
            Tabela Periódica Adaptável Marie Curie • Navegação com Teclado (← / → / Espaço)
          </p>
        </footer>
        {/* Modal de Consulta da Tabela Periódica Completa (118 Elementos) */}
        <PeriodicTableModal
          isOpen={isModalTabelaAberta}
          onClose={() => setIsModalTabelaAberta(false)}
          onSelectElement={(el) => {
            handleSelecionarElemento(el);
            if (modoAba === 'grupos' || modoAba === 'quiz') {
              setModoAba('grade');
            }
          }}
          isHighContrast={isHighContrast}
          speechRate={speechRate}
        />
        {/* Modal de Quem foi Marie Curie com Imagem, História e Elementos */}
        <MarieCurieModal
          isOpen={isModalMarieCurieAberta}
          onClose={() => setIsModalMarieCurieAberta(false)}
          onSelectElement={(el) => {
            handleSelecionarElemento(el);
            if (modoAba === 'grupos' || modoAba === 'quiz') {
              setModoAba('grade');
            }
          }}
          isHighContrast={isHighContrast}
          speechRate={speechRate}
        />
      </div>
    </div>
  );
}
