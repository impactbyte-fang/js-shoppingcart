class Cart {
  constructor(products) {
    this.products = products || []
  }

  addProduct(newProduct) {
    let found = 0
    let newProducts = []

    newProducts = this.products
      .filter(product => {
        return product.name === newProduct.name
      })
      .map(product => {
        found = 1
        product.amount += newProduct.amount
        return product
      })

    if (found === 0) {
      newProducts = this.products.concat(newProduct)
      this.products = newProducts
    }
  }

  removeProduct(productToRemove) {
    const currentProducts = this.products.filter(product => {
      return product.name !== productToRemove.name
    })

    this.products = currentProducts
  }

  showCart() {
    console.log(this.products)
  }
}

const cart = new Cart([])

cart.addProduct({
  name: "White Cap",
  amount: 2
})

cart.addProduct({
  name: "Red Shoes",
  amount: 1
})

cart.addProduct({
  name: "Red Shoes",
  amount: 4
})

cart.addProduct({
  name: "Red Shoes",
  amount: 2
})

cart.addProduct({
  name: "Black Shirt",
  amount: 3
})

cart.removeProduct({
  name: "Black Shirt"
})

cart.removeProduct({
  name: "Green Jacket"
})

cart.showCart()
