const Subject = require("./Subject");

class Store extends Subject {
    constructor() {
        super();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.productAvailable));
    }

    newProduct() {
        console.log("New product available!");
        this.notifyObservers();
    }
}

module.exports = Store;
