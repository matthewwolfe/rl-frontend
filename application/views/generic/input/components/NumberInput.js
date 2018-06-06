import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';


function NumberInput({className, onChange, value}) {
    return (
        <Input
            className={className}
            onChange={e => handleOnChange(onChange, e.target.value)}
            type="text"
            value={value ? value : ''} />
    );
}

function handleOnChange(onChange, value) {
    value = parseInt(value);

    if (Number.isInteger(value)) {
        onChange(value);
    } else {
        onChange(undefined);
    }
}

NumberInput.defaultProps = {
    className: ''
};

NumberInput.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
};

export default NumberInput;
