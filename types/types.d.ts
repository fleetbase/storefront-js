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
export type ResolvableIdentifier =
    | string
    | {
          id?: string;
      }
    | null
    | undefined;
export type ResourceConstructor<T> = new (attributes?: Attributes, adapter?: Adapter, options?: Attributes) => T;
