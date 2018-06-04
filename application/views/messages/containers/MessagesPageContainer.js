import { action, observable } from 'mobx';
import { Section } from 'mobx/classes';
import { Users } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { MessagesPage } from 'views/messages';


class MessagesPageStore extends Section {

    @observable users = new Users();

    @action.bound
    async initialize() {

    }
}

function MessagesPageContainer() {
    return provide({
        page: new MessagesPageStore()
    })(MessagesPage);
}

export default MessagesPageContainer;
