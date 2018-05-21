import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { NewTradeItemModal } from 'views/trading';


class TradeItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    @autobind
    toggleModal() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const { item } = this.props;

        return (
            <div
                className="trade-item"
                onClick={this.toggleModal}>
                {item &&
                    <span />
                }

                <NewTradeItemModal
                    isOpen={this.state.isOpen}
                    toggle={this.toggleModal} />
            </div>
        );
    }
}

export default TradeItem;
