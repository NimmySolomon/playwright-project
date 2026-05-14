const { test, expect, request } = require('@playwright/test')

test('get all products from API', async () => {

  // Step 1 - Create API context (no browser needed!)
  const apiContext = await request.newContext()

  // Step 2 - Call the API
  const response = await apiContext.get(
    'https://automationexercise.com/api/productsList'
  )

  // Step 3 - Check status code is 200 (means success!)
  expect(response.status()).toBe(200)
  console.log('Status code:', response.status())

  // Step 4 - Read the response data
  const body = await response.json()
  console.log('Total products:', body.products.length)

  // Step 5 - Check products exist
  expect(body.products).toBeDefined()
  expect(body.products.length).toBeGreaterThan(0)

  console.log('API test passed! ✅')
})