const { test, expect } = require('@playwright/test')

test('add product to cart', async ({ page }) => {

  // Step 1 - Go to products page
  await page.goto('https://automationexercise.com/products')
  await page.waitForTimeout(2000)

  // Step 2 - Hover over first product
  // NEW THING: hover makes hidden buttons appear!
  await page.locator('.product-image-wrapper').first().hover()
  await page.waitForTimeout(1000)

  // Step 3 - Click Add to Cart
  await page.locator('.add-to-cart').first().click()
  await page.waitForTimeout(2000)

  // Step 4 - Click Continue Shopping
  await page.locator('button:has-text("Continue Shopping")').click()
  await page.waitForTimeout(1000)

  // Step 5 - Go to cart page
  await page.goto('https://automationexercise.com/view_cart')
  await page.waitForTimeout(2000)

  // Step 6 - Check product is in cart
  const cartItems = page.locator('.cart_product')
  const count = await cartItems.count()
  expect(count).toBeGreaterThan(0)
  console.log('Product added to cart!')

  await page.pause()
})