export interface ElementColorTheme {
  bg: string;
  borderBottom: string;
  ring: string;
  badgeBg: string;
  badgeBorder: string;
  shadowColor: string;
}

export const CATEGORY_THEMES: Record<string, ElementColorTheme> = {
  'Gases e Ar': {
    bg: 'bg-purple-600 text-white',
    borderBottom: 'border-purple-800',
    ring: 'ring-purple-300',
    badgeBg: 'bg-purple-100 text-purple-800',
    badgeBorder: 'border-purple-500',
    shadowColor: 'shadow-purple-200',
  },
  'Metais do Dia a Dia': {
    bg: 'bg-orange-500 text-white',
    borderBottom: 'border-orange-700',
    ring: 'ring-orange-300',
    badgeBg: 'bg-orange-100 text-orange-800',
    badgeBorder: 'border-orange-500',
    shadowColor: 'shadow-orange-200',
  },
  'Nosso Corpo e Saúde': {
    bg: 'bg-emerald-600 text-white',
    borderBottom: 'border-emerald-800',
    ring: 'ring-emerald-300',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    badgeBorder: 'border-emerald-500',
    shadowColor: 'shadow-emerald-200',
  },
  'Tecnologia e Construção': {
    bg: 'bg-sky-600 text-white',
    borderBottom: 'border-sky-800',
    ring: 'ring-sky-300',
    badgeBg: 'bg-sky-100 text-sky-800',
    badgeBorder: 'border-sky-500',
    shadowColor: 'shadow-sky-200',
  },
  'Vida e Natureza': {
    bg: 'bg-pink-600 text-white',
    borderBottom: 'border-pink-800',
    ring: 'ring-pink-300',
    badgeBg: 'bg-pink-100 text-pink-800',
    badgeBorder: 'border-pink-500',
    shadowColor: 'shadow-pink-200',
  },
  'Ciência e Laboratório': {
    bg: 'bg-violet-600 text-white',
    borderBottom: 'border-violet-800',
    ring: 'ring-violet-300',
    badgeBg: 'bg-violet-100 text-violet-800',
    badgeBorder: 'border-violet-500',
    shadowColor: 'shadow-violet-200',
  },
};

