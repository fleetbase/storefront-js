import Storefront, { Cart, Customer, FoodTruck, Network, Order, Product, Store } from '@fleetbase/storefront';

const client = new Storefront(`store_${'a'.repeat(32)}`);
const replacement = Storefront.newInstance(`network_${'b'.repeat(32)}`);

client.setAdapter(replacement.getAdapter());
client.search('coffee').then((products) => products[0] satisfies Product);
client.getOwner().then((owner) => owner satisfies Store | Network);
client.products.findAll().then((products) => products[0] satisfies Product);
client.customers.login('person@example.com', 'secret');
client.cart.add('cart_1', 'product_1', 2);
client.checkout.captureOrder('checkout-token').then((order) => order satisfies Order);
client.orders.getReceipt('order_1');
client.reviews.count('store_1');

new Cart();
new Customer();
new FoodTruck();
new Order();
