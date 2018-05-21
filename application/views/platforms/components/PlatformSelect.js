import React from 'react';
import { Input } from 'reactstrap';


function PlatformSelect({className, onChange, value}) {
    return (
        <Input
            className={className}
            onChange={e => onChange(e.target.value)}
            type="select"
            value={value}>

            <option value="">
                All
            </option>

            <option value="pc">
                PC
            </option>

            <option value="ps4">
                PS4
            </option>

            <option value="switch">
                Switch
            </option>

            <option value="xbox">
                Xbox
            </option>
        </Input>
    );
}

export default PlatformSelect;
