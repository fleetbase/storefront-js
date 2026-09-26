export default class FakeAdapter {
    constructor(responses = {}) {
        this.responses = responses;
        this.calls = [];
        this.headers = {};
    }

    respond(method, endpoint, params = {}, options = {}) {
        const call = { method, endpoint, params, options };
        this.calls.push(call);
        const configured = this.responses[`${method}:${endpoint}`] ?? this.responses[endpoint];

        if (configured instanceof Error) {
            return Promise.reject(configured);
        }

        return Promise.resolve(typeof configured === 'function' ? configured(call) : (configured ?? {}));
    }

    get(endpoint, params = {}, options = {}) {
        return this.respond('get', endpoint, params, options);
    }

    post(endpoint, params = {}, options = {}) {
        return this.respond('post', endpoint, params, options);
    }

    put(endpoint, params = {}, options = {}) {
        return this.respond('put', endpoint, params, options);
    }

    delete(endpoint, params = {}, options = {}) {
        return this.respond('delete', endpoint, params, options);
    }

    setHeaders(headers = {}) {
        this.headers = { ...this.headers, ...headers };
        return this;
    }
}
