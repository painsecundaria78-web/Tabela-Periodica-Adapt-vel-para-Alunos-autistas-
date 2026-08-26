export interface GroupExplanation {
  id: string;
  numeroGrupo: string;
  nome: string;
  apelidoFacil: string;
  icone: string;
  corBadge: string;
  corBorda: string;
  explicacaoSimples: string;
  comoAplicarGrupo: string;
  exemplosFamosos: string[];
  ondeEncontrar: string[];
  curiosidadeGrupo: string;
}

export const EXPLICACAO_GERAL_GRUPOS = {
  titulo: 'O que são os Grupos da Tabela Periódica?',
  resumoSimples: 'A Tabela Periódica é organizada em 18 colunas em pé (verticais). Cada coluna em pé é chamada de GRUPO ou FAMÍLIA.',
  regraDeOuro: 'Elementos da mesma família são como irmãos: eles têm o mesmo jeito de se comportar e superpoderes parecidos!',
  dicaParaMemorizar: 'Basta olhar a coluna de cima para baixo: todos os elementos naquela coluna têm qualidades parecidas no dia a dia.'
};

export const GRUPOS_TABELA: GroupExplanation[] = [
  {
    id: 'grupo-1',
    numeroGrupo: 'Grupo 1 (Coluna 1)',
    nome: 'Metais Alcalinos',
    apelidoFacil: 'Família das Baterias e da Energia Rápida',
    icone: '🔋',
    corBadge: 'bg-red-100 text-red-800 border-red-300',
    corBorda: 'border-red-500',
    explicacaoSimples: 'São metais muito macios que guardam energia. Eles reagem muito rápido com a água.',
    comoAplicarGrupo: 'Usa-se para fazer a bateria que carrega o celular (Lítio) e o sal gostoso da comida (Sódio).',
    exemplosFamosos: ['Lítio (Li)', 'Sódio (Na)', 'Potássio (K)'],
    ondeEncontrar: ['Bateria do smartphone', 'Sal de cozinha', 'Banana e água de coco'],
    curiosidadeGrupo: 'O lítio é tão leve que pode boiar na água!'
  },
  {
    id: 'grupo-2',
    numeroGrupo: 'Grupo 2 (Coluna 2)',
    nome: 'Metais Alcalino-Terrosos',
    apelidoFacil: 'Família dos Ossos Fortes e Luzes',
    icone: '🦴',
    corBadge: 'bg-orange-100 text-orange-800 border-orange-300',
    corBorda: 'border-orange-500',
    explicacaoSimples: 'São metais que deixam as coisas duras e resistentes. Estão na terra e no nosso corpo.',
    comoAplicarGrupo: 'Usa-se no leite para fortalecer os ossos (Cálcio) e para fazer fogos de artifício brilhantes (Magnésio).',
    exemplosFamosos: ['Berílio (Be)', 'Magnésio (Mg)', 'Cálcio (Ca)', 'Bário (Ba)'],
    ondeEncontrar: ['Copo de leite e queijo', 'Nossos dentes e ossos', 'Fogos de artifício'],
    curiosidadeGrupo: 'Sem o cálcio desse grupo, nossos dentes seriam moles como gelatina!'
  },
  {
    id: 'metais-transicao',
    numeroGrupo: 'Grupos 3 ao 12 (Colunas do Meio)',
    nome: 'Metais de Transição',
    apelidoFacil: 'Família dos Metais Fortes e Brilhantes',
    icone: '🪙',
    corBadge: 'bg-amber-100 text-amber-900 border-amber-300',
    corBorda: 'border-amber-500',
    explicacaoSimples: 'É o maior grupo da tabela! São metais duros, brilhantes e resistentes ao calor que conduzem eletricidade.',
    comoAplicarGrupo: 'Usa-se para fazer fios de luz (Cobre), portões e carros (Ferro), moedas e joias bonitas (Ouro e Prata).',
    exemplosFamosos: ['Ferro (Fe)', 'Cobre (Cu)', 'Ouro (Au)', 'Prata (Ag)', 'Zinco (Zn)', 'Titânio (Ti)'],
    ondeEncontrar: ['Fios de eletricidade', 'Carros e bicicletas', 'Panelas de ferro', 'Anéis e medalhas'],
    curiosidadeGrupo: 'O ouro nunca enferruja, mesmo ficando no fundo do mar por centenas de anos!'
  },
  {
    id: 'grupo-13',
    numeroGrupo: 'Grupo 13 (Coluna 13)',
    nome: 'Família do Boro',
    apelidoFacil: 'Família das Latinhas e Embalagens',
    icone: '🥫',
    corBadge: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    corBorda: 'border-yellow-500',
    explicacaoSimples: 'São elementos leves que ajudam a proteger alimentos e conduzir calor.',
    comoAplicarGrupo: 'Usa-se para fazer a latinha de refrigerante e o papel alumínio que embrulha o lanche.',
    exemplosFamosos: ['Boro (B)', 'Alumínio (Al)', 'Gálio (Ga)', 'Índio (In)'],
    ondeEncontrar: ['Latinha de suco ou refri', 'Papel alumínio da cozinha', 'Telas de toque'],
    curiosidadeGrupo: 'O alumínio pode ser reciclado infinitas vezes sem perder a força!'
  },
  {
    id: 'grupo-14',
    numeroGrupo: 'Grupo 14 (Coluna 14)',
    nome: 'Família do Carbono',
    apelidoFacil: 'Família da Vida e da Computação',
    icone: '💻',
    corBadge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    corBorda: 'border-emerald-500',
    explicacaoSimples: 'Tem o elemento da vida (Carbono) e o elemento dos computadores (Silício).',
    comoAplicarGrupo: 'Usa-se no grafite do lápis para desenhar (Carbono) e nos chips de celular e videogame (Silício).',
    exemplosFamosos: ['Carbono (C)', 'Silício (Si)', 'Estanho (Sn)', 'Chumbo (Pb)'],
    ondeEncontrar: ['Ponta do lápis', 'Chip de videogame e computador', 'Plantas e pessoas'],
    curiosidadeGrupo: 'O carbono forma tanto o grafite macio do lápis quanto o diamante mais duro do mundo!'
  },
  {
    id: 'grupo-15',
    numeroGrupo: 'Grupo 15 (Coluna 15)',
    nome: 'Família do Nitrogênio',
    apelidoFacil: 'Família das Plantas e do Fogo',
    icone: '🌱',
    corBadge: 'bg-teal-100 text-teal-800 border-teal-300',
    corBorda: 'border-teal-500',
    explicacaoSimples: 'São elementos que alimentam as plantas e ajudam na energia.',
    comoAplicarGrupo: 'Usa-se no adubo da horta para a comida crescer e na cabeça vermelha do palito de fósforo.',
    exemplosFamosos: ['Nitrogênio (N)', 'Fósforo (P)', 'Arsênio (As)'],
    ondeEncontrar: ['No ar que respiramos (78% é nitrogênio)', 'Palito de fósforo', 'Adubo de flores'],
    curiosidadeGrupo: 'A maior parte do ar que entra no nosso nariz é o gás nitrogênio!'
  },
  {
    id: 'grupo-16',
    numeroGrupo: 'Grupo 16 (Coluna 16)',
    nome: 'Calcogênios (Família do Oxigênio)',
    apelidoFacil: 'Família do Ar que Respiramos',
    icone: '🫁',
    corBadge: 'bg-sky-100 text-sky-800 border-sky-300',
    corBorda: 'border-sky-500',
    explicacaoSimples: 'São os elementos que mantêm todos os animais e seres humanos vivos.',
    comoAplicarGrupo: 'Usa-se pelo nosso pulmão para respirar (Oxigênio) e para fazer borracha de pneu durar mais (Enxofre).',
    exemplosFamosos: ['Oxigênio (O)', 'Enxofre (S)', 'Selênio (Se)'],
    ondeEncontrar: ['Ar puro da respiração', 'Água que bebemos (H2O)', 'Xampu anticaspa'],
    curiosidadeGrupo: 'Sem o oxigênio deste grupo, não existiria fogo nem vida na Terra!'
  },
  {
    id: 'grupo-17',
    numeroGrupo: 'Grupo 17 (Coluna 17)',
    nome: 'Halogênios',
    apelidoFacil: 'Família da Limpeza e Proteção',
    icone: '🧼',
    corBadge: 'bg-blue-100 text-blue-800 border-blue-300',
    corBorda: 'border-blue-500',
    explicacaoSimples: 'São elementos que adoram se juntar com metais para limpar e desinfetar.',
    comoAplicarGrupo: 'Usa-se na pasta de dente para evitar cárie (Flúor) e na água da piscina para matar micróbios (Cloro).',
    exemplosFamosos: ['Flúor (F)', 'Cloro (Cl)', 'Bromo (Br)', 'Iodo (I)'],
    ondeEncontrar: ['Pasta de dente', 'Água limpa da piscina', 'Remédio que limpa machucado (Iodo)'],
    curiosidadeGrupo: 'O cloro deixa a água da piscina azul e super limpinha para nadar!'
  },
  {
    id: 'grupo-18',
    numeroGrupo: 'Grupo 18 (Coluna 18)',
    nome: 'Gases Nobres',
    apelidoFacil: 'Família dos Gases Calminhos e Brilhantes',
    icone: '🎈',
    corBadge: 'bg-purple-100 text-purple-800 border-purple-300',
    corBorda: 'border-purple-500',
    explicacaoSimples: 'São gases calmos e seguros que não reagem nem se misturam com ninguém. Gostam de ficar sozinhos.',
    comoAplicarGrupo: 'Usa-se para encher balões que voam sozinhos (Hélio) e fazer letreiros luminosos coloridos de lojas (Neônio e Argônio).',
    exemplosFamosos: ['Hélio (He)', 'Neônio (Ne)', 'Argônio (Ar)', 'Criptônio (Kr)', 'Xenônio (Xe)', 'Radônio (Rn)', 'Oganessônio (Og)'],
    ondeEncontrar: ['Balões de aniversário flutuantes', 'Luzes de neon nas lojas', 'Lâmpadas de farol de carro'],
    curiosidadeGrupo: 'São chamados de "nobres" porque são muito calmos e não pegam fogo!'
  },
  {
    id: 'lantanideos',
    numeroGrupo: 'Linha Especial (Lantanídeos)',
    nome: 'Lantanídeos (Terras Raras)',
    apelidoFacil: 'Família das Telas e Ímãs Superfortes',
    icone: '📱',
    corBadge: 'bg-indigo-100 text-indigo-800 border-indigo-300',
    corBorda: 'border-indigo-500',
    explicacaoSimples: 'Metais brilhantes que fazem as cores da tela do celular ficarem bem vivas.',
    comoAplicarGrupo: 'Usa-se para fazer ímãs superfortes de fone de ouvido (Neodímio) e cores na tela do celular (Európio).',
    exemplosFamosos: ['Lantânio (La)', 'Neodímio (Nd)', 'Európio (Eu)'],
    ondeEncontrar: ['Fones de ouvido com ímã', 'Tela do smartphone', 'Óculos de proteção'],
    curiosidadeGrupo: 'Um pequeno ímã de neodímio consegue segurar objetos 100 vezes mais pesados que ele!'
  },
  {
    id: 'actinideos',
    numeroGrupo: 'Linha Especial (Actinídeos)',
    nome: 'Actinídeos (Metais de Grande Energia)',
    apelidoFacil: 'Família da Super Energia e Espaço',
    icone: '🚀',
    corBadge: 'bg-rose-100 text-rose-800 border-rose-300',
    corBorda: 'border-rose-500',
    explicacaoSimples: 'Metais muito pesados que guardam quantidades gigantes de energia.',
    comoAplicarGrupo: 'Usa-se em usinas para gerar eletricidade para cidades (Urânio) e em robôs que andam em Marte (Plutônio).',
    exemplosFamosos: ['Urânio (U)', 'Plutônio (Pu)', 'Amerício (Am)'],
    ondeEncontrar: ['Usinas de energia elétrica', 'Robô de Marte', 'Alarme de fumaça no teto'],
    curiosidadeGrupo: 'Uma pedrinha de urânio do tamanho de um botão gera energia para uma casa por muitos anos!'
  }
];

