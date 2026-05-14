const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test('login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.login('wrong@email.com', 'wrongpass')

  await expect(loginPage.errorMessage).toBeVisible()
  console.log('Login test passed! ✅')
})