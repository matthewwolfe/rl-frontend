import React from 'react';
import { TradeItem } from 'views/trading';
import { range } from 'libraries/number';


function TradeItemsDisplay({items}) {
    return (
        <div>
            {range(0, 24).map(index => (
                <TradeItem
                    key={`trade-item-${index}`}
                    item={items[index]} />
            ))}
        </div>
    );
}

export default TradeItemsDisplay;
