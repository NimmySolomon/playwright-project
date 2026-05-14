require('dotenv').config()
const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test('login using environment variables', async ({ page }) => {

  const loginPage = new LoginPage(page)

  // goto() now uses baseURL from .env automatically!
  await loginPage.goto()

  // Uses values from .env file — not hardcoded!
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  )

  console.log('Email used:', process.env.TEST_EMAIL)
  console.log('Base URL:', process.env.BASE_URL)

  await page.pause()
})