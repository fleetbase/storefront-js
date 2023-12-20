import Store from './store';

export default class CartStore extends Store {
    constructor() {
        super(...arguments);
    }

    request(method, uri, data, options) {
        return new Promise(async (resolve, reject) => {
            const response = await this.adapter[method](uri, data, options).then(this.afterFetch.bind(this)).catch(reject);

            resolve(response);
        });
    }

    add(id, productId, quantity = 1, data = {}, options = {}) {
        return this.request('post', `${this.namespace}/${id}/${productId}`, { ...data, quantity }, options);
    }

    update(id, cartItemId, quantity, data = {}, options = {}) {
        return this.request('put', `${this.namespace}/${id}/${cartItemId}`, { ...data, quantity }, options);
    }

    remove(id, cartItemId, options = {}) {
        return this.request('delete', `${this.namespace}/${id}/${cartItemId}`, {}, options);
    }

    empty(id, options = {}) {
        return this.request('put', `${this.namespace}/${id}/empty`, {}, options);
    }

    retrieve(id = '') {
        return this.findRecord(id);
    }

    // remove default store methods, in cart can only retrieve and destroy
    create() {
        throw new Error('There is no create() method for carts!');
    }

    findAll() {
        throw new Error('There is no findAll() method for carts!');
    }

    query() {
        throw new Error('There is no query() method for carts!');
    }

    queryRecord() {
        throw new Error('There is no queryRecord() method for carts!');
    }
}
