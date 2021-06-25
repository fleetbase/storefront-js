/**
 * // instance
 * const storefront = new Storefront();
 *
 */

export default class Storefront {
    /**
	 * Builds an instance of the Fleetbase SDK
	 *
	 * @param  {String} storeKey  The access key for the storefront store
	 * @param  {Object} config    The config object
	 * @param  {Boolean} debug    Enable debug mode
	 * @return {Storefront}        Instance
	 */
    constructor(storeKey, config = {}, debug = false) {
        this.version = config.version || 'v1';
        this.options = {
            version: this.version,
            host: config.host || 'https://api.fleetbase.io',
            namespace: `storefront/${this.version}` || config.namespace,
            debug,
            storeKey
        };

        if (typeof storeKey !== 'string' || storeKey.length === 0 || !storeKey.startsWith('store_')) {
            throw new Error('⚠️ Invalid storefront key given to Storefront SDK');
        }
    }

}
