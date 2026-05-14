const { test, expect, request } = require('@playwright/test')

test('create new user via API', async () => {

  // Create API context
  const apiContext = await request.newContext()

  // Send POST request with new user data
  const response = await apiContext.post(
    'https://automationexercise.com/api/createAccount',
    {
      form: {
        name:           'Nimmy Solomon',
        email: 'nimmy' + Date.now() + '@test.com',
        password:       'Test@1234',
        title:          'Mrs',
        birth_date:     '1',
        birth_month:    '1',
        birth_year:     '2000',
        firstname:      'Nimmy',
        lastname:       'Thomas',
        company:        'Test Company',
        address1:       'Kerala India',
        address2:       '',
        country:        'India',
        zipcode:        '682001',
        state:          'Kerala',
        city:           'Kochi',
        mobile_number:  '9876543210',
      }
    }
  )

  // Check response
  expect(response.status()).toBe(200)
  const body = await response.json()
  console.log('Response:', body.message)
  expect(body.responseCode).toBe(201)
  console.log('User created via API! ✅')
})