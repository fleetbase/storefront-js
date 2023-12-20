import Store from './store';
import { isPhone } from './utils';

export default class CustomerStore extends Store {
    constructor() {
        super(...arguments);
    }

    request(method, uri, data, options) {
        return new Promise(async (resolve, reject) => {
            const response = await this.adapter[method](uri, data, options).then(this.afterFetch.bind(this)).catch(reject);

            resolve(response);
        });
    }

    login(identity, password = null, attributes = {}) {
        // handle phone number authentication
        if (isPhone(identity)) {
            return this.adapter.post('customers/login-with-sms', { phone: identity });
        }

        if (!password) {
            throw new Error('Login requires password!');
        }

        return this.request('post', 'customers/login', {
            identity,
            password,
            ...attributes,
        });
    }

    verifySmsCode(phone, code, attributes = {}) {
        return this.request('post', 'customers/verify-sms', {
            phone,
            code,
            ...attributes,
        });
    }

    retrieve(id) {
        return this.findRecord(id);
    }
}
