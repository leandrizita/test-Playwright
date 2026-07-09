TÍTULO [HOME / HERO E CTA] – 2026-07-04

CENÁRIO: TÍTULO DA PÁGINA E HERO PRINCIPAL

DADO QUE o usuário acessa a home do playwright.dev

QUANDO a página termina de carregar

ENTÃO o sistema deve:
- exibir o título da aba contendo "Playwright"
- exibir o hero "Playwright enables reliable web automation..."

STATUS DO TESTE

RESULTADO: Passa

---

CENÁRIO: O BOTÃO "GET STARTED" LEVA PARA A DOCUMENTAÇÃO

DADO QUE o usuário está na home

QUANDO o usuário clica no botão "Get started"

ENTÃO o sistema deve:
- navegar para a rota /docs/intro
- exibir o H1 "Installation"

STATUS DO TESTE

RESULTADO: Passa
