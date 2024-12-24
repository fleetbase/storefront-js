"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./store-C9rG6_hX.js"),t=require("@fleetbase/sdk"),r=function(r){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e._classCallCheck(this,o),e._callSuper(this,o,[t,r,"network",n])}return e._inherits(o,r),e._createClass(o,[{key:"getTags",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.adapter.get("tags",e)}},{key:"getResourceCollection",value:(i=e._asyncToGenerator(e._regeneratorRuntime().mark((function r(o,n){var a,s,i=this,u=arguments;return e._regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:{},e.prev=1,e.next=4,this.adapter.get(o,a);case 4:return s=e.sent,e.abrupt("return",new t.Collection(s.map((function(e){return new n(e,i.adapter)}))));case 8:throw e.prev=8,e.t0=e.catch(1),console.error("Error fetching ".concat(o,":"),e.t0),e.t0;case 12:case"end":return e.stop()}}),r,this,[[1,8]])}))),function(e,t){return i.apply(this,arguments)})},{key:"getStores",value:(s=e._asyncToGenerator(e._regeneratorRuntime().mark((function t(){var r,o=arguments;return e._regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:{},t.abrupt("return",this.getResourceCollection("stores",e.Store,r));case 2:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)})},{key:"getStoreLocations",value:(a=e._asyncToGenerator(e._regeneratorRuntime().mark((function t(){var r,o=arguments;return e._regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:{},t.abrupt("return",this.getResourceCollection("store-locations",e.StoreLocation,r));case 2:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"getPaymentGateways",value:(n=e._asyncToGenerator(e._regeneratorRuntime().mark((function t(){return e._regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getResourceCollection("gateways",e.PaymentGateway));case 1:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}]);var n,a,s,i}(e.StorefrontResource),o=function(){function r(o){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(e._classCallCheck(this,r),this.version=a.version||"v1",this.options={version:this.version,host:a.host||"https://api.fleetbase.io",namespace:"storefront/".concat(this.version)||a.namespace,publicKey:o,debug:s},!("string"==typeof(n=o)&&n.length>30&&(n.startsWith("store_")||n.startsWith("network_"))))throw new Error("⚠️ Invalid Storefront key given to Storefront SDK");this.adapter=a.adapter||function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.isNodeEnvironment()?e.lookup("adapter","NodeAdapter",r):e.lookup("adapter","BrowserAdapter",r)}(this.options),this.products=new e.StorefrontStore("product",this.adapter),this.categories=new e.StorefrontStore("category",this.adapter),this.reviews=new e.StorefrontStore("review",this.adapter).extendActions(e.reviewActions),this.customers=new e.StorefrontStore("customer",this.adapter).extendActions(e.customerActions),this.cart=new e.StorefrontStore("cart",this.adapter).extendActions(e.cartActions),this.checkout=new e.StorefrontStore("checkout",this.adapter).extendActions(e.checkoutActions)}return e._createClass(r,[{key:"about",value:function(){return this.adapter.get("about")}},{key:"lookup",value:function(e){return this.adapter.get("lookup/".concat(e))}},{key:"search",value:function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.adapter.get("search",e._objectSpread2({query:r},o)).then((function(r){return new t.Collection(r.map((function(t){return new e.Product(t)})))}))}},{key:"setAdapter",value:function(e){this.adapter=e}},{key:"getAdapter",value:function(){return this.adapter}}],[{key:"newInstance",value:function(){return e._construct(r,Array.prototype.slice.call(arguments))}}])}();exports.Cart=e.Cart,exports.Category=e.Category,exports.Checkout=e.Checkout,exports.Customer=e.Customer,exports.DeliveryServiceQuote=e.DeliveryServiceQuote,exports.PaymentGateway=e.PaymentGateway,exports.Product=e.Product,exports.Review=e.Review,exports.Store=e.Store,exports.StoreHour=e.StoreHour,exports.StoreLocation=e.StoreLocation,exports.lookup=e.lookup,exports.Network=r,exports.default=o;
//# sourceMappingURL=storefront.js.map
