import React from 'react';
import { action, observable } from 'mobx';
import { request } from 'libraries/request';
import { Form, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { TradingBuild } from 'views/trading';


class TradingBuildStore extends Section {

    @observable form;

    constructor() {
        super();

        this.form = new Form({
            description: '',
            haveItems: [],
            id: 0,
            platform: '',
            wantItems: []
        });
    }

    @action.bound
    async initialize(id) {
        this.set({loading: true});

        try {
            const { trade, tradeItems } = await request.get({
                url: '/trades/build',
                params: {
                    id: id
                }
            });
        } catch (errors) {
            // Do something
        } finally {
            this.set({loading: false});
        }


    }

    @action.bound
    async save() {
        this.set({loading: true});

        try {
            await request.post({
                url: '/trades/save',
                data: this.form.data
            });
        }
        catch (errors) {

        }
        finally {
            this.set({loading: false});
        }
    }
}

function TradingBuildContainer() {
    return provide({
        page: new TradingBuildStore()
    })(TradingBuild);
}

export default TradingBuildContainer;
