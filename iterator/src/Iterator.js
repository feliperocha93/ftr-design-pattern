class Iterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.array.length;
    }

    next() {
        const item = this.array[this.index];
        this.index++;
        return item;
    }

    hasPrevious() {
        return this.index > 0;
    }

    previous() {
        this.index--;
        return this.array[this.index];
    }


}

module.exports = Iterator;
