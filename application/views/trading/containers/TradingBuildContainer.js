import React from 'react';
import { provide } from 'mobx/utils';
import { TradingBuild } from 'views/trading';


function TradingBuildContainer() {
    return provide({})(TradingBuild);
}

export default TradingBuildContainer;
