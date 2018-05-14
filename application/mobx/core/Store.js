import { action } from 'mobx';


class Store {

    constructor(object = {}) {
        for (const property in object) {
            this[property] = object[property];
        }
    }

    @action.bound
    set(object) {
        for (const property in object) {
            this[property] = object[property];
        }

        return this;
    }
}

export default Store;
