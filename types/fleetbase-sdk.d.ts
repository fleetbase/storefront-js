declare module '@fleetbase/sdk' {
    export class Adapter {
        constructor(config?: Record<string, unknown>);
        get(endpoint: string, params?: unknown, options?: unknown): Promise<any>;
        post(endpoint: string, params?: unknown, options?: unknown): Promise<any>;
        put(endpoint: string, params?: unknown, options?: unknown): Promise<any>;
        delete(endpoint: string, params?: unknown, options?: unknown): Promise<any>;
        setHeaders(headers: Record<string, string>): this;
    }

    export class Collection<T = any> extends Array<T> {
        get first(): T | undefined;
        get last(): T | undefined;
        objectAt(index: number): T | undefined;
        pushObject(value: T): this;
    }

    export class Store {
        constructor(resource: string, adapter: Adapter, options?: Record<string, unknown>);
        resource: string;
        adapter: Adapter;
        namespace: string;
        options: Record<string, unknown>;
        afterFetch(json: unknown): any;
        findRecord(id: string, options?: Record<string, unknown>): Promise<any>;
    }

    export class StoreActions {
        constructor(actions?: Record<string, unknown>, bind?: unknown);
    }

    export class Resource {
        constructor(attributes?: Record<string, any>, adapter?: Adapter, resource?: string, options?: Record<string, unknown>);
        adapter: Adapter;
        store: Store & Record<string, any>;
        resource: string;
        options: Record<string, any>;
        get id(): string;
        getAttribute(attribute: string, defaultValue?: any): any;
        getAttributes(attributes: string[]): Record<string, any>;
        hasAttribute(attribute: string): boolean;
        syncAttributes(attributes: Record<string, any>): this;
        serialize(): Record<string, any>;
        destroy(options?: Record<string, unknown>): Promise<any>;
    }

    export class Order extends Resource {}
    export class Place extends Resource {}
    export class ServiceQuote extends Resource {}

    export function classify(value: string): string;
    export function detectAdapter(options?: Record<string, unknown>): Adapter;
    export function extendStoreActions<T extends Store>(store: T, actions?: StoreActions | unknown[]): T | undefined;
    export function isResource(value: unknown): value is Resource;
    export function lookup(type: string, className: string, ...args: any[]): any;
    export function register(type: string, className: string, value: unknown): void;
}
