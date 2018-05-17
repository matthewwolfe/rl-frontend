import React from 'react';
import { provide } from 'mobx/utils';
import { Dashboard } from 'views/dashboard';


function DashboardContainer() {
    return provide({})(Dashboard);
}

export default DashboardContainer;
