import { Resource } from '@fleetbase/sdk';
import { format, parse, isValid } from 'date-fns';

export default class StoreHour extends Resource {
    constructor(attributes = {}, adapter, options = {}) {
        super(attributes, adapter, 'store-hour', options);
    }

    get day() {
        return this.getAttribute('day');
    }

    get startDateInstance() {
        if (!this.hasAttribute('start')) {
            return null;
        }

        const includesSeconds = this.getAttribute('start').split(':').length === 3;
        const format = includesSeconds ? 'k:mm:ss' : 'k:mm';

        return parse(this.getAttribute('start'), format, new Date());
    }

    get endDateInstance() {
        if (!this.hasAttribute('end')) {
            return null;
        }

        const includesSeconds = this.getAttribute('end').split(':').length === 3;
        const format = includesSeconds ? 'k:mm:ss' : 'k:mm';

        return parse(this.getAttribute('end'), format, new Date());
    }

    get humanReadableHours() {
        if (!isValid(this.startDateInstance) || !isValid(this.endDateInstance)) {
            return `${this.start} - ${this.end}`;
        }

        return `${format(this.startDateInstance, 'p')} - ${format(this.endDateInstance, 'p')}`;
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
