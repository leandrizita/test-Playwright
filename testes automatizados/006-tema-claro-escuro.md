TÍTULO [TEMA / CLARO E ESCURO] – 2026-07-04

CENÁRIO: ALTERNAR O TEMA DA PÁGINA

DADO QUE o usuário está na home
E o tema atual está registrado no atributo data-theme do <html>

QUANDO o usuário clica no botão de alternância de tema

ENTÃO o sistema deve:
- alterar o valor do atributo data-theme
- manter o valor entre "light" e "dark"

STATUS DO TESTE

RESULTADO: Passa
