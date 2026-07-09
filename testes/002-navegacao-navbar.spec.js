// Navegacao pelos principais itens da navbar do topo.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome, navbar } from '../support/actions.js'

test.describe('Navegacao - Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await irParaHome(page)
  })

  test('O link "Docs" abre a documentacao', async ({ page }) => {
    await navbar(page)
      .getByRole('link', { name: SITE.navbar.docsLink, exact: true })
      .click()
    await expect(page).toHaveURL(/\/docs\//)
  })

  test('O link "API" abre a referencia da API', async ({ page }) => {
    await navbar(page)
      .getByRole('link', { name: SITE.navbar.apiLink, exact: true })
      .click()
    await expect(page).toHaveURL(/\/docs\/api\//)
  })
})
