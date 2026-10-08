import type { Adapter, Resource } from '@fleetbase/sdk';

export type Attributes = Record<string, unknown>;

export interface RequestOptions extends Record<string, unknown> {
    headers?: Record<string, string | undefined>;
}

export interface StorefrontConfig {
    version?: string;
    host?: string;
    namespace?: string;
    adapter?: Adapter;
}

export type ResourceIdentifier = string | Resource;

export type ResolvableIdentifier = string | { id?: string } | null | undefined;

export type ResourceConstructor<T> = new (attributes?: Attributes, adapter?: Adapter, options?: Attributes) => T;

/** Response of `customer.socketToken()` (`POST customers/socket-token`). */
export interface SocketTokenResponse {
    /** Short-lived realtime token; pass it to `socket.authenticate(token)`. */
    token: string;
    /** Lifetime in seconds. Refresh about 60 seconds before it elapses. */
    expires_in: number;
    /** Expiry as an ISO 8601 timestamp. */
    expires_at: string;
}
