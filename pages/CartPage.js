class CartPage {

  constructor(page) {
    this.page = page

    // All selectors for cart page
    this.cartItems        = page.locator('.cart_product')
    this.continueShopping = page.locator('button:has-text("Continue Shopping")')
  }

  // Action 1 - go to cart page
  async goto() {
    await this.page.goto('https://automationexercise.com/view_cart')
    await this.page.waitForTimeout(2000)
  }

  // Action 2 - get number of items in cart
  async getItemCount() {
    return await this.cartItems.count()
  }

  // Action 3 - continue shopping
  async continueShopping() {
    await this.continueShopping.click()
    await this.page.waitForTimeout(1000)
  }

}

module.exports = { CartPage }