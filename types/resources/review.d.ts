export default class Review extends Resource {
    constructor(attributes: {}, adapter: any, options?: {});
    getMedia(): void;
    getPhotos(): void;
    getVideos(): void;
}
import Resource from '../resource';
export const reviewActions: StoreActions;
import { StoreActions } from '@fleetbase/sdk';
