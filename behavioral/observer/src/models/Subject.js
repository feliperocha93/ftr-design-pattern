class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        throw new Error("addObserver method should be implemented in subclasses");
    }

    removeObserver(observer) {
        throw new Error("removeObserver method should be implemented in subclasses");
    }

    notifyObservers() {
        throw new Error("notifyObservers method should be implemented in subclasses");
    }
}

module.exports = Subject;
