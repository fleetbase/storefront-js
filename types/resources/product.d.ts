export default class Product extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    variants(): any;
    addons(): any;
    get isOnSale(): any;
    get isNotOnSale(): boolean;
    get formattedAmount(): string;
    getReviews(): any;
}
import Resource from '../resource';
