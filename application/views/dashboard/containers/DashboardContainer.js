import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { Section } from 'mobx/classes';
import { SystemNotifications } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { Dashboard } from 'views/dashboard';


class DashboardPageStore extends Section {

    @observable systemNotifications;

    constructor() {
        super();

        this.systemNotifications = new SystemNotifications();
    }

    @action.bound
    async initialize() {
        this.set({loading: true});

        try {
            await this.systemNotifications.fetchDashboard();
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setErrorResponse(error.errors);
            }
        } finally {
            this.set({loading: false});
        }
    }
}

function DashboardContainer() {
    return provide({
        page: new DashboardPageStore()
    })(Dashboard);
}

export default DashboardContainer;
