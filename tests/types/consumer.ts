import Storefront, { Cart, Customer, FoodTruck, Network, Order, Product, Store } from '@fleetbase/storefront';

const client = new Storefront(`store_${'a'.repeat(32)}`);
const replacement = Storefront.newInstance(`network_${'b'.repeat(32)}`);

client.setAdapter(replacement.getAdapter());
client.search('coffee').then((products) => products[0] satisfies Product);
client.getOwner().then((owner) => owner satisfies Store | Network);

new Cart();
new Customer();
new FoodTruck();
new Order();
