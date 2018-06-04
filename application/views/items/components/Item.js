import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';


function Item({className, item, size}) {
    return (
        <Col
            className={className}
            md={size}>
            <div className="item">
                <img src={`${process.env.FRONTEND_URL}/item_images/${item.id}.png`} />

                <p className="mt-2 item-name">
                    {item.name}
                </p>
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
