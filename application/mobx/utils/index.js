import React from 'react';
import { Provider } from 'mobx-react';


export function provide(stores, props = {}) {
    return function(Component) {
        return (
            <Provider {...stores}>
                <Component props={props} />
            </Provider>
        );
    };
}
