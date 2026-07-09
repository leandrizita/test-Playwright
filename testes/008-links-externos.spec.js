// Verifica o link externo do GitHub na navbar inspecionando o href, sem
// precisar sair do site nem abrir uma nova aba.
import { test, expect } from '@playwright/test'
import { SITE } from '../support/site.js'
import { irParaHome, navbar } from '../support/actions.js'

test.describe('Links externos', () => {
  test('O link do GitHub aponta para o repositorio oficial', async ({ page }) => {
    await irParaHome(page)

    const gh = navbar(page).locator(`a[href*="${SITE.github.hrefContem}"]`)
    await expect(gh.first()).toHaveAttribute(
      'href',
      new RegExp(SITE.github.hrefContem),
    )
  })
})
