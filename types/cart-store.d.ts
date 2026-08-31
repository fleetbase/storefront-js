export default class CartStore extends Store {
    request(method: any, uri: any, data: any, options: any): Promise<any>;
    add(id: any, productId: any, quantity?: number, data?: {}, options?: {}): Promise<any>;
    update(id: any, cartItemId: any, quantity: any, data?: {}, options?: {}): Promise<any>;
    remove(id: any, cartItemId: any, options?: {}): Promise<any>;
    empty(id: any, options?: {}): Promise<any>;
    retrieve(id?: string): Promise<any>;
    create(): void;
    findAll(): void;
    query(): void;
    queryRecord(): void;
}
import Store from './store.js';
