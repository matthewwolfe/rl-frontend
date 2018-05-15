import { action, observable } from 'mobx';
import { Store } from 'mobx/core';


class Section extends Store {

    @observable loading = true;
    @observable response = {
        status: '',
        message: ''
    };

    @action.bound
    resetResponse() {
        this.response.status = '';
        this.response.message = '';
    }

    @action.bound
    setErrorResponse(errors) {
        this.response.status = 'error';
        this.response.message = errors;
    }

    @action.bound
    setSuccessResponse(message) {
        this.response.status = 'success';
        this.response.message = message;
    }
}

export default Section;
