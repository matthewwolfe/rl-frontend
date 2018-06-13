import { action } from 'mobx';
import { Pagination, Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { TradingPage } from 'views/trading';


class TradingPageStore extends Section {

    constructor() {
        super();

        this.pagination = new Pagination({
            filters: {
                platform: '',
                searchFilters: [],
                type: 'want'
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
