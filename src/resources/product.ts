import Resource from '../resource.js';
import Review from './review.js';
import { formatCurrency, isEmpty } from '../utils/index.js';
import { Adapter, Collection, register } from '@fleetbase/sdk';
import Store from './store.js';
import type { Attributes } from '../types.js';

export default class Product extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'product', options);
    }

    variants(): unknown {
        return this.getAttribute('variants');
    }

    addons(): unknown {
        return this.getAttribute('addon_categories');
    }

    images(): unknown[] {
        return this.getAttribute('images') ?? [];
    }

    videos(): unknown[] {
        return this.getAttribute('videos') ?? [];
    }

    hours(): unknown[] {
        return this.getAttribute('hours') ?? [];
    }

    get isOnSale(): boolean {
        return this.getAttribute('is_on_sale') as boolean;
    }

    get isNotOnSale() {
        return !this.getAttribute('is_on_sale');
    }

    get formattedAmount() {
        const { price, sale_price, currency } = this.getAttributes(['price', 'sale_price', 'currency']) as {
            price?: number;
            sale_price?: number;
            currency?: string;
        };

        if (this.isOnSale) {
            if (isEmpty(sale_price) || isEmpty(currency)) {
                return null;
            }

            return formatCurrency((sale_price as number) / 100, currency as string);
        }

        if (isEmpty(price) || isEmpty(currency)) {
            return null;
        }

        return formatCurrency((price as number) / 100, currency as string);
    }

    get merchant(): Store | null {
        const attributes = this.getAttribute('store');

        return attributes && typeof attributes === 'object' ? new Store(attributes as Attributes, this.adapter) : null;
    }

    getReviews(): Promise<Collection<Review>> {
        return this.adapter.get<Attributes[]>('reviews', { store: this.id }).then((reviews) => {
            return new Collection(reviews.map((attributes: Attributes) => new Review(attributes, this.adapter)));
        });
    }
}

register('resource', 'Product', Product);
