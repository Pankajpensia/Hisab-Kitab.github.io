import {
    bg as W,
    D as p,
    u as V,
    r as l,
    an as z,
    ap as K
} from "./entry.ab3e2748.js";
var Y = Function.prototype.toString,
    O = Object.create,
    q = Object.prototype.toString,
    G = function() {
        function r() {
            this._keys = [], this._values = []
        }
        return r.prototype.has = function(e) {
            return !!~this._keys.indexOf(e)
        }, r.prototype.get = function(e) {
            return this._values[this._keys.indexOf(e)]
        }, r.prototype.set = function(e, t) {
            this._keys.push(e), this._values.push(t)
        }, r
    }();

function H() {
    return new G
}

function J() {
    return new WeakMap
}
var Q = typeof WeakMap < "u" ? J : H;

function d(r) {
    if (!r) return O(null);
    var e = r.constructor;
    if (e === Object) return r === Object.prototype ? {} : O(r);
    if (~Y.call(e).indexOf("[native code]")) try {
        return new e
    } catch {}
    return O(r)
}

function X(r) {
    var e = "";
    return r.global && (e += "g"), r.ignoreCase && (e += "i"), r.multiline && (e += "m"), r.unicode && (e += "u"), r.sticky && (e += "y"), e
}

function Z(r) {
    return r.flags
}
var $ = /test/g.flags === "g" ? Z : X;

function P(r) {
    var e = q.call(r);
    return e.substring(8, e.length - 1)
}

function rr(r) {
    return r[Symbol.toStringTag] || P(r)
}
var er = typeof Symbol < "u" ? rr : P,
    tr = Object.defineProperty,
    nr = Object.getOwnPropertyDescriptor,
    _ = Object.getOwnPropertyNames,
    C = Object.getOwnPropertySymbols,
    B = Object.prototype,
    j = B.hasOwnProperty,
    or = B.propertyIsEnumerable,
    L = typeof C == "function";

function cr(r) {
    return _(r).concat(C(r))
}
var ar = L ? cr : _;

function s(r, e, t) {
    for (var c = ar(r), a = 0, u = c.length, o = void 0, n = void 0; a < u; ++a)
        if (o = c[a], !(o === "callee" || o === "caller")) {
            if (n = nr(r, o), !n) {
                e[o] = t.copier(r[o], t);
                continue
            }!n.get && !n.set && (n.value = t.copier(n.value, t));
            try {
                tr(e, o, n)
            } catch {
                e[o] = n.value
            }
        }
    return e
}

function ur(r, e) {
    var t = new e.Constructor;
    e.cache.set(r, t);
    for (var c = 0, a = r.length; c < a; ++c) t[c] = e.copier(r[c], e);
    return t
}

function ir(r, e) {
    var t = new e.Constructor;
    return e.cache.set(r, t), s(r, t, e)
}

function M(r, e) {
    return r.slice(0)
}

function fr(r, e) {
    return r.slice(0, r.size, r.type)
}

function yr(r, e) {
    return new e.Constructor(M(r.buffer))
}

function pr(r, e) {
    return new e.Constructor(r.getTime())
}

function F(r, e) {
    var t = new e.Constructor;
    return e.cache.set(r, t), r.forEach(function(c, a) {
        t.set(a, e.copier(c, e))
    }), t
}

function lr(r, e) {
    return s(r, F(r, e), e)
}

function gr(r, e) {
    var t = d(e.prototype);
    e.cache.set(r, t);
    for (var c in r) j.call(r, c) && (t[c] = e.copier(r[c], e));
    return t
}

function sr(r, e) {
    var t = d(e.prototype);
    e.cache.set(r, t);
    for (var c in r) j.call(r, c) && (t[c] = e.copier(r[c], e));
    for (var a = C(r), u = 0, o = a.length, n = void 0; u < o; ++u) n = a[u], or.call(r, n) && (t[n] = e.copier(r[n], e));
    return t
}
var vr = L ? sr : gr;

function Sr(r, e) {
    var t = d(e.prototype);
    return e.cache.set(r, t), s(r, t, e)
}

function m(r, e) {
    return new e.Constructor(r.valueOf())
}

function hr(r, e) {
    var t = new e.Constructor(r.source, $(r));
    return t.lastIndex = r.lastIndex, t
}

function g(r, e) {
    return r
}

