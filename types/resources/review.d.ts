import Resource from '../resource.js';
import { type AdapterLike, StoreActions } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export declare const reviewActions: StoreActions;
export default class Review extends Resource {
    constructor(attributes?: Attributes, adapter?: AdapterLike, options?: Attributes);
    getMedia(): Attributes[];
    getPhotos(): Attributes[];
    getVideos(): Attributes[];
}
