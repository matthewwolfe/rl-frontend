import React from 'react';
import { observer } from 'mobx-react';


function Loader({children, className, loading}) {

    if (!loading && children) {
        return children();
    }

    if (!loading) {
        return null;
    }

    return (
        <div
            className={className}>
            Loading
        </div>
    );
}

export default observer(Loader);
