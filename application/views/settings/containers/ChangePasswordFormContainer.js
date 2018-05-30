import React from 'react';
import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Form, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { ChangePasswordForm } from 'views/settings';


class ChangePasswordFormStore extends Section {

    @observable form;

    constructor() {
        super();

        this.loading = false;
        this.form = new Form({
            password: '',
            passwordConfirm: ''
        });
    }

    @action.bound
    async save(application) {
        this.set({loading: true});

        try {
            const { user } = await request.post({
                url: '/change_password',
                data: this.form.data
            });

            this.setSuccessResponse('Successfully updated password.');
            this.form.reset();
            application.updateUser(user);
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

function ChangePasswordFormContainer() {
    return provide({
        page: new ChangePasswordFormStore()
    })(ChangePasswordForm);
}

export default ChangePasswordFormContainer;
