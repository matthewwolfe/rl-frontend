import React from 'react';
import { provide } from 'mobx/utils';
import { InventoryPage } from 'views/inventory';


function InventoryPageContainer() {
    return provide({})(InventoryPage);
}

export default InventoryPageContainer;
