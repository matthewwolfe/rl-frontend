import React from 'react';
import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Form, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { SignupPage } from 'views/signup';


class SignupPageStore extends Section {

    @observable form;

    constructor() {
        super();

        this.loading = false;

        this.form = new Form({
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        });
    }

    @action.bound
    async signup() {
        this.set({loading: true});

        try {
            await request.post({
                url: '/signup',
                data: this.form.data
            });

            this.setSuccessResponse('Successfully signed up.');
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setErrorResponse(error.errors);
            }
        }
        finally {
            this.set({loading: false});
        }
    }
}

function SignupPageContainer() {
    return provide({
        page: new SignupPageStore()
    })(SignupPage);
}

export default SignupPageContainer;
