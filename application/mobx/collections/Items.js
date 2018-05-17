import { computed } from 'mobx';
import { array } from 'libraries/array';
import { ObjectCollection } from 'mobx/core';


class Items extends ObjectCollection {

    @computed
    get byItemTypeId() {
        return array.groupBy(this.values(), 'itemTypeId');
    }

    @computed
    get selectOptions() {
        return this.values().map(item => ({
            label: item.name,
            value: item.id
        }));
    }
}

export default Items;
