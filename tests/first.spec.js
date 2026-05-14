/* const { test, expect } = require('@playwright/test')

test('my first test', async ({ page }) => {
  console.log('Opening browser...')
  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' })
  console.log('Page loaded!')
  await page.waitForTimeout(60000)    // Stay on page for 3 seconds
  await expect(page).toHaveTitle('Example Domain')
  console.log('Test passed!')
}) */

//import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test')

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/login')
  
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('nimmy@test.qa')
  await page.waitForTimeout(1000)
  
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@pass')
  await page.waitForTimeout(1000)

  await page.getByRole('button', { name: 'Login' }).click()
  await page.waitForTimeout(2000);
  await page.pause()
});