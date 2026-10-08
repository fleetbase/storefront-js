import Resource from '../resource.js';
import { type AdapterLike } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class StoreHour extends Resource {
    constructor(attributes?: Attributes, adapter?: AdapterLike, options?: Attributes);
    get day(): string;
    get isClosed(): boolean;
    get is24Hours(): boolean;
    get startDateInstance(): Date | null;
    get endDateInstance(): Date | null;
    get humanReadableHoursRange(): string;
    get humanReadableHours(): string;
    create(): never;
    update(): never;
    destroy(): never;
    reload(): never;
}
