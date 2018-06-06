import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Section } from 'mobx/classes';
import { Messages, Users } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { MessagesPage } from 'views/messages';


class MessagesPageStore extends Section {

    @observable selectedUserId = 0;
    @observable messages = new Messages();
    @observable users = new Users();

    @action.bound
    async initialize() {
        this.set({loading: true});

        try {
            const { messages, users } = await request.get({
                url: '/messages/conversations'
            });

            this.messages.fromObject(messages);
            this.users.fromObject(users);
        }
        catch (error) {
            if (error instanceof HttpError) {
                this.setErrorResponse(error.errors);
            }
        }
        finally {
            this.set({loading: false});
        }
    }
}

function MessagesPageContainer() {
    return provide({
        page: new MessagesPageStore()
    })(MessagesPage);
}

export default MessagesPageContainer;
