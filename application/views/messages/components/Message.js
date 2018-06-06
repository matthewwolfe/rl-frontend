import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormattedRelative } from 'react-intl';


function Message({message, currentUser}) {
    return (
        <div className={getClassNames(message, currentUser)}>
            <div className="message">
                {message.message}
            </div>

            <div className="sent-at text-right">
                <FormattedRelative value={message.createdAt} />
            </div>
        </div>

    );
}

function getClassNames(message, currentUser) {
    const classNames = ['message-container'];

    if (message.userId === currentUser.id) {
        classNames.push('mine');
    }

    if (!message.read) {
        classNames.push('unread');
    }

    return classNames.join(' ');
}

function mapStoresToProps(stores) {
    return {
        currentUser: stores.application.user
    };
}

export default inject(mapStoresToProps)(observer(Message));
