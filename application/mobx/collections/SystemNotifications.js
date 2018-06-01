import { request } from 'libraries/request';
import { ObjectCollection } from 'mobx/core';


class SystemNotifications extends ObjectCollection {


    async fetchDashboard() {
        const { systemNotifications } = await request.get({
            url: '/system_notifications/dashboard'
        });

        this.fromObject(systemNotifications);
    }
}

export default SystemNotifications;
