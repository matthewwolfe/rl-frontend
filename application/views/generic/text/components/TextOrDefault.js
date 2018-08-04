import React from 'react';
import PropTypes from 'prop-types';


function TextOrDefault({defaultValue, value}) {
    return (
        <span>
            {value ? value : defaultValue}
        </span>
    );
}

TextOrDefault.defaultProps = {
    defaultValue: '',
    value: ''
};

TextOrDefault.propTypes = {
    defaultValue: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

export default TextOrDefault;
