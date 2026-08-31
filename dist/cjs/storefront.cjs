'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function t(t,e){this.v=t,this.k=e;}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function n(t){if(Array.isArray(t))return t}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(e){var n={},r=false;function i(n,i){return r=true,i=new Promise((function(t){t(e[n](i));})),{done:false,value:new t(i,1)}}return n["undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator"]=function(){return this},n.next=function(t){return r?(r=false,t):i("next",t)},"function"==typeof e.throw&&(n.throw=function(t){if(r)throw r=false,t;return i("throw",t)}),"function"==typeof e.return&&(n.return=function(t){return r?(r=false,t):i("return",t)}),n}function o(t){var e,n,r,i=2;for("undefined"!=typeof Symbol&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&null!=(e=t[n]))return e.call(t);if(r&&null!=(e=t[r]))return new a(e.call(t));n="@@asyncIterator",r="@@iterator";}throw new TypeError("Object is not async iterable")}function a(t){function e(t){if(Object(t)!==t)return Promise.reject(new TypeError(t+" is not an object."));var e=t.done;return Promise.resolve(t.value).then((function(t){return {value:t,done:e}}))}return a=function(t){this.s=t,this.n=t.next;},a.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:true}):e(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):e(n.apply(this.s,arguments))}},new a(t)}function s(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value;}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i);}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){s(o,r,i,a,u,"next",t);}function u(t){s(o,r,i,a,u,"throw",t);}a(void 0);}))}}function c(e){return new t(e,0)}function l(t,e,n){return e=y(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return r(t)}(t,m()?Reflect.construct(e,n||[],y(t).constructor):e.apply(t,n))}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e,n){if(m())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,e);var i=new(t.bind.apply(t,r));return n&&O(i,n.prototype),i}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||false,r.configurable=true,"value"in r&&(r.writable=true),Object.defineProperty(t,j(r.key),r);}}function v(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),Object.defineProperty(t,"prototype",{writable:false}),t}function p(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=_(t))||e){n&&(t=n);var r=0,i=function(){};return {s:i,n:function(){return r>=t.length?{done:true}:{done:false,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=true,s=false;return {s:function(){n=n.call(t);},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=true,o=t;},f:function(){try{a||null==n.return||n.return();}finally{if(s)throw o}}}}function g(t,e,n){return (e=j(e))in t?Object.defineProperty(t,e,{value:n,enumerable:true,configurable:true,writable:true}):t[e]=n,t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:true,configurable:true}}),Object.defineProperty(t,"prototype",{writable:false}),e&&O(t,e);}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));}catch(t){}return (m=function(){return !!t})()}function w(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r);}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),true).forEach((function(e){g(t,e,n[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e));}));}return t}function x(){x=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value;},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:true,configurable:true,writable:true}),t[e]}try{c({},"");}catch(t){c=function(t,e,n){return t[e]=n};}function l(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),s=new P(r||[]);return i(a,"_invoke",{value:S(t,n,s)}),a}function h(t,e,n){try{return {type:"normal",arg:t.call(e,n)}}catch(t){return {type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",v="executing",p="completed",g={};function y(){}function b(){}function m(){}var w={};c(w,a,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(L([])));E&&E!==n&&r.call(E,a)&&(w=E);var A=m.prototype=y.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}));}));}function R(t,e){function n(i,o,a,s){var u=h(t[i],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s);}),(function(t){n("throw",t,a,s);})):e.resolve(l).then((function(t){c.value=t,a(c);}),(function(t){return n("throw",t,a,s)}))}s(u.arg);}var o;i(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i);}))}return o=o?o.then(i,i):i()}});}function S(e,n,r){var i=f;return function(o,a){if(i===v)throw Error("Generator is already running");if(i===p){if("throw"===o)throw a;return {value:t,done:true}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var u=j(s,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=p,r.arg;r.dispatchException(r.arg);}else "return"===r.method&&r.abrupt("return",r.arg);i=v;var c=h(e,n,r);if("normal"===c.type){if(i=r.done?p:d,c.arg===g)continue;return {value:c.arg,done:r.done}}"throw"===c.type&&(i=p,r.method="throw",r.arg=c.arg);}}}function j(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=h(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(true);}function L(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=false,n;return n.value=t,n.done=true,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=m,i(A,"constructor",{value:m,configurable:true}),i(m,"constructor",{value:b,configurable:true}),b.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return !!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return {__await:t}},O(R.prototype),c(R.prototype,s,(function(){return this})),e.AsyncIterator=R,e.async=function(t,n,r,i,o){ void 0===o&&(o=Promise);var a=new R(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(A),c(A,u,"Generator"),c(A,a,(function(){return this})),c(A,"toString",(function(){return "[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=false,t}return t.done=true,t}},e.values=L,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=false,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t);},stop:function(){this.done=true;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,true);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,true)}else {if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n);}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function R(t,e){return n(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,a,s=[],u=true,c=false;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1;}else for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);u=!0);}catch(t){c=true,i=t;}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(t,e)||_(t,e)||k()}function S(t){return function(t){if(Array.isArray(t))return e(t)}(t)||w(t)||_(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===e?String:Number)(t)}(t,"string");return "symbol"==typeof e?e:e+""}function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function _(t,n){if(t){if("string"==typeof t)return e(t,n);var r={}.toString.call(t).slice(8,-1);return "Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function P(t){return function(){return new L(t.apply(this,arguments))}}function L(e){var n,r;function i(n,r){try{var a=e[n](r),s=a.value,u=s instanceof t;Promise.resolve(u?s.v:s).then((function(t){if(u){var r="return"===n?"return":"next";if(!s.k||t.done)return i(r,t);t=e[r](t).value;}o(a.done?"return":"normal",t);}),(function(t){i("throw",t);}));}catch(t){o("throw",t);}}function o(t,e){switch(t){case "return":n.resolve({value:e,done:true});break;case "throw":n.reject(e);break;default:n.resolve({value:e,done:false});}(n=n.next)?i(n.key,n.arg):r=null;}this._invoke=function(t,e){return new Promise((function(o,a){var s={key:t,arg:e,resolve:o,reject:a,next:null};r?r=r.next=s:(n=r=s,i(t,e));}))},"function"!=typeof e.return&&(this.return=void 0);}function C(t){var e="function"==typeof Map?new Map:void 0;return C=function(t){if(null===t||!function(t){try{return -1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return "function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n);}function n(){return f(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}}),O(n,t)},C(t)}L.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},L.prototype.next=function(t){return this._invoke("next",t)},L.prototype.throw=function(t){return this._invoke("throw",t)},L.prototype.return=function(t){return this._invoke("return",t)};var N=function(){function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];h(this,t),g(this,"uncountableWords",["equipment","information","rice","money","species","series","fish","sheep","moose","deer","news"]),g(this,"pluralRules",[[new RegExp("(m)an$","gi"),"$1en"],[new RegExp("(pe)rson$","gi"),"$1ople"],[new RegExp("(child)$","gi"),"$1ren"],[new RegExp("^(ox)$","gi"),"$1en"],[new RegExp("(ax|test)is$","gi"),"$1es"],[new RegExp("(octop|vir)us$","gi"),"$1i"],[new RegExp("(alias|status)$","gi"),"$1es"],[new RegExp("(bu)s$","gi"),"$1ses"],[new RegExp("(buffal|tomat|potat)o$","gi"),"$1oes"],[new RegExp("([ti])um$","gi"),"$1a"],[new RegExp("sis$","gi"),"ses"],[new RegExp("(?:([^f])fe|([lr])f)$","gi"),"$1$2ves"],[new RegExp("(hive)$","gi"),"$1s"],[new RegExp("([^aeiouy]|qu)y$","gi"),"$1ies"],[new RegExp("(x|ch|ss|sh)$","gi"),"$1es"],[new RegExp("(matr|vert|ind)ix|ex$","gi"),"$1ices"],[new RegExp("([m|l])ouse$","gi"),"$1ice"],[new RegExp("(quiz)$","gi"),"$1zes"],[new RegExp("s$","gi"),"s"],[new RegExp("$","gi"),"s"]]),g(this,"singularRules",[[new RegExp("(m)en$","gi"),"$1an"],[new RegExp("(pe)ople$","gi"),"$1rson"],[new RegExp("(child)ren$","gi"),"$1"],[new RegExp("([ti])a$","gi"),"$1um"],[new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$","gi"),"$1$2sis"],[new RegExp("(hive)s$","gi"),"$1"],[new RegExp("(tive)s$","gi"),"$1"],[new RegExp("(curve)s$","gi"),"$1"],[new RegExp("([lr])ves$","gi"),"$1f"],[new RegExp("([^fo])ves$","gi"),"$1fe"],[new RegExp("([^aeiouy]|qu)ies$","gi"),"$1y"],[new RegExp("(s)eries$","gi"),"$1eries"],[new RegExp("(m)ovies$","gi"),"$1ovie"],[new RegExp("(x|ch|ss|sh)es$","gi"),"$1"],[new RegExp("([m|l])ice$","gi"),"$1ouse"],[new RegExp("(bus)es$","gi"),"$1"],[new RegExp("(o)es$","gi"),"$1"],[new RegExp("(shoe)s$","gi"),"$1"],[new RegExp("(cris|ax|test)es$","gi"),"$1is"],[new RegExp("(octop|vir)i$","gi"),"$1us"],[new RegExp("(alias|status)es$","gi"),"$1"],[new RegExp("^(ox)en","gi"),"$1"],[new RegExp("(vert|ind)ices$","gi"),"$1ex"],[new RegExp("(matr)ices$","gi"),"$1ix"],[new RegExp("(quiz)zes$","gi"),"$1"],[new RegExp("s$","gi"),""]]),g(this,"nonTitlecasedWords",["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"]),g(this,"idSuffix",new RegExp("(_ids|_id)$","g")),g(this,"underbar",new RegExp("_","g")),g(this,"spaceOrUnderbar",new RegExp("[ _]","g")),g(this,"uppercase",new RegExp("([A-Z])","g")),g(this,"underbarPrefix",new RegExp("^_")),this.str=e,this.chain=n;}return v(t,[{key:"get",value:function(){return this.str}},{key:"applyRules",value:function(t,e,n,r){if(r)t=r;else if(!(n.indexOf(t.toLowerCase())>-1))for(var i=0;i<e.length;i++)if(t.match(e[i][0])){t=t.replace(e[i][0],e[i][1]);break}return this.str=t,true===this.chain?this:t}},{key:"pluralize",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t=t||this.str,this.applyRules(t,this.pluralRules,this.uncountableWords,e)}},{key:"singularize",value:function(t,e){return t=t||this.str,this.applyRules(t,this.singularRules,this.uncountableWords,e)}},{key:"camelize",value:function(t,e){for(var n=(t=t||this.str).split("/"),r=0;r<n.length;r++){for(var i=n[r].split("_"),o=e&&r+1===n.length?1:0;o<i.length;o++)i[o]=i[o].charAt(0).toUpperCase()+i[o].substring(1);n[r]=i.join("");}if(t=n.join("::"),true===e){var a=t.charAt(0).toLowerCase(),s=t.slice(1);t=a+s;}return this.str=t,true===this.chain?this:t}},{key:"underscore",value:function(t){for(var e=(t=t||this.str).split("::"),n=0;n<e.length;n++)e[n]=e[n].replace(this.uppercase,"_$1"),e[n]=e[n].replace(this.underbarPrefix,"");return t=e.join("/").toLowerCase(),this.str=t,true===this.chain?this:t}},{key:"humanize",value:function(t,e){return t=(t=(t=(t=t||this.str).toLowerCase()).replace(this.idSuffix,"")).replace(this.underbar," "),e||(t=this.capitalize(t)),this.str=t,true===this.chain?this:t}},{key:"capitalize",value:function(t){return t=(t=(t=t||this.str).toLowerCase()).substring(0,1).toUpperCase()+t.substring(1),this.str=t,true===this.chain?this:t}},{key:"dasherize",value:function(t){return t=(t=(t=t||this.str).replace(this.spaceOrUnderbar,"-")).toLowerCase(),this.str=t,true===this.chain?this:t}},{key:"normify",value:function(t,e){t=t||this.str,true===e?(t=this.camelize(t),t=this.underscore(t)):t=t.toLowerCase();for(var n=(t=t.replace(this.underbar," ")).split(" "),r=0;r<n.length;r++){for(var i=n[r].split("-"),o=0;o<i.length;o++)this.nonTitlecasedWords.indexOf(i[o].toLowerCase())<0&&(i[o]=this.capitalize(i[o]));n[r]=i.join("-");}return t=(t=n.join(" ")).substring(0,1).toUpperCase()+t.substring(1),this.str=t,true===this.chain?this:t}},{key:"demodulize",value:function(t){var e=(t=t||this.str).split("::");return t=e[e.length-1],this.str=t,true===this.chain?this:t}},{key:"tableize",value:function(t){t=t||this.str;var e=this.chain;return this.chain=false,t=this.pluralize(this.underscore(t)),this.chain=e,this.str=t,true===this.chain?this:t}},{key:"classify",value:function(t){t=t||this.str,t=(t="".concat(t).trim()).replace(/[\s\-_]+/g,"_");var e=this.chain;return this.chain=false,t=this.singularize(t),t=this.camelize(t,false),this.chain=e,this.str=t,this.chain?this:t}},{key:"foreignKey",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=t||this.str,t=this.underscore(this.demodulize(t))+(e?"":"_")+"id",this.str=t,true===this.chain?this:t}},{key:"ordinalize",value:function(t){for(var e=(t=t||this.str).split(" "),n=0;n<e.length;n++){var r=parseInt(e[n]);if(isNaN(r)){var i=e[n].substring(e[n].length-2),o=e[n].substring(e[n].length-1),a="th";"11"!=i&&"12"!=i&&"13"!=i&&("1"===o?a="st":"2"===o?a="nd":"3"===o&&(a="rd")),e[n]+=a;}}return t=e.join(" "),this.str=t,true===this.chain?this:t}}],[{key:"invoke",value:function(){var e=Object.values(arguments),n=new t(null,false),r=arguments[0];return e.shift(),"function"==typeof n[r]?n[r].apply(n,e):null}}])}(),F=function(){var t=["pluralize"].concat(Array.prototype.slice.call(arguments));return N.invoke.apply(N,S(t))},D=function(){var t=["singularize"].concat(Array.prototype.slice.call(arguments));return N.invoke.apply(N,S(t))},z=function(){var t=["classify"].concat(Array.prototype.slice.call(arguments));return N.invoke.apply(N,S(t))},B={resources:{},adapters:{},storse:{},actions:{}};function q(t,e,n){var r=F(t);B[r]||(B[r]={}),B[r][e]=n;}function I(t,e){var n=F(t);if(!B[n])throw new Error("Unknown type: ".concat(D(t)));if(!B[n][e])throw new Error("No ".concat(D(t)," named '").concat(e,"' registered."));for(var r=B[n][e],i=arguments.length,o=new Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a];return f(r,o)}function M(){return I.apply(void 0,["store","Store"].concat(Array.prototype.slice.call(arguments)))}(function(){return v((function t(){return h(this,t),this.lookup.apply(this,arguments)}),[{key:"lookup",value:function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return I.apply(void 0,[t,e].concat(r))}}])})();function W(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return I.apply(void 0,[t,z(e)].concat(r))}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return W.apply(void 0,["resource",z(t)].concat(n))}var V=Array.isArray,X=6e4;function Q(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(V(t))if(r.length<=X)t.splice.apply(t,[e,n].concat(S(r)));else {t.splice(e,n);for(var i=0;i<r.length;i+=X){var o=r.slice(i,i+X);t.splice.apply(t,[e+i,0].concat(S(o)));}}else Z(t)&&t.replace(e,n,r);}function Y(t){return t}function Z(t){return t instanceof at}function tt(t,e){return V(t)?t[e]:Z(t)?t.objectAt(e):null}function et(t,e){return 2===arguments.length?function(n){return e===n[t]}:function(e){return Boolean(e[t])}}function nt(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=t.length,i=n;i<r;i++){if(e(tt(t,i),i,t))return i}return  -1}function rt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,i=t.length;return n<0&&(n+=i),nt(t,r&&e!=e?function(t){return t!=t}:function(t){return t===e},n)}function it(t,e,n){return Q(t,e,0,[n]),n}function ot(){return f(at,Array.prototype.slice.call(arguments))}var at=function(){function t(){return h(this,t),r(V(arguments[0])?l(this,t,S(arguments[0])):l(this,t,arguments))}return b(t,C(Array)),v(t,[{key:"notEmpty",get:function(){return this.length>0}},{key:"empty",get:function(){return 0===this.length}},{key:"first",get:function(){return tt(this,0)}},{key:"last",get:function(){return tt(this,this.length-1)}},{key:"replace",value:function(t,e){return Q(this,t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]),this}},{key:"objectsAt",value:function(t){var e=this;return t.map((function(t){return tt(e,t)}))}},{key:"objectAt",value:function(t){return tt(this,t)}},{key:"indexOf",value:function(t,e){return rt(this,t,e,false)}},{key:"lastIndexOf",value:function(t,e){var n=this.length;(void 0===e||e>=n)&&(e=n-1),e<0&&(e+=n);for(var r=e;r>=0;r--)if(tt(this,r)===t)return r;return  -1}},{key:"includes",value:function(t,e){return  -1!==rt(this,t,e,true)}},{key:"findBy",value:function(){return t=this,e=et.apply(void 0,arguments),-1===(r=nt(t,e.bind(n),0))?void 0:tt(t,r);var t,e,n,r;}},{key:"findIndexBy",value:function(){return nt(this,et.apply(void 0,arguments))}},{key:"isEvery",value:function(){return t=this,e=et.apply(void 0,arguments),r=e.bind(n),-1===nt(t,(function(t,e,n){return !r(t,e,n)}),0);var t,e,n,r;}},{key:"isAny",value:function(){return t=this,e=et.apply(void 0,arguments),-1!==nt(t,e.bind(n),0);var t,e,n;}},{key:"invoke",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=[];return this.forEach((function(e){var r;return i.push(null===(r=e[t])||void 0===r?void 0:r.call.apply(r,[e].concat(n)))})),i}},{key:"toArray",value:function(){return this.map((function(t){return t}))}},{key:"compact",value:function(){return this.filter((function(t){return null!=t}))}},{key:"sortBy",value:function(){var t=arguments;return this.sort((function(e,n){var r,i=p(t);try{for(i.s();!(r=i.n()).done;){var o=r.value,a=e[o],s=n[o],u=compare(a,s);if(u)return u}}catch(t){i.e(t);}finally{i.f();}return 0}))}},{key:"uniqBy",value:function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y,n=[],r=new Set,i="function"==typeof e?e:function(t){return get(t,e)};return t.forEach((function(t){var e=i(t);r.has(e)||(r.add(e),n.push(t));})),n}(this,t)}},{key:"without",value:function(t){if(!this.includes(t))return this;var e=t==t?function(e){return e!==t}:function(t){return t==t};return this.filter(e)}},{key:"clear",value:function(){var t=this.length;return 0===t||this.replace(0,t,[]),this}},{key:"insertAt",value:function(t,e){return it(this,t,e),this}},{key:"replaceAt",value:function(t,e){return this.replace(t,1,[e])}},{key:"removeAt",value:function(t,e){return function(t,e){return Q(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,[]),t}(this,t,e)}},{key:"pushObject",value:function(t){return this.insertAt(this.length,t)}},{key:"pushObjects",value:function(t){return this.replace(this.length,0,t),this}},{key:"popObject",value:function(){var t=this.length;if(0===t)return null;var e=tt(this,t-1);return this.removeAt(t-1,1),e}},{key:"shiftObject",value:function(){if(0===this.length)return null;var t=tt(this,0);return this.removeAt(0),t}},{key:"unshiftObject",value:function(t){return it(this,0,t)}},{key:"unshiftObjects",value:function(t){return this.replace(0,0,t),this}},{key:"reverseObjects",value:function(){var t=this.length;if(0===t)return this;var e=this.toArray().reverse();return this.replace(0,t,e),this}},{key:"setObjects",value:function(t){if(0===t.length)return this.clear();var e=this.length;return this.replace(0,e,t),this}},{key:"removeObject",value:function(t){for(var e=this.length||0;--e>=0;){tt(this,e)===t&&this.removeAt(e);}return this}},{key:"removeObjects",value:function(t){for(var e=t.length-1;e>=0;e--)this.removeObject(t[e]);return this}},{key:"addObject",value:function(t){return this.includes(t)||this.pushObject(t),this}},{key:"addObjects",value:function(t){var e=this;return t.forEach((function(t){return e.addObject(t)})),this}}])}();function st(t){var e=null==t;if(e)return e;if("number"==typeof t.size)return !t.size;var n=T(t);if("object"===n){var r=t.size;if("number"==typeof r)return !r}if("number"==typeof t.length&&"function"!==n)return !t.length;if("object"===n){var i=t.length;if("number"==typeof i)return !i}return  false}function lt(){var t,e,n;return !("undefined"==typeof process||"object"!==T(null===(t=process)||void 0===t?void 0:t.env)&&-1===(null===(e=process.release)||void 0===e||null===(e=e.name)||void 0===e?void 0:e.search(/node|io.js/))||"undefined"!=typeof window&&"ReactNative"!==(null===(n=window)||void 0===n||null===(n=n.navigator)||void 0===n?void 0:n.product))}function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return lt()?W("adapter","NodeAdapter",t):W("adapter","BrowserAdapter",t)}(function(){return v((function t(e){h(this,t),this.place=e,this.geometry=null==e?void 0:e.geometry,this.components=this.parseComponents(),this.attributes=this.parseProperties();}),[{key:"parse",value:function(){this.parseComponents(),this.parseProperties();}},{key:"parseComponents",value:function(){var t;return ((null===(t=this.place)||void 0===t?void 0:t.address_components)||[]).reduce((function(t,e){return e.types.forEach((function(n){t[n]=e;})),t}),{})}},{key:"parseProperties",value:function(){var t,e={streetNumber:this.get("street_number"),streetName:this.get("route"),coordinates:null!==(t=this.geometry)&&void 0!==t&&t.location?Object.values(this.geometry.location):[0,0],city:this.or(["locality","sublocality","sublocality_level_1","neighborhood","administrative_area_level_3","administrative_area_level_2"]),county:this.get("administrative_area_level_2"),stateShort:this.get("administrative_area_level_1",true),stateLong:this.get("administrative_area_level_1"),countryShort:this.get("country",true),country:this.get("country",true),countryLong:this.get("country"),postalCode:this.get("postal_code")};return e.address=[e.streetNumber,e.streetName].filter(Boolean).join(" "),e}},{key:"all",value:function(){return this.attributes}},{key:"or",value:function(){var t,e=p(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(V(n)){var r=n[0],i=n[1];if(this.has(r))return this.get(r,i)}else if(this.has(n))return this.get(n)}}catch(t){e.e(t);}finally{e.f();}return null}},{key:"has",value:function(t){return t in this.components}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t in this.components?e?this.components[t].short_name:this.components[t].long_name:null}},{key:"setAttributes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.attributes=A(A({},this.attributes),t),this}},{key:"setAttribute",value:function(t,e){return this.attributes[t]=e,this}},{key:"getAttribute",value:function(t){return this.attributes[t]||null}}])})();var dt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;h(this,t),this.type="Point",this.coordinates=[n,e];}return v(t,[{key:"latitude",get:function(){return this.coordinates[1]}},{key:"longitude",get:function(){return this.coordinates[0]}},{key:"lat",value:function(){return this.latitude}},{key:"lng",value:function(){return this.longitude}},{key:"serialize",value:function(){return {type:"Point",coorindates:[this.lat(),this.lng()]}}},{key:"toJson",value:function(){return this.serialize()}},{key:"toString",value:function(){return "(".concat(this.latitude,", ").concat(this.longitude,")")}}],[{key:"fromGeoJson",value:function(e){var n=R(e.coordinates,2),r=n[0];return new t(n[1],r)}}])}();function vt(t,e){var n=t();return Array.isArray(n)||"object"===T(n)?pt(n,e):null}function pt(t,e){var n,r=t,i=T(t),o="object"===i,a="function"===i,s=Array.isArray(t),u="string"===T(e)&&e.includes(".")?e.split("."):[e];if(s||o){for(var c=0;c<u.length;c++){if(r&&void 0===r[u[c]])return null;if(r){if(r=r[u[c]],"object"===T(n=r)&&!st(null==n?void 0:n.attributes)&&"object"===T(null==n?void 0:n.attributes)&&void 0!==u[c+1]){var l=u.slice(c+1).join(".");return pt(r.attributes,l)}if("function"==typeof r)return vt(r,u.slice(c+1).join("."))}}return r}if(a)return vt(t,e)}function gt(t,e,n){var r=t,i="object"===T(t),o=Array.isArray(t),a="string"===T(e)&&e.includes(".")?e.split("."):[e],s=a.length;if(o||i){for(var u=0;u<s-1;u++)r[a[u]]||(r[a[u]]={}),r=r[a[u]];r[a[s-1]]=n;}return n}function yt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t.actions=V(e)?e:[e],!V(e))return e instanceof mt&&e.extend(t),t;var n,r=p(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;t.extendActions(i);}}catch(t){r.e(t);}finally{r.f();}}var mt=function(){return v((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;h(this,t),this.actions=e,this.bind=n;}),[{key:"extend",value:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||this.bind;if(!t)return this;if(null!=this&&this.actions&&"object"===T(this.actions))for(var e in this.actions){var n=this.actions[e];"function"==typeof n?gt(t,e,n.bind(t)):gt(t,e,n);}return this}}])}();function wt(t){return t instanceof kt}var kt=function(){return v((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};h(this,t),this.attributes=e,this.dirtyAttributes={},this.changes={},this.isLoading=false,this.isSaving=false,this.isDestroying=false,this.isReloading=false,this.resource=r,this.options=i,this.version=i.version||"v1",this.setAdapter(n);}),[{key:"setAdapter",value:function(t){var e;return this.adapter=t,this.store=M(this.resource,t,{onAfterFetch:this.syncAttributes.bind(this),actions:null===(e=this.options)||void 0===e?void 0:e.actions}),this}},{key:"id",get:function(){return this.getAttribute("id")}},{key:"create",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.mergeAttributes(e);return this.setFlags(["isLoading","isSaving"]),this.store.create(n).then((function(e){return t.setFlags(["isLoading","isSaving"],false),e}))}},{key:"update",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.setFlags(["isLoading","isSaving"]),this.store.update(this.attributes.id,e).then((function(e){return t.setFlags(["isLoading","isSaving"],false),e}))}},{key:"destroy",value:function(){var t=this;return this.setFlags(["isLoading","isDestroying"]),this.store.destroy(this.attributes.id).then((function(e){return t.setFlags(["isLoading","isDestroying"],false),e}))}},{key:"reload",value:function(){var t=this;return this.setFlags(["isLoading","isReloading"]),this.store.findRecord(this.attributes.id).then((function(e){return t.reset(),e}))}},{key:"setFlags",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=["isLoading","isSaving","isReloading","isDestroying"],r=0;r<t.length;r++){var i=t[r];if("string"!=typeof i||!n.includes(i))throw new Error("".concat(i," is not a valid flag!"));this[i]=e;}return this}},{key:"reset",value:function(){return this.dirtyAttributes={},this.changes={},this.isLoading=false,this.isSaving=false,this.isReloading=false,this}},{key:"empty",value:function(){return this.reset(),this.attribues={},this}},{key:"save",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getAttributes();return st(this.id)?this.create(e):true===t.onlyDirty?this.savedirty():this.update(e)}},{key:"saveDirty",value:function(){for(var t=Object.keys(this.dirtyAttributes),e={},n=0;n<t.length;n++){var r=t[n];e[r]=this.getAttribute(r);}return this.update(e)}},{key:"meta",get:function(){return this.getAttribute("meta",{})}},{key:"createdAt",get:function(){return this.isAttributeFilled("created_at")?new Date(this.getAttribute("created_at")):null}},{key:"updatedAt",get:function(){return this.isAttributeFilled("updated_at")?new Date(this.getAttribute("updated_at")):null}},{key:"isLoaded",get:function(){return this.hasAttributes(["created_at","id"])}},{key:"isEmpty",get:function(){return 0===Object.values(null==this?void 0:this.attributes).length}},{key:"isNew",get:function(){return !this.id}},{key:"isSaved",get:function(){return !this.isNew&&this.isLoaded}},{key:"isDeleted",get:function(){return this.hasAttributes(["deleted","time"])}},{key:"eachAttribute",value:function(t){var e,n=this;return "function"!=typeof t||Object.keys(null!==(e=null==this?void 0:this.attributes)&&void 0!==e?e:{}).forEach((function(e){var r=n.getAttribute(e);t.call(n,r,e);})),this}},{key:"changes",value:function(){return this.changes}},{key:"getDirtyAttributes",value:function(){return this.dirtyAttributes}},{key:"isDirty",value:function(t){return t in this.dirtyAttributes}},{key:"hasDirtyAttributes",value:function(){var t;return Object.keys(null!==(t=null==this?void 0:this.dirtyAttributes)&&void 0!==t?t:{}).length>0}},{key:"mutate",value:function(t,e){this.attributes[t]=e;}},{key:"setAttribute",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===n&&"object"===T(t))return this.setAttributes(t);var r=null!==(e=null==this?void 0:this.attributes[t])&&void 0!==e?e:null;return gt(this.attributes,t,n),gt(this.dirtyAttributes,t,r),V(null==this?void 0:this.changes[t])||(this.changes[t]=[]),this.changes[t].push({property:t,previousValue:r,value:n,changedAt:new Date}),this}},{key:"setAttributes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in t)this.setAttribute(e,t[e]);return this}},{key:"getAttribute",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=pt(null!==(e=null==this?void 0:this.attributes)&&void 0!==e?e:{},t);return void 0===r?n:r}},{key:"hasAttribute",value:function(t){if(V(t)){var e,n=t,r=Object.keys(null!==(e=this.attributes)&&void 0!==e?e:{});return n.every((function(t){return r.includes(t)}))}return !(null==this||!this.attributes)&&t in this.attributes}},{key:"hasAttributes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.hasAttribute(t)}},{key:"isAttributeFilled",value:function(t){var e=this;return V(t)?this.hasAttribute(t)&&t.every((function(t){return !st(e.getAttribute(t))})):this.hasAttribute(t)&&!st(this.getAttribute(t))}},{key:"getAttributes",value:function(t){var e={};if(null==t)return this.getAttributes(Object.keys(this.attributes));if("string"==typeof t)return this.getAttribute(Array.prototype.slice.call(arguments));if(!V(t))throw new Error("No attribute properties provided!");var n,r=p(t);try{for(r.s();!(n=r.n()).done;){var i,o,a=n.value;if("string"==typeof a){var s=this.getAttribute(a);"object"!==T(null===(i=s)||void 0===i?void 0:i.attributes)||V(null===(o=s)||void 0===o?void 0:o.attributes)||(s=s.attributes),e[a]=s;}}}catch(t){r.e(t);}finally{r.f();}return e}},{key:"serialize",value:function(){return this.getAttributes()}},{key:"mergeAttributes",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null!==(t=null==this?void 0:this.attributes)&&void 0!==t?t:{};return this.attributes=A(A({},n),e),this.attributes}},{key:"syncAttributes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.attributes=t;}}])}();q("resource","Resource",kt);var Et=function(){return v((function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};h(this,t),this.resource=e,this.adapter=n||ht(),this.namespace=F(e),this.storage=ot(),this.options=r,this.extendActions(r.actions);}),[{key:"extendActions",value:function(){return yt(this,arguments.length>0&&void 0!==arguments[0]?arguments[0]:[])}},{key:"deposit",value:function(t){return t}},{key:"serialize",value:function(t){return W("resource",z(this.resource),t,this.adapter)}},{key:"afterFetch",value:function(t){return function(t,e){if("function"==typeof t.options.onAfterFetch&&t.options.onAfterFetch(e),V(e)){var n,r=[],i=p(e);try{for(i.s();!(n=i.n()).done;){var o=n.value;r.push(t.afterFetch(o));}}catch(t){i.e(t);}finally{i.f();}return ot.apply(void 0,r)}var a=t.serialize(e);return t.deposit(a)}(this,t)}},{key:"create",value:(a=u(x().mark((function t(){var e,n,r,i=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},n=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,this.adapter.post("".concat(this.namespace),e,n);case 4:return r=t.sent,t.abrupt("return",this.afterFetch(r));case 6:case "end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"update",value:(o=u(x().mark((function t(e){var n,r,i,o=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=o.length>2&&void 0!==o[2]?o[2]:{},t.next=4,this.adapter.put("".concat(this.namespace,"/").concat(e),n,r);case 4:return i=t.sent,t.abrupt("return",this.afterFetch(i));case 6:case "end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"findRecord",value:(i=u(x().mark((function t(e){var n,r,i=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},t.next=3,this.adapter.get("".concat(this.namespace,"/").concat(e),{},n);case 3:return r=t.sent,t.abrupt("return",this.afterFetch(r));case 5:case "end":return t.stop()}}),t,this)}))),function(t){return i.apply(this,arguments)})},{key:"findAll",value:(r=u(x().mark((function t(){var e,n,r=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},t.next=3,this.adapter.get("".concat(this.namespace),{},e);case 3:return n=t.sent,t.abrupt("return",this.afterFetch(n));case 5:case "end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"query",value:(n=u(x().mark((function t(){var e,n,r,i=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:{},n=i.length>1&&void 0!==i[1]?i[1]:{},t.next=4,this.adapter.get("".concat(this.namespace),e,n);case 4:return r=t.sent,t.abrupt("return",this.afterFetch(r));case 6:case "end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"queryRecord",value:(e=u(x().mark((function t(){var e,n,r,i=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},(e=i.length>0&&void 0!==i[0]?i[0]:{}).single=true,t.next=5,this.adapter.get("".concat(this.namespace),e,n);case 5:return r=t.sent,t.abrupt("return",this.afterFetch(r));case 7:case "end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"destroy",value:(t=u(x().mark((function t(e){var n,r,i,o=arguments;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=wt(e)?e.getAttribute("id"):e,t.next=4,this.adapter.delete("".concat(this.namespace,"/").concat(r),{},n);case 4:return i=t.sent,t.abrupt("return",this.afterFetch(i));case 6:case "end":return t.stop()}}),t,this)}))),function(e){return t.apply(this,arguments)})}]);var t,e,n,r,i,o,a;}();q("store","Store",Et);var At=new mt({getDistanceAndTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.get("".concat(this.namespace,"/").concat(t,"/distance-and-time"),e,n)},getNextActivity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.get("".concat(this.namespace,"/").concat(t,"/next-activity"),e,n)},dispatch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("".concat(this.namespace,"/").concat(t,"/dispatch"),e,n).then(this.afterFetch.bind(this))},start:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("".concat(this.namespace,"/").concat(t,"/start"),e,n).then(this.afterFetch.bind(this))},updateActivity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("".concat(this.namespace,"/").concat(t,"/update-activity"),e,n).then(this.afterFetch.bind(this))},setDestination:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wt(e)&&(e=e.id),this.adapter.post("".concat(this.namespace,"/").concat(t,"/set-destination/").concat(e),n,r).then(this.afterFetch.bind(this))},captureQrCode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wt(e)&&(e=e.id),this.adapter.post("".concat(this.namespace,"/").concat(t,"/capture-qr").concat(e?"/"+e:""),n,r)},captureSignature:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return wt(e)&&(e=e.id),this.adapter.post("".concat(this.namespace,"/").concat(t,"/capture-signature").concat(e?"/"+e:""),n,r)},complete:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("".concat(this.namespace,"/").concat(t,"/complete"),e,n).then(this.afterFetch.bind(this))},cancel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.delete("".concat(this.namespace,"/").concat(t,"/cancel"),e,n).then(this.afterFetch.bind(this))}}),xt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"order",A({actions:At},r)])}return b(t,kt),v(t,[{key:"getDistanceAndTime",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.getDistanceAndTime(this.id,t,e)}},{key:"dispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.dispatch(this.id,t,e)}},{key:"start",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.start(this.id,t,e)}},{key:"setDestination",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.store.setDestination(this.id,t,e,n)}},{key:"captureQrCode",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.store.captureQrCode(this.id,t,e,n)}},{key:"captureSignature",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.store.captureSignature(this.id,t,e,n)}},{key:"getNextActivity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.getNextActivity(this.id,t,e)}},{key:"updateActivity",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.updateActivity(this.id,t,e)}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.cancel(this.id,t,e)}},{key:"complete",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.complete(this.id,t,e)}},{key:"isDispatched",get:function(){return null!==this.getAttribute("dispatched_at")}},{key:"isNotDispatched",get:function(){return null==this.getAttribute("dispatched_at")}},{key:"isStarted",get:function(){return null!==this.getAttribute("started_at")}},{key:"isNotStarted",get:function(){return null==this.getAttribute("started_at")}},{key:"isCompleted",get:function(){return "completed"==this.getAttribute("status")}},{key:"isCanceled",get:function(){return "canceled"==this.getAttribute("status")}},{key:"isEnroute",get:function(){return "driver_enroute"==this.getAttribute("status")||"enroute"===this.getAttribute("status")}},{key:"isInProgress",get:function(){return this.isStarted&&!this.isCanceled&&!this.isCompleted}},{key:"scheduledAt",get:function(){return this.isAttributeFilled("scheduled_at")?new Date(this.getAttribute("scheduled_at")):null}},{key:"startedAt",get:function(){return this.isAttributeFilled("started_at")?new Date(this.getAttribute("started_at")):null}},{key:"dispatchedAt",get:function(){return this.isAttributeFilled("dispatched_at")?new Date(this.getAttribute("dispatched_at")):null}},{key:"status",get:function(){return this.getAttribute("status")}}])}();q("resource","Order",xt);var Ot=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"payload",r])}return b(t,kt),v(t,[{key:"attach",value:function(t){}},{key:"entities",get:function(){var t=this;return ot(this.entities.map((function(e){return G("Entity",e,t.adapter)})))}},{key:"dropoff",get:function(){return this.dropoff?G("Place",this.dropoff,this.adapter):null}},{key:"pickup",get:function(){return this.pickup?G("Place",this.pickup,this.adapter):null}},{key:"waypoints",get:function(){var t=this;return ot(this.waypoints.map((function(e){return G("Waypoint",e,t.adapter)})))}}])}();q("resource","Payload",Ot);var Rt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"entity",r])}return b(t,kt),v(t)}();q("resource","Entity",Rt);var St=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"place",r])}return b(t,kt),v(t,[{key:"latitude",get:function(){var t;return null===(t=this.getAttribute("location",new dt))||void 0===t?void 0:t.coordinates[1]}},{key:"longitude",get:function(){var t;return null===(t=this.getAttribute("location",new dt))||void 0===t?void 0:t.coordinates[0]}},{key:"coordinates",get:function(){return [this.latitude,this.longitude]}},{key:"setOwner",value:function(t){return wt(t)&&this.setAttribute("owner",t.id),"string"==typeof t&&this.setAttribute("owner",t),this}}],[{key:"fromGoogleAddress",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=R(e.getAttribute("coordinates"),2),o=i[0],a=i[1];return new t({name:null,address:e.getAttribute("address"),location:new dt(o,a),street1:e.getAttribute("address"),street2:null,city:e.getAttribute("city"),province:e.getAttribute("stateLong"),postal_code:e.getAttribute("postalCode"),neighborhood:e.get("neighborhood"),district:e.getAttribute("county"),building:e.get("building"),country:e.getAttribute("countryShort"),phone:null,security_access_code:null},n,r)}}])}();q("resource","Place",St);var jt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"waypoint",r])}return b(t,St),v(t)}();q("resource","Waypoint",jt);var Tt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"tracking-status",r])}return b(t,kt),v(t)}();q("resource","TrackingStatus",Tt);var _t=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"vehicle",r])}return b(t,kt),v(t)}();q("resource","Vehicle",_t);var Pt=new mt({current:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.adapter.get("".concat(this.namespace,"/current"),t,e)}}),Lt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"organization",A({actions:Pt},r)])}return b(t,kt),v(t)}();q("resource","Organization",Lt);var Ct=function(t,e){return V(t)?t.map((function(t){return new Lt(t,e)})):new Lt(t,e)},Nt=new mt({login:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(function(){return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}(t))return this.adapter.post("drivers/login-with-sms",{phone:t});if(!e)throw new Error("Login requires password!");return this.adapter.post("drivers/login",A({identity:t,password:e},n)).then(this.afterFetch.bind(this))},verifyCode:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("drivers/verify-code",A({identity:t,code:e},n)).then(this.afterFetch.bind(this))},track:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("drivers/".concat(t,"/track"),e,n).then(this.afterFetch.bind(this))},listOrganizations:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.get("drivers/".concat(t,"/organizations"),n,r).then((function(t){return Ct(t,e.adapter)}))},switchOrganization:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("drivers/".concat(t,"/switch-organization"),n,r).then((function(t){return Ct(t,e.adapter)}))},currentOrganization:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.get("drivers/".concat(t,"/current-organization"),n,r).then((function(t){return Ct(t,e.adapter)}))},retrieve:function(t){return this.findRecord(t)},syncDevice:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.adapter.post("drivers/".concat(t,"/register-device"),e,n)}}),Ft=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"driver",A({actions:Nt},r)])}return b(t,kt),v(t,[{key:"token",get:function(){return this.getAttribute("token")}},{key:"isOnline",get:function(){return  true===this.getAttribute("online")}},{key:"latitude",get:function(){var t;return null===(t=this.getAttribute("location",new dt))||void 0===t?void 0:t.coordinates[1]}},{key:"longitude",get:function(){var t;return null===(t=this.getAttribute("location",new dt))||void 0===t?void 0:t.coordinates[0]}},{key:"coordinates",get:function(){return [this.latitude,this.longitude]}},{key:"track",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.track(this.id,t,e)}},{key:"syncDevice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.syncDevice(this.id,t,e)}},{key:"listOrganizations",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.listOrganizations(this.id,t,e)}},{key:"switchOrganization",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.switchOrganization(this.id,{next:t},e)}},{key:"currentOrganization",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.store.currentOrganization(this.id,t,e)}}])}();q("resource","Driver",Ft);var Dt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"vendor",r])}return b(t,kt),v(t)}();q("resource","Vendor",Dt);var $t=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"contact",r])}return b(t,kt),v(t)}();q("resource","Contact",$t);var Ut=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"zone",r])}return b(t,kt),v(t)}();q("resource","Zone",Ut);var zt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"service-area",r])}return b(t,kt),v(t)}();q("resource","ServiceArea",zt);var Bt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"service-rate",r])}return b(t,kt),v(t)}();q("resource","ServiceRate",Bt);var qt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"service-quote",r])}return b(t,kt),v(t,[{key:"fromPreliminary",value:function(){}},{key:"fromPayload",value:function(){}}])}();q("resource","ServiceQuote",qt);var It=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(this,t),l(this,t,[e,n,"fleet",r])}return b(t,kt),v(t)}();q("resource","Fleet",It);var Mt=v((function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(this,t),this.version=e.version||"v1",this.host=e.host||null,this.namespace=e.namespace||null,this.headers=e.headers||{};}));q("adapter","Adapter",Mt);var Ht=function(){function t(e){var n;return h(this,t),(n=l(this,t,[e])).setHeaders({Authorization:"Bearer ".concat(e.publicKey),"Content-Type":"application/json","User-Agent":"@fleetbase/sdk;browser"}),n}return b(t,Mt),v(t,[{key:"setHeaders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.headers=A(A({},this.headers),t),this}},{key:"parseJSON",value:function(t){return new Promise((function(e,n){t.json().then((function(n){e({statusText:t.statusText,status:t.status,ok:t.ok,json:n});})).catch((function(){n(new Error("Oops! Something went wrong when handling your request."));}));}))}},{key:"request",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(o,a){fetch(i.url||"".concat(e.host,"/").concat(e.namespace,"/").concat(t),A({method:n,mode:i.mode||"cors",headers:new Headers(A(A({},e.headers||{}),i.headers||{}))},r)).then(e.parseJSON).then((function(t){if(t.ok)return o(t.json);a(new Error(t.json.errors?t.json.errors[0]:t.statusText));})).catch((function(t){a(t);}));}))}},{key:"get",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=st(e=n)||"string"==typeof e&&false===/\S/.test(e)?"":new URLSearchParams(n).toString();return this.request("".concat(t).concat(i?"?".concat(i):""),"GET",{},r)}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(t,"POST",{body:JSON.stringify(e)},n)}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(t,"PUT",{body:JSON.stringify(e)},n)}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request(t,"DELETE",{},e)}},{key:"patch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request(t,"PATCH",{body:JSON.stringify(e)},n)}}])}();function Jt(t,e){return function(){return t.apply(e,arguments)}}q("adapter","BrowserAdapter",Ht);var Wt,Kt=Object.prototype.toString,Gt=Object.getPrototypeOf,Vt=(Wt=Object.create(null),function(t){var e=Kt.call(t);return Wt[e]||(Wt[e]=e.slice(8,-1).toLowerCase())}),Xt=function(t){return t=t.toLowerCase(),function(e){return Vt(e)===t}},Qt=function(t){return function(e){return T(e)===t}},Yt=Array.isArray,Zt=Qt("undefined");var te=Xt("ArrayBuffer");var ee=Qt("string"),ne=Qt("function"),re=Qt("number"),ie=function(t){return null!==t&&"object"===T(t)},oe=function(t){if("object"!==Vt(t))return  false;var e=Gt(t);return !(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},ae=Xt("Date"),se=Xt("File"),ue=Xt("Blob"),ce=Xt("FileList"),le=Xt("URLSearchParams"),he=R(["ReadableStream","Request","Response","Headers"].map(Xt),4),fe=he[0],de=he[1],ve=he[2],pe=he[3];function ge(t,e){var n,r,i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).allOwnKeys,o=void 0!==i&&i;if(null!=t)if("object"!==T(t)&&(t=[t]),Yt(t))for(n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else {var a,s=o?Object.getOwnPropertyNames(t):Object.keys(t),u=s.length;for(n=0;n<u;n++)a=s[n],e.call(null,t[a],a,t);}}function ye(t,e){e=e.toLowerCase();for(var n,r=Object.keys(t),i=r.length;i-- >0;)if(e===(n=r[i]).toLowerCase())return n;return null}var be="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,me=function(t){return !Zt(t)&&t!==be};var we,ke=(we="undefined"!=typeof Uint8Array&&Gt(Uint8Array),function(t){return we&&t instanceof we}),Ee=Xt("HTMLFormElement"),Ae=function(){var t=Object.prototype.hasOwnProperty;return function(e,n){return t.call(e,n)}}(),xe=Xt("RegExp"),Oe=function(t,e){var n=Object.getOwnPropertyDescriptors(t),r={};ge(n,(function(n,i){var o;false!==(o=e(n,i,t))&&(r[i]=o||n);})),Object.defineProperties(t,r);},Re="abcdefghijklmnopqrstuvwxyz",Se="0123456789",je={DIGIT:Se,ALPHA:Re,ALPHA_DIGIT:Re+Re.toUpperCase()+Se};var Te,_e,Pe,Le,Ce=Xt("AsyncFunction"),Ne=(Te="function"==typeof setImmediate,_e=ne(be.postMessage),Te?setImmediate:_e?(Pe="axios@".concat(Math.random()),Le=[],be.addEventListener("message",(function(t){var e=t.source,n=t.data;e===be&&n===Pe&&Le.length&&Le.shift()();}),false),function(t){Le.push(t),be.postMessage(Pe,"*");}):function(t){return setTimeout(t)}),Fe="undefined"!=typeof queueMicrotask?queueMicrotask.bind(be):"undefined"!=typeof process&&process.nextTick||Ne,De={isArray:Yt,isArrayBuffer:te,isBuffer:function(t){return null!==t&&!Zt(t)&&null!==t.constructor&&!Zt(t.constructor)&&ne(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:function(t){var e;return t&&("function"==typeof FormData&&t instanceof FormData||ne(t.append)&&("formdata"===(e=Vt(t))||"object"===e&&ne(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:function(t){return "undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&te(t.buffer)},isString:ee,isNumber:re,isBoolean:function(t){return  true===t||false===t},isObject:ie,isPlainObject:oe,isReadableStream:fe,isRequest:de,isResponse:ve,isHeaders:pe,isUndefined:Zt,isDate:ae,isFile:se,isBlob:ue,isRegExp:xe,isFunction:ne,isStream:function(t){return ie(t)&&ne(t.pipe)},isURLSearchParams:le,isTypedArray:ke,isFileList:ce,forEach:ge,merge:function t(){for(var e=(me(this)&&this||{}).caseless,n={},r=function(r,i){var o=e&&ye(n,i)||i;oe(n[o])&&oe(r)?n[o]=t(n[o],r):oe(r)?n[o]=t({},r):Yt(r)?n[o]=r.slice():n[o]=r;},i=0,o=arguments.length;i<o;i++)arguments[i]&&ge(arguments[i],r);return n},extend:function(t,e,n){return ge(e,(function(e,r){n&&ne(e)?t[r]=Jt(e,n):t[r]=e;}),{allOwnKeys:(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys}),t},trim:function(t){return t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n);},toFlatObject:function(t,e,n,r){var i,o,a,s={};if(e=e||{},null==t)return e;do{for(o=(i=Object.getOwnPropertyNames(t)).length;o-- >0;)a=i[o],r&&!r(a,t,e)||s[a]||(e[a]=t[a],s[a]=true);t=false!==n&&Gt(t);}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:Vt,kindOfTest:Xt,endsWith:function(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return  -1!==r&&r===n},toArray:function(t){if(!t)return null;if(Yt(t))return t;var e=t.length;if(!re(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n},forEachEntry:function(t,e){for(var n,r=(t&&t[Symbol.iterator]).call(t);(n=r.next())&&!n.done;){var i=n.value;e.call(t,i[0],i[1]);}},matchAll:function(t,e){for(var n,r=[];null!==(n=t.exec(e));)r.push(n);return r},isHTMLForm:Ee,hasOwnProperty:Ae,hasOwnProp:Ae,reduceDescriptors:Oe,freezeMethods:function(t){Oe(t,(function(e,n){if(ne(t)&&-1!==["arguments","caller","callee"].indexOf(n))return  false;var r=t[n];ne(r)&&(e.enumerable=false,"writable"in e?e.writable=false:e.set||(e.set=function(){throw Error("Can not rewrite read-only method '"+n+"'")}));}));},toObjectSet:function(t,e){var n={},r=function(t){t.forEach((function(t){n[t]=true;}));};return Yt(t)?r(t):r(String(t).split(e)),n},toCamelCase:function(t){return t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(t,e){return null!=t&&Number.isFinite(t=+t)?t:e},findKey:ye,global:be,isContextDefined:me,ALPHABET:je,generateString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:je.ALPHA_DIGIT,n="",r=e.length;t--;)n+=e[Math.random()*r|0];return n},isSpecCompliantForm:function(t){return !!(t&&ne(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:function(t){var e=new Array(10),n=function(t,r){if(ie(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;var i=Yt(t)?[]:{};return ge(t,(function(t,e){var o=n(t,r+1);!Zt(o)&&(i[e]=o);})),e[r]=void 0,i}}return t};return n(t,0)},isAsyncFn:Ce,isThenable:function(t){return t&&(ie(t)||ne(t))&&ne(t.then)&&ne(t.catch)},setImmediate:Ne,asap:Fe};function $e(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null);}De.inherits($e,Error,{toJSON:function(){return {message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:De.toJSONObject(this.config),code:this.code,status:this.status}}});var Ue=$e.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(t){ze[t]={value:t};})),Object.defineProperties($e,ze),Object.defineProperty(Ue,"isAxiosError",{value:true}),$e.from=function(t,e,n,r,i,o){var a=Object.create(Ue);return De.toFlatObject(t,a,(function(t){return t!==Error.prototype}),(function(t){return "isAxiosError"!==t})),$e.call(a,t.message,e,n,r,i),a.cause=t,a.name=t.name,o&&Object.assign(a,o),a};function Be(t){return De.isPlainObject(t)||De.isArray(t)}function qe(t){return De.endsWith(t,"[]")?t.slice(0,-2):t}function Ie(t,e,n){return t?t.concat(e).map((function(t,e){return t=qe(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}var Me=De.toFlatObject(De,{},null,(function(t){return /^is[A-Z]/.test(t)}));function He(t,e,n){if(!De.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;var r=(n=De.toFlatObject(n,{metaTokens:true,dots:false,indexes:false},false,(function(t,e){return !De.isUndefined(e[t])}))).metaTokens,i=n.visitor||c,o=n.dots,a=n.indexes,s=(n.Blob||"undefined"!=typeof Blob&&Blob)&&De.isSpecCompliantForm(e);if(!De.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return "";if(De.isDate(t))return t.toISOString();if(!s&&De.isBlob(t))throw new $e("Blob is not supported. Use a Buffer instead.");return De.isArrayBuffer(t)||De.isTypedArray(t)?s&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function c(t,n,i){var s=t;if(t&&!i&&"object"===T(t))if(De.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(De.isArray(t)&&function(t){return De.isArray(t)&&!t.some(Be)}(t)||(De.isFileList(t)||De.endsWith(n,"[]"))&&(s=De.toArray(t)))return n=qe(n),s.forEach((function(t,r){!De.isUndefined(t)&&null!==t&&e.append(true===a?Ie([n],r,o):null===a?n:n+"[]",u(t));})),false;return !!Be(t)||(e.append(Ie(i,n,o),u(t)),false)}var l=[],h=Object.assign(Me,{defaultVisitor:c,convertValue:u,isVisitable:Be});if(!De.isObject(t))throw new TypeError("data must be an object");return function t(n,r){if(!De.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),De.forEach(n,(function(n,o){ true===(!(De.isUndefined(n)||null===n)&&i.call(e,n,De.isString(o)?o.trim():o,r,h))&&t(n,r?r.concat(o):[o]);})),l.pop();}}(t),e}function Je(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function We(t,e){this._pairs=[],t&&He(t,this,e);}var Ke=We.prototype;function Ge(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(t,e,n){if(!e)return t;var r=n&&n.encode||Ge;De.isFunction(n)&&(n={serialize:n});var i,o=n&&n.serialize;if(i=o?o(e,n):De.isURLSearchParams(e)?e.toString():new We(e,n).toString(r)){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i;}return t}Ke.append=function(t,e){this._pairs.push([t,e]);},Ke.toString=function(t){var e=t?function(e){return t.call(this,e,Je)}:Je;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Xe=function(){return v((function t(){h(this,t),this.handlers=[];}),[{key:"use",value:function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(t){this.handlers[t]&&(this.handlers[t]=null);}},{key:"clear",value:function(){this.handlers&&(this.handlers=[]);}},{key:"forEach",value:function(t){De.forEach(this.handlers,(function(e){null!==e&&t(e);}));}}])}(),Qe={silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false},Ye={isBrowser:true,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:We,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Ze="undefined"!=typeof window&&"undefined"!=typeof document,tn="object"===("undefined"==typeof navigator?"undefined":T(navigator))&&navigator||void 0,en=Ze&&(!tn||["ReactNative","NativeScript","NS"].indexOf(tn.product)<0),nn="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,rn=Ze&&window.location.href||"http://localhost",on=A(A({},Object.freeze({__proto__:null,hasBrowserEnv:Ze,hasStandardBrowserEnv:en,hasStandardBrowserWebWorkerEnv:nn,navigator:tn,origin:rn})),Ye);function an(t){function e(t,n,r,i){var o=t[i++];if("__proto__"===o)return  true;var a=Number.isFinite(+o),s=i>=t.length;return o=!o&&De.isArray(r)?r.length:o,s?(De.hasOwnProp(r,o)?r[o]=[r[o],n]:r[o]=n,!a):(r[o]&&De.isObject(r[o])||(r[o]=[]),e(t,n,r[o],i)&&De.isArray(r[o])&&(r[o]=function(t){var e,n,r={},i=Object.keys(t),o=i.length;for(e=0;e<o;e++)r[n=i[e]]=t[n];return r}(r[o])),!a)}if(De.isFormData(t)&&De.isFunction(t.entries)){var n={};return De.forEachEntry(t,(function(t,r){e(function(t){return De.matchAll(/\w+|\[(\w*)]/g,t).map((function(t){return "[]"===t[0]?"":t[1]||t[0]}))}(t),r,n,0);})),n}return null}var sn={transitional:Qe,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){var n,r=e.getContentType()||"",i=r.indexOf("application/json")>-1,o=De.isObject(t);if(o&&De.isHTMLForm(t)&&(t=new FormData(t)),De.isFormData(t))return i?JSON.stringify(an(t)):t;if(De.isArrayBuffer(t)||De.isBuffer(t)||De.isStream(t)||De.isFile(t)||De.isBlob(t)||De.isReadableStream(t))return t;if(De.isArrayBufferView(t))return t.buffer;if(De.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",false),t.toString();if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return He(t,new on.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return on.isNode&&De.isBuffer(t)?(this.append(e,t.toString("base64")),false):r.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((n=De.isFileList(t))||r.indexOf("multipart/form-data")>-1){var a=this.env&&this.env.FormData;return He(n?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(e.setContentType("application/json",false),function(t,e){if(De.isString(t))try{return (e||JSON.parse)(t),De.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return (0, JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||sn.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(De.isResponse(t)||De.isReadableStream(t))return t;if(t&&De.isString(t)&&(n&&!this.responseType||r)){var i=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(t){if(i){if("SyntaxError"===t.name)throw $e.from(t,$e.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:on.classes.FormData,Blob:on.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};De.forEach(["delete","get","head","post","put","patch"],(function(t){sn.headers[t]={};}));var un=De.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cn=Symbol("internals");function ln(t){return t&&String(t).trim().toLowerCase()}function hn(t){return  false===t||null==t?t:De.isArray(t)?t.map(hn):String(t)}function fn(t,e,n,r,i){return De.isFunction(r)?r.call(this,e,n):(i&&(e=n),De.isString(e)?De.isString(r)?-1!==e.indexOf(r):De.isRegExp(r)?r.test(e):void 0:void 0)}var dn=function(){return v((function t(e){h(this,t),e&&this.set(e);}),[{key:"set",value:function(t,e,n){var r=this;function i(t,e,n){var i=ln(e);if(!i)throw new Error("header name must be a non-empty string");var o=De.findKey(r,i);(!o||void 0===r[o]||true===n||void 0===n&&false!==r[o])&&(r[o||e]=hn(t));}var o=function(t,e){return De.forEach(t,(function(t,n){return i(t,n,e)}))};if(De.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(De.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()))o(function(t){var e,n,r,i={};return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),e=t.substring(0,r).trim().toLowerCase(),n=t.substring(r+1).trim(),!e||i[e]&&un[e]||("set-cookie"===e?i[e]?i[e].push(n):i[e]=[n]:i[e]=i[e]?i[e]+", "+n:n);})),i}(t),e);else if(De.isHeaders(t)){var a,s=p(t.entries());try{for(s.s();!(a=s.n()).done;){var u=R(a.value,2),c=u[0];i(u[1],c,n);}}catch(t){s.e(t);}finally{s.f();}}else null!=t&&i(e,t,n);return this}},{key:"get",value:function(t,e){if(t=ln(t)){var n=De.findKey(this,t);if(n){var r=this[n];if(!e)return r;if(true===e)return function(t){for(var e,n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;e=r.exec(t);)n[e[1]]=e[2];return n}(r);if(De.isFunction(e))return e.call(this,r,n);if(De.isRegExp(e))return e.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(t,e){if(t=ln(t)){var n=De.findKey(this,t);return !(!n||void 0===this[n]||e&&!fn(0,this[n],n,e))}return  false}},{key:"delete",value:function(t,e){var n=this,r=false;function i(t){if(t=ln(t)){var i=De.findKey(n,t);!i||e&&!fn(0,n[i],i,e)||(delete n[i],r=true);}}return De.isArray(t)?t.forEach(i):i(t),r}},{key:"clear",value:function(t){for(var e=Object.keys(this),n=e.length,r=false;n--;){var i=e[n];t&&!fn(0,this[i],i,t,true)||(delete this[i],r=true);}return r}},{key:"normalize",value:function(t){var e=this,n={};return De.forEach(this,(function(r,i){var o=De.findKey(n,i);if(o)return e[o]=hn(r),void delete e[i];var a=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n}))}(i):String(i).trim();a!==i&&delete e[i],e[a]=hn(r),n[a]=true;})),this}},{key:"concat",value:function(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return (t=this.constructor).concat.apply(t,[this].concat(n))}},{key:"toJSON",value:function(t){var e=Object.create(null);return De.forEach(this,(function(n,r){null!=n&&false!==n&&(e[r]=t&&De.isArray(n)?n.join(", "):n);})),e}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(t){var e=R(t,2);return e[0]+": "+e[1]})).join("\n")}},{key:Symbol.toStringTag,get:function(){return "AxiosHeaders"}}],[{key:"from",value:function(t){return t instanceof this?t:new this(t)}},{key:"concat",value:function(t){for(var e=new this(t),n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.forEach((function(t){return e.set(t)})),e}},{key:"accessor",value:function(t){var e=(this[cn]=this[cn]={accessors:{}}).accessors,n=this.prototype;function r(t){var r=ln(t);e[r]||(!function(t,e){var n=De.toCamelCase(" "+e);["get","set","has"].forEach((function(r){Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:true});}));}(n,t),e[r]=true);}return De.isArray(t)?t.forEach(r):r(t),this}}])}();function vn(t,e){var n=this||sn,r=e||n,i=dn.from(r.headers),o=r.data;return De.forEach(t,(function(t){o=t.call(n,o,i.normalize(),e?e.status:void 0);})),i.normalize(),o}function pn(t){return !(!t||!t.__CANCEL__)}function gn(t,e,n){$e.call(this,null==t?"canceled":t,$e.ERR_CANCELED,e,n),this.name="CanceledError";}function yn(t,e,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new $e("Request failed with status code "+n.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n);}dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),De.reduceDescriptors(dn.prototype,(function(t,e){var n=t.value,r=e[0].toUpperCase()+e.slice(1);return {get:function(){return n},set:function(t){this[r]=t;}}})),De.freezeMethods(dn),De.inherits(gn,$e,{__CANCEL__:true});var bn=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0,i=function(t,e){t=t||10;var n,r=new Array(t),i=new Array(t),o=0,a=0;return e=void 0!==e?e:1e3,function(s){var u=Date.now(),c=i[a];n||(n=u),r[o]=s,i[o]=u;for(var l=a,h=0;l!==o;)h+=r[l++],l%=t;if((o=(o+1)%t)===a&&(a=(a+1)%t),!(u-n<e)){var f=c&&u-c;return f?Math.round(1e3*h/f):void 0}}}(50,250);return function(t,e){var n,r,i=0,o=1e3/e,a=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();i=o,n=null,r&&(clearTimeout(r),r=null),t.apply(null,e);};return [function(){for(var t=Date.now(),e=t-i,s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];e>=o?a(u,t):(n=u,r||(r=setTimeout((function(){r=null,a(n);}),o-e)));},function(){return n&&a(n)}]}((function(n){var o=n.loaded,a=n.lengthComputable?n.total:void 0,s=o-r,u=i(s);r=o;var c=g({loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&o<=a?(a-o)/u:void 0,event:n,lengthComputable:null!=a},e?"download":"upload",true);t(c);}),n)},mn=function(t,e){var n=null!=t;return [function(r){return e[0]({lengthComputable:n,total:t,loaded:r})},e[1]]},wn=function(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return De.asap((function(){return t.apply(void 0,n)}))}},kn=on.hasStandardBrowserEnv?function(t,e){return function(n){return n=new URL(n,on.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)}}(new URL(on.origin),on.navigator&&/(msie|trident)/i.test(on.navigator.userAgent)):function(){return  true},En=on.hasStandardBrowserEnv?{write:function(t,e,n,r,i,o){var a=[t+"="+encodeURIComponent(e)];De.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),De.isString(r)&&a.push("path="+r),De.isString(i)&&a.push("domain="+i),true===o&&a.push("secure"),document.cookie=a.join("; ");},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5);}}:{write:function(){},read:function(){return null},remove:function(){}};function An(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}var xn=function(t){return t instanceof dn?A({},t):t};function On(t,e){e=e||{};var n={};function r(t,e,n,r){return De.isPlainObject(t)&&De.isPlainObject(e)?De.merge.call({caseless:r},t,e):De.isPlainObject(e)?De.merge({},e):De.isArray(e)?e.slice():e}function i(t,e,n,i){return De.isUndefined(e)?De.isUndefined(t)?void 0:r(void 0,t,0,i):r(t,e,0,i)}function o(t,e){if(!De.isUndefined(e))return r(void 0,e)}function a(t,e){return De.isUndefined(e)?De.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function s(n,i,o){return o in e?r(n,i):o in t?r(void 0,n):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:function(t,e,n){return i(xn(t),xn(e),0,true)}};return De.forEach(Object.keys(Object.assign({},t,e)),(function(r){var o=u[r]||i,a=o(t[r],e[r],r);De.isUndefined(a)&&o!==s||(n[r]=a);})),n}var Rn,Sn,jn=function(t){var e,r,i=On({},t),o=i.data,a=i.withXSRFToken,s=i.xsrfHeaderName,u=i.xsrfCookieName,c=i.headers,l=i.auth;if(i.headers=c=dn.from(c),i.url=Ve(An(i.baseURL,i.url),t.params,t.paramsSerializer),l&&c.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),De.isFormData(o))if(on.hasStandardBrowserEnv||on.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(false!==(e=c.getContentType())){var h=e?e.split(";").map((function(t){return t.trim()})).filter(Boolean):[],f=n(r=h)||w(r)||_(r)||k(),d=f[0],v=f.slice(1);c.setContentType([d||"multipart/form-data"].concat(S(v)).join("; "));}if(on.hasStandardBrowserEnv&&(a&&De.isFunction(a)&&(a=a(i)),a||false!==a&&kn(i.url))){var p=s&&u&&En.read(u);p&&c.set(s,p);}return i},Tn="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){var r,i,o,a,s,u=jn(t),c=u.data,l=dn.from(u.headers).normalize(),h=u.responseType,f=u.onUploadProgress,d=u.onDownloadProgress;function v(){a&&a(),s&&s(),u.cancelToken&&u.cancelToken.unsubscribe(r),u.signal&&u.signal.removeEventListener("abort",r);}var p=new XMLHttpRequest;function g(){if(p){var r=dn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders());yn((function(t){e(t),v();}),(function(t){n(t),v();}),{data:h&&"text"!==h&&"json"!==h?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:t,request:p}),p=null;}}if(p.open(u.method.toUpperCase(),u.url,true),p.timeout=u.timeout,"onloadend"in p?p.onloadend=g:p.onreadystatechange=function(){p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))&&setTimeout(g);},p.onabort=function(){p&&(n(new $e("Request aborted",$e.ECONNABORTED,t,p)),p=null);},p.onerror=function(){n(new $e("Network Error",$e.ERR_NETWORK,t,p)),p=null;},p.ontimeout=function(){var e=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",r=u.transitional||Qe;u.timeoutErrorMessage&&(e=u.timeoutErrorMessage),n(new $e(e,r.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,t,p)),p=null;},void 0===c&&l.setContentType(null),"setRequestHeader"in p&&De.forEach(l.toJSON(),(function(t,e){p.setRequestHeader(e,t);})),De.isUndefined(u.withCredentials)||(p.withCredentials=!!u.withCredentials),h&&"json"!==h&&(p.responseType=u.responseType),d){var y=R(bn(d,true),2);o=y[0],s=y[1],p.addEventListener("progress",o);}if(f&&p.upload){var b=R(bn(f),2);i=b[0],a=b[1],p.upload.addEventListener("progress",i),p.upload.addEventListener("loadend",a);}(u.cancelToken||u.signal)&&(r=function(e){p&&(n(!e||e.type?new gn(null,t,p):e),p.abort(),p=null);},u.cancelToken&&u.cancelToken.subscribe(r),u.signal&&(u.signal.aborted?r():u.signal.addEventListener("abort",r)));var m,w,k=(m=u.url,(w=/^([-+\w]{1,25})(:?\/\/|:)/.exec(m))&&w[1]||"");k&&-1===on.protocols.indexOf(k)?n(new $e("Unsupported protocol "+k+":",$e.ERR_BAD_REQUEST,t)):p.send(c||null);}))},_n=function(t,e){var n=(t=t?t.filter(Boolean):[]).length;if(e||n){var r,i=new AbortController,o=function(t){if(!r){r=true,s();var e=t instanceof Error?t:this.reason;i.abort(e instanceof $e?e:new gn(e instanceof Error?e.message:e));}},a=e&&setTimeout((function(){a=null,o(new $e("timeout ".concat(e," of ms exceeded"),$e.ETIMEDOUT));}),e),s=function(){t&&(a&&clearTimeout(a),a=null,t.forEach((function(t){t.unsubscribe?t.unsubscribe(o):t.removeEventListener("abort",o);})),t=null);};t.forEach((function(t){return t.addEventListener("abort",o)}));var u=i.signal;return u.unsubscribe=function(){return De.asap(s)},u}},Pn=x().mark((function t(e,n){var r,i,o;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.byteLength,n&&!(r<n)){t.next=5;break}return t.next=4,e;case 4:return t.abrupt("return");case 5:i=0;case 6:if(!(i<r)){t.next=13;break}return o=i+n,t.next=10,e.slice(i,o);case 10:i=o,t.next=6;break;case 13:case "end":return t.stop()}}),t)})),Ln=function(){var t=P(x().mark((function t(e,n){var r,a,s,u,l,h;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=false,a=false,t.prev=2,u=o(Cn(e));case 4:return t.next=6,c(u.next());case 6:if(!(r=!(l=t.sent).done)){t.next=12;break}return h=l.value,t.delegateYield(i(o(Pn(h,n))),"t0",9);case 9:r=false,t.next=4;break;case 12:t.next=18;break;case 14:t.prev=14,t.t1=t.catch(2),a=true,s=t.t1;case 18:if(t.prev=18,t.prev=19,!r||null==u.return){t.next=23;break}return t.next=23,c(u.return());case 23:if(t.prev=23,!a){t.next=26;break}throw s;case 26:return t.finish(23);case 27:return t.finish(18);case 28:case "end":return t.stop()}}),t,null,[[2,14,18,28],[19,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}(),Cn=function(){var t=P(x().mark((function t(e){var n,r,a,s;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e[Symbol.asyncIterator]){t.next=3;break}return t.delegateYield(i(o(e)),"t0",2);case 2:return t.abrupt("return");case 3:n=e.getReader(),t.prev=4;case 5:return t.next=7,c(n.read());case 7:if(r=t.sent,a=r.done,s=r.value,!a){t.next=12;break}return t.abrupt("break",16);case 12:return t.next=14,s;case 14:t.next=5;break;case 16:return t.prev=16,t.next=19,c(n.cancel());case 19:return t.finish(16);case 20:case "end":return t.stop()}}),t,null,[[4,,16,20]])})));return function(e){return t.apply(this,arguments)}}(),Nn=function(t,e,n,r){var i,o=Ln(t,e),a=0,s=function(t){i||(i=true,r&&r(t));};return new ReadableStream({pull:function(t){return u(x().mark((function e(){var r,i,u,c,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.next();case 3:if(r=e.sent,i=r.done,u=r.value,!i){e.next=10;break}return s(),t.close(),e.abrupt("return");case 10:c=u.byteLength,n&&(l=a+=c,n(l)),t.enqueue(new Uint8Array(u)),e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(0),s(e.t0),e.t0;case 19:case "end":return e.stop()}}),e,null,[[0,15]])})))()},cancel:function(t){return s(t),o.return()}},{highWaterMark:2})},Fn="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Dn=Fn&&"function"==typeof ReadableStream,$n=Fn&&("function"==typeof TextEncoder?(Rn=new TextEncoder,function(t){return Rn.encode(t)}):function(){var t=u(x().mark((function t(e){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Uint8Array,t.next=3,new Response(e).arrayBuffer();case 3:return t.t1=t.sent,t.abrupt("return",new t.t0(t.t1));case 5:case "end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),Un=function(t){try{for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return !!t.apply(void 0,n)}catch(t){return  false}},zn=Dn&&Un((function(){var t=false,e=new Request(on.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=true,"half"}}).headers.has("Content-Type");return t&&!e})),Bn=Dn&&Un((function(){return De.isReadableStream(new Response("").body)})),qn={stream:Bn&&function(t){return t.body}};Fn&&(Sn=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((function(t){!qn[t]&&(qn[t]=De.isFunction(Sn[t])?function(e){return e[t]()}:function(e,n){throw new $e("Response type '".concat(t,"' is not supported"),$e.ERR_NOT_SUPPORT,n)});})));var In=function(){var t=u(x().mark((function t(e){var n;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e){t.next=2;break}return t.abrupt("return",0);case 2:if(!De.isBlob(e)){t.next=4;break}return t.abrupt("return",e.size);case 4:if(!De.isSpecCompliantForm(e)){t.next=9;break}return n=new Request(on.origin,{method:"POST",body:e}),t.next=8,n.arrayBuffer();case 8:case 15:return t.abrupt("return",t.sent.byteLength);case 9:if(!De.isArrayBufferView(e)&&!De.isArrayBuffer(e)){t.next=11;break}return t.abrupt("return",e.byteLength);case 11:if(De.isURLSearchParams(e)&&(e+=""),!De.isString(e)){t.next=16;break}return t.next=15,$n(e);case 16:case "end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Mn=function(){var t=u(x().mark((function t(e,n){var r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=De.toFiniteNumber(e.getContentLength()),t.abrupt("return",null==r?In(n):r);case 2:case "end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Hn=Fn&&function(){var t=u(x().mark((function t(e){var n,r,i,o,a,s,u,c,l,h,f,d,v,p,g,y,b,m,w,k,E,O,S,j,T,_,P,L,C,N,F,D,$,U;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=jn(e),r=n.url,i=n.method,o=n.data,a=n.signal,s=n.cancelToken,u=n.timeout,c=n.onDownloadProgress,l=n.onUploadProgress,h=n.responseType,f=n.headers,d=n.withCredentials,v=void 0===d?"same-origin":d,p=n.fetchOptions,h=h?(h+"").toLowerCase():"text",g=_n([a,s&&s.toAbortSignal()],u),b=g&&g.unsubscribe&&function(){g.unsubscribe();},t.prev=4,t.t0=l&&zn&&"get"!==i&&"head"!==i,!t.t0){t.next=11;break}return t.next=9,Mn(f,o);case 9:t.t1=m=t.sent,t.t0=0!==t.t1;case 11:if(!t.t0){t.next=15;break}w=new Request(r,{method:"POST",body:o,duplex:"half"}),De.isFormData(o)&&(k=w.headers.get("content-type"))&&f.setContentType(k),w.body&&(E=mn(m,bn(wn(l))),O=R(E,2),S=O[0],j=O[1],o=Nn(w.body,65536,S,j));case 15:return De.isString(v)||(v=v?"include":"omit"),T="credentials"in Request.prototype,y=new Request(r,A(A({},p),{},{signal:g,method:i.toUpperCase(),headers:f.normalize().toJSON(),body:o,duplex:"half",credentials:T?v:void 0})),t.next=20,fetch(y);case 20:return _=t.sent,P=Bn&&("stream"===h||"response"===h),Bn&&(c||P&&b)&&(L={},["status","statusText","headers"].forEach((function(t){L[t]=_[t];})),C=De.toFiniteNumber(_.headers.get("content-length")),N=c&&mn(C,bn(wn(c),true))||[],F=R(N,2),D=F[0],$=F[1],_=new Response(Nn(_.body,65536,D,(function(){$&&$(),b&&b();})),L)),h=h||"text",t.next=26,qn[De.findKey(qn,h)||"text"](_,e);case 26:return U=t.sent,!P&&b&&b(),t.next=30,new Promise((function(t,n){yn(t,n,{data:U,headers:dn.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:y});}));case 30:return t.abrupt("return",t.sent);case 33:if(t.prev=33,t.t2=t.catch(4),b&&b(),!t.t2||"TypeError"!==t.t2.name||!/fetch/i.test(t.t2.message)){t.next=38;break}throw Object.assign(new $e("Network Error",$e.ERR_NETWORK,e,y),{cause:t.t2.cause||t.t2});case 38:throw $e.from(t.t2,t.t2&&t.t2.code,e,y);case 39:case "end":return t.stop()}}),t,null,[[4,33]])})));return function(e){return t.apply(this,arguments)}}(),Jn={http:null,xhr:Tn,fetch:Hn};De.forEach(Jn,(function(t,e){if(t){try{Object.defineProperty(t,"name",{value:e});}catch(t){}Object.defineProperty(t,"adapterName",{value:e});}}));var Wn=function(t){return "- ".concat(t)},Kn=function(t){return De.isFunction(t)||null===t||false===t},Gn=function(t){for(var e,n,r=(t=De.isArray(t)?t:[t]).length,i={},o=0;o<r;o++){var a=void 0;if(n=e=t[o],!Kn(e)&&void 0===(n=Jn[(a=String(e)).toLowerCase()]))throw new $e("Unknown adapter '".concat(a,"'"));if(n)break;i[a||"#"+o]=n;}if(!n){var s=Object.entries(i).map((function(t){var e=R(t,2),n=e[0],r=e[1];return "adapter ".concat(n," ")+(false===r?"is not supported by the environment":"is not available in the build")}));throw new $e("There is no suitable adapter to dispatch the request "+(r?s.length>1?"since :\n"+s.map(Wn).join("\n"):" "+Wn(s[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Vn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new gn(null,t)}function Xn(t){return Vn(t),t.headers=dn.from(t.headers),t.data=vn.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",false),Gn(t.adapter||sn.adapter)(t).then((function(e){return Vn(t),e.data=vn.call(t,t.transformResponse,e),e.headers=dn.from(e.headers),e}),(function(e){return pn(e)||(Vn(t),e&&e.response&&(e.response.data=vn.call(t,t.transformResponse,e.response),e.response.headers=dn.from(e.response.headers))),Promise.reject(e)}))}var Qn="1.7.9",Yn={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){Yn[t]=function(n){return T(n)===t||"a"+(e<1?"n ":" ")+t};}));var Zn={};Yn.transitional=function(t,e,n){function r(t,e){return "[Axios v1.7.9] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,i,o){if(false===t)throw new $e(r(i," has been removed"+(e?" in "+e:"")),$e.ERR_DEPRECATED);return e&&!Zn[i]&&(Zn[i]=true,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,o)}},Yn.spelling=function(t){return function(e,n){return console.warn("".concat(n," is likely a misspelling of ").concat(t)),true}};var tr={assertOptions:function(t,e,n){if("object"!==T(t))throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(t),i=r.length;i-- >0;){var o=r[i],a=e[o];if(a){var s=t[o],u=void 0===s||a(s,o,t);if(true!==u)throw new $e("option "+o+" must be "+u,$e.ERR_BAD_OPTION_VALUE)}else if(true!==n)throw new $e("Unknown option "+o,$e.ERR_BAD_OPTION)}},validators:Yn},er=tr.validators,nr=function(){return v((function t(e){h(this,t),this.defaults=e,this.interceptors={request:new Xe,response:new Xe};}),[{key:"request",value:(t=u(x().mark((function t(e,n){var r,i;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this._request(e,n);case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),t.t0 instanceof Error){r={},Error.captureStackTrace?Error.captureStackTrace(r):r=new Error,i=r.stack?r.stack.replace(/^.+\n/,""):"";try{t.t0.stack?i&&!String(t.t0.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(t.t0.stack+="\n"+i):t.t0.stack=i;}catch(t){}}throw t.t0;case 10:case "end":return t.stop()}}),t,this,[[0,6]])}))),function(e,n){return t.apply(this,arguments)})},{key:"_request",value:function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{};var n=e=On(this.defaults,e),r=n.transitional,i=n.paramsSerializer,o=n.headers;void 0!==r&&tr.assertOptions(r,{silentJSONParsing:er.transitional(er.boolean),forcedJSONParsing:er.transitional(er.boolean),clarifyTimeoutError:er.transitional(er.boolean)},false),null!=i&&(De.isFunction(i)?e.paramsSerializer={serialize:i}:tr.assertOptions(i,{encode:er.function,serialize:er.function},true)),tr.assertOptions(e,{baseUrl:er.spelling("baseURL"),withXsrfToken:er.spelling("withXSRFToken")},true),e.method=(e.method||this.defaults.method||"get").toLowerCase();var a=o&&De.merge(o.common,o[e.method]);o&&De.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete o[t];})),e.headers=dn.concat(a,o);var s=[],u=true;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&false===t.runWhen(e)||(u=u&&t.synchronous,s.unshift(t.fulfilled,t.rejected));}));var c,l=[];this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected);}));var h,f=0;if(!u){var d=[Xn.bind(this),void 0];for(d.unshift.apply(d,s),d.push.apply(d,l),h=d.length,c=Promise.resolve(e);f<h;)c=c.then(d[f++],d[f++]);return c}h=s.length;var v=e;for(f=0;f<h;){var p=s[f++],g=s[f++];try{v=p(v);}catch(t){g.call(this,t);break}}try{c=Xn.call(this,v);}catch(t){return Promise.reject(t)}for(f=0,h=l.length;f<h;)c=c.then(l[f++],l[f++]);return c}},{key:"getUri",value:function(t){return Ve(An((t=On(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}]);var t;}();De.forEach(["delete","get","head","options"],(function(t){nr.prototype[t]=function(e,n){return this.request(On(n||{},{method:t,url:e,data:(n||{}).data}))};})),De.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(On(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}nr.prototype[t]=e(),nr.prototype[t+"Form"]=e(true);}));var rr=function(){function t(e){if(h(this,t),"function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(t){n=t;}));var r=this;this.promise.then((function(t){if(r._listeners){for(var e=r._listeners.length;e-- >0;)r._listeners[e](t);r._listeners=null;}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t;})).then(t);return n.cancel=function(){r.unsubscribe(e);},n},e((function(t,e,i){r.reason||(r.reason=new gn(t,e,i),n(r.reason));}));}return v(t,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t];}},{key:"unsubscribe",value:function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1);}}},{key:"toAbortSignal",value:function(){var t=this,e=new AbortController,n=function(t){e.abort(t);};return this.subscribe(n),e.signal.unsubscribe=function(){return t.unsubscribe(n)},e.signal}}],[{key:"source",value:function(){var e;return {token:new t((function(t){e=t;})),cancel:e}}}])}();var ir={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ir).forEach((function(t){var e=R(t,2),n=e[0],r=e[1];ir[r]=n;}));var or=function t(e){var n=new nr(e),r=Jt(nr.prototype.request,n);return De.extend(r,nr.prototype,n,{allOwnKeys:true}),De.extend(r,n,null,{allOwnKeys:true}),r.create=function(n){return t(On(e,n))},r}(sn);or.Axios=nr,or.CanceledError=gn,or.CancelToken=rr,or.isCancel=pn,or.VERSION=Qn,or.toFormData=He,or.AxiosError=$e,or.Cancel=or.CanceledError,or.all=function(t){return Promise.all(t)},or.spread=function(t){return function(e){return t.apply(null,e)}},or.isAxiosError=function(t){return De.isObject(t)&&true===t.isAxiosError},or.mergeConfig=On,or.AxiosHeaders=dn,or.formToJSON=function(t){return an(De.isHTMLForm(t)?new FormData(t):t)},or.getAdapter=Gn,or.HttpStatusCode=ir,or.default=or,or.Axios,or.AxiosError,or.CanceledError,or.isCancel,or.CancelToken,or.VERSION,or.all,or.Cancel,or.isAxiosError,or.spread,or.toFormData,or.AxiosHeaders,or.HttpStatusCode,or.formToJSON,or.getAdapter,or.mergeConfig;var ar=function(){function t(e){var n;return h(this,t),(n=l(this,t,[e])).axiosInstance=or.create({baseURL:"".concat(n.host,"/").concat(n.namespace),headers:{Authorization:"Bearer ".concat(e.publicKey),"Content-Type":"application/json","User-Agent":"@fleetbase/sdk;node"}}),n.axiosInstance.interceptors.response.use((function(t){return t.data}),(function(t){if(t.response){var e=t.response.data;if(V(e.errors)&&e.errors.length)throw new Error(e.errors[0]);if(e.error)throw new Error(e.error)}throw t})),n}return b(t,Mt),v(t,[{key:"setHeaders",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.axiosInstance.defaults.headers.common=A(A({},this.axiosInstance.defaults.headers.common),t),this}},{key:"request",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.axiosInstance.request(A({method:t,url:e},n))}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("GET",t,A({params:e},n))}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("POST",t,A({data:e},n))}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PUT",t,A({data:e},n))}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.request("DELETE",t,e)}},{key:"patch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.request("PATCH",t,A({data:e},n))}}])}();q("adapter","NodeAdapter",ar);var sr=function(){function t(){return h(this,t),l(this,t,arguments)}return b(t,Mt),v(t)}();q("adapter","EmberJsAdapter",sr);(function(){function t(e){var n,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(h(this,t),this.version=null!==(n=o.version)&&void 0!==n?n:"v1",this.options={version:this.version,host:null!==(r=o.host)&&void 0!==r?r:"https://api.fleetbase.io",namespace:null!==(i=o.namespace)&&void 0!==i?i:this.version,debug:a,publicKey:e},"string"!=typeof e||0===e.length)throw new Error("⚠️ Invalid public key given to Fleetbase SDK");if(!lt()&&e.toLowerCase().startsWith("$"))throw new Error("Secret key provided. You must use a public key with Fleetbase Javascript SDK!");this.adapter=o.adapter||ht(this.options),this.orders=new Et("order",this.adapter).extendActions(At),this.entities=new Et("entity",this.adapter),this.places=new Et("place",this.adapter),this.drivers=new Et("driver",this.adapter).extendActions(Nt),this.vehicles=new Et("vehicle",this.adapter),this.vendors=new Et("vendor",this.adapter),this.contacts=new Et("contact",this.adapter),this.serviceAreas=new Et("service-area",this.adapter),this.zones=new Et("zone",this.adapter),this.fleets=new Et("fleet",this.adapter),this.organizations=new Et("organization",this.adapter).extendActions(Pt);}return v(t,[{key:"setAdapter",value:function(t){this.adapter=t;}},{key:"getAdapter",value:function(){return this.adapter}}],[{key:"newInstance",value:function(){return f(t,Array.prototype.slice.call(arguments))}}])})();

