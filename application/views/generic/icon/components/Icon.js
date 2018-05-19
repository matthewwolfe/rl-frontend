import React from 'react';
import PropTypes from 'prop-types';


function Icon({className, type}) {
    return (
        <span className={`${className} oi oi-${type}`} />
    );
}

Icon.defaultProps = {
    className: ''
};

Icon.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Icon;
