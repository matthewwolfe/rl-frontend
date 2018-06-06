import React from 'react';
import { inject, observer } from 'mobx-react';


function Message({message, currentUser}) {

    return (
        <div className={getClassNames(message, currentUser)}>
            <div className="message">
                {message.message}
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
