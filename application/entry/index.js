import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './Router';


render(
    <AppContainer>
        <Router />
    </AppContainer>,
    document.getElementById('app')
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Router', () => {
        window.location.reload();
    });
}
