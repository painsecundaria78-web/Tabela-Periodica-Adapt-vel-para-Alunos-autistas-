import { QuizQuestion, ChemicalElement } from '../types';
import { ELEMENTOS_QUIMICOS } from '../data/elements';

// Banco amplo de perguntas temáticas do cotidiano - Adaptado especialmente para TEA Grau 3 (linguagem direta, concreta, apoio visual)
export const BANCO_PERGUNTAS_BASE: QuizQuestion[] = [
  {
    id: 1,
    pergunta: '🥛 Onde encontramos o CÁLCIO para deixar nossos dentes e ossos bem fortes?',
    dica: 'Está no copo de leite que a gente bebe e no queijo! 🥛🧀',
    respostaCorretaSimbolo: 'Ca',
    opcoes: ['Ca', 'Fe', 'Au', 'He'],
    explicacao: 'Muito bem! O Cálcio (Ca) está no leite e deixa nossos ossos e dentes bem fortes! 🥛🦴'
  },
  {
    id: 2,
    pergunta: '🎈 Qual gás bem levinho faz os balões de festa flutuarem no ar?',
    dica: 'É o gás Hélio que enche as bexigas de aniversário! 🎈',
    respostaCorretaSimbolo: 'He',
    opcoes: ['He', 'Na', 'C', 'Cu'],
    explicacao: 'Isso aí! O gás Hélio (He) é super leve e faz os balões voarem alto! 🎈✨'
  },
  {
    id: 3,
    pergunta: '📱 Qual elemento guarda a energia na bateria do celular?',
    dica: 'É o Lítio da bateria recarregável do smartphone! 🔋',
    respostaCorretaSimbolo: 'Li',
    opcoes: ['Li', 'Cl', 'Ag', 'Al'],
    explicacao: 'Parabéns! O Lítio (Li) guarda toda a energia da bateria do celular! 📱🔋'
  },
  {
    id: 4,
    pergunta: '🫁 Qual elemento a gente respira pelo nariz a cada segundo para viver?',
    dica: 'É o Oxigênio do ar puro que enche o nosso peito! 🫁',
    respostaCorretaSimbolo: 'O',
    opcoes: ['O', 'Au', 'Ti', 'Hg'],
    explicacao: 'Muito bem! O Oxigênio (O) é o ar da vida que nós respiramos! 🫁🌱'
  },
  {
    id: 5,
    pergunta: '🧂 Qual elemento dá o gostinho salgado no sal da nossa comida?',
    dica: 'É o Sódio do sal de cozinha! 🧂',
    respostaCorretaSimbolo: 'Na',
    opcoes: ['Na', 'He', 'F', 'K'],
    explicacao: 'Certo! O Sódio (Na) dá o sabor salgadinho na comida do dia a dia! 🧂🍲'
  },
  {
    id: 6,
    pergunta: '🍌 Qual elemento da banana dá força para os nossos músculos?',
    dica: 'É o Potássio da banana que evita cãibras no corpo! 🍌',
    respostaCorretaSimbolo: 'K',
    opcoes: ['K', 'C', 'Fe', 'Cl'],
    explicacao: 'Muito bem! O Potássio (K) da banana dá força e saúde para os músculos! 🍌💪'
  },
  {
    id: 7,
    pergunta: '✏️ Qual elemento faz a ponta escura do lápis de escrever e desenhar?',
    dica: 'É o Carbono que forma o grafite do lápis! ✏️',
    respostaCorretaSimbolo: 'C',
    opcoes: ['C', 'Li', 'Ca', 'Au'],
    explicacao: 'Isso! O Carbono (C) faz o grafite da ponta do lápis para a gente desenhar! ✏️🎨'
  },
  {
    id: 8,
    pergunta: '🪥 Qual elemento da pasta de dente protege a nossa boca contra as cáries?',
    dica: 'É o Flúor da escovação dos dentes! 🪥🦷',
    respostaCorretaSimbolo: 'F',
    opcoes: ['F', 'He', 'Cu', 'Na'],
    explicacao: 'Muito bem! O Flúor (F) protege os nossos dentes para um sorriso bonito! 🪥✨'
  },
  {
    id: 9,
    pergunta: '🧃 Qual metal prateado e leve faz as latinhas de suco e refrigerante?',
    dica: 'É o Alumínio das latinhas que a gente recicla! 🧃♻️',
    respostaCorretaSimbolo: 'Al',
    opcoes: ['Al', 'Fe', 'O', 'Ca'],
    explicacao: 'Parabéns! O Alumínio (Al) é um metal levinho que faz as latinhas de bebidas! 🧃'
  },
  {
    id: 10,
    pergunta: '🏊 Qual elemento deixa a água da piscina limpinha e sem sujeira?',
    dica: 'É o Cloro da piscina! 🏊‍♂️💧',
    respostaCorretaSimbolo: 'Cl',
    opcoes: ['Cl', 'K', 'Au', 'Li'],
    explicacao: 'Isso aí! O Cloro (Cl) limpa a água da piscina e mata os micróbios! 🏊'
  },
  {
    id: 11,
    pergunta: '🥇 Qual metal amarelo e brilhante faz as medalhas de primeiro lugar?',
    dica: 'É o Ouro das medalhas douradas de campeão! 🥇✨',
    respostaCorretaSimbolo: 'Au',
    opcoes: ['Au', 'Ag', 'C', 'H'],
    explicacao: 'Muito bem! O Ouro (Au) é o metal amarelo mais precioso e brilhante! 🥇'
  },
  {
    id: 12,
    pergunta: '💍 Qual metal prateado e brilhante faz medalhas de 2º lugar e anéis?',
    dica: 'É a Prata brilhante das joias! 💍🥈',
    respostaCorretaSimbolo: 'Ag',
    opcoes: ['Ag', 'Na', 'He', 'F'],
    explicacao: 'Certo! A Prata (Ag) é um metal prateado lindo usado em joias e medalhas! 💍'
  },
  {
    id: 13,
    pergunta: '🧲 Qual metal forte faz os pregos e está no feijão para dar força ao corpo?',
    dica: 'É o Ferro dos pregos e do prato de feijão! 🧲🍛',
    respostaCorretaSimbolo: 'Fe',
    opcoes: ['Fe', 'Cu', 'O', 'Li'],
    explicacao: 'Isso! O Ferro (Fe) faz ferramentas de aço e dá muita energia no sangue! 🧲💪'
  },
  {
    id: 14,
    pergunta: '🔌 Qual metal alaranjado faz os fios de eletricidade dentro da parede?',
    dica: 'É o Cobre que conduz a energia elétrica! 🔌⚡',
    respostaCorretaSimbolo: 'Cu',
    opcoes: ['Cu', 'Al', 'Ca', 'He'],
    explicacao: 'Muito bem! O Cobre (Cu) passa a energia elétrica pelos fios da casa! 🔌⚡'
  },
  {
    id: 15,
    pergunta: '💧 Qual elemento se junta com o oxigênio para formar a água da torneira?',
    dica: 'É o Hidrogênio da água H2O que a gente bebe! 💧🥤',
    respostaCorretaSimbolo: 'H',
    opcoes: ['H', 'Au', 'Cl', 'K'],
    explicacao: 'Parabéns! O Hidrogênio (H) se junta ao oxigênio e forma a água que bebemos! 💧'
  },
  {
    id: 16,
    pergunta: '💡 Qual gás brilha com luz vermelha nos letreiros coloridos das lojas?',
    dica: 'É o Neônio das lâmpadas e letreiros luminosos! 💡🔴',
    respostaCorretaSimbolo: 'Ne',
    opcoes: ['Ne', 'Fe', 'C', 'Na'],
    explicacao: 'Muito bem! O Neônio (Ne) brilha com cores alegres nos letreiros! 💡'
  },
  {
    id: 17,
    pergunta: '🩹 Qual elemento está na pomadinha para sarar machucados da pele?',
    dica: 'É o Zinco da pomada cicatrizante! 🩹👶',
    respostaCorretaSimbolo: 'Zn',
    opcoes: ['Zn', 'Au', 'He', 'O'],
    explicacao: 'Isso aí! O Zinco (Zn) ajuda a pele a sarar e fecha os machucadinhos! 🩹'
  },
  {
    id: 18,
    pergunta: '🏖️ Qual elemento da areia da praia é usado para fazer as telas de vidro e chips?',
    dica: 'É o Silício da areia e dos computadores! 🏖️💻',
    respostaCorretaSimbolo: 'Si',
    opcoes: ['Si', 'Li', 'Ca', 'Ag'],
    explicacao: 'Certo! O Silício (Si) da areia faz vidro e os chips dos aparelhos! 💻'
  },
  {
    id: 19,
    pergunta: '✈️ Qual metal super forte e leve faz as peças de aviões e foguetes?',
    dica: 'É o Titânio dos aviões no céu! ✈️🚀',
    respostaCorretaSimbolo: 'Ti',
    opcoes: ['Ti', 'Na', 'Cl', 'F'],
    explicacao: 'Muito bem! O Titânio (Ti) é forte como aço, mas super leve e seguro! ✈️'
  },
  {
    id: 20,
    pergunta: '🥫 Qual elemento protege a latinha de milho e ervilha contra ferrugem?',
    dica: 'É o Estanho das latinhas de comida! 🥫🌽',
    respostaCorretaSimbolo: 'Sn',
    opcoes: ['Sn', 'Au', 'He', 'Cu'],
    explicacao: 'Parabéns! O Estanho (Sn) protege o alimento gostoso dentro da lata! 🥫'
  }
];

