'use strict';
function t(t) {
    return t && 'object' == typeof t && 'default' in t ? t : { default: t };
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = t(require('axios'));
function n(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function r(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
            ? n(Object(r), !0).forEach(function (e) {
                  s(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                });
    }
    return t;
}
function i(t) {
    return (
        (i =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                  }),
        i(t)
    );
}
function a(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function o(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
}
function u(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
}
function s(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function c(t, e) {
    if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
    })),
        e && l(t, e);
}
function h(t) {
    return (
        (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              }),
        h(t)
    );
}
function l(t, e) {
    return (
        (l =
            Object.setPrototypeOf ||
            function (t, e) {
                return (t.__proto__ = e), t;
            }),
        l(t, e)
    );
}
function d() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
        return !1;
    }
}
function f(t, e, n) {
    return (
        (f = d()
            ? Reflect.construct
            : function (t, e, n) {
                  var r = [null];
                  r.push.apply(r, e);
                  var i = new (Function.bind.apply(t, r))();
                  return n && l(i, n.prototype), i;
              }),
        f.apply(null, arguments)
    );
}
function v(t, e) {
    if (e && ('object' == typeof e || 'function' == typeof e)) return e;
    if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined');
    return (function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    })(t);
}
function g(t) {
    var e = d();
    return function () {
        var n,
            r = h(t);
        if (e) {
            var i = h(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return v(this, n);
    };
}
function p(t) {
    return (
        (function (t) {
            if (Array.isArray(t)) return y(t);
        })(t) ||
        (function (t) {
            if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
        })(t) ||
        (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e);
        })(t) ||
        (function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        })()
    );
}
function y(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}
function m(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
            (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
            ? m(Object(n), !0).forEach(function (e) {
                  E(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : m(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                });
    }
    return t;
}
function b(t) {
    return (b =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                  return typeof t;
              }
            : function (t) {
                  return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
              })(t);
}
function k(t, e, n, r, i, a, o) {
    try {
        var u = t[a](o),
            s = u.value;
    } catch (t) {
        return void n(t);
    }
    u.done ? e(s) : Promise.resolve(s).then(r, i);
}
function x(t) {
    return function () {
        var e = this,
            n = arguments;
        return new Promise(function (r, i) {
            var a = t.apply(e, n);
            function o(t) {
                k(a, r, i, o, u, 'next', t);
            }
            function u(t) {
                k(a, r, i, o, u, 'throw', t);
            }
            o(void 0);
        });
    };
}
function T(t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function C(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
}
function A(t, e, n) {
    return e && C(t.prototype, e), n && C(t, n), t;
}
function E(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
function D(t, e) {
    if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 },
    })),
        e && S(t, e);
}
function O(t) {
    return (O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
}
function S(t, e) {
    return (S =
        Object.setPrototypeOf ||
        function (t, e) {
            return (t.__proto__ = e), t;
        })(t, e);
}
function P() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
        return !1;
    }
}
function R(t, e, n) {
    return (R = P()
        ? Reflect.construct
        : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var i = new (Function.bind.apply(t, r))();
              return n && S(i, n.prototype), i;
          }).apply(null, arguments);
}
function U(t) {
    var e = 'function' == typeof Map ? new Map() : void 0;
    return (U = function (t) {
        if (null === t || ((n = t), -1 === Function.toString.call(n).indexOf('[native code]'))) return t;
        var n;
        if ('function' != typeof t) throw new TypeError('Super expression must either be null or a function');
        if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, r);
        }
        function r() {
            return R(t, arguments, O(this).constructor);
        }
        return (
            (r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
            S(r, t)
        );
    })(t);
}
function M(t, e) {
    return !e || ('object' != typeof e && 'function' != typeof e)
        ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
          })(t)
        : e;
}
function j(t) {
    var e = P();
    return function () {
        var n,
            r = O(t);
        if (e) {
            var i = O(this).constructor;
            n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return M(this, n);
    };
}
function q(t, e) {
    return (
        (function (t) {
            if (Array.isArray(t)) return t;
        })(t) ||
        (function (t, e) {
            var n = null == t ? null : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
            if (null != n) {
                var r,
                    i,
                    a = [],
                    o = !0,
                    u = !1;
                try {
                    for (n = n.call(t); !(o = (r = n.next()).done) && (a.push(r.value), !e || a.length !== e); o = !0);
                } catch (t) {
                    (u = !0), (i = t);
                } finally {
                    try {
                        o || null == n.return || n.return();
                    } finally {
                        if (u) throw i;
                    }
                }
                return a;
            }
        })(t, e) ||
        N(t, e) ||
        (function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        })()
    );
}
function $(t) {
    return (
        (function (t) {
            if (Array.isArray(t)) return H(t);
        })(t) ||
        (function (t) {
            if (('undefined' != typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t);
        })(t) ||
        N(t) ||
        (function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        })()
    );
}
function N(t, e) {
    if (t) {
        if ('string' == typeof t) return H(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? H(t, e) : void 0
        );
    }
}
function H(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
}
var Y = Array.isArray,
    L = 'undefined' == typeof arguments ? void 0 : arguments,
    F = function (t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        if (Y(t))
            if (r.length <= 6e4) t.splice.apply(t, [e, n].concat($(r)));
            else {
                t.splice(e, n);
                for (var i = 0; i < r.length; i += 6e4) {
                    var a = r.slice(i, i + 6e4);
                    t.splice.apply(t, [e + i, 0].concat($(a)));
                }
            }
        else W(arr) && t.replace(e, n, r);
    },
    _ = function (t) {
        return t;
    },
    W = function (t) {
        return t instanceof Z;
    },
    z = function (t, e) {
        return Y(t) ? t[e] : W(t) ? t.objectAt(e) : null;
    },
    I = function (t, e) {
        return 2 === L.length
            ? function (n) {
                  return e === n[t];
              }
            : function (e) {
                  return Boolean(e[t]);
              };
    },
    Q = function (t, e) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = t.length, i = n; i < r; i++) {
            var a = z(t, i);
            if (e(a, i, t)) return i;
        }
        return -1;
    },
    B = function (t, e, n) {
        var r = e.bind(n),
            i = Q(t, r, 0);
        return -1 === i ? void 0 : z(t, i);
    },
    G = function (t, e, n) {
        var r = e.bind(n);
        return -1 !== Q(t, r, 0);
    },
    X = function (t, e, n) {
        var r = e.bind(n);
        return (
            -1 ===
            Q(
                t,
                function (t, e, n) {
                    return !r(t, e, n);
                },
                0
            )
        );
    },
    K = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = t.length;
        n < 0 && (n += i);
        var a =
            r && e != e
                ? function (t) {
                      return t != t;
                  }
                : function (t) {
                      return t === e;
                  };
        return Q(t, a, n);
    },
    J = function (t, e, n) {
        return F(t, e, 0, [n]), n;
    },
    Z = (function (t) {
        D(n, U(Array));
        var e = j(n);
        function n() {
            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
            return T(this, n), M(Y(arguments[0]) ? e.call.apply(e, [this].concat($(arguments[0]))) : e.apply(this, arguments));
        }
        return (
            A(n, [
                {
                    key: 'notEmpty',
                    get: function () {
                        return this.length > 0;
                    },
                },
                {
                    key: 'empty',
                    get: function () {
                        return 0 === this.length;
                    },
                },
                {
                    key: 'first',
                    get: function () {
                        return z(this, 0);
                    },
                },
                {
                    key: 'last',
                    get: function () {
                        return z(this, this.length - 1);
                    },
                },
                {
                    key: 'replace',
                    value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return F(this, t, e, n), this;
                    },
                },
                {
                    key: 'objectsAt',
                    value: function (t) {
                        var e = this;
                        return t.map(function (t) {
                            return z(e, t);
                        });
                    },
                },
                {
                    key: 'objectAt',
                    value: function (t) {
                        return z(this, t);
                    },
                },
                {
                    key: 'indexOf',
                    value: function (t, e) {
                        return K(this, t, e, !1);
                    },
                },
                {
                    key: 'lastIndexOf',
                    value: function (t, e) {
                        var n = this.length;
                        (void 0 === e || e >= n) && (e = n - 1), e < 0 && (e += n);
                        for (var r = e; r >= 0; r--) if (z(this, r) === t) return r;
                        return -1;
                    },
                },
                {
                    key: 'includes',
                    value: function (t, e) {
                        return -1 !== K(this, t, e, !0);
                    },
                },
                {
                    key: 'findBy',
                    value: function () {
                        return B(this, I.apply(void 0, arguments));
                    },
                },
                {
                    key: 'findIndexBy',
                    value: function () {
                        return Q(this, I.apply(void 0, arguments));
                    },
                },
                {
                    key: 'isEvery',
                    value: function () {
                        return X(this, I.apply(void 0, arguments));
                    },
                },
                {
                    key: 'isAny',
                    value: function () {
                        return G(this, I.apply(void 0, arguments));
                    },
                },
                {
                    key: 'invoke',
                    value: function (t) {
                        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        var i = [];
                        return (
                            this.forEach(function (e) {
                                var r;
                                return i.push(null === (r = e[t]) || void 0 === r ? void 0 : r.call.apply(r, [e].concat(n)));
                            }),
                            i
                        );
                    },
                },
                {
                    key: 'toArray',
                    value: function () {
                        return this.map(function (t) {
                            return t;
                        });
                    },
                },
                {
                    key: 'compact',
                    value: function () {
                        return this.filter(function (t) {
                            return null != t;
                        });
                    },
                },
                {
                    key: 'sortBy',
                    value: function () {
                        var t = arguments;
                        return this.sort(function (e, n) {
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r],
                                    a = e[i],
                                    o = n[i],
                                    u = compare(a, o);
                                if (u) return u;
                            }
                            return 0;
                        });
                    },
                },
                {
                    key: 'uniqBy',
                    value: function (t) {
                        return (function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                                n = [],
                                r = new Set(),
                                i =
                                    'function' == typeof e
                                        ? e
                                        : function (t) {
                                              return get(t, e);
                                          };
                            return (
                                t.forEach(function (t) {
                                    var e = i(t);
                                    r.has(e) || (r.add(e), n.push(t));
                                }),
                                n
                            );
                        })(this, t);
                    },
                },
                {
                    key: 'without',
                    value: function (t) {
                        if (!this.includes(t)) return this;
                        var e =
                            t == t
                                ? function (e) {
                                      return e !== t;
                                  }
                                : function (t) {
                                      return t == t;
                                  };
                        return this.filter(e);
                    },
                },
                {
                    key: 'clear',
                    value: function () {
                        var t = this.length;
                        return 0 === t || this.replace(0, t, []), this;
                    },
                },
                {
                    key: 'insertAt',
                    value: function (t, e) {
                        return J(this, t, e), this;
                    },
                },
                {
                    key: 'replaceAt',
                    value: function (t, e) {
                        return this.replace(t, 1, [e]);
                    },
                },
                {
                    key: 'removeAt',
                    value: function (t, e) {
                        return (function (t, e) {
                            return F(t, e, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, []), t;
                        })(this, t, e);
                    },
                },
                {
                    key: 'pushObject',
                    value: function (t) {
                        return this.insertAt(this.length, t);
                    },
                },
                {
                    key: 'pushObjects',
                    value: function (t) {
                        return this.replace(this.length, 0, t), this;
                    },
                },
                {
                    key: 'popObject',
                    value: function () {
                        var t = this.length;
                        if (0 === t) return null;
                        var e = z(this, t - 1);
                        return this.removeAt(t - 1, 1), e;
                    },
                },
                {
                    key: 'shiftObject',
                    value: function () {
                        if (0 === this.length) return null;
                        var t = z(this, 0);
                        return this.removeAt(0), t;
                    },
                },
                {
                    key: 'unshiftObject',
                    value: function (t) {
                        return J(this, 0, t);
                    },
                },
                {
                    key: 'unshiftObjects',
                    value: function (t) {
                        return this.replace(0, 0, t), this;
                    },
                },
                {
                    key: 'reverseObjects',
                    value: function () {
                        var t = this.length;
                        if (0 === t) return this;
                        var e = this.toArray().reverse();
                        return this.replace(0, t, e), this;
                    },
                },
                {
                    key: 'setObjects',
                    value: function (t) {
                        if (0 === t.length) return this.clear();
                        var e = this.length;
                        return this.replace(0, e, t), this;
                    },
                },
                {
                    key: 'removeObject',
                    value: function (t) {
                        for (var e = this.length || 0; --e >= 0; ) z(this, e) === t && this.removeAt(e);
                        return this;
                    },
                },
                {
                    key: 'removeObjects',
                    value: function (t) {
                        for (var e = t.length - 1; e >= 0; e--) this.removeObject(t[e]);
                        return this;
                    },
                },
                {
                    key: 'addObject',
                    value: function (t) {
                        return this.includes(t) || this.pushObject(t), this;
                    },
                },
                {
                    key: 'addObjects',
                    value: function (t) {
                        var e = this;
                        return (
                            t.forEach(function (t) {
                                return e.addObject(t);
                            }),
                            this
                        );
                    },
                },
            ]),
            n
        );
    })(),
    V = function (t) {
        var e = null == t;
        if (e) return e;
        if ('number' == typeof t.size) return !t.size;
        var n = b(t);
        if ('object' === n) {
            var r = t.size;
            if ('number' == typeof r) return !r;
        }
        if ('number' == typeof t.length && 'function' !== n) return !t.length;
        if ('object' === n) {
            var i = t.length;
            if ('number' == typeof i) return !i;
        }
        return !1;
    },
    tt = function (t) {
        return V(t) || ('string' == typeof t && !1 === /\S/.test(t));
    };
function et(t) {
    return t instanceof ht;
}
var nt = function () {
        var t, e, n, r, i;
        return !(
            'undefined' == typeof process ||
            ('object' !== b(null === (t = process) || void 0 === t ? void 0 : t.env) &&
                -1 === (null === (e = process.release) || void 0 === e || null === (n = e.name) || void 0 === n ? void 0 : n.search(/node|io.js/))) ||
            ('undefined' != typeof window && 'ReactNative' !== (null === (r = window) || void 0 === r || null === (i = r.navigator) || void 0 === i ? void 0 : i.product))
        );
    },
    rt = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return nt() ? Dt('adapter', 'NodeAdapter', t) : Dt('adapter', 'BrowserAdapter', t);
    },
    it = Array.isArray;
