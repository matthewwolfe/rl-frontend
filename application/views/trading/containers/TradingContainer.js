import React from 'react';
import { provide } from 'mobx/utils';
import { Trading } from 'views/trading';


function TradingContainer() {
    return provide({})(Trading);
}

export default TradingContainer;
