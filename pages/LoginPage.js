class LoginPage {

  constructor(page) {
    // Store the page
    this.page = page

    // All selectors in ONE place
    this.emailInput    = page.locator('[data-qa="login-email"]')
    this.passwordInput = page.locator('[data-qa="login-password"]')
    this.loginButton   = page.locator('[data-qa="login-button"]')
    this.errorMessage = page.locator('.login-form').locator('p')
  }

  // Action 1 - go to login page
  async goto() {
    await this.page.goto('https://automationexercise.com/login')
    await this.page.waitForTimeout(2000)
  }

  // Action 2 - perform login
  async login(email, password) {
    await this.emailInput.fill(email)
    await this.page.waitForTimeout(500)
    await this.passwordInput.fill(password)
    await this.page.waitForTimeout(500)
    await this.loginButton.click()
    await this.page.waitForTimeout(2000)
  }

}

module.exports = { LoginPage }