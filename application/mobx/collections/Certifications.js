import { computed } from 'mobx';
import { ObjectCollection } from 'mobx/core';


class Certifications extends ObjectCollection {

    @computed
    get selectOptions() {
        return this.values().map(certification => ({
            label: certification.name,
            value: certification.id
        }));
    }
}

export default Certifications;
