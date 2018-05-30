import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApplicationContainer } from 'views/application';
import { LoginPageContainer } from 'views/login';
import { SignupPageContainer } from 'views/signup';


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginPageContainer} />
                <Route path="/signup" component={SignupPageContainer} />
                <Route path="*" component={ApplicationContainer} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
