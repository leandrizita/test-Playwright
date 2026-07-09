/**
 * Helpers compartilhados pelos specs: navegacao e leitura de estado do site.
 * Mantem os testes curtos e centraliza as esperas mais comuns.
 */
import { expect } from '@playwright/test'
import { SITE } from './site.js'

// Retorna o container da navbar (Docusaurus renderiza como <nav class="navbar">).
export function navbar(page) {
  return page.locator(SITE.navbar.root)
}

// Abre a home e garante que o hero principal ja apareceu antes de seguir.
export async function irParaHome(page) {
  await page.goto(SITE.rotas.home)
  await expect(
    page.getByRole('heading', { name: SITE.textos.heroTitulo }),
  ).toBeVisible()
}

// Le o tema atual do site ('light' | 'dark' | null) pelo atributo data-theme
// do elemento <html>, que o Docusaurus alterna ao trocar de modo.
export function temaAtual(page) {
  return page.locator('html').getAttribute(SITE.tema.atributo)
}
