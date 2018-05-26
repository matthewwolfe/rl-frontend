import { computed } from 'mobx';
import { ObjectCollection } from 'mobx/core';


class Crates extends ObjectCollection {

    @computed
    get selectOptions() {
        return this.values().map(crate => ({
            label: crate.name,
            value: crate.id
        }));
    }
}

export default Crates;