!(function () {
    function t(e) {
        T(this, t), (this.place = e), (this.geometry = null == e ? void 0 : e.geometry), (this.components = this.parseComponents()), (this.attributes = this.parseProperties());
    }
    A(t, [
        {
            key: 'parse',
            value: function () {
                this.parseComponents(), this.parseProperties();
            },
        },
        {
            key: 'parseComponents',
            value: function () {
                var t;
                return ((null === (t = this.place) || void 0 === t ? void 0 : t.address_components) || []).reduce(function (t, e) {
                    return (
                        e.types.forEach(function (n) {
                            t[n] = e;
                        }),
                        t
                    );
                }, {});
            },
        },
        {
            key: 'parseProperties',
            value: function () {
                var t,
                    e = {
                        streetNumber: this.get('street_number'),
                        streetName: this.get('route'),
                        coordinates: null !== (t = this.geometry) && void 0 !== t && t.location ? Object.values(this.geometry.location) : [0, 0],
                        city: this.or(['locality', 'sublocality', 'sublocality_level_1', 'neighborhood', 'administrative_area_level_3', 'administrative_area_level_2']),
                        county: this.get('administrative_area_level_2'),
                        stateShort: this.get('administrative_area_level_1', !0),
                        stateLong: this.get('administrative_area_level_1'),
                        countryShort: this.get('country', !0),
                        country: this.get('country', !0),
                        countryLong: this.get('country'),
                        postalCode: this.get('postal_code'),
                    };
                return (e.address = [e.streetNumber, e.streetName].filter(Boolean).join(' ')), e;
            },
        },
        {
            key: 'all',
            value: function () {
                return this.attributes;
            },
        },
        {
            key: 'or',
            value: function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (it(n)) {
                        var r = n[0],
                            i = n[1];
                        if (this.has(r)) return this.get(r, i);
                    } else if (this.has(n)) return this.get(n);
                }
                return null;
            },
        },
        {
            key: 'has',
            value: function (t) {
                return t in this.components;
            },
        },
        {
            key: 'get',
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t in this.components ? (e ? this.components[t].short_name : this.components[t].long_name) : null;
            },
        },
        {
            key: 'setAttributes',
            value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (this.attributes = w(w({}, this.attributes), t)), this;
            },
        },
        {
            key: 'setAttribute',
            value: function (t, e) {
                return (this.attributes[t] = e), this;
            },
        },
        {
            key: 'getAttribute',
            value: function (t) {
                return this.attributes[t] || null;
            },
        },
    ]);
})();
var at = (function () {
    function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        T(this, t), (this.type = 'Point'), (this.coordinates = [n, e]);
    }
    return (
        A(
            t,
            [
                {
                    key: 'latitude',
                    get: function () {
                        return this.coordinates[1];
                    },
                },
                {
                    key: 'longitude',
                    get: function () {
                        return this.coordinates[0];
                    },
                },
                {
                    key: 'lat',
                    value: function () {
                        return this.latitude;
                    },
                },
                {
                    key: 'lng',
                    value: function () {
                        return this.longitude;
                    },
                },
                {
                    key: 'serialize',
                    value: function () {
                        return { type: 'Point', coorindates: [this.lat(), this.lng()] };
                    },
                },
                {
                    key: 'toJson',
                    value: function () {
                        return this.serialize();
                    },
                },
                {
                    key: 'toString',
                    value: function () {
                        return '('.concat(this.latitude, ', ').concat(this.longitude, ')');
                    },
                },
            ],
            [
                {
                    key: 'fromGeoJson',
                    value: function (e) {
                        var n = q(e.coordinates, 2);
                        return (longitude = n[0]), (latitude = n[1]), new t(latitude, longitude);
                    },
                },
            ]
        ),
        t
    );
})();
'undefined' == typeof arguments || arguments;
var ot = function (t, e) {
        var n = t();
        return Array.isArray(n) || 'object' === b(n) ? ut(n, e) : null;
    },
    ut = function t(e, n) {
        var r,
            i = e,
            a = b(e),
            o = 'object' === a,
            u = 'function' === a,
            s = Array.isArray(e),
            c = 'string' === b(n) && n.includes('.') ? n.split('.') : [n];
        if (s || o) {
            for (var h = 0; h < c.length; h++) {
                if (i && void 0 === i[c[h]]) return null;
                if (i) {
                    if ('object' === b((r = i = i[c[h]])) && !V(null == r ? void 0 : r.attributes) && 'object' === b(null == r ? void 0 : r.attributes) && void 0 !== c[h + 1]) {
                        var l = c.slice(h + 1).join('.');
                        return t(i.attributes, l);
                    }
                    if ('function' == typeof i) {
                        var d = c.slice(h + 1).join('.');
                        return ot(i, d);
                    }
                }
            }
            return i;
        }
        if (u) return ot(e, n);
    },
    st = function (t, e, n) {
        var r = t,
            i = 'object' === b(t),
            a = Array.isArray(t),
            o = 'string' === b(e) && e.includes('.') ? e.split('.') : [e],
            u = o.length;
        if (a || i) {
            for (var s = 0; s < u - 1; s++) r[o[s]] || (r[o[s]] = {}), (r = r[o[s]]);
            r[o[u - 1]] = n;
        }
        return n;
    },
    ct = (function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            T(this, t), (this.actions = e), (this.bind = n);
        }
        return (
            A(t, [
                {
                    key: 'extend',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = t || this.bind;
                        if (!e) return this;
                        if (null != this && this.actions && 'object' === b(this.actions))
                            for (var n in this.actions) {
                                var r = this.actions[n];
                                st(e, n, 'function' == typeof r ? r.bind(e) : r);
                            }
                        return this;
                    },
                },
            ]),
            t
        );
    })(),
    ht = (function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            T(this, t),
                (this.attributes = e),
                (this.dirtyAttributes = {}),
                (this.changes = {}),
                (this.isLoading = !1),
                (this.isSaving = !1),
                (this.isDestroying = !1),
                (this.isReloading = !1),
                (this.resource = r),
                (this.options = i),
                (this.version = i.version || 'v1'),
                this.setAdapter(n);
        }
        return (
            A(t, [
                {
                    key: 'setAdapter',
                    value: function (t) {
                        var e;
                        return (
                            (this.adapter = t),
                            (this.store = new St(this.resource, t, {
                                onAfterFetch: this.syncAttributes.bind(this),
                                actions: null === (e = this.options) || void 0 === e ? void 0 : e.actions,
                            })),
                            this
                        );
                    },
                },
                {
                    key: 'id',
                    get: function () {
                        return this.getAttribute('id');
                    },
                },
                {
                    key: 'create',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = this.mergeAttributes(e);
                        return (
                            this.setFlags(['isLoading', 'isSaving']),
                            this.store.create(n).then(function (e) {
                                return t.setFlags(['isLoading', 'isSaving'], !1), e;
                            })
                        );
                    },
                },
                {
                    key: 'update',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (
                            this.setFlags(['isLoading', 'isSaving']),
                            this.store.update(this.attributes.id, e).then(function (e) {
                                return t.setFlags(['isLoading', 'isSaving'], !1), e;
                            })
                        );
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        var t = this;
                        return (
                            this.setFlags(['isLoading', 'isDestroying']),
                            this.store.destroy(this.attributes.id).then(function (e) {
                                return t.setFlags(['isLoading', 'isDestroying'], !1), e;
                            })
                        );
                    },
                },
                {
                    key: 'reload',
                    value: function () {
                        var t = this;
                        return (
                            this.setFlags(['isLoading', 'isReloading']),
                            this.store.findRecord(this.attributes.id).then(function (e) {
                                return t.reset(), e;
                            })
                        );
                    },
                },
                {
                    key: 'setFlags',
                    value: function () {
                        for (
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = ['isLoading', 'isSaving', 'isReloading', 'isDestroying'],
                                r = 0;
                            r < t.length;
                            r++
                        ) {
                            var i = t[r];
                            if ('string' != typeof i || !n.includes(i)) throw new Error(''.concat(i, ' is not a valid flag!'));
                            this[i] = e;
                        }
                        return this;
                    },
                },
                {
                    key: 'reset',
                    value: function () {
                        return (this.dirtyAttributes = {}), (this.changes = {}), (this.isLoading = !1), (this.isSaving = !1), (this.isReloading = !1), this;
                    },
                },
                {
                    key: 'empty',
                    value: function () {
                        return this.reset(), (this.attribues = {}), this;
                    },
                },
                {
                    key: 'save',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.getAttributes();
                        return V(this.id) ? this.create(e) : !0 === t.onlyDirty ? this.savedirty() : this.update(e);
                    },
                },
                {
                    key: 'saveDirty',
                    value: function () {
                        for (var t = Object.keys(this.dirtyAttributes), e = {}, n = 0; n < t.length; n++) {
                            var r = t[n];
                            e[r] = this.getAttribute(r);
                        }
                        return this.update(e);
                    },
                },
                {
                    key: 'createdAt',
                    get: function () {
                        return this.hasAttribute('created_at') ? new Date(this.getAttribute('created_at')) : null;
                    },
                },
                {
                    key: 'updatedAt',
                    get: function () {
                        return this.hasAttribute('updated_at') ? new Date(this.getAttribute('updated_at')) : null;
                    },
                },
                {
                    key: 'isLoaded',
                    get: function () {
                        return this.hasAttributes(['created_at', 'id']);
                    },
                },
                {
                    key: 'isEmpty',
                    get: function () {
                        return 0 === Object.values(null == this ? void 0 : this.attributes).length;
                    },
                },
                {
                    key: 'isNew',
                    get: function () {
                        return !this.id;
                    },
                },
                {
                    key: 'isSaved',
                    get: function () {
                        return !this.isNew && this.isLoaded;
                    },
                },
                {
                    key: 'isDeleted',
                    get: function () {
                        return this.hasAttributes(['deleted', 'time']);
                    },
                },
                {
                    key: 'eachAttribute',
                    value: function (t) {
                        var e,
                            n = this;
                        return (
                            'function' != typeof t ||
                                Object.keys(null !== (e = null == this ? void 0 : this.attributes) && void 0 !== e ? e : {}).forEach(function (e) {
                                    var r = n.getAttribute(e);
                                    t.call(n, r, e);
                                }),
                            this
                        );
                    },
                },
                {
                    key: 'changes',
                    value: function () {
                        return this.changes;
                    },
                },
                {
                    key: 'getDirtyAttributes',
                    value: function () {
                        return this.dirtyAttributes;
                    },
                },
                {
                    key: 'isDirty',
                    value: function (t) {
                        return t in this.dirtyAttributes;
                    },
                },
                {
                    key: 'hasDirtyAttributes',
                    value: function () {
                        var t;
                        return Object.keys(null !== (t = null == this ? void 0 : this.dirtyAttributes) && void 0 !== t ? t : {}).length > 0;
                    },
                },
                {
                    key: 'mutate',
                    value: function (t, e) {
                        this.attributes[t] = e;
                    },
                },
                {
                    key: 'setAttribute',
                    value: function (t) {
                        var e,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (null === n && 'object' === b(t)) return this.setAttributes(t);
                        var r = null !== (e = null == this ? void 0 : this.attributes[t]) && void 0 !== e ? e : null;
                        return (
                            st(this.attributes, t, n),
                            st(this.dirtyAttributes, t, r),
                            Y(null == this ? void 0 : this.changes[t]) || (this.changes[t] = []),
                            this.changes[t].push({
                                property: t,
                                previousValue: r,
                                value: n,
                                changedAt: new Date(),
                            }),
                            this
                        );
                    },
                },
                {
                    key: 'setAttributes',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        for (var e in t) this.setAttribute(e, t[e]);
                        return this;
                    },
                },
                {
                    key: 'getAttribute',
                    value: function (t) {
                        var e,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = ut(null !== (e = null == this ? void 0 : this.attributes) && void 0 !== e ? e : {}, t);
                        return void 0 === r ? n : r;
                    },
                },
                {
                    key: 'hasAttribute',
                    value: function (t) {
                        if (Y(t)) {
                            var e,
                                n = t,
                                r = Object.keys(null !== (e = this.attributes) && void 0 !== e ? e : {});
                            return n.every(function (t) {
                                return r.includes(t);
                            });
                        }
                        return !(null == this || !this.attributes) && t in this.attributes;
                    },
                },
                {
                    key: 'hasAttributes',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return this.hasAttribute(t);
                    },
                },
                {
                    key: 'isAttributeFilled',
                    value: function (t) {
                        var e = this;
                        return Y(t)
                            ? this.hasAttribute(t) &&
                                  t.every(function (t) {
                                      return !V(e.getAttribute(t));
                                  })
                            : this.hasAttribute(t) && !V(this.getAttribute(t));
                    },
                },
                {
                    key: 'getAttributes',
                    value: function (t) {
                        var e = {};
                        if (null == t) return this.getAttributes(Object.keys(this.attributes));
                        if ('string' == typeof t) return this.getAttribute(Array.prototype.slice.call(arguments));
                        if (!Y(t)) throw new Error('No attribute properties provided!');
                        for (var n = 0; n < t.length; n++) {
                            var r,
                                i,
                                a = t[n];
                            if ('string' == typeof a) {
                                var o = this.getAttribute(a);
                                'object' !== b(null === (r = o) || void 0 === r ? void 0 : r.attributes) || Y(null === (i = o) || void 0 === i ? void 0 : i.attributes) || (o = o.attributes),
                                    (e[a] = o);
                            }
                        }
                        return e;
                    },
                },
                {
                    key: 'serialize',
                    value: function () {
                        return this.getAttributes();
                    },
                },
                {
                    key: 'mergeAttributes',
                    value: function () {
                        var t,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = null !== (t = null == this ? void 0 : this.attributes) && void 0 !== t ? t : {};
                        return (this.attributes = w(w({}, n), e)), this.attributes;
                    },
                },
                {
                    key: 'syncAttributes',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.attributes = t;
                    },
                },
            ]),
            t
        );
    })(),
    lt = new ct({
        getDistanceAndTime: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.adapter.get(''.concat(this.namespace, '/').concat(t, '/distance-and-time'), {}, e);
        },
    }),
    dt = (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'order', w({ actions: lt }, i));
        }
        return (
            A(n, [
                {
                    key: 'getDistanceAndTime',
                    value: function () {
                        return this.store.getDistanceAndTime(this.id);
                    },
                },
            ]),
            n
        );
    })(),
    ft = (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'payload', i);
        }
        return (
            A(n, [
                { key: 'attach', value: function (t) {} },
                { key: 'entities', get: function () {} },
                { key: 'dropoff', get: function () {} },
                { key: 'pickup', get: function () {} },
                {
                    key: 'waypoints',
                    get: function () {
                        return new Z(this.waypoints);
                    },
                },
            ]),
            n
        );
    })();
!(function (t) {
    D(n, ht);
    var e = j(n);
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return T(this, n), e.call(this, t, r, 'entity', i);
    }
})();
var vt = (function (t) {
    D(n, ht);
    var e = j(n);
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return T(this, n), e.call(this, t, r, 'place', i);
    }
    return (
        A(
            n,
            [
                {
                    key: 'latitude',
                    get: function () {
                        var t;
                        return null === (t = this.getAttribute('location', new at())) || void 0 === t ? void 0 : t.coordinates[1];
                    },
                },
                {
                    key: 'longitude',
                    get: function () {
                        var t;
                        return null === (t = this.getAttribute('location', new at())) || void 0 === t ? void 0 : t.coordinates[0];
                    },
                },
                {
                    key: 'coordinates',
                    get: function () {
                        return [this.latitude, this.longitude];
                    },
                },
                {
                    key: 'setOwner',
                    value: function (t) {
                        return et(t) && this.setAttribute('owner', t.id), 'string' == typeof t && this.setAttribute('owner', t), this;
                    },
                },
            ],
            [
                {
                    key: 'fromGoogleAddress',
                    value: function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = t.getAttribute('coordinates'),
                            a = q(i, 2),
                            o = a[0],
                            u = a[1],
                            s = {
                                name: null,
                                address: t.getAttribute('address'),
                                location: new at(o, u),
                                street1: t.getAttribute('streetName'),
                                street2: null,
                                city: t.getAttribute('city'),
                                province: t.getAttribute('stateLong'),
                                postal_code: t.getAttribute('postalCode'),
                                neighborhood: t.get('neighborhood'),
                                district: t.getAttribute('county'),
                                building: t.get('building'),
                                country: t.getAttribute('countryShort'),
                                phone: null,
                                security_access_code: null,
                            };
                        return new n(s, e, r);
                    },
                },
            ]
        ),
        n
    );
})();
!(function (t) {
    D(n, vt);
    var e = j(n);
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return T(this, n), e.call(this, t, r, 'waypoint', i);
    }
})(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'tracking-status', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'vehicle', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'driver', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'vendor', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'contact', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'zone', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'service-area', i);
        }
    })(),
    (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'service-rate', i);
        }
    })();
