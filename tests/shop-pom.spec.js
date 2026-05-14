const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/HomePage')
const { CartPage } = require('../pages/CartPage')

test('search product and add to cart', async ({ page }) => {

  // Use HomePage
  const homePage = new HomePage(page)

  // Step 1 - Go to products page
  await homePage.gotoProducts()

  // Step 2 - Search for a product
  await homePage.searchProduct('T-Shirt')

  // Step 3 - Check products found
  const count = await homePage.getProductCount()
  expect(count).toBeGreaterThan(0)
  console.log('Products found:', count)

  // Step 4 - Add first product to cart
  await homePage.addFirstProductToCart()

  // Step 5 - Click continue shopping
  await page.locator('button:has-text("Continue Shopping")').click()
  await page.waitForTimeout(1000)

  // Use CartPage
  const cartPage = new CartPage(page)

  // Step 6 - Go to cart
  await cartPage.goto()

  // Step 7 - Check cart has items
  const cartCount = await cartPage.getItemCount()
  expect(cartCount).toBeGreaterThan(0)
  console.log('Items in cart:', cartCount)
  console.log('Shop POM test passed! ✅')

  await page.pause()
})