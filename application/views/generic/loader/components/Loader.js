import React from 'react';
import { observer } from 'mobx-react';


function Loader({children, className, loading}) {

    if (!loading) {
        return children();
    }

    return (
        <div
            className={className}>
            Loading
        </div>
    );
}

export default observer(Loader);
