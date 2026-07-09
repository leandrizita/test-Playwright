// Seletor de linguagem da navbar: ao trocar para Python a URL passa a conter
// o prefixo /python (o site mantem uma versao da doc por linguagem).
//
// O rotulo "Node.js" aparece em dois lugares (o gatilho do dropdown e o item
// ativo dentro do menu), por isso miramos o gatilho pela classe navbar__link.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome, navbar } from '../support/actions.js'

test.describe('Seletor de linguagem', () => {
  test('Trocar para Python navega para a versao /python', async ({ page }) => {
    await irParaHome(page)

    // O dropdown do Docusaurus abre no hover; depois clicamos no item Python.
    await navbar(page)
      .locator('.navbar__link', { hasText: SITE.navbar.linguagem })
      .first()
      .hover()
    await navbar(page)
      .locator('a.dropdown__link', { hasText: 'Python' })
      .click()

    await expect(page).toHaveURL(/\/python\//)
  })
})
