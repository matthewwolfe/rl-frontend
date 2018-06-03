import { observable } from 'mobx';
import Store from './Store';


class Model extends Store {

    @observable deleting = false;
    @observable saving = false;

    constructor(data = {}, collection = null) {
        super(data);

        if (collection) {
            this.collection = collection;
        }
    }
}

export default Model;
