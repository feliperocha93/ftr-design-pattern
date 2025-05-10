const Iterator = require('./Iterator')

class Products {
    constructor() {
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
    }

    getProducts() {
        return this.products
    }

    createIterator() {
        return new Iterator(this.products)
    }
}

module.exports = Products