class StorefrontStore extends Et {
    constructor() {
        super(...arguments);
    }

    extendActions(actions = []) {
        return yt(this, actions);
    }

    serialize(json) {
        return W('resource', z(this.resource), json, this.adapter);
    }
}

function isPhone(phone = '') {
    return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(phone);
}

function formatCurrency(amount = 0, currency = 'USD', currencyDisplay = 'symbol') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        currencyDisplay,
    }).format(amount);
}

function isKeyValid(key) {
    return typeof key === 'string' && key.length > 30 && (key.startsWith('store_') || key.startsWith('network_'));
}

function isEmpty(obj) {
    const none = obj === null || obj === undefined;
    if (none) {
        return none;
    }

    const objectType = typeof obj;

    if (typeof obj.size === 'number') {
        return !obj.size;
    }

    if (typeof obj.length === 'number' && objectType !== 'function') {
        return !obj.length;
    }

    return false;
}

const { isArray: isArray$1 } = Array;

class StorefrontResource extends kt {
    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });

        return this;
    }
}

q('resource', 'StorefrontResource', StorefrontResource);

const reviewActions = new mt({
    count: function (storeId, options = {}) {
        const params = {};

        if (storeId) {
            params.store = storeId;
        }

        return this.adapter.get(`${this.namespace}/count`, params, options);
    },
});