export function getGroupInfoForElement(grupo?: number, familiaQuimica?: string): GroupExplanation | undefined {
  if (familiaQuimica?.includes('Lantanídeo') || familiaQuimica?.includes('Lantanóide')) {
    return GRUPOS_TABELA.find(g => g.id === 'lantanideos');
  }
  if (familiaQuimica?.includes('Actinídeo') || familiaQuimica?.includes('Actinóide')) {
    return GRUPOS_TABELA.find(g => g.id === 'actinideos');
  }
  if (grupo === 1) return GRUPOS_TABELA.find(g => g.id === 'grupo-1');
  if (grupo === 2) return GRUPOS_TABELA.find(g => g.id === 'grupo-2');
  if (grupo && grupo >= 3 && grupo <= 12) return GRUPOS_TABELA.find(g => g.id === 'metais-transicao');
  if (grupo === 13) return GRUPOS_TABELA.find(g => g.id === 'grupo-13');
  if (grupo === 14) return GRUPOS_TABELA.find(g => g.id === 'grupo-14');
  if (grupo === 15) return GRUPOS_TABELA.find(g => g.id === 'grupo-15');
  if (grupo === 16) return GRUPOS_TABELA.find(g => g.id === 'grupo-16');
  if (grupo === 17) return GRUPOS_TABELA.find(g => g.id === 'grupo-17');
  if (grupo === 18) return GRUPOS_TABELA.find(g => g.id === 'grupo-18');
  
  if (familiaQuimica?.includes('Gás Nobre')) return GRUPOS_TABELA.find(g => g.id === 'grupo-18');
  if (familiaQuimica?.includes('Halogênio')) return GRUPOS_TABELA.find(g => g.id === 'grupo-17');
  if (familiaQuimica?.includes('Alcalino')) return GRUPOS_TABELA.find(g => g.id === 'grupo-1');
  if (familiaQuimica?.includes('Alcalinoterroso')) return GRUPOS_TABELA.find(g => g.id === 'grupo-2');
  if (familiaQuimica?.includes('Transição')) return GRUPOS_TABELA.find(g => g.id === 'metais-transicao');

  return undefined;
}
