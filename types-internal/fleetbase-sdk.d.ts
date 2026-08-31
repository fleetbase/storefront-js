declare module '@fleetbase/sdk' {
    export class Adapter {
        constructor(config?: Record<string, unknown>);
        get<T = unknown>(endpoint: string, params?: unknown, options?: unknown): Promise<T>;
        post<T = unknown>(endpoint: string, params?: unknown, options?: unknown): Promise<T>;
        put<T = unknown>(endpoint: string, params?: unknown, options?: unknown): Promise<T>;
        patch<T = unknown>(endpoint: string, params?: unknown, options?: unknown): Promise<T>;
        delete<T = unknown>(endpoint: string, params?: unknown, options?: unknown): Promise<T>;
        setHeaders(headers: Record<string, string>): this;
    }

    export class Collection<T = unknown> extends Array<T> {
        constructor(items?: T[]);
        get first(): T | undefined;
        get last(): T | undefined;
        objectAt(index: number): T | undefined;
        pushObject(value: T): this;
    }

    export class Store<T = unknown> {
        constructor(resource: string, adapter: Adapter, options?: Record<string, unknown>);
        resource: string;
        adapter: Adapter;
        namespace: string;
        options: Record<string, unknown>;
        afterFetch(json: unknown): T;
        create(attributes?: Record<string, unknown>, options?: Record<string, unknown>): Promise<T>;
        update(id: string | number, attributes?: Record<string, unknown>, options?: Record<string, unknown>): Promise<T>;
        findRecord(id: string | number, options?: Record<string, unknown>): Promise<T>;
        findAll(options?: Record<string, unknown>): Promise<Collection<T>>;
        query(query?: Record<string, unknown>, options?: Record<string, unknown>): Promise<Collection<T>>;
        queryRecord(query?: Record<string, unknown>, options?: Record<string, unknown>): Promise<T>;
        destroy(record: string | number | Resource, options?: Record<string, unknown>): Promise<T>;
    }

    export class StoreActions {
        constructor(actions?: Record<string, unknown>, bind?: unknown);
    }

    export class Resource {
        constructor(attributes?: Record<string, unknown>, adapter?: Adapter, resource?: string, options?: Record<string, unknown>);
        adapter: Adapter;
        store: Store;
        resource: string;
        options: Record<string, unknown>;
        get id(): string;
        getAttribute<T = unknown>(attribute: string, defaultValue?: T): T;
        getAttributes(attributes: string[]): Record<string, unknown>;
        hasAttribute(attribute: string): boolean;
        syncAttributes(attributes: Record<string, unknown>): this;
        serialize(): Record<string, unknown>;
        destroy(options?: Record<string, unknown>): unknown;
    }

    export class Order extends Resource {
        constructor(attributes?: Record<string, unknown>, adapter?: Adapter, options?: Record<string, unknown>);
    }
    export class Place extends Resource {
        constructor(attributes?: Record<string, unknown>, adapter?: Adapter, options?: Record<string, unknown>);
    }
    export class ServiceQuote extends Resource {
        constructor(attributes?: Record<string, unknown>, adapter?: Adapter, resource?: string, options?: Record<string, unknown>);
    }

    export function classify(value: string): string;
    export function detectAdapter(options?: Record<string, unknown>): Adapter;
    export function extendStoreActions<T extends Store>(store: T, actions?: StoreActions | undefined[]): T;
    export function isResource(value: unknown): value is Resource;
    export function lookup<T = unknown>(type: string, className: string, ...args: unknown[]): T;
    export function register(type: string, className: string, value: unknown): void;
}
