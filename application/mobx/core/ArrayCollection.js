import { action, computed, observable } from 'mobx';
import Collection from './Collection';


class ArrayCollection extends Collection {

    @observable data = [];

    @action.bound
    clear() {
        this.data.clear();
        return this;
    }

    fromArray(data) {
        data.forEach((element) => {
            if (this.Model) {
                this.push(this.newInstance(element, this));
            }
            else {
                this.push(element);
            }
        });
        return this;
    }

    @computed
    get length() {
        return this.data.length;
    }

    newInstance(data) {
        return new this.Model(data, this);
    }

    @action.bound
    map(fn, thisArg) {
        this.data.map(fn, thisArg);
        return this;
    }

    @action.bound
    peek() {
        return this.data.peek();
    }

    @action.bound
    push(value) {
        this.data.push(value);
        return this;
    }

    @action.bound
    remove(value) {
        return this.data.remove(value);
    }

    @action.bound
    reverse() {
        this.data.reverse();
        return this;
    }

    @action.bound
    slice(begin, end) {
        return this.data.slice(begin, end);
    }
}

export default ArrayCollection;
