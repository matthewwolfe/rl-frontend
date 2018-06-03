import { action, observable } from 'mobx';
import Collection from './Collection';


class ObjectCollection extends Collection {

    @observable data = new Map();

    addNew(data, key = 'id') {
        const model = this.newInstance(data);
        this.set(model[key], model);

        return this;
    }

    @action.bound
    clear() {
        this.data = {};
        return this;
    }

    @action.bound
    delete(key) {
        this.data.delete(key.toString());
        return this;
    }

    entries() {
        return this.data.entries();
    }

    @action.bound
    fromObject(data) {
        Object.keys(data).forEach((key) => {
            if (this.Model) {
                this.set(key, this.newInstance(data[key]));
            }
            else {
                this.set(key, data[key]);
            }
        });
        return this;
    }

    get(key) {
        return this.data.get(key.toString());
    }

    has(key) {
        return this.data.has(key.toString());
    }

    keys() {
        return Array.from(this.data.keys());
    }

    get length() {
        return this.data.size;
    }

    newInstance(data) {
        return new this.Model(data, this);
    }

    @action.bound
    set(key, value) {
        this.data.set(key.toString(), value);
        return this;
    }

    values() {
        return Array.from(this.data.values());
    }
}

export default ObjectCollection;
