import axios from 'axios';
import { toJS } from 'mobx';
import { HttpError } from 'errors';
import { getToken, logout } from 'libraries/session';


const cancelToken = axios.CancelToken.source();
const REQUEST_CONFIG = {
    GET: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    },
    POST: {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        mode: 'cors'
    }
};

function url(url) {
    return `${process.env.BACKEND_URL}/api${url}`;
}

function get(requestConfig) {
    if (requestConfig.params) {
        requestConfig.params = toJS(requestConfig.params);
    }

    return sendRequest(createConfig(REQUEST_CONFIG.GET, requestConfig));
}

function post(requestConfig) {
    if (requestConfig.data) {
        requestConfig.data = toJS(requestConfig.data);
    }

    return sendRequest(createConfig(REQUEST_CONFIG.POST, requestConfig));
}

async function sendRequest(config) {
    try {
        if (!config.params) {
            config.params = {};
        }

        config.url = url(config.url);
        config.params.token = getToken();

        const response = await axios({
            ...config,
            cancelToken: config.hasOwnProperty('cancelToken') ? config.cancelToken.token : null,
        });

        if (response.status === 200) {
            return response.data;
        }
        else if (response.status === 400) {
            throw new HttpError(response.data.errors, response.status);
        }
        else if (response.status === 401) {
            logout();
        }
    }
    catch (error) {
        if (axios.isCancel(error)) {
            throw new CancelledError(error.message);
        }
        else {
            throw error;
        }
    }
}

function createConfig(CONFIG, data) {
    return Object.assign({
        validateStatus: status => status >= 200 && status < 500
    }, CONFIG, data);
}

class CancelledError {

    constructor(message) {
        this.message = message;
    }
}

CancelledError.prototype = new Error();

function newCancelToken() {
    return axios.CancelToken.source();
}

export const request = {
    cancel: cancelToken.cancel,
    CancelledError,
    get,
    newCancelToken,
    post
};
