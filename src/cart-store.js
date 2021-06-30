import Store from './store';

export default class CartStore extends Store  {
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

    update(id, lineItemId, quantity, data = {}, options = {}) {
        return this.request('put', `${this.namespace}/${id}/${lineItemId}`, { ...data, quantity }, options);
    }

    remove(id, lineItemId, options = {}) {
        return this.request('delete', `${this.namespace}/${id}/${lineItemId}`, {}, options);
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