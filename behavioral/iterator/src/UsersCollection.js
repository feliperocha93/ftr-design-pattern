const Iterator = require('./Iterator')

class Users {
    constructor() {
        this.users = []
    }

    addUser(user) {
        this.users.push(user)
    }

    getUsers() {
        return this.users
    }

    createIterator() {
        return new Iterator(this.users)
    }
}

module.exports = Users
