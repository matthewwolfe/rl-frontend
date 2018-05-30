import React from 'react';
import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Section } from 'mobx/classes';
import { TradeItems, Trades } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { MyTradesPage } from 'views/trading';


class MyTradesPageStore extends Section {

    @observable trades;
    @observable tradeItems;

    constructor() {
        super();

        this.trades = new Trades();
        this.tradeItems = new TradeItems();
    }

    @action.bound
    async initialize(id) {
        this.set({loading: true});

        try {
            const { trades, tradeItems } = await request.get({
                url: '/users/trades',
                params: {
                    id: id
                }
            });

            this.trades.fromObject(trades);
            this.tradeItems.fromObject(tradeItems);
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

function MyTradesPageContainer() {
    return provide({
        page: new MyTradesPageStore()
    })(MyTradesPage);
}

export default MyTradesPageContainer;
