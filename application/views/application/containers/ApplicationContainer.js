import React from 'react';
import { observable } from 'mobx';
import { Store } from 'mobx/core';
import { provide } from 'mobx/utils';
import { Application } from 'views/application';


class ApplicationStore extends Store {

    @observable lang = 'english';
}

const applicationStore = new ApplicationStore();

function ApplicationContainer() {
    return provide({
        application: applicationStore
    })(Application);
}

export default ApplicationContainer;
