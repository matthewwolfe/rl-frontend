import React from 'react';
import { action, observable } from 'mobx';
import { HttpError } from 'errors';
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

            this.form.update(trade);
            this.form.update({
                haveItems: tradeItems.filter(tradeItem => tradeItem.type === 'have'),
                wantItems: tradeItems.filter(tradeItem => tradeItem.type === 'want')
            });
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

    @action.bound
    async save() {
        this.set({saving: true});

        try {
            await request.post({
                url: '/trades/save',
                data: this.form.data
            });
        }
        catch (errors) {

        }
        finally {
            this.set({saving: false});
        }
    }
}

function TradingBuildContainer() {
    return provide({
        page: new TradingBuildStore()
    })(TradingBuild);
}

export default TradingBuildContainer;
