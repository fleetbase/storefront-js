import Resource from '../resource.js';
import { format, parse, isValid } from 'date-fns';
import { Adapter, register } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';

export default class StoreHour extends Resource {
    constructor(attributes: Attributes = {}, adapter?: Adapter, options: Attributes = {}) {
        super(attributes, adapter, 'store-hour', options);
    }

    get day(): string {
        return this.getAttribute('day') as string;
    }

    get isClosed() {
        return this.getAttribute('start') === null && this.getAttribute('end') === null;
    }

    get is24Hours() {
        const start = this.startDateInstance;
        const end = this.endDateInstance;

        if (start === null || end === null || !isValid(start) || !isValid(end)) {
            return false;
        }

        const diff = Math.abs(start.getTime() - end.getTime());
        const hours = Math.floor(diff / 1000 / 60) / 60;

        return hours > 23;
    }

    get startDateInstance(): Date | null {
        if (!this.hasAttribute('start')) {
            return null;
        }

        const start = this.getAttribute('start');
        if (typeof start !== 'string') {
            return null;
        }
        const includesSeconds = start.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';

        return parse(start, format, new Date());
    }

    get endDateInstance(): Date | null {
        if (!this.hasAttribute('end')) {
            return null;
        }

        const end = this.getAttribute('end');
        if (typeof end !== 'string') {
            return null;
        }
        const includesSeconds = end.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';

        return parse(end, format, new Date());
    }

    get humanReadableHoursRange() {
        const start = this.startDateInstance;
        const end = this.endDateInstance;

        if (start === null || end === null || !isValid(start) || !isValid(end)) {
            return `${this.getAttribute('start')} - ${this.getAttribute('end')}`;
        }

        return `${format(start, 'p')} - ${format(end, 'p')}`;
    }

    get humanReadableHours() {
        if (this.isClosed) {
            return 'Closed';
        }

        if (this.is24Hours) {
            return '24 Hours';
        }

        return this.humanReadableHoursRange;
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

    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method store location!');
    }
}

register('resource', 'StoreHour', StoreHour);
