import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { IntlProvider } from 'react-intl';
import Router from './Router';


render(
    <AppContainer>
        <IntlProvider locale="en">
            <Router />
        </IntlProvider>
    </AppContainer>,
    document.getElementById('app')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Router', () => {
        window.location.reload();
    });
}
