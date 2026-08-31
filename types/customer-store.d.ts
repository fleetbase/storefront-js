export default class CustomerStore extends Store {
    request(method: any, uri: any, data: any, options: any): Promise<any>;
    login(identity: any, password?: any, attributes?: {}): Promise<any>;
    verifySmsCode(phone: any, code: any, attributes?: {}): Promise<any>;
    retrieve(id: any): Promise<any>;
}
import Store from './store.js';
