TÍTULO [BUSCA / ATALHO DE TECLADO] – 2026-07-04

TIPO: Teste manual exploratório (não automatizado)

CENÁRIO: ABRIR A BUSCA PELO ATALHO Ctrl+K / ⌘+K

DADO QUE o usuário está em qualquer página da documentação

QUANDO o usuário pressiona Ctrl+K (Windows/Linux) ou ⌘+K (macOS)

ENTÃO o sistema deve:
- abrir o modal de busca com o foco já no campo de digitação
- permitir navegar pelos resultados com as setas ↑/↓
- abrir o resultado selecionado ao pressionar Enter

OBSERVAÇÕES
- Não automatizado porque o atalho depende do sistema operacional e do foco
  do documento; validado manualmente em macOS e Windows.

RESULTADO: Passa (manual)
