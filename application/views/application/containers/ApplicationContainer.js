import React from 'react';
import { action, observable } from 'mobx';
import { request } from 'libraries/request';
import { Certifications, Colors, Rarities } from 'mobx/collections';
import { Section } from 'mobx/classes';
import { User } from 'mobx/models';
import { provide } from 'mobx/utils';
import { Application } from 'views/application';


class ApplicationStore extends Section {

    @observable certifications = new Certifications();
    @observable colors = new Colors();
    @observable lang = 'english';
    @observable rarities = new Rarities();
    @observable user = {};

    @action.bound
    async initialize() {
        this.set({loading: true});

        const { certifications, colors, rarities, user } = await request.get({
            url: '/initialize'
        });

        this.certifications.fromObject(certifications);
        this.colors.fromObject(colors);
        this.rarities.fromObject(rarities);

        this.set({
            loading: false,
            user: new User(user)
        });
    }
}

const applicationStore = new ApplicationStore();

function ApplicationContainer() {
    return provide({
        application: applicationStore
    })(Application);
}

export default ApplicationContainer;
