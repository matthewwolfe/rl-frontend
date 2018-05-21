import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Select from 'react-select';


function ColorSelect({colors, onChange, value}) {
    return (
        <Select
            isClearable={true}
            onChange={selected => onChange(!selected ? 0 : selected.value)}
            options={colors.selectOptions}
            styles={{
                input: () => ({
                    width: 120
                })
            }}
            value={colors.selectOptions.filter(option => option.value === value)} />
    );
}

ColorSelect.defaultProps = {
    value: 0
};

ColorSelect.propTypes = {
    value: PropTypes.number.isRequired
};

function mapStoresToProps(stores) {
    return {
        colors: stores.application.colors
    };
}

export default inject(mapStoresToProps)(observer(ColorSelect));
