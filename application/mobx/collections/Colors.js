import { computed } from 'mobx';
import { ObjectCollection } from 'mobx/core';


class Colors extends ObjectCollection {

    @computed
    get selectOptions() {
        return this.values().map(color => ({
            label: color.name,
            value: color.id
        }));
    }
}

export default Colors;
