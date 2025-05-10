class Observer {
    update() {
        throw new Error('Observer method "update" must be implemented');
    }
}

module.exports = Observer;
