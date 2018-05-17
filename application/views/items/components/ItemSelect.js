import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Select from 'react-select';


function ItemSelect({items, itemTypes, onChange, value}) {

    const options = itemTypes.values().map(itemType => ({
        label: itemType.name,
        options: items.byItemTypeId[itemType.id].map(item => ({
            label: item.name,
            value: item.id
        }))
    }));

    return (
        <Select
            onChange={selected => onChange(!selected ? 0 : selected.value)}
            options={options}
            styles={{
                input: () => ({
                    width: 200
                })
            }}
            value={items.selectOptions.filter(option => option.value === value)} />
    );
}

ItemSelect.defaultProps = {
    value: 0
};

ItemSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStoresToProps(stores) {
    return {
        items: stores.application.items,
        itemTypes: stores.application.itemTypes
    };
}

export default inject(mapStoresToProps)(observer(ItemSelect));