export const ELEMENT_COLOR_THEMES: Record<string, ElementColorTheme> = {
  H: {
    bg: 'bg-blue-500 text-white',
    borderBottom: 'border-blue-700',
    ring: 'ring-blue-300',
    badgeBg: 'bg-blue-100 text-blue-800',
    badgeBorder: 'border-blue-500',
    shadowColor: 'shadow-blue-200',
  },
  He: {
    bg: 'bg-purple-500 text-white',
    borderBottom: 'border-purple-700',
    ring: 'ring-purple-300',
    badgeBg: 'bg-purple-100 text-purple-800',
    badgeBorder: 'border-purple-500',
    shadowColor: 'shadow-purple-200',
  },
  Li: {
    bg: 'bg-sky-500 text-white',
    borderBottom: 'border-sky-700',
    ring: 'ring-sky-300',
    badgeBg: 'bg-sky-100 text-sky-800',
    badgeBorder: 'border-sky-500',
    shadowColor: 'shadow-sky-200',
  },
  C: {
    bg: 'bg-pink-500 text-white',
    borderBottom: 'border-pink-700',
    ring: 'ring-pink-300',
    badgeBg: 'bg-pink-100 text-pink-800',
    badgeBorder: 'border-pink-500',
    shadowColor: 'shadow-pink-200',
  },
  N: {
    bg: 'bg-teal-500 text-white',
    borderBottom: 'border-teal-700',
    ring: 'ring-teal-300',
    badgeBg: 'bg-teal-100 text-teal-800',
    badgeBorder: 'border-teal-500',
    shadowColor: 'shadow-teal-200',
  },
  O: {
    bg: 'bg-rose-500 text-white',
    borderBottom: 'border-rose-700',
    ring: 'ring-rose-300',
    badgeBg: 'bg-rose-100 text-rose-800',
    badgeBorder: 'border-rose-500',
    shadowColor: 'shadow-rose-200',
  },
  F: {
    bg: 'bg-yellow-500 text-slate-900',
    borderBottom: 'border-yellow-700',
    ring: 'ring-yellow-300',
    badgeBg: 'bg-yellow-100 text-yellow-900',
    badgeBorder: 'border-yellow-500',
    shadowColor: 'shadow-yellow-200',
  },
  Ne: {
    bg: 'bg-amber-500 text-white',
    borderBottom: 'border-amber-700',
    ring: 'ring-amber-300',
    badgeBg: 'bg-amber-100 text-amber-800',
    badgeBorder: 'border-amber-500',
    shadowColor: 'shadow-amber-200',
  },
  Na: {
    bg: 'bg-amber-500 text-white',
    borderBottom: 'border-amber-700',
    ring: 'ring-amber-300',
    badgeBg: 'bg-amber-100 text-amber-800',
    badgeBorder: 'border-amber-500',
    shadowColor: 'shadow-amber-200',
  },
  Mg: {
    bg: 'bg-emerald-500 text-white',
    borderBottom: 'border-emerald-700',
    ring: 'ring-emerald-300',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    badgeBorder: 'border-emerald-500',
    shadowColor: 'shadow-emerald-200',
  },
  Al: {
    bg: 'bg-cyan-500 text-white',
    borderBottom: 'border-cyan-700',
    ring: 'ring-cyan-300',
    badgeBg: 'bg-cyan-100 text-cyan-800',
    badgeBorder: 'border-cyan-500',
    shadowColor: 'shadow-cyan-200',
  },
  Si: {
    bg: 'bg-indigo-500 text-white',
    borderBottom: 'border-indigo-700',
    ring: 'ring-indigo-300',
    badgeBg: 'bg-indigo-100 text-indigo-800',
    badgeBorder: 'border-indigo-500',
    shadowColor: 'shadow-indigo-200',
  },
  P: {
    bg: 'bg-red-500 text-white',
    borderBottom: 'border-red-700',
    ring: 'ring-red-300',
    badgeBg: 'bg-red-100 text-red-800',
    badgeBorder: 'border-red-500',
    shadowColor: 'shadow-red-200',
  },
  S: {
    bg: 'bg-yellow-500 text-slate-900',
    borderBottom: 'border-yellow-700',
    ring: 'ring-yellow-300',
    badgeBg: 'bg-yellow-100 text-yellow-900',
    badgeBorder: 'border-yellow-500',
    shadowColor: 'shadow-yellow-200',
  },
  Cl: {
    bg: 'bg-lime-600 text-white',
    borderBottom: 'border-lime-800',
    ring: 'ring-lime-300',
    badgeBg: 'bg-lime-100 text-lime-800',
    badgeBorder: 'border-lime-600',
    shadowColor: 'shadow-lime-200',
  },
  K: {
    bg: 'bg-yellow-400 text-slate-900',
    borderBottom: 'border-yellow-600',
    ring: 'ring-yellow-200',
    badgeBg: 'bg-yellow-100 text-yellow-900',
    badgeBorder: 'border-yellow-500',
    shadowColor: 'shadow-yellow-200',
  },
  Ca: {
    bg: 'bg-blue-600 text-white',
    borderBottom: 'border-blue-800',
    ring: 'ring-blue-300',
    badgeBg: 'bg-blue-100 text-blue-800',
    badgeBorder: 'border-blue-500',
    shadowColor: 'shadow-blue-200',
  },
  Fe: {
    bg: 'bg-orange-500 text-white',
    borderBottom: 'border-orange-700',
    ring: 'ring-orange-300',
    badgeBg: 'bg-orange-100 text-orange-800',
    badgeBorder: 'border-orange-500',
    shadowColor: 'shadow-orange-200',
  },
  Cu: {
    bg: 'bg-orange-600 text-white',
    borderBottom: 'border-orange-800',
    ring: 'ring-orange-300',
    badgeBg: 'bg-orange-100 text-orange-800',
    badgeBorder: 'border-orange-600',
    shadowColor: 'shadow-orange-200',
  },
  Zn: {
    bg: 'bg-indigo-600 text-white',
    borderBottom: 'border-indigo-800',
    ring: 'ring-indigo-300',
    badgeBg: 'bg-indigo-100 text-indigo-800',
    badgeBorder: 'border-indigo-500',
    shadowColor: 'shadow-indigo-200',
  },
  Ag: {
    bg: 'bg-slate-500 text-white',
    borderBottom: 'border-slate-700',
    ring: 'ring-slate-300',
    badgeBg: 'bg-slate-100 text-slate-800',
    badgeBorder: 'border-slate-500',
    shadowColor: 'shadow-slate-200',
  },
  Au: {
    bg: 'bg-yellow-500 text-slate-900',
    borderBottom: 'border-yellow-700',
    ring: 'ring-yellow-300',
    badgeBg: 'bg-yellow-100 text-yellow-900',
    badgeBorder: 'border-yellow-500',
    shadowColor: 'shadow-yellow-200',
  },
  Am: {
    bg: 'bg-amber-600 text-white',
    borderBottom: 'border-amber-800',
    ring: 'ring-amber-300',
    badgeBg: 'bg-amber-100 text-amber-800',
    badgeBorder: 'border-amber-500',
    shadowColor: 'shadow-amber-200',
  },
  U: {
    bg: 'bg-lime-600 text-white',
    borderBottom: 'border-lime-800',
    ring: 'ring-lime-300',
    badgeBg: 'bg-lime-100 text-lime-800',
    badgeBorder: 'border-lime-600',
    shadowColor: 'shadow-lime-200',
  },
  Og: {
    bg: 'bg-purple-700 text-white',
    borderBottom: 'border-purple-900',
    ring: 'ring-purple-300',
    badgeBg: 'bg-purple-100 text-purple-800',
    badgeBorder: 'border-purple-500',
    shadowColor: 'shadow-purple-200',
  },
};

export function getElementTheme(simbolo: string, categoria?: string): ElementColorTheme {
  if (ELEMENT_COLOR_THEMES[simbolo]) {
    return ELEMENT_COLOR_THEMES[simbolo];
  }
  if (categoria && CATEGORY_THEMES[categoria]) {
    return CATEGORY_THEMES[categoria];
  }
  return {
    bg: 'bg-indigo-500 text-white',
    borderBottom: 'border-indigo-700',
    ring: 'ring-indigo-300',
    badgeBg: 'bg-indigo-100 text-indigo-700',
    badgeBorder: 'border-indigo-500',
    shadowColor: 'shadow-indigo-200',
  };
}
