// Verifica a home do playwright.dev: titulo da aba, hero principal e o
// call-to-action "Get started" levando para a documentacao.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome } from '../support/actions.js'

test.describe('Home - Hero e CTA', () => {
  test.beforeEach(async ({ page }) => {
    await irParaHome(page)
  })

  test('Exibe o titulo da pagina e o hero principal', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/)
    await expect(
      page.getByRole('heading', { name: SITE.textos.heroTitulo }),
    ).toBeVisible()
  })

  test('O botao "Get started" leva para a documentacao', async ({ page }) => {
    await page.getByRole('link', { name: SITE.textos.ctaComecar }).first().click()
    await expect(page).toHaveURL(/\/docs\/intro/)
    await expect(
      page.getByRole('heading', { level: 1, name: SITE.textos.docsInstalacaoH1 }),
    ).toBeVisible()
  })
})