var gt = (function (t) {
        D(n, ht);
        var e = j(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return T(this, n), e.call(this, t, r, 'service-quote', i);
        }
        return (
            A(n, [
                { key: 'fromPreliminary', value: function () {} },
                { key: 'fromPayload', value: function () {} },
            ]),
            n
        );
    })(),
    pt = function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        T(this, t), (this.version = e.version || 'v1'), (this.host = e.host || null), (this.namespace = e.namespace || null), (this.headers = e.headers || {});
    },
    yt = (function (t) {
        D(n, pt);
        var e = j(n);
        function n(t) {
            var r;
            return (
                T(this, n),
                (r = e.call(this, t)).setHeaders({
                    Authorization: 'Bearer '.concat(t.publicKey),
                    'Content-Type': 'application/json',
                    'User-Agent': '@fleetbase/sdk;browser',
                }),
                r
            );
        }
        return (
            A(n, [
                {
                    key: 'setHeaders',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (this.headers = w(w({}, this.headers), t)), this;
                    },
                },
                {
                    key: 'parseJSON',
                    value: function (t) {
                        return new Promise(function (e, n) {
                            return t
                                .json()
                                .then(function (n) {
                                    return e({
                                        statusText: t.statusText,
                                        status: t.status,
                                        ok: t.ok,
                                        json: n,
                                    });
                                })
                                .catch(function () {
                                    n(new Error('Oops! Something went wrong when handling your request.'));
                                });
                        });
                    },
                },
                {
                    key: 'request',
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'GET',
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return new Promise(function (a, o) {
                            return fetch(
                                i.url || ''.concat(e.host, '/').concat(e.namespace, '/').concat(t),
                                w(
                                    {
                                        method: n,
                                        mode: i.mode || 'cors',
                                        headers: new Headers(w(w({}, e.headers || {}), i.headers || {})),
                                    },
                                    r
                                )
                            )
                                .then(e.parseJSON)
                                .then(function (t) {
                                    return t.ok ? a(t.json) : o(new Error(t.json.errors ? t.json.errors[0] : t.statusText));
                                })
                                .catch(function (t) {
                                    o(t);
                                });
                        });
                    },
                },
                {
                    key: 'get',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = tt(e) ? '' : new URLSearchParams(e).toString();
                        return this.request(''.concat(t).concat(r ? '?'.concat(r) : ''), 'GET', {}, n);
                    },
                },
                {
                    key: 'post',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(t, 'POST', { body: JSON.stringify(e) }, n);
                    },
                },
                {
                    key: 'put',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(t, 'PUT', { body: JSON.stringify(e) }, n);
                    },
                },
                {
                    key: 'delete',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.request(t, 'DELETE', {}, e);
                    },
                },
                {
                    key: 'patch',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.request(t, 'PATCH', { body: JSON.stringify(e) }, n);
                    },
                },
            ]),
            n
        );
    })(),
    mt = (function (t) {
        D(r, pt);
        var n = j(r);
        function r(t) {
            var i;
            return (
                T(this, r),
                ((i = n.call(this, t)).axios = e.default.create({
                    baseURL: ''.concat(i.host, '/').concat(i.namespace),
                    headers: {
                        Authorization: 'Bearer '.concat(t.publicKey),
                        'Content-Type': 'application/json',
                        'User-Agent': '@fleetbase/sdk;node',
                    },
                })),
                i
            );
        }
        return (
            A(r, [
                {
                    key: 'setHeaders',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.axios.defaults.headers.common;
                        return (this.axios.defaults.headers.common = w(w({}, e), t)), this;
                    },
                },
                {
                    key: 'transform',
                    value: function (t) {
                        return t.data;
                    },
                },
                {
                    key: 'handleError',
                    value: function (t) {
                        if (t.response) {
                            var e = t.response.data;
                            if (Y(e.errors)) throw new Error(e.errors[0]);
                            if (e.error) throw new Error(e.error);
                        }
                        throw t;
                    },
                },
                {
                    key: 'get',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = tt(e) ? '' : new URLSearchParams(e).toString();
                        return this.axios
                            .get(''.concat(t).concat(r ? '?'.concat(r) : ''), n)
                            .then(this.transform.bind(this))
                            .catch(this.handleError.bind(this));
                    },
                },
                {
                    key: 'post',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.axios.post(t, e, n).then(this.transform.bind(this)).catch(this.handleError.bind(this));
                    },
                },
                {
                    key: 'put',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.axios.put(t, e, n).then(this.transform.bind(this)).catch(this.handleError.bind(this));
                    },
                },
                {
                    key: 'delete',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.axios.delete(t, e).then(this.transform.bind(this)).catch(this.handleError.bind(this));
                    },
                },
                {
                    key: 'patch',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return this.axios.patch(t, e, n).then(this.transform.bind(this)).catch(this.handleError.bind(this));
                    },
                },
            ]),
            r
        );
    })(),
    wt = (function (t) {
        D(n, pt);
        var e = j(n);
        function n() {
            return T(this, n), e.apply(this, arguments);
        }
        return n;
    })(),
    bt = (function () {
        function t(e) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            T(this, t),
                E(this, 'uncountableWords', ['equipment', 'information', 'rice', 'money', 'species', 'series', 'fish', 'sheep', 'moose', 'deer', 'news']),
                E(this, 'pluralRules', [
                    [new RegExp('(m)an$', 'gi'), '$1en'],
                    [new RegExp('(pe)rson$', 'gi'), '$1ople'],
                    [new RegExp('(child)$', 'gi'), '$1ren'],
                    [new RegExp('^(ox)$', 'gi'), '$1en'],
                    [new RegExp('(ax|test)is$', 'gi'), '$1es'],
                    [new RegExp('(octop|vir)us$', 'gi'), '$1i'],
                    [new RegExp('(alias|status)$', 'gi'), '$1es'],
                    [new RegExp('(bu)s$', 'gi'), '$1ses'],
                    [new RegExp('(buffal|tomat|potat)o$', 'gi'), '$1oes'],
                    [new RegExp('([ti])um$', 'gi'), '$1a'],
                    [new RegExp('sis$', 'gi'), 'ses'],
                    [new RegExp('(?:([^f])fe|([lr])f)$', 'gi'), '$1$2ves'],
                    [new RegExp('(hive)$', 'gi'), '$1s'],
                    [new RegExp('([^aeiouy]|qu)y$', 'gi'), '$1ies'],
                    [new RegExp('(x|ch|ss|sh)$', 'gi'), '$1es'],
                    [new RegExp('(matr|vert|ind)ix|ex$', 'gi'), '$1ices'],
                    [new RegExp('([m|l])ouse$', 'gi'), '$1ice'],
                    [new RegExp('(quiz)$', 'gi'), '$1zes'],
                    [new RegExp('s$', 'gi'), 's'],
                    [new RegExp('$', 'gi'), 's'],
                ]),
                E(this, 'singularRules', [
                    [new RegExp('(m)en$', 'gi'), '$1an'],
                    [new RegExp('(pe)ople$', 'gi'), '$1rson'],
                    [new RegExp('(child)ren$', 'gi'), '$1'],
                    [new RegExp('([ti])a$', 'gi'), '$1um'],
                    [new RegExp('((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$', 'gi'), '$1$2sis'],
                    [new RegExp('(hive)s$', 'gi'), '$1'],
                    [new RegExp('(tive)s$', 'gi'), '$1'],
                    [new RegExp('(curve)s$', 'gi'), '$1'],
                    [new RegExp('([lr])ves$', 'gi'), '$1f'],
                    [new RegExp('([^fo])ves$', 'gi'), '$1fe'],
                    [new RegExp('([^aeiouy]|qu)ies$', 'gi'), '$1y'],
                    [new RegExp('(s)eries$', 'gi'), '$1eries'],
                    [new RegExp('(m)ovies$', 'gi'), '$1ovie'],
                    [new RegExp('(x|ch|ss|sh)es$', 'gi'), '$1'],
                    [new RegExp('([m|l])ice$', 'gi'), '$1ouse'],
                    [new RegExp('(bus)es$', 'gi'), '$1'],
                    [new RegExp('(o)es$', 'gi'), '$1'],
                    [new RegExp('(shoe)s$', 'gi'), '$1'],
                    [new RegExp('(cris|ax|test)es$', 'gi'), '$1is'],
                    [new RegExp('(octop|vir)i$', 'gi'), '$1us'],
                    [new RegExp('(alias|status)es$', 'gi'), '$1'],
                    [new RegExp('^(ox)en', 'gi'), '$1'],
                    [new RegExp('(vert|ind)ices$', 'gi'), '$1ex'],
                    [new RegExp('(matr)ices$', 'gi'), '$1ix'],
                    [new RegExp('(quiz)zes$', 'gi'), '$1'],
                    [new RegExp('s$', 'gi'), ''],
                ]),
                E(this, 'nonTitlecasedWords', [
                    'and',
                    'or',
                    'nor',
                    'a',
                    'an',
                    'the',
                    'so',
                    'but',
                    'to',
                    'of',
                    'at',
                    'by',
                    'from',
                    'into',
                    'on',
                    'onto',
                    'off',
                    'out',
                    'in',
                    'over',
                    'with',
                    'for',
                ]),
                E(this, 'idSuffix', new RegExp('(_ids|_id)$', 'g')),
                E(this, 'underbar', new RegExp('_', 'g')),
                E(this, 'spaceOrUnderbar', new RegExp('[ _]', 'g')),
                E(this, 'uppercase', new RegExp('([A-Z])', 'g')),
                E(this, 'underbarPrefix', new RegExp('^_')),
                (this.str = e),
                (this.chain = n);
        }
        return (
            A(
                t,
                [
                    {
                        key: 'get',
                        value: function () {
                            return this.str;
                        },
                    },
                    {
                        key: 'applyRules',
                        value: function (t, e, n, r) {
                            if (r) t = r;
                            else if (!(n.indexOf(t.toLowerCase()) > -1))
                                for (var i = 0; i < e.length; i++)
                                    if (t.match(e[i][0])) {
                                        t = t.replace(e[i][0], e[i][1]);
                                        break;
                                    }
                            return (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'pluralize',
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return (t = t || this.str), this.applyRules(t, this.pluralRules, this.uncountableWords, e);
                        },
                    },
                    {
                        key: 'singularize',
                        value: function (t, e) {
                            return (t = t || this.str), this.applyRules(t, this.singularRules, this.uncountableWords, e);
                        },
                    },
                    {
                        key: 'camelize',
                        value: function (t, e) {
                            for (var n = (t = t || this.str).split('/'), r = 0; r < n.length; r++) {
                                for (var i = n[r].split('_'), a = e && r + 1 === n.length ? 1 : 0; a < i.length; a++) i[a] = i[a].charAt(0).toUpperCase() + i[a].substring(1);
                                n[r] = i.join('');
                            }
                            if (((t = n.join('::')), !0 === e)) {
                                var o = t.charAt(0).toLowerCase(),
                                    u = t.slice(1);
                                t = o + u;
                            }
                            return (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'underscore',
                        value: function (t) {
                            for (var e = (t = t || this.str).split('::'), n = 0; n < e.length; n++)
                                (e[n] = e[n].replace(this.uppercase, '_$1')), (e[n] = e[n].replace(this.underbarPrefix, ''));
                            return (t = e.join('/').toLowerCase()), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'humanize',
                        value: function (t, e) {
                            return (
                                (t = (t = (t = (t = t || this.str).toLowerCase()).replace(this.idSuffix, '')).replace(this.underbar, ' ')),
                                e || (t = this.capitalize(t)),
                                (this.str = t),
                                !0 === this.chain ? this : t
                            );
                        },
                    },
                    {
                        key: 'capitalize',
                        value: function (t) {
                            return (t = (t = (t = t || this.str).toLowerCase()).substring(0, 1).toUpperCase() + t.substring(1)), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'dasherize',
                        value: function (t) {
                            return (t = (t = (t = t || this.str).replace(this.spaceOrUnderbar, '-')).toLowerCase()), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'normify',
                        value: function (t, e) {
                            (t = t || this.str), !0 === e ? ((t = this.camelize(t)), (t = this.underscore(t))) : (t = t.toLowerCase());
                            for (var n = (t = t.replace(this.underbar, ' ')).split(' '), r = 0; r < n.length; r++) {
                                for (var i = n[r].split('-'), a = 0; a < i.length; a++) this.nonTitlecasedWords.indexOf(i[a].toLowerCase()) < 0 && (i[a] = this.capitalize(i[a]));
                                n[r] = i.join('-');
                            }
                            return (t = (t = n.join(' ')).substring(0, 1).toUpperCase() + t.substring(1)), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'demodulize',
                        value: function (t) {
                            var e = (t = t || this.str).split('::');
                            return (t = e[e.length - 1]), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'tableize',
                        value: function (t) {
                            return (t = t || this.str), (t = this.pluralize(this.underscore(t))), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'classify',
                        value: function (t) {
                            return (t = t || this.str), (t = this.singularize(this.camelize(t))), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'foreignKey',
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return (t = t || this.str), (t = this.underscore(this.demodulize(t)) + (e ? '' : '_') + 'id'), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                    {
                        key: 'ordinalize',
                        value: function (t) {
                            for (var e = (t = t || this.str).split(' '), n = 0; n < e.length; n++)
                                if (NaN === parseInt(e[n])) {
                                    var r = e[n].substring(e[n].length - 2),
                                        i = e[n].substring(e[n].length - 1),
                                        a = 'th';
                                    '11' != r && '12' != r && '13' != r && ('1' === i ? (a = 'st') : '2' === i ? (a = 'nd') : '3' === i && (a = 'rd')), (e[n] += a);
                                }
                            return (t = e.join(' ')), (this.str = t), !0 === this.chain ? this : t;
                        },
                    },
                ],
                [
                    {
                        key: 'invoke',
                        value: function () {
                            var e = Object.values(arguments),
                                n = new t(null, !1),
                                r = arguments[0];
                            return e.shift(), 'function' == typeof n[r] ? n[r].apply(n, $(e)) : null;
                        },
                    },
                ]
            ),
            t
        );
    })(),
    kt = function () {
        var t = ['pluralize'].concat(Array.prototype.slice.call(arguments));
        return bt.invoke.apply(bt, $(t));
    },
    xt = function () {
        var t = ['singularize'].concat(Array.prototype.slice.call(arguments));
        return bt.invoke.apply(bt, $(t));
    },
    Tt = function () {
        var t = ['classify'].concat(Array.prototype.slice.call(arguments));
        return bt.invoke.apply(bt, $(t));
    },
    Ct = { Place: vt, Payload: ft, Order: dt },
    At = { BrowserAdapter: yt, NodeAdapter: mt, EmberJsAdapter: wt },
    Et = (function () {
        function t() {
            return T(this, t), (this.resources = Ct), (this.adapters = At), this.lookup.apply(this, arguments);
        }
        return (
            A(t, [
                {
                    key: 'lookup',
                    value: function (t, e) {
                        var n = kt(t),
                            r = Array.prototype.slice.call(arguments).slice(2);
                        if (!this[n]) throw new Error('Attempted to resolve invalid type');
                        if (!this[n][e]) throw new Error('No '.concat(xt(t), ' named ').concat(e, ' to resolve'));
                        return R(this[n][e], $(r));
                    },
                },
            ]),
            t
        );
    })(),
    Dt = function () {
        return R(Et, Array.prototype.slice.call(arguments));
    },
    Ot = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (((t.actions = Y(e) ? e : [e]), !Y(e))) return e instanceof ct && e.extend(t), t;
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            t.extendActions(r);
        }
    },
    St = (function () {
        function t(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            T(this, t), (this.resource = e), (this.adapter = n || rt()), (this.namespace = kt(e)), (this.storage = new Z()), (this.options = r), this.extendActions(r.actions);
        }
        return (
            A(t, [
                {
                    key: 'extendActions',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return Ot(this, t);
                    },
                },
                {
                    key: 'deposit',
                    value: function (t) {
                        return t;
                    },
                },
                {
                    key: 'serialize',
                    value: function (t) {
                        return Dt('resource', Tt(this.resource), t, this.adapter);
                    },
                },
                {
                    key: 'afterFetch',
                    value: function (t) {
                        return (function (t, e) {
                            if (('function' == typeof t.options.onAfterFetch && t.options.onAfterFetch(e), Y(e))) {
                                for (var n = [], r = 0; r < e.length; r++) n.push(t.afterFetch(e[r]));
                                return R(Z, n);
                            }
                            var i = t.serialize(e);
                            return t.deposit(i);
                        })(this, t);
                    },
                },
                {
                    key: 'create',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new Promise(
                            (function () {
                                var r = x(
                                    regeneratorRuntime.mark(function r(i, a) {
                                        var o;
                                        return regeneratorRuntime.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (r.next = 2), t.adapter.post(''.concat(t.namespace), e, n).then(t.afterFetch.bind(t)).catch(a);
                                                    case 2:
                                                        (o = r.sent), i(o);
                                                    case 4:
                                                    case 'end':
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                );
                                return function (t, e) {
                                    return r.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: 'update',
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return new Promise(
                            (function () {
                                var i = x(
                                    regeneratorRuntime.mark(function i(a, o) {
                                        var u;
                                        return regeneratorRuntime.wrap(function (i) {
                                            for (;;)
                                                switch ((i.prev = i.next)) {
                                                    case 0:
                                                        return (i.next = 2), e.adapter.put(''.concat(e.namespace, '/').concat(t), n, r).then(e.afterFetch.bind(e)).catch(o);
                                                    case 2:
                                                        (u = i.sent), a(u);
                                                    case 4:
                                                    case 'end':
                                                        return i.stop();
                                                }
                                        }, i);
                                    })
                                );
                                return function (t, e) {
                                    return i.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: 'findRecord',
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new Promise(
                            (function () {
                                var r = x(
                                    regeneratorRuntime.mark(function r(i, a) {
                                        var o;
                                        return regeneratorRuntime.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (r.next = 2), e.adapter.get(''.concat(e.namespace, '/').concat(t), {}, n).then(e.afterFetch.bind(e)).catch(a);
                                                    case 2:
                                                        (o = r.sent), i(o);
                                                    case 4:
                                                    case 'end':
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                );
                                return function (t, e) {
                                    return r.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: 'findAll',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise(
                            (function () {
                                var n = x(
                                    regeneratorRuntime.mark(function n(r, i) {
                                        var a;
                                        return regeneratorRuntime.wrap(function (n) {
                                            for (;;)
                                                switch ((n.prev = n.next)) {
                                                    case 0:
                                                        return (n.next = 2), t.adapter.get(''.concat(t.namespace), {}, e).then(t.afterFetch.bind(t)).catch(i);
                                                    case 2:
                                                        (a = n.sent), r(a);
                                                    case 4:
                                                    case 'end':
                                                        return n.stop();
                                                }
                                        }, n);
                                    })
                                );
                                return function (t, e) {
                                    return n.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: 'query',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new Promise(
                            (function () {
                                var r = x(
                                    regeneratorRuntime.mark(function r(i, a) {
                                        var o;
                                        return regeneratorRuntime.wrap(function (r) {
                                            for (;;)
                                                switch ((r.prev = r.next)) {
                                                    case 0:
                                                        return (r.next = 2), t.adapter.get(''.concat(t.namespace), e, n).then(t.afterFetch.bind(t)).catch(a);
                                                    case 2:
                                                        (o = r.sent), i(o);
                                                    case 4:
                                                    case 'end':
                                                        return r.stop();
                                                }
                                        }, r);
                                    })
                                );
                                return function (t, e) {
                                    return r.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
                {
                    key: 'queryRecord',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (
                            (e.single = !0),
                            new Promise(
                                (function () {
                                    var r = x(
                                        regeneratorRuntime.mark(function r(i, a) {
                                            var o;
                                            return regeneratorRuntime.wrap(function (r) {
                                                for (;;)
                                                    switch ((r.prev = r.next)) {
                                                        case 0:
                                                            return (r.next = 2), t.adapter.get(''.concat(t.namespace), e, n).then(t.afterFetch.bind(t)).catch(a);
                                                        case 2:
                                                            (o = r.sent), i(o);
                                                        case 4:
                                                        case 'end':
                                                            return r.stop();
                                                    }
                                            }, r);
                                        })
                                    );
                                    return function (t, e) {
                                        return r.apply(this, arguments);
                                    };
                                })()
                            )
                        );
                    },
                },
                {
                    key: 'destroy',
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = et(t) ? t.getAttribute('id') : t;
                        return new Promise(
                            (function () {
                                var t = x(
                                    regeneratorRuntime.mark(function t(i, a) {
                                        var o;
                                        return regeneratorRuntime.wrap(function (t) {
                                            for (;;)
                                                switch ((t.prev = t.next)) {
                                                    case 0:
                                                        return (t.next = 2), e.adapter.delete(''.concat(e.namespace, '/').concat(r), {}, n).then(e.afterFetch.bind(e)).catch(a);
                                                    case 2:
                                                        (o = t.sent), i(o);
                                                    case 4:
                                                    case 'end':
                                                        return t.stop();
                                                }
                                        }, t);
                                    })
                                );
                                return function (e, n) {
                                    return t.apply(this, arguments);
                                };
                            })()
                        );
                    },
                },
            ]),
            t
        );
    })();
!(function () {
    function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (
            (T(this, t),
            (this.version = n.version || 'v1'),
            (this.options = {
                version: this.version,
                host: n.host || 'https://api.fleetbase.io',
                namespace: this.version || n.namespace,
                debug: r,
                publicKey: e,
            }),
            'string' != typeof e || 0 === e.length)
        )
            throw new Error('⚠️ Invalid public key given to Fleetbase SDK');
        if (!nt() && e.toLowerCase().startsWith('$')) throw new Error('Secret key provided. You must use a public key with Fleetbase Javascript SDK!');
        (this.adapter = n.adapter || rt(this.options)),
            (this.orders = new St('order', this.adapter).extendActions(lt)),
            (this.entities = new St('entity', this.adapter)),
            (this.places = new St('place', this.adapter)),
            (this.drivers = new St('driver', this.adapter)),
            (this.vehicles = new St('vehicle', this.adapter)),
            (this.vendors = new St('vendor', this.adapter)),
            (this.contacts = new St('contact', this.adapter));
    }
    A(
        t,
        [
            {
                key: 'setAdapter',
                value: function (t) {
                    this.adapter = t;
                },
            },
            {
                key: 'getAdapter',
                value: function () {
                    return this.adapter;
                },
            },
        ],
        [
            {
                key: 'newInstance',
                value: function () {
                    return R(t, Array.prototype.slice.call(arguments));
                },
            },
        ]
    );
})();
var Pt = (function (t) {
        c(n, ht);
        var e = g(n);
        function n() {
            return a(this, n), e.apply(this, arguments);
        }
        return (
            u(n, [
                {
                    key: 'setAdapter',
                    value: function (t) {
                        var e;
                        return (
                            (this.adapter = t),
                            (this.store = new tr(this.resource, t, {
                                onAfterFetch: this.syncAttributes.bind(this),
                                actions: null === (e = this.options) || void 0 === e ? void 0 : e.actions,
                            })),
                            this
                        );
                    },
                },
            ]),
            n
        );
    })(),
    Rt = new ct({
        count: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {};
            return t && (n.store = t), this.adapter.get(''.concat(this.namespace, '/count'), n, e);
        },
    }),
    Ut = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'review', i);
        }
        return (
            u(n, [
                { key: 'getMedia', value: function () {} },
                { key: 'getPhotos', value: function () {} },
                { key: 'getVideos', value: function () {} },
            ]),
            n
        );
    })(),
    Mt = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return nt() ? Vn('adapter', 'NodeAdapter', t) : Vn('adapter', 'BrowserAdapter', t);
    },
    jt = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
        return /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(t);
    };
function qt() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'USD',
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'symbol';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: e,
        currencyDisplay: n,
    }).format(t);
}
var $t = function (t) {
        return 'string' == typeof t && t.length > 30 && (t.startsWith('store_') || t.startsWith('network_'));
    },
    Nt = function (t) {
        var e = null == t;
        if (e) return e;
        if ('number' == typeof t.size) return !t.size;
        var n = i(t);
        if ('object' === n) {
            var r = t.size;
            if ('number' == typeof r) return !r;
        }
        if ('number' == typeof t.length && 'function' !== n) return !t.length;
        if ('object' === n) {
            var a = t.length;
            if ('number' == typeof a) return !a;
        }
        return !1;
    },
    Ht = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'product', i);
        }
        return (
            u(n, [
                {
                    key: 'variants',
                    value: function () {
                        return this.getAttribute('variants');
                    },
                },
                {
                    key: 'addons',
                    value: function () {
                        return this.getAttribute('addon_categories');
                    },
                },
                {
                    key: 'isOnSale',
                    get: function () {
                        return this.getAttribute('is_on_sale');
                    },
                },
                {
                    key: 'isNotOnSale',
                    get: function () {
                        return !this.getAttribute('is_on_sale');
                    },
                },
                {
                    key: 'formattedAmount',
                    get: function () {
                        var t = this.getAttributes(['price', 'sale_price', 'currency']),
                            e = t.price,
                            n = t.sale_price,
                            r = t.currency;
                        return this.isOnSale ? (Nt(n) || Nt(r) ? null : qt(n / 100, r)) : Nt(e) || Nt(r) ? null : qt(e / 100, r);
                    },
                },
                {
                    key: 'getReviews',
                    value: function () {
                        var t = this;
                        return this.adapter.get('reviews', { store: this.id }).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new Ut(e, t.adapter);
                                })
                            );
                        });
                    },
                },
            ]),
            n
        );
    })(),
    Yt = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'category', i);
        }
        return (
            u(n, [
                {
                    key: 'getProducts',
                    value: function () {
                        var t = this;
                        return this.adapter.get('products', { category: this.id }).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new Ht(e, t.adapter);
                                })
                            );
                        });
                    },
                },
            ]),
            n
        );
    })(),
    Lt = new ct({
        login: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (jt(t)) return this.adapter.post('customers/login-with-sms', { phone: t });
            if (!e) throw new Error('Login requires password!');
            return this.adapter.post('customers/login', r({ identity: t, password: e }, n)).then(this.afterFetch.bind(this));
        },
        verifyCode: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.adapter.post('customers/verify-code', r({ identity: t, code: e }, n)).then(this.afterFetch.bind(this));
        },
        requestCreationCode: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'email';
            return this.adapter.post('customers/request-creation-code', {
                identity: t,
                mode: e,
            });
        },
        create: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.adapter.post('customers', r({ identity: t, code: e }, n)).then(this.afterFetch.bind(this));
        },
        retrieve: function (t) {
            return this.findRecord(t);
        },
    }),
    Ft = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, i, 'customer', r({ actions: Lt }, o));
        }
        return (
            u(n, [
                {
                    key: 'setAdapter',
                    value: function (t) {
                        var e;
                        return (
                            (this.adapter = t),
                            (this.store = new tr(this.resource, t, {
                                onAfterFetch: this.syncAttributes.bind(this),
                                actions: null === (e = this.options) || void 0 === e ? void 0 : e.actions,
                            })),
                            this
                        );
                    },
                },
                {
                    key: 'token',
                    get: function () {
                        return this.getAttribute('token');
                    },
                },
                {
                    key: 'syncDevice',
                    value: function (t) {
                        var e = this;
                        return this.adapter
                            .setHeaders({ 'Customer-Token': this.token })
                            .post('customers/register-device', t)
                            .then(function () {
                                return e;
                            });
                    },
                },
                {
                    key: 'getSavedPlaces',
                    value: function () {
                        var t = this;
                        return this.adapter
                            .setHeaders({ 'Customer-Token': this.token })
                            .get('customers/places')
                            .then(function (e) {
                                return new Z(
                                    e.map(function (e) {
                                        return new vt(e, t.adapter);
                                    })
                                );
                            });
                    },
                },
                {
                    key: 'getOrderHistory',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter
                            .setHeaders({ 'Customer-Token': this.token })
                            .get('customers/orders', e)
                            .then(function (e) {
                                return new Z(
                                    e.map(function (e) {
                                        return new dt(e, t.adapter);
                                    })
                                );
                            });
                    },
                },
            ]),
            n
        );
    })(),
    _t = Array.isArray,
    Wt = new ct({
        create: void 0,
        findAll: void 0,
        query: void 0,
        queryRecord: void 0,
        add: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return this.adapter.post(''.concat(this.namespace, '/').concat(t, '/').concat(e), r(r({}, i), {}, { quantity: n }), a).then(this.afterFetch.bind(this));
        },
        update: function (t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return this.adapter.put(''.concat(this.namespace, '/').concat(t, '/').concat(e), r(r({}, i), {}, { quantity: n }), a).then(this.afterFetch.bind(this));
        },
        remove: function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.adapter.delete(''.concat(this.namespace, '/').concat(t, '/').concat(e), {}, n).then(this.afterFetch.bind(this));
        },
        empty: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.adapter.put(''.concat(this.namespace, '/').concat(t, '/empty'), {}, e).then(this.afterFetch.bind(this));
        },
        retrieve: function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
            return this.findRecord(t);
        },
    }),
    zt = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, i, 'cart', r({ actions: Wt }, o));
        }
        return (
            u(n, [
                {
                    key: 'add',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return t instanceof Ht && (t = t.id), this.store.add(this.id, t, e, n, r);
                    },
                },
                {
                    key: 'update',
                    value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        return this.store.update(this.id, t, e, n, r);
                    },
                },
                {
                    key: 'remove',
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.store.remove(this.id, t, e);
                    },
                },
                {
                    key: 'empty',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.store.empty(this.id, t);
                    },
                },
                {
                    key: 'delete',
                    value: function () {
                        return this.destroy();
                    },
                },
                {
                    key: 'refresh',
                    value: function () {
                        return this.store.retrieve(this.id);
                    },
                },
                {
                    key: 'subtotal',
                    value: function () {
                        var t = 0;
                        return (
                            this.contents().forEach(function (e) {
                                t += e.subtotal;
                            }),
                            t
                        );
                    },
                },
                {
                    key: 'contents',
                    value: function () {
                        return this.getAttribute('items', []);
                    },
                },
                {
                    key: 'hasProduct',
                    value: function (t) {
                        return (
                            -1 !==
                            this.contents().findIndex(function (e) {
                                return e.product_id === t;
                            })
                        );
                    },
                },
                {
                    key: 'isEmpty',
                    get: function () {
                        var t = this.contents();
                        return !_t(t) || 0 === t.length;
                    },
                },
                {
                    key: 'isNotEmpty',
                    get: function () {
                        return !this.isEmpty;
                    },
                },
            ]),
            n
        );
    })();