class Review extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'review', options);
    }

    getMedia() {
        return this.getPhotos();
    }

    getPhotos() {
        return this.getAttribute('photos') ?? [];
    }

    getVideos() {
        return this.getMedia().filter((media) => media?.type?.startsWith('video/'));
    }
}

q('resource', 'Review', Review);

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */


/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name constructFromSymbol
 * @summary Symbol enabling Date extensions to inherit properties from the reference date.
 *
 * The symbol is used to enable the `constructFrom` function to construct a date
 * using a reference date and a value. It allows to transfer extra properties
 * from the reference date to the new date. It's useful for extensions like
 * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
 * a constructor argument.
 */
const constructFromSymbol = Symbol.for("constructDateFrom");

/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);

  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);

  if (date instanceof Date) return new date.constructor(value);

  return new Date(value);
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument, context) {
  // [TODO] Get rid of `toDate` or `constructFrom`?
  return constructFrom(context || argument, argument);
}

/**
 * The {@link addDays} function options.
 */

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * **You don't need date-fns\***:
 *
 * Temporal has a built-in `add` method on all its classes:
 *
 * - [`Temporal.Instant.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add)
 * - [`Temporal.PlainDate.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add)
 * - [`Temporal.PlainDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add)
 * - [`Temporal.PlainTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add)
 * - [`Temporal.PlainYearMonth.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add)
 * - [`Temporal.ZonedDateTime.prototype.add()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add)
 *
 * \* **Not really**, see: https://date-fns.org/you-dont-need-date-fns
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 *
 * @example
 * // Using Temporal:
 * // Add 10 days to 1 September 2014:
 * Temporal.PlainDate.from("2014-09-01").add({ days: 10 }).toString();
 * //=> "2014-09-11"
 */
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);

  // If 0 days, no-op to avoid changing times in the hour before end of DST
  if (!amount) return _date;

  _date.setDate(_date.getDate() + amount);
  return _date;
}

