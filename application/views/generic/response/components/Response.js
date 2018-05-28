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

            <span
                dangerouslySetInnerHTML={{__html: renderMessage(response.message)}}
                styles={{width: '90%'}} />

            <Icon
                className="float-right"
                onClick={onHide}
                type="x" />
        </Alert>
    );
}

function renderMessage(message) {
    if (typeof message !== 'string' && !(message instanceof String)) {
        return message.join('<br />');
    }

    return message;
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
