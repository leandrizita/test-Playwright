import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

// Site publico alvo dos testes. Pode ser sobrescrito por BASE_URL no .env
// (util para apontar para um mirror ou build local da documentacao).
const BASE_URL = process.env.BASE_URL || 'https://playwright.dev'

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',

  // Site publico e estavel: da pra rodar em paralelo com seguranca.
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: process.env.CI ? 2 : 0,
  forbidOnly: !!process.env.CI,

  timeout: 60000,
  expect: { timeout: 15000 },

  reporter: [['html', { open: 'never' }], ['list']],

  use: {
    baseURL: BASE_URL,
    actionTimeout: 15000,
    navigationTimeout: 30000,
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'retain-on-failure',
  },

  // Mesma suite validada nos tres motores (Chromium, Firefox e WebKit).
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
})
