const { test, expect } = require('@playwright/test')

test('take screenshots', async ({ page }) => {

  // Step 1 - Go to website
  await page.goto('https://automationexercise.com')
  await page.waitForTimeout(2000)

  // Step 2 - Take screenshot of full page
  await page.screenshot({ path: 'screenshots/homepage.png' })
  console.log('Homepage screenshot saved! 📸')

  // Step 3 - Go to products page
  await page.goto('https://automationexercise.com/products')
  await page.waitForTimeout(2000)

  // Step 4 - Take screenshot of products page
  await page.screenshot({ path: 'screenshots/products.png' })
  console.log('Products screenshot saved! 📸')

  // Step 5 - Take screenshot of just first product
  await page.locator('.product-image-wrapper').first().screenshot({
    path: 'screenshots/first-product.png'
  })
  console.log('First product screenshot saved! 📸')

  console.log('All screenshots done! ✅')
})