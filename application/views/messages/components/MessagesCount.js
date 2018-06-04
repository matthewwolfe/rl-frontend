import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import { Badge } from 'reactstrap';
import { HttpError } from 'errors';
import { request } from 'libraries/request';


class MessagesCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            loading: true
        };

        this.timer = null;
    }

    componentDidMount() {
        this.fetchUnreadCount();
        this.timer = setInterval(this.fetchUnreadCount, 10 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    @autobind
    async fetchUnreadCount() {
        this.setState({loading: true});

        try {
            const { count } = await request.get({
                url: '/messages/unread_count'
            });

            this.setState({count: count});
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setState({count: 0});
            }
        }
        finally {
            this.setState({loading: false});
        }
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

export default MessagesCount;
