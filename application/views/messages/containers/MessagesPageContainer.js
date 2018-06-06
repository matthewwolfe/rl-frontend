import { action, observable } from 'mobx';
import { HttpError } from 'errors';
import { request } from 'libraries/request';
import { Section } from 'mobx/classes';
import { Messages, Users } from 'mobx/collections';
import { provide } from 'mobx/utils';
import { actions, websocket } from 'websocket';
import { MessagesPage } from 'views/messages';


class MessagesPageStore extends Section {

    @observable selectedUserId = 0;
    @observable listener = null;
    @observable messages = new Messages();
    @observable users = new Users();

    constructor() {
        super();

        this.listener = websocket.addMessageListener(actions.RECEIVING.NEW_MESSAGE, ({message}) => {
            this.messages.set(message.id, message);
        });
    }

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

    @action.bound
    sendMessage(message) {
        // This should never happen, but check just to be sure
        if (this.selectedUserId === 0) {
            return null;
        }

        websocket.send(actions.SENDING.NEW_MESSAGE, {
            message: message,
            recipientId: this.selectedUserId
        });
    }
}

function MessagesPageContainer() {
    return provide({
        page: new MessagesPageStore()
    })(MessagesPage);
}

export default MessagesPageContainer;