function It(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function Qt(t, e) {
    if (e.length < t) throw new TypeError(t + ' argument' + (t > 1 ? 's' : '') + ' required, but only ' + e.length + ' present');
}
function Bt(t) {
    Qt(1, arguments);
    var e = Object.prototype.toString.call(t);
    return t instanceof Date || ('object' == typeof t && '[object Date]' === e)
        ? new Date(t.getTime())
        : 'number' == typeof t || '[object Number]' === e
          ? new Date(t)
          : (('string' != typeof t && '[object String]' !== e) ||
                'undefined' == typeof console ||
                (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),
                console.warn(new Error().stack)),
            new Date(NaN));
}
function Gt(t, e) {
    Qt(2, arguments);
    var n = Bt(t).getTime(),
        r = It(e);
    return new Date(n + r);
}
function Xt(t) {
    var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
}
function Kt(t) {
    return Qt(1, arguments), t instanceof Date || ('object' == typeof t && '[object Date]' === Object.prototype.toString.call(t));
}
function Jt(t) {
    if ((Qt(1, arguments), !Kt(t) && 'number' != typeof t)) return !1;
    var e = Bt(t);
    return !isNaN(Number(e));
}
var Zt = {
        lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
    },
    Vt = function (t, e, n) {
        var r,
            i = Zt[t];
        return (
            (r = 'string' == typeof i ? i : 1 === e ? i.one : i.other.replace('{{count}}', e.toString())),
            null != n && n.addSuffix ? (n.comparison && n.comparison > 0 ? 'in ' + r : r + ' ago') : r
        );
    };
