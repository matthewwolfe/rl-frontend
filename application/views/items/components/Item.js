import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';


function Item({className, item, size}) {
    return (
        <Col
            className={className}
            md={size}>
            <div className="item">
                {item.name}
            </div>
        </Col>
    );
}

Item.defaultProps = {
    className: '',
    size: 2
};

Item.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number
};

export default Item;
