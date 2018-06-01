import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'reactstrap';
import { SystemNotifications } from 'views/dashboard';


@inject('page')
@observer
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.props.page.initialize();
    }

    render() {
        const { loading } = this.props.page;

        return (
            <Container>
                {!loading && <SystemNotifications />}
            </Container>
        );
    }
}

export default Dashboard;
