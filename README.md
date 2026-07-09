# Suíte de Testes E2E — Playwright (playwright.dev)

Projeto de **portfólio de QA** com testes automatizados end-to-end usando
[Playwright](https://playwright.dev). A aplicação sob teste (AUT) é o próprio
**site oficial de documentação do Playwright** (`https://playwright.dev`) —
um alvo público, estável e ideal para demonstrar boas práticas de automação
sem depender de credenciais ou de um ambiente privado.

> A suíte é executada em três motores de navegador — **Chrome, Firefox e
> WebKit** — a partir do mesmo conjunto de specs.

## Propósito

Este repositório é um **modelo/vitrine para o GitHub**, criado por quem **já
atua como QA** e quer mostrar, na prática, um pouco do próprio trabalho e da
forma como pensa testes. Não é um tutorial de "primeiros passos" — é uma
amostra de como pode ser estruturado uma suíte de automação real: organização do código,
uso de seletores acessíveis, documentação dos cenários e integração contínua.

A ideia é servir como cartão de visitas técnico: qualquer pessoa (recrutador,
tech lead ou colega de time) consegue clonar, rodar e entender rapidamente as
decisões de automação — usando um alvo público e estável para que o foco fique
na **qualidade dos testes**, e não na aplicação em si.

## O que este projeto demonstra

- Seletores acessíveis com `getByRole` (padrão recomendado pelo Playwright)
- Catálogo central de rotas/textos/seletores em [`support/site.js`](support/site.js)
- Helpers reutilizáveis em [`support/actions.js`](support/actions.js)
- Execução paralela e *cross-browser*
- Documentação de cada cenário no formato Gherkin (DADO / QUANDO / ENTÃO)
- Integração contínua no GitHub Actions com relatório HTML como artifact

## Requisitos

- Node.js 18+

## Instalação

```bash
npm install
npx playwright install
```

## Configuração (opcional)

Por padrão os testes apontam para `https://playwright.dev`. Para sobrescrever
(por exemplo, apontar para um build local), copie o `.env.example`:

```bash
cp .env.example .env
# edite BASE_URL
```

## Rodando os testes

```bash
npm test                       # toda a suíte (headless, nos 3 navegadores)
npm run test:chromium          # apenas Chromium (mais rápido)
npm run test:headed            # com o navegador visível
npm run test:ui                # modo UI interativo do Playwright
npm run report                 # abre o último relatório HTML
```

Rodar um arquivo específico ou filtrar por título:

```bash
npx playwright test tests/001-home-hero.spec.js
npx playwright test -g "Get started"
```

## Cenários automatizados

| #   | Arquivo                          | Cenário                                                      |
| --- | -------------------------------- | ----------------------------------------------------------- |
| 001 | `001-home-hero.spec.js`          | Título da home, hero e CTA "Get started" → /docs/intro      |
| 002 | `002-navegacao-navbar.spec.js`   | Navegação pela navbar (Docs e API)                          |
| 003 | `003-docs-instalacao.spec.js`    | H1 "Installation" e sidebar "Getting Started"               |
| 004 | `004-docs-paginacao.spec.js`     | Paginação "Next": Installation → Writing tests              |
| 005 | `005-busca.spec.js`              | Busca (DocSearch): pesquisa e fechamento com Escape         |
| 006 | `006-tema-claro-escuro.spec.js`  | Alternância de tema claro/escuro (`data-theme`)             |
| 007 | `007-seletor-linguagem.spec.js`  | Seletor de linguagem: Node.js → Python (/python)            |
| 008 | `008-links-externos.spec.js`     | Link do GitHub aponta para o repositório oficial            |
| 009 | `009-responsivo-mobile.spec.js`  | Menu hambúrguer em viewport mobile                          |

A documentação Gherkin de cada cenário fica em [`testes-automatizados/`](testes-automatizados/).
Cenários exploratórios validados manualmente ficam em [`testes-manuais/`](testes-manuais/).

## Estrutura do projeto

```
.
├── .github/workflows/playwright.yml   # CI: push, PR, nightly e manual
├── playwright.config.js               # 3 navegadores, relatório HTML, traces
├── support/
│   ├── site.js                        # rotas, textos e seletores centralizados
│   └── actions.js                     # helpers de navegação e estado
├── tests/                             # specs automatizados (.spec.js)
├── testes-automatizados/              # documentação Gherkin dos specs
└── testes-manuais/                    # cenários exploratórios manuais
```

## Relatórios

Após a execução, o relatório HTML fica em `playwright-report/` (`npm run report`).
Em caso de falha são guardados *screenshot* e *trace* em `test-results/`:

```bash
npx playwright show-trace test-results/<pasta-do-teste>/trace.zip
```

## Mais sobre o Playwright

- [Documentação oficial](https://playwright.dev/docs/intro)
- [Escrevendo testes](https://playwright.dev/docs/writing-tests)
- [Localizadores (getByRole)](https://playwright.dev/docs/locators)
- [Configuração](https://playwright.dev/docs/test-configuration)# test-Playwright