function T(r, e) {
    var t = new e.Constructor;
    return e.cache.set(r, t), r.forEach(function(c) {
        t.add(e.copier(c, e))
    }), t
}

function Or(r, e) {
    return s(r, T(r, e), e)
}
var mr = Array.isArray,
    b = Object.assign,
    dr = Object.getPrototypeOf || function(r) {
        return r.__proto__
    },
    E = {
        array: ur,
        arrayBuffer: M,
        blob: fr,
        dataView: yr,
        date: pr,
        error: g,
        map: F,
        object: vr,
        regExp: hr,
        set: T
    },
    Cr = b({}, E, {
        array: ir,
        map: lr,
        object: Sr,
        set: Or
    });

function br(r) {
    return {
        Arguments: r.object,
        Array: r.array,
        ArrayBuffer: r.arrayBuffer,
        Blob: r.blob,
        Boolean: m,
        DataView: r.dataView,
        Date: r.date,
        Error: r.error,
        Float32Array: r.arrayBuffer,
        Float64Array: r.arrayBuffer,
        Int8Array: r.arrayBuffer,
        Int16Array: r.arrayBuffer,
        Int32Array: r.arrayBuffer,
        Map: r.map,
        Number: m,
        Object: r.object,
        Promise: g,
        RegExp: r.regExp,
        Set: r.set,
        String: m,
        WeakMap: g,
        WeakSet: g,
        Uint8Array: r.arrayBuffer,
        Uint8ClampedArray: r.arrayBuffer,
        Uint16Array: r.arrayBuffer,
        Uint32Array: r.arrayBuffer,
        Uint64Array: r.arrayBuffer
    }
}

function I(r) {
    var e = b({}, E, r),
        t = br(e),
        c = t.Array,
        a = t.Object;

    function u(o, n) {
        if (n.prototype = n.Constructor = void 0, !o || typeof o != "object") return o;
        if (n.cache.has(o)) return n.cache.get(o);
        if (n.prototype = dr(o), n.Constructor = n.prototype && n.prototype.constructor, !n.Constructor || n.Constructor === Object) return a(o, n);
        if (mr(o)) return c(o, n);
        var f = t[er(o)];
        return f ? f(o, n) : typeof o.then == "function" ? o : a(o, n)
    }
    return function(n) {
        return u(n, {
            Constructor: void 0,
            cache: Q(),
            copier: u,
            prototype: void 0
        })
    }
}

function wr(r) {
    return I(b({}, Cr, r))
}
wr({});
var A = I({});

function Pr(r) {
    const e = W(r.initialState),
        t = p(() => r.steps.map((i, h) => ({ ...i,
            id: h
        }))),
        c = V(),
        a = p(() => t.value.length),
        u = p(() => {
            const i = t.value.find(h => h.to === c.currentRoute.value.path) ? .id;
            return typeof i != "number" ? 0 : i > -1 ? i : 0
        }),
        o = p(() => (u.value + 1) / a.value * 100),
        n = l(A(e.value)),
        f = l(!1),
        w = l(!1),
        v = l(!1),
        y = {
            steps: t,
            totalSteps: a,
            currentStep: u,
            progress: o,
            data: n,
            loading: f,
            preview: w,
            complete: v,
            getStep: S,
            getNextStep: D,
            getPrevStep: U,
            goToStep: x,
            reset: N,
            handleSubmit: k
        };

    function D() {
        return u.value + 1 >= a.value ? null : S(u.value + 1)
    }

    function U() {
        return u.value - 1 < 0 ? null : S(u.value - 1)
    }

    function S(i) {
        return t.value[i]
    }

    function x(i) {
        i && c.push(i.to)
    }

    function N() {
        n.value = A(e.value), w.value = !1, v.value = !1
    }
    async function k() {
        if (!f.value) {
            f.value = !0;
            try {
                r.onSubmit && await r.onSubmit(n.value, y), v.value = !0
            } catch (i) {
                r.onError && await r.onError(i, y)
            } finally {
                f.value = !1
            }
        }
    }
    return z(R, y), y
}
const R = Symbol("multi-step-form-context");

function _r() {
    const r = K(R);
    if (!r) throw new Error("MultiStepForm: no context found, did you forget to call createMultiStepForm?");
    return r
}
export {
    Pr as c, _r as u
};