import Storefront = require('@fleetbase/storefront');

const client = new Storefront(`store_${'a'.repeat(32)}`);
const product: InstanceType<typeof Storefront.Product> = new Storefront.Product();

void client;
void product;
