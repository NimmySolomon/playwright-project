const { test, expect } = require('@playwright/test')

test('login with valid credentials', async ({ page }) => {
  
  // Step 1 - Go to login page
  await page.goto('https://automationexercise.com/login')
  await page.waitForTimeout(2000)

  // Step 2 - Fill email
  await page.locator('[data-qa="login-email"]').fill('nimmy123@gmail.com')
  await page.waitForTimeout(1000)

  // Step 3 - Fill password
  await page.locator('[data-qa="login-password"]').fill('Test@123')
  await page.waitForTimeout(1000)

  // Step 4 - Click login button
  await page.locator('[data-qa="login-button"]').click()
  await page.waitForTimeout(2000)

  // Step 5 - Check if login failed (wrong credentials shows error)
  await expect(page.locator('p:has-text("Your email or password is incorrect")')).toBeVisible()

  await page.pause()
})