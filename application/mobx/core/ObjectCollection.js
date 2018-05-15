import { action, observable } from 'mobx';
import Collection from './Collection';


class ObjectCollection extends Collection {

    @observable data = {};

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
        delete this.data[key];
        return this;
    }

    entries() {
        return Object.entries(this.data);
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
        return this.data[key];
    }

    has(key) {
        return this.data.hasOwnProperty(key);
    }

    keys() {
        return Object.keys(this.data);
    }

    get length() {
        return Object.keys(this.data).length;
    }

    @action.bound
    merge(data) {
        this.data = {...this.data, data};
        return this;
    }

    newInstance(data) {
        return new this.Model(data, this);
    }

    @action.bound
    set(key, value) {
        this.data[key] = value;
        return this;
    }

    values() {
        return Object.values(this.data);
    }
}

export default ObjectCollection;
