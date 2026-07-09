TÍTULO [DOCS / INSTALAÇÃO] – 2026-07-04

CENÁRIO: H1 DA PÁGINA DE INSTALAÇÃO

DADO QUE o usuário acessa a rota /docs/intro

QUANDO a página termina de carregar

ENTÃO o sistema deve:
- exibir o H1 "Installation"

STATUS DO TESTE

RESULTADO: Passa

---

CENÁRIO: A SIDEBAR MOSTRA A SEÇÃO "GETTING STARTED"

DADO QUE o usuário está na página de instalação

QUANDO observa a navegação lateral (sidebar)

ENTÃO o sistema deve:
- exibir a seção "Getting Started"

STATUS DO TESTE

RESULTADO: Passa
