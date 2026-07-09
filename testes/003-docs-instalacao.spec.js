// Pagina de instalacao da documentacao: H1 correto e sidebar presente.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'

test.describe('Docs - Instalacao', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SITE.rotas.docsIntro)
  })

  test('Exibe o H1 "Installation"', async ({ page }) => {
    await expect(
      page.getByRole('heading', { level: 1, name: SITE.textos.docsInstalacaoH1 }),
    ).toBeVisible()
  })

  test('A sidebar mostra a secao "Getting Started"', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Getting Started' }),
    ).toBeVisible()
  })
})
