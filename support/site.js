/**
 * Catalogo central de rotas, textos e seletores do site playwright.dev.
 *
 * O site e gerado com Docusaurus, entao a maioria dos elementos e acessivel
 * por ROLE + NOME (padrao recomendado pelo proprio Playwright). Onde nao ha
 * role estavel, caimos em classes especificas do Docusaurus (navbar, sidebar,
 * paginacao e o modal de busca Algolia/DocSearch).
 *
 * Centralizar aqui evita seletores espalhados pelos specs e facilita a
 * manutencao quando o layout do site muda.
 */
export const SITE = {
  rotas: {
    home: '/',
    docsIntro: '/docs/intro',
    docsWritingTests: '/docs/writing-tests',
  },

  textos: {
    // Titulo grande do hero na home.
    heroTitulo: /Playwright enables reliable web automation/i,
    // Botao principal de call-to-action do hero.
    ctaComecar: 'Get started',
    // H1 da pagina para onde o CTA leva (/docs/intro).
    docsInstalacaoH1: 'Installation',
    // Rotulo da paginacao "Next" no rodape da doc de instalacao.
    docsProximo: /Writing tests/i,
  },

  navbar: {
    root: 'nav.navbar',
    docsLink: 'Docs',
    apiLink: 'API',
    // Item do seletor de linguagem (Node.js / Python / Java / .NET).
    linguagem: 'Node.js',
    // aria-label do botao hamburguer no layout mobile.
    toggleMobile: 'Toggle navigation bar',
  },

  busca: {
    // aria-label do botao que abre o modal de busca (DocSearch).
    botao: /search/i,
    // Classes do modal Algolia/DocSearch.
    input: '.DocSearch-Input',
    hit: '.DocSearch-Hit',
  },

  tema: {
    // aria-label do botao de alternancia de tema (Docusaurus color mode).
    toggleAria: /Switch between dark and light mode/i,
    atributo: 'data-theme',
  },

  github: {
    // O link do GitHub na navbar deve apontar para o repositorio oficial.
    hrefContem: 'github.com/microsoft/playwright',
  },
}
