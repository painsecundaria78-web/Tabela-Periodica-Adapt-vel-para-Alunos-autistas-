import { ChemicalElement, QuizQuestion } from '../types';
import { ELEMENTS_1_30 } from './elements_1_30';
import { ELEMENTS_31_60 } from './elements_31_60';
import { ELEMENTS_61_90 } from './elements_61_90';
import { ELEMENTS_91_118 } from './elements_91_118';

// All 118 chemical elements from Hydrogen (1) to Oganesson (118)
export const ELEMENTOS_QUIMICOS: ChemicalElement[] = [
  ...ELEMENTS_1_30,
  ...ELEMENTS_31_60,
  ...ELEMENTS_61_90,
  ...ELEMENTS_91_118,
];

export const PERGUNTAS_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    pergunta: 'Qual elemento tem Número Atômico 1, Símbolo H e se junta com oxigênio para formar a água que bebemos?',
    dica: 'É o elemento mais leve do universo e tem símbolo H.',
    respostaCorretaSimbolo: 'H',
    opcoes: ['H', 'He', 'O', 'Fe'],
    explicacao: 'O Hidrogênio (H) tem Número Atômico 1 e Massa 1. Ele está na água (H2O) e no Sol!'
  },
  {
    id: 2,
    pergunta: 'Qual elemento tem Número Atômico 2, Símbolo He e faz os balões de festa flutuarem no ar?',
    dica: 'É um gás nobre mais leve que o ar que enche bexigas de aniversário.',
    respostaCorretaSimbolo: 'He',
    opcoes: ['Li', 'He', 'N', 'Al'],
    explicacao: 'O Hélio (He) tem Número Atômico 2 e Massa 4. É um gás nobre seguro e super leve.'
  },
  {
    id: 3,
    pergunta: 'Qual elemento tem Número Atômico 3, Símbolo Li e guarda energia dentro da bateria do celular?',
    dica: 'Está na bateria recarregável do smartphone e do tablet.',
    respostaCorretaSimbolo: 'Li',
    opcoes: ['Na', 'Li', 'K', 'Cu'],
    explicacao: 'O Lítio (Li) tem Número Atômico 3 e Massa 7. Ele é fundamental para as baterias recarregáveis!'
  },
  {
    id: 4,
    pergunta: 'Qual elemento tem Número Atômico 6, Símbolo C e forma o grafite preto do lápis que usamos para escrever?',
    dica: 'Está na ponta do lápis e também nos diamantes mais duros.',
    respostaCorretaSimbolo: 'C',
    opcoes: ['C', 'Si', 'Ca', 'Au'],
    explicacao: 'O Carbono (C) tem Número Atômico 6 e Massa 12. Ele forma o grafite do lápis e está em todos os seres vivos.'
  },
  {
    id: 5,
    pergunta: 'Qual elemento tem Número Atômico 8, Símbolo O e nós respiramos a cada segundo para viver?',
    dica: 'Entra pelo nosso nariz nos pulmões e é produzido pelas árvores.',
    respostaCorretaSimbolo: 'O',
    opcoes: ['N', 'O', 'Cl', 'F'],
    explicacao: 'O Oxigênio (O) tem Número Atômico 8 e Massa 16. Ele é essencial para nossa respiração.'
  },
  {
    id: 6,
    pergunta: 'Qual elemento tem Número Atômico 20, Símbolo Ca e está no leite para deixar nossos ossos e dentes fortes?',
    dica: 'Bebemos no leite e queijo para os dentes não quebrarem.',
    respostaCorretaSimbolo: 'Ca',
    opcoes: ['Fe', 'Ca', 'Mg', 'Zn'],
    explicacao: 'O Cálcio (Ca) tem Número Atômico 20 e Massa 40. Ele fortalece nossos ossos e dentes.'
  },
  {
    id: 7,
    pergunta: 'Qual elemento tem Número Atômico 26, Símbolo Fe e nós comemos no feijão para dar força ao nosso sangue?',
    dica: 'Dá cor vermelha ao sangue e também faz pregos e portões de aço.',
    respostaCorretaSimbolo: 'Fe',
    opcoes: ['Cu', 'Fe', 'Ag', 'Au'],
    explicacao: 'O Ferro (Fe) tem Número Atômico 26 e Massa 56. É o ferro que transporta oxigênio pelo nosso corpo no sangue!'
  },
  {
    id: 8,
    pergunta: 'Qual elemento tem Número Atômico 29, Símbolo Cu e forma os fios alaranjados de eletricidade da parede?',
    dica: 'Conduz eletricidade até as tomadas e tem cor avermelhada alaranjada.',
    respostaCorretaSimbolo: 'Cu',
    opcoes: ['Al', 'Cu', 'Ag', 'Pb'],
    explicacao: 'O Cobre (Cu) tem Número Atômico 29 e Massa 64. É um excelente condutor elétrico.'
  },
  {
    id: 9,
    pergunta: 'Qual elemento tem Número Atômico 79, Símbolo Au e faz as medalhas brilhantes de primeiro lugar?',
    dica: 'É um metal dourado e precioso com símbolo Au.',
    respostaCorretaSimbolo: 'Au',
    opcoes: ['Ag', 'Pt', 'Au', 'Ti'],
    explicacao: 'O Ouro (Au) tem Número Atômico 79 e Massa 197. Ele é dourado, brilhante e não enferruja!'
  },
  {
    id: 10,
    pergunta: 'Qual elemento tem Número Atômico 95, Símbolo Am e fica no alarme de fumaça do teto para nos proteger?',
    dica: 'Fica no detector de fumaça branco das escolas e shoppings.',
    respostaCorretaSimbolo: 'Am',
    opcoes: ['U', 'Am', 'Pu', 'Og'],
    explicacao: 'O Amerício (Am) tem Número Atômico 95 e Massa 243. Ele avisa se houver fumaça nos prédios.'
  }
];

export const QUIZ_PERGUNTAS = PERGUNTAS_QUIZ;