let defaultOptions = {};

function getDefaultOptions$1() {
  return defaultOptions;
}

/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions$1();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * The {@link startOfISOWeek} function options.
 */

/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}

/**
 * The {@link getISOWeekYear} function options.
 */

/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    dates.find((date) => typeof date === "object"),
  );
  return dates.map(normalize);
}

/**
 * The {@link startOfDay} function options.
 */

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * The {@link differenceInCalendarDays} function options.
 */

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);

  const laterTimestamp =
    +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp =
    +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

/**
 * The {@link startOfISOWeekYear} function options.
 */

/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  return !((!isDate(date) && typeof date !== "number") || isNaN(+toDate(date)));
}

/**
 * The {@link startOfYear} function options.
 */

/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};

function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};

function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // [TODO] -- I challenge you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // [TODO] -- I challenge you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // [TODO] I challenge you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};

/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

/**
 * The {@link getDayOfYear} function options.
 */

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

/**
 * The {@link getISOWeek} function options.
 */

/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / millisecondsInWeek) + 1;
}

/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();

  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);

  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = getDefaultOptions$1();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / millisecondsInWeek) + 1;
}

function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  },
};

const dayPeriodEnum = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = getWeekYear(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return addLeadingZeros(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = getISOWeekYear(date);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = getWeek(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return addLeadingZeros(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = getISOWeek(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return addLeadingZeros(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = getDayOfYear(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return addLeadingZeros(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(+date / 1000);
    return addLeadingZeros(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};

const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp$1 =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp$1 = /^'([^]*?)'?$/;
const doubleQuoteRegExp$1 = /''/g;
const unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;

/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = getDefaultOptions$1();
  const locale = defaultOptions.locale ?? enUS;

  const firstWeekContainsDate =
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = toDate(date, options?.in);

  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp$1)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp$1)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString$1(substring) };
      }

      if (formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (isProtectedWeekYearToken(token)) ||
        (isProtectedDayOfYearToken(token))
      ) {
        warnOrThrowProtectedError(token, formatStr, String(date));
      }

      const formatter = formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString$1(input) {
  const matched = input.match(escapedStringRegExp$1);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp$1, "'");
}

/**
 * @name getDefaultOptions
 * @category Common Helpers
 * @summary Get default options.
 * @pure false
 *
 * @description
 * Returns an object that contains defaults for
 * `options.locale`, `options.weekStartsOn` and `options.firstWeekContainsDate`
 * arguments for all functions.
 *
 * You can change these with [setDefaultOptions](https://date-fns.org/docs/setDefaultOptions).
 *
 * @returns The default options
 *
 * @example
 * const result = getDefaultOptions()
 * //=> {}
 *
 * @example
 * setDefaultOptions({ weekStarsOn: 1, firstWeekContainsDate: 4 })
 * const result = getDefaultOptions()
 * //=> { weekStarsOn: 1, firstWeekContainsDate: 4 }
 */
function getDefaultOptions() {
  return Object.assign({}, getDefaultOptions$1());
}

/**
 * The {@link getISODay} function options.
 */

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 ? 7 : day;
}

/**
 * @name transpose
 * @category Generic Helpers
 * @summary Transpose the date to the given constructor.
 *
 * @description
 * The function transposes the date to the given constructor. It helps you
 * to transpose the date in the system time zone to say `UTCDate` or any other
 * date extension.
 *
 * @typeParam InputDate - The input `Date` type derived from the passed argument.
 * @typeParam ResultDate - The result `Date` type derived from the passed constructor.
 *
 * @param date - The date to use values from
 * @param constructor - The date constructor to use
 *
 * @returns Date transposed to the given constructor
 *
 * @example
 * // Create July 10, 2022 00:00 in locale time zone
 * const date = new Date(2022, 6, 10)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0800 (Singapore Standard Time)'
 *
 * @example
 * // Transpose the date to July 10, 2022 00:00 in UTC
 * transpose(date, UTCDate)
 * //=> 'Sun Jul 10 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
 */
function transpose(date, constructor) {
  const date_ = isConstructor(constructor)
    ? new constructor(0)
    : constructFrom(constructor, 0);
  date_.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  date_.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  );
  return date_;
}

function isConstructor(constructor) {
  return (
    typeof constructor === "function" &&
    constructor.prototype?.constructor === constructor
  );
}

const TIMEZONE_UNIT_PRIORITY = 10;

class Setter {
  subPriority = 0;

  validate(_utcDate, _options) {
    return true;
  }
}

class ValueSetter extends Setter {
  constructor(
    value,
    validateValue,

    setValue,

    priority,
    subPriority,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  validate(date, options) {
    return this.validateValue(date, this.value, options);
  }

  set(date, flags, options) {
    return this.setValue(date, flags, this.value, options);
  }
}

class DateTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY;
  subPriority = -1;

  constructor(context, reference) {
    super();
    this.context = context || ((date) => constructFrom(reference, date));
  }

  set(date, flags) {
    if (flags.timestampIsSet) return date;
    return constructFrom(date, transpose(date, this.context));
  }
}

class Parser {
  run(dateString, token, match, options) {
    const result = this.parse(dateString, token, match, options);
    if (!result) {
      return null;
    }

    return {
      setter: new ValueSetter(
        result.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority,
      ),
      rest: result.rest,
    };
  }

  validate(_utcDate, _value, _options) {
    return true;
  }
}

class EraParser extends Parser {
  priority = 140;

  parse(dateString, token, match) {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );

      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set(date, flags, value) {
    flags.era = value;
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}

const numericPatterns = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};

function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }

  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest,
  };
}

function parseNumericPattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseTimezonePattern(pattern, dateString) {
  const matchResult = dateString.match(pattern);

  if (!matchResult) {
    return null;
  }

  // Input is 'Z'
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1),
    };
  }

  const sign = matchResult[1] === "+" ? 1 : -1;
  const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;

  return {
    value:
      sign *
      (hours * millisecondsInHour +
        minutes * millisecondsInMinute +
        seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length),
  };
}

function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}

function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}

function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}

function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  const isCommonEra = currentYear > 0;
  // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC
  const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;

  let result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    const rangeEnd = absCurrentYear + 50;
    const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
    const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

function isLeapYearIndex(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends Parser {
  priority = 130;
  incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "yy",
    });

    switch (token) {
      case "y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value) {
    const currentYear = date.getFullYear();

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear,
      );
      date.setFullYear(normalizedTwoDigitYear, 0, 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

// Local week-numbering year
class LocalWeekYearParser extends Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return mapValue(parseNDigits(4, dateString), valueCallback);
      case "Yo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = getWeekYear(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = normalizeTwoDigitYear(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return startOfWeek(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return startOfWeek(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}

// ISO week-numbering year
class ISOWeekYearParser extends Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}

class ExtendedYearParser extends Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}

class QuarterParser extends Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
      case "QQ": // 01, 02, 03, 04
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return match.quarter(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}

