import Resource from '../resource';
import { formatCurrency } from '../utils';

export default class Product extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'product', options);
    }

    variants() {
        return this.getAttribute('variants');
    }

    addons() {
        return this.getAttribute('addon_categories');
    }

    get isOnSale() {
        return this.getAttribute('is_on_sale');
    }

    get isNotOnSale() {
        return !this.getAttribute('is_on_sale');
    }

    get formattedAmount() {
        const { price, sale_price, currency } = this.getAttributes(['price', 'sale_price', 'currency']);

        if (this.isOnSale) {
            return formatCurrency(sale_price / 100, currency);
        }

        return formatCurrency(price / 100, currency);
    }
}