import React from 'react';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import { TradeItem } from 'views/trading';
import { range } from 'libraries/number';


function TradeItemsDisplay({editable, items, onAddItem, onRemoveItem}) {
    return (
        <div className="trade-items-display">
            <Row>
                {range(0, editable ? 24 : items.length).map(index => (
                    <TradeItem
                        key={`trade-item-${index}`}
                        editable={editable && items.length >= index}
                        item={items.length > index ? items[index] : undefined}
                        onAddItem={item => onAddItem(item, index)}
                        onRemoveItem={item => onRemoveItem(item, index)} />
                ))}
            </Row>
        </div>
    );
}

TradeItemsDisplay.defaultProps = {
    editable: false
};

TradeItemsDisplay.propTypes = {
    editable: PropTypes.bool,
    items: MobxPropTypes.arrayOrObservableArray.isRequired,
    onAddItem: PropTypes.func,
    onRemoveItem: PropTypes.func
};

export default TradeItemsDisplay;