class StandAloneQuarterParser extends Parser {
  priority = 120;

  parse(dateString, token, match) {
    switch (token) {
      // 1, 2, 3, 4
      case "q":
      case "qq": // 01, 02, 03, 04
        return parseNDigits(token.length, dateString);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return match.ordinalNumber(dateString, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return (
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );

      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return match.quarter(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return (
          match.quarter(dateString, {
            width: "wide",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.quarter(dateString, {
            width: "narrow",
            context: "standalone",
          })
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 4;
  }

  set(date, _flags, value) {
    date.setMonth((value - 1) * 3, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}

class MonthParser extends Parser {
  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "L",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];

  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "M":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "MM":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "MMM":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );

      // J, F, ..., D
      case "MMMMM":
        return match.month(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return (
          match.month(dateString, { width: "wide", context: "formatting" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.month(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
}

class StandAloneMonthParser extends Parser {
  priority = 110;

  parse(dateString, token, match) {
    const valueCallback = (value) => value - 1;

    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return mapValue(
          parseNumericPattern(numericPatterns.month, dateString),
          valueCallback,
        );
      // 01, 02, ..., 12
      case "LL":
        return mapValue(parseNDigits(2, dateString), valueCallback);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "month",
          }),
          valueCallback,
        );
      // Jan, Feb, ..., Dec
      case "LLL":
        return (
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );

      // J, F, ..., D
      case "LLLLL":
        return match.month(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return (
          match.month(dateString, { width: "wide", context: "standalone" }) ||
          match.month(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.month(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    date.setMonth(value, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}

/**
 * The {@link setWeek} function options.
 */

/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param week - The week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the local week set
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * const result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * const result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(date, week, options) {
  const date_ = toDate(date, options?.in);
  const diff = getWeek(date_, options) - week;
  date_.setDate(date_.getDate() - diff * 7);
  return toDate(date_, options?.in);
}

// Local week of year
class LocalWeekParser extends Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "w":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "wo":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value, options) {
    return startOfWeek(setWeek(date, value, options), options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}

/**
 * The {@link setISOWeek} function options.
 */

/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The `Date` type of the context function.
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week, options) {
  const _date = toDate(date, options?.in);
  const diff = getISOWeek(_date, options) - week;
  _date.setDate(_date.getDate() - diff * 7);
  return _date;
}

// ISO week of year
class ISOWeekParser extends Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return parseNumericPattern(numericPatterns.week, dateString);
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return startOfISOWeek(setISOWeek(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
class DateParser extends Parser {
  priority = 90;
  subPriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    const month = date.getMonth();
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set(date, _flags, value) {
    date.setDate(value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}

class DayOfYearParser extends Parser {
  priority = 90;

  subpriority = 1;

  parse(dateString, token, match) {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(date, value) {
    const year = date.getFullYear();
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set(date, _flags, value) {
    date.setMonth(0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}

/**
 * The {@link setDay} function options.
 */

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
  const defaultOptions = getDefaultOptions$1();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const date_ = toDate(date, options?.in);
  const currentDay = date_.getDay();

  const remainder = day % 7;
  const dayIndex = (remainder + 7) % 7;

  const delta = 7 - weekStartsOn;
  const diff =
    day < 0 || day > 6
      ? day - ((currentDay + delta) % 7)
      : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
  return addDays(date_, diff, options);
}

// Day of week
class DayParser extends Parser {
  priority = 90;

  parse(dateString, token, match) {
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "EEEEE":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "EEEE":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
}

// Local day of week
class LocalDayParser extends Parser {
  priority = 90;
  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "e":
      case "ee": // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "eo":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "eee":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // T
      case "eeeee":
        return match.day(dateString, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return (
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );

      // Tuesday
      case "eeee":
      default:
        return (
          match.day(dateString, { width: "wide", context: "formatting" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.day(dateString, { width: "short", context: "formatting" }) ||
          match.day(dateString, { width: "narrow", context: "formatting" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "c",
    "t",
    "T",
  ];
}

// Stand-alone local day of week
class StandAloneLocalDayParser extends Parser {
  priority = 90;

  parse(dateString, token, match, options) {
    const valueCallback = (value) => {
      // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
      const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
      return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
    };

    switch (token) {
      // 3
      case "c":
      case "cc": // 03
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
      // 3rd
      case "co":
        return mapValue(
          match.ordinalNumber(dateString, {
            unit: "day",
          }),
          valueCallback,
        );
      // Tue
      case "ccc":
        return (
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // T
      case "ccccc":
        return match.day(dateString, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return (
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );

      // Tuesday
      case "cccc":
      default:
        return (
          match.day(dateString, { width: "wide", context: "standalone" }) ||
          match.day(dateString, {
            width: "abbreviated",
            context: "standalone",
          }) ||
          match.day(dateString, { width: "short", context: "standalone" }) ||
          match.day(dateString, { width: "narrow", context: "standalone" })
        );
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 6;
  }

  set(date, _flags, value, options) {
    date = setDay(date, value, options);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "E",
    "i",
    "e",
    "t",
    "T",
  ];
}

/**
 * The {@link setISODay} function options.
 */

/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday, etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 * @param options - An object with options
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day, options) {
  const date_ = toDate(date, options?.in);
  const currentDay = getISODay(date_, options);
  const diff = day - currentDay;
  return addDays(date_, diff, options);
}

// ISO day of week
class ISODayParser extends Parser {
  priority = 90;

  parse(dateString, token, match) {
    const valueCallback = (value) => {
      if (value === 0) {
        return 7;
      }
      return value;
    };

    switch (token) {
      // 2
      case "i":
      case "ii": // 02
        return parseNDigits(token.length, dateString);
      // 2nd
      case "io":
        return match.ordinalNumber(dateString, { unit: "day" });
      // Tue
      case "iii":
        return mapValue(
          match.day(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // T
      case "iiiii":
        return mapValue(
          match.day(dateString, {
            width: "narrow",
            context: "formatting",
          }),
          valueCallback,
        );
      // Tu
      case "iiiiii":
        return mapValue(
          match.day(dateString, {
            width: "short",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
      // Tuesday
      case "iiii":
      default:
        return mapValue(
          match.day(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
            match.day(dateString, {
              width: "abbreviated",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "short",
              context: "formatting",
            }) ||
            match.day(dateString, {
              width: "narrow",
              context: "formatting",
            }),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 7;
  }

  set(date, _flags, value) {
    date = setISODay(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "E",
    "e",
    "c",
    "t",
    "T",
  ];
}

class AMPMParser extends Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "a":
      case "aa":
      case "aaa":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "aaaaa":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
}

class AMPMMidnightParser extends Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "b":
      case "bb":
      case "bbb":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "bbbbb":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
}

// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends Parser {
  priority = 80;

  parse(dateString, token, match) {
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return (
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );

      case "BBBBB":
        return match.dayPeriod(dateString, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return (
          match.dayPeriod(dateString, {
            width: "wide",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting",
          }) ||
          match.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting",
          })
        );
    }
  }

  set(date, _flags, value) {
    date.setHours(dayPeriodEnumToHours(value), 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "t", "T"];
}

class Hour1to12Parser extends Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return parseNumericPattern(numericPatterns.hour12h, dateString);
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}

class Hour0to23Parser extends Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "H":
        return parseNumericPattern(numericPatterns.hour23h, dateString);
      case "Ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 23;
  }

  set(date, _flags, value) {
    date.setHours(value, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
}

class Hour0To11Parser extends Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "K":
        return parseNumericPattern(numericPatterns.hour11h, dateString);
      case "Ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 11;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["h", "H", "k", "t", "T"];
}

class Hour1To24Parser extends Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "k":
        return parseNumericPattern(numericPatterns.hour24h, dateString);
      case "ko":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 24;
  }

  set(date, _flags, value) {
    const hours = value <= 24 ? value % 24 : value;
    date.setHours(hours, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
}

class MinuteParser extends Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}

class SecondParser extends Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return parseNumericPattern(numericPatterns.second, dateString);
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}

class FractionOfSecondParser extends Parser {
  priority = 30;

  parse(dateString, token) {
    const valueCallback = (value) =>
      Math.trunc(value * Math.pow(10, -token.length + 3));
    return mapValue(parseNDigits(token.length, dateString), valueCallback);
  }

  set(date, _flags, value) {
    date.setMilliseconds(value);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}

// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "X":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "XX":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "XXXX":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "XXXXX":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "XXX":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "x"];
}

// Timezone (ISO-8601)
class ISOTimezoneParser extends Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return parseTimezonePattern(timezonePatterns.basic, dateString);
      case "xxxx":
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString);
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return constructFrom(
      date,
      date.getTime() - getTimezoneOffsetInMilliseconds(date) - value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}

class TimestampSecondsParser extends Parser {
  priority = 40;

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(date, _flags, value) {
    return [constructFrom(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}

class TimestampMillisecondsParser extends Parser {
  priority = 20;

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */
const parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser(),
};

/**
 * The {@link parse} function options.
 */

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;

const notWhitespaceRegExp = /\S/;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangeably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear](https://date-fns.org/docs/setISOWeekYear)
 *    and [setWeekYear](https://date-fns.org/docs/setWeekYear)).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 7. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dateStr - The string to parse
 * @param formatStr - The string of tokens
 * @param referenceDate - defines values missing from the parsed dateString
 * @param options - An object with options.
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @returns The parsed date
 *
 * @throws `options.locale` must contain `match` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */
function parse(dateStr, formatStr, referenceDate, options) {
  const invalidDate = () => constructFrom(referenceDate, NaN);
  const defaultOptions = getDefaultOptions();
  const locale = defaultOptions.locale ?? enUS;

  const firstWeekContainsDate =
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  if (!formatStr)
    return dateStr ? invalidDate() : toDate(referenceDate, options?.in);

  const subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  // If timezone isn't specified, it will try to use the context or
  // the reference date and fallback to the system time zone.
  const setters = [new DateTimezoneSetter(options?.in, referenceDate)];

  const tokens = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter in longFormatters) {
        const longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp);

  const usedTokens = [];

  for (let token of tokens) {
    if (
      isProtectedWeekYearToken(token)
    ) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }
    if (
      isProtectedDayOfYearToken(token)
    ) {
      warnOrThrowProtectedError(token, formatStr, dateStr);
    }

    const firstCharacter = token[0];
    const parser = parsers[firstCharacter];
    if (parser) {
      const { incompatibleTokens } = parser;
      if (Array.isArray(incompatibleTokens)) {
        const incompatibleToken = usedTokens.find(
          (usedToken) =>
            incompatibleTokens.includes(usedToken.token) ||
            usedToken.token === firstCharacter,
        );
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`,
          );
        }
      } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`,
        );
      }

      usedTokens.push({ token: firstCharacter, fullToken: token });

      const parseResult = parser.run(
        dateStr,
        token,
        locale.match,
        subFnOptions,
      );

      if (!parseResult) {
        return invalidDate();
      }

      setters.push(parseResult.setter);

      dateStr = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateStr.indexOf(token) === 0) {
        dateStr = dateStr.slice(token.length);
      } else {
        return invalidDate();
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
    return invalidDate();
  }

  const uniquePrioritySetters = setters
    .map((setter) => setter.priority)
    .sort((a, b) => b - a)
    .filter((priority, index, array) => array.indexOf(priority) === index)
    .map((priority) =>
      setters
        .filter((setter) => setter.priority === priority)
        .sort((a, b) => b.subPriority - a.subPriority),
    )
    .map((setterArray) => setterArray[0]);

  let date = toDate(referenceDate, options?.in);

  if (isNaN(+date)) return invalidDate();

  const flags = {};
  for (const setter of uniquePrioritySetters) {
    if (!setter.validate(date, subFnOptions)) {
      return invalidDate();
    }

    const result = setter.set(date, flags, subFnOptions);
    // Result is tuple (date, flags)
    if (Array.isArray(result)) {
      date = result[0];
      Object.assign(flags, result[1]);
      // Result is date
    } else {
      date = result;
    }
  }

  return date;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

class StoreHour extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'store-hour', options);
    }

    get day() {
        return this.getAttribute('day');
    }

    get isClosed() {
        return this.getAttribute('start') === null && this.getAttribute('end') === null;
    }

    get is24Hours() {
        const start = this.startDateInstance;
        const end = this.endDateInstance;

        if (!isValid(start) || !isValid(end)) {
            return false;
        }

        const diff = Math.abs(start.getTime() - end.getTime());
        const hours = Math.floor(diff / 1000 / 60) / 60;

        return hours > 23;
    }

    get startDateInstance() {
        if (!this.hasAttribute('start')) {
            return null;
        }

        const start = this.getAttribute('start');
        if (typeof start !== 'string') {
            return null;
        }
        const includesSeconds = start.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';

        return parse(start, format, new Date());
    }

    get endDateInstance() {
        if (!this.hasAttribute('end')) {
            return null;
        }

        const end = this.getAttribute('end');
        if (typeof end !== 'string') {
            return null;
        }
        const includesSeconds = end.split(':').length === 3;
        const format = includesSeconds ? 'HH:mm:ss' : 'HH:mm';

        return parse(end, format, new Date());
    }

    get humanReadableHoursRange() {
        if (!isValid(this.startDateInstance) || !isValid(this.endDateInstance)) {
            return `${this.getAttribute('start')} - ${this.getAttribute('end')}`;
        }

        return `${format(this.startDateInstance, 'p')} - ${format(this.endDateInstance, 'p')}`;
    }

    get humanReadableHours() {
        if (this.isClosed) {
            return 'Closed';
        }

        if (this.is24Hours) {
            return '24 Hours';
        }

        return this.humanReadableHoursRange;
    }

    // remove default resource methods
    create() {
        throw new Error('There is no create() method store location!');
    }

    // remove default resource methods
    update() {
        throw new Error('There is no update() method store location!');
    }

    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method store location!');
    }

    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method store location!');
    }
}

q('resource', 'StoreHour', StoreHour);

class StoreLocation extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'store-location', options);
    }

    get latitude() {
        return this.getAttribute('place.location.coordinates.1');
    }

    get longitude() {
        return this.getAttribute('place.location.coordinates.0');
    }

    get hours() {
        return new at((this.getAttribute('hours') || []).map((attributes) => new StoreHour(attributes, this.adapter)));
    }

    /** Raw embedded merchant payload, normalized across API response versions. */
    get storeData() {
        const embeddedStore = this.getAttribute('store_data');
        const legacyStore = this.getAttribute('store');

        return embeddedStore || (legacyStore && typeof legacyStore === 'object' ? legacyStore : null);
    }

    /** Public store identifier for this location. */
    get storeId() {
        const store = this.getAttribute('store');

        return typeof store === 'string' ? store : this.storeData?.id || this.storeData?.public_id;
    }

    /** Typed embedded merchant when requested with `with_store`. */
    get merchant() {
        return this.storeData ? W('resource', 'Store', this.storeData, this.adapter) : null;
    }

    get isAlwaysOpen() {
        return this.hours.length > 0 && this.hours.every((hour) => hour?.is24Hours);
    }

    get today() {
        const today = format(new Date(), 'EEEE');

        return this.schedule[today];
    }

    get schedule() {
        const schedule = {};
        const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        for (let i = 0; i < week.length; i++) {
            const day = week[i];

            schedule[day] = new at();
        }

        for (let i = 0; i < this.hours.length; i++) {
            const hour = this.hours.objectAt(i);

            if (schedule[hour.day]) {
                schedule[hour.day].pushObject(hour);
            }
        }

        return schedule;
    }

    // remove default resource methods
    create() {
        throw new Error('There is no create() method store location!');
    }

    // remove default resource methods
    update() {
        throw new Error('There is no update() method store location!');
    }

    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method store location!');
    }
}

q('resource', 'StoreLocation', StoreLocation);

class PaymentGateway extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'payment-gateway', options);
    }

    get type() {
        return this.getAttribute('type');
    }

    get code() {
        return this.getAttribute('code');
    }

    get isCashGateway() {
        return this.type === 'cash';
    }

    get isStripeGateway() {
        return this.type === 'stripe';
    }

    get isQPayGateway() {
        return this.type === 'qpay' || this.code === 'qpay';
    }

    setCheckoutToken(token) {
        this.token = token;
    }

    getCheckoutToken() {
        return this.token;
    }

    // remove default resource methods
    findRecord() {
        throw new Error('There is no findRecord() method for payment gateways!');
    }

    // remove default resource methods
    create() {
        throw new Error('There is no create() method for payment gateways!');
    }

    // remove default resource methods
    update() {
        throw new Error('There is no update() method for payment gateways!');
    }

    // remove default resource methods
    destroy() {
        throw new Error('There is no destroy() method for payment gateways!');
    }

    // remove default resource methods
    reload() {
        throw new Error('There is no reload() method for payment gateways!');
    }
}

q('resource', 'PaymentGateway', PaymentGateway);

class Store extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'store', options);
    }

    getReviews(params = {}) {
        return this.adapter.get('reviews', { store: this.id, ...params }).then((reviews) => {
            return new at(reviews.map((attributes) => new Review(attributes, this.adapter)));
        });
    }

    getTags(params = {}) {
        return this.adapter.get('tags', params);
    }

    getLocations(params = {}) {
        return this.adapter.get('locations', { store: this.id, ...params }).then((storeLocations) => {
            return new at(
                storeLocations.map((attributes) => {
                    if (attributes.place) {
                        attributes.place = new St(attributes.place, this.adapter);
                    }

                    return new StoreLocation(attributes, this.adapter);
                })
            );
        });
    }

    getLocation(id) {
        return this.adapter.get(`locations/${id}`, { store: this.id }).then((attributes) => {
            return new StoreLocation(attributes, this.adapter);
        });
    }

    getPaymentGateways(params = {}) {
        return this.adapter.get('gateways', params).then((gateways) => {
            return new at(
                gateways.map((attributes) => {
                    return new PaymentGateway(attributes, this.adapter);
                })
            );
        });
    }

    getPaymentGateway(id) {
        return this.adapter.get(`gateways/${id}`).then((attributes) => {
            return new PaymentGateway(attributes, this.adapter);
        });
    }
}

q('resource', 'Store', Store);

class Product extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'product', options);
    }

    variants() {
        return this.getAttribute('variants');
    }

    addons() {
        return this.getAttribute('addon_categories');
    }

    images() {
        return this.getAttribute('images') ?? [];
    }

    videos() {
        return this.getAttribute('videos') ?? [];
    }

    hours() {
        return this.getAttribute('hours') ?? [];
    }

    get isOnSale() {
        return this.getAttribute('is_on_sale');
    }

    get isNotOnSale() {
        return !this.getAttribute('is_on_sale');
    }

    get formattedAmount() {
        const { price, sale_price, currency } = this.getAttributes(['price', 'sale_price', 'currency']);

        if (this.isOnSale) {
            if (isEmpty(sale_price) || isEmpty(currency)) {
                return null;
            }

            return formatCurrency(sale_price / 100, currency);
        }

        if (isEmpty(price) || isEmpty(currency)) {
            return null;
        }

        return formatCurrency(price / 100, currency);
    }

    get merchant() {
        const attributes = this.getAttribute('store');

        return attributes && typeof attributes === 'object' ? new Store(attributes, this.adapter) : null;
    }

    getReviews() {
        return this.adapter.get('reviews', { store: this.id }).then((reviews) => {
            return new at(reviews.map((attributes) => new Review(attributes, this.adapter)));
        });
    }
}

q('resource', 'Product', Product);

class Category extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'category', options);
    }

    getProducts() {
        return this.adapter.get('products', { category: this.id }).then((products) => {
            return new at(products.map((attributes) => new Product(attributes, this.adapter)));
        });
    }
}

q('resource', 'Category', Category);

const customerActions = new mt({
    // const { error } = await storefront.customers.login('+1 111-1111');
    login: function (identity, password = null, attributes = {}) {
        // handle phone number authentication
        if (isPhone(identity)) {
            return this.adapter.post('customers/login-with-sms', { phone: identity });
        }

        if (!password) {
            throw new Error('Login requires password!');
        }

        return this.adapter.post('customers/login', { identity, password, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithApple('<appleUserId>', '<identityToken>', '<authorizationCode>', '<email>', '<name>');
    loginWithApple: function (appleUserId, identityToken, authorizationCode, email, name, attributes = {}) {
        return this.adapter.post('customers/login-with-apple', { appleUserId, identityToken, authorizationCode, email, name, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithFacebook('<facebookUserId>', '<email>', '<name>', '<avatarUrl>');
    loginWithFacebook: function (facebookUserId, email, name, avatarUrl, attributes = {}) {
        return this.adapter.post('customers/login-with-facebook', { facebookUserId, email, name, avatarUrl, ...attributes }).then(this.afterFetch.bind(this));
    },

    // const customer = await storefront.customers.loginWithGoogle('<idToken>', '<clientId>');
    loginWithGoogle: function (idToken, clientId, attributes = {}) {
        return this.adapter.post('customers/login-with-google', { idToken, clientId, ...attributes }).then(this.afterFetch.bind(this));
    },

    verifyCode: function (identity, code, attributes = {}) {
        return this.adapter.post('customers/verify-code', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },

    requestCreationCode(identity, mode = 'email') {
        return this.adapter.post('customers/request-creation-code', {
            identity,
            mode,
        });
    },

    create(identity, code, attributes = {}) {
        return this.adapter.post('customers', { identity, code, ...attributes }).then(this.afterFetch.bind(this));
    },

    retrieve: function (id) {
        return this.findRecord(id);
    },
});

class Customer extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'customer', {
            actions: customerActions,
            ...options,
        });
    }

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {import('@fleetbase/sdk').Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });

        return this;
    }

    get token() {
        return this.getAttribute('token');
    }

    async syncDevice(token, platform) {
        return this.performAuthorizedRequest('customers/register-device', { token, platform }, 'POST');
    }

    performAuthorizedRequest(endpoint, params = {}, method = 'GET', options = {}) {
        const requestOptions = {
            ...options,
            headers: {
                ...options.headers,
                'Customer-Token': this.token,
            },
        };

        return this.adapter[method.toLowerCase()](endpoint, params, requestOptions);
    }

    async getSavedPlaces() {
        const places = await this.performAuthorizedRequest('customers/places');
        return new at(places.map((attributes) => new St(attributes, this.adapter)));
    }

    async getOrderHistory(params = {}) {
        const orders = await this.performAuthorizedRequest('customers/orders', params);
        return new at(orders.map((attributes) => new xt(attributes, this.adapter)));
    }

    getStripeEphemeralKey(params = {}) {
        return this.performAuthorizedRequest('customers/stripe-ephemeral-key', params, 'POST');
    }

    getStripeSetupIntent(params = {}) {
        return this.performAuthorizedRequest('customers/stripe-setup-intent', params, 'POST');
    }

    startAccountClosure(params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/account-closure', params, 'POST', options);
    }

    confirmAccountClosure(code, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/confirm-account-closure', { code, ...params }, 'POST', options);
    }

    requestPhoneVerification(phone, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/request-phone-verification', { phone, ...params }, 'POST', options);
    }

    verifyPhoneNumber(code, phone, params = {}, options = {}) {
        return this.performAuthorizedRequest('customers/verify-phone-number', { code, phone, ...params }, 'POST', options);
    }

    updateContactAlias(attributes = {}, options = {}) {
        return this.performAuthorizedRequest(`contacts/${this.id}`, attributes, 'PUT', options).then((response) => {
            this.syncAttributes(response);
            return this;
        });
    }
}

q('resource', 'Customer', Customer);

const { isArray } = Array;

const cartActions = new mt({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    add: function (id, productId, quantity = 1, data = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/${id}/${productId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },

    update: function (id, cartItemId, quantity, data = {}, options = {}) {
        return this.adapter.put(`${this.namespace}/${id}/${cartItemId}`, { ...data, quantity }, options).then(this.afterFetch.bind(this));
    },

    remove: function (id, cartItemId, options = {}) {
        return this.adapter.delete(`${this.namespace}/${id}/${cartItemId}`, {}, options).then(this.afterFetch.bind(this));
    },

    empty: function (id, options = {}) {
        return this.adapter.put(`${this.namespace}/${id}/empty`, {}, options).then(this.afterFetch.bind(this));
    },

    retrieve: function (id = '') {
        return this.findRecord(id);
    },
});

class Cart extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'cart', { actions: cartActions, ...options });
    }

    add(productId, quantity = 1, data = {}, options = {}) {
        if (productId instanceof Product) {
            productId = productId.id;
        }

        return this.store.add(this.id, productId, quantity, data, options);
    }

    update(cartItemId, quantity, data = {}, options = {}) {
        return this.store.update(this.id, cartItemId, quantity, data, options);
    }

    remove(cartItemId, options = {}) {
        return this.store.remove(this.id, cartItemId, options);
    }

    empty(options = {}) {
        return this.store.empty(this.id, options);
    }

    delete() {
        return this.destroy();
    }

    refresh() {
        return this.store.retrieve(this.id);
    }

    subtotal() {
        return this.contents().reduce((subtotal, cartItem) => subtotal + Number(cartItem?.subtotal || 0), 0);
    }

    contents() {
        const items = this.getAttribute('items', []);
        return isArray(items) ? items : [];
    }

    hasProduct(productId) {
        return this.contents().findIndex((cartItem) => cartItem.product_id === productId) !== -1;
    }

    get isEmpty() {
        return this.contents().length === 0;
    }

    get isNotEmpty() {
        return !this.isEmpty;
    }
}

q('resource', 'Cart', Cart);

class Network extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'network', options);
    }

    getTags(params = {}) {
        return this.adapter.get('tags', params);
    }

    async getResourceCollection(endpoint, ResourceClass, params = {}) {
        const resources = await this.adapter.get(endpoint, params);
        return new at(resources.map((attributes) => new ResourceClass(attributes, this.adapter)));
    }

    async getStores(params = {}) {
        return this.getResourceCollection('stores', Store, params);
    }

    async getStoreLocations(params = {}) {
        return this.getResourceCollection('store-locations', StoreLocation, params);
    }

    async getCategories(params = {}) {
        return this.getResourceCollection('categories', Category, params);
    }

    async search(query, params = {}) {
        return this.getResourceCollection('search', Product, { query, with_store: true, ...params });
    }

    async lookupStore(id) {
        const attributes = await this.adapter.get(`lookup/${id}`);
        return new Store(attributes, this.adapter);
    }

    async getReviews(storeId, params = {}) {
        return this.getResourceCollection('reviews', Review, { store: storeId, ...params });
    }

    async getPaymentGateways(params = {}) {
        return this.getResourceCollection('gateways', PaymentGateway, params);
    }
}

q('resource', 'Network', Network);

class DeliveryServiceQuote extends qt {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        let finalAttributes = attributes;
        let finalAdapter = adapter;

        // If `attributes` is actually an Adapter, adjust the arguments accordingly.
        if (attributes instanceof Mt || (attributes && typeof attributes.get === 'function' && typeof attributes.post === 'function')) {
            finalAttributes = {};
            finalAdapter = attributes;
        }

        // Call `super()` exactly once with the resolved arguments.
        super(finalAttributes, finalAdapter, 'service-quote', options);
    }

    /**
     * Set a new adapter to the resource instance, this will update the Store instance
     *
     * @param {Adapter} adapter
     * @return {this}
     */
    setAdapter(adapter) {
        this.adapter = adapter;
        this.store = new StorefrontStore(this.resource, adapter, {
            onAfterFetch: this.syncAttributes.bind(this),
            actions: this.options?.actions,
        });

        return this;
    }

    get formattedAmount() {
        const { amount, currency } = this.getAttributes(['amount', 'currency']);

        if (isEmpty(amount) || isEmpty(currency)) {
            return null;
        }

        return formatCurrency(amount / 100, currency);
    }

    async fromCart() {
        return this.fetchServiceQuotesFromCart(...arguments);
    }

    async fetchServiceQuotesFromCart(origin, destination, cart, config = 'storefront', all = false) {
        if (origin?.id) {
            origin = origin.id;
        }

        if (destination?.id) {
            destination = destination.id;
        }

        if (cart?.id) {
            cart = cart.id;
        }

        const serviceQuotes = await this.adapter.get('service-quotes/from-cart', {
            origin,
            destination,
            cart,
            config,
            all,
        });

        if (isArray$1(serviceQuotes)) {
            return new at(serviceQuotes.map((serviceQuote) => new DeliveryServiceQuote(serviceQuote, this.adapter)));
        }

        return new DeliveryServiceQuote(serviceQuotes, this.adapter);
    }

    static async getFromCart(adapter, origin, destination, cart, config = 'storefront', all = false) {
        const quote = new DeliveryServiceQuote(adapter);
        return quote.fetchServiceQuotesFromCart(origin, destination, cart, config, all);
    }
}

q('resource', 'DeliveryServiceQuote', DeliveryServiceQuote);

class Order extends xt {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, options);
    }
}

q('resource', 'Order', Order);

const checkoutActions = new mt({
    create: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    initialize: function (customer, cart, serviceQuote, gateway, orderOptions = {}, options = {}) {
        if (wt(customer)) {
            customer = customer.id;
        }

        if (wt(cart)) {
            cart = cart.id;
        }

        if (wt(serviceQuote)) {
            serviceQuote = serviceQuote.id;
        }

        if (wt(gateway)) {
            gateway = gateway.getAttribute('code');
        }

        return this.adapter.get(`${this.namespace}/before`, { ...orderOptions, customer, cart, serviceQuote, gateway }, options);
    },

    captureOrder: function (token, params = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/capture`, { token, ...params }, options).then((orderJson) => new Order(orderJson, this.adapter));
    },

    createStripeSetupIntent: function (customer, params = {}, options = {}) {
        if (wt(customer)) {
            customer = customer.id;
        }

        return this.adapter.post(`${this.namespace}/stripe-setup-intent`, { customer, ...params }, options);
    },

    updateStripePaymentIntent: function (paymentIntent, customer, cart, serviceQuote, orderOptions = {}, options = {}) {
        if (wt(customer)) {
            customer = customer.id;
        }

        if (wt(cart)) {
            cart = cart.id;
        }

        if (wt(serviceQuote)) {
            serviceQuote = serviceQuote.id;
        }

        return this.adapter.put(`${this.namespace}/stripe-update-payment-intent`, { paymentIntent, customer, cart, serviceQuote, ...orderOptions }, options);
    },

    getStatus: function (checkout, token, options = {}) {
        if (wt(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.get(`${this.namespace}/status`, { checkout, token }, options);
    },

    captureQPay: function (checkout, params = {}, options = {}) {
        if (wt(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.post(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },

    captureQPayCallback: function (checkout, params = {}, options = {}) {
        if (wt(checkout)) {
            checkout = checkout.id;
        }

        return this.adapter.get(`${this.namespace}/capture-qpay`, { checkout, ...params }, options);
    },
});

class Checkout extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'checkout', { actions: checkoutActions, ...options });
    }

    initialize() {
        return this.store.initialize(...arguments);
    }

    captureOrder() {
        return this.store.captureOrder(...arguments);
    }

    createStripeSetupIntent() {
        return this.store.createStripeSetupIntent(...arguments);
    }

    updateStripePaymentIntent() {
        return this.store.updateStripePaymentIntent(...arguments);
    }

    getStatus() {
        return this.store.getStatus(...arguments);
    }

    captureQPay() {
        return this.store.captureQPay(...arguments);
    }

    captureQPayCallback() {
        return this.store.captureQPayCallback(...arguments);
    }
}

q('resource', 'Checkout', Checkout);

class FoodTruck extends StorefrontResource {
    constructor(attributes = {}, adapter = undefined, options = {}) {
        super(attributes, adapter, 'food-truck', options);
    }
}

q('resource', 'FoodTruck', FoodTruck);

function idFor(value) {
    return wt(value) ? value.id : value;
}

const orderActions = new mt({
    create: undefined,
    update: undefined,
    findAll: undefined,
    query: undefined,
    queryRecord: undefined,

    completePickup: function (order, params = {}, options = {}) {
        return this.adapter.put(`${this.namespace}/picked-up`, { order: idFor(order), ...params }, options);
    },

    getReceipt: function (order, params = {}, options = {}) {
        return this.adapter.post(`${this.namespace}/receipt`, { order: idFor(order), ...params }, options);
    },
});

/**
 * // instance
 * const storefront = new Storefront();
 *
 */
class Storefront {
    /**
     * Builds an instance of the Fleetbase Storefront SDK
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
            namespace: config.namespace || `storefront/${this.version}`,
            publicKey: storeKey,
            debug,
        };

        if (!isKeyValid(storeKey)) {
            throw new Error('⚠️ Invalid Storefront key given to Storefront SDK');
        }

        this.adapter = config.adapter || ht(this.options);

        this.initializeStores();
    }

    initializeStores() {
        this.products = new StorefrontStore('product', this.adapter);
        this.categories = new StorefrontStore('category', this.adapter);
        this.foodTrucks = new StorefrontStore('food-truck', this.adapter);
        this.reviews = new StorefrontStore('review', this.adapter).extendActions(reviewActions);
        this.customers = new StorefrontStore('customer', this.adapter).extendActions(customerActions);
        this.cart = new StorefrontStore('cart', this.adapter).extendActions(cartActions);
        this.checkout = new StorefrontStore('checkout', this.adapter).extendActions(checkoutActions);
        this.orders = new StorefrontStore('order', this.adapter).extendActions(orderActions);

        return this;
    }

    /**
     * Loads information about this storefront.
     *
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    about(options = {}) {
        return this.adapter.get('about').then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /** @returns {Promise<Store | Network>} Loads the storefront owner as a typed resource. */
    getOwner() {
        return this.about({ resource: true });
    }

    /**
     * Looks up a specific store or network by public ID.
     *
     * @param {string} id
     * @param {{ resource?: boolean }} options
     * @returns {Promise<Record<string, any> | Store | Network>}
     */
    lookup(id, options = {}) {
        return this.adapter.get(`lookup/${id}`).then((attributes) => (options.resource ? this.hydrateOwner(attributes) : attributes));
    }

    /**
     * @param {string} id
     * @returns {Promise<Store | Network>}
     */
    lookupResource(id) {
        return this.lookup(id, { resource: true });
    }

    /**
     * Searches products in the current store or network.
     *
     * @param {string} query
     * @param {Record<string, any>} options
     * @returns {Promise<Collection<Product>>}
     */
    search(query, options = {}) {
        return this.adapter.get('search', { query, ...options }).then((products) => {
            return new at(products.map((product) => new Product(product, this.adapter)));
        });
    }

    hydrateOwner(attributes = {}) {
        if (attributes?.is_network === true) {
            return new Network(attributes, this.adapter);
        }

        return new Store(attributes, this.adapter);
    }

    static newInstance() {
        return new Storefront(...arguments);
    }

    setAdapter(adapter) {
        this.adapter = adapter;

        return this.initializeStores();
    }

    getAdapter() {
        return this.adapter;
    }
}

exports.Cart = Cart;
exports.Category = Category;
exports.Checkout = Checkout;
exports.Customer = Customer;
exports.DeliveryServiceQuote = DeliveryServiceQuote;
exports.FoodTruck = FoodTruck;
exports.Network = Network;
exports.Order = Order;
exports.PaymentGateway = PaymentGateway;
exports.Product = Product;
exports.Review = Review;
exports.Store = Store;
exports.StoreHour = StoreHour;
exports.StoreLocation = StoreLocation;
exports.default = Storefront;
exports.lookup = W;
//# sourceMappingURL=storefront.cjs.map

module.exports = Object.assign(exports.default, exports);
