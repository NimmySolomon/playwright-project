const { test, expect } = require('@playwright/test')

const testUsers = [
  {
    email: 'wrong1@test.com',
    password: 'wrongpass1',
    description: 'wrong email and password'
  },
  {
    email: 'wrong2@test.com',
    password: 'wrongpass2',
    description: 'another wrong email'
  },
  {
    email: 'invalidemail',
    password: 'pass123',
    description: 'invalid email format'
  },
]

for (const user of testUsers) {

  test(`login fails for → ${user.description}`, async ({ page }) => {

    await page.goto('https://automationexercise.com/login')
    await page.waitForTimeout(2000)

    await page.locator('[data-qa="login-email"]').fill(user.email)
    await page.locator('[data-qa="login-password"]').fill(user.password)
    await page.locator('[data-qa="login-button"]').click()
    await page.waitForTimeout(2000)

    // Check we are still on login page — means login failed!
    await expect(page).toHaveURL(/login/)
    console.log(`✅ Correctly rejected: ${user.description}`)

  })

}