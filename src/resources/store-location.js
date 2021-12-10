import Resource from '../resource';
import StoreHour from './store-hour';
import { Collection } from '@fleetbase/sdk';

export default class StoreLocation extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store-location', options);
    }

    get hours() {
        return new Collection(this.getAttribute('hours').map(attributes => new StoreHour(attributes)));
    }

    get schedule() {
        const schedule = {};
        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        for (let i = 0; i < week.length; i++) {
            const day = week[i]

            schedule[day] = new Collection();
        }

        for (let i = 0; i < this.hours.length; i++) {
            const hour = this.hours.objectAt(i);

            schedule[hour.day].pushObject(hour);
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