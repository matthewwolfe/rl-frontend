import { action, observable } from 'mobx';
import { request } from 'libraries/request';
import { Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { InventoryPage } from 'views/inventory';


class InventoryPageStore extends Section {

    @observable inventoryItems = [];

    @action.bound
    addItem(item) {
        this.inventoryItems.push(item);
    }

    @action.bound
    async initialize(id) {
        this.set({loading: true});

        try {
            const { inventoryItems } = await request.get({
                url: '/users/inventory',
                params: {
                    id: id
                }
            });

            this.set({
                inventoryItems: inventoryItems
            });
        }
        catch (errors) {
            this.setErrorResponse(errors);
        }
        finally {
            this.set({loading: false});
        }

        this.set({loading: false});
    }
}

function InventoryPageContainer() {
    return provide({
        page: new InventoryPageStore()
    })(InventoryPage);
}

export default InventoryPageContainer;
