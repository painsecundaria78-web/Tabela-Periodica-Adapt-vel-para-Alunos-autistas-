# 🧪 Tabela Periódica Inclusiva & Acessível

Uma aplicação web educacional, interativa e inclusiva, desenvolvida para o ensino dos **118 elementos químicos** e suas **famílias/grupos** da Tabela Periódica, adaptada com recursos de acessibilidade universal para alunos do Ensino Médio, com atenção especial para estudantes autistas (**TEA nível 3 de suporte**), pessoas com baixa visão, dislexia e mediadores pedagógicos.

---

## 🌟 Principais Recursos e Diferenciais

### 1. ♿ Acessibilidade e Inclusão Universal
- **🔊 Síntese de Voz (TTS) em Português**: Leitura em voz alta com velocidade ajustável (Lenta / Normal), opção de leitura automática ao selecionar elementos e botão de parada rápida.
- **🌓 Alto Contraste**: Tema de alto contraste preto com amarelo e ciano, atendendo aos padrões de legibilidade WCAG.
- **🔤 Leitura Facilitada (Dislexia)**: Fonte com espaçamento entre caracteres e altura de linha calculados para facilitar a leitura.
- **🔍 Controle de Tamanho de Fonte**: Botões rápidos `A+` e `A-` para adaptar o tamanho dos textos de 14px até 28px.
- **🖥️ Widescreen & Tela Cheia**: Layout otimizado para computadores de sala de aula e laboratório, com botão de tela cheia para evitar distrações de abas ou janelas externas.
- **⌨️ Navegação Completa por Teclado**:
  - `←` (Seta Esquerda): Elemento anterior
  - `→` (Seta Direita): Próximo elemento
  - `Espaço`: Ouvir ou pausar a narração em voz alta
  - `Esc`: Parar o áudio imediatamente

### 2. ⚛️ Catálogo Completo dos 118 Elementos Químicos
- Todos os 118 elementos químicos cadastrados com:
  - **Número Atômico (Z)**
  - **Símbolo Oficial**
  - **Número de Massa (A)**
  - **Família / Grupo Químico**
  - **Como Aplicar** (linguagem direta, prática e sem jargões confusos)
  - **Onde Está no Dia a Dia** (exemplos concretos e palpáveis: celular, leite, sal, lâmpada, aviões)
  - **Curiosidade Fácil**
  - **Pictograma e Fotografia Ilustrativa**

### 3. 🔍 Modo Foco (1 Elemento Gigante por Vez)
- Modo desenvolvido especificamente para evitar sobrecarga sensorial e cognitiva.
- Oculta a grade de 118 botões e exibe apenas um elemento em destaque com botões táteis grandes de **"⬅️ Anterior"** e **"Próximo ➡️"** e barra de progresso visual.

### 4. 🏛️ Guia das Famílias e Grupos
- Explicação lúdica das 18 colunas da Tabela Periódica com analogias concretas do cotidiano:
  - 🔋 *Família das Baterias (Alcalinos)*
  - 🦴 *Família dos Ossos Fortes (Alcalino-terrosos)*
  - 🪙 *Metais Fortes e Estruturas (Transição)*
  - 🥫 *Família das Latinhas (Grupo do Boro/Alumínio)*
  - 💻 *Família dos Chips e da Vida (Grupo do Carbono/Silício)*
  - 🌱 *Família das Plantas e do Ar (Pnictogênios)*
  - 🫁 *Família da Respiração (Calcogênios)*
  - 🧼 *Família da Limpeza (Halogênios)*
  - 🎈 *Família dos Balões e Luzes (Gases Nobres)*
  - 📱 *Família das Telas e Fones (Lantanídeos)*
  - 🚀 *Família da Super Energia (Actinídeos)*

### 5. 🧩 Desafio do Cotidiano (Quiz Dinâmico com Perguntas Aleatórias)
- **Sorteio Dinâmico**: A cada atualização da página ou reinício da partida, novas perguntas são sorteadas aleatoriamente a partir de um banco com dezenas de cenários do dia a dia e dos 118 elementos.
- Botão **"🎲 Sortear Outras"** para renovar as questões a qualquer instante.
- Dicas, opções de resposta em cartões coloridos e feedback por voz com explicações educativas.

