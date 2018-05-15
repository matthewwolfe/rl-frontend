import React from 'react';
import { inject, observer } from 'mobx-react';
import { Input } from 'reactstrap';


function ColorSelect({className, colors}) {
    return (
        <Input
            className={className}
            type="select">

            {colors.values().map(color => (
                <option
                    key={color.id}
                    value={color.id}>
                    {color.name}
                </option>
            ))}
        </Input>
    )
}

function mapStoresToProps(stores) {
    return {
        colors: stores.application.colors
    };
}

export default inject(mapStoresToProps)(observer(ColorSelect));