function te(t) {
    return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.width ? String(e.width) : t.defaultWidth,
            r = t.formats[n] || t.formats[t.defaultWidth];
        return r;
    };
}
var ee = {
        date: te({
            formats: {
                full: 'EEEE, MMMM do, y',
                long: 'MMMM do, y',
                medium: 'MMM d, y',
                short: 'MM/dd/yyyy',
            },
            defaultWidth: 'full',
        }),
        time: te({
            formats: {
                full: 'h:mm:ss a zzzz',
                long: 'h:mm:ss a z',
                medium: 'h:mm:ss a',
                short: 'h:mm a',
            },
            defaultWidth: 'full',
        }),
        dateTime: te({
            formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: '{{date}}, {{time}}',
                short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
        }),
    },
    ne = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: 'P',
    };
function re(t) {
    return function (e, n) {
        var r,
            i = n || {};
        if ('formatting' === (i.context ? String(i.context) : 'standalone') && t.formattingValues) {
            var a = t.defaultFormattingWidth || t.defaultWidth,
                o = i.width ? String(i.width) : a;
            r = t.formattingValues[o] || t.formattingValues[a];
        } else {
            var u = t.defaultWidth,
                s = i.width ? String(i.width) : t.defaultWidth;
            r = t.values[s] || t.values[u];
        }
        return r[t.argumentCallback ? t.argumentCallback(e) : e];
    };
}
function ie(t) {
    return function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.width,
            i = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
            a = e.match(i);
        if (!a) return null;
        var o,
            u = a[0],
            s = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
            c = Array.isArray(s)
                ? oe(s, function (t) {
                      return t.test(u);
                  })
                : ae(s, function (t) {
                      return t.test(u);
                  });
        (o = t.valueCallback ? t.valueCallback(c) : c), (o = n.valueCallback ? n.valueCallback(o) : o);
        var h = e.slice(u.length);
        return { value: o, rest: h };
    };
}
function ae(t, e) {
    for (var n in t) if (t.hasOwnProperty(n) && e(t[n])) return n;
}
function oe(t, e) {
    for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
}
var ue,
    se = {
        code: 'en-US',
        formatDistance: Vt,
        formatLong: ee,
        formatRelative: function (t, e, n, r) {
            return ne[t];
        },
        localize: {
            ordinalNumber: function (t, e) {
                var n = Number(t),
                    r = n % 100;
                if (r > 20 || r < 10)
                    switch (r % 10) {
                        case 1:
                            return n + 'st';
                        case 2:
                            return n + 'nd';
                        case 3:
                            return n + 'rd';
                    }
                return n + 'th';
            },
            era: re({
                values: {
                    narrow: ['B', 'A'],
                    abbreviated: ['BC', 'AD'],
                    wide: ['Before Christ', 'Anno Domini'],
                },
                defaultWidth: 'wide',
            }),
            quarter: re({
                values: {
                    narrow: ['1', '2', '3', '4'],
                    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
                },
                defaultWidth: 'wide',
                argumentCallback: function (t) {
                    return t - 1;
                },
            }),
            month: re({
                values: {
                    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                },
                defaultWidth: 'wide',
            }),
            day: re({
                values: {
                    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                },
                defaultWidth: 'wide',
            }),
            dayPeriod: re({
                values: {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'morning',
                        afternoon: 'afternoon',
                        evening: 'evening',
                        night: 'night',
                    },
                },
                defaultWidth: 'wide',
                formattingValues: {
                    narrow: {
                        am: 'a',
                        pm: 'p',
                        midnight: 'mi',
                        noon: 'n',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                    abbreviated: {
                        am: 'AM',
                        pm: 'PM',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                    wide: {
                        am: 'a.m.',
                        pm: 'p.m.',
                        midnight: 'midnight',
                        noon: 'noon',
                        morning: 'in the morning',
                        afternoon: 'in the afternoon',
                        evening: 'in the evening',
                        night: 'at night',
                    },
                },
                defaultFormattingWidth: 'wide',
            }),
        },
        match: {
            ordinalNumber:
                ((ue = {
                    matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                    parsePattern: /\d+/i,
                    valueCallback: function (t) {
                        return parseInt(t, 10);
                    },
                }),
                function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.match(ue.matchPattern);
                    if (!n) return null;
                    var r = n[0],
                        i = t.match(ue.parsePattern);
                    if (!i) return null;
                    var a = ue.valueCallback ? ue.valueCallback(i[0]) : i[0];
                    a = e.valueCallback ? e.valueCallback(a) : a;
                    var o = t.slice(r.length);
                    return { value: a, rest: o };
                }),
            era: ie({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i,
                },
                defaultMatchWidth: 'wide',
                parsePatterns: { any: [/^b/i, /^(a|c)/i] },
                defaultParseWidth: 'any',
            }),
            quarter: ie({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i,
                },
                defaultMatchWidth: 'wide',
                parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
                defaultParseWidth: 'any',
                valueCallback: function (t) {
                    return t + 1;
                },
            }),
            month: ie({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
                },
                defaultMatchWidth: 'wide',
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i],
                },
                defaultParseWidth: 'any',
            }),
            day: ie({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
                },
                defaultMatchWidth: 'wide',
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
                },
                defaultParseWidth: 'any',
            }),
            dayPeriod: ie({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
                },
                defaultMatchWidth: 'any',
                parsePatterns: {
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
                },
                defaultParseWidth: 'any',
            }),
        },
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function ce(t, e) {
    Qt(2, arguments);
    var n = It(e);
    return Gt(t, -n);
}
function he(t, e) {
    for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r;
    return n + r;
}
var le = {
    y: function (t, e) {
        var n = t.getUTCFullYear(),
            r = n > 0 ? n : 1 - n;
        return he('yy' === e ? r % 100 : r, e.length);
    },
    M: function (t, e) {
        var n = t.getUTCMonth();
        return 'M' === e ? String(n + 1) : he(n + 1, 2);
    },
    d: function (t, e) {
        return he(t.getUTCDate(), e.length);
    },
    a: function (t, e) {
        var n = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch (e) {
            case 'a':
            case 'aa':
                return n.toUpperCase();
            case 'aaa':
                return n;
            case 'aaaaa':
                return n[0];
            default:
                return 'am' === n ? 'a.m.' : 'p.m.';
        }
    },
    h: function (t, e) {
        return he(t.getUTCHours() % 12 || 12, e.length);
    },
    H: function (t, e) {
        return he(t.getUTCHours(), e.length);
    },
    m: function (t, e) {
        return he(t.getUTCMinutes(), e.length);
    },
    s: function (t, e) {
        return he(t.getUTCSeconds(), e.length);
    },
    S: function (t, e) {
        var n = e.length,
            r = t.getUTCMilliseconds();
        return he(Math.floor(r * Math.pow(10, n - 3)), e.length);
    },
};
function de(t) {
    Qt(1, arguments);
    var e = 1,
        n = Bt(t),
        r = n.getUTCDay(),
        i = (r < e ? 7 : 0) + r - e;
    return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
}
function fe(t) {
    Qt(1, arguments);
    var e = Bt(t),
        n = e.getUTCFullYear(),
        r = new Date(0);
    r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var i = de(r),
        a = new Date(0);
    a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var o = de(a);
    return e.getTime() >= i.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1;
}
function ve(t) {
    Qt(1, arguments);
    var e = fe(t),
        n = new Date(0);
    n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0);
    var r = de(n);
    return r;
}
function ge(t) {
    Qt(1, arguments);
    var e = Bt(t),
        n = de(e).getTime() - ve(e).getTime();
    return Math.round(n / 6048e5) + 1;
}
function pe(t, e) {
    Qt(1, arguments);
    var n = e || {},
        r = n.locale,
        i = r && r.options && r.options.weekStartsOn,
        a = null == i ? 0 : It(i),
        o = null == n.weekStartsOn ? a : It(n.weekStartsOn);
    if (!(o >= 0 && o <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var u = Bt(t),
        s = u.getUTCDay(),
        c = (s < o ? 7 : 0) + s - o;
    return u.setUTCDate(u.getUTCDate() - c), u.setUTCHours(0, 0, 0, 0), u;
}
function ye(t, e) {
    Qt(1, arguments);
    var n = Bt(t, e),
        r = n.getUTCFullYear(),
        i = e || {},
        a = i.locale,
        o = a && a.options && a.options.firstWeekContainsDate,
        u = null == o ? 1 : It(o),
        s = null == i.firstWeekContainsDate ? u : It(i.firstWeekContainsDate);
    if (!(s >= 1 && s <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var c = new Date(0);
    c.setUTCFullYear(r + 1, 0, s), c.setUTCHours(0, 0, 0, 0);
    var h = pe(c, e),
        l = new Date(0);
    l.setUTCFullYear(r, 0, s), l.setUTCHours(0, 0, 0, 0);
    var d = pe(l, e);
    return n.getTime() >= h.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function me(t, e) {
    Qt(1, arguments);
    var n = e || {},
        r = n.locale,
        i = r && r.options && r.options.firstWeekContainsDate,
        a = null == i ? 1 : It(i),
        o = null == n.firstWeekContainsDate ? a : It(n.firstWeekContainsDate),
        u = ye(t, e),
        s = new Date(0);
    s.setUTCFullYear(u, 0, o), s.setUTCHours(0, 0, 0, 0);
    var c = pe(s, e);
    return c;
}
function we(t, e) {
    Qt(1, arguments);
    var n = Bt(t),
        r = pe(n, e).getTime() - me(n, e).getTime();
    return Math.round(r / 6048e5) + 1;
}
var be = 'midnight',
    ke = 'noon',
    xe = 'morning',
    Te = 'afternoon',
    Ce = 'evening',
    Ae = 'night',
    Ee = {
        G: function (t, e, n) {
            var r = t.getUTCFullYear() > 0 ? 1 : 0;
            switch (e) {
                case 'G':
                case 'GG':
                case 'GGG':
                    return n.era(r, { width: 'abbreviated' });
                case 'GGGGG':
                    return n.era(r, { width: 'narrow' });
                default:
                    return n.era(r, { width: 'wide' });
            }
        },
        y: function (t, e, n) {
            if ('yo' === e) {
                var r = t.getUTCFullYear(),
                    i = r > 0 ? r : 1 - r;
                return n.ordinalNumber(i, { unit: 'year' });
            }
            return le.y(t, e);
        },
        Y: function (t, e, n, r) {
            var i = ye(t, r),
                a = i > 0 ? i : 1 - i;
            return 'YY' === e ? he(a % 100, 2) : 'Yo' === e ? n.ordinalNumber(a, { unit: 'year' }) : he(a, e.length);
        },
        R: function (t, e) {
            return he(fe(t), e.length);
        },
        u: function (t, e) {
            return he(t.getUTCFullYear(), e.length);
        },
        Q: function (t, e, n) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case 'Q':
                    return String(r);
                case 'QQ':
                    return he(r, 2);
                case 'Qo':
                    return n.ordinalNumber(r, { unit: 'quarter' });
                case 'QQQ':
                    return n.quarter(r, { width: 'abbreviated', context: 'formatting' });
                case 'QQQQQ':
                    return n.quarter(r, { width: 'narrow', context: 'formatting' });
                default:
                    return n.quarter(r, { width: 'wide', context: 'formatting' });
            }
        },
        q: function (t, e, n) {
            var r = Math.ceil((t.getUTCMonth() + 1) / 3);
            switch (e) {
                case 'q':
                    return String(r);
                case 'qq':
                    return he(r, 2);
                case 'qo':
                    return n.ordinalNumber(r, { unit: 'quarter' });
                case 'qqq':
                    return n.quarter(r, { width: 'abbreviated', context: 'standalone' });
                case 'qqqqq':
                    return n.quarter(r, { width: 'narrow', context: 'standalone' });
                default:
                    return n.quarter(r, { width: 'wide', context: 'standalone' });
            }
        },
        M: function (t, e, n) {
            var r = t.getUTCMonth();
            switch (e) {
                case 'M':
                case 'MM':
                    return le.M(t, e);
                case 'Mo':
                    return n.ordinalNumber(r + 1, { unit: 'month' });
                case 'MMM':
                    return n.month(r, { width: 'abbreviated', context: 'formatting' });
                case 'MMMMM':
                    return n.month(r, { width: 'narrow', context: 'formatting' });
                default:
                    return n.month(r, { width: 'wide', context: 'formatting' });
            }
        },
        L: function (t, e, n) {
            var r = t.getUTCMonth();
            switch (e) {
                case 'L':
                    return String(r + 1);
                case 'LL':
                    return he(r + 1, 2);
                case 'Lo':
                    return n.ordinalNumber(r + 1, { unit: 'month' });
                case 'LLL':
                    return n.month(r, { width: 'abbreviated', context: 'standalone' });
                case 'LLLLL':
                    return n.month(r, { width: 'narrow', context: 'standalone' });
                default:
                    return n.month(r, { width: 'wide', context: 'standalone' });
            }
        },
        w: function (t, e, n, r) {
            var i = we(t, r);
            return 'wo' === e ? n.ordinalNumber(i, { unit: 'week' }) : he(i, e.length);
        },
        I: function (t, e, n) {
            var r = ge(t);
            return 'Io' === e ? n.ordinalNumber(r, { unit: 'week' }) : he(r, e.length);
        },
        d: function (t, e, n) {
            return 'do' === e ? n.ordinalNumber(t.getUTCDate(), { unit: 'date' }) : le.d(t, e);
        },
        D: function (t, e, n) {
            var r = (function (t) {
                Qt(1, arguments);
                var e = Bt(t),
                    n = e.getTime();
                e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
                var r = e.getTime(),
                    i = n - r;
                return Math.floor(i / 864e5) + 1;
            })(t);
            return 'Do' === e ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : he(r, e.length);
        },
        E: function (t, e, n) {
            var r = t.getUTCDay();
            switch (e) {
                case 'E':
                case 'EE':
                case 'EEE':
                    return n.day(r, { width: 'abbreviated', context: 'formatting' });
                case 'EEEEE':
                    return n.day(r, { width: 'narrow', context: 'formatting' });
                case 'EEEEEE':
                    return n.day(r, { width: 'short', context: 'formatting' });
                default:
                    return n.day(r, { width: 'wide', context: 'formatting' });
            }
        },
        e: function (t, e, n, r) {
            var i = t.getUTCDay(),
                a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case 'e':
                    return String(a);
                case 'ee':
                    return he(a, 2);
                case 'eo':
                    return n.ordinalNumber(a, { unit: 'day' });
                case 'eee':
                    return n.day(i, { width: 'abbreviated', context: 'formatting' });
                case 'eeeee':
                    return n.day(i, { width: 'narrow', context: 'formatting' });
                case 'eeeeee':
                    return n.day(i, { width: 'short', context: 'formatting' });
                default:
                    return n.day(i, { width: 'wide', context: 'formatting' });
            }
        },
        c: function (t, e, n, r) {
            var i = t.getUTCDay(),
                a = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (e) {
                case 'c':
                    return String(a);
                case 'cc':
                    return he(a, e.length);
                case 'co':
                    return n.ordinalNumber(a, { unit: 'day' });
                case 'ccc':
                    return n.day(i, { width: 'abbreviated', context: 'standalone' });
                case 'ccccc':
                    return n.day(i, { width: 'narrow', context: 'standalone' });
                case 'cccccc':
                    return n.day(i, { width: 'short', context: 'standalone' });
                default:
                    return n.day(i, { width: 'wide', context: 'standalone' });
            }
        },
        i: function (t, e, n) {
            var r = t.getUTCDay(),
                i = 0 === r ? 7 : r;
            switch (e) {
                case 'i':
                    return String(i);
                case 'ii':
                    return he(i, e.length);
                case 'io':
                    return n.ordinalNumber(i, { unit: 'day' });
                case 'iii':
                    return n.day(r, { width: 'abbreviated', context: 'formatting' });
                case 'iiiii':
                    return n.day(r, { width: 'narrow', context: 'formatting' });
                case 'iiiiii':
                    return n.day(r, { width: 'short', context: 'formatting' });
                default:
                    return n.day(r, { width: 'wide', context: 'formatting' });
            }
        },
        a: function (t, e, n) {
            var r = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
            switch (e) {
                case 'a':
                case 'aa':
                    return n.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'aaa':
                    return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
                case 'aaaaa':
                    return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
                default:
                    return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
        },
        b: function (t, e, n) {
            var r,
                i = t.getUTCHours();
            switch (((r = 12 === i ? ke : 0 === i ? be : i / 12 >= 1 ? 'pm' : 'am'), e)) {
                case 'b':
                case 'bb':
                    return n.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'bbb':
                    return n.dayPeriod(r, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
                case 'bbbbb':
                    return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
                default:
                    return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
        },
        B: function (t, e, n) {
            var r,
                i = t.getUTCHours();
            switch (((r = i >= 17 ? Ce : i >= 12 ? Te : i >= 4 ? xe : Ae), e)) {
                case 'B':
                case 'BB':
                case 'BBB':
                    return n.dayPeriod(r, {
                        width: 'abbreviated',
                        context: 'formatting',
                    });
                case 'BBBBB':
                    return n.dayPeriod(r, { width: 'narrow', context: 'formatting' });
                default:
                    return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
        },
        h: function (t, e, n) {
            if ('ho' === e) {
                var r = t.getUTCHours() % 12;
                return 0 === r && (r = 12), n.ordinalNumber(r, { unit: 'hour' });
            }
            return le.h(t, e);
        },
        H: function (t, e, n) {
            return 'Ho' === e ? n.ordinalNumber(t.getUTCHours(), { unit: 'hour' }) : le.H(t, e);
        },
        K: function (t, e, n) {
            var r = t.getUTCHours() % 12;
            return 'Ko' === e ? n.ordinalNumber(r, { unit: 'hour' }) : he(r, e.length);
        },
        k: function (t, e, n) {
            var r = t.getUTCHours();
            return 0 === r && (r = 24), 'ko' === e ? n.ordinalNumber(r, { unit: 'hour' }) : he(r, e.length);
        },
        m: function (t, e, n) {
            return 'mo' === e ? n.ordinalNumber(t.getUTCMinutes(), { unit: 'minute' }) : le.m(t, e);
        },
        s: function (t, e, n) {
            return 'so' === e ? n.ordinalNumber(t.getUTCSeconds(), { unit: 'second' }) : le.s(t, e);
        },
        S: function (t, e) {
            return le.S(t, e);
        },
        X: function (t, e, n, r) {
            var i = (r._originalDate || t).getTimezoneOffset();
            if (0 === i) return 'Z';
            switch (e) {
                case 'X':
                    return Oe(i);
                case 'XXXX':
                case 'XX':
                    return Se(i);
                default:
                    return Se(i, ':');
            }
        },
        x: function (t, e, n, r) {
            var i = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case 'x':
                    return Oe(i);
                case 'xxxx':
                case 'xx':
                    return Se(i);
                default:
                    return Se(i, ':');
            }
        },
        O: function (t, e, n, r) {
            var i = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case 'O':
                case 'OO':
                case 'OOO':
                    return 'GMT' + De(i, ':');
                default:
                    return 'GMT' + Se(i, ':');
            }
        },
        z: function (t, e, n, r) {
            var i = (r._originalDate || t).getTimezoneOffset();
            switch (e) {
                case 'z':
                case 'zz':
                case 'zzz':
                    return 'GMT' + De(i, ':');
                default:
                    return 'GMT' + Se(i, ':');
            }
        },
        t: function (t, e, n, r) {
            var i = r._originalDate || t;
            return he(Math.floor(i.getTime() / 1e3), e.length);
        },
        T: function (t, e, n, r) {
            return he((r._originalDate || t).getTime(), e.length);
        },
    };
function De(t, e) {
    var n = t > 0 ? '-' : '+',
        r = Math.abs(t),
        i = Math.floor(r / 60),
        a = r % 60;
    if (0 === a) return n + String(i);
    var o = e || '';
    return n + String(i) + o + he(a, 2);
}
function Oe(t, e) {
    return t % 60 == 0 ? (t > 0 ? '-' : '+') + he(Math.abs(t) / 60, 2) : Se(t, e);
}
function Se(t, e) {
    var n = e || '',
        r = t > 0 ? '-' : '+',
        i = Math.abs(t);
    return r + he(Math.floor(i / 60), 2) + n + he(i % 60, 2);
}
var Pe = Ee;
function Re(t, e) {
    switch (t) {
        case 'P':
            return e.date({ width: 'short' });
        case 'PP':
            return e.date({ width: 'medium' });
        case 'PPP':
            return e.date({ width: 'long' });
        default:
            return e.date({ width: 'full' });
    }
}
function Ue(t, e) {
    switch (t) {
        case 'p':
            return e.time({ width: 'short' });
        case 'pp':
            return e.time({ width: 'medium' });
        case 'ppp':
            return e.time({ width: 'long' });
        default:
            return e.time({ width: 'full' });
    }
}
var Me = {
        p: Ue,
        P: function (t, e) {
            var n,
                r = t.match(/(P+)(p+)?/),
                i = r[1],
                a = r[2];
            if (!a) return Re(t, e);
            switch (i) {
                case 'P':
                    n = e.dateTime({ width: 'short' });
                    break;
                case 'PP':
                    n = e.dateTime({ width: 'medium' });
                    break;
                case 'PPP':
                    n = e.dateTime({ width: 'long' });
                    break;
                default:
                    n = e.dateTime({ width: 'full' });
            }
            return n.replace('{{date}}', Re(i, e)).replace('{{time}}', Ue(a, e));
        },
    },
    je = Me,
    qe = ['D', 'DD'],
    $e = ['YY', 'YYYY'];
function Ne(t) {
    return -1 !== qe.indexOf(t);
}
function He(t) {
    return -1 !== $e.indexOf(t);
}
function Ye(t, e, n) {
    if ('YYYY' === t) throw new RangeError('Use `yyyy` instead of `YYYY` (in `'.concat(e, '`) for formatting years to the input `').concat(n, '`; see: https://git.io/fxCyr'));
    if ('YY' === t) throw new RangeError('Use `yy` instead of `YY` (in `'.concat(e, '`) for formatting years to the input `').concat(n, '`; see: https://git.io/fxCyr'));
    if ('D' === t) throw new RangeError('Use `d` instead of `D` (in `'.concat(e, '`) for formatting days of the month to the input `').concat(n, '`; see: https://git.io/fxCyr'));
    if ('DD' === t) throw new RangeError('Use `dd` instead of `DD` (in `'.concat(e, '`) for formatting days of the month to the input `').concat(n, '`; see: https://git.io/fxCyr'));
}
var Le = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Fe = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    _e = /^'([^]*?)'?$/,
    We = /''/g,
    ze = /[a-zA-Z]/;
function Ie(t, e, n) {
    Qt(2, arguments);
    var r = String(e),
        i = n || {},
        a = i.locale || se,
        o = a.options && a.options.firstWeekContainsDate,
        u = null == o ? 1 : It(o),
        s = null == i.firstWeekContainsDate ? u : It(i.firstWeekContainsDate);
    if (!(s >= 1 && s <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var c = a.options && a.options.weekStartsOn,
        h = null == c ? 0 : It(c),
        l = null == i.weekStartsOn ? h : It(i.weekStartsOn);
    if (!(l >= 0 && l <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!a.localize) throw new RangeError('locale must contain localize property');
    if (!a.formatLong) throw new RangeError('locale must contain formatLong property');
    var d = Bt(t);
    if (!Jt(d)) throw new RangeError('Invalid time value');
    var f = Xt(d),
        v = ce(d, f),
        g = {
            firstWeekContainsDate: s,
            weekStartsOn: l,
            locale: a,
            _originalDate: d,
        },
        p = r
            .match(Fe)
            .map(function (t) {
                var e = t[0];
                return 'p' === e || 'P' === e ? (0, je[e])(t, a.formatLong, g) : t;
            })
            .join('')
            .match(Le)
            .map(function (n) {
                if ("''" === n) return "'";
                var r = n[0];
                if ("'" === r) return Qe(n);
                var o = Pe[r];
                if (o) return !i.useAdditionalWeekYearTokens && He(n) && Ye(n, e, t), !i.useAdditionalDayOfYearTokens && Ne(n) && Ye(n, e, t), o(v, n, a.localize, g);
                if (r.match(ze)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + r + '`');
                return n;
            })
            .join('');
    return p;
}
function Qe(t) {
    return t.match(_e)[1].replace(We, "'");
}
function Be(t, e) {
    if (null == t) throw new TypeError('assign requires that input parameter not be null or undefined');
    for (var n in (e = e || {})) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
}
function Ge(t, e, n) {
    Qt(2, arguments);
    var r = n || {},
        i = r.locale,
        a = i && i.options && i.options.weekStartsOn,
        o = null == a ? 0 : It(a),
        u = null == r.weekStartsOn ? o : It(r.weekStartsOn);
    if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    var s = Bt(t),
        c = It(e),
        h = s.getUTCDay(),
        l = c % 7,
        d = (l + 7) % 7,
        f = (d < u ? 7 : 0) + c - h;
    return s.setUTCDate(s.getUTCDate() + f), s;
}
var Xe = /^(1[0-2]|0?\d)/,
    Ke = /^(3[0-1]|[0-2]?\d)/,
    Je = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    Ze = /^(5[0-3]|[0-4]?\d)/,
    Ve = /^(2[0-3]|[0-1]?\d)/,
    tn = /^(2[0-4]|[0-1]?\d)/,
    en = /^(1[0-1]|0?\d)/,
    nn = /^(1[0-2]|0?\d)/,
    rn = /^[0-5]?\d/,
    an = /^[0-5]?\d/,
    on = /^\d/,
    un = /^\d{1,2}/,
    sn = /^\d{1,3}/,
    cn = /^\d{1,4}/,
    hn = /^-?\d+/,
    ln = /^-?\d/,
    dn = /^-?\d{1,2}/,
    fn = /^-?\d{1,3}/,
    vn = /^-?\d{1,4}/,
    gn = /^([+-])(\d{2})(\d{2})?|Z/,
    pn = /^([+-])(\d{2})(\d{2})|Z/,
    yn = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    mn = /^([+-])(\d{2}):(\d{2})|Z/,
    wn = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;
function bn(t, e, n) {
    var r = e.match(t);
    if (!r) return null;
    var i = parseInt(r[0], 10);
    return { value: n ? n(i) : i, rest: e.slice(r[0].length) };
}
function kn(t, e) {
    var n = e.match(t);
    return n
        ? 'Z' === n[0]
            ? { value: 0, rest: e.slice(1) }
            : {
                  value: ('+' === n[1] ? 1 : -1) * (36e5 * (n[2] ? parseInt(n[2], 10) : 0) + 6e4 * (n[3] ? parseInt(n[3], 10) : 0) + 1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
                  rest: e.slice(n[0].length),
              }
        : null;
}
function xn(t, e) {
    return bn(hn, t, e);
}
function Tn(t, e, n) {
    switch (t) {
        case 1:
            return bn(on, e, n);
        case 2:
            return bn(un, e, n);
        case 3:
            return bn(sn, e, n);
        case 4:
            return bn(cn, e, n);
        default:
            return bn(new RegExp('^\\d{1,' + t + '}'), e, n);
    }
}
function Cn(t, e, n) {
    switch (t) {
        case 1:
            return bn(ln, e, n);
        case 2:
            return bn(dn, e, n);
        case 3:
            return bn(fn, e, n);
        case 4:
            return bn(vn, e, n);
        default:
            return bn(new RegExp('^-?\\d{1,' + t + '}'), e, n);
    }
}
function An(t) {
    switch (t) {
        case 'morning':
            return 4;
        case 'evening':
            return 17;
        case 'pm':
        case 'noon':
        case 'afternoon':
            return 12;
        default:
            return 0;
    }
}
function En(t, e) {
    var n,
        r = e > 0,
        i = r ? e : 1 - e;
    if (i <= 50) n = t || 100;
    else {
        var a = i + 50;
        n = t + 100 * Math.floor(a / 100) - (t >= a % 100 ? 100 : 0);
    }
    return r ? n : 1 - n;
}
var Dn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    On = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Sn(t) {
    return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0);
}
var Pn = {
        G: {
            priority: 140,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'G':
                    case 'GG':
                    case 'GGG':
                        return n.era(t, { width: 'abbreviated' }) || n.era(t, { width: 'narrow' });
                    case 'GGGGG':
                        return n.era(t, { width: 'narrow' });
                    default:
                        return n.era(t, { width: 'wide' }) || n.era(t, { width: 'abbreviated' }) || n.era(t, { width: 'narrow' });
                }
            },
            set: function (t, e, n, r) {
                return (e.era = n), t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['R', 'u', 't', 'T'],
        },
        y: {
            priority: 130,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    return { year: t, isTwoDigitYear: 'yy' === e };
                };
                switch (e) {
                    case 'y':
                        return Tn(4, t, i);
                    case 'yo':
                        return n.ordinalNumber(t, { unit: 'year', valueCallback: i });
                    default:
                        return Tn(e.length, t, i);
                }
            },
            validate: function (t, e, n) {
                return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n, r) {
                var i = t.getUTCFullYear();
                if (n.isTwoDigitYear) {
                    var a = En(n.year, i);
                    return t.setUTCFullYear(a, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
                }
                var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year;
                return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
        },
        Y: {
            priority: 130,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    return { year: t, isTwoDigitYear: 'YY' === e };
                };
                switch (e) {
                    case 'Y':
                        return Tn(4, t, i);
                    case 'Yo':
                        return n.ordinalNumber(t, { unit: 'year', valueCallback: i });
                    default:
                        return Tn(e.length, t, i);
                }
            },
            validate: function (t, e, n) {
                return e.isTwoDigitYear || e.year > 0;
            },
            set: function (t, e, n, r) {
                var i = ye(t, r);
                if (n.isTwoDigitYear) {
                    var a = En(n.year, i);
                    return t.setUTCFullYear(a, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), pe(t, r);
                }
                var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year;
                return t.setUTCFullYear(o, 0, r.firstWeekContainsDate), t.setUTCHours(0, 0, 0, 0), pe(t, r);
            },
            incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
        },
        R: {
            priority: 130,
            parse: function (t, e, n, r) {
                return Cn('R' === e ? 4 : e.length, t);
            },
            set: function (t, e, n, r) {
                var i = new Date(0);
                return i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0), de(i);
            },
            incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
        },
        u: {
            priority: 130,
            parse: function (t, e, n, r) {
                return Cn('u' === e ? 4 : e.length, t);
            },
            set: function (t, e, n, r) {
                return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'],
        },
        Q: {
            priority: 120,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'Q':
                    case 'QQ':
                        return Tn(e.length, t);
                    case 'Qo':
                        return n.ordinalNumber(t, { unit: 'quarter' });
                    case 'QQQ':
                        return n.quarter(t, { width: 'abbreviated', context: 'formatting' }) || n.quarter(t, { width: 'narrow', context: 'formatting' });
                    case 'QQQQQ':
                        return n.quarter(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.quarter(t, { width: 'wide', context: 'formatting' }) ||
                            n.quarter(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.quarter(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 4;
            },
            set: function (t, e, n, r) {
                return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
        },
        q: {
            priority: 120,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'q':
                    case 'qq':
                        return Tn(e.length, t);
                    case 'qo':
                        return n.ordinalNumber(t, { unit: 'quarter' });
                    case 'qqq':
                        return n.quarter(t, { width: 'abbreviated', context: 'standalone' }) || n.quarter(t, { width: 'narrow', context: 'standalone' });
                    case 'qqqqq':
                        return n.quarter(t, { width: 'narrow', context: 'standalone' });
                    default:
                        return (
                            n.quarter(t, { width: 'wide', context: 'standalone' }) ||
                            n.quarter(t, { width: 'abbreviated', context: 'standalone' }) ||
                            n.quarter(t, { width: 'narrow', context: 'standalone' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 4;
            },
            set: function (t, e, n, r) {
                return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T'],
        },
        M: {
            priority: 110,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    return t - 1;
                };
                switch (e) {
                    case 'M':
                        return bn(Xe, t, i);
                    case 'MM':
                        return Tn(2, t, i);
                    case 'Mo':
                        return n.ordinalNumber(t, { unit: 'month', valueCallback: i });
                    case 'MMM':
                        return n.month(t, { width: 'abbreviated', context: 'formatting' }) || n.month(t, { width: 'narrow', context: 'formatting' });
                    case 'MMMMM':
                        return n.month(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.month(t, { width: 'wide', context: 'formatting' }) ||
                            n.month(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.month(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 11;
            },
            set: function (t, e, n, r) {
                return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
        },
        L: {
            priority: 110,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    return t - 1;
                };
                switch (e) {
                    case 'L':
                        return bn(Xe, t, i);
                    case 'LL':
                        return Tn(2, t, i);
                    case 'Lo':
                        return n.ordinalNumber(t, { unit: 'month', valueCallback: i });
                    case 'LLL':
                        return n.month(t, { width: 'abbreviated', context: 'standalone' }) || n.month(t, { width: 'narrow', context: 'standalone' });
                    case 'LLLLL':
                        return n.month(t, { width: 'narrow', context: 'standalone' });
                    default:
                        return (
                            n.month(t, { width: 'wide', context: 'standalone' }) ||
                            n.month(t, { width: 'abbreviated', context: 'standalone' }) ||
                            n.month(t, { width: 'narrow', context: 'standalone' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 11;
            },
            set: function (t, e, n, r) {
                return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
        },
        w: {
            priority: 100,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'w':
                        return bn(Ze, t);
                    case 'wo':
                        return n.ordinalNumber(t, { unit: 'week' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 53;
            },
            set: function (t, e, n, r) {
                return pe(
                    (function (t, e, n) {
                        Qt(2, arguments);
                        var r = Bt(t),
                            i = It(e),
                            a = we(r, n) - i;
                        return r.setUTCDate(r.getUTCDate() - 7 * a), r;
                    })(t, n, r),
                    r
                );
            },
            incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T'],
        },
        I: {
            priority: 100,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'I':
                        return bn(Ze, t);
                    case 'Io':
                        return n.ordinalNumber(t, { unit: 'week' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 53;
            },
            set: function (t, e, n, r) {
                return de(
                    (function (t, e) {
                        Qt(2, arguments);
                        var n = Bt(t),
                            r = It(e),
                            i = ge(n) - r;
                        return n.setUTCDate(n.getUTCDate() - 7 * i), n;
                    })(t, n, r),
                    r
                );
            },
            incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T'],
        },
        d: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'd':
                        return bn(Ke, t);
                    case 'do':
                        return n.ordinalNumber(t, { unit: 'date' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                var r = Sn(t.getUTCFullYear()),
                    i = t.getUTCMonth();
                return r ? e >= 1 && e <= On[i] : e >= 1 && e <= Dn[i];
            },
            set: function (t, e, n, r) {
                return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T'],
        },
        D: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'D':
                    case 'DD':
                        return bn(Je, t);
                    case 'Do':
                        return n.ordinalNumber(t, { unit: 'date' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return Sn(t.getUTCFullYear()) ? e >= 1 && e <= 366 : e >= 1 && e <= 365;
            },
            set: function (t, e, n, r) {
                return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T'],
        },
        E: {
            priority: 90,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'E':
                    case 'EE':
                    case 'EEE':
                        return (
                            n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.day(t, { width: 'short', context: 'formatting' }) ||
                            n.day(t, { width: 'narrow', context: 'formatting' })
                        );
                    case 'EEEEE':
                        return n.day(t, { width: 'narrow', context: 'formatting' });
                    case 'EEEEEE':
                        return n.day(t, { width: 'short', context: 'formatting' }) || n.day(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.day(t, { width: 'wide', context: 'formatting' }) ||
                            n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.day(t, { width: 'short', context: 'formatting' }) ||
                            n.day(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 6;
            },
            set: function (t, e, n, r) {
                return (t = Ge(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
        },
        e: {
            priority: 90,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    var e = 7 * Math.floor((t - 1) / 7);
                    return ((t + r.weekStartsOn + 6) % 7) + e;
                };
                switch (e) {
                    case 'e':
                    case 'ee':
                        return Tn(e.length, t, i);
                    case 'eo':
                        return n.ordinalNumber(t, { unit: 'day', valueCallback: i });
                    case 'eee':
                        return (
                            n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.day(t, { width: 'short', context: 'formatting' }) ||
                            n.day(t, { width: 'narrow', context: 'formatting' })
                        );
                    case 'eeeee':
                        return n.day(t, { width: 'narrow', context: 'formatting' });
                    case 'eeeeee':
                        return n.day(t, { width: 'short', context: 'formatting' }) || n.day(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.day(t, { width: 'wide', context: 'formatting' }) ||
                            n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.day(t, { width: 'short', context: 'formatting' }) ||
                            n.day(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 6;
            },
            set: function (t, e, n, r) {
                return (t = Ge(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T'],
        },
        c: {
            priority: 90,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    var e = 7 * Math.floor((t - 1) / 7);
                    return ((t + r.weekStartsOn + 6) % 7) + e;
                };
                switch (e) {
                    case 'c':
                    case 'cc':
                        return Tn(e.length, t, i);
                    case 'co':
                        return n.ordinalNumber(t, { unit: 'day', valueCallback: i });
                    case 'ccc':
                        return (
                            n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                            n.day(t, { width: 'short', context: 'standalone' }) ||
                            n.day(t, { width: 'narrow', context: 'standalone' })
                        );
                    case 'ccccc':
                        return n.day(t, { width: 'narrow', context: 'standalone' });
                    case 'cccccc':
                        return n.day(t, { width: 'short', context: 'standalone' }) || n.day(t, { width: 'narrow', context: 'standalone' });
                    default:
                        return (
                            n.day(t, { width: 'wide', context: 'standalone' }) ||
                            n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                            n.day(t, { width: 'short', context: 'standalone' }) ||
                            n.day(t, { width: 'narrow', context: 'standalone' })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 6;
            },
            set: function (t, e, n, r) {
                return (t = Ge(t, n, r)).setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T'],
        },
        i: {
            priority: 90,
            parse: function (t, e, n, r) {
                var i = function (t) {
                    return 0 === t ? 7 : t;
                };
                switch (e) {
                    case 'i':
                    case 'ii':
                        return Tn(e.length, t);
                    case 'io':
                        return n.ordinalNumber(t, { unit: 'day' });
                    case 'iii':
                        return (
                            n.day(t, {
                                width: 'abbreviated',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'short',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'narrow',
                                context: 'formatting',
                                valueCallback: i,
                            })
                        );
                    case 'iiiii':
                        return n.day(t, {
                            width: 'narrow',
                            context: 'formatting',
                            valueCallback: i,
                        });
                    case 'iiiiii':
                        return (
                            n.day(t, {
                                width: 'short',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'narrow',
                                context: 'formatting',
                                valueCallback: i,
                            })
                        );
                    default:
                        return (
                            n.day(t, {
                                width: 'wide',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'abbreviated',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'short',
                                context: 'formatting',
                                valueCallback: i,
                            }) ||
                            n.day(t, {
                                width: 'narrow',
                                context: 'formatting',
                                valueCallback: i,
                            })
                        );
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 7;
            },
            set: function (t, e, n, r) {
                return (
                    (t = (function (t, e) {
                        Qt(2, arguments);
                        var n = It(e);
                        n % 7 == 0 && (n -= 7);
                        var r = 1,
                            i = Bt(t),
                            a = i.getUTCDay(),
                            o = (((n % 7) + 7) % 7 < r ? 7 : 0) + n - a;
                        return i.setUTCDate(i.getUTCDate() + o), i;
                    })(t, n, r)),
                    t.setUTCHours(0, 0, 0, 0),
                    t
                );
            },
            incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T'],
        },
        a: {
            priority: 80,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'a':
                    case 'aa':
                    case 'aaa':
                        return n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) || n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    case 'aaaaa':
                        return n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            set: function (t, e, n, r) {
                return t.setUTCHours(An(n), 0, 0, 0), t;
            },
            incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
        },
        b: {
            priority: 80,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'b':
                    case 'bb':
                    case 'bbb':
                        return n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) || n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    case 'bbbbb':
                        return n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            set: function (t, e, n, r) {
                return t.setUTCHours(An(n), 0, 0, 0), t;
            },
            incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
        },
        B: {
            priority: 80,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'B':
                    case 'BB':
                    case 'BBB':
                        return n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) || n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    case 'BBBBB':
                        return n.dayPeriod(t, { width: 'narrow', context: 'formatting' });
                    default:
                        return (
                            n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'abbreviated', context: 'formatting' }) ||
                            n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                        );
                }
            },
            set: function (t, e, n, r) {
                return t.setUTCHours(An(n), 0, 0, 0), t;
            },
            incompatibleTokens: ['a', 'b', 't', 'T'],
        },
        h: {
            priority: 70,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'h':
                        return bn(nn, t);
                    case 'ho':
                        return n.ordinalNumber(t, { unit: 'hour' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 12;
            },
            set: function (t, e, n, r) {
                var i = t.getUTCHours() >= 12;
                return i && n < 12 ? t.setUTCHours(n + 12, 0, 0, 0) : i || 12 !== n ? t.setUTCHours(n, 0, 0, 0) : t.setUTCHours(0, 0, 0, 0), t;
            },
            incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
        },
        H: {
            priority: 70,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'H':
                        return bn(Ve, t);
                    case 'Ho':
                        return n.ordinalNumber(t, { unit: 'hour' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 23;
            },
            set: function (t, e, n, r) {
                return t.setUTCHours(n, 0, 0, 0), t;
            },
            incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
        },
        K: {
            priority: 70,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'K':
                        return bn(en, t);
                    case 'Ko':
                        return n.ordinalNumber(t, { unit: 'hour' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 11;
            },
            set: function (t, e, n, r) {
                return t.getUTCHours() >= 12 && n < 12 ? t.setUTCHours(n + 12, 0, 0, 0) : t.setUTCHours(n, 0, 0, 0), t;
            },
            incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
        },
        k: {
            priority: 70,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'k':
                        return bn(tn, t);
                    case 'ko':
                        return n.ordinalNumber(t, { unit: 'hour' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 1 && e <= 24;
            },
            set: function (t, e, n, r) {
                var i = n <= 24 ? n % 24 : n;
                return t.setUTCHours(i, 0, 0, 0), t;
            },
            incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
        },
        m: {
            priority: 60,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'm':
                        return bn(rn, t);
                    case 'mo':
                        return n.ordinalNumber(t, { unit: 'minute' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 59;
            },
            set: function (t, e, n, r) {
                return t.setUTCMinutes(n, 0, 0), t;
            },
            incompatibleTokens: ['t', 'T'],
        },
        s: {
            priority: 50,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 's':
                        return bn(an, t);
                    case 'so':
                        return n.ordinalNumber(t, { unit: 'second' });
                    default:
                        return Tn(e.length, t);
                }
            },
            validate: function (t, e, n) {
                return e >= 0 && e <= 59;
            },
            set: function (t, e, n, r) {
                return t.setUTCSeconds(n, 0), t;
            },
            incompatibleTokens: ['t', 'T'],
        },
        S: {
            priority: 30,
            parse: function (t, e, n, r) {
                return Tn(e.length, t, function (t) {
                    return Math.floor(t * Math.pow(10, 3 - e.length));
                });
            },
            set: function (t, e, n, r) {
                return t.setUTCMilliseconds(n), t;
            },
            incompatibleTokens: ['t', 'T'],
        },
        X: {
            priority: 10,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'X':
                        return kn(gn, t);
                    case 'XX':
                        return kn(pn, t);
                    case 'XXXX':
                        return kn(yn, t);
                    case 'XXXXX':
                        return kn(wn, t);
                    default:
                        return kn(mn, t);
                }
            },
            set: function (t, e, n, r) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
            incompatibleTokens: ['t', 'T', 'x'],
        },
        x: {
            priority: 10,
            parse: function (t, e, n, r) {
                switch (e) {
                    case 'x':
                        return kn(gn, t);
                    case 'xx':
                        return kn(pn, t);
                    case 'xxxx':
                        return kn(yn, t);
                    case 'xxxxx':
                        return kn(wn, t);
                    default:
                        return kn(mn, t);
                }
            },
            set: function (t, e, n, r) {
                return e.timestampIsSet ? t : new Date(t.getTime() - n);
            },
            incompatibleTokens: ['t', 'T', 'X'],
        },
        t: {
            priority: 40,
            parse: function (t, e, n, r) {
                return xn(t);
            },
            set: function (t, e, n, r) {
                return [new Date(1e3 * n), { timestampIsSet: !0 }];
            },
            incompatibleTokens: '*',
        },
        T: {
            priority: 20,
            parse: function (t, e, n, r) {
                return xn(t);
            },
            set: function (t, e, n, r) {
                return [new Date(n), { timestampIsSet: !0 }];
            },
            incompatibleTokens: '*',
        },
    },
    Rn = Pn,
    Un = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    Mn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    jn = /^'([^]*?)'?$/,
    qn = /''/g,
    $n = /\S/,
    Nn = /[a-zA-Z]/;
function Hn(t, e, n, r) {
    Qt(3, arguments);
    var i = String(t),
        a = String(e),
        o = r || {},
        u = o.locale || se;
    if (!u.match) throw new RangeError('locale must contain match property');
    var s = u.options && u.options.firstWeekContainsDate,
        c = null == s ? 1 : It(s),
        h = null == o.firstWeekContainsDate ? c : It(o.firstWeekContainsDate);
    if (!(h >= 1 && h <= 7)) throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var l = u.options && u.options.weekStartsOn,
        d = null == l ? 0 : It(l),
        f = null == o.weekStartsOn ? d : It(o.weekStartsOn);
    if (!(f >= 0 && f <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === a) return '' === i ? Bt(n) : new Date(NaN);
    var v,
        g = { firstWeekContainsDate: h, weekStartsOn: f, locale: u },
        p = [{ priority: 10, subPriority: -1, set: Yn, index: 0 }],
        y = a
            .match(Mn)
            .map(function (t) {
                var e = t[0];
                return 'p' === e || 'P' === e ? (0, je[e])(t, u.formatLong, g) : t;
            })
            .join('')
            .match(Un),
        m = [];
    for (v = 0; v < y.length; v++) {
        var w = y[v];
        !o.useAdditionalWeekYearTokens && He(w) && Ye(w, a, t), !o.useAdditionalDayOfYearTokens && Ne(w) && Ye(w, a, t);
        var b = w[0],
            k = Rn[b];
        if (k) {
            var x = k.incompatibleTokens;
            if (Array.isArray(x)) {
                for (var T = void 0, C = 0; C < m.length; C++) {
                    var A = m[C].token;
                    if (-1 !== x.indexOf(A) || A === b) {
                        T = m[C];
                        break;
                    }
                }
                if (T) throw new RangeError("The format string mustn't contain `".concat(T.fullToken, '` and `').concat(w, '` at the same time'));
            } else if ('*' === k.incompatibleTokens && m.length) throw new RangeError("The format string mustn't contain `".concat(w, '` and any other token at the same time'));
            m.push({ token: b, fullToken: w });
            var E = k.parse(i, w, u.match, g);
            if (!E) return new Date(NaN);
            p.push({
                priority: k.priority,
                subPriority: k.subPriority || 0,
                set: k.set,
                validate: k.validate,
                value: E.value,
                index: p.length,
            }),
                (i = E.rest);
        } else {
            if (b.match(Nn)) throw new RangeError('Format string contains an unescaped latin alphabet character `' + b + '`');
            if (("''" === w ? (w = "'") : "'" === b && (w = Ln(w)), 0 !== i.indexOf(w))) return new Date(NaN);
            i = i.slice(w.length);
        }
    }
    if (i.length > 0 && $n.test(i)) return new Date(NaN);
    var D = p
            .map(function (t) {
                return t.priority;
            })
            .sort(function (t, e) {
                return e - t;
            })
            .filter(function (t, e, n) {
                return n.indexOf(t) === e;
            })
            .map(function (t) {
                return p
                    .filter(function (e) {
                        return e.priority === t;
                    })
                    .sort(function (t, e) {
                        return e.subPriority - t.subPriority;
                    });
            })
            .map(function (t) {
                return t[0];
            }),
        O = Bt(n);
    if (isNaN(O)) return new Date(NaN);
    var S = ce(O, Xt(O)),
        P = {};
    for (v = 0; v < D.length; v++) {
        var R = D[v];
        if (R.validate && !R.validate(S, R.value, g)) return new Date(NaN);
        var U = R.set(S, P, R.value, g);
        U[0] ? ((S = U[0]), Be(P, U[1])) : (S = U);
    }
    return S;
}
function Yn(t, e) {
    if (e.timestampIsSet) return t;
    var n = new Date(0);
    return n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()), n.setHours(t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds(), t.getUTCMilliseconds()), n;
}
function Ln(t) {
    return t.match(jn)[1].replace(qn, "'");
}
var Fn = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'store-hour', i);
        }
        return (
            u(n, [
                {
                    key: 'day',
                    get: function () {
                        return this.getAttribute('day');
                    },
                },
                {
                    key: 'isClosed',
                    get: function () {
                        return null === this.getAttribute('start') && null === this.getAttribute('end');
                    },
                },
                {
                    key: 'is24Hours',
                    get: function () {
                        var t = this.startDateInstance,
                            e = this.endDateInstance,
                            n = Math.abs(t - e);
                        return Math.floor(n / 1e3 / 60) / 60 > 23;
                    },
                },
                {
                    key: 'startDateInstance',
                    get: function () {
                        if (!this.hasAttribute('start')) return null;
                        var t = this.getAttribute('start'),
                            e = 3 === t.split(':').length;
                        return Hn(t, e ? 'HH:mm:ss' : 'HH:mm', new Date());
                    },
                },
                {
                    key: 'endDateInstance',
                    get: function () {
                        if (!this.hasAttribute('end')) return null;
                        var t = this.getAttribute('end'),
                            e = 3 === t.split(':').length;
                        return Hn(t, e ? 'HH:mm:ss' : 'HH:mm', new Date());
                    },
                },
                {
                    key: 'humanReadableHoursRange',
                    get: function () {
                        return Jt(this.startDateInstance) && Jt(this.endDateInstance)
                            ? ''.concat(Ie(this.startDateInstance, 'p'), ' - ').concat(Ie(this.endDateInstance, 'p'))
                            : ''.concat(this.start, ' - ').concat(this.end);
                    },
                },
                {
                    key: 'humanReadableHours',
                    get: function () {
                        return this.isClosed ? 'Closed' : this.is24Hours ? '24 Hours' : this.humanReadableHoursRange;
                    },
                },
                {
                    key: 'create',
                    value: function () {
                        throw new Error('There is no create() method store location!');
                    },
                },
                {
                    key: 'update',
                    value: function () {
                        throw new Error('There is no update() method store location!');
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        throw new Error('There is no destroy() method store location!');
                    },
                },
                {
                    key: 'reload',
                    value: function () {
                        throw new Error('There is no reload() method store location!');
                    },
                },
            ]),
            n
        );
    })(),
    _n = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'store-location', i);
        }
        return (
            u(n, [
                {
                    key: 'latitude',
                    get: function () {
                        return this.getAttribute('place.location.coordinates.1');
                    },
                },
                {
                    key: 'longitude',
                    get: function () {
                        return this.getAttribute('place.location.coordinates.0');
                    },
                },
                {
                    key: 'hours',
                    get: function () {
                        return new Z(
                            this.getAttribute('hours').map(function (t) {
                                return new Fn(t);
                            })
                        );
                    },
                },
                {
                    key: 'isAlwaysOpen',
                    get: function () {
                        return this.hours.every(function (t) {
                            return null == t ? void 0 : t.is24Hours;
                        });
                    },
                },
                {
                    key: 'today',
                    get: function () {
                        var t = Ie(new Date(), 'EEEE');
                        return this.schedule[t];
                    },
                },
                {
                    key: 'schedule',
                    get: function () {
                        for (var t = {}, e = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], n = 0; n < e.length; n++) {
                            t[e[n]] = new Z();
                        }
                        for (var r = 0; r < this.hours.length; r++) {
                            var i = this.hours.objectAt(r);
                            t[i.day].pushObject(i);
                        }
                        return t;
                    },
                },
                {
                    key: 'create',
                    value: function () {
                        throw new Error('There is no create() method store location!');
                    },
                },
                {
                    key: 'update',
                    value: function () {
                        throw new Error('There is no update() method store location!');
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        throw new Error('There is no destroy() method store location!');
                    },
                },
            ]),
            n
        );
    })(),
    Wn = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'payment-gateway', i);
        }
        return (
            u(n, [
                {
                    key: 'type',
                    get: function () {
                        return this.getAttribute('type');
                    },
                },
                {
                    key: 'code',
                    get: function () {
                        return this.getAttribute('code');
                    },
                },
                {
                    key: 'isCashGateway',
                    get: function () {
                        return 'cash' === this.type;
                    },
                },
                {
                    key: 'isStripeGateway',
                    get: function () {
                        return 'stripe' === this.type;
                    },
                },
                {
                    key: 'setCheckoutToken',
                    value: function (t) {
                        this.token = t;
                    },
                },
                {
                    key: 'getCheckoutToken',
                    value: function () {
                        return this.token;
                    },
                },
                {
                    key: 'findRecord',
                    value: function () {
                        throw new Error('There is no findRecord() method for payment gateways!');
                    },
                },
                {
                    key: 'create',
                    value: function () {
                        throw new Error('There is no create() method for payment gateways!');
                    },
                },
                {
                    key: 'update',
                    value: function () {
                        throw new Error('There is no update() method for payment gateways!');
                    },
                },
                {
                    key: 'destroy',
                    value: function () {
                        throw new Error('There is no destroy() method for payment gateways!');
                    },
                },
                {
                    key: 'reload',
                    value: function () {
                        throw new Error('There is no reload() method for payment gateways!');
                    },
                },
            ]),
            n
        );
    })(),
    zn = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'store', i);
        }
        return (
            u(n, [
                {
                    key: 'getReviews',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('reviews', r({ store: this.id }, e)).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new Ut(e, t.adapter);
                                })
                            );
                        });
                    },
                },
                {
                    key: 'getLocations',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('locations', r({ store: this.id }, e)).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return e.place && (e.place = new vt(e.place)), new _n(e, t.adapter);
                                })
                            );
                        });
                    },
                },
                {
                    key: 'getLocation',
                    value: function (t) {
                        var e = this;
                        return this.adapter.get('locations/'.concat(t), { store: this.id }).then(function (t) {
                            return new _n(t, e.adapter);
                        });
                    },
                },
                {
                    key: 'getPaymentGateways',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('gateways', e).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new Wn(e, t.adapter);
                                })
                            );
                        });
                    },
                },
                {
                    key: 'getPaymentGateway',
                    value: function (t) {
                        var e = this;
                        return this.adapter.get('gateways/'.concat(t)).then(function (t) {
                            return new Wn(t, e.adapter);
                        });
                    },
                },
            ]),
            n
        );
    })(),
    In = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'network', i);
        }
        return (
            u(n, [
                {
                    key: 'getTags',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('tags', t);
                    },
                },
                {
                    key: 'getStores',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('stores', e).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new zn(e, t.adapter);
                                })
                            );
                        });
                    },
                },
                {
                    key: 'getStoreLocations',
                    value: function () {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.adapter.get('store-locations', e).then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new _n(e, t.adapter);
                                })
                            );
                        });
                    },
                },
                {
                    key: 'getPaymentGateways',
                    value: function () {
                        var t = this;
                        return this.adapter.get('gateways').then(function (e) {
                            return new Z(
                                e.map(function (e) {
                                    return new Wn(e, t.adapter);
                                })
                            );
                        });
                    },
                },
            ]),
            n
        );
    })(),
    Qn = Array.isArray,
    Bn = (function (t) {
        c(n, gt);
        var e = g(n);
        function n() {
            var t,
                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 ? arguments[1] : void 0,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), r instanceof pt ? v(t, (t = e.call(this, {}, r, 'service-quote', o))) : e.call(this, r, i, 'service-quote', o);
        }
        return (
            u(
                n,
                [
                    {
                        key: 'setAdapter',
                        value: function (t) {
                            var e;
                            return (
                                (this.adapter = t),
                                (this.store = new tr(this.resource, t, {
                                    onAfterFetch: this.syncAttributes.bind(this),
                                    actions: null === (e = this.options) || void 0 === e ? void 0 : e.actions,
                                })),
                                this
                            );
                        },
                    },
                    {
                        key: 'formattedAmount',
                        get: function () {
                            var t = this.getAttributes(['amount', 'currency']),
                                e = t.amount,
                                n = t.currency;
                            return Nt(e) || Nt(n) ? null : qt(e / 100, n);
                        },
                    },
                    {
                        key: 'fromCart',
                        value: function (t, e, r) {
                            var i,
                                a,
                                o,
                                u = this,
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'storefront',
                                c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                            return (
                                null !== (i = t) && void 0 !== i && i.id && (t = t.id),
                                null !== (a = e) && void 0 !== a && a.id && (e = e.id),
                                null !== (o = r) && void 0 !== o && o.id && (r = r.id),
                                this.adapter
                                    .get('service-quotes/from-cart', {
                                        origin: t,
                                        destination: e,
                                        cart: r,
                                        config: s,
                                        all: c,
                                    })
                                    .then(function (t) {
                                        return Qn(t)
                                            ? new Z(
                                                  t.map(function (t) {
                                                      return new n(t, u.adapter);
                                                  })
                                              )
                                            : new n(t, u.adapter);
                                    })
                            );
                        },
                    },
                ],
                [
                    {
                        key: 'getFromCart',
                        value: function (t) {
                            for (var e = new n(t), r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                            return e.fromCart.apply(e, i);
                        },
                    },
                ]
            ),
            n
        );
    })(),
    Gn = new ct({
        create: void 0,
        findAll: void 0,
        query: void 0,
        queryRecord: void 0,
        initialize: function (t, e, n, i) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
            return (
                et(t) && (t = t.id),
                et(e) && (e = e.id),
                et(n) && (n = n.id),
                et(i) && (i = i.getAttribute('code')),
                this.adapter.get(''.concat(this.namespace, '/before'), r(r({}, a), {}, { customer: t, cart: e, serviceQuote: n, gateway: i }), o)
            );
        },
        captureOrder: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return this.adapter.get(''.concat(this.namespace, '/capture'), { token: t, transactionDetails: e }, n).then(function (t) {
                return new dt(t);
            });
        },
    }),
    Xn = (function (t) {
        c(n, Pt);
        var e = g(n);
        function n() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return a(this, n), e.call(this, t, r, 'checkout', i);
        }
        return (
            u(n, [
                {
                    key: 'initialize',
                    value: function () {
                        var t;
                        return (t = this.store).initialize.apply(t, arguments);
                    },
                },
                {
                    key: 'captureOrder',
                    value: function () {
                        var t;
                        return (t = this.store).captureOrder.apply(t, arguments);
                    },
                },
            ]),
            n
        );
    })(),
    Kn = {
        Product: Ht,
        Category: Yt,
        Customer: Ft,
        Cart: zt,
        DeliveryServiceQuote: Bn,
        Store: zn,
        StoreLocation: _n,
        StoreHour: Fn,
        Checkout: Xn,
        Review: Ut,
    },
    Jn = { BrowserAdapter: yt, NodeAdapter: mt },
    Zn = (function () {
        function t() {
            return a(this, t), (this.resources = Kn), (this.adapters = Jn), this.lookup.apply(this, arguments);
        }
        return (
            u(t, [
                {
                    key: 'lookup',
                    value: function (t, e) {
                        var n = kt(t),
                            r = Array.prototype.slice.call(arguments).slice(2);
                        if (!this[n]) throw new Error('Attempted to resolve invalid type');
                        if (!this[n][e]) throw new Error('No '.concat(xt(t), ' named ').concat(e, ' to resolve'));
                        return f(this[n][e], p(r));
                    },
                },
            ]),
            t
        );
    })(),
    Vn = function () {
        return f(Zn, Array.prototype.slice.call(arguments));
    },
    tr = (function (t) {
        c(n, St);
        var e = g(n);
        function n() {
            return a(this, n), e.apply(this, arguments);
        }
        return (
            u(n, [
                {
                    key: 'extendActions',
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return Ot(this, t);
                    },
                },
                {
                    key: 'serialize',
                    value: function (t) {
                        return Vn('resource', Tt(this.resource), t, this.adapter);
                    },
                },
            ]),
            n
        );
    })(),
    er = (function () {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (
                (a(this, t),
                (this.version = n.version || 'v1'),
                (this.options = {
                    version: this.version,
                    host: n.host || 'https://api.fleetbase.io',
                    namespace: 'storefront/'.concat(this.version) || n.namespace,
                    publicKey: e,
                    debug: r,
                }),
                !$t(e))
            )
                throw new Error('⚠️ Invalid Storefront key given to Storefront SDK');
            (this.adapter = n.adapter || Mt(this.options)),
                (this.products = new tr('product', this.adapter)),
                (this.categories = new tr('category', this.adapter)),
                (this.reviews = new tr('review', this.adapter).extendActions(Rt)),
                (this.customers = new tr('customer', this.adapter).extendActions(Lt)),
                (this.cart = new tr('cart', this.adapter).extendActions(Wt)),
                (this.checkout = new tr('checkout', this.adapter).extendActions(Gn));
        }
        return (
            u(
                t,
                [
                    {
                        key: 'about',
                        value: function () {
                            return this.adapter.get('about');
                        },
                    },
                    {
                        key: 'search',
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return this.adapter.get('search', r({ query: t }, e)).then(function (t) {
                                return new Z(
                                    t.map(function (t) {
                                        return new Ht(t);
                                    })
                                );
                            });
                        },
                    },
                    {
                        key: 'setAdapter',
                        value: function (t) {
                            this.adapter = t;
                        },
                    },
                    {
                        key: 'getAdapter',
                        value: function () {
                            return this.adapter;
                        },
                    },
                ],
                [
                    {
                        key: 'newInstance',
                        value: function () {
                            return f(t, Array.prototype.slice.call(arguments));
                        },
                    },
                ]
            ),
            t
        );
    })();
(exports.Cart = zt),
    (exports.Category = Yt),
    (exports.Checkout = Xn),
    (exports.Customer = Ft),
    (exports.DeliveryServiceQuote = Bn),
    (exports.Network = In),
    (exports.PaymentGateway = Wn),
    (exports.Product = Ht),
    (exports.Review = Ut),
    (exports.Store = zn),
    (exports.StoreHour = Fn),
    (exports.StoreLocation = _n),
    (exports.default = er);
//# sourceMappingURL=storefront.js.map
