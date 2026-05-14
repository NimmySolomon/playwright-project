const { test, expect } = require('@playwright/test')

test('register new account', async ({ page }) => {

  // Step 1 - Go to login page (register is also here)
  await page.goto('https://automationexercise.com/login')
  await page.waitForTimeout(2000)

  // Step 2 - Fill name
  await page.locator('[data-qa="signup-name"]').fill('Nimmy')
  await page.waitForTimeout(1000)

  // Step 3 - Fill email (use a unique email every time!)
  await page.locator('[data-qa="signup-email"]').fill('nimmy12@gmail.com')
  await page.waitForTimeout(1000)

  // Step 4 - Click Signup button
  await page.locator('[data-qa="signup-button"]').click()
  await page.waitForTimeout(2000)

  // Step 5 - Fill account details
  await page.locator('[data-qa="password"]').fill('Test@12')
  await page.waitForTimeout(1000)

  // Step 6 - Fill first name
  await page.locator('[data-qa="first_name"]').fill('Nimmy')
  await page.waitForTimeout(1000)

  // Step 7 - Fill last name
  await page.locator('[data-qa="last_name"]').fill('Solomon')
  await page.waitForTimeout(1000)

  // Step 8 - Fill address
  await page.locator('[data-qa="address"]').fill('Kerala, India')
  await page.waitForTimeout(1000)

  // Step 9 - Select country
  await page.locator('[data-qa="country"]').selectOption('India')
  await page.waitForTimeout(1000)

  // Step 10 - Fill city/State
  await page.locator('[data-qa="city"]').fill('Alappuzha')
  await page.waitForTimeout(1000)
   await page.locator('[data-qa="state"]').fill('Kerala')
  await page.waitForTimeout(1000)

  // Step 11 - Fill zipcode
  await page.locator('[data-qa="zipcode"]').fill('682001')
  await page.waitForTimeout(1000)

  // Step 12 - Fill mobile number
  await page.locator('[data-qa="mobile_number"]').fill('9876543210')
  await page.waitForTimeout(1000)

  // Step 13 - Click Create Account button
  await page.locator('[data-qa="create-account"]').click()
  await page.waitForTimeout(2000)

  // Step 14 - Check if account created successfully
  await expect(page.locator('[data-qa="account-created"]')).toBeVisible()
  console.log('Account created successfully! ✅')

  await page.pause()
})