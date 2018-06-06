import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Select from 'react-select';


function CrateSelect({className, crates, onChange, value}) {
    return (
        <span className={className}>
            <Select
                isClearable={true}
                onChange={selected => onChange(!selected ? 0 : selected.value)}
                options={crates.selectOptions}
                placeholder="Crate"
                styles={{
                    input: () => ({
                        width: 160
                    })
                }}
                value={crates.selectOptions.filter(option => option.value === value)} />
        </span>
    );
}

CrateSelect.defaultProps = {
    className: '',
    value: 0
};

CrateSelect.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStoresToProps(stores) {
    return {
        crates: stores.application.crates
    };
}

export default inject(mapStoresToProps)(observer(CrateSelect));
