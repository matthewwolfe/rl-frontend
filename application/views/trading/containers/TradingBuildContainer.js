import React from 'react';
import { observable } from 'mobx';
import { Form } from 'mobx/classes';
import { Store } from 'mobx/core';
import { provide } from 'mobx/utils';
import { TradingBuild } from 'views/trading';


class TradingBuildStore extends Store {

    @observable form;

    constructor() {
        super();

        this.form = new Form({
            description: '',
            haveItems: new Array(24),
            platform: '',
            wantItems: new Array(24)
        });
    }
}

function TradingBuildContainer() {
    return provide({
        tradingBuildStore: new TradingBuildStore()
    })(TradingBuild);
}

export default TradingBuildContainer;
