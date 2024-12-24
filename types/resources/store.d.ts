export default class Store extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    getReviews(params?: {}): any;
    getLocations(params?: {}): any;
    getLocation(id: any): any;
    getPaymentGateways(params?: {}): any;
    getPaymentGateway(id: any): any;
}
import Resource from '../resource';
