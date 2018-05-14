import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './Router';


function renderApp(Component) {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
}

renderApp(Router);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Router', () => {
        const NextApp = require('./Router').default;
        renderApp(NextApp);
    });
}
