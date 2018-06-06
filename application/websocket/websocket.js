import { getToken } from 'libraries/session';
import { uniqueId } from 'libraries/string';


let ws;
const listeners = new Map();

function addMessageListener(type, callback) {
    const id = uniqueId();

    listeners.set(id, {
        callback: callback,
        id: id,
        type: type
    });

    return {
        id: id,
        remove: () => removeMessageListener(id)
    };
}

function initialize() {
    ws = new WebSocket(`${process.env.WEBSOCKET_URL}?token=${getToken()}`);

    ws.onopen = onOpen;
    ws.onmessage = onMessage;
}

function onMessage(message) {
    message = JSON.parse(message.data);
    const { type, data } = message;

    Array.from(listeners.values()).forEach((listener) => {
        if (listener.type === type) {
            listener.callback(data);
        }
    });
}

function onOpen() {

}

function removeMessageListener(id) {
    return listeners.delete(id);
}

function send(type, data = {}) {
    ws.send(JSON.stringify({type: type, data: data}));
}

export const websocket = {
    addMessageListener,
    initialize,
    removeMessageListener,
    send
};
