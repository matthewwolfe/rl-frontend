import React from 'react';
import { observer, PropTypes as MobxPropTypes } from 'mobx-react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Icon } from 'views/generic/icon';


function Response({className, onHide, response}) {

    if (!response.message) {
        return null;
    }

    return (
        <Alert
            className={className}
            color={response.status === 'success' ? 'success' : 'danger'}>

            <span styles={{width: '90%'}}>
                {response.message}
            </span>

            <Icon
                className="float-right"
                onClick={onHide}
                type="x" />
        </Alert>
    );
}

Response.defaultProps = {
    className: ''
};

Response.propTypes = {
    className: PropTypes.string,
    onHide: PropTypes.func,
    response: MobxPropTypes.objectOrObservableObject.isRequired
};

export default observer(Response);
