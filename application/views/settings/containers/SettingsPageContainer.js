import React from 'react';
import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Form, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { SettingsPage } from 'views/settings';


class SettingsPageStore extends Section {

    @observable form;
    @observable saving = false;

    constructor() {
        super();

        this.form = new Form({
            gamertag: '',
            psn: '',
            steam: '',
            switch: ''
        });
    }

    @action.bound
    async save(application) {
        this.set({saving: true});

        try {
            const { user } = await request.post({
                url: '/settings/save',
                data: this.form.data
            });

            application.updateUser(user);
            this.setSuccessResponse('Successfully saved settings.');
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setErrorResponse(error.errors);
            }
        }
        finally {
            this.set({saving: false});
        }
    }
}

function SettingsPageContainer() {
    return provide({
        page: new SettingsPageStore()
    })(SettingsPage);
}

export default SettingsPageContainer;
