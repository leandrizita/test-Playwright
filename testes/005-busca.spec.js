// Busca da documentacao (Algolia DocSearch): abre o modal, pesquisa um termo
// e fecha com Escape.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome } from '../support/actions.js'

test.describe('Busca na documentacao', () => {
  test.beforeEach(async ({ page }) => {
    await irParaHome(page)
    await page.getByRole('button', { name: SITE.busca.botao }).first().click()
  })

  test('Pesquisar "assertions" retorna resultados', async ({ page }) => {
    const input = page.locator(SITE.busca.input)
    await expect(input).toBeVisible()
    await input.fill('assertions')
    await expect(page.locator(SITE.busca.hit).first()).toBeVisible()
  })

  test('O modal de busca fecha com Escape', async ({ page }) => {
    const input = page.locator(SITE.busca.input)
    await expect(input).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(input).toBeHidden()
  })
})
