import type { AdapterLike, Resource } from '@fleetbase/sdk';
import type { RequestOptions as SdkRequestOptions } from '@fleetbase/sdk';

export type Attributes = Record<string, unknown>;

/** Request options passed through to the core SDK adapter. */
export interface RequestOptions extends SdkRequestOptions {
    headers?: Record<string, string>;
    [option: string]: unknown;
}

/** The core SDK adapter, with responses typed by the caller. */
export interface StorefrontAdapter extends AdapterLike {
    get<T = unknown>(path: string, query?: Attributes, options?: RequestOptions): Promise<T>;
    post<T = unknown>(path: string, data?: unknown, options?: RequestOptions): Promise<T>;
    put<T = unknown>(path: string, data?: unknown, options?: RequestOptions): Promise<T>;
    patch<T = unknown>(path: string, data?: unknown, options?: RequestOptions): Promise<T>;
    delete<T = unknown>(path: string, options?: RequestOptions, legacyOptions?: RequestOptions): Promise<T>;
}

export interface StorefrontConfig {
    version?: string;
    host?: string;
    namespace?: string;
    adapter?: AdapterLike;
}

export type ResourceIdentifier = string | Resource;

export type ResolvableIdentifier = string | { id?: string } | null | undefined;

export type ResourceConstructor<T> = new (attributes?: Attributes, adapter?: AdapterLike, options?: Attributes) => T;

/** Response of `customer.socketToken()` (`POST customers/socket-token`). */
export interface SocketTokenResponse {
    /** Short-lived realtime token; pass it to `socket.authenticate(token)`. */
    token: string;
    /** Lifetime in seconds. Refresh about 60 seconds before it elapses. */
    expires_in: number;
    /** Expiry as an ISO 8601 timestamp. */
    expires_at: string;
}
