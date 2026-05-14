const { test, expect } = require('@playwright/test')

test('search for a product', async ({ page }) => {

  // Step 1 - Go to products page
  await page.goto('https://automationexercise.com/products')
  await page.waitForTimeout(2000)

  // Step 2 - Type in search box
  await page.locator('#search_product').fill('T-Shirt')
  await page.waitForTimeout(1000)

  // Step 3 - Click search button
  await page.locator('#submit_search').click()
  await page.waitForTimeout(2000)

  // Step 4 - Check results appeared
  // NEW THING: count how many products are shown
  const products = page.locator('.productinfo')
  const count = await products.count()
  console.log('Products found:', count)

  // Step 5 - Check at least 1 product is shown
  expect(count).toBeGreaterThan(0)
  console.log('Search test passed!')

  await page.pause()
})