### 6. 📘 Guia Pedagógico Integrado
- Orientações práticas para professores e mediadores escolares sobre como conduzir atividades didáticas inclusivas com a aplicação.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca para interfaces declarativas e reativas.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior confiabilidade.
- **[Tailwind CSS](https://tailwindcss.com/)**: Estilização moderna, responsiva e acessível.
- **[Vite](https://vite.dev/)**: Build tool ultrarrápido para desenvolvimento frontend.
- **[Lucide React](https://lucide.dev/)**: Conjunto de ícones vetoriais modernos.
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)**: Síntese de voz nativa do navegador (TTS em Português).

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/) / [bun](https://bun.sh/)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/tabela-periodica-inclusiva.git
   cd tabela-periodica-inclusiva
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   Acesse `http://localhost:3000` (ou o endereço indicado no terminal).

---

## 📦 Como Gerar a Versão de Produção (Build)

Para compilar o projeto para publicação em qualquer hospedagem estática (GitHub Pages, Vercel, Netlify, Firebase Hosting, Cloud Run):

```bash
npm run build
```

Os arquivos prontos e otimizados serão gerados na pasta `dist/`.

Para testar a versão de produção localmente:
```bash
npm run preview
```

---

## 🌐 Publicação no GitHub Pages (Opcional)

1. Adicione a biblioteca `gh-pages` como dependência de desenvolvimento (se desejar deploy automático):
   ```bash
   npm install -D gh-pages
   ```
2. Adicione os scripts no `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Execute o deploy:
   ```bash
   npm run deploy
   ```

---

## 📂 Estrutura de Pastas

```
tabela-periodica-inclusiva/
├── index.html                    # Ponto de entrada HTML com meta tags acessíveis
├── package.json                  # Dependências e scripts do projeto
├── tsconfig.json                 # Configurações do compilador TypeScript
├── vite.config.ts                # Configuração do Vite e Tailwind CSS
├── metadata.json                 # Metadados do projeto
├── README.md                     # Documentação completa
└── src/
    ├── main.tsx                  # Ponto de entrada React
    ├── App.tsx                   # Componente raiz com estados de acessibilidade e visualização
    ├── index.css                 # Estilos globais e temas de acessibilidade
    ├── types.ts                  # Interfaces e tipos TypeScript (ChemicalElement, QuizQuestion, etc.)
    ├── components/
    │   ├── AccessibilityBar.tsx      # Barra de acessibilidade (Voz, Contraste, Tamanho, Tela Cheia)
    │   ├── CategoryFilter.tsx        # Filtro de categorias temáticas
    │   ├── QuickGroupSelector.tsx    # Seletor rápido de famílias/colunas
    │   ├── ElementCard.tsx           # Cartão visual de cada elemento químico
    │   ├── ElementDetailsPanel.tsx   # Painel lateral detalhado com áudio e aplicações
    │   ├── SingleElementFocusView.tsx # Modo Foco (1 elemento gigante por vez)
    │   ├── GroupsExplorerSection.tsx # Guia das Famílias e Grupos explicados
    │   ├── QuizSection.tsx           # Desafio do Cotidiano com sorteio dinâmico
    │   └── PedagogicalGuide.tsx      # Guia pedagógico para professores e mediadores
    ├── data/
    │   ├── elements.ts               # União dos 118 elementos químicos
    │   ├── elementGroups.ts          # Definição e explicações simples dos 18 grupos
    │   ├── elements_1_30.ts          # Elementos do 1 (H) ao 30 (Zn)
    │   ├── elements_31_60.ts         # Elementos do 31 (Ga) ao 60 (Nd)
    │   ├── elements_61_90.ts         # Elementos do 61 (Pm) ao 90 (Th)
    │   └── elements_91_118.ts        # Elementos do 91 (Pa) ao 118 (Og)
    └── utils/
        ├── speech.ts                 # Utilitário de Síntese de Voz (Web Speech API)
        ├── theme.ts                  # Cores e temas de alto contraste por elemento/categoria
        └── quizGenerator.ts          # Gerador e sorteador aleatório de perguntas do quiz
```

---

## 🤝 Contribuições

Contribuições, sugestões de novos exemplos do cotidiano ou melhorias de acessibilidade são sempre bem-vindas! Sinta-se à vontade para abrir uma *Issue* ou enviar um *Pull Request*.

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
