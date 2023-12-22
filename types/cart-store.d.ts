export default class CartStore extends Store {
    request(method: any, uri: any, data: any, options: any): any;
    add(id: any, productId: any, quantity?: number, data?: {}, options?: {}): any;
    update(id: any, cartItemId: any, quantity: any, data?: {}, options?: {}): any;
    remove(id: any, cartItemId: any, options?: {}): any;
    empty(id: any, options?: {}): any;
    retrieve(id?: string): Promise<any>;
    create(): void;
    findAll(): void;
    query(): void;
    queryRecord(): void;
}
import Store from './store';
