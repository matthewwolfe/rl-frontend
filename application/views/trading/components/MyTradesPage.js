import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'reactstrap';
import { Trade } from 'views/trading';


@inject('application', 'page')
@observer
class MyTradesPage extends Component {

    constructor(props) {
        super(props);

        props.page.initialize(props.application.user.id);
    }

    render() {
        const { loading, trades, tradeItems } = this.props.page;

        if (loading) {
            return null;
        }

        return (
            <Container>
                <h2 className="pb-3 border-bottom mb-3">My Trades</h2>

                {trades.values().map(trade => (
                    <Trade
                        key={trade.id}
                        trade={trade}
                        tradeItems={tradeItems.values().filter(tradeItem => tradeItem.tradeId === trade.id)} />
                ))}
            </Container>
        );
    }
}

export default MyTradesPage;
