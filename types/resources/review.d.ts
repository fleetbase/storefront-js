export const reviewActions: StoreActions;
export default class Review extends Resource {
    constructor(attributes?: {}, adapter?: any, options?: {});
    getMedia(): any;
    getPhotos(): any;
    getVideos(): any;
}
import { StoreActions } from '@fleetbase/sdk';
import Resource from '../resource.js';
