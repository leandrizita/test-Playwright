// Paginacao inferior da doc: o botao "Next" avanca de Installation para
// Writing tests. Usamos a classe da paginacao do Docusaurus para nao colidir
// com o link de mesmo nome que existe tambem na sidebar (modo strict).
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'

test.describe('Docs - Paginacao', () => {
  test('O link "Next" avanca para "Writing tests"', async ({ page }) => {
    await page.goto(SITE.rotas.docsIntro)
    await page.locator('a.pagination-nav__link--next').click()
    await expect(page).toHaveURL(/\/docs\/writing-tests/)
    await expect(
      page.getByRole('heading', { level: 1, name: SITE.textos.docsProximo }),
    ).toBeVisible()
  })
})
