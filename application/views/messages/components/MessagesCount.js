import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { actions, websocket } from 'websocket';
import { Badge } from 'reactstrap';


class MessagesCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.listener = websocket.addMessageListener(actions.RECEIVING.UNREAD_MESSAGE_COUNT, ({count}) => {
            this.setState({count: count});
        });

        websocket.send(actions.SENDING.UNREAD_MESSAGE_COUNT);
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    render() {
        return (
            <Badge
                className="unread-messages-count"
                color={this.state.count === 0 ? 'secondary' : 'primary'}>
                <strong className="p-1">
                    {this.state.count}
                </strong>
            </Badge>
        );
    }
}

export default inject('application')(observer(MessagesCount));
