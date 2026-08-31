export default class Product extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    variants(): any;
    addons(): any;
    get isOnSale(): any;
    get isNotOnSale(): boolean;
    get formattedAmount(): string;
    get merchant(): Store | null;
    getReviews(): any;
}
import Resource from '../resource';
import Store from './store';
