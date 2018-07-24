import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'reactstrap';
import { PaginatedList } from 'views/generic/pagination';
import { SearchFilters, Trade } from 'views/trading';


@inject('page')
@observer
class TradingPage extends Component {

    constructor(props) {
        super(props);

        this.props.page.initialize();
    }

    render() {
        const { pagination, trades, tradeItems } = this.props.page;

        return (
            <Container fluid>
                <SearchFilters />

                <PaginatedList
                    className="mt-5"
                    pagination={pagination}
                    rows={trades}
                    renderer={trade => (
                        <Trade
                            key={trade.id}
                            trade={trade}
                            tradeItems={tradeItems[trade.id]} />
                    )} />
            </Container>
        );
    }

}

export default TradingPage;
