TÍTULO [TEMA / PERSISTÊNCIA APÓS RELOAD] – 2026-07-04

TIPO: Teste manual exploratório (não automatizado)

CENÁRIO: O TEMA ESCOLHIDO PERSISTE ENTRE VISITAS

DADO QUE o usuário alternou o tema para escuro

QUANDO o usuário recarrega a página (F5)
E abre uma nova página da documentação

ENTÃO o sistema deve:
- manter o tema escuro (preferência salva em localStorage)

OBSERVAÇÕES
- Cobre a persistência da preferência, complementando o teste automatizado
  006 que valida apenas a alternância imediata.

RESULTADO: Passa (manual)
