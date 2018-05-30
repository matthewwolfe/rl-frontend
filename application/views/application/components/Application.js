import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { isLoggedIn } from 'libraries/session';
import { SplashScreen, TopBar } from 'views/application';
import { DashboardContainer } from 'views/dashboard';
import { InventoryPageContainer } from 'views/inventory';
import { ItemDatabasePage } from 'views/items';
import { SettingsPageContainer } from 'views/settings';
import { MyTradesPageContainer, TradingBuildPageContainer, TradingContainer } from 'views/trading';


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
                        <Route path="/inventory" exact component={InventoryPageContainer} />
                        <Route path="/items" exact component={ItemDatabasePage} />
                        <Route path="/my_trades" exact component={MyTradesPageContainer} />
                        <Route path="/settings" exact component={SettingsPageContainer} />
                        <Route path="/trading" exact component={TradingContainer} />
                        <Route path="/trading/build/:id?" component={TradingBuildPageContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Application;
