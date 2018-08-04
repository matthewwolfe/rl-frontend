import React from 'react';
import PropTypes from 'prop-types';


function PageHeader({children, className}) {
    return (
        <div className={`${className} page-header border-bottom pb-2 mb-5`}>
            {children}
        </div>
    );
}

PageHeader.defaultProps = {
    className: ''
};

PageHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
};

export default PageHeader;
