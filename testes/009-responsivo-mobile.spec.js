// Comportamento responsivo: em viewport mobile a navbar colapsa num menu
// hamburguer que abre a navegacao lateral.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'

test.use({ viewport: { width: 390, height: 844 } })

test.describe('Responsivo - Mobile', () => {
  test('O menu hamburguer abre a navegacao lateral', async ({ page }) => {
    await page.goto(SITE.rotas.home)

    const hamburguer = page.getByRole('button', { name: SITE.navbar.toggleMobile })
    await expect(hamburguer).toBeVisible()
    await hamburguer.click()

    await expect(page.locator('.navbar-sidebar')).toBeVisible()
  })
})
