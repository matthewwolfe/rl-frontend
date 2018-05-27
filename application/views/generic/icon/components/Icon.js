import React from 'react';
import PropTypes from 'prop-types';


function Icon({className, onClick, type}) {
    return (
        <span
            className={`${className} oi oi-${type}`}
            onClick={onClick} />
    );
}

Icon.defaultProps = {
    className: ''
};

Icon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired
};

export default Icon;
