class HomePage {

  constructor(page) {
    this.page = page

    // All selectors for home/products page
    this.searchInput  = page.locator('#search_product')
    this.searchButton = page.locator('#submit_search')
    this.products     = page.locator('.productinfo')
    this.productCards = page.locator('.product-image-wrapper')
    this.addToCart    = page.locator('.add-to-cart')
  }

  // Action 1 - go to products page
  async gotoProducts() {
    await this.page.goto('https://automationexercise.com/products')
    await this.page.waitForTimeout(2000)
  }

  // Action 2 - search for a product
  async searchProduct(name) {
    await this.searchInput.fill(name)
    await this.page.waitForTimeout(500)
    await this.searchButton.click()
    await this.page.waitForTimeout(2000)
  }

  // Action 3 - add first product to cart
  async addFirstProductToCart() {
    await this.productCards.first().hover()
    await this.page.waitForTimeout(500)
    await this.addToCart.first().click()
    await this.page.waitForTimeout(2000)
  }

  // Action 4 - get product count
  async getProductCount() {
    return await this.products.count()
  }

}

module.exports = { HomePage }