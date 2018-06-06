import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'reactstrap';


function SearchFilter({certifications, colors, crates, items, removeSearchItem, searchFilter}) {
    const { certificationId, colorId, crateId, itemId, platform } = searchFilter;

    return (
        <tr>
            <td>
                {platform ? platform : 'N/A'}
            </td>
            <td>
                {itemId ? items.get(itemId).name : 'N/A'}
            </td>
            <td>
                {colorId ? colors.get(colorId).name : 'N/A'}
            </td>
            <td>
                {certificationId ? certifications.get(certificationId).name : 'N/A'}
            </td>
            <td>
                {crateId ? crates.get(crateId).name : 'N/A'}
            </td>
            <td style={{width: '200px'}}>
                <Button
                    className="float-right"
                    color="secondary"
                    onClick={() => removeSearchItem()}
                    size="sm">
                    Remove Filter
                </Button>
            </td>
        </tr>
    );
}

function mapStoresToProps(stores) {
    return {
        certifications: stores.application.certifications,
        colors: stores.application.colors,
        crates: stores.application.crates,
        items: stores.application.items
    };
}

export default inject(mapStoresToProps)(observer(SearchFilter));
