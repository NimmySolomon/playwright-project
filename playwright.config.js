const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: process.env.BASE_URL || 'https://automationexercise.com',
  },
  reporter: 'html',
  projects: [
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})