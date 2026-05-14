const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

test('login with wrong credentials', async ({ page }) => {

  // Step 1 - Create LoginPage object
  const loginPage = new LoginPage(page)

  // Step 2 - Go to login page
  await loginPage.goto()

  // Step 3 - Try login with wrong details
  await loginPage.login('wrong@email.com', 'wrongpass')

  // Step 4 - Check error message appears
  await expect(loginPage.errorMessage).toBeVisible()
  console.log('POM login test passed! ✅')

  await page.pause()
})