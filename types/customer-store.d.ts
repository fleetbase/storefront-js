export default class CustomerStore extends Store {
    request(method: any, uri: any, data: any, options: any): any;
    login(identity: any, password?: any, attributes?: {}): any;
    verifySmsCode(phone: any, code: any, attributes?: {}): any;
    retrieve(id: any): Promise<any>;
}
import Store from './store';