// Função que embaralha uma lista (Fisher-Yates shuffle)
export function embaralharArray<T>(array: T[]): T[] {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Elementos muito conhecidos do cotidiano ideais para distratores fáceis
const ELEMENTOS_POPULARES = ['H', 'He', 'Li', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Al', 'Si', 'Cl', 'K', 'Ca', 'Fe', 'Cu', 'Zn', 'Ag', 'Au'];

// Gerador dinâmico de perguntas com base em qualquer elemento dos 118 em formato acessível e simples
export function gerarPerguntaDinamicaParaElemento(elemento: ChemicalElement, todosElementos: ChemicalElement[]): QuizQuestion {
  // Escolher distratores conhecidos
  const outrosSimbolos = ELEMENTOS_POPULARES.filter((s) => s !== elemento.simbolo);
  const distratoresSimbolos = embaralharArray(outrosSimbolos).slice(0, 3);
  const opcoesEmbaralhadas = embaralharArray([elemento.simbolo, ...distratoresSimbolos]);

  const exemploUso = elemento.ondeEsta && elemento.ondeEsta.length > 0 ? elemento.ondeEsta[0] : elemento.uso;

  const pergunta = `${elemento.icone || '🧪'} Onde encontramos o elemento ${elemento.nome.toUpperCase()} (${elemento.simbolo}) no nosso dia a dia?`;
  const dica = `Dica: ${elemento.nome} está presente em: "${exemploUso}"!`;

  return {
    id: Math.floor(Math.random() * 1000000),
    pergunta,
    dica,
    respostaCorretaSimbolo: elemento.simbolo,
    opcoes: opcoesEmbaralhadas,
    explicacao: `Muito bem! O elemento ${elemento.nome} (${elemento.simbolo}) está presente em: ${exemploUso}.`
  };
}

// Gera um conjunto novo e variado de perguntas para o Quiz a cada carregamento ou reinício
export function obterPerguntasSorteadas(quantidade: number = 6): QuizQuestion[] {
  // 1. Embaralhar as perguntas artesanais super fáceis e concretas do banco base
  const perguntasBaseEmbaralhadas = embaralharArray(BANCO_PERGUNTAS_BASE);

  // 2. Garantir opções embaralhadas em cada pergunta base
  const perguntasBaseFormatadas: QuizQuestion[] = perguntasBaseEmbaralhadas.map((p, idx) => ({
    ...p,
    id: idx + 1,
    opcoes: embaralharArray(p.opcoes),
  }));

  // 3. Pegar perguntas do banco adaptado
  return perguntasBaseFormatadas.slice(0, quantidade).map((p, index) => ({
    ...p,
    id: index + 1,
  }));
}

