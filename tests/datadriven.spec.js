const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

// Test data — list of users to test
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
    email: 'invalid-email',    
    password: 'pass123',     
    description: 'invalid email format'
  },
]

// ONE test runs for EACH user in the list!
for (const user of testUsers) {

  test(`login fails for → ${user.description}`, async ({ page }) => {

    const loginPage = new LoginPage(page)

    // Go to login page
    await loginPage.goto()

    // Try to login with this user's details
    await loginPage.login(user.email, user.password)

    // All should fail — check error message
    await expect(loginPage.errorMessage).toBeVisible()
    console.log(`✅ Correctly rejected: ${user.description}`)

  })

}