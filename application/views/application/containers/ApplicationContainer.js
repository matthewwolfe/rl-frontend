import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { withRouter } from 'react-router-dom';
import { request } from 'libraries/request';
import { Certifications, Colors, Crates, Items, ItemTypes, Rarities } from 'mobx/collections';
import { Section } from 'mobx/classes';
import { User } from 'mobx/models';
import { provide } from 'mobx/utils';
import { websocket } from 'websocket';
import { Application } from 'views/application';


class ApplicationStore extends Section {

    @observable certifications = new Certifications();
    @observable colors = new Colors();
    @observable crates = new Crates();
    @observable items = new Items();
    @observable itemTypes = new ItemTypes();
    @observable lang = 'english';
    @observable rarities = new Rarities();
    @observable user = {};

    @action.bound
    async initialize() {
        this.set({loading: true});

        websocket.initialize();

        const { certifications, colors, crates, items, itemTypes, rarities, user } = await request.get({
            url: '/initialize'
        });

        this.certifications.fromObject(certifications);
        this.colors.fromObject(colors);
        this.crates.fromObject(crates);
        this.items.fromObject(items);
        this.itemTypes.fromObject(itemTypes);
        this.rarities.fromObject(rarities);

        this.set({
            loading: false,
            user: new User(user)
        });
    }

    @action.bound
    updateUser(user) {
        this.set({
            user: new User(user)
        });
    }
}

const applicationStore = new ApplicationStore();

@withRouter
class ApplicationContainer extends Component {

    shouldComponentUpdate(props) {
        if (this.props.location.pathname === props.location.pathname) {
            return false;
        }

        return true;
    }

    render() {
        return provide({
            application: applicationStore
        })(Application);
    }
}

export default ApplicationContainer;
