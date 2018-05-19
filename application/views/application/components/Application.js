import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { isLoggedIn } from 'libraries/session';
import { SplashScreen, TopBar } from 'views/application';
import { DashboardContainer } from 'views/dashboard';
import { TradingContainer } from 'views/trading';


@inject('application')
@observer
class Application extends Component {

    constructor(props) {
        super(props);

        if (isLoggedIn()) {
            props.application.initialize();
        }
        else {
            window.location.href = '/login';
        }
    }

    render() {
        const { loading } = this.props.application;

        if (loading) {
            return (<SplashScreen />);
        }

        return (
            <div className="application">
                <TopBar />

                <div className="mt-4">
                    <Switch>
                        <Route path="/" exact component={DashboardContainer} />
                        <Route path="/trading" exact component={TradingContainer} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Application;
