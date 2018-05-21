import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Select from 'react-select';


function CertificationSelect({certifications, onChange, value}) {
    return (
        <Select
            isClearable={true}
            onChange={selected => onChange(!selected ? 0 : selected.value)}
            options={certifications.selectOptions}
            styles={{
                input: () => ({
                    width: 160
                })
            }}
            value={certifications.selectOptions.filter(option => option.value === value)} />
    );
}

CertificationSelect.defaultProps = {
    value: 0
};

CertificationSelect.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

function mapStoresToProps(stores) {
    return {
        certifications: stores.application.certifications
    };
}

export default inject(mapStoresToProps)(observer(CertificationSelect));
