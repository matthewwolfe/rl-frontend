import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApplicationContainer } from 'views/application';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={ApplicationContainer} path="*" />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
