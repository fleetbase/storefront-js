import Resource from '../resource';
import { formatCurrency, isEmpty } from '../utils';

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

            if (isEmpty(sale_price) || isEmpty(currency)) {
                return null;
            }

            return formatCurrency(sale_price / 100, currency);
        }

        if (isEmpty(price) || isEmpty(currency)) {
                return null;
            }

        return formatCurrency(price / 100, currency);
    }
}