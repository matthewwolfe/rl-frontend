import { action } from 'mobx';
import { Section } from 'mobx/classes';
import { provide } from 'mobx/utils';
import { MessagesPage } from 'views/messages';


class MessagesPageStore extends Section {

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
