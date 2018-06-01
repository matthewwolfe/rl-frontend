import React from 'react';
import { inject, observer } from 'mobx-react';
import { Alert } from 'reactstrap';


function SystemNotifications({systemNotifications}) {
    return (
        <div>
            {systemNotifications.values().map(systemNotification => (
                <Alert
                    color="info"
                    key={systemNotification.id}>

                    <h5 key={`title-${systemNotification.id}`}>
                        {systemNotification.title}
                    </h5>
                    {systemNotification.message}
                </Alert>
            ))}
        </div>
    );
}

function mapStoresToProps(stores) {
    return {
        systemNotifications: stores.page.systemNotifications
    };
}

export default inject(mapStoresToProps)(observer(SystemNotifications));
