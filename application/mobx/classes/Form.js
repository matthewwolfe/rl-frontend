import { action, observable } from 'mobx';


class Form {

    @observable data = {};
    @observable initialData = {};

    constructor(data) {
        this.data = Object.assign({}, data);
        this.initialData = Object.assign({}, data);
    }

    @action.bound
    reset() {
        this.update(this.initialData);
        return this;
    }

    @action.bound
    update(newData) {
        for (const key in newData) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = newData[key];
            }
        }
        return this;
    }
}

export default Form;
