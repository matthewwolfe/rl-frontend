import Store from './Store';


class Model extends Store {

    constructor(data = {}, collection = null) {
        super(data);

        if (collection) {
            this.collection = collection;
        }
    }
}

export default Model;
