TÍTULO [BUSCA / DOCSEARCH] – 2026-07-04

CENÁRIO: PESQUISAR UM TERMO RETORNA RESULTADOS

DADO QUE o usuário está na home
E abriu o modal de busca

QUANDO o usuário digita "assertions" no campo de busca

ENTÃO o sistema deve:
- exibir ao menos um resultado de busca

STATUS DO TESTE

RESULTADO: Passa

---

CENÁRIO: O MODAL DE BUSCA FECHA COM ESCAPE

DADO QUE o modal de busca está aberto

QUANDO o usuário pressiona a tecla Escape

ENTÃO o sistema deve:
- fechar o modal (o campo de busca deixa de estar visível)

STATUS DO TESTE

RESULTADO: Passa
