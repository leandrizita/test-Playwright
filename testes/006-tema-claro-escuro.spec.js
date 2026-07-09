// Alternancia de tema claro/escuro pela navbar (Docusaurus color mode).
// O modo fica registrado no atributo data-theme do elemento <html>.
//
// Detalhe do site: o botao cicla entre tres estados (system -> light -> dark),
// entao um unico clique pode nao mudar o data-theme. Usamos expect.poll para
// clicar ate atingir cada modo, o que torna o teste robusto a esse ciclo.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome, temaAtual } from '../support/actions.js'

test.describe('Tema claro/escuro', () => {
  test('O botao de tema alterna o data-theme do <html>', async ({ page }) => {
    await irParaHome(page)
    const toggle = page.getByRole('button', { name: SITE.tema.toggleAria })

    // Clica ate ativar o modo escuro.
    await expect
      .poll(async () => {
        await toggle.click()
        return temaAtual(page)
      }, { message: 'ativar o tema escuro' })
      .toBe('dark')

    // Continua clicando ate voltar ao modo claro.
    await expect
      .poll(async () => {
        await toggle.click()
        return temaAtual(page)
      }, { message: 'voltar ao tema claro' })
      .toBe('light')
  })
})
