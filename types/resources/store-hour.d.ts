export default class StoreHour extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    get day(): any;
    get isClosed(): boolean;
    get is24Hours(): boolean;
    get startDateInstance(): Date;
    get endDateInstance(): Date;
    get humanReadableHoursRange(): string;
    get humanReadableHours(): string;
    create(): void;
    update(): void;
    destroy(): void;
    reload(): void;
}
import Resource from '../resource';
