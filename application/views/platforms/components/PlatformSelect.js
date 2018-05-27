import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';


function PlatformSelect({className, includeAll, onChange, value}) {
    return (
        <Input
            className={className}
            onChange={e => onChange(e.target.value)}
            type="select"
            value={value}>

            {includeAll &&
                <option value="">
                    All
                </option>
            }

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

PlatformSelect.defaultProps = {
    className: '',
    includeAll: true
};

PlatformSelect.propTypes = {
    className: PropTypes.string,
    includeAll: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default PlatformSelect;
