import { action, observable } from 'mobx';
import { request } from 'libraries/request';
import { Pagination, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { TradingPage } from 'views/trading';


class TradingPageStore extends Section {


    @observable pagination;
    @observable trades = [];
    @observable tradeItems = {};

    constructor() {
        super();

        this.pagination = new Pagination({
            filters: {
                platform: '',
                searchFilters: [],
                type: 'want'
            },
            onFetched: ({trades, tradeItems}) => {
                this.set({
                    trades: trades,
                    tradeItems: tradeItems
                });
            },
            url: '/trades/paginate'
        });
    }

    @action.bound
    async initialize() {
        try {
            this.pagination.fetch();
        }
        catch (errors) {
            console.log(errors);
        }
    }
}


function TradingPageContainer() {
    return provide({
        page: new TradingPageStore()
    })(TradingPage);
}

export default TradingPageContainer;
