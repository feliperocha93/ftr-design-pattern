const Users = require('./UsersCollection')
const Products = require('./ProductsCollection')

const users = new Users()

users.addUser({ name: 'Khabib Nurmagomedov', age: 35 })
users.addUser({ name: 'Jon Jones', age: 36 })
users.addUser({ name: 'Israel Adesanya', age: 34 })
users.addUser({ name: 'Amanda Nunes', age: 35 })
users.addUser({ name: 'Valentina Shevchenko', age: 35 })
users.addUser({ name: 'Daniel Cormier', age: 44 })

const iterator = users.createIterator()


while (iterator.hasNext()) {
    const user = iterator.next()
    console.log(`Name: ${user.name}, Age: ${user.age}`)
}

console.log('---')

while (iterator.hasPrevious()) {
    const user = iterator.previous()
    console.log(`Name: ${user.name}, Age: ${user.age}`)
}

console.log('---')

const products = new Products()

products.addProduct({ name: 'Boxing Gloves', price: 50 })
products.addProduct({ name: 'MMA Shorts', price: 40 })
products.addProduct({ name: 'Punching Bag', price: 120 })
products.addProduct({ name: 'Mouth Guard', price: 15 })
products.addProduct({ name: 'Headgear', price: 60 })

const productIterator = products.createIterator()

while (productIterator.hasNext()) {
    const product = productIterator.next()
    console.log(`Name: ${product.name}, Price: $${product.price}`)
}

console.log('---')

while (productIterator.hasPrevious()) {
    const product = productIterator.previous()
    console.log(`Name: ${product.name}, Price: $${product.price}`)
}
