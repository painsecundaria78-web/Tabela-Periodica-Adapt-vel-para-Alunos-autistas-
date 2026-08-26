export interface ChemicalElement {
  simbolo: string;
  nome: string;
  numAtomico: number;
  numeroMassa: number;
  categoria: 'Gases e Ar' | 'Metais do Dia a Dia' | 'Nosso Corpo e Saúde' | 'Tecnologia e Construção' | 'Vida e Natureza' | 'Ciência e Laboratório';
  familiaQuimica?: string;
  periodo?: number;
  grupo?: number;
  estadoFisico: 'Gás' | 'Sólido' | 'Líquido' | 'Sintético';
  comoAplicar: string;
  uso: string;
  curiosidade: string;
  ondeEsta: string[];
  corTema: string;
  imagemUrl: string;
  altImagem: string;
  icone: string;
}

export type CategoriaFiltro = 'todos' | 'Gases e Ar' | 'Metais do Dia a Dia' | 'Nosso Corpo e Saúde' | 'Tecnologia e Construção' | 'Vida e Natureza' | 'Ciência e Laboratório';

export type ModoVisualizacao = 'grade' | 'foco' | 'grupos' | 'quiz';

export interface QuizQuestion {
  id: number;
  pergunta: string;
  dica: string;
  respostaCorretaSimbolo: string;
  opcoes: string[];
  explicacao: string;
}
