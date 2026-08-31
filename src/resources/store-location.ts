import Resource from '../resource.js';
import StoreHour from './store-hour.js';
import { Adapter, Collection, lookup, register } from '@fleetbase/sdk';
import { format } from 'date-fns';
import type { Attributes } from '../types.js';

export default class StoreLocation extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'store-location', options);
    }

    get latitude(): number | undefined {
        return this.getAttribute('place.location.coordinates.1') as number | undefined;
    }

    get longitude(): number | undefined {
        return this.getAttribute('place.location.coordinates.0') as number | undefined;
    }

    get hours(): Collection<StoreHour> {
        const hours = this.getAttribute<Attributes[]>('hours', []);
        return new Collection((hours || []).map((attributes) => new StoreHour(attributes, this.adapter)));
    }

    /** Raw embedded merchant payload, normalized across API response versions. */
    get storeData(): unknown {
        const embeddedStore = this.getAttribute('store_data');
        const legacyStore = this.getAttribute('store');

        return embeddedStore || (legacyStore && typeof legacyStore === 'object' ? legacyStore : null);
    }

    /** Public store identifier for this location. */
    get storeId(): string | undefined {
        const store = this.getAttribute('store');

        const data = this.storeData as Attributes | null;
        return (typeof store === 'string' ? store : data?.id || data?.public_id) as string | undefined;
    }

    /** Typed embedded merchant when requested with `with_store`. */
    get merchant(): Resource | null {
        return this.storeData ? lookup('resource', 'Store', this.storeData, this.adapter) : null;
    }

    get isAlwaysOpen() {
        return this.hours.length > 0 && this.hours.every((hour) => hour?.is24Hours);
    }

    get today() {
        const today = format(new Date(), 'EEEE');

        return this.schedule[today];
    }

    get schedule() {
        const schedule: Record<string, Collection<StoreHour>> = {};
        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        for (let i = 0; i < week.length; i++) {
            const day = week[i]!;

            schedule[day] = new Collection();
        }

        for (let i = 0; i < this.hours.length; i++) {
            const hour = this.hours.objectAt(i);

            if (hour && schedule[hour.day]) {
                schedule[hour.day].pushObject(hour);
            }
        }

        return schedule;
    }

    // remove default resource methods
    create() {
        throw new Error('There is no create() method store location!');
    }

    // remove default resource methods
    update() {
        throw new Error('There is no update() method store location!');
    }

    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method store location!');
    }
}

register('resource', 'StoreLocation', StoreLocation);
