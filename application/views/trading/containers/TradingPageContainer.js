import { action } from 'mobx';
import { Pagination, Section } from 'mobx/classes';
import { TradeItems } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { TradingPage } from 'views/trading';


class TradingPageStore extends Section {

    constructor() {
        super();

        this.tradeItems = new TradeItems();

        this.pagination = new Pagination({
            onFetch: ({tradeItems}) => {
                this.tradeItems.fromObject(tradeItems);
            },
            page: 1,
            url: '/trades/paginate'
        });
    }

    @action.bound
    async initialize() {
        try {
            await this.pagination.fetch();
        }
        catch (error) {
            console.log(error);
        }
    }
}


function TradingPageContainer() {
    return provide({
        page: new TradingPageStore()
    })(TradingPage);
}

export default TradingPageContainer;
