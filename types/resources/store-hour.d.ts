import Resource from '../resource.js';
import { Adapter } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export default class StoreHour extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    get day(): string;
    get isClosed(): boolean;
    get is24Hours(): boolean;
    get startDateInstance(): Date | null;
    get endDateInstance(): Date | null;
    get humanReadableHoursRange(): string;
    get humanReadableHours(): string;
    create(): void;
    update(): void;
    destroy(): void;
    reload(): void;
}
