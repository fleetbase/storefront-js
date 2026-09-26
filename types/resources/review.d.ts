import Resource from '../resource.js';
import { Adapter, StoreActions } from '@fleetbase/sdk';
import type { Attributes } from '../types.js';
export declare const reviewActions: StoreActions;
export default class Review extends Resource {
    constructor(attributes?: Attributes, adapter?: Adapter, options?: Attributes);
    getMedia(): Attributes[];
    getPhotos(): Attributes[];
    getVideos(): Attributes[];
}
