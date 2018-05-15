import React from 'react';
import { provide } from 'mobx/utils';
import { Dashboard } from 'views/dashboard';


function DashboardContainer() {
    console.log('dashboard');
    return provide({})(Dashboard);
}

export default DashboardContainer;
