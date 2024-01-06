function Sl(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let o = 0; o < r.length; o++) n[r[o]] = !0;
    return t ? o => !!n[o.toLowerCase()] : o => !!n[o]
}
const nt = {},
    to = [],
    pn = () => {},
    v1 = () => !1,
    _1 = /^on[^a-z]/,
    pi = e => _1.test(e),
    ed = e => e.startsWith("onUpdate:"),
    lt = Object.assign,
    td = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    b1 = Object.prototype.hasOwnProperty,
    Ve = (e, t) => b1.call(e, t),
    ge = Array.isArray,
    no = e => yo(e) === "[object Map]",
    Nr = e => yo(e) === "[object Set]",
    ip = e => yo(e) === "[object Date]",
    y1 = e => yo(e) === "[object RegExp]",
    Se = e => typeof e == "function",
    ft = e => typeof e == "string",
    ti = e => typeof e == "symbol",
    ot = e => e !== null && typeof e == "object",
    nd = e => ot(e) && Se(e.then) && Se(e.catch),
    sm = Object.prototype.toString,
    yo = e => sm.call(e),
    w1 = e => yo(e).slice(8, -1),
    im = e => yo(e) === "[object Object]",
    rd = e => ft(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    qs = Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Al = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    x1 = /-(\w)/g,
    Zt = Al(e => e.replace(x1, (t, n) => n ? n.toUpperCase() : "")),
    k1 = /\B([A-Z])/g,
    an = Al(e => e.replace(k1, "-$1").toLowerCase()),
    Ll = Al(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Zi = Al(e => e ? `on${Ll(e)}` : ""),
    lo = (e, t) => !Object.is(e, t),
    ro = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    cl = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    ul = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    dl = e => {
        const t = ft(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let lp;
const tu = () => lp || (lp = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}),
    E1 = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",
    T1 = Sl(E1);

function co(e) {
    if (ge(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                o = ft(r) ? S1(r) : co(r);
            if (o)
                for (const a in o) t[a] = o[a]
        }
        return t
    } else {
        if (ft(e)) return e;
        if (ot(e)) return e
    }
}
const C1 = /;(?![^(]*\))/g,
    P1 = /:([^]+)/,
    $1 = /\/\*[^]*?\*\//g;

function S1(e) {
    const t = {};
    return e.replace($1, "").split(C1).forEach(n => {
        if (n) {
            const r = n.split(P1);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function K(e) {
    let t = "";
    if (ft(e)) t = e;
    else if (ge(e))
        for (let n = 0; n < e.length; n++) {
            const r = K(e[n]);
            r && (t += r + " ")
        } else if (ot(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function jt(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !ft(t) && (e.class = K(t)), n && (e.style = co(n)), e
}
const A1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    L1 = Sl(A1);

function lm(e) {
    return !!e || e === ""
}
const O1 = /["'&<>]/;

function cp(e) {
    const t = "" + e,
        n = O1.exec(t);
    if (!n) return t;
    let r = "",
        o, a, s = 0;
    for (a = n.index; a < t.length; a++) {
        switch (t.charCodeAt(a)) {
            case 34:
                o = "&quot;";
                break;
            case 38:
                o = "&amp;";
                break;
            case 39:
                o = "&#39;";
                break;
            case 60:
                o = "&lt;";
                break;
            case 62:
                o = "&gt;";
                break;
            default:
                continue
        }
        s !== a && (r += t.slice(s, a)), s = a + 1, r += o
    }
    return s !== a ? r + t.slice(s, a) : r
}

function R1(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = cr(e[r], t[r]);
    return n
}

function cr(e, t) {
    if (e === t) return !0;
    let n = ip(e),
        r = ip(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = ti(e), r = ti(t), n || r) return e === t;
    if (n = ge(e), r = ge(t), n || r) return n && r ? R1(e, t) : !1;
    if (n = ot(e), r = ot(t), n || r) {
        if (!n || !r) return !1;
        const o = Object.keys(e).length,
            a = Object.keys(t).length;
        if (o !== a) return !1;
        for (const s in e) {
            const i = e.hasOwnProperty(s),
                l = t.hasOwnProperty(s);
            if (i && !l || !i && l || !cr(e[s], t[s])) return !1
        }
    }
    return String(e) === String(t)
}

function Ol(e, t) {
    return e.findIndex(n => cr(n, t))
}
const it = e => ft(e) ? e : e == null ? "" : ge(e) || ot(e) && (e.toString === sm || !Se(e.toString)) ? JSON.stringify(e, cm, 2) : String(e),
    cm = (e, t) => t && t.__v_isRef ? cm(e, t.value) : no(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
    } : Nr(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : ot(t) && !ge(t) && !im(t) ? String(t) : t;
let Qt;
class um {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Qt, !t && Qt && (this.index = (Qt.scopes || (Qt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Qt;
            try {
                return Qt = this, t()
            } finally {
                Qt = n
            }
        }
    }
    on() {
        Qt = this
    }
    off() {
        Qt = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function jA(e) {
    return new um(e)
}

function dm(e, t = Qt) {
    t && t.active && t.effects.push(e)
}

function fm() {
    return Qt
}

function D1(e) {
    Qt && Qt.cleanups.push(e)
}
const od = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    pm = e => (e.w & ur) > 0,
    hm = e => (e.n & ur) > 0,
    I1 = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= ur
    },
    M1 = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const o = t[r];
                pm(o) && !hm(o) ? o.delete(e) : t[n++] = o, o.w &= ~ur, o.n &= ~ur
            }
            t.length = n
        }
    },
    fl = new WeakMap;
let zs = 0,
    ur = 1;
const nu = 30;
let dn;
const Lr = Symbol(""),
    ru = Symbol("");
class Rl {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, dm(this, r)
    }
    run() {
        if (!this.active) return this.fn();
        let t = dn,
            n = or;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = dn, dn = this, or = !0, ur = 1 << ++zs, zs <= nu ? I1(this) : up(this), this.fn()
        } finally {
            zs <= nu && M1(this), ur = 1 << --zs, dn = this.parent, or = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        dn === this ? this.deferStop = !0 : this.active && (up(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function up(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}

function BA(e, t) {
    e.effect && (e = e.effect.fn);
    const n = new Rl(e);
    t && (lt(n, t), t.scope && dm(n, t.scope)), (!t || !t.lazy) && n.run();
    const r = n.run.bind(n);
    return r.effect = n, r
}

function HA(e) {
    e.effect.stop()
}
let or = !0;
const mm = [];

function wo() {
    mm.push(or), or = !1
}

function xo() {
    const e = mm.pop();
    or = e === void 0 ? !0 : e
}

function qt(e, t, n) {
    if (or && dn) {
        let r = fl.get(e);
        r || fl.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = od()), gm(o)
    }
}

function gm(e, t) {
    let n = !1;
    zs <= nu ? hm(e) || (e.n |= ur, n = !pm(e)) : n = !e.has(dn), n && (e.add(dn), dn.deps.push(e))
}

function In(e, t, n, r, o, a) {
    const s = fl.get(e);
    if (!s) return;
    let i = [];
    if (t === "clear") i = [...s.values()];
    else if (n === "length" && ge(e)) {
        const l = Number(r);
        s.forEach((c, u) => {
            (u === "length" || u >= l) && i.push(c)
        })
    } else switch (n !== void 0 && i.push(s.get(n)), t) {
        case "add":
            ge(e) ? rd(n) && i.push(s.get("length")) : (i.push(s.get(Lr)), no(e) && i.push(s.get(ru)));
            break;
        case "delete":
            ge(e) || (i.push(s.get(Lr)), no(e) && i.push(s.get(ru)));
            break;
        case "set":
            no(e) && i.push(s.get(Lr));
            break
    }
    if (i.length === 1) i[0] && ou(i[0]);
    else {
        const l = [];
        for (const c of i) c && l.push(...c);
        ou(od(l))
    }
}

function ou(e, t) {
    const n = ge(e) ? e : [...e];
    for (const r of n) r.computed && dp(r);
    for (const r of n) r.computed || dp(r)
}

function dp(e, t) {
    (e !== dn || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function F1(e, t) {
    var n;
    return (n = fl.get(e)) == null ? void 0 : n.get(t)
}
const N1 = Sl("__proto__,__v_isRef,__isVue"),
    vm = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(ti)),
    j1 = Dl(),
    B1 = Dl(!1, !0),
    H1 = Dl(!0),
    z1 = Dl(!0, !0),
    fp = V1();

function V1() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = Be(this);
            for (let a = 0, s = this.length; a < s; a++) qt(r, "get", a + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(Be)) : o
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            wo();
            const r = Be(this)[t].apply(this, n);
            return xo(), r
        }
    }), e
}

function U1(e) {
    const t = Be(this);
    return qt(t, "has", e), t.hasOwnProperty(e)
}

function Dl(e = !1, t = !1) {
    return function(r, o, a) {
        if (o === "__v_isReactive") return !e;
        if (o === "__v_isReadonly") return e;
        if (o === "__v_isShallow") return t;
        if (o === "__v_raw" && a === (e ? t ? Em : km : t ? xm : wm).get(r)) return r;
        const s = ge(r);
        if (!e) {
            if (s && Ve(fp, o)) return Reflect.get(fp, o, a);
            if (o === "hasOwnProperty") return U1
        }
        const i = Reflect.get(r, o, a);
        return (ti(o) ? vm.has(o) : N1(o)) || (e || qt(r, "get", o), t) ? i : mt(i) ? s && rd(o) ? i : i.value : ot(i) ? e ? ko(i) : hn(i) : i
    }
}
const W1 = _m(),
    q1 = _m(!0);

function _m(e = !1) {
    return function(n, r, o, a) {
        let s = n[r];
        if (Dr(s) && mt(s) && !mt(o)) return !1;
        if (!e && (!pl(o) && !Dr(o) && (s = Be(s), o = Be(o)), !ge(n) && mt(s) && !mt(o))) return s.value = o, !0;
        const i = ge(n) && rd(r) ? Number(r) < n.length : Ve(n, r),
            l = Reflect.set(n, r, o, a);
        return n === Be(a) && (i ? lo(o, s) && In(n, "set", r, o) : In(n, "add", r, o)), l
    }
}

function K1(e, t) {
    const n = Ve(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && In(e, "delete", t, void 0), r
}

function G1(e, t) {
    const n = Reflect.has(e, t);
    return (!ti(t) || !vm.has(t)) && qt(e, "has", t), n
}

function J1(e) {
    return qt(e, "iterate", ge(e) ? "length" : Lr), Reflect.ownKeys(e)
}
const bm = {
        get: j1,
        set: W1,
        deleteProperty: K1,
        has: G1,
        ownKeys: J1
    },
    ym = {
        get: H1,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    },
    Q1 = lt({}, bm, {
        get: B1,
        set: q1
    }),
    Y1 = lt({}, ym, {
        get: z1
    }),
    ad = e => e,
    Il = e => Reflect.getPrototypeOf(e);

function Ii(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const o = Be(e),
        a = Be(t);
    n || (t !== a && qt(o, "get", t), qt(o, "get", a));
    const {
        has: s
    } = Il(o), i = r ? ad : n ? sd : ni;
    if (s.call(o, t)) return i(e.get(t));
    if (s.call(o, a)) return i(e.get(a));
    e !== o && e.get(t)
}

function Mi(e, t = !1) {
    const n = this.__v_raw,
        r = Be(n),
        o = Be(e);
    return t || (e !== o && qt(r, "has", e), qt(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o)
}

function Fi(e, t = !1) {
    return e = e.__v_raw, !t && qt(Be(e), "iterate", Lr), Reflect.get(e, "size", e)
}

function pp(e) {
    e = Be(e);
    const t = Be(this);
    return Il(t).has.call(t, e) || (t.add(e), In(t, "add", e, e)), this
}

function hp(e, t) {
    t = Be(t);
    const n = Be(this),
        {
            has: r,
            get: o
        } = Il(n);
    let a = r.call(n, e);
    a || (e = Be(e), a = r.call(n, e));
    const s = o.call(n, e);
    return n.set(e, t), a ? lo(t, s) && In(n, "set", e, t) : In(n, "add", e, t), this
}

function mp(e) {
    const t = Be(this),
        {
            has: n,
            get: r
        } = Il(t);
    let o = n.call(t, e);
    o || (e = Be(e), o = n.call(t, e)), r && r.call(t, e);
    const a = t.delete(e);
    return o && In(t, "delete", e, void 0), a
}

function gp() {
    const e = Be(this),
        t = e.size !== 0,
        n = e.clear();
    return t && In(e, "clear", void 0, void 0), n
}

function Ni(e, t) {
    return function(r, o) {
        const a = this,
            s = a.__v_raw,
            i = Be(s),
            l = t ? ad : e ? sd : ni;
        return !e && qt(i, "iterate", Lr), s.forEach((c, u) => r.call(o, l(c), l(u), a))
    }
}

function ji(e, t, n) {
    return function(...r) {
        const o = this.__v_raw,
            a = Be(o),
            s = no(a),
            i = e === "entries" || e === Symbol.iterator && s,
            l = e === "keys" && s,
            c = o[e](...r),
            u = n ? ad : t ? sd : ni;
        return !t && qt(a, "iterate", l ? ru : Lr), {
            next() {
                const {
                    value: p,
                    done: h
                } = c.next();
                return h ? {
                    value: p,
                    done: h
                } : {
                    value: i ? [u(p[0]), u(p[1])] : u(p),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function qn(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}

function X1() {
    const e = {
            get(a) {
                return Ii(this, a)
            },
            get size() {
                return Fi(this)
            },
            has: Mi,
            add: pp,
            set: hp,
            delete: mp,
            clear: gp,
            forEach: Ni(!1, !1)
        },
        t = {
            get(a) {
                return Ii(this, a, !1, !0)
            },
            get size() {
                return Fi(this)
            },
            has: Mi,
            add: pp,
            set: hp,
            delete: mp,
            clear: gp,
            forEach: Ni(!1, !0)
        },
        n = {
            get(a) {
                return Ii(this, a, !0)
            },
            get size() {
                return Fi(this, !0)
            },
            has(a) {
                return Mi.call(this, a, !0)
            },
            add: qn("add"),
            set: qn("set"),
            delete: qn("delete"),
            clear: qn("clear"),
            forEach: Ni(!0, !1)
        },
        r = {
            get(a) {
                return Ii(this, a, !0, !0)
            },
            get size() {
                return Fi(this, !0)
            },
            has(a) {
                return Mi.call(this, a, !0)
            },
            add: qn("add"),
            set: qn("set"),
            delete: qn("delete"),
            clear: qn("clear"),
            forEach: Ni(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
        e[a] = ji(a, !1, !1), n[a] = ji(a, !0, !1), t[a] = ji(a, !1, !0), r[a] = ji(a, !0, !0)
    }), [e, n, t, r]
}
const [Z1, ew, tw, nw] = X1();

function Ml(e, t) {
    const n = t ? e ? nw : tw : e ? ew : Z1;
    return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(Ve(n, o) && o in r ? n : r, o, a)
}
const rw = {
        get: Ml(!1, !1)
    },
    ow = {
        get: Ml(!1, !0)
    },
    aw = {
        get: Ml(!0, !1)
    },
    sw = {
        get: Ml(!0, !0)
    },
    wm = new WeakMap,
    xm = new WeakMap,
    km = new WeakMap,
    Em = new WeakMap;

function iw(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function lw(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : iw(w1(e))
}

function hn(e) {
    return Dr(e) ? e : Fl(e, !1, bm, rw, wm)
}

function hi(e) {
    return Fl(e, !1, Q1, ow, xm)
}

function ko(e) {
    return Fl(e, !0, ym, aw, km)
}

function zA(e) {
    return Fl(e, !0, Y1, sw, Em)
}

function Fl(e, t, n, r, o) {
    if (!ot(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const a = o.get(e);
    if (a) return a;
    const s = lw(e);
    if (s === 0) return e;
    const i = new Proxy(e, s === 2 ? r : n);
    return o.set(e, i), i
}

function oo(e) {
    return Dr(e) ? oo(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Dr(e) {
    return !!(e && e.__v_isReadonly)
}

function pl(e) {
    return !!(e && e.__v_isShallow)
}

function Tm(e) {
    return oo(e) || Dr(e)
}

function Be(e) {
    const t = e && e.__v_raw;
    return t ? Be(t) : e
}

function Cm(e) {
    return cl(e, "__v_skip", !0), e
}
const ni = e => ot(e) ? hn(e) : e,
    sd = e => ot(e) ? ko(e) : e;

function id(e) {
    or && dn && (e = Be(e), gm(e.dep || (e.dep = od())))
}

function Nl(e, t) {
    e = Be(e);
    const n = e.dep;
    n && ou(n)
}

function mt(e) {
    return !!(e && e.__v_isRef === !0)
}

function Z(e) {
    return Pm(e, !1)
}

function uo(e) {
    return Pm(e, !0)
}

function Pm(e, t) {
    return mt(e) ? e : new cw(e, t)
}
class cw {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Be(t), this._value = n ? t : ni(t)
    }
    get value() {
        return id(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || pl(t) || Dr(t);
        t = n ? t : Be(t), lo(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ni(t), Nl(this))
    }
}

function VA(e) {
    Nl(e)
}

function y(e) {
    return mt(e) ? e.value : e
}

function UA(e) {
    return Se(e) ? e() : y(e)
}
const uw = {
    get: (e, t, n) => y(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return mt(o) && !mt(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function $m(e) {
    return oo(e) ? e : new Proxy(e, uw)
}
class dw {
    constructor(t) {
        this.dep = void 0, this.__v_isRef = !0;
        const {
            get: n,
            set: r
        } = t(() => id(this), () => Nl(this));
        this._get = n, this._set = r
    }
    get value() {
        return this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function fw(e) {
    return new dw(e)
}

function WA(e) {
    const t = ge(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Sm(e, n);
    return t
}
class pw {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return F1(Be(this._object), this._key)
    }
}
class hw {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}

function jl(e, t, n) {
    return mt(e) ? e : Se(e) ? new hw(e) : ot(e) && arguments.length > 1 ? Sm(e, t, n) : Z(e)
}

function Sm(e, t, n) {
    const r = e[t];
    return mt(r) ? r : new pw(e, t, n)
}
class mw {
    constructor(t, n, r, o) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Rl(t, () => {
            this._dirty || (this._dirty = !0, Nl(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r
    }
    get value() {
        const t = Be(this);
        return id(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}

function gw(e, t, n = !1) {
    let r, o;
    const a = Se(e);
    return a ? (r = e, o = pn) : (r = e.get, o = e.set), new mw(r, o, a || !o, n)
}

function qA(e, ...t) {}

function KA(e, t) {}

function ar(e, t, n, r) {
    let o;
    try {
        o = r ? e(...r) : e()
    } catch (a) {
        Eo(a, t, n)
    }
    return o
}

function sn(e, t, n, r) {
    if (Se(e)) {
        const a = ar(e, t, n, r);
        return a && nd(a) && a.catch(s => {
            Eo(s, t, n)
        }), a
    }
    const o = [];
    for (let a = 0; a < e.length; a++) o.push(sn(e[a], t, n, r));
    return o
}

function Eo(e, t, n, r = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let a = t.parent;
        const s = t.proxy,
            i = n;
        for (; a;) {
            const c = a.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, s, i) === !1) return
            }
            a = a.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            ar(l, null, 10, [e, s, i]);
            return
        }
    }
    vw(e, n, o, r)
}

function vw(e, t, n, r = !0) {
    console.error(e)
}
let ri = !1,
    au = !1;
const Mt = [];
let wn = 0;
const ao = [];
let On = null,
    Tr = 0;
const Am = Promise.resolve();
let ld = null;

function Gt(e) {
    const t = ld || Am;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function _w(e) {
    let t = wn + 1,
        n = Mt.length;
    for (; t < n;) {
        const r = t + n >>> 1;
        oi(Mt[r]) < e ? t = r + 1 : n = r
    }
    return t
}

function Bl(e) {
    (!Mt.length || !Mt.includes(e, ri && e.allowRecurse ? wn + 1 : wn)) && (e.id == null ? Mt.push(e) : Mt.splice(_w(e.id), 0, e), Lm())
}

function Lm() {
    !ri && !au && (au = !0, ld = Am.then(Rm))
}

function bw(e) {
    const t = Mt.indexOf(e);
    t > wn && Mt.splice(t, 1)
}

function Om(e) {
    ge(e) ? ao.push(...e) : (!On || !On.includes(e, e.allowRecurse ? Tr + 1 : Tr)) && ao.push(e), Lm()
}

function vp(e, t = ri ? wn + 1 : 0) {
    for (; t < Mt.length; t++) {
        const n = Mt[t];
        n && n.pre && (Mt.splice(t, 1), t--, n())
    }
}

function hl(e) {
    if (ao.length) {
        const t = [...new Set(ao)];
        if (ao.length = 0, On) {
            On.push(...t);
            return
        }
        for (On = t, On.sort((n, r) => oi(n) - oi(r)), Tr = 0; Tr < On.length; Tr++) On[Tr]();
        On = null, Tr = 0
    }
}
const oi = e => e.id == null ? 1 / 0 : e.id,
    yw = (e, t) => {
        const n = oi(e) - oi(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function Rm(e) {
    au = !1, ri = !0, Mt.sort(yw);
    const t = pn;
    try {
        for (wn = 0; wn < Mt.length; wn++) {
            const n = Mt[wn];
            n && n.active !== !1 && ar(n, null, 14)
        }
    } finally {
        wn = 0, Mt.length = 0, hl(), ri = !1, ld = null, (Mt.length || ao.length) && Rm()
    }
}
let Lo, Bi = [];

function ww(e, t) {
    var n, r;
    Lo = e, Lo ? (Lo.enabled = !0, Bi.forEach(({
        event: o,
        args: a
    }) => Lo.emit(o, ...a)), Bi = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push(a => {
        ww(a, t)
    }), setTimeout(() => {
        Lo || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Bi = [])
    }, 3e3)) : Bi = []
}

function xw(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || nt;
    let o = n;
    const a = t.startsWith("update:"),
        s = a && t.slice(7);
    if (s && s in r) {
        const u = `${s==="modelValue"?"model":s}Modifiers`,
            {
                number: p,
                trim: h
            } = r[u] || nt;
        h && (o = n.map(v => ft(v) ? v.trim() : v)), p && (o = n.map(ul))
    }
    let i, l = r[i = Zi(t)] || r[i = Zi(Zt(t))];
    !l && a && (l = r[i = Zi(an(t))]), l && sn(l, e, 6, o);
    const c = r[i + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[i]) return;
        e.emitted[i] = !0, sn(c, e, 6, o)
    }
}

function Dm(e, t, n = !1) {
    const r = t.emitsCache,
        o = r.get(e);
    if (o !== void 0) return o;
    const a = e.emits;
    let s = {},
        i = !1;
    if (!Se(e)) {
        const l = c => {
            const u = Dm(c, t, !0);
            u && (i = !0, lt(s, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !a && !i ? (ot(e) && r.set(e, null), null) : (ge(a) ? a.forEach(l => s[l] = null) : lt(s, a), ot(e) && r.set(e, s), s)
}

function Hl(e, t) {
    return !e || !pi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, an(t)) || Ve(e, t))
}
let Ct = null,
    zl = null;

function ai(e) {
    const t = Ct;
    return Ct = e, zl = e && e.type.__scopeId || null, t
}

function GA(e) {
    zl = e
}

function JA() {
    zl = null
}
const QA = e => ye;

function ye(e, t = Ct, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
        r._d && Ap(-1);
        const a = ai(t);
        let s;
        try {
            s = e(...o)
        } finally {
            ai(a), r._d && Ap(1)
        }
        return s
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function el(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: o,
        props: a,
        propsOptions: [s],
        slots: i,
        attrs: l,
        emit: c,
        render: u,
        renderCache: p,
        data: h,
        setupState: v,
        ctx: _,
        inheritAttrs: g
    } = e;
    let P, S;
    const x = ai(e);
    try {
        if (n.shapeFlag & 4) {
            const A = o || r;
            P = Yt(u.call(A, A, p, a, v, h, _)), S = l
        } else {
            const A = t;
            P = Yt(A.length > 1 ? A(a, {
                attrs: l,
                slots: i,
                emit: c
            }) : A(a, null)), S = t.props ? l : Ew(l)
        }
    } catch (A) {
        Js.length = 0, Eo(A, e, 1), P = te(Bt)
    }
    let I = P;
    if (S && g !== !1) {
        const A = Object.keys(S),
            {
                shapeFlag: N
            } = I;
        A.length && N & 7 && (s && A.some(ed) && (S = Tw(S, s)), I = kn(I, S))
    }
    return n.dirs && (I = kn(I), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && (I.transition = n.transition), P = I, ai(x), P
}

function kw(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (Mr(r)) {
            if (r.type !== Bt || r.children === "v-if") {
                if (t) return;
                t = r
            }
        } else return
    }
    return t
}
const Ew = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || pi(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Tw = (e, t) => {
        const n = {};
        for (const r in e)(!ed(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function Cw(e, t, n) {
    const {
        props: r,
        children: o,
        component: a
    } = e, {
        props: s,
        children: i,
        patchFlag: l
    } = t, c = a.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? _p(r, s, c) : !!s;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                const h = u[p];
                if (s[h] !== r[h] && !Hl(c, h)) return !0
            }
        }
    } else return (o || i) && (!i || !i.$stable) ? !0 : r === s ? !1 : r ? s ? _p(r, s, c) : !0 : !!s;
    return !1
}

function _p(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < r.length; o++) {
        const a = r[o];
        if (t[a] !== e[a] && !Hl(n, a)) return !0
    }
    return !1
}

function cd({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const Im = e => e.__isSuspense,
    Pw = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, o, a, s, i, l, c) {
            e == null ? $w(t, n, r, o, a, s, i, l, c) : Sw(e, t, n, r, o, s, i, l, c)
        },
        hydrate: Aw,
        create: ud,
        normalize: Lw
    },
    mi = Pw;

function si(e, t) {
    const n = e.props && e.props[t];
    Se(n) && n()
}

function $w(e, t, n, r, o, a, s, i, l) {
    const {
        p: c,
        o: {
            createElement: u
        }
    } = l, p = u("div"), h = e.suspense = ud(e, o, r, t, p, n, a, s, i, l);
    c(null, h.pendingBranch = e.ssContent, p, null, r, h, a, s), h.deps > 0 ? (si(e, "onPending"), si(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, a, s), so(h, e.ssFallback)) : h.resolve(!1, !0)
}

function Sw(e, t, n, r, o, a, s, i, {
    p: l,
    um: c,
    o: {
        createElement: u
    }
}) {
    const p = t.suspense = e.suspense;
    p.vnode = t, t.el = e.el;
    const h = t.ssContent,
        v = t.ssFallback,
        {
            activeBranch: _,
            pendingBranch: g,
            isInFallback: P,
            isHydrating: S
        } = p;
    if (g) p.pendingBranch = h, fn(h, g) ? (l(g, h, p.hiddenContainer, null, o, p, a, s, i), p.deps <= 0 ? p.resolve() : P && (l(_, v, n, r, o, null, a, s, i), so(p, v))) : (p.pendingId++, S ? (p.isHydrating = !1, p.activeBranch = g) : c(g, o, p), p.deps = 0, p.effects.length = 0, p.hiddenContainer = u("div"), P ? (l(null, h, p.hiddenContainer, null, o, p, a, s, i), p.deps <= 0 ? p.resolve() : (l(_, v, n, r, o, null, a, s, i), so(p, v))) : _ && fn(h, _) ? (l(_, h, n, r, o, p, a, s, i), p.resolve(!0)) : (l(null, h, p.hiddenContainer, null, o, p, a, s, i), p.deps <= 0 && p.resolve()));
    else if (_ && fn(h, _)) l(_, h, n, r, o, p, a, s, i), so(p, h);
    else if (si(t, "onPending"), p.pendingBranch = h, p.pendingId++, l(null, h, p.hiddenContainer, null, o, p, a, s, i), p.deps <= 0) p.resolve();
    else {
        const {
            timeout: x,
            pendingId: I
        } = p;
        x > 0 ? setTimeout(() => {
            p.pendingId === I && p.fallback(v)
        }, x) : x === 0 && p.fallback(v)
    }
}

function ud(e, t, n, r, o, a, s, i, l, c, u = !1) {
    const {
        p,
        m: h,
        um: v,
        n: _,
        o: {
            parentNode: g,
            remove: P
        }
    } = c;
    let S;
    const x = Ow(e);
    x && t ? .pendingBranch && (S = t.pendingId, t.deps++);
    const I = e.props ? dl(e.props.timeout) : void 0,
        A = {
            vnode: e,
            parent: t,
            parentComponent: n,
            isSVG: s,
            container: r,
            hiddenContainer: o,
            anchor: a,
            deps: 0,
            pendingId: 0,
            timeout: typeof I == "number" ? I : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(N = !1, M = !1) {
                const {
                    vnode: z,
                    activeBranch: F,
                    pendingBranch: le,
                    pendingId: oe,
                    effects: we,
                    parentComponent: ae,
                    container: fe
                } = A;
                if (A.isHydrating) A.isHydrating = !1;
                else if (!N) {
                    const Ae = F && le.transition && le.transition.mode === "out-in";
                    Ae && (F.transition.afterLeave = () => {
                        oe === A.pendingId && h(le, fe, _e, 0)
                    });
                    let {
                        anchor: _e
                    } = A;
                    F && (_e = _(F), v(F, ae, A, !0)), Ae || h(le, fe, _e, 0)
                }
                so(A, le), A.pendingBranch = null, A.isInFallback = !1;
                let ue = A.parent,
                    We = !1;
                for (; ue;) {
                    if (ue.pendingBranch) {
                        ue.effects.push(...we), We = !0;
                        break
                    }
                    ue = ue.parent
                }
                We || Om(we), A.effects = [], x && t && t.pendingBranch && S === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), si(z, "onResolve")
            },
            fallback(N) {
                if (!A.pendingBranch) return;
                const {
                    vnode: M,
                    activeBranch: z,
                    parentComponent: F,
                    container: le,
                    isSVG: oe
                } = A;
                si(M, "onFallback");
                const we = _(z),
                    ae = () => {
                        A.isInFallback && (p(null, N, le, we, F, null, oe, i, l), so(A, N))
                    },
                    fe = N.transition && N.transition.mode === "out-in";
                fe && (z.transition.afterLeave = ae), A.isInFallback = !0, v(z, F, null, !0), fe || ae()
            },
            move(N, M, z) {
                A.activeBranch && h(A.activeBranch, N, M, z), A.container = N
            },
            next() {
                return A.activeBranch && _(A.activeBranch)
            },
            registerDep(N, M) {
                const z = !!A.pendingBranch;
                z && A.deps++;
                const F = N.vnode.el;
                N.asyncDep.catch(le => {
                    Eo(le, N, 0)
                }).then(le => {
                    if (N.isUnmounted || A.isUnmounted || A.pendingId !== N.suspenseId) return;
                    N.asyncResolved = !0;
                    const {
                        vnode: oe
                    } = N;
                    fu(N, le, !1), F && (oe.el = F);
                    const we = !F && N.subTree.el;
                    M(N, oe, g(F || N.subTree.el), F ? null : _(N.subTree), A, s, l), we && P(we), cd(N, oe.el), z && --A.deps === 0 && A.resolve()
                })
            },
            unmount(N, M) {
                A.isUnmounted = !0, A.activeBranch && v(A.activeBranch, n, N, M), A.pendingBranch && v(A.pendingBranch, n, N, M)
            }
        };
    return A
}

function Aw(e, t, n, r, o, a, s, i, l) {
    const c = t.suspense = ud(t, r, n, e.parentNode, document.createElement("div"), null, o, a, s, i, !0),
        u = l(e, c.pendingBranch = t.ssContent, n, c, a, s);
    return c.deps === 0 && c.resolve(!1, !0), u
}

function Lw(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = bp(r ? n.default : n), e.ssFallback = r ? bp(n.fallback) : te(Bt)
}

function bp(e) {
    let t;
    if (Se(e)) {
        const n = Ir && e._c;
        n && (e._d = !1, R()), e = e(), n && (e._d = !0, t = Ut, rg())
    }
    return ge(e) && (e = kw(e)), e = Yt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function Mm(e, t) {
    t && t.pendingBranch ? ge(e) ? t.effects.push(...e) : t.effects.push(e) : Om(e)
}

function so(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e, o = n.el = t.el;
    r && r.subTree === n && (r.vnode.el = o, cd(r, o))
}

function Ow(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}

function en(e, t) {
    return gi(e, null, t)
}

function Rw(e, t) {
    return gi(e, null, {
        flush: "post"
    })
}

function YA(e, t) {
    return gi(e, null, {
        flush: "sync"
    })
}
const Hi = {};

function Ue(e, t, n) {
    return gi(e, t, n)
}

function gi(e, t, {
    immediate: n,
    deep: r,
    flush: o,
    onTrack: a,
    onTrigger: s
} = nt) {
    var i;
    const l = fm() === ((i = bt) == null ? void 0 : i.scope) ? bt : null;
    let c, u = !1,
        p = !1;
    if (mt(e) ? (c = () => e.value, u = pl(e)) : oo(e) ? (c = () => e, r = !0) : ge(e) ? (p = !0, u = e.some(A => oo(A) || pl(A)), c = () => e.map(A => {
            if (mt(A)) return A.value;
            if (oo(A)) return $r(A);
            if (Se(A)) return ar(A, l, 2)
        })) : Se(e) ? t ? c = () => ar(e, l, 2) : c = () => {
            if (!(l && l.isUnmounted)) return h && h(), sn(e, l, 3, [v])
        } : c = pn, t && r) {
        const A = c;
        c = () => $r(A())
    }
    let h, v = A => {
            h = x.onStop = () => {
                ar(A, l, 4)
            }
        },
        _;
    if (ho)
        if (v = pn, t ? n && sn(t, l, 3, [c(), p ? [] : void 0, v]) : c(), o === "sync") {
            const A = wx();
            _ = A.__watcherHandles || (A.__watcherHandles = [])
        } else return pn;
    let g = p ? new Array(e.length).fill(Hi) : Hi;
    const P = () => {
        if (x.active)
            if (t) {
                const A = x.run();
                (r || u || (p ? A.some((N, M) => lo(N, g[M])) : lo(A, g))) && (h && h(), sn(t, l, 3, [A, g === Hi ? void 0 : p && g[0] === Hi ? [] : g, v]), g = A)
            } else x.run()
    };
    P.allowRecurse = !!t;
    let S;
    o === "sync" ? S = P : o === "post" ? S = () => Ot(P, l && l.suspense) : (P.pre = !0, l && (P.id = l.uid), S = () => Bl(P));
    const x = new Rl(c, S);
    t ? n ? P() : g = x.run() : o === "post" ? Ot(x.run.bind(x), l && l.suspense) : x.run();
    const I = () => {
        x.stop(), l && l.scope && td(l.scope.effects, x)
    };
    return _ && _.push(I), I
}

function Dw(e, t, n) {
    const r = this.proxy,
        o = ft(e) ? e.includes(".") ? Fm(r, e) : () => r[e] : e.bind(r, r);
    let a;
    Se(t) ? a = t : (a = t.handler, n = t);
    const s = bt;
    dr(this);
    const i = gi(o, a.bind(r), n);
    return s ? dr(s) : sr(), i
}

function Fm(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++) r = r[n[o]];
        return r
    }
}

function $r(e, t) {
    if (!ot(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), mt(e)) $r(e.value, t);
    else if (ge(e))
        for (let n = 0; n < e.length; n++) $r(e[n], t);
    else if (Nr(e) || no(e)) e.forEach(n => {
        $r(n, t)
    });
    else if (im(e))
        for (const n in e) $r(e[n], t);
    return e
}

function dd(e, t) {
    const n = Ct;
    if (n === null) return e;
    const r = Kl(n) || n.proxy,
        o = e.dirs || (e.dirs = []);
    for (let a = 0; a < t.length; a++) {
        let [s, i, l, c = nt] = t[a];
        s && (Se(s) && (s = {
            mounted: s,
            updated: s
        }), s.deep && $r(i), o.push({
            dir: s,
            instance: r,
            value: i,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function yn(e, t, n, r) {
    const o = e.dirs,
        a = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const i = o[s];
        a && (i.oldValue = a[s].value);
        let l = i.dir[r];
        l && (wo(), sn(l, n, 8, [e.el, i, e, t]), xo())
    }
}

function Nm() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return vt(() => {
        e.isMounted = !0
    }), Fn(() => {
        e.isUnmounting = !0
    }), e
}
const on = [Function, Array],
    jm = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: on,
        onEnter: on,
        onAfterEnter: on,
        onEnterCancelled: on,
        onBeforeLeave: on,
        onLeave: on,
        onAfterLeave: on,
        onLeaveCancelled: on,
        onBeforeAppear: on,
        onAppear: on,
        onAfterAppear: on,
        onAppearCancelled: on
    },
    Iw = {
        name: "BaseTransition",
        props: jm,
        setup(e, {
            slots: t
        }) {
            const n = Dt(),
                r = Nm();
            let o;
            return () => {
                const a = t.default && fd(t.default(), !0);
                if (!a || !a.length) return;
                let s = a[0];
                if (a.length > 1) {
                    for (const g of a)
                        if (g.type !== Bt) {
                            s = g;
                            break
                        }
                }
                const i = Be(e),
                    {
                        mode: l
                    } = i;
                if (r.isLeaving) return Rc(s);
                const c = yp(s);
                if (!c) return Rc(s);
                const u = ii(c, i, r, n);
                fo(c, u);
                const p = n.subTree,
                    h = p && yp(p);
                let v = !1;
                const {
                    getTransitionKey: _
                } = c.type;
                if (_) {
                    const g = _();
                    o === void 0 ? o = g : g !== o && (o = g, v = !0)
                }
                if (h && h.type !== Bt && (!fn(c, h) || v)) {
                    const g = ii(h, i, r, n);
                    if (fo(h, g), l === "out-in") return r.isLeaving = !0, g.afterLeave = () => {
                        r.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, Rc(s);
                    l === "in-out" && c.type !== Bt && (g.delayLeave = (P, S, x) => {
                        const I = Bm(r, h);
                        I[String(h.key)] = h, P._leaveCb = () => {
                            S(), P._leaveCb = void 0, delete u.delayedLeave
                        }, u.delayedLeave = x
                    })
                }
                return s
            }
        }
    },
    Mw = Iw;

function Bm(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function ii(e, t, n, r) {
    const {
        appear: o,
        mode: a,
        persisted: s = !1,
        onBeforeEnter: i,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: p,
        onLeave: h,
        onAfterLeave: v,
        onLeaveCancelled: _,
        onBeforeAppear: g,
        onAppear: P,
        onAfterAppear: S,
        onAppearCancelled: x
    } = t, I = String(e.key), A = Bm(n, e), N = (F, le) => {
        F && sn(F, r, 9, le)
    }, M = (F, le) => {
        const oe = le[1];
        N(F, le), ge(F) ? F.every(we => we.length <= 1) && oe() : F.length <= 1 && oe()
    }, z = {
        mode: a,
        persisted: s,
        beforeEnter(F) {
            let le = i;
            if (!n.isMounted)
                if (o) le = g || i;
                else return;
            F._leaveCb && F._leaveCb(!0);
            const oe = A[I];
            oe && fn(e, oe) && oe.el._leaveCb && oe.el._leaveCb(), N(le, [F])
        },
        enter(F) {
            let le = l,
                oe = c,
                we = u;
            if (!n.isMounted)
                if (o) le = P || l, oe = S || c, we = x || u;
                else return;
            let ae = !1;
            const fe = F._enterCb = ue => {
                ae || (ae = !0, ue ? N(we, [F]) : N(oe, [F]), z.delayedLeave && z.delayedLeave(), F._enterCb = void 0)
            };
            le ? M(le, [F, fe]) : fe()
        },
        leave(F, le) {
            const oe = String(e.key);
            if (F._enterCb && F._enterCb(!0), n.isUnmounting) return le();
            N(p, [F]);
            let we = !1;
            const ae = F._leaveCb = fe => {
                we || (we = !0, le(), fe ? N(_, [F]) : N(v, [F]), F._leaveCb = void 0, A[oe] === e && delete A[oe])
            };
            A[oe] = e, h ? M(h, [F, ae]) : ae()
        },
        clone(F) {
            return ii(F, t, n, r)
        }
    };
    return z
}

function Rc(e) {
    if (vi(e)) return e = kn(e), e.children = null, e
}

function yp(e) {
    return vi(e) ? e.children ? e.children[0] : void 0 : e
}

function fo(e, t) {
    e.shapeFlag & 6 && e.component ? fo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function fd(e, t = !1, n) {
    let r = [],
        o = 0;
    for (let a = 0; a < e.length; a++) {
        let s = e[a];
        const i = n == null ? s.key : String(n) + String(s.key != null ? s.key : a);
        s.type === Le ? (s.patchFlag & 128 && o++, r = r.concat(fd(s.children, t, i))) : (t || s.type !== Bt) && r.push(i != null ? kn(s, {
            key: i
        }) : s)
    }
    if (o > 1)
        for (let a = 0; a < r.length; a++) r[a].patchFlag = -2;
    return r
}

function be(e, t) {
    return Se(e) ? (() => lt({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const Or = e => !!e.type.__asyncLoader;

function se(e) {
    Se(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: o = 200,
        timeout: a,
        suspensible: s = !0,
        onError: i
    } = e;
    let l = null,
        c, u = 0;
    const p = () => (u++, l = null, h()),
        h = () => {
            let v;
            return l || (v = l = t().catch(_ => {
                if (_ = _ instanceof Error ? _ : new Error(String(_)), i) return new Promise((g, P) => {
                    i(_, () => g(p()), () => P(_), u + 1)
                });
                throw _
            }).then(_ => v !== l && l ? l : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), c = _, _)))
        };
    return be({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        get __asyncResolved() {
            return c
        },
        setup() {
            const v = bt;
            if (c) return () => Dc(c, v);
            const _ = x => {
                l = null, Eo(x, v, 13, !r)
            };
            if (s && v.suspense || ho) return h().then(x => () => Dc(x, v)).catch(x => (_(x), () => r ? te(r, {
                error: x
            }) : null));
            const g = Z(!1),
                P = Z(),
                S = Z(!!o);
            return o && setTimeout(() => {
                S.value = !1
            }, o), a != null && setTimeout(() => {
                if (!g.value && !P.value) {
                    const x = new Error(`Async component timed out after ${a}ms.`);
                    _(x), P.value = x
                }
            }, a), h().then(() => {
                g.value = !0, v.parent && vi(v.parent.vnode) && Bl(v.parent.update)
            }).catch(x => {
                _(x), P.value = x
            }), () => {
                if (g.value && c) return Dc(c, v);
                if (P.value && r) return te(r, {
                    error: P.value
                });
                if (n && !S.value) return te(n)
            }
        }
    })
}

function Dc(e, t) {
    const {
        ref: n,
        props: r,
        children: o,
        ce: a
    } = t.vnode, s = te(e, r, o);
    return s.ref = n, s.ce = a, delete t.vnode.ce, s
}
const vi = e => e.type.__isKeepAlive,
    Fw = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = Dt(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const x = t.default && t.default();
                return x && x.length === 1 ? x[0] : x
            };
            const o = new Map,
                a = new Set;
            let s = null;
            const i = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: c,
                        um: u,
                        o: {
                            createElement: p
                        }
                    }
                } = r,
                h = p("div");
            r.activate = (x, I, A, N, M) => {
                const z = x.component;
                c(x, I, A, 0, i), l(z.vnode, x, I, A, z, i, N, x.slotScopeIds, M), Ot(() => {
                    z.isDeactivated = !1, z.a && ro(z.a);
                    const F = x.props && x.props.onVnodeMounted;
                    F && Vt(F, z.parent, x)
                }, i)
            }, r.deactivate = x => {
                const I = x.component;
                c(x, h, null, 1, i), Ot(() => {
                    I.da && ro(I.da);
                    const A = x.props && x.props.onVnodeUnmounted;
                    A && Vt(A, I.parent, x), I.isDeactivated = !0
                }, i)
            };

            function v(x) {
                Ic(x), u(x, n, i, !0)
            }

            function _(x) {
                o.forEach((I, A) => {
                    const N = hu(I.type);
                    N && (!x || !x(N)) && g(A)
                })
            }

            function g(x) {
                const I = o.get(x);
                !s || !fn(I, s) ? v(I) : s && Ic(s), o.delete(x), a.delete(x)
            }
            Ue(() => [e.include, e.exclude], ([x, I]) => {
                x && _(A => Vs(x, A)), I && _(A => !Vs(I, A))
            }, {
                flush: "post",
                deep: !0
            });
            let P = null;
            const S = () => {
                P != null && o.set(P, Mc(n.subTree))
            };
            return vt(S), Ul(S), Fn(() => {
                o.forEach(x => {
                    const {
                        subTree: I,
                        suspense: A
                    } = n, N = Mc(I);
                    if (x.type === N.type && x.key === N.key) {
                        Ic(N);
                        const M = N.component.da;
                        M && Ot(M, A);
                        return
                    }
                    v(x)
                })
            }), () => {
                if (P = null, !t.default) return null;
                const x = t.default(),
                    I = x[0];
                if (x.length > 1) return s = null, x;
                if (!Mr(I) || !(I.shapeFlag & 4) && !(I.shapeFlag & 128)) return s = null, I;
                let A = Mc(I);
                const N = A.type,
                    M = hu(Or(A) ? A.type.__asyncResolved || {} : N),
                    {
                        include: z,
                        exclude: F,
                        max: le
                    } = e;
                if (z && (!M || !Vs(z, M)) || F && M && Vs(F, M)) return s = A, I;
                const oe = A.key == null ? N : A.key,
                    we = o.get(oe);
                return A.el && (A = kn(A), I.shapeFlag & 128 && (I.ssContent = A)), P = oe, we ? (A.el = we.el, A.component = we.component, A.transition && fo(A, A.transition), A.shapeFlag |= 512, a.delete(oe), a.add(oe)) : (a.add(oe), le && a.size > parseInt(le, 10) && g(a.values().next().value)), A.shapeFlag |= 256, s = A, Im(I.type) ? I : A
            }
        }
    },
    Hm = Fw;

function Vs(e, t) {
    return ge(e) ? e.some(n => Vs(n, t)) : ft(e) ? e.split(",").includes(t) : y1(e) ? e.test(t) : !1
}

function pd(e, t) {
    zm(e, "a", t)
}

function hd(e, t) {
    zm(e, "da", t)
}

function zm(e, t, n = bt) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (Vl(t, r, n), n) {
        let o = n.parent;
        for (; o && o.parent;) vi(o.parent.vnode) && Nw(r, t, n, o), o = o.parent
    }
}

function Nw(e, t, n, r) {
    const o = Vl(t, e, r, !0);
    Rt(() => {
        td(r[t], o)
    }, n)
}

function Ic(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Mc(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Vl(e, t, n = bt, r = !1) {
    if (n) {
        const o = n[e] || (n[e] = []),
            a = t.__weh || (t.__weh = (...s) => {
                if (n.isUnmounted) return;
                wo(), dr(n);
                const i = sn(t, n, e, s);
                return sr(), xo(), i
            });
        return r ? o.unshift(a) : o.push(a), a
    }
}
const Mn = e => (t, n = bt) => (!ho || e === "sp") && Vl(e, (...r) => t(...r), n),
    md = Mn("bm"),
    vt = Mn("m"),
    jw = Mn("bu"),
    Ul = Mn("u"),
    Fn = Mn("bum"),
    Rt = Mn("um"),
    Bw = Mn("sp"),
    Hw = Mn("rtg"),
    zw = Mn("rtc");

function Vm(e, t = bt) {
    Vl("ec", e, t)
}
const gd = "components",
    Vw = "directives";

function Wl(e, t) {
    return vd(gd, e, !0, t) || e
}
const Um = Symbol.for("v-ndc");

function dt(e) {
    return ft(e) ? vd(gd, e, !1) || e : e || Um
}

function Uw(e) {
    return vd(Vw, e)
}

function vd(e, t, n = !0, r = !1) {
    const o = Ct || bt;
    if (o) {
        const a = o.type;
        if (e === gd) {
            const i = hu(a, !1);
            if (i && (i === t || i === Zt(t) || i === Ll(Zt(t)))) return a
        }
        const s = wp(o[e] || a[e], t) || wp(o.appContext[e], t);
        return !s && r ? a : s
    }
}

function wp(e, t) {
    return e && (e[t] || e[Zt(t)] || e[Ll(Zt(t))])
}

function Pt(e, t, n, r) {
    let o;
    const a = n && n[r];
    if (ge(e) || ft(e)) {
        o = new Array(e.length);
        for (let s = 0, i = e.length; s < i; s++) o[s] = t(e[s], s, void 0, a && a[s])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let s = 0; s < e; s++) o[s] = t(s + 1, s, void 0, a && a[s])
    } else if (ot(e))
        if (e[Symbol.iterator]) o = Array.from(e, (s, i) => t(s, i, void 0, a && a[i]));
        else {
            const s = Object.keys(e);
            o = new Array(s.length);
            for (let i = 0, l = s.length; i < l; i++) {
                const c = s[i];
                o[i] = t(e[c], c, i, a && a[i])
            }
        }
    else o = [];
    return n && (n[r] = o), o
}

function XA(e, t) {
    for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (ge(r))
            for (let o = 0; o < r.length; o++) e[r[o].name] = r[o].fn;
        else r && (e[r.name] = r.key ? (...o) => {
            const a = r.fn(...o);
            return a && (a.key = r.key), a
        } : r.fn)
    }
    return e
}

function Fe(e, t, n = {}, r, o) {
    if (Ct.isCE || Ct.parent && Or(Ct.parent) && Ct.parent.isCE) return t !== "default" && (n.name = t), te("slot", n, r && r());
    let a = e[t];
    a && a._c && (a._d = !1), R();
    const s = a && Wm(a(n)),
        i = me(Le, {
            key: n.key || s && s.key || `_${t}`
        }, s || (r ? r() : []), s && e._ === 1 ? 64 : -2);
    return !o && i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), a && a._c && (a._d = !0), i
}

function Wm(e) {
    return e.some(t => Mr(t) ? !(t.type === Bt || t.type === Le && !Wm(t.children)) : !0) ? e : null
}

function ZA(e, t) {
    const n = {};
    for (const r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Zi(r)] = e[r];
    return n
}
const su = e => e ? ig(e) ? Kl(e) || e.proxy : su(e.parent) : null,
    Ks = lt(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => su(e.parent),
        $root: e => su(e.root),
        $emit: e => e.emit,
        $options: e => _d(e),
        $forceUpdate: e => e.f || (e.f = () => Bl(e.update)),
        $nextTick: e => e.n || (e.n = Gt.bind(e.proxy)),
        $watch: e => Dw.bind(e)
    }),
    Fc = (e, t) => e !== nt && !e.__isScriptSetup && Ve(e, t),
    iu = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: r,
                data: o,
                props: a,
                accessCache: s,
                type: i,
                appContext: l
            } = e;
            let c;
            if (t[0] !== "$") {
                const v = s[t];
                if (v !== void 0) switch (v) {
                    case 1:
                        return r[t];
                    case 2:
                        return o[t];
                    case 4:
                        return n[t];
                    case 3:
                        return a[t]
                } else {
                    if (Fc(r, t)) return s[t] = 1, r[t];
                    if (o !== nt && Ve(o, t)) return s[t] = 2, o[t];
                    if ((c = e.propsOptions[0]) && Ve(c, t)) return s[t] = 3, a[t];
                    if (n !== nt && Ve(n, t)) return s[t] = 4, n[t];
                    lu && (s[t] = 0)
                }
            }
            const u = Ks[t];
            let p, h;
            if (u) return t === "$attrs" && qt(e, "get", t), u(e);
            if ((p = i.__cssModules) && (p = p[t])) return p;
            if (n !== nt && Ve(n, t)) return s[t] = 4, n[t];
            if (h = l.config.globalProperties, Ve(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: o,
                ctx: a
            } = e;
            return Fc(o, t) ? (o[t] = n, !0) : r !== nt && Ve(r, t) ? (r[t] = n, !0) : Ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: o,
                propsOptions: a
            }
        }, s) {
            let i;
            return !!n[s] || e !== nt && Ve(e, s) || Fc(t, s) || (i = a[0]) && Ve(i, s) || Ve(r, s) || Ve(Ks, s) || Ve(o.config.globalProperties, s)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    },
    Ww = lt({}, iu, {
        get(e, t) {
            if (t !== Symbol.unscopables) return iu.get(e, t, e)
        },
        has(e, t) {
            return t[0] !== "_" && !T1(t)
        }
    });

function e6() {
    return null
}

function t6() {
    return null
}

function n6(e) {}

function r6(e) {}

function o6() {
    return null
}

function a6() {}

function s6(e, t) {
    return null
}

function i6() {
    return qm().slots
}

function l6() {
    return qm().attrs
}

function c6(e, t, n) {
    const r = Dt();
    if (n && n.local) {
        const o = Z(e[t]);
        return Ue(() => e[t], a => o.value = a), Ue(o, a => {
            a !== e[t] && r.emit(`update:${t}`, a)
        }), o
    } else return {
        __v_isRef: !0,
        get value() {
            return e[t]
        },
        set value(o) {
            r.emit(`update:${t}`, o)
        }
    }
}

function qm() {
    const e = Dt();
    return e.setupContext || (e.setupContext = ug(e))
}

function li(e) {
    return ge(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function u6(e, t) {
    const n = li(e);
    for (const r in t) {
        if (r.startsWith("__skip")) continue;
        let o = n[r];
        o ? ge(o) || Se(o) ? o = n[r] = {
            type: o,
            default: t[r]
        } : o.default = t[r] : o === null && (o = n[r] = {
            default: t[r]
        }), o && t[`__skip_${r}`] && (o.skipFactory = !0)
    }
    return n
}

function d6(e, t) {
    return !e || !t ? e || t : ge(e) && ge(t) ? e.concat(t) : lt({}, li(e), li(t))
}

function f6(e, t) {
    const n = {};
    for (const r in e) t.includes(r) || Object.defineProperty(n, r, {
        enumerable: !0,
        get: () => e[r]
    });
    return n
}

function qw(e) {
    const t = Dt();
    let n = e();
    return sr(), nd(n) && (n = n.catch(r => {
        throw dr(t), r
    })), [n, () => dr(t)]
}
let lu = !0;

function Kw(e) {
    const t = _d(e),
        n = e.proxy,
        r = e.ctx;
    lu = !1, t.beforeCreate && xp(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: a,
        methods: s,
        watch: i,
        provide: l,
        inject: c,
        created: u,
        beforeMount: p,
        mounted: h,
        beforeUpdate: v,
        updated: _,
        activated: g,
        deactivated: P,
        beforeDestroy: S,
        beforeUnmount: x,
        destroyed: I,
        unmounted: A,
        render: N,
        renderTracked: M,
        renderTriggered: z,
        errorCaptured: F,
        serverPrefetch: le,
        expose: oe,
        inheritAttrs: we,
        components: ae,
        directives: fe,
        filters: ue
    } = t;
    if (c && Gw(c, r, null), s)
        for (const _e in s) {
            const Ce = s[_e];
            Se(Ce) && (r[_e] = Ce.bind(n))
        }
    if (o) {
        const _e = o.call(n, n);
        ot(_e) && (e.data = hn(_e))
    }
    if (lu = !0, a)
        for (const _e in a) {
            const Ce = a[_e],
                pt = Se(Ce) ? Ce.bind(n, n) : Se(Ce.get) ? Ce.get.bind(n, n) : pn,
                gt = !Se(Ce) && Se(Ce.set) ? Ce.set.bind(n) : pn,
                St = j({
                    get: pt,
                    set: gt
                });
            Object.defineProperty(r, _e, {
                enumerable: !0,
                configurable: !0,
                get: () => St.value,
                set: at => St.value = at
            })
        }
    if (i)
        for (const _e in i) Km(i[_e], r, n, _e);
    if (l) {
        const _e = Se(l) ? l.call(n) : l;
        Reflect.ownKeys(_e).forEach(Ce => {
            $t(Ce, _e[Ce])
        })
    }
    u && xp(u, e, "c");

    function Ae(_e, Ce) {
        ge(Ce) ? Ce.forEach(pt => _e(pt.bind(n))) : Ce && _e(Ce.bind(n))
    }
    if (Ae(md, p), Ae(vt, h), Ae(jw, v), Ae(Ul, _), Ae(pd, g), Ae(hd, P), Ae(Vm, F), Ae(zw, M), Ae(Hw, z), Ae(Fn, x), Ae(Rt, A), Ae(Bw, le), ge(oe))
        if (oe.length) {
            const _e = e.exposed || (e.exposed = {});
            oe.forEach(Ce => {
                Object.defineProperty(_e, Ce, {
                    get: () => n[Ce],
                    set: pt => n[Ce] = pt
                })
            })
        } else e.exposed || (e.exposed = {});
    N && e.render === pn && (e.render = N), we != null && (e.inheritAttrs = we), ae && (e.components = ae), fe && (e.directives = fe)
}

function Gw(e, t, n = pn) {
    ge(e) && (e = cu(e));
    for (const r in e) {
        const o = e[r];
        let a;
        ot(o) ? "default" in o ? a = rt(o.from || r, o.default, !0) : a = rt(o.from || r) : a = rt(o), mt(a) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => a.value,
            set: s => a.value = s
        }) : t[r] = a
    }
}

function xp(e, t, n) {
    sn(ge(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Km(e, t, n, r) {
    const o = r.includes(".") ? Fm(n, r) : () => n[r];
    if (ft(e)) {
        const a = t[e];
        Se(a) && Ue(o, a)
    } else if (Se(e)) Ue(o, e.bind(n));
    else if (ot(e))
        if (ge(e)) e.forEach(a => Km(a, t, n, r));
        else {
            const a = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
            Se(a) && Ue(o, a, e)
        }
}

function _d(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: o,
            optionsCache: a,
            config: {
                optionMergeStrategies: s
            }
        } = e.appContext,
        i = a.get(t);
    let l;
    return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(c => ml(l, c, s, !0)), ml(l, t, s)), ot(t) && a.set(t, l), l
}

function ml(e, t, n, r = !1) {
    const {
        mixins: o,
        extends: a
    } = t;
    a && ml(e, a, n, !0), o && o.forEach(s => ml(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const i = Jw[s] || n && n[s];
            e[s] = i ? i(e[s], t[s]) : t[s]
        }
    return e
}
const Jw = {
    data: kp,
    props: Ep,
    emits: Ep,
    methods: Us,
    computed: Us,
    beforeCreate: Nt,
    created: Nt,
    beforeMount: Nt,
    mounted: Nt,
    beforeUpdate: Nt,
    updated: Nt,
    beforeDestroy: Nt,
    beforeUnmount: Nt,
    destroyed: Nt,
    unmounted: Nt,
    activated: Nt,
    deactivated: Nt,
    errorCaptured: Nt,
    serverPrefetch: Nt,
    components: Us,
    directives: Us,
    watch: Yw,
    provide: kp,
    inject: Qw
};

function kp(e, t) {
    return t ? e ? function() {
        return lt(Se(e) ? e.call(this, this) : e, Se(t) ? t.call(this, this) : t)
    } : t : e
}

function Qw(e, t) {
    return Us(cu(e), cu(t))
}

function cu(e) {
    if (ge(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Nt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Us(e, t) {
    return e ? lt(Object.create(null), e, t) : t
}

function Ep(e, t) {
    return e ? ge(e) && ge(t) ? [...new Set([...e, ...t])] : lt(Object.create(null), li(e), li(t ? ? {})) : t
}

function Yw(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = lt(Object.create(null), e);
    for (const r in t) n[r] = Nt(e[r], t[r]);
    return n
}

function Gm() {
    return {
        app: null,
        config: {
            isNativeTag: v1,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Xw = 0;

function Zw(e, t) {
    return function(r, o = null) {
        Se(r) || (r = lt({}, r)), o != null && !ot(o) && (o = null);
        const a = Gm(),
            s = new Set;
        let i = !1;
        const l = a.app = {
            _uid: Xw++,
            _component: r,
            _props: o,
            _container: null,
            _context: a,
            _instance: null,
            version: dg,
            get config() {
                return a.config
            },
            set config(c) {},
            use(c, ...u) {
                return s.has(c) || (c && Se(c.install) ? (s.add(c), c.install(l, ...u)) : Se(c) && (s.add(c), c(l, ...u))), l
            },
            mixin(c) {
                return a.mixins.includes(c) || a.mixins.push(c), l
            },
            component(c, u) {
                return u ? (a.components[c] = u, l) : a.components[c]
            },
            directive(c, u) {
                return u ? (a.directives[c] = u, l) : a.directives[c]
            },
            mount(c, u, p) {
                if (!i) {
                    const h = te(r, o);
                    return h.appContext = a, u && t ? t(h, c) : e(h, c, p), i = !0, l._container = c, c.__vue_app__ = l, Kl(h.component) || h.component.proxy
                }
            },
            unmount() {
                i && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, u) {
                return a.provides[c] = u, l
            },
            runWithContext(c) {
                ci = l;
                try {
                    return c()
                } finally {
                    ci = null
                }
            }
        };
        return l
    }
}
let ci = null;

function $t(e, t) {
    if (bt) {
        let n = bt.provides;
        const r = bt.parent && bt.parent.provides;
        r === n && (n = bt.provides = Object.create(r)), n[e] = t
    }
}

function rt(e, t, n = !1) {
    const r = bt || Ct;
    if (r || ci) {
        const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ci._context.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && Se(t) ? t.call(r && r.proxy) : t
    }
}

function Jm() {
    return !!(bt || Ct || ci)
}

function ex(e, t, n, r = !1) {
    const o = {},
        a = {};
    cl(a, ql, 1), e.propsDefaults = Object.create(null), Qm(e, t, o, a);
    for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
    n ? e.props = r ? o : hi(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a
}

function tx(e, t, n, r) {
    const {
        props: o,
        attrs: a,
        vnode: {
            patchFlag: s
        }
    } = e, i = Be(o), [l] = e.propsOptions;
    let c = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const u = e.vnode.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                let h = u[p];
                if (Hl(e.emitsOptions, h)) continue;
                const v = t[h];
                if (l)
                    if (Ve(a, h)) v !== a[h] && (a[h] = v, c = !0);
                    else {
                        const _ = Zt(h);
                        o[_] = uu(l, i, _, v, e, !1)
                    }
                else v !== a[h] && (a[h] = v, c = !0)
            }
        }
    } else {
        Qm(e, t, o, a) && (c = !0);
        let u;
        for (const p in i)(!t || !Ve(t, p) && ((u = an(p)) === p || !Ve(t, u))) && (l ? n && (n[p] !== void 0 || n[u] !== void 0) && (o[p] = uu(l, i, p, void 0, e, !0)) : delete o[p]);
        if (a !== i)
            for (const p in a)(!t || !Ve(t, p)) && (delete a[p], c = !0)
    }
    c && In(e, "set", "$attrs")
}

function Qm(e, t, n, r) {
    const [o, a] = e.propsOptions;
    let s = !1,
        i;
    if (t)
        for (let l in t) {
            if (qs(l)) continue;
            const c = t[l];
            let u;
            o && Ve(o, u = Zt(l)) ? !a || !a.includes(u) ? n[u] = c : (i || (i = {}))[u] = c : Hl(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0)
        }
    if (a) {
        const l = Be(n),
            c = i || nt;
        for (let u = 0; u < a.length; u++) {
            const p = a[u];
            n[p] = uu(o, l, p, c[p], e, !Ve(c, p))
        }
    }
    return s
}

function uu(e, t, n, r, o, a) {
    const s = e[n];
    if (s != null) {
        const i = Ve(s, "default");
        if (i && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && Se(l)) {
                const {
                    propsDefaults: c
                } = o;
                n in c ? r = c[n] : (dr(o), r = c[n] = l.call(null, t), sr())
            } else r = l
        }
        s[0] && (a && !i ? r = !1 : s[1] && (r === "" || r === an(n)) && (r = !0))
    }
    return r
}

function Ym(e, t, n = !1) {
    const r = t.propsCache,
        o = r.get(e);
    if (o) return o;
    const a = e.props,
        s = {},
        i = [];
    let l = !1;
    if (!Se(e)) {
        const u = p => {
            l = !0;
            const [h, v] = Ym(p, t, !0);
            lt(s, h), v && i.push(...v)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!a && !l) return ot(e) && r.set(e, to), to;
    if (ge(a))
        for (let u = 0; u < a.length; u++) {
            const p = Zt(a[u]);
            Tp(p) && (s[p] = nt)
        } else if (a)
            for (const u in a) {
                const p = Zt(u);
                if (Tp(p)) {
                    const h = a[u],
                        v = s[p] = ge(h) || Se(h) ? {
                            type: h
                        } : lt({}, h);
                    if (v) {
                        const _ = $p(Boolean, v.type),
                            g = $p(String, v.type);
                        v[0] = _ > -1, v[1] = g < 0 || _ < g, (_ > -1 || Ve(v, "default")) && i.push(p)
                    }
                }
            }
    const c = [s, i];
    return ot(e) && r.set(e, c), c
}

function Tp(e) {
    return e[0] !== "$"
}

function Cp(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function Pp(e, t) {
    return Cp(e) === Cp(t)
}

function $p(e, t) {
    return ge(t) ? t.findIndex(n => Pp(n, e)) : Se(t) && Pp(t, e) ? 0 : -1
}
const Xm = e => e[0] === "_" || e === "$stable",
    bd = e => ge(e) ? e.map(Yt) : [Yt(e)],
    nx = (e, t, n) => {
        if (t._n) return t;
        const r = ye((...o) => bd(t(...o)), n);
        return r._c = !1, r
    },
    Zm = (e, t, n) => {
        const r = e._ctx;
        for (const o in e) {
            if (Xm(o)) continue;
            const a = e[o];
            if (Se(a)) t[o] = nx(o, a, r);
            else if (a != null) {
                const s = bd(a);
                t[o] = () => s
            }
        }
    },
    eg = (e, t) => {
        const n = bd(t);
        e.slots.default = () => n
    },
    rx = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = Be(t), cl(t, "_", n)) : Zm(t, e.slots = {})
        } else e.slots = {}, t && eg(e, t);
        cl(e.slots, ql, 1)
    },
    ox = (e, t, n) => {
        const {
            vnode: r,
            slots: o
        } = e;
        let a = !0,
            s = nt;
        if (r.shapeFlag & 32) {
            const i = t._;
            i ? n && i === 1 ? a = !1 : (lt(o, t), !n && i === 1 && delete o._) : (a = !t.$stable, Zm(t, o)), s = t
        } else t && (eg(e, t), s = {
            default: 1
        });
        if (a)
            for (const i in o) !Xm(i) && !(i in s) && delete o[i]
    };

function gl(e, t, n, r, o = !1) {
    if (ge(e)) {
        e.forEach((h, v) => gl(h, t && (ge(t) ? t[v] : t), n, r, o));
        return
    }
    if (Or(r) && !o) return;
    const a = r.shapeFlag & 4 ? Kl(r.component) || r.component.proxy : r.el,
        s = o ? null : a,
        {
            i,
            r: l
        } = e,
        c = t && t.r,
        u = i.refs === nt ? i.refs = {} : i.refs,
        p = i.setupState;
    if (c != null && c !== l && (ft(c) ? (u[c] = null, Ve(p, c) && (p[c] = null)) : mt(c) && (c.value = null)), Se(l)) ar(l, i, 12, [s, u]);
    else {
        const h = ft(l),
            v = mt(l);
        if (h || v) {
            const _ = () => {
                if (e.f) {
                    const g = h ? Ve(p, l) ? p[l] : u[l] : l.value;
                    o ? ge(g) && td(g, a) : ge(g) ? g.includes(a) || g.push(a) : h ? (u[l] = [a], Ve(p, l) && (p[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value))
                } else h ? (u[l] = s, Ve(p, l) && (p[l] = s)) : v && (l.value = s, e.k && (u[e.k] = s))
            };
            s ? (_.id = -1, Ot(_, n)) : _()
        }
    }
}
let Kn = !1;
const zi = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    Vi = e => e.nodeType === 8;

function ax(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: o,
            nextSibling: a,
            parentNode: s,
            remove: i,
            insert: l,
            createComment: c
        }
    } = e, u = (S, x) => {
        if (!x.hasChildNodes()) {
            n(null, S, x), hl(), x._vnode = S;
            return
        }
        Kn = !1, p(x.firstChild, S, null, null, null), hl(), x._vnode = S, Kn && console.error("Hydration completed but contains mismatches.")
    }, p = (S, x, I, A, N, M = !1) => {
        const z = Vi(S) && S.data === "[",
            F = () => g(S, x, I, A, N, z),
            {
                type: le,
                ref: oe,
                shapeFlag: we,
                patchFlag: ae
            } = x;
        let fe = S.nodeType;
        x.el = S, ae === -2 && (M = !1, x.dynamicChildren = null);
        let ue = null;
        switch (le) {
            case po:
                fe !== 3 ? x.children === "" ? (l(x.el = o(""), s(S), S), ue = S) : ue = F() : (S.data !== x.children && (Kn = !0, S.data = x.children), ue = a(S));
                break;
            case Bt:
                fe !== 8 || z ? ue = F() : ue = a(S);
                break;
            case io:
                if (z && (S = a(S), fe = S.nodeType), fe === 1 || fe === 3) {
                    ue = S;
                    const We = !x.children.length;
                    for (let Ae = 0; Ae < x.staticCount; Ae++) We && (x.children += ue.nodeType === 1 ? ue.outerHTML : ue.data), Ae === x.staticCount - 1 && (x.anchor = ue), ue = a(ue);
                    return z ? a(ue) : ue
                } else F();
                break;
            case Le:
                z ? ue = _(S, x, I, A, N, M) : ue = F();
                break;
            default:
                if (we & 1) fe !== 1 || x.type.toLowerCase() !== S.tagName.toLowerCase() ? ue = F() : ue = h(S, x, I, A, N, M);
                else if (we & 6) {
                    x.slotScopeIds = N;
                    const We = s(S);
                    if (t(x, We, null, I, A, zi(We), M), ue = z ? P(S) : a(S), ue && Vi(ue) && ue.data === "teleport end" && (ue = a(ue)), Or(x)) {
                        let Ae;
                        z ? (Ae = te(Le), Ae.anchor = ue ? ue.previousSibling : We.lastChild) : Ae = S.nodeType === 3 ? et("") : te("div"), Ae.el = S, x.component.subTree = Ae
                    }
                } else we & 64 ? fe !== 8 ? ue = F() : ue = x.type.hydrate(S, x, I, A, N, M, e, v) : we & 128 && (ue = x.type.hydrate(S, x, I, A, zi(s(S)), N, M, e, p))
        }
        return oe != null && gl(oe, null, A, x), ue
    }, h = (S, x, I, A, N, M) => {
        M = M || !!x.dynamicChildren;
        const {
            type: z,
            props: F,
            patchFlag: le,
            shapeFlag: oe,
            dirs: we
        } = x, ae = z === "input" && we || z === "option";
        if (ae || le !== -1) {
            if (we && yn(x, null, I, "created"), F)
                if (ae || !M || le & 48)
                    for (const ue in F)(ae && ue.endsWith("value") || pi(ue) && !qs(ue)) && r(S, ue, null, F[ue], !1, void 0, I);
                else F.onClick && r(S, "onClick", null, F.onClick, !1, void 0, I);
            let fe;
            if ((fe = F && F.onVnodeBeforeMount) && Vt(fe, I, x), we && yn(x, null, I, "beforeMount"), ((fe = F && F.onVnodeMounted) || we) && Mm(() => {
                    fe && Vt(fe, I, x), we && yn(x, null, I, "mounted")
                }, A), oe & 16 && !(F && (F.innerHTML || F.textContent))) {
                let ue = v(S.firstChild, x, S, I, A, N, M);
                for (; ue;) {
                    Kn = !0;
                    const We = ue;
                    ue = ue.nextSibling, i(We)
                }
            } else oe & 8 && S.textContent !== x.children && (Kn = !0, S.textContent = x.children)
        }
        return S.nextSibling
    }, v = (S, x, I, A, N, M, z) => {
        z = z || !!x.dynamicChildren;
        const F = x.children,
            le = F.length;
        for (let oe = 0; oe < le; oe++) {
            const we = z ? F[oe] : F[oe] = Yt(F[oe]);
            if (S) S = p(S, we, A, N, M, z);
            else {
                if (we.type === po && !we.children) continue;
                Kn = !0, n(null, we, I, null, A, N, zi(I), M)
            }
        }
        return S
    }, _ = (S, x, I, A, N, M) => {
        const {
            slotScopeIds: z
        } = x;
        z && (N = N ? N.concat(z) : z);
        const F = s(S),
            le = v(a(S), x, F, I, A, N, M);
        return le && Vi(le) && le.data === "]" ? a(x.anchor = le) : (Kn = !0, l(x.anchor = c("]"), F, le), le)
    }, g = (S, x, I, A, N, M) => {
        if (Kn = !0, x.el = null, M) {
            const le = P(S);
            for (;;) {
                const oe = a(S);
                if (oe && oe !== le) i(oe);
                else break
            }
        }
        const z = a(S),
            F = s(S);
        return i(S), n(null, x, F, z, I, A, zi(F), N), z
    }, P = S => {
        let x = 0;
        for (; S;)
            if (S = a(S), S && Vi(S) && (S.data === "[" && x++, S.data === "]")) {
                if (x === 0) return a(S);
                x--
            }
        return S
    };
    return [u, p]
}
const Ot = Mm;

function sx(e) {
    return tg(e)
}

function ix(e) {
    return tg(e, ax)
}

function tg(e, t) {
    const n = tu();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: a,
        createElement: s,
        createText: i,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: p,
        nextSibling: h,
        setScopeId: v = pn,
        insertStaticContent: _
    } = e, g = (w, E, O, H = null, W = null, G = null, ie = !1, ee = null, ne = !!E.dynamicChildren) => {
        if (w === E) return;
        w && !fn(w, E) && (H = U(w), at(w, W, G, !0), w = null), E.patchFlag === -2 && (ne = !1, E.dynamicChildren = null);
        const {
            type: J,
            ref: ke,
            shapeFlag: ve
        } = E;
        switch (J) {
            case po:
                P(w, E, O, H);
                break;
            case Bt:
                S(w, E, O, H);
                break;
            case io:
                w == null && x(E, O, H, ie);
                break;
            case Le:
                ae(w, E, O, H, W, G, ie, ee, ne);
                break;
            default:
                ve & 1 ? N(w, E, O, H, W, G, ie, ee, ne) : ve & 6 ? fe(w, E, O, H, W, G, ie, ee, ne) : (ve & 64 || ve & 128) && J.process(w, E, O, H, W, G, ie, ee, ne, re)
        }
        ke != null && W && gl(ke, w && w.ref, G, E || w, !E)
    }, P = (w, E, O, H) => {
        if (w == null) r(E.el = i(E.children), O, H);
        else {
            const W = E.el = w.el;
            E.children !== w.children && c(W, E.children)
        }
    }, S = (w, E, O, H) => {
        w == null ? r(E.el = l(E.children || ""), O, H) : E.el = w.el
    }, x = (w, E, O, H) => {
        [w.el, w.anchor] = _(w.children, E, O, H, w.el, w.anchor)
    }, I = ({
        el: w,
        anchor: E
    }, O, H) => {
        let W;
        for (; w && w !== E;) W = h(w), r(w, O, H), w = W;
        r(E, O, H)
    }, A = ({
        el: w,
        anchor: E
    }) => {
        let O;
        for (; w && w !== E;) O = h(w), o(w), w = O;
        o(E)
    }, N = (w, E, O, H, W, G, ie, ee, ne) => {
        ie = ie || E.type === "svg", w == null ? M(E, O, H, W, G, ie, ee, ne) : le(w, E, W, G, ie, ee, ne)
    }, M = (w, E, O, H, W, G, ie, ee) => {
        let ne, J;
        const {
            type: ke,
            props: ve,
            shapeFlag: Ee,
            transition: $e,
            dirs: Oe
        } = w;
        if (ne = w.el = s(w.type, G, ve && ve.is, ve), Ee & 8 ? u(ne, w.children) : Ee & 16 && F(w.children, ne, null, H, W, G && ke !== "foreignObject", ie, ee), Oe && yn(w, null, H, "created"), z(ne, w, w.scopeId, ie, H), ve) {
            for (const Ke in ve) Ke !== "value" && !qs(Ke) && a(ne, Ke, null, ve[Ke], G, w.children, H, W, kt);
            "value" in ve && a(ne, "value", null, ve.value), (J = ve.onVnodeBeforeMount) && Vt(J, H, w)
        }
        Oe && yn(w, null, H, "beforeMount");
        const Ye = (!W || W && !W.pendingBranch) && $e && !$e.persisted;
        Ye && $e.beforeEnter(ne), r(ne, E, O), ((J = ve && ve.onVnodeMounted) || Ye || Oe) && Ot(() => {
            J && Vt(J, H, w), Ye && $e.enter(ne), Oe && yn(w, null, H, "mounted")
        }, W)
    }, z = (w, E, O, H, W) => {
        if (O && v(w, O), H)
            for (let G = 0; G < H.length; G++) v(w, H[G]);
        if (W) {
            let G = W.subTree;
            if (E === G) {
                const ie = W.vnode;
                z(w, ie, ie.scopeId, ie.slotScopeIds, W.parent)
            }
        }
    }, F = (w, E, O, H, W, G, ie, ee, ne = 0) => {
        for (let J = ne; J < w.length; J++) {
            const ke = w[J] = ee ? er(w[J]) : Yt(w[J]);
            g(null, ke, E, O, H, W, G, ie, ee)
        }
    }, le = (w, E, O, H, W, G, ie) => {
        const ee = E.el = w.el;
        let {
            patchFlag: ne,
            dynamicChildren: J,
            dirs: ke
        } = E;
        ne |= w.patchFlag & 16;
        const ve = w.props || nt,
            Ee = E.props || nt;
        let $e;
        O && br(O, !1), ($e = Ee.onVnodeBeforeUpdate) && Vt($e, O, E, w), ke && yn(E, w, O, "beforeUpdate"), O && br(O, !0);
        const Oe = W && E.type !== "foreignObject";
        if (J ? oe(w.dynamicChildren, J, ee, O, H, Oe, G) : ie || Ce(w, E, ee, null, O, H, Oe, G, !1), ne > 0) {
            if (ne & 16) we(ee, E, ve, Ee, O, H, W);
            else if (ne & 2 && ve.class !== Ee.class && a(ee, "class", null, Ee.class, W), ne & 4 && a(ee, "style", ve.style, Ee.style, W), ne & 8) {
                const Ye = E.dynamicProps;
                for (let Ke = 0; Ke < Ye.length; Ke++) {
                    const ht = Ye[Ke],
                        Ht = ve[ht],
                        Bn = Ee[ht];
                    (Bn !== Ht || ht === "value") && a(ee, ht, Ht, Bn, W, w.children, O, H, kt)
                }
            }
            ne & 1 && w.children !== E.children && u(ee, E.children)
        } else !ie && J == null && we(ee, E, ve, Ee, O, H, W);
        (($e = Ee.onVnodeUpdated) || ke) && Ot(() => {
            $e && Vt($e, O, E, w), ke && yn(E, w, O, "updated")
        }, H)
    }, oe = (w, E, O, H, W, G, ie) => {
        for (let ee = 0; ee < E.length; ee++) {
            const ne = w[ee],
                J = E[ee],
                ke = ne.el && (ne.type === Le || !fn(ne, J) || ne.shapeFlag & 70) ? p(ne.el) : O;
            g(ne, J, ke, null, H, W, G, ie, !0)
        }
    }, we = (w, E, O, H, W, G, ie) => {
        if (O !== H) {
            if (O !== nt)
                for (const ee in O) !qs(ee) && !(ee in H) && a(w, ee, O[ee], null, ie, E.children, W, G, kt);
            for (const ee in H) {
                if (qs(ee)) continue;
                const ne = H[ee],
                    J = O[ee];
                ne !== J && ee !== "value" && a(w, ee, J, ne, ie, E.children, W, G, kt)
            }
            "value" in H && a(w, "value", O.value, H.value)
        }
    }, ae = (w, E, O, H, W, G, ie, ee, ne) => {
        const J = E.el = w ? w.el : i(""),
            ke = E.anchor = w ? w.anchor : i("");
        let {
            patchFlag: ve,
            dynamicChildren: Ee,
            slotScopeIds: $e
        } = E;
        $e && (ee = ee ? ee.concat($e) : $e), w == null ? (r(J, O, H), r(ke, O, H), F(E.children, O, ke, W, G, ie, ee, ne)) : ve > 0 && ve & 64 && Ee && w.dynamicChildren ? (oe(w.dynamicChildren, Ee, O, W, G, ie, ee), (E.key != null || W && E === W.subTree) && yd(w, E, !0)) : Ce(w, E, O, ke, W, G, ie, ee, ne)
    }, fe = (w, E, O, H, W, G, ie, ee, ne) => {
        E.slotScopeIds = ee, w == null ? E.shapeFlag & 512 ? W.ctx.activate(E, O, H, ie, ne) : ue(E, O, H, W, G, ie, ne) : We(w, E, ne)
    }, ue = (w, E, O, H, W, G, ie) => {
        const ee = w.component = sg(w, H, W);
        if (vi(w) && (ee.ctx.renderer = re), lg(ee), ee.asyncDep) {
            if (W && W.registerDep(ee, Ae), !w.el) {
                const ne = ee.subTree = te(Bt);
                S(null, ne, E, O)
            }
            return
        }
        Ae(ee, w, E, O, W, G, ie)
    }, We = (w, E, O) => {
        const H = E.component = w.component;
        if (Cw(w, E, O))
            if (H.asyncDep && !H.asyncResolved) {
                _e(H, E, O);
                return
            } else H.next = E, bw(H.update), H.update();
        else E.el = w.el, H.vnode = E
    }, Ae = (w, E, O, H, W, G, ie) => {
        const ee = () => {
                if (w.isMounted) {
                    let {
                        next: ke,
                        bu: ve,
                        u: Ee,
                        parent: $e,
                        vnode: Oe
                    } = w, Ye = ke, Ke;
                    br(w, !1), ke ? (ke.el = Oe.el, _e(w, ke, ie)) : ke = Oe, ve && ro(ve), (Ke = ke.props && ke.props.onVnodeBeforeUpdate) && Vt(Ke, $e, ke, Oe), br(w, !0);
                    const ht = el(w),
                        Ht = w.subTree;
                    w.subTree = ht, g(Ht, ht, p(Ht.el), U(Ht), w, W, G), ke.el = ht.el, Ye === null && cd(w, ht.el), Ee && Ot(Ee, W), (Ke = ke.props && ke.props.onVnodeUpdated) && Ot(() => Vt(Ke, $e, ke, Oe), W)
                } else {
                    let ke;
                    const {
                        el: ve,
                        props: Ee
                    } = E, {
                        bm: $e,
                        m: Oe,
                        parent: Ye
                    } = w, Ke = Or(E);
                    if (br(w, !1), $e && ro($e), !Ke && (ke = Ee && Ee.onVnodeBeforeMount) && Vt(ke, Ye, E), br(w, !0), ve && qe) {
                        const ht = () => {
                            w.subTree = el(w), qe(ve, w.subTree, w, W, null)
                        };
                        Ke ? E.type.__asyncLoader().then(() => !w.isUnmounted && ht()) : ht()
                    } else {
                        const ht = w.subTree = el(w);
                        g(null, ht, O, H, w, W, G), E.el = ht.el
                    }
                    if (Oe && Ot(Oe, W), !Ke && (ke = Ee && Ee.onVnodeMounted)) {
                        const ht = E;
                        Ot(() => Vt(ke, Ye, ht), W)
                    }(E.shapeFlag & 256 || Ye && Or(Ye.vnode) && Ye.vnode.shapeFlag & 256) && w.a && Ot(w.a, W), w.isMounted = !0, E = O = H = null
                }
            },
            ne = w.effect = new Rl(ee, () => Bl(J), w.scope),
            J = w.update = () => ne.run();
        J.id = w.uid, br(w, !0), J()
    }, _e = (w, E, O) => {
        E.component = w;
        const H = w.vnode.props;
        w.vnode = E, w.next = null, tx(w, E.props, H, O), ox(w, E.children, O), wo(), vp(), xo()
    }, Ce = (w, E, O, H, W, G, ie, ee, ne = !1) => {
        const J = w && w.children,
            ke = w ? w.shapeFlag : 0,
            ve = E.children,
            {
                patchFlag: Ee,
                shapeFlag: $e
            } = E;
        if (Ee > 0) {
            if (Ee & 128) {
                gt(J, ve, O, H, W, G, ie, ee, ne);
                return
            } else if (Ee & 256) {
                pt(J, ve, O, H, W, G, ie, ee, ne);
                return
            }
        }
        $e & 8 ? (ke & 16 && kt(J, W, G), ve !== J && u(O, ve)) : ke & 16 ? $e & 16 ? gt(J, ve, O, H, W, G, ie, ee, ne) : kt(J, W, G, !0) : (ke & 8 && u(O, ""), $e & 16 && F(ve, O, H, W, G, ie, ee, ne))
    }, pt = (w, E, O, H, W, G, ie, ee, ne) => {
        w = w || to, E = E || to;
        const J = w.length,
            ke = E.length,
            ve = Math.min(J, ke);
        let Ee;
        for (Ee = 0; Ee < ve; Ee++) {
            const $e = E[Ee] = ne ? er(E[Ee]) : Yt(E[Ee]);
            g(w[Ee], $e, O, null, W, G, ie, ee, ne)
        }
        J > ke ? kt(w, W, G, !0, !1, ve) : F(E, O, H, W, G, ie, ee, ne, ve)
    }, gt = (w, E, O, H, W, G, ie, ee, ne) => {
        let J = 0;
        const ke = E.length;
        let ve = w.length - 1,
            Ee = ke - 1;
        for (; J <= ve && J <= Ee;) {
            const $e = w[J],
                Oe = E[J] = ne ? er(E[J]) : Yt(E[J]);
            if (fn($e, Oe)) g($e, Oe, O, null, W, G, ie, ee, ne);
            else break;
            J++
        }
        for (; J <= ve && J <= Ee;) {
            const $e = w[ve],
                Oe = E[Ee] = ne ? er(E[Ee]) : Yt(E[Ee]);
            if (fn($e, Oe)) g($e, Oe, O, null, W, G, ie, ee, ne);
            else break;
            ve--, Ee--
        }
        if (J > ve) {
            if (J <= Ee) {
                const $e = Ee + 1,
                    Oe = $e < ke ? E[$e].el : H;
                for (; J <= Ee;) g(null, E[J] = ne ? er(E[J]) : Yt(E[J]), O, Oe, W, G, ie, ee, ne), J++
            }
        } else if (J > Ee)
            for (; J <= ve;) at(w[J], W, G, !0), J++;
        else {
            const $e = J,
                Oe = J,
                Ye = new Map;
            for (J = Oe; J <= Ee; J++) {
                const Ft = E[J] = ne ? er(E[J]) : Yt(E[J]);
                Ft.key != null && Ye.set(Ft.key, J)
            }
            let Ke, ht = 0;
            const Ht = Ee - Oe + 1;
            let Bn = !1,
                Ti = 0;
            const Hn = new Array(Ht);
            for (J = 0; J < Ht; J++) Hn[J] = 0;
            for (J = $e; J <= ve; J++) {
                const Ft = w[J];
                if (ht >= Ht) {
                    at(Ft, W, G, !0);
                    continue
                }
                let rn;
                if (Ft.key != null) rn = Ye.get(Ft.key);
                else
                    for (Ke = Oe; Ke <= Ee; Ke++)
                        if (Hn[Ke - Oe] === 0 && fn(Ft, E[Ke])) {
                            rn = Ke;
                            break
                        }
                rn === void 0 ? at(Ft, W, G, !0) : (Hn[rn - Oe] = J + 1, rn >= Ti ? Ti = rn : Bn = !0, g(Ft, E[rn], O, null, W, G, ie, ee, ne), ht++)
            }
            const Co = Bn ? lx(Hn) : to;
            for (Ke = Co.length - 1, J = Ht - 1; J >= 0; J--) {
                const Ft = Oe + J,
                    rn = E[Ft],
                    Po = Ft + 1 < ke ? E[Ft + 1].el : H;
                Hn[J] === 0 ? g(null, rn, O, Po, W, G, ie, ee, ne) : Bn && (Ke < 0 || J !== Co[Ke] ? St(rn, O, Po, 2) : Ke--)
            }
        }
    }, St = (w, E, O, H, W = null) => {
        const {
            el: G,
            type: ie,
            transition: ee,
            children: ne,
            shapeFlag: J
        } = w;
        if (J & 6) {
            St(w.component.subTree, E, O, H);
            return
        }
        if (J & 128) {
            w.suspense.move(E, O, H);
            return
        }
        if (J & 64) {
            ie.move(w, E, O, re);
            return
        }
        if (ie === Le) {
            r(G, E, O);
            for (let ve = 0; ve < ne.length; ve++) St(ne[ve], E, O, H);
            r(w.anchor, E, O);
            return
        }
        if (ie === io) {
            I(w, E, O);
            return
        }
        if (H !== 2 && J & 1 && ee)
            if (H === 0) ee.beforeEnter(G), r(G, E, O), Ot(() => ee.enter(G), W);
            else {
                const {
                    leave: ve,
                    delayLeave: Ee,
                    afterLeave: $e
                } = ee, Oe = () => r(G, E, O), Ye = () => {
                    ve(G, () => {
                        Oe(), $e && $e()
                    })
                };
                Ee ? Ee(G, Oe, Ye) : Ye()
            }
        else r(G, E, O)
    }, at = (w, E, O, H = !1, W = !1) => {
        const {
            type: G,
            props: ie,
            ref: ee,
            children: ne,
            dynamicChildren: J,
            shapeFlag: ke,
            patchFlag: ve,
            dirs: Ee
        } = w;
        if (ee != null && gl(ee, null, O, w, !0), ke & 256) {
            E.ctx.deactivate(w);
            return
        }
        const $e = ke & 1 && Ee,
            Oe = !Or(w);
        let Ye;
        if (Oe && (Ye = ie && ie.onVnodeBeforeUnmount) && Vt(Ye, E, w), ke & 6) Hr(w.component, O, H);
        else {
            if (ke & 128) {
                w.suspense.unmount(O, H);
                return
            }
            $e && yn(w, null, E, "beforeUnmount"), ke & 64 ? w.type.remove(w, E, O, W, re, H) : J && (G !== Le || ve > 0 && ve & 64) ? kt(J, E, O, !1, !0) : (G === Le && ve & 384 || !W && ke & 16) && kt(ne, E, O), H && _n(w)
        }(Oe && (Ye = ie && ie.onVnodeUnmounted) || $e) && Ot(() => {
            Ye && Vt(Ye, E, w), $e && yn(w, null, E, "unmounted")
        }, O)
    }, _n = w => {
        const {
            type: E,
            el: O,
            anchor: H,
            transition: W
        } = w;
        if (E === Le) {
            nn(O, H);
            return
        }
        if (E === io) {
            A(w);
            return
        }
        const G = () => {
            o(O), W && !W.persisted && W.afterLeave && W.afterLeave()
        };
        if (w.shapeFlag & 1 && W && !W.persisted) {
            const {
                leave: ie,
                delayLeave: ee
            } = W, ne = () => ie(O, G);
            ee ? ee(w.el, G, ne) : ne()
        } else G()
    }, nn = (w, E) => {
        let O;
        for (; w !== E;) O = h(w), o(w), w = O;
        o(E)
    }, Hr = (w, E, O) => {
        const {
            bum: H,
            scope: W,
            update: G,
            subTree: ie,
            um: ee
        } = w;
        H && ro(H), W.stop(), G && (G.active = !1, at(ie, w, E, O)), ee && Ot(ee, E), Ot(() => {
            w.isUnmounted = !0
        }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve())
    }, kt = (w, E, O, H = !1, W = !1, G = 0) => {
        for (let ie = G; ie < w.length; ie++) at(w[ie], E, O, H, W)
    }, U = w => w.shapeFlag & 6 ? U(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : h(w.anchor || w.el), de = (w, E, O) => {
        w == null ? E._vnode && at(E._vnode, null, null, !0) : g(E._vnode || null, w, E, null, null, null, O), vp(), hl(), E._vnode = w
    }, re = {
        p: g,
        um: at,
        m: St,
        r: _n,
        mt: ue,
        mc: F,
        pc: Ce,
        pbc: oe,
        n: U,
        o: e
    };
    let xe, qe;
    return t && ([xe, qe] = t(re)), {
        render: de,
        hydrate: xe,
        createApp: Zw(de, xe)
    }
}

function br({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function yd(e, t, n = !1) {
    const r = e.children,
        o = t.children;
    if (ge(r) && ge(o))
        for (let a = 0; a < r.length; a++) {
            const s = r[a];
            let i = o[a];
            i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = er(o[a]), i.el = s.el), n || yd(s, i)), i.type === po && (i.el = s.el)
        }
}

function lx(e) {
    const t = e.slice(),
        n = [0];
    let r, o, a, s, i;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1], e[o] < c) {
                t[r] = o, n.push(r);
                continue
            }
            for (a = 0, s = n.length - 1; a < s;) i = a + s >> 1, e[n[i]] < c ? a = i + 1 : s = i;
            c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r)
        }
    }
    for (a = n.length, s = n[a - 1]; a-- > 0;) n[a] = s, s = t[s];
    return n
}
const cx = e => e.__isTeleport,
    Gs = e => e && (e.disabled || e.disabled === ""),
    Sp = e => typeof SVGElement < "u" && e instanceof SVGElement,
    du = (e, t) => {
        const n = e && e.to;
        return ft(n) ? t ? t(n) : null : n
    },
    ux = {
        __isTeleport: !0,
        process(e, t, n, r, o, a, s, i, l, c) {
            const {
                mc: u,
                pc: p,
                pbc: h,
                o: {
                    insert: v,
                    querySelector: _,
                    createText: g,
                    createComment: P
                }
            } = c, S = Gs(t.props);
            let {
                shapeFlag: x,
                children: I,
                dynamicChildren: A
            } = t;
            if (e == null) {
                const N = t.el = g(""),
                    M = t.anchor = g("");
                v(N, n, r), v(M, n, r);
                const z = t.target = du(t.props, _),
                    F = t.targetAnchor = g("");
                z && (v(F, z), s = s || Sp(z));
                const le = (oe, we) => {
                    x & 16 && u(I, oe, we, o, a, s, i, l)
                };
                S ? le(n, M) : z && le(z, F)
            } else {
                t.el = e.el;
                const N = t.anchor = e.anchor,
                    M = t.target = e.target,
                    z = t.targetAnchor = e.targetAnchor,
                    F = Gs(e.props),
                    le = F ? n : M,
                    oe = F ? N : z;
                if (s = s || Sp(M), A ? (h(e.dynamicChildren, A, le, o, a, s, i), yd(e, t, !0)) : l || p(e, t, le, oe, o, a, s, i, !1), S) F || Ui(t, n, N, c, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const we = t.target = du(t.props, _);
                    we && Ui(t, we, null, c, 0)
                } else F && Ui(t, M, z, c, 1)
            }
            ng(t)
        },
        remove(e, t, n, r, {
            um: o,
            o: {
                remove: a
            }
        }, s) {
            const {
                shapeFlag: i,
                children: l,
                anchor: c,
                targetAnchor: u,
                target: p,
                props: h
            } = e;
            if (p && a(u), (s || !Gs(h)) && (a(c), i & 16))
                for (let v = 0; v < l.length; v++) {
                    const _ = l[v];
                    o(_, t, n, !0, !!_.dynamicChildren)
                }
        },
        move: Ui,
        hydrate: dx
    };

function Ui(e, t, n, {
    o: {
        insert: r
    },
    m: o
}, a = 2) {
    a === 0 && r(e.targetAnchor, t, n);
    const {
        el: s,
        anchor: i,
        shapeFlag: l,
        children: c,
        props: u
    } = e, p = a === 2;
    if (p && r(s, t, n), (!p || Gs(u)) && l & 16)
        for (let h = 0; h < c.length; h++) o(c[h], t, n, 2);
    p && r(i, t, n)
}

function dx(e, t, n, r, o, a, {
    o: {
        nextSibling: s,
        parentNode: i,
        querySelector: l
    }
}, c) {
    const u = t.target = du(t.props, l);
    if (u) {
        const p = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Gs(t.props)) t.anchor = c(s(e), t, i(e), n, r, o, a), t.targetAnchor = p;
            else {
                t.anchor = s(e);
                let h = p;
                for (; h;)
                    if (h = s(h), h && h.nodeType === 8 && h.data === "teleport anchor") {
                        t.targetAnchor = h, u._lpa = t.targetAnchor && s(t.targetAnchor);
                        break
                    }
                c(p, t, u, n, r, o, a)
            }
        ng(t)
    }
    return t.anchor && s(t.anchor)
}
const fx = ux;

function ng(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}
const Le = Symbol.for("v-fgt"),
    po = Symbol.for("v-txt"),
    Bt = Symbol.for("v-cmt"),
    io = Symbol.for("v-stc"),
    Js = [];
let Ut = null;

function R(e = !1) {
    Js.push(Ut = e ? null : [])
}

function rg() {
    Js.pop(), Ut = Js[Js.length - 1] || null
}
let Ir = 1;

function Ap(e) {
    Ir += e
}

function og(e) {
    return e.dynamicChildren = Ir > 0 ? Ut || to : null, rg(), Ir > 0 && Ut && Ut.push(e), e
}

function Q(e, t, n, r, o, a) {
    return og(B(e, t, n, r, o, a, !0))
}

function me(e, t, n, r, o) {
    return og(te(e, t, n, r, o, !0))
}

function Mr(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function fn(e, t) {
    return e.type === t.type && e.key === t.key
}

function p6(e) {}
const ql = "__vInternal",
    ag = ({
        key: e
    }) => e ? ? null,
    tl = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? ft(e) || mt(e) || Se(e) ? {
        i: Ct,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function B(e, t = null, n = null, r = 0, o = null, a = e === Le ? 0 : 1, s = !1, i = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ag(t),
        ref: t && tl(t),
        scopeId: zl,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: a,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Ct
    };
    return i ? (wd(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ft(n) ? 8 : 16), Ir > 0 && !s && Ut && (l.patchFlag > 0 || a & 6) && l.patchFlag !== 32 && Ut.push(l), l
}
const te = px;

function px(e, t = null, n = null, r = 0, o = null, a = !1) {
    if ((!e || e === Um) && (e = Bt), Mr(e)) {
        const i = kn(e, t, !0);
        return n && wd(i, n), Ir > 0 && !a && Ut && (i.shapeFlag & 6 ? Ut[Ut.indexOf(e)] = i : Ut.push(i)), i.patchFlag |= -2, i
    }
    if (bx(e) && (e = e.__vccOpts), t) {
        t = mn(t);
        let {
            class: i,
            style: l
        } = t;
        i && !ft(i) && (t.class = K(i)), ot(l) && (Tm(l) && !ge(l) && (l = lt({}, l)), t.style = co(l))
    }
    const s = ft(e) ? 1 : Im(e) ? 128 : cx(e) ? 64 : ot(e) ? 4 : Se(e) ? 2 : 0;
    return B(e, t, n, r, o, s, a, !0)
}

function mn(e) {
    return e ? Tm(e) || ql in e ? lt({}, e) : e : null
}

function kn(e, t, n = !1) {
    const {
        props: r,
        ref: o,
        patchFlag: a,
        children: s
    } = e, i = t ? tn(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: i,
        key: i && ag(i),
        ref: t && t.ref ? n && o ? ge(o) ? o.concat(tl(t)) : [o, tl(t)] : tl(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: s,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Le ? a === -1 ? 16 : a | 16 : a,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && kn(e.ssContent),
        ssFallback: e.ssFallback && kn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function et(e = " ", t = 0) {
    return te(po, null, e, t)
}

function hx(e, t) {
    const n = te(io, null, e);
    return n.staticCount = t, n
}

function Te(e = "", t = !1) {
    return t ? (R(), me(Bt, null, e)) : te(Bt, null, e)
}

function Yt(e) {
    return e == null || typeof e == "boolean" ? te(Bt) : ge(e) ? te(Le, null, e.slice()) : typeof e == "object" ? er(e) : te(po, null, String(e))
}

function er(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : kn(e)
}

function wd(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (ge(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), wd(e, o()), o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !(ql in t) ? t._ctx = Ct : o === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else Se(t) ? (t = {
        default: t,
        _ctx: Ct
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [et(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function tn(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class") t.class !== r.class && (t.class = K([t.class, r.class]));
            else if (o === "style") t.style = co([t.style, r.style]);
        else if (pi(o)) {
            const a = t[o],
                s = r[o];
            s && a !== s && !(ge(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s)
        } else o !== "" && (t[o] = r[o])
    }
    return t
}

function Vt(e, t, n, r = null) {
    sn(e, t, 7, [n, r])
}
const mx = Gm();
let gx = 0;

function sg(e, t, n) {
    const r = e.type,
        o = (t ? t.appContext : e.appContext) || mx,
        a = {
            uid: gx++,
            vnode: e,
            type: r,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new um(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Ym(r, o),
            emitsOptions: Dm(r, o),
            emit: null,
            emitted: null,
            propsDefaults: nt,
            inheritAttrs: r.inheritAttrs,
            ctx: nt,
            data: nt,
            props: nt,
            attrs: nt,
            slots: nt,
            refs: nt,
            setupState: nt,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return a.ctx = {
        _: a
    }, a.root = t ? t.root : a, a.emit = xw.bind(null, a), e.ce && e.ce(a), a
}
let bt = null;
const Dt = () => bt || Ct;
let xd, Xr, Lp = "__VUE_INSTANCE_SETTERS__";
(Xr = tu()[Lp]) || (Xr = tu()[Lp] = []), Xr.push(e => bt = e), xd = e => {
    Xr.length > 1 ? Xr.forEach(t => t(e)) : Xr[0](e)
};
const dr = e => {
        xd(e), e.scope.on()
    },
    sr = () => {
        bt && bt.scope.off(), xd(null)
    };

function ig(e) {
    return e.vnode.shapeFlag & 4
}
let ho = !1;

function lg(e, t = !1) {
    ho = t;
    const {
        props: n,
        children: r
    } = e.vnode, o = ig(e);
    ex(e, n, o, t), rx(e, r);
    const a = o ? vx(e, t) : void 0;
    return ho = !1, a
}

function vx(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Cm(new Proxy(e.ctx, iu));
    const {
        setup: r
    } = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? ug(e) : null;
        dr(e), wo();
        const a = ar(r, e, 0, [e.props, o]);
        if (xo(), sr(), nd(a)) {
            if (a.then(sr, sr), t) return a.then(s => {
                fu(e, s, t)
            }).catch(s => {
                Eo(s, e, 0)
            });
            e.asyncDep = a
        } else fu(e, a, t)
    } else cg(e, t)
}

function fu(e, t, n) {
    Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ot(t) && (e.setupState = $m(t)), cg(e, n)
}
let vl, pu;

function h6(e) {
    vl = e, pu = t => {
        t.render._rc && (t.withProxy = new Proxy(t.ctx, Ww))
    }
}
const m6 = () => !vl;

function cg(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && vl && !r.render) {
            const o = r.template || _d(e).template;
            if (o) {
                const {
                    isCustomElement: a,
                    compilerOptions: s
                } = e.appContext.config, {
                    delimiters: i,
                    compilerOptions: l
                } = r, c = lt(lt({
                    isCustomElement: a,
                    delimiters: i
                }, s), l);
                r.render = vl(o, c)
            }
        }
        e.render = r.render || pn, pu && pu(e)
    }
    dr(e), wo(), Kw(e), xo(), sr()
}

function _x(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return qt(e, "get", "$attrs"), t[n]
        }
    }))
}

function ug(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return _x(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function Kl(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy($m(Cm(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Ks) return Ks[n](e)
        },
        has(t, n) {
            return n in t || n in Ks
        }
    }))
}

function hu(e, t = !0) {
    return Se(e) ? e.displayName || e.name : e.name || t && e.__name
}

function bx(e) {
    return Se(e) && "__vccOpts" in e
}
const j = (e, t) => gw(e, t, ho);

function Ie(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ot(t) && !ge(t) ? Mr(t) ? te(e, null, [t]) : te(e, t) : te(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mr(n) && (n = [n]), te(e, t, n))
}
const yx = Symbol.for("v-scx"),
    wx = () => rt(yx);

function g6() {}

function v6(e, t, n, r) {
    const o = n[r];
    if (o && xx(o, e)) return o;
    const a = t();
    return a.memo = e.slice(), n[r] = a
}

function xx(e, t) {
    const n = e.memo;
    if (n.length != t.length) return !1;
    for (let r = 0; r < n.length; r++)
        if (lo(n[r], t[r])) return !1;
    return Ir > 0 && Ut && Ut.push(e), !0
}
const dg = "3.3.4",
    kx = {
        createComponentInstance: sg,
        setupComponent: lg,
        renderComponentRoot: el,
        setCurrentRenderingInstance: ai,
        isVNode: Mr,
        normalizeVNode: Yt
    },
    _6 = kx,
    b6 = null,
    y6 = null,
    Ex = "http://www.w3.org/2000/svg",
    Cr = typeof document < "u" ? document : null,
    Op = Cr && Cr.createElement("template"),
    Tx = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const o = t ? Cr.createElementNS(Ex, e) : Cr.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o
        },
        createText: e => Cr.createTextNode(e),
        createComment: e => Cr.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Cr.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, o, a) {
            const s = n ? n.previousSibling : t.lastChild;
            if (o && (o === a || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)););
            else {
                Op.innerHTML = r ? `<svg>${e}</svg>` : e;
                const i = Op.content;
                if (r) {
                    const l = i.firstChild;
                    for (; l.firstChild;) i.appendChild(l.firstChild);
                    i.removeChild(l)
                }
                t.insertBefore(i, n)
            }
            return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function Cx(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Px(e, t, n) {
    const r = e.style,
        o = ft(n);
    if (n && !o) {
        if (t && !ft(t))
            for (const a in t) n[a] == null && mu(r, a, "");
        for (const a in n) mu(r, a, n[a])
    } else {
        const a = r.display;
        o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = a)
    }
}
const Rp = /\s*!important$/;

function mu(e, t, n) {
    if (ge(n)) n.forEach(r => mu(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = $x(e, t);
        Rp.test(n) ? e.setProperty(an(r), n.replace(Rp, ""), "important") : e[r] = n
    }
}
const Dp = ["Webkit", "Moz", "ms"],
    Nc = {};

function $x(e, t) {
    const n = Nc[t];
    if (n) return n;
    let r = Zt(t);
    if (r !== "filter" && r in e) return Nc[t] = r;
    r = Ll(r);
    for (let o = 0; o < Dp.length; o++) {
        const a = Dp[o] + r;
        if (a in e) return Nc[t] = a
    }
    return t
}
const Ip = "http://www.w3.org/1999/xlink";

function Sx(e, t, n, r, o) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Ip, t.slice(6, t.length)) : e.setAttributeNS(Ip, t, n);
    else {
        const a = L1(t);
        n == null || a && !lm(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n)
    }
}

function Ax(e, t, n, r, o, a, s) {
    if (t === "innerHTML" || t === "textContent") {
        r && s(r, o, a), e[t] = n ? ? "";
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        e._value = n;
        const c = i === "OPTION" ? e.getAttribute("value") : e.value,
            u = n ? ? "";
        c !== u && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = lm(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}

function Rn(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function Lx(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

function Ox(e, t, n, r, o = null) {
    const a = e._vei || (e._vei = {}),
        s = a[t];
    if (r && s) s.value = r;
    else {
        const [i, l] = Rx(t);
        if (r) {
            const c = a[t] = Mx(r, o);
            Rn(e, i, c, l)
        } else s && (Lx(e, i, s, l), a[t] = void 0)
    }
}
const Mp = /(?:Once|Passive|Capture)$/;

function Rx(e) {
    let t;
    if (Mp.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Mp);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : an(e.slice(2)), t]
}
let jc = 0;
const Dx = Promise.resolve(),
    Ix = () => jc || (Dx.then(() => jc = 0), jc = Date.now());

function Mx(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        sn(Fx(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = Ix(), n
}

function Fx(e, t) {
    if (ge(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => o => !o._stopped && r && r(o))
    } else return t
}
const Fp = /^on[a-z]/,
    Nx = (e, t, n, r, o = !1, a, s, i, l) => {
        t === "class" ? Cx(e, r, o) : t === "style" ? Px(e, n, r) : pi(t) ? ed(t) || Ox(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : jx(e, t, r, o)) ? Ax(e, t, r, a, s, i, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Sx(e, t, r, o))
    };

function jx(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Fp.test(t) && Se(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Fp.test(t) && ft(n) ? !1 : t in e
}

function Bx(e, t) {
    const n = be(e);
    class r extends kd {
        constructor(a) {
            super(n, a, t)
        }
    }
    return r.def = n, r
}
const w6 = e => Bx(e, o2),
    Hx = typeof HTMLElement < "u" ? HTMLElement : class {};
class kd extends Hx {
    constructor(t, n = {}, r) {
        super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({
            mode: "open"
        }), this._def.__asyncLoader || this._resolveProps(this._def))
    }
    connectedCallback() {
        this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef())
    }
    disconnectedCallback() {
        this._connected = !1, Gt(() => {
            this._connected || (bu(null, this.shadowRoot), this._instance = null)
        })
    }
    _resolveDef() {
        this._resolved = !0;
        for (let r = 0; r < this.attributes.length; r++) this._setAttr(this.attributes[r].name);
        new MutationObserver(r => {
            for (const o of r) this._setAttr(o.attributeName)
        }).observe(this, {
            attributes: !0
        });
        const t = (r, o = !1) => {
                const {
                    props: a,
                    styles: s
                } = r;
                let i;
                if (a && !ge(a))
                    for (const l in a) {
                        const c = a[l];
                        (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = dl(this._props[l])), (i || (i = Object.create(null)))[Zt(l)] = !0)
                    }
                this._numberProps = i, o && this._resolveProps(r), this._applyStyles(s), this._update()
            },
            n = this._def.__asyncLoader;
        n ? n().then(r => t(r, !0)) : t(this._def)
    }
    _resolveProps(t) {
        const {
            props: n
        } = t, r = ge(n) ? n : Object.keys(n || {});
        for (const o of Object.keys(this)) o[0] !== "_" && r.includes(o) && this._setProp(o, this[o], !0, !1);
        for (const o of r.map(Zt)) Object.defineProperty(this, o, {
            get() {
                return this._getProp(o)
            },
            set(a) {
                this._setProp(o, a)
            }
        })
    }
    _setAttr(t) {
        let n = this.getAttribute(t);
        const r = Zt(t);
        this._numberProps && this._numberProps[r] && (n = dl(n)), this._setProp(r, n, !1)
    }
    _getProp(t) {
        return this._props[t]
    }
    _setProp(t, n, r = !0, o = !0) {
        n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), r && (n === !0 ? this.setAttribute(an(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(an(t), n + "") : n || this.removeAttribute(an(t))))
    }
    _update() {
        bu(this._createVNode(), this.shadowRoot)
    }
    _createVNode() {
        const t = te(this._def, lt({}, this._props));
        return this._instance || (t.ce = n => {
            this._instance = n, n.isCE = !0;
            const r = (a, s) => {
                this.dispatchEvent(new CustomEvent(a, {
                    detail: s
                }))
            };
            n.emit = (a, ...s) => {
                r(a, s), an(a) !== a && r(an(a), s)
            };
            let o = this;
            for (; o = o && (o.parentNode || o.host);)
                if (o instanceof kd) {
                    n.parent = o._instance, n.provides = o._instance.provides;
                    break
                }
        }), t
    }
    _applyStyles(t) {
        t && t.forEach(n => {
            const r = document.createElement("style");
            r.textContent = n, this.shadowRoot.appendChild(r)
        })
    }
}

function x6(e = "$style") {
    {
        const t = Dt();
        if (!t) return nt;
        const n = t.type.__cssModules;
        if (!n) return nt;
        const r = n[e];
        return r || nt
    }
}

function k6(e) {
    const t = Dt();
    if (!t) return;
    const n = t.ut = (o = e(t.proxy)) => {
            Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(a => vu(a, o))
        },
        r = () => {
            const o = e(t.proxy);
            gu(t.subTree, o), n(o)
        };
    Rw(r), vt(() => {
        const o = new MutationObserver(r);
        o.observe(t.subTree.el.parentNode, {
            childList: !0
        }), Rt(() => o.disconnect())
    })
}

function gu(e, t) {
    if (e.shapeFlag & 128) {
        const n = e.suspense;
        e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
            gu(n.activeBranch, t)
        })
    }
    for (; e.component;) e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el) vu(e.el, t);
    else if (e.type === Le) e.children.forEach(n => gu(n, t));
    else if (e.type === io) {
        let {
            el: n,
            anchor: r
        } = e;
        for (; n && (vu(n, t), n !== r);) n = n.nextSibling
    }
}

function vu(e, t) {
    if (e.nodeType === 1) {
        const n = e.style;
        for (const r in t) n.setProperty(`--${r}`, t[r])
    }
}
const Gn = "transition",
    Oo = "animation",
    To = (e, {
        slots: t
    }) => Ie(Mw, pg(e), t);
To.displayName = "Transition";
const fg = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    zx = To.props = lt({}, jm, fg),
    yr = (e, t = []) => {
        ge(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Np = e => e ? ge(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function pg(e) {
    const t = {};
    for (const ae in e) ae in fg || (t[ae] = e[ae]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: o,
        enterFromClass: a = `${n}-enter-from`,
        enterActiveClass: s = `${n}-enter-active`,
        enterToClass: i = `${n}-enter-to`,
        appearFromClass: l = a,
        appearActiveClass: c = s,
        appearToClass: u = i,
        leaveFromClass: p = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: v = `${n}-leave-to`
    } = e, _ = Vx(o), g = _ && _[0], P = _ && _[1], {
        onBeforeEnter: S,
        onEnter: x,
        onEnterCancelled: I,
        onLeave: A,
        onLeaveCancelled: N,
        onBeforeAppear: M = S,
        onAppear: z = x,
        onAppearCancelled: F = I
    } = t, le = (ae, fe, ue) => {
        Zn(ae, fe ? u : i), Zn(ae, fe ? c : s), ue && ue()
    }, oe = (ae, fe) => {
        ae._isLeaving = !1, Zn(ae, p), Zn(ae, v), Zn(ae, h), fe && fe()
    }, we = ae => (fe, ue) => {
        const We = ae ? z : x,
            Ae = () => le(fe, ae, ue);
        yr(We, [fe, Ae]), jp(() => {
            Zn(fe, ae ? l : a), Ln(fe, ae ? u : i), Np(We) || Bp(fe, r, g, Ae)
        })
    };
    return lt(t, {
        onBeforeEnter(ae) {
            yr(S, [ae]), Ln(ae, a), Ln(ae, s)
        },
        onBeforeAppear(ae) {
            yr(M, [ae]), Ln(ae, l), Ln(ae, c)
        },
        onEnter: we(!1),
        onAppear: we(!0),
        onLeave(ae, fe) {
            ae._isLeaving = !0;
            const ue = () => oe(ae, fe);
            Ln(ae, p), mg(), Ln(ae, h), jp(() => {
                ae._isLeaving && (Zn(ae, p), Ln(ae, v), Np(A) || Bp(ae, r, P, ue))
            }), yr(A, [ae, ue])
        },
        onEnterCancelled(ae) {
            le(ae, !1), yr(I, [ae])
        },
        onAppearCancelled(ae) {
            le(ae, !0), yr(F, [ae])
        },
        onLeaveCancelled(ae) {
            oe(ae), yr(N, [ae])
        }
    })
}

function Vx(e) {
    if (e == null) return null;
    if (ot(e)) return [Bc(e.enter), Bc(e.leave)]; {
        const t = Bc(e);
        return [t, t]
    }
}

function Bc(e) {
    return dl(e)
}

function Ln(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function Zn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const {
        _vtc: n
    } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function jp(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Ux = 0;

function Bp(e, t, n, r) {
    const o = e._endId = ++Ux,
        a = () => {
            o === e._endId && r()
        };
    if (n) return setTimeout(a, n);
    const {
        type: s,
        timeout: i,
        propCount: l
    } = hg(e, t);
    if (!s) return r();
    const c = s + "end";
    let u = 0;
    const p = () => {
            e.removeEventListener(c, h), a()
        },
        h = v => {
            v.target === e && ++u >= l && p()
        };
    setTimeout(() => {
        u < l && p()
    }, i + 1), e.addEventListener(c, h)
}

function hg(e, t) {
    const n = window.getComputedStyle(e),
        r = _ => (n[_] || "").split(", "),
        o = r(`${Gn}Delay`),
        a = r(`${Gn}Duration`),
        s = Hp(o, a),
        i = r(`${Oo}Delay`),
        l = r(`${Oo}Duration`),
        c = Hp(i, l);
    let u = null,
        p = 0,
        h = 0;
    t === Gn ? s > 0 && (u = Gn, p = s, h = a.length) : t === Oo ? c > 0 && (u = Oo, p = c, h = l.length) : (p = Math.max(s, c), u = p > 0 ? s > c ? Gn : Oo : null, h = u ? u === Gn ? a.length : l.length : 0);
    const v = u === Gn && /\b(transform|all)(,|$)/.test(r(`${Gn}Property`).toString());
    return {
        type: u,
        timeout: p,
        propCount: h,
        hasTransform: v
    }
}

function Hp(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => zp(n) + zp(e[r])))
}

function zp(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function mg() {
    return document.body.offsetHeight
}
const gg = new WeakMap,
    vg = new WeakMap,
    _g = {
        name: "TransitionGroup",
        props: lt({}, zx, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const n = Dt(),
                r = Nm();
            let o, a;
            return Ul(() => {
                if (!o.length) return;
                const s = e.moveClass || `${e.name||"v"}-move`;
                if (!Jx(o[0].el, n.vnode.el, s)) return;
                o.forEach(qx), o.forEach(Kx);
                const i = o.filter(Gx);
                mg(), i.forEach(l => {
                    const c = l.el,
                        u = c.style;
                    Ln(c, s), u.transform = u.webkitTransform = u.transitionDuration = "";
                    const p = c._moveCb = h => {
                        h && h.target !== c || (!h || /transform$/.test(h.propertyName)) && (c.removeEventListener("transitionend", p), c._moveCb = null, Zn(c, s))
                    };
                    c.addEventListener("transitionend", p)
                })
            }), () => {
                const s = Be(e),
                    i = pg(s);
                let l = s.tag || Le;
                o = a, a = t.default ? fd(t.default()) : [];
                for (let c = 0; c < a.length; c++) {
                    const u = a[c];
                    u.key != null && fo(u, ii(u, i, r, n))
                }
                if (o)
                    for (let c = 0; c < o.length; c++) {
                        const u = o[c];
                        fo(u, ii(u, i, r, n)), gg.set(u, u.el.getBoundingClientRect())
                    }
                return te(l, null, a)
            }
        }
    },
    Wx = e => delete e.mode;
_g.props;
const E6 = _g;

function qx(e) {
    const t = e.el;
    t._moveCb && t._moveCb(), t._enterCb && t._enterCb()
}

function Kx(e) {
    vg.set(e, e.el.getBoundingClientRect())
}

function Gx(e) {
    const t = gg.get(e),
        n = vg.get(e),
        r = t.left - n.left,
        o = t.top - n.top;
    if (r || o) {
        const a = e.el.style;
        return a.transform = a.webkitTransform = `translate(${r}px,${o}px)`, a.transitionDuration = "0s", e
    }
}

function Jx(e, t, n) {
    const r = e.cloneNode();
    e._vtc && e._vtc.forEach(s => {
        s.split(/\s+/).forEach(i => i && r.classList.remove(i))
    }), n.split(/\s+/).forEach(s => s && r.classList.add(s)), r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const {
        hasTransform: a
    } = hg(r);
    return o.removeChild(r), a
}
const fr = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ge(t) ? n => ro(t, n) : t
};

function Qx(e) {
    e.target.composing = !0
}

function Vp(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const _u = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, o) {
            e._assign = fr(o);
            const a = r || o.props && o.props.type === "number";
            Rn(e, t ? "change" : "input", s => {
                if (s.target.composing) return;
                let i = e.value;
                n && (i = i.trim()), a && (i = ul(i)), e._assign(i)
            }), n && Rn(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Rn(e, "compositionstart", Qx), Rn(e, "compositionend", Vp), Rn(e, "change", Vp))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: n,
                trim: r,
                number: o
            }
        }, a) {
            if (e._assign = fr(a), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && ul(e.value) === t)) return;
            const s = t ? ? "";
            e.value !== s && (e.value = s)
        }
    },
    bg = {
        deep: !0,
        created(e, t, n) {
            e._assign = fr(n), Rn(e, "change", () => {
                const r = e._modelValue,
                    o = mo(e),
                    a = e.checked,
                    s = e._assign;
                if (ge(r)) {
                    const i = Ol(r, o),
                        l = i !== -1;
                    if (a && !l) s(r.concat(o));
                    else if (!a && l) {
                        const c = [...r];
                        c.splice(i, 1), s(c)
                    }
                } else if (Nr(r)) {
                    const i = new Set(r);
                    a ? i.add(o) : i.delete(o), s(i)
                } else s(wg(e, a))
            })
        },
        mounted: Up,
        beforeUpdate(e, t, n) {
            e._assign = fr(n), Up(e, t, n)
        }
    };

function Up(e, {
    value: t,
    oldValue: n
}, r) {
    e._modelValue = t, ge(t) ? e.checked = Ol(t, r.props.value) > -1 : Nr(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = cr(t, wg(e, !0)))
}
const yg = {
        created(e, {
            value: t
        }, n) {
            e.checked = cr(t, n.props.value), e._assign = fr(n), Rn(e, "change", () => {
                e._assign(mo(e))
            })
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n
        }, r) {
            e._assign = fr(r), t !== n && (e.checked = cr(t, r.props.value))
        }
    },
    Yx = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, r) {
            const o = Nr(t);
            Rn(e, "change", () => {
                const a = Array.prototype.filter.call(e.options, s => s.selected).map(s => n ? ul(mo(s)) : mo(s));
                e._assign(e.multiple ? o ? new Set(a) : a : a[0])
            }), e._assign = fr(r)
        },
        mounted(e, {
            value: t
        }) {
            Wp(e, t)
        },
        beforeUpdate(e, t, n) {
            e._assign = fr(n)
        },
        updated(e, {
            value: t
        }) {
            Wp(e, t)
        }
    };

function Wp(e, t) {
    const n = e.multiple;
    if (!(n && !ge(t) && !Nr(t))) {
        for (let r = 0, o = e.options.length; r < o; r++) {
            const a = e.options[r],
                s = mo(a);
            if (n) ge(t) ? a.selected = Ol(t, s) > -1 : a.selected = t.has(s);
            else if (cr(mo(a), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function mo(e) {
    return "_value" in e ? e._value : e.value
}

function wg(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const xg = {
    created(e, t, n) {
        Wi(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        Wi(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        Wi(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        Wi(e, t, n, r, "updated")
    }
};

function kg(e, t) {
    switch (e) {
        case "SELECT":
            return Yx;
        case "TEXTAREA":
            return _u;
        default:
            switch (t) {
                case "checkbox":
                    return bg;
                case "radio":
                    return yg;
                default:
                    return _u
            }
    }
}

function Wi(e, t, n, r, o) {
    const s = kg(e.tagName, n.props && n.props.type)[o];
    s && s(e, t, n, r)
}

function Xx() {
    _u.getSSRProps = ({
        value: e
    }) => ({
        value: e
    }), yg.getSSRProps = ({
        value: e
    }, t) => {
        if (t.props && cr(t.props.value, e)) return {
            checked: !0
        }
    }, bg.getSSRProps = ({
        value: e
    }, t) => {
        if (ge(e)) {
            if (t.props && Ol(e, t.props.value) > -1) return {
                checked: !0
            }
        } else if (Nr(e)) {
            if (t.props && e.has(t.props.value)) return {
                checked: !0
            }
        } else if (e) return {
            checked: !0
        }
    }, xg.getSSRProps = (e, t) => {
        if (typeof t.type != "string") return;
        const n = kg(t.type.toUpperCase(), t.props && t.props.type);
        if (n.getSSRProps) return n.getSSRProps(e, t)
    }
}
const Zx = ["ctrl", "shift", "alt", "meta"],
    e2 = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Zx.some(n => e[`${n}Key`] && !t.includes(n))
    },
    t2 = (e, t) => (n, ...r) => {
        for (let o = 0; o < t.length; o++) {
            const a = e2[t[o]];
            if (a && a(n, t)) return
        }
        return e(n, ...r)
    },
    n2 = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    T6 = (e, t) => n => {
        if (!("key" in n)) return;
        const r = an(n.key);
        if (t.some(o => o === r || n2[o] === r)) return e(n)
    },
    Eg = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ro(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Ro(e, !0), r.enter(e)) : r.leave(e, () => {
                Ro(e, !1)
            }) : Ro(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Ro(e, t)
        }
    };

function Ro(e, t) {
    e.style.display = t ? e._vod : "none"
}

function r2() {
    Eg.getSSRProps = ({
        value: e
    }) => {
        if (!e) return {
            style: {
                display: "none"
            }
        }
    }
}
const Tg = lt({
    patchProp: Nx
}, Tx);
let Qs, qp = !1;

function Cg() {
    return Qs || (Qs = sx(Tg))
}

function Pg() {
    return Qs = qp ? Qs : ix(Tg), qp = !0, Qs
}
const bu = (...e) => {
        Cg().render(...e)
    },
    o2 = (...e) => {
        Pg().hydrate(...e)
    },
    a2 = (...e) => {
        const t = Cg().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = $g(r);
            if (!o) return;
            const a = t._component;
            !Se(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
            const s = n(o, !1, o instanceof SVGElement);
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s
        }, t
    },
    s2 = (...e) => {
        const t = Pg().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = $g(r);
            if (o) return n(o, !0, o instanceof SVGElement)
        }, t
    };

function $g(e) {
    return ft(e) ? document.querySelector(e) : e
}
let Kp = !1;
const C6 = () => {
        Kp || (Kp = !0, Xx(), r2())
    },
    i2 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    l2 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    c2 = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function u2(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        d2(e);
        return
    }
    return t
}

function d2(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Sg(e, t = {}) {
    if (typeof e != "string") return e;
    const n = e.trim();
    if (e[0] === '"' && e[e.length - 1] === '"') return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true") return !0;
        if (r === "false") return !1;
        if (r === "undefined") return;
        if (r === "null") return null;
        if (r === "nan") return Number.NaN;
        if (r === "infinity") return Number.POSITIVE_INFINITY;
        if (r === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!c2.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (i2.test(e) || l2.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, u2)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const Ag = /#/g,
    Lg = /&/g,
    f2 = /\//g,
    p2 = /=/g,
    h2 = /\?/g,
    Gl = /\+/g,
    m2 = /%5e/gi,
    g2 = /%60/gi,
    v2 = /%7c/gi,
    _2 = /%20/gi,
    b2 = /%252f/gi;

function Og(e) {
    return encodeURI("" + e).replace(v2, "|")
}

function yu(e) {
    return Og(typeof e == "string" ? e : JSON.stringify(e)).replace(Gl, "%2B").replace(_2, "+").replace(Ag, "%23").replace(Lg, "%26").replace(g2, "`").replace(m2, "^")
}

function Hc(e) {
    return yu(e).replace(p2, "%3D")
}

function y2(e) {
    return Og(e).replace(Ag, "%23").replace(h2, "%3F").replace(b2, "%2F").replace(Lg, "%26").replace(Gl, "%2B")
}

function P6(e) {
    return y2(e).replace(f2, "%2F")
}

function _l(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function w2(e) {
    return _l(e.replace(Gl, " "))
}

function x2(e) {
    return _l(e.replace(Gl, " "))
}

function Rg(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const o = w2(r[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const a = x2(r[2] || "");
        t[o] === void 0 ? t[o] = a : Array.isArray(t[o]) ? t[o].push(a) : t[o] = [t[o], a]
    }
    return t
}

function k2(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Hc(e)}=${yu(n)}`).join("&") : `${Hc(e)}=${yu(t)}` : Hc(e)
}

function E2(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => k2(t, e[t])).filter(Boolean).join("&")
}
const T2 = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    C2 = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    P2 = /^([/\\]\s*){2,}[^/\\]/;

function _i(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? T2.test(e) : C2.test(e) || (t.acceptRelative ? P2.test(e) : !1)
}
const $2 = /\/$|\/\?/;

function wu(e = "", t = !1) {
    return t ? $2.test(e) : e.endsWith("/")
}

function Jl(e = "", t = !1) {
    if (!t) return (wu(e) ? e.slice(0, -1) : e) || "/";
    if (!wu(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function bl(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (wu(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}

function S2(e = "") {
    return e.startsWith("/")
}

function xu(e = "") {
    return S2(e) ? e : "/" + e
}

function Dg(e, t) {
    if (Mg(t) || _i(e)) return e;
    const n = Jl(t);
    return e.startsWith(n) ? e : bi(n, e)
}

function Gp(e, t) {
    if (Mg(t)) return e;
    const n = Jl(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function Ig(e, t) {
    const n = Ql(e),
        r = { ...Rg(n.search),
            ...t
        };
    return n.search = E2(r), R2(n)
}

function Mg(e) {
    return !e || e === "/"
}

function A2(e) {
    return e && e !== "/"
}
const L2 = /^\.?\//;

function bi(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => A2(o)))
        if (n) {
            const o = r.replace(L2, "");
            n = bl(n) + o
        } else n = r;
    return n
}

function O2(e, t, n = {}) {
    return n.trailingSlash || (e = bl(e), t = bl(t)), n.leadingSlash || (e = xu(e), t = xu(t)), n.encoding || (e = _l(e), t = _l(t)), e === t
}

function Ql(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/);
    if (n) {
        const [, p, h = ""] = n;
        return {
            protocol: p,
            pathname: h,
            href: p + h,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!_i(e, {
            acceptRelative: !0
        })) return t ? Ql(t + e) : Jp(e);
    const [, r = "", o, a = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, s = "", i = ""] = a.match(/([^#/?]*)(.*)?/) || [], {
        pathname: l,
        search: c,
        hash: u
    } = Jp(i.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: r,
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: s,
        pathname: l,
        search: c,
        hash: u
    }
}

function Jp(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function R2(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        o = e.auth ? e.auth + "@" : "",
        a = e.host || "";
    return (e.protocol ? e.protocol + "//" : "") + o + a + t + n + r
}
class D2 extends Error {
    constructor(t, n) {
        super(t, n), this.name = "FetchError", n ? .cause && !this.cause && (this.cause = n.cause)
    }
}

function I2(e) {
    const t = e.error ? .message || e.error ? .toString() || "",
        n = e.request ? .method || e.options ? .method || "GET",
        r = e.request ? .url || String(e.request) || "/",
        o = `[${n}] ${JSON.stringify(r)}`,
        a = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        s = `${o}: ${a}${t?` ${t}`:""}`,
        i = new D2(s, e.error ? {
            cause: e.error
        } : void 0);
    for (const l of ["request", "options", "response"]) Object.defineProperty(i, l, {
        get() {
            return e[l]
        }
    });
    for (const [l, c] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(i, l, {
        get() {
            return e.response && e.response[c]
        }
    });
    return i
}
const M2 = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Qp(e = "GET") {
    return M2.has(e.toUpperCase())
}

function F2(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const N2 = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    j2 = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function B2(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return j2.test(t) ? "json" : N2.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function H2(e, t, n = globalThis.Headers) {
    const r = { ...t,
        ...e
    };
    if (t ? .params && e ? .params && (r.params = { ...t ? .params,
            ...e ? .params
        }), t ? .query && e ? .query && (r.query = { ...t ? .query,
            ...e ? .query
        }), t ? .headers && e ? .headers) {
        r.headers = new n(t ? .headers || {});
        for (const [o, a] of new n(e ? .headers || {})) r.headers.set(o, a)
    }
    return r
}
const z2 = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    V2 = new Set([101, 204, 205, 304]);

function Fg(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function o(i) {
        const l = i.error && i.error.name === "AbortError" && !i.options.timeout || !1;
        if (i.options.retry !== !1 && !l) {
            let u;
            typeof i.options.retry == "number" ? u = i.options.retry : u = Qp(i.options.method) ? 0 : 1;
            const p = i.response && i.response.status || 500;
            if (u > 0 && (Array.isArray(i.options.retryStatusCodes) ? i.options.retryStatusCodes.includes(p) : z2.has(p))) {
                const h = i.options.retryDelay || 0;
                return h > 0 && await new Promise(v => setTimeout(v, h)), a(i.request, { ...i.options,
                    retry: u - 1,
                    timeout: i.options.timeout
                })
            }
        }
        const c = I2(i);
        throw Error.captureStackTrace && Error.captureStackTrace(c, a), c
    }
    const a = async function(l, c = {}) {
            const u = {
                request: l,
                options: H2(c, e.defaults, n),
                response: void 0,
                error: void 0
            };
            if (u.options.method = u.options.method ? .toUpperCase(), u.options.onRequest && await u.options.onRequest(u), typeof u.request == "string" && (u.options.baseURL && (u.request = Dg(u.request, u.options.baseURL)), (u.options.query || u.options.params) && (u.request = Ig(u.request, { ...u.options.params,
                    ...u.options.query
                }))), u.options.body && Qp(u.options.method) && (F2(u.options.body) ? (u.options.body = typeof u.options.body == "string" ? u.options.body : JSON.stringify(u.options.body), u.options.headers = new n(u.options.headers || {}), u.options.headers.has("content-type") || u.options.headers.set("content-type", "application/json"), u.options.headers.has("accept") || u.options.headers.set("accept", "application/json")) : ("pipeTo" in u.options.body && typeof u.options.body.pipeTo == "function" || typeof u.options.body.pipe == "function") && ("duplex" in u.options || (u.options.duplex = "half"))), !u.options.signal && u.options.timeout) {
                const h = new r;
                setTimeout(() => h.abort(), u.options.timeout), u.options.signal = h.signal
            }
            try {
                u.response = await t(u.request, u.options)
            } catch (h) {
                return u.error = h, u.options.onRequestError && await u.options.onRequestError(u), await o(u)
            }
            if (u.response.body && !V2.has(u.response.status) && u.options.method !== "HEAD") {
                const h = (u.options.parseResponse ? "json" : u.options.responseType) || B2(u.response.headers.get("content-type") || "");
                switch (h) {
                    case "json":
                        {
                            const v = await u.response.text(),
                                _ = u.options.parseResponse || Sg;u.response._data = _(v);
                            break
                        }
                    case "stream":
                        {
                            u.response._data = u.response.body;
                            break
                        }
                    default:
                        u.response._data = await u.response[h]()
                }
            }
            return u.options.onResponse && await u.options.onResponse(u), !u.options.ignoreResponseError && u.response.status >= 400 && u.response.status < 600 ? (u.options.onResponseError && await u.options.onResponseError(u), await o(u)) : u.response
        },
        s = async function(l, c) {
            return (await a(l, c))._data
        };
    return s.raw = a, s.native = (...i) => t(...i), s.create = (i = {}) => Fg({ ...e,
        defaults: { ...e.defaults,
            ...i
        }
    }), s
}
const Ed = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    U2 = Ed.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    W2 = Ed.Headers,
    q2 = Ed.AbortController,
    K2 = Fg({
        fetch: U2,
        Headers: W2,
        AbortController: q2
    }),
    G2 = K2,
    J2 = () => window ? .__NUXT__ ? .config || {},
    yl = J2().app,
    Q2 = () => yl.baseURL,
    Y2 = () => yl.buildAssetsDir,
    X2 = (...e) => bi(Ng(), Y2(), ...e),
    Ng = (...e) => {
        const t = yl.cdnURL || yl.baseURL;
        return e.length ? bi(t, ...e) : t
    };
globalThis.__buildAssetsURL = X2, globalThis.__publicAssetsURL = Ng;

function ku(e, t = {}, n) {
    for (const r in e) {
        const o = e[r],
            a = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? ku(o, t, a) : typeof o == "function" && (t[a] = o)
    }
    return t
}
const Z2 = {
        run: e => e()
    },
    ek = () => Z2,
    jg = typeof console.createTask < "u" ? console.createTask : ek;

function tk(e, t) {
    const n = t.shift(),
        r = jg(n);
    return e.reduce((o, a) => o.then(() => r.run(() => a(...t))), Promise.resolve())
}

function nk(e, t) {
    const n = t.shift(),
        r = jg(n);
    return Promise.all(e.map(o => r.run(() => o(...t))))
}

function zc(e, t) {
    for (const n of [...e]) n(t)
}
class rk {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const o = t;
        let a;
        for (; this._deprecatedHooks[t];) a = this._deprecatedHooks[t], t = a.to;
        if (a && !r.allowDeprecated) {
            let s = a.message;
            s || (s = `${o} hook has been deprecated` + (a.to ? `, please use ${a.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...a) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...a));
        return r = this.hook(t, o), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r) this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = ku(t),
            r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length)) o()
        }
    }
    removeHooks(t) {
        const n = ku(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(tk, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(nk, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && zc(this._before, o);
        const a = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return a instanceof Promise ? a.finally(() => {
            this._after && o && zc(this._after, o)
        }) : (this._after && o && zc(this._after, o), a)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function Bg() {
    return new rk
}

function ok(e = {}) {
    let t, n = !1;
    const r = s => {
        if (t && t !== s) throw new Error("Context conflict")
    };
    let o;
    if (e.asyncContext) {
        const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        s ? o = new s : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const a = () => {
        if (o && t === void 0) {
            const s = o.getStore();
            if (s !== void 0) return s
        }
        return t
    };
    return {
        use: () => {
            const s = a();
            if (s === void 0) throw new Error("Context is not available");
            return s
        },
        tryUse: () => a(),
        set: (s, i) => {
            i || r(s), t = s, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (s, i) => {
            r(s), t = s;
            try {
                return o ? o.run(s, i) : i()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(s, i) {
            t = s;
            const l = () => {
                    t = s
                },
                c = () => t === s ? l : void 0;
            Eu.add(c);
            try {
                const u = o ? o.run(s, i) : i();
                return n || (t = void 0), await u
            } finally {
                Eu.delete(c)
            }
        }
    }
}

function ak(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = ok({ ...e,
                ...r
            })), t[n], t[n]
        }
    }
}
const wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    Yp = "__unctx__",
    sk = wl[Yp] || (wl[Yp] = ak()),
    ik = (e, t = {}) => sk.get(e, t),
    Xp = "__unctx_async_handlers__",
    Eu = wl[Xp] || (wl[Xp] = new Set);

function xl(e) {
    const t = [];
    for (const o of Eu) {
        const a = o();
        a && t.push(a)
    }
    const n = () => {
        for (const o of t) o()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(o => {
        throw n(), o
    })), [r, n]
}
const Hg = ik("nuxt-app"),
    lk = "__nuxt_plugin";

function ck(e) {
    let t = 0;
    const n = {
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.6.5"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: hn({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__ ? ? {}
        }),
        static: {
            data: {}
        },
        runWithContext: o => fk(n, o),
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        _payloadRevivers: {},
        ...e
    };
    n.hooks = Bg(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, a) => {
        const s = "$" + o;
        qi(n, s, a), qi(n.vueApp.config.globalProperties, s, a)
    }, qi(n.vueApp, "$nuxt", n), qi(n.vueApp.config.globalProperties, "$nuxt", n); {
        window.addEventListener("nuxt.preloadError", a => {
            n.callHook("app:chunkError", {
                error: a.payload
            })
        }), window.useNuxtApp = window.useNuxtApp || tt;
        const o = n.hook("app:error", (...a) => {
            console.error("[nuxt] error caught during app initialization", ...a)
        });
        n.hook("app:mounted", o)
    }
    const r = hn(n.payload.config);
    return n.provide("config", r), n
}
async function uk(e, t) {
    if (t.hooks && e.hooks.addHooks(t.hooks), typeof t == "function") {
        const {
            provide: n
        } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n) e.provide(r, n[r])
    }
}
async function dk(e, t) {
    const n = [],
        r = [];
    for (const o of t) {
        const a = uk(e, o);
        o.parallel ? n.push(a.catch(s => r.push(s))) : await a
    }
    if (await Promise.all(n), r.length) throw r[0]
} /*!@__NO_SIDE_EFFECTS__*/
function vn(e) {
    return typeof e == "function" ? e : (delete e.name, Object.assign(e.setup || (() => {}), e, {
        [lk]: !0
    }))
}

function fk(e, t, n) {
    const r = () => n ? t(...n) : t();
    return Hg.set(e), e.vueApp.runWithContext(r)
} /*!@__NO_SIDE_EFFECTS__*/
function tt() {
    let e;
    if (Jm() && (e = Dt() ? .appContext.app.$nuxt), e = e || Hg.tryUse(), !e) throw new Error("[nuxt] instance unavailable");
    return e
} /*!@__NO_SIDE_EFFECTS__*/
function jr() {
    return tt().$config
}

function qi(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
const pk = "modulepreload",
    hk = function(e, t) {
        return e.startsWith(".") ? new URL(e, t).href : e
    },
    Zp = {},
    mk = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(a => {
            if (a = hk(a, r), a in Zp) return;
            Zp[a] = !0;
            const s = a.endsWith(".css"),
                i = s ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let u = o.length - 1; u >= 0; u--) {
                    const p = o[u];
                    if (p.href === a && (!s || p.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${a}"]${i}`)) return;
            const c = document.createElement("link");
            if (c.rel = s ? "stylesheet" : pk, s || (c.as = "script", c.crossOrigin = ""), c.href = a, document.head.appendChild(c), s) return new Promise((u, p) => {
                c.addEventListener("load", u), c.addEventListener("error", () => p(new Error(`Unable to preload CSS for ${a}`)))
            })
        })).then(() => t())
    },
    C = (...e) => mk(...e).catch(t => {
        const n = new Event("nuxt.preloadError");
        throw n.payload = t, window.dispatchEvent(n), t
    }),
    gk = -1,
    vk = -2,
    _k = -3,
    bk = -4,
    yk = -5,
    wk = -6;

function xk(e, t) {
    return kk(JSON.parse(e), t)
}

function kk(e, t) {
    if (typeof e == "number") return o(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e,
        r = Array(n.length);

    function o(a, s = !1) {
        if (a === gk) return;
        if (a === _k) return NaN;
        if (a === bk) return 1 / 0;
        if (a === yk) return -1 / 0;
        if (a === wk) return -0;
        if (s) throw new Error("Invalid input");
        if (a in r) return r[a];
        const i = n[a];
        if (!i || typeof i != "object") r[a] = i;
        else if (Array.isArray(i))
            if (typeof i[0] == "string") {
                const l = i[0],
                    c = t ? .[l];
                if (c) return r[a] = c(o(i[1]));
                switch (l) {
                    case "Date":
                        r[a] = new Date(i[1]);
                        break;
                    case "Set":
                        const u = new Set;
                        r[a] = u;
                        for (let v = 1; v < i.length; v += 1) u.add(o(i[v]));
                        break;
                    case "Map":
                        const p = new Map;
                        r[a] = p;
                        for (let v = 1; v < i.length; v += 2) p.set(o(i[v]), o(i[v + 1]));
                        break;
                    case "RegExp":
                        r[a] = new RegExp(i[1], i[2]);
                        break;
                    case "Object":
                        r[a] = Object(i[1]);
                        break;
                    case "BigInt":
                        r[a] = BigInt(i[1]);
                        break;
                    case "null":
                        const h = Object.create(null);
                        r[a] = h;
                        for (let v = 1; v < i.length; v += 2) h[i[v]] = o(i[v + 1]);
                        break;
                    default:
                        throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(i.length);
                r[a] = l;
                for (let c = 0; c < i.length; c += 1) {
                    const u = i[c];
                    u !== vk && (l[c] = o(u))
                }
            }
        else {
            const l = {};
            r[a] = l;
            for (const c in i) {
                const u = i[c];
                l[c] = o(u)
            }
        }
        return r[a]
    }
    return o(0)
}

function Ek(e) {
    return Array.isArray(e) ? e : [e]
}
const Tk = ["title", "titleTemplate", "script", "style", "noscript"],
    nl = ["base", "meta", "link", "style", "script", "noscript"],
    Ck = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    Pk = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    zg = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"],
    $k = typeof window < "u";

function Vg(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function eh(e) {
    return e._h || Vg(e._d ? e._d : `${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}

function Ug(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (Pk.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const a of o)
        if (typeof n[a] < "u") {
            const s = String(n[a]);
            return t && !t(s) ? !1 : `${r}:${a}:${s}`
        }
    return !1
}

function th(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function Sk(e, t, n) {
    const r = {
        tag: e,
        props: await Wg(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? { ...t
        } : {
            [
                ["script", "noscript", "style"].includes(e) ? "innerHTML" : "textContent"
            ]: t
        }, ["templateParams", "titleTemplate"].includes(e))
    };
    return zg.forEach(o => {
        const a = typeof r.props[o] < "u" ? r.props[o] : n[o];
        typeof a < "u" && ((!["innerHTML", "textContent"].includes(o) || Tk.includes(r.tag)) && (r[o] = a), delete r.props[o])
    }), r.props.body && (r.tagPosition = "bodyClose", delete r.props.body), r.props.children && (r.innerHTML = r.props.children, delete r.props.children), r.tag === "script" && (typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), r.innerHTML && ["application/ld+json", "application/json"].includes(r.props.type) && (r.innerHTML = r.innerHTML.replace(/</g, "\\u003C"))), Array.isArray(r.props.content) ? r.props.content.map(o => ({ ...r,
        props: { ...r.props,
            content: o
        }
    })) : r
}

function Ak(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t => e[t])), (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t => t.trim()).filter(Boolean).join(" ")
}
async function Wg(e, t) {
    for (const n of Object.keys(e)) {
        if (n === "class") {
            e[n] = Ak(e[n]);
            continue
        }
        if (e[n] instanceof Promise && (e[n] = await e[n]), !t && !zg.includes(n)) {
            const r = String(e[n]),
                o = n.startsWith("data-");
            r === "true" || r === "" ? e[n] = o ? "true" : !0 : e[n] || (o && r === "false" ? e[n] = "false" : delete e[n])
        }
    }
    return e
}
const Lk = 10;
async function Ok(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n, r]) => typeof r < "u" && Ck.includes(n)).forEach(([n, r]) => {
        const o = Ek(r);
        t.push(...o.map(a => Sk(n, a, e)).flat())
    }), (await Promise.all(t)).flat().filter(Boolean).map((n, r) => (n._e = e._i, e.mode && (n._m = e.mode), n._p = (e._i << Lk) + r, n))
}
const nh = {
        base: -10,
        title: 10
    },
    rh = {
        critical: -80,
        high: -10,
        low: 20
    };

function kl(e) {
    let t = 100;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props["http-equiv"] === "content-security-policy" && (t = -30), e.props.charset && (t = -20), e.props.name === "viewport" && (t = -15)) : e.tag === "link" && e.props.rel === "preconnect" ? t = 20 : e.tag in nh && (t = nh[e.tag]), typeof n == "string" && n in rh ? t + rh[n] : t)
}
const Rk = [{
        prefix: "before:",
        offset: -1
    }, {
        prefix: "after:",
        offset: 1
    }],
    Jn = "%separator";

function kr(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e;

    function r(s) {
        let i;
        return ["s", "pageTitle"].includes(s) ? i = t.pageTitle : s.includes(".") ? i = s.split(".").reduce((l, c) => l && l[c] || void 0, t) : i = t[s], typeof i < "u" ? (i || "").replace(/"/g, '\\"') : !1
    }
    let o = e;
    try {
        o = decodeURI(e)
    } catch {}
    return (o.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(s => {
        const i = r(s.slice(1));
        typeof i == "string" && (e = e.replace(new RegExp(`\\${s}(\\W|$)`, "g"), (l, c) => `${i}${c}`).trim())
    }), e.includes(Jn) && (e.endsWith(Jn) && (e = e.slice(0, -Jn.length).trim()), e.startsWith(Jn) && (e = e.slice(Jn.length).trim()), e = e.replace(new RegExp(`\\${Jn}\\s*\\${Jn}`, "g"), Jn), e = kr(e, {
        separator: n
    }, n)), e
}
async function Dk(e) {
    const t = {
        tag: e.tagName.toLowerCase(),
        props: await Wg(e.getAttributeNames().reduce((n, r) => ({ ...n,
            [r]: e.getAttribute(r)
        }), {})),
        innerHTML: e.innerHTML
    };
    return t._d = Ug(t), t
}
async function Ik(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n) return;
    const r = {
        shouldRender: e.dirty,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !r.shouldRender) return;
    const o = (await e.resolveTags()).map(u => ({
        tag: u,
        id: nl.includes(u.tag) ? eh(u) : u.tag,
        shouldRender: !0
    }));
    let a = e._dom;
    if (!a) {
        a = {
            elMap: {
                htmlAttrs: n.documentElement,
                bodyAttrs: n.body
            }
        };
        for (const u of ["body", "head"]) {
            const p = n ? .[u] ? .children;
            for (const h of [...p].filter(v => nl.includes(v.tagName.toLowerCase()))) a.elMap[h.getAttribute("data-hid") || eh(await Dk(h))] = h
        }
    }
    a.pendingSideEffects = { ...a.sideEffects || {}
    }, a.sideEffects = {};

    function s(u, p, h) {
        const v = `${u}:${p}`;
        a.sideEffects[v] = h, delete a.pendingSideEffects[v]
    }

    function i({
        id: u,
        $el: p,
        tag: h
    }) {
        const v = h.tag.endsWith("Attrs");
        a.elMap[u] = p, v || (["textContent", "innerHTML"].forEach(_ => {
            h[_] && h[_] !== p[_] && (p[_] = h[_])
        }), s(u, "el", () => {
            a.elMap[u].remove(), delete a.elMap[u]
        })), Object.entries(h.props).forEach(([_, g]) => {
            const P = `attr:${_}`;
            if (_ === "class")
                for (const S of (g || "").split(" ").filter(Boolean)) v && s(u, `${P}:${S}`, () => p.classList.remove(S)), !p.classList.contains(S) && p.classList.add(S);
            else p.getAttribute(_) !== g && p.setAttribute(_, g === !0 ? "" : String(g)), v && s(u, P, () => p.removeAttribute(_))
        })
    }
    const l = [],
        c = {
            bodyClose: void 0,
            bodyOpen: void 0,
            head: void 0
        };
    for (const u of o) {
        const {
            tag: p,
            shouldRender: h,
            id: v
        } = u;
        if (h) {
            if (p.tag === "title") {
                n.title = p.textContent;
                continue
            }
            u.$el = u.$el || a.elMap[v], u.$el ? i(u) : nl.includes(p.tag) && l.push(u)
        }
    }
    for (const u of l) {
        const p = u.tag.tagPosition || "head";
        u.$el = n.createElement(u.tag.tag), i(u), c[p] = c[p] || n.createDocumentFragment(), c[p].appendChild(u.$el)
    }
    for (const u of o) await e.hooks.callHook("dom:renderTag", u, n, s);
    c.head && n.head.appendChild(c.head), c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild), c.bodyClose && n.body.appendChild(c.bodyClose), Object.values(a.pendingSideEffects).forEach(u => u()), e._dom = a, e.dirty = !1, await e.hooks.callHook("dom:rendered", {
        renders: o
    })
}
async function Mk(e, t = {}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domUpdatePromise = e._domUpdatePromise || new Promise(r => n(async () => {
        await Ik(e, t), delete e._domUpdatePromise, r()
    }))
}

function Fk(e) {
    return t => {
        const n = t.resolvedOptions.document ? .head.querySelector('script[id="unhead:payload"]') ? .innerHTML || !1;
        return n && t.push(JSON.parse(n)), {
            mode: "client",
            hooks: {
                "entries:updated": function(r) {
                    Mk(r, e)
                }
            }
        }
    }
}
const Nk = ["templateParams", "htmlAttrs", "bodyAttrs"],
    jk = {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                ["hid", "vmid", "key"].forEach(r => {
                    e.props[r] && (e.key = e.props[r], delete e.props[r])
                });
                const n = Ug(e) || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": function(e) {
                const t = {};
                e.tags.forEach(r => {
                    const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
                        a = t[o];
                    if (a) {
                        let i = r ? .tagDuplicateStrategy;
                        if (!i && Nk.includes(r.tag) && (i = "merge"), i === "merge") {
                            const l = a.props;
                            ["class", "style"].forEach(c => {
                                r.props[c] && l[c] && (c === "style" && !l[c].endsWith(";") && (l[c] += ";"), r.props[c] = `${l[c]} ${r.props[c]}`)
                            }), t[o].props = { ...l,
                                ...r.props
                            };
                            return
                        } else if (r._e === a._e) {
                            a._duped = a._duped || [], r._d = `${a._d}:${a._duped.length+1}`, a._duped.push(r);
                            return
                        } else if (kl(r) > kl(a)) return
                    }
                    const s = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                    if (nl.includes(r.tag) && s === 0) {
                        delete t[o];
                        return
                    }
                    t[o] = r
                });
                const n = [];
                Object.values(t).forEach(r => {
                    const o = r._duped;
                    delete r._duped, n.push(r), o && n.push(...o)
                }), e.tags = n, e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
            }
        }
    },
    Bk = {
        mode: "server",
        hooks: {
            "tags:resolve": function(e) {
                const t = {};
                e.tags.filter(n => ["titleTemplate", "templateParams", "title"].includes(n.tag) && n._m === "server").forEach(n => {
                    t[n.tag] = n.tag.startsWith("title") ? n.textContent : n.props
                }), Object.keys(t).length && e.tags.push({
                    tag: "script",
                    innerHTML: JSON.stringify(t),
                    props: {
                        id: "unhead:payload",
                        type: "application/json"
                    }
                })
            }
        }
    },
    oh = ["script", "link", "bodyAttrs"];

function ah(e) {
    const t = {},
        n = {};
    return Object.entries(e.props).forEach(([r, o]) => {
        r.startsWith("on") && typeof o == "function" ? n[r] = o : t[r] = o
    }), {
        props: t,
        eventHandlers: n
    }
}
const Hk = {
        hooks: {
            "ssr:render": function(e) {
                e.tags = e.tags.map(t => (!oh.includes(t.tag) || !Object.entries(t.props).find(([n, r]) => n.startsWith("on") && typeof r == "function") || (t.props = ah(t).props), t))
            },
            "tags:resolve": function(e) {
                e.tags = e.tags.map(t => {
                    if (!oh.includes(t.tag)) return t;
                    const {
                        props: n,
                        eventHandlers: r
                    } = ah(t);
                    return Object.keys(r).length && (t.props = n, t._eventHandlers = r), t
                })
            },
            "dom:renderTag": function(e, t, n) {
                if (!e.tag._eventHandlers) return;
                const r = e.tag.tag === "bodyAttrs" ? t.defaultView : e.$el;
                Object.entries(e.tag._eventHandlers).forEach(([o, a]) => {
                    const s = `${e.tag._d||e.tag._p}:${o}`,
                        i = o.slice(2).toLowerCase(),
                        l = `data-h-${i}`;
                    if (n(e.id, s, () => {}), e.$el.hasAttribute(l)) return;
                    const c = a;
                    e.$el.setAttribute(l, ""), r.addEventListener(i, c), e.entry && n(e.id, s, () => {
                        r.removeEventListener(i, c), e.$el.removeAttribute(l)
                    })
                })
            }
        }
    },
    zk = ["link", "style", "script", "noscript"],
    Vk = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.key && zk.includes(e.tag) && (e.props["data-hid"] = e._h = Vg(e.key))
            }
        }
    },
    Uk = {
        hooks: {
            "tags:resolve": e => {
                const t = n => e.tags.find(r => r._d === n) ? ._p;
                for (const {
                        prefix: n,
                        offset: r
                    } of Rk)
                    for (const o of e.tags.filter(a => typeof a.tagPriority == "string" && a.tagPriority.startsWith(n))) {
                        const a = t(o.tagPriority.replace(n, ""));
                        typeof a < "u" && (o._p = a + r)
                    }
                e.tags.sort((n, r) => n._p - r._p).sort((n, r) => kl(n) - kl(r))
            }
        }
    },
    Wk = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e, n = t.find(s => s.tag === "title") ? .textContent, r = t.findIndex(s => s.tag === "templateParams"), o = r !== -1 ? t[r].props : {}, a = o.separator || "|";
                delete o.separator, o.pageTitle = kr(o.pageTitle || n || "", o, a);
                for (const s of t) s.processTemplateParams !== !1 && (["titleTemplate", "title"].includes(s.tag) && typeof s.textContent == "string" ? s.textContent = kr(s.textContent, o, a) : s.tag === "meta" && typeof s.props.content == "string" ? s.props.content = kr(s.props.content, o, a) : s.tag === "link" && typeof s.props.href == "string" ? s.props.href = kr(s.props.href, o, a) : s.processTemplateParams === !0 && (s.innerHTML ? s.innerHTML = kr(s.innerHTML, o, a) : s.textContent && (s.textContent = kr(s.textContent, o, a))));
                e.tags = t.filter(s => s.tag !== "templateParams")
            }
        }
    },
    qk = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n = t.findIndex(o => o.tag === "titleTemplate");
                const r = t.findIndex(o => o.tag === "title");
                if (r !== -1 && n !== -1) {
                    const o = th(t[n].textContent, t[r].textContent);
                    o !== null ? t[r].textContent = o || t[r].textContent : delete t[r]
                } else if (n !== -1) {
                    const o = th(t[n].textContent);
                    o !== null && (t[n].textContent = o, t[n].tag = "title", n = -1)
                }
                n !== -1 && delete t[n], e.tags = t.filter(Boolean)
            }
        }
    };
let qg;

function Kk(e = {}) {
    const t = Gk(e);
    return t.use(Fk()), qg = t
}

function sh(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}

function Gk(e = {}) {
    const t = Bg();
    t.addHooks(e.hooks || {}), e.document = e.document || ($k ? document : void 0);
    const n = !e.document;
    e.plugins = [jk, Bk, Hk, Vk, Uk, Wk, qk, ...e ? .plugins || []];
    const r = () => {
        s.dirty = !0, t.callHook("entries:updated", s)
    };
    let o = 0,
        a = [];
    const s = {
        dirty: !1,
        resolvedOptions: e,
        hooks: t,
        headEntries() {
            return a
        },
        use(i) {
            const l = typeof i == "function" ? i(s) : i;
            sh(l.mode, n) && t.addHooks(l.hooks || {})
        },
        push(i, l) {
            delete l ? .head;
            const c = {
                _i: o++,
                input: i,
                ...l
            };
            return sh(c.mode, n) && (a.push(c), r()), {
                dispose() {
                    a = a.filter(u => u._i !== c._i), t.callHook("entries:updated", s), r()
                },
                patch(u) {
                    a = a.map(p => (p._i === c._i && (p.input = c.input = u), p)), r()
                }
            }
        },
        async resolveTags() {
            const i = {
                tags: [],
                entries: [...a]
            };
            await t.callHook("entries:resolve", i);
            for (const l of i.entries) {
                const c = l.resolvedInput || l.input;
                if (l.resolvedInput = await (l.transform ? l.transform(c) : c), l.resolvedInput)
                    for (const u of await Ok(l)) {
                        const p = {
                            tag: u,
                            entry: l,
                            resolvedOptions: s.resolvedOptions
                        };
                        await t.callHook("tag:normalise", p), i.tags.push(p.tag)
                    }
            }
            return await t.callHook("tags:beforeResolve", i), await t.callHook("tags:resolve", i), i.tags
        },
        ssr: n
    };
    return e.plugins.forEach(i => s.use(i)), s.hooks.callHook("init", s), s
}

function Jk() {
    return qg
}
const Qk = dg.startsWith("3");

function Yk(e) {
    return typeof e == "function" ? e() : y(e)
}

function El(e, t = "") {
    if (e instanceof Promise) return e;
    const n = Yk(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => El(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, o]) => r === "titleTemplate" || r.startsWith("on") ? [r, y(o)] : [r, El(o, r)])) : n
}
const Xk = {
        hooks: {
            "entries:resolve": function(e) {
                for (const t of e.entries) t.resolvedInput = El(t.input)
            }
        }
    },
    Kg = "usehead";

function Zk(e) {
    return {
        install(n) {
            Qk && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(Kg, e))
        }
    }.install
}

function eE(e = {}) {
    e.domDelayFn = e.domDelayFn || (n => Gt(() => setTimeout(() => n(), 0)));
    const t = Kk(e);
    return t.use(Xk), t.install = Zk(t), t
}
const ih = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    lh = "__unhead_injection_handler__";

function tE() {
    if (lh in ih) return ih[lh]();
    const e = rt(Kg);
    return e || Jk()
}

function nE(e, t = {}) {
    const n = t.head || tE();
    if (n) return n.ssr ? n.push(e, t) : rE(n, e, t)
}

function rE(e, t, n = {}) {
    const r = Z(!1),
        o = Z({});
    en(() => {
        o.value = r.value ? {} : El(t)
    });
    const a = e.push(o.value, n);
    return Ue(o, i => {
        a.patch(i)
    }), Dt() && (Fn(() => {
        a.dispose()
    }), hd(() => {
        r.value = !0
    }), pd(() => {
        r.value = !1
    })), a
}
const Tu = {
        enterActiveClass: "transition-opacity duration-200 ease-out",
        enterFromClass: "opacity-0",
        enterToClass: "opacity-100",
        leaveActiveClass: "transition-opacity duration-75 ease-in",
        leaveFromClass: "opacity-100",
        leaveToClass: "opacity-0"
    },
    oE = {
        meta: [{
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            charset: "utf-8"
        }],
        link: [],
        style: [],
        script: [],
        noscript: []
    },
    aE = !1,
    sE = !1,
    iE = "__nuxt",
    lE = !0;
async function cE(e) {
    try {
        return lE ? Gg(await fetch(e).then(t => t.text())) : await C(() =>
            import (e), [],
            import.meta.url).then(t => t.default || t)
    } catch (t) {
        console.warn("[nuxt] Cannot load payload ", e, t)
    }
    return null
}
let Ki = null;
async function uE() {
    if (Ki) return Ki;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = Gg(e.textContent || ""),
        n = e.dataset.src ? await cE(e.dataset.src) : void 0;
    return Ki = { ...t,
        ...n,
        ...window.__NUXT__
    }, Ki
}

function Gg(e) {
    return xk(e, tt()._payloadRevivers)
}

function dE(e, t) {
    tt()._payloadRevivers[e] = t
}
const Gi = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;

function fE(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {},
        o = (t || {}).decode || mE;
    let a = 0;
    for (; a < e.length;) {
        const s = e.indexOf("=", a);
        if (s === -1) break;
        let i = e.indexOf(";", a);
        if (i === -1) i = e.length;
        else if (i < s) {
            a = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        const l = e.slice(a, s).trim();
        if (n[l] === void 0) {
            let c = e.slice(s + 1, i).trim();
            c.codePointAt(0) === 34 && (c = c.slice(1, -1)), n[l] = hE(c, o)
        }
        a = i + 1
    }
    return n
}

function ch(e, t, n) {
    const r = n || {},
        o = r.encode || gE;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!Gi.test(e)) throw new TypeError("argument name is invalid");
    const a = o(t);
    if (a && !Gi.test(a)) throw new TypeError("argument val is invalid");
    let s = e + "=" + a;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
        const i = r.maxAge - 0;
        if (Number.isNaN(i) || !Number.isFinite(i)) throw new TypeError("option maxAge is invalid");
        s += "; Max-Age=" + Math.floor(i)
    }
    if (r.domain) {
        if (!Gi.test(r.domain)) throw new TypeError("option domain is invalid");
        s += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Gi.test(r.path)) throw new TypeError("option path is invalid");
        s += "; Path=" + r.path
    }
    if (r.expires) {
        if (!pE(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
        s += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (s += "; HttpOnly"), r.secure && (s += "; Secure"), r.priority) switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
        case "low":
            s += "; Priority=Low";
            break;
        case "medium":
            s += "; Priority=Medium";
            break;
        case "high":
            s += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid")
    }
    if (r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
        case !0:
            s += "; SameSite=Strict";
            break;
        case "lax":
            s += "; SameSite=Lax";
            break;
        case "strict":
            s += "; SameSite=Strict";
            break;
        case "none":
            s += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
    }
    return s
}

function pE(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
}

function hE(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}

function mE(e) {
    return e.includes("%") ? decodeURIComponent(e) : e
}

function gE(e) {
    return encodeURIComponent(e)
}

function Vc(e) {
    return e !== null && typeof e == "object"
}

function Cu(e, t, n = ".", r) {
    if (!Vc(t)) return Cu(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const a in e) {
        if (a === "__proto__" || a === "constructor") continue;
        const s = e[a];
        s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : Vc(s) && Vc(o[a]) ? o[a] = Cu(s, o[a], (n ? `${n}.` : "") + a.toString(), r) : o[a] = s))
    }
    return o
}

function Jg(e) {
    return (...t) => t.reduce((n, r) => Cu(n, r, "", e), {})
}
const Yl = Jg(),
    vE = Jg((e, t, n) => {
        if (typeof e[t] < "u" && typeof n == "function") return e[t] = n(e[t]), !0
    });

function _E(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var bE = Object.defineProperty,
    yE = (e, t, n) => t in e ? bE(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Er = (e, t, n) => (yE(e, typeof t != "symbol" ? t + "" : t, n), n);
class Pu extends Error {
    constructor(t, n = {}) {
        super(t, n), Er(this, "statusCode", 500), Er(this, "fatal", !1), Er(this, "unhandled", !1), Er(this, "statusMessage"), Er(this, "data"), Er(this, "cause"), n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Su(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Qg(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}
Er(Pu, "__h3_error__", !0);

function $u(e) {
    if (typeof e == "string") return new Pu(e);
    if (wE(e)) return e;
    const t = new Pu(e.message ? ? e.statusMessage ? ? "", {
        cause: e.cause || e
    });
    if (_E(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Su(e.statusCode, t.statusCode) : e.status && (t.statusCode = Su(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        Qg(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function wE(e) {
    return e ? .constructor ? .__h3_error__ === !0
}
const xE = /[^\u0009\u0020-\u007E]/g;

function Qg(e = "") {
    return e.replace(xE, "")
}

function Su(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const kE = "$s";

function yt(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = kE + n,
        a = tt(),
        s = jl(a.payload.state, o);
    if (s.value === void 0 && r) {
        const i = r();
        if (mt(i)) return a.payload.state[o] = i, i;
        s.value = i
    }
    return s
}
const Yg = Symbol("layout-meta"),
    yi = Symbol("route"),
    Tn = () => tt() ? .$router,
    Kt = () => Jm() ? rt(yi, tt()._route) : tt()._route; /*!@__NO_SIDE_EFFECTS__*/
const EE = () => {
        try {
            if (tt()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    TE = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : Ig(e.path || "/", e.query || {}) + (e.hash || "");
        if (t ? .open) {
            {
                const {
                    target: i = "_blank",
                    windowFeatures: l = {}
                } = t.open, c = Object.entries(l).filter(([u, p]) => p !== void 0).map(([u, p]) => `${u.toLowerCase()}=${p}`).join(", ");
                open(n, i, c)
            }
            return Promise.resolve()
        }
        const r = t ? .external || _i(n, {
            acceptRelative: !0
        });
        if (r && !t ? .external) throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
        if (r && Ql(n).protocol === "script:") throw new Error("Cannot navigate to an URL with script protocol.");
        const o = EE();
        if (!r && o) return e;
        const a = Tn(),
            s = tt();
        return r ? (t ? .replace ? location.replace(n) : location.href = n, o ? s.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t ? .replace ? a.replace(e) : a.push(e)
    },
    Xl = () => jl(tt().payload, "error"),
    eo = e => {
        const t = Zl(e);
        try {
            const n = tt(),
                r = Xl();
            n.hooks.callHook("app:error", t), r.value = r.value || t
        } catch {
            throw t
        }
        return t
    },
    Au = async (e = {}) => {
        const t = tt(),
            n = Xl();
        t.callHook("app:error:cleared", e), e.redirect && await Tn().replace(e.redirect), n.value = null
    },
    CE = e => !!(e && typeof e == "object" && "__nuxt_error" in e),
    Zl = e => {
        const t = $u(e);
        return t.__nuxt_error = !0, t
    },
    uh = {
        NuxtError: e => Zl(e),
        EmptyShallowRef: e => uo(e === "_" ? void 0 : e === "0n" ? BigInt(0) : JSON.parse(e)),
        EmptyRef: e => Z(e === "_" ? void 0 : e === "0n" ? BigInt(0) : JSON.parse(e)),
        ShallowRef: e => uo(e),
        ShallowReactive: e => hi(e),
        Ref: e => Z(e),
        Reactive: e => hn(e)
    },
    PE = vn({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const r in uh) dE(r, uh[r]);
            Object.assign(e.payload, ([t, n] = xl(() => e.runWithContext(uE)), t = await t, n(), t)), window.__NUXT__ = e.payload
        }
    });
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const Zr = typeof window < "u";

function $E(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const Ze = Object.assign;

function Uc(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = gn(o) ? o.map(e) : e(o)
    }
    return n
}
const Ys = () => {},
    gn = Array.isArray,
    SE = /\/$/,
    AE = e => e.replace(SE, "");

function Wc(e, t, n = "/") {
    let r, o = {},
        a = "",
        s = "";
    const i = t.indexOf("#");
    let l = t.indexOf("?");
    return i < l && i >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), a = t.slice(l + 1, i > -1 ? i : t.length), o = e(a)), i > -1 && (r = r || t.slice(0, i), s = t.slice(i, t.length)), r = DE(r ? ? t, n), {
        fullPath: r + (a && "?") + a + s,
        path: r,
        query: o,
        hash: s
    }
}

function LE(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function dh(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function OE(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && go(t.matched[r], n.matched[o]) && Xg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function go(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function Xg(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!RE(e[n], t[n])) return !1;
    return !0
}

function RE(e, t) {
    return gn(e) ? fh(e, t) : gn(t) ? fh(t, e) : e === t
}

function fh(e, t) {
    return gn(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function DE(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let a = n.length - 1,
        s, i;
    for (s = 0; s < r.length; s++)
        if (i = r[s], i !== ".")
            if (i === "..") a > 1 && a--;
            else break;
    return n.slice(0, a).join("/") + "/" + r.slice(s - (s === r.length ? 1 : 0)).join("/")
}
var ui;
(function(e) {
    e.pop = "pop", e.push = "push"
})(ui || (ui = {}));
var Xs;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Xs || (Xs = {}));

function IE(e) {
    if (!e)
        if (Zr) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), AE(e)
}
const ME = /^[^#]+#/;

function FE(e, t) {
    return e.replace(ME, "#") + t
}

function NE(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ec = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function jE(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = NE(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function ph(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Lu = new Map;

function BE(e, t) {
    Lu.set(e, t)
}

function HE(e) {
    const t = Lu.get(e);
    return Lu.delete(e), t
}
let zE = () => location.protocol + "//" + location.host;

function Zg(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, a = e.indexOf("#");
    if (a > -1) {
        let i = o.includes(e.slice(a)) ? e.slice(a).length : 1,
            l = o.slice(i);
        return l[0] !== "/" && (l = "/" + l), dh(l, "")
    }
    return dh(n, e) + r + o
}

function VE(e, t, n, r) {
    let o = [],
        a = [],
        s = null;
    const i = ({
        state: h
    }) => {
        const v = Zg(e, location),
            _ = n.value,
            g = t.value;
        let P = 0;
        if (h) {
            if (n.value = v, t.value = h, s && s === _) {
                s = null;
                return
            }
            P = g ? h.position - g.position : 0
        } else r(v);
        o.forEach(S => {
            S(n.value, _, {
                delta: P,
                type: ui.pop,
                direction: P ? P > 0 ? Xs.forward : Xs.back : Xs.unknown
            })
        })
    };

    function l() {
        s = n.value
    }

    function c(h) {
        o.push(h);
        const v = () => {
            const _ = o.indexOf(h);
            _ > -1 && o.splice(_, 1)
        };
        return a.push(v), v
    }

    function u() {
        const {
            history: h
        } = window;
        h.state && h.replaceState(Ze({}, h.state, {
            scroll: ec()
        }), "")
    }

    function p() {
        for (const h of a) h();
        a = [], window.removeEventListener("popstate", i), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", i), window.addEventListener("beforeunload", u, {
        passive: !0
    }), {
        pauseListeners: l,
        listen: c,
        destroy: p
    }
}

function hh(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? ec() : null
    }
}

function UE(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: Zg(e, n)
    }, o = {
        value: t.state
    };
    o.value || a(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function a(l, c, u) {
        const p = e.indexOf("#"),
            h = p > -1 ? (n.host && document.querySelector("base") ? e : e.slice(p)) + l : zE() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", h), o.value = c
        } catch (v) {
            console.error(v), n[u ? "replace" : "assign"](h)
        }
    }

    function s(l, c) {
        const u = Ze({}, t.state, hh(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        a(l, u, !0), r.value = l
    }

    function i(l, c) {
        const u = Ze({}, o.value, t.state, {
            forward: l,
            scroll: ec()
        });
        a(u.current, u, !0);
        const p = Ze({}, hh(r.value, l, null), {
            position: u.position + 1
        }, c);
        a(l, p, !1), r.value = l
    }
    return {
        location: r,
        state: o,
        push: i,
        replace: s
    }
}

function e0(e) {
    e = IE(e);
    const t = UE(e),
        n = VE(e, t.state, t.location, t.replace);

    function r(a, s = !0) {
        s || n.pauseListeners(), history.go(a)
    }
    const o = Ze({
        location: "",
        base: e,
        go: r,
        createHref: FE.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function WE(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), e0(e)
}

function qE(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function t0(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const bn = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    n0 = Symbol("");
var mh;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(mh || (mh = {}));

function vo(e, t) {
    return Ze(new Error, {
        type: e,
        [n0]: !0
    }, t)
}

function $n(e, t) {
    return e instanceof Error && n0 in e && (t == null || !!(e.type & t))
}
const gh = "[^/]+?",
    KE = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    GE = /[.+*?^${}()[\]/\\]/g;

function JE(e, t) {
    const n = Ze({}, KE, t),
        r = [];
    let o = n.start ? "^" : "";
    const a = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let p = 0; p < c.length; p++) {
            const h = c[p];
            let v = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0) p || (o += "/"), o += h.value.replace(GE, "\\$&"), v += 40;
            else if (h.type === 1) {
                const {
                    value: _,
                    repeatable: g,
                    optional: P,
                    regexp: S
                } = h;
                a.push({
                    name: _,
                    repeatable: g,
                    optional: P
                });
                const x = S || gh;
                if (x !== gh) {
                    v += 10;
                    try {
                        new RegExp(`(${x})`)
                    } catch (A) {
                        throw new Error(`Invalid custom RegExp for param "${_}" (${x}): ` + A.message)
                    }
                }
                let I = g ? `((?:${x})(?:/(?:${x}))*)` : `(${x})`;
                p || (I = P && c.length < 2 ? `(?:/${I})` : "/" + I), P && (I += "?"), o += I, v += 20, P && (v += -8), g && (v += -20), x === ".*" && (v += -50)
            }
            u.push(v)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const s = new RegExp(o, n.sensitive ? "" : "i");

    function i(c) {
        const u = c.match(s),
            p = {};
        if (!u) return null;
        for (let h = 1; h < u.length; h++) {
            const v = u[h] || "",
                _ = a[h - 1];
            p[_.name] = v && _.repeatable ? v.split("/") : v
        }
        return p
    }

    function l(c) {
        let u = "",
            p = !1;
        for (const h of e) {
            (!p || !u.endsWith("/")) && (u += "/"), p = !1;
            for (const v of h)
                if (v.type === 0) u += v.value;
                else if (v.type === 1) {
                const {
                    value: _,
                    repeatable: g,
                    optional: P
                } = v, S = _ in c ? c[_] : "";
                if (gn(S) && !g) throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);
                const x = gn(S) ? S.join("/") : S;
                if (!x)
                    if (P) h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : p = !0);
                    else throw new Error(`Missing required param "${_}"`);
                u += x
            }
        }
        return u || "/"
    }
    return {
        re: s,
        score: r,
        keys: a,
        parse: i,
        stringify: l
    }
}

function QE(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function YE(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const a = QE(r[n], o[n]);
        if (a) return a;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (vh(r)) return 1;
        if (vh(o)) return -1
    }
    return o.length - r.length
}

function vh(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const XE = {
        type: 0,
        value: ""
    },
    ZE = /[a-zA-Z0-9_]/;

function e5(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [XE]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(v) {
        throw new Error(`ERR (${n})/"${c}": ${v}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let a;

    function s() {
        a && o.push(a), a = []
    }
    let i = 0,
        l, c = "",
        u = "";

    function p() {
        c && (n === 0 ? a.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), a.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function h() {
        c += l
    }
    for (; i < e.length;) {
        if (l = e[i++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (c && p(), s()) : l === ":" ? (p(), n = 1) : h();
                break;
            case 4:
                h(), n = r;
                break;
            case 1:
                l === "(" ? n = 2 : ZE.test(l) ? h() : (p(), n = 0, l !== "*" && l !== "?" && l !== "+" && i--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                p(), n = 0, l !== "*" && l !== "?" && l !== "+" && i--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), p(), s(), o
}

function t5(e, t, n) {
    const r = JE(e5(e.path), n),
        o = Ze(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function n5(e, t) {
    const n = [],
        r = new Map;
    t = yh({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(u) {
        return r.get(u)
    }

    function a(u, p, h) {
        const v = !h,
            _ = r5(u);
        _.aliasOf = h && h.record;
        const g = yh(t, u),
            P = [_];
        if ("alias" in u) {
            const I = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const A of I) P.push(Ze({}, _, {
                components: h ? h.record.components : _.components,
                path: A,
                aliasOf: h ? h.record : _
            }))
        }
        let S, x;
        for (const I of P) {
            const {
                path: A
            } = I;
            if (p && A[0] !== "/") {
                const N = p.record.path,
                    M = N[N.length - 1] === "/" ? "" : "/";
                I.path = p.record.path + (A && M + A)
            }
            if (S = t5(I, p, g), h ? h.alias.push(S) : (x = x || S, x !== S && x.alias.push(S), v && u.name && !bh(S) && s(u.name)), _.children) {
                const N = _.children;
                for (let M = 0; M < N.length; M++) a(N[M], S, h && h.children[M])
            }
            h = h || S, (S.record.components && Object.keys(S.record.components).length || S.record.name || S.record.redirect) && l(S)
        }
        return x ? () => {
            s(x)
        } : Ys
    }

    function s(u) {
        if (t0(u)) {
            const p = r.get(u);
            p && (r.delete(u), n.splice(n.indexOf(p), 1), p.children.forEach(s), p.alias.forEach(s))
        } else {
            const p = n.indexOf(u);
            p > -1 && (n.splice(p, 1), u.record.name && r.delete(u.record.name), u.children.forEach(s), u.alias.forEach(s))
        }
    }

    function i() {
        return n
    }

    function l(u) {
        let p = 0;
        for (; p < n.length && YE(u, n[p]) >= 0 && (u.record.path !== n[p].record.path || !r0(u, n[p]));) p++;
        n.splice(p, 0, u), u.record.name && !bh(u) && r.set(u.record.name, u)
    }

    function c(u, p) {
        let h, v = {},
            _, g;
        if ("name" in u && u.name) {
            if (h = r.get(u.name), !h) throw vo(1, {
                location: u
            });
            g = h.record.name, v = Ze(_h(p.params, h.keys.filter(x => !x.optional).map(x => x.name)), u.params && _h(u.params, h.keys.map(x => x.name))), _ = h.stringify(v)
        } else if ("path" in u) _ = u.path, h = n.find(x => x.re.test(_)), h && (v = h.parse(_), g = h.record.name);
        else {
            if (h = p.name ? r.get(p.name) : n.find(x => x.re.test(p.path)), !h) throw vo(1, {
                location: u,
                currentLocation: p
            });
            g = h.record.name, v = Ze({}, p.params, u.params), _ = h.stringify(v)
        }
        const P = [];
        let S = h;
        for (; S;) P.unshift(S.record), S = S.parent;
        return {
            name: g,
            path: _,
            params: v,
            matched: P,
            meta: a5(P)
        }
    }
    return e.forEach(u => a(u)), {
        addRoute: a,
        resolve: c,
        removeRoute: s,
        getRoutes: i,
        getRecordMatcher: o
    }
}

function _h(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function r5(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: o5(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function o5(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function bh(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function a5(e) {
    return e.reduce((t, n) => Ze(t, n.meta), {})
}

function yh(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function r0(e, t) {
    return t.children.some(n => n === e || r0(e, n))
}
const o0 = /#/g,
    s5 = /&/g,
    i5 = /\//g,
    l5 = /=/g,
    c5 = /\?/g,
    a0 = /\+/g,
    u5 = /%5B/g,
    d5 = /%5D/g,
    s0 = /%5E/g,
    f5 = /%60/g,
    i0 = /%7B/g,
    p5 = /%7C/g,
    l0 = /%7D/g,
    h5 = /%20/g;

function Td(e) {
    return encodeURI("" + e).replace(p5, "|").replace(u5, "[").replace(d5, "]")
}

function m5(e) {
    return Td(e).replace(i0, "{").replace(l0, "}").replace(s0, "^")
}

function Ou(e) {
    return Td(e).replace(a0, "%2B").replace(h5, "+").replace(o0, "%23").replace(s5, "%26").replace(f5, "`").replace(i0, "{").replace(l0, "}").replace(s0, "^")
}

function g5(e) {
    return Ou(e).replace(l5, "%3D")
}

function v5(e) {
    return Td(e).replace(o0, "%23").replace(c5, "%3F")
}

function _5(e) {
    return e == null ? "" : v5(e).replace(i5, "%2F")
}

function Tl(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function b5(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const a = r[o].replace(a0, " "),
            s = a.indexOf("="),
            i = Tl(s < 0 ? a : a.slice(0, s)),
            l = s < 0 ? null : Tl(a.slice(s + 1));
        if (i in t) {
            let c = t[i];
            gn(c) || (c = t[i] = [c]), c.push(l)
        } else t[i] = l
    }
    return t
}

function wh(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = g5(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(gn(r) ? r.map(a => a && Ou(a)) : [r && Ou(r)]).forEach(a => {
            a !== void 0 && (t += (t.length ? "&" : "") + n, a != null && (t += "=" + a))
        })
    }
    return t
}

function y5(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = gn(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const c0 = Symbol(""),
    xh = Symbol(""),
    Cd = Symbol(""),
    Pd = Symbol(""),
    Ru = Symbol("");

function Do() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function w5(e, t, n) {
    const r = () => {
        e[t].delete(n)
    };
    Rt(r), hd(r), pd(() => {
        e[t].add(n)
    }), e[t].add(n)
}

function $6(e) {
    const t = rt(c0, {}).value;
    t && w5(t, "leaveGuards", e)
}

function tr(e, t, n, r, o) {
    const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((s, i) => {
        const l = p => {
                p === !1 ? i(vo(4, {
                    from: n,
                    to: t
                })) : p instanceof Error ? i(p) : qE(p) ? i(vo(2, {
                    from: t,
                    to: p
                })) : (a && r.enterCallbacks[o] === a && typeof p == "function" && a.push(p), s())
            },
            c = e.call(r && r.instances[o], t, n, l);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(l)), u.catch(p => i(p))
    })
}

function qc(e, t, n, r) {
    const o = [];
    for (const a of e)
        for (const s in a.components) {
            let i = a.components[s];
            if (!(t !== "beforeRouteEnter" && !a.instances[s]))
                if (x5(i)) {
                    const c = (i.__vccOpts || i)[t];
                    c && o.push(tr(c, n, r, a, s))
                } else {
                    let l = i();
                    o.push(() => l.then(c => {
                        if (!c) return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));
                        const u = $E(c) ? c.default : c;
                        a.components[s] = u;
                        const h = (u.__vccOpts || u)[t];
                        return h && tr(h, n, r, a, s)()
                    }))
                }
        }
    return o
}

function x5(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function kh(e) {
    const t = rt(Cd),
        n = rt(Pd),
        r = j(() => t.resolve(y(e.to))),
        o = j(() => {
            const {
                matched: l
            } = r.value, {
                length: c
            } = l, u = l[c - 1], p = n.matched;
            if (!u || !p.length) return -1;
            const h = p.findIndex(go.bind(null, u));
            if (h > -1) return h;
            const v = Eh(l[c - 2]);
            return c > 1 && Eh(u) === v && p[p.length - 1].path !== v ? p.findIndex(go.bind(null, l[c - 2])) : h
        }),
        a = j(() => o.value > -1 && C5(n.params, r.value.params)),
        s = j(() => o.value > -1 && o.value === n.matched.length - 1 && Xg(n.params, r.value.params));

    function i(l = {}) {
        return T5(l) ? t[y(e.replace) ? "replace" : "push"](y(e.to)).catch(Ys) : Promise.resolve()
    }
    return {
        route: r,
        href: j(() => r.value.href),
        isActive: a,
        isExactActive: s,
        navigate: i
    }
}
const k5 = be({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: kh,
        setup(e, {
            slots: t
        }) {
            const n = hn(kh(e)),
                {
                    options: r
                } = rt(Cd),
                o = j(() => ({
                    [Th(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Th(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const a = t.default && t.default(n);
                return e.custom ? a : Ie("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, a)
            }
        }
    }),
    E5 = k5;

function T5(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function C5(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!gn(o) || o.length !== r.length || r.some((a, s) => a !== o[s])) return !1
    }
    return !0
}

function Eh(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Th = (e, t, n) => e ? ? t ? ? n,
    P5 = be({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = rt(Ru),
                o = j(() => e.route || r.value),
                a = rt(xh, 0),
                s = j(() => {
                    let c = y(a);
                    const {
                        matched: u
                    } = o.value;
                    let p;
                    for (;
                        (p = u[c]) && !p.components;) c++;
                    return c
                }),
                i = j(() => o.value.matched[s.value]);
            $t(xh, j(() => s.value + 1)), $t(c0, i), $t(Ru, o);
            const l = Z();
            return Ue(() => [l.value, i.value, e.name], ([c, u, p], [h, v, _]) => {
                u && (u.instances[p] = c, v && v !== u && c && c === h && (u.leaveGuards.size || (u.leaveGuards = v.leaveGuards), u.updateGuards.size || (u.updateGuards = v.updateGuards))), c && u && (!v || !go(u, v) || !h) && (u.enterCallbacks[p] || []).forEach(g => g(c))
            }, {
                flush: "post"
            }), () => {
                const c = o.value,
                    u = e.name,
                    p = i.value,
                    h = p && p.components[u];
                if (!h) return Ch(n.default, {
                    Component: h,
                    route: c
                });
                const v = p.props[u],
                    _ = v ? v === !0 ? c.params : typeof v == "function" ? v(c) : v : null,
                    P = Ie(h, Ze({}, _, t, {
                        onVnodeUnmounted: S => {
                            S.component.isUnmounted && (p.instances[u] = null)
                        },
                        ref: l
                    }));
                return Ch(n.default, {
                    Component: P,
                    route: c
                }) || P
            }
        }
    });

function Ch(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const u0 = P5;

function $5(e) {
    const t = n5(e.routes, e),
        n = e.parseQuery || b5,
        r = e.stringifyQuery || wh,
        o = e.history,
        a = Do(),
        s = Do(),
        i = Do(),
        l = uo(bn);
    let c = bn;
    Zr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Uc.bind(null, U => "" + U),
        p = Uc.bind(null, _5),
        h = Uc.bind(null, Tl);

    function v(U, de) {
        let re, xe;
        return t0(U) ? (re = t.getRecordMatcher(U), xe = de) : xe = U, t.addRoute(xe, re)
    }

    function _(U) {
        const de = t.getRecordMatcher(U);
        de && t.removeRoute(de)
    }

    function g() {
        return t.getRoutes().map(U => U.record)
    }

    function P(U) {
        return !!t.getRecordMatcher(U)
    }

    function S(U, de) {
        if (de = Ze({}, de || l.value), typeof U == "string") {
            const O = Wc(n, U, de.path),
                H = t.resolve({
                    path: O.path
                }, de),
                W = o.createHref(O.fullPath);
            return Ze(O, H, {
                params: h(H.params),
                hash: Tl(O.hash),
                redirectedFrom: void 0,
                href: W
            })
        }
        let re;
        if ("path" in U) re = Ze({}, U, {
            path: Wc(n, U.path, de.path).path
        });
        else {
            const O = Ze({}, U.params);
            for (const H in O) O[H] == null && delete O[H];
            re = Ze({}, U, {
                params: p(O)
            }), de.params = p(de.params)
        }
        const xe = t.resolve(re, de),
            qe = U.hash || "";
        xe.params = u(h(xe.params));
        const w = LE(r, Ze({}, U, {
                hash: m5(qe),
                path: xe.path
            })),
            E = o.createHref(w);
        return Ze({
            fullPath: w,
            hash: qe,
            query: r === wh ? y5(U.query) : U.query || {}
        }, xe, {
            redirectedFrom: void 0,
            href: E
        })
    }

    function x(U) {
        return typeof U == "string" ? Wc(n, U, l.value.path) : Ze({}, U)
    }

    function I(U, de) {
        if (c !== U) return vo(8, {
            from: de,
            to: U
        })
    }

    function A(U) {
        return z(U)
    }

    function N(U) {
        return A(Ze(x(U), {
            replace: !0
        }))
    }

    function M(U) {
        const de = U.matched[U.matched.length - 1];
        if (de && de.redirect) {
            const {
                redirect: re
            } = de;
            let xe = typeof re == "function" ? re(U) : re;
            return typeof xe == "string" && (xe = xe.includes("?") || xe.includes("#") ? xe = x(xe) : {
                path: xe
            }, xe.params = {}), Ze({
                query: U.query,
                hash: U.hash,
                params: "path" in xe ? {} : U.params
            }, xe)
        }
    }

    function z(U, de) {
        const re = c = S(U),
            xe = l.value,
            qe = U.state,
            w = U.force,
            E = U.replace === !0,
            O = M(re);
        if (O) return z(Ze(x(O), {
            state: typeof O == "object" ? Ze({}, qe, O.state) : qe,
            force: w,
            replace: E
        }), de || re);
        const H = re;
        H.redirectedFrom = de;
        let W;
        return !w && OE(r, xe, re) && (W = vo(16, {
            to: H,
            from: xe
        }), St(xe, xe, !0, !1)), (W ? Promise.resolve(W) : oe(H, xe)).catch(G => $n(G) ? $n(G, 2) ? G : gt(G) : Ce(G, H, xe)).then(G => {
            if (G) {
                if ($n(G, 2)) return z(Ze({
                    replace: E
                }, x(G.to), {
                    state: typeof G.to == "object" ? Ze({}, qe, G.to.state) : qe,
                    force: w
                }), de || H)
            } else G = ae(H, xe, !0, E, qe);
            return we(H, xe, G), G
        })
    }

    function F(U, de) {
        const re = I(U, de);
        return re ? Promise.reject(re) : Promise.resolve()
    }

    function le(U) {
        const de = nn.values().next().value;
        return de && typeof de.runWithContext == "function" ? de.runWithContext(U) : U()
    }

    function oe(U, de) {
        let re;
        const [xe, qe, w] = S5(U, de);
        re = qc(xe.reverse(), "beforeRouteLeave", U, de);
        for (const O of xe) O.leaveGuards.forEach(H => {
            re.push(tr(H, U, de))
        });
        const E = F.bind(null, U, de);
        return re.push(E), kt(re).then(() => {
            re = [];
            for (const O of a.list()) re.push(tr(O, U, de));
            return re.push(E), kt(re)
        }).then(() => {
            re = qc(qe, "beforeRouteUpdate", U, de);
            for (const O of qe) O.updateGuards.forEach(H => {
                re.push(tr(H, U, de))
            });
            return re.push(E), kt(re)
        }).then(() => {
            re = [];
            for (const O of w)
                if (O.beforeEnter)
                    if (gn(O.beforeEnter))
                        for (const H of O.beforeEnter) re.push(tr(H, U, de));
                    else re.push(tr(O.beforeEnter, U, de));
            return re.push(E), kt(re)
        }).then(() => (U.matched.forEach(O => O.enterCallbacks = {}), re = qc(w, "beforeRouteEnter", U, de), re.push(E), kt(re))).then(() => {
            re = [];
            for (const O of s.list()) re.push(tr(O, U, de));
            return re.push(E), kt(re)
        }).catch(O => $n(O, 8) ? O : Promise.reject(O))
    }

    function we(U, de, re) {
        i.list().forEach(xe => le(() => xe(U, de, re)))
    }

    function ae(U, de, re, xe, qe) {
        const w = I(U, de);
        if (w) return w;
        const E = de === bn,
            O = Zr ? history.state : {};
        re && (xe || E ? o.replace(U.fullPath, Ze({
            scroll: E && O && O.scroll
        }, qe)) : o.push(U.fullPath, qe)), l.value = U, St(U, de, re, E), gt()
    }
    let fe;

    function ue() {
        fe || (fe = o.listen((U, de, re) => {
            if (!Hr.listening) return;
            const xe = S(U),
                qe = M(xe);
            if (qe) {
                z(Ze(qe, {
                    replace: !0
                }), xe).catch(Ys);
                return
            }
            c = xe;
            const w = l.value;
            Zr && BE(ph(w.fullPath, re.delta), ec()), oe(xe, w).catch(E => $n(E, 12) ? E : $n(E, 2) ? (z(E.to, xe).then(O => {
                $n(O, 20) && !re.delta && re.type === ui.pop && o.go(-1, !1)
            }).catch(Ys), Promise.reject()) : (re.delta && o.go(-re.delta, !1), Ce(E, xe, w))).then(E => {
                E = E || ae(xe, w, !1), E && (re.delta && !$n(E, 8) ? o.go(-re.delta, !1) : re.type === ui.pop && $n(E, 20) && o.go(-1, !1)), we(xe, w, E)
            }).catch(Ys)
        }))
    }
    let We = Do(),
        Ae = Do(),
        _e;

    function Ce(U, de, re) {
        gt(U);
        const xe = Ae.list();
        return xe.length ? xe.forEach(qe => qe(U, de, re)) : console.error(U), Promise.reject(U)
    }

    function pt() {
        return _e && l.value !== bn ? Promise.resolve() : new Promise((U, de) => {
            We.add([U, de])
        })
    }

    function gt(U) {
        return _e || (_e = !U, ue(), We.list().forEach(([de, re]) => U ? re(U) : de()), We.reset()), U
    }

    function St(U, de, re, xe) {
        const {
            scrollBehavior: qe
        } = e;
        if (!Zr || !qe) return Promise.resolve();
        const w = !re && HE(ph(U.fullPath, 0)) || (xe || !re) && history.state && history.state.scroll || null;
        return Gt().then(() => qe(U, de, w)).then(E => E && jE(E)).catch(E => Ce(E, U, de))
    }
    const at = U => o.go(U);
    let _n;
    const nn = new Set,
        Hr = {
            currentRoute: l,
            listening: !0,
            addRoute: v,
            removeRoute: _,
            hasRoute: P,
            getRoutes: g,
            resolve: S,
            options: e,
            push: A,
            replace: N,
            go: at,
            back: () => at(-1),
            forward: () => at(1),
            beforeEach: a.add,
            beforeResolve: s.add,
            afterEach: i.add,
            onError: Ae.add,
            isReady: pt,
            install(U) {
                const de = this;
                U.component("RouterLink", E5), U.component("RouterView", u0), U.config.globalProperties.$router = de, Object.defineProperty(U.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => y(l)
                }), Zr && !_n && l.value === bn && (_n = !0, A(o.location).catch(qe => {}));
                const re = {};
                for (const qe in bn) Object.defineProperty(re, qe, {
                    get: () => l.value[qe],
                    enumerable: !0
                });
                U.provide(Cd, de), U.provide(Pd, hi(re)), U.provide(Ru, l);
                const xe = U.unmount;
                nn.add(U), U.unmount = function() {
                    nn.delete(U), nn.size < 1 && (c = bn, fe && fe(), fe = null, l.value = bn, _n = !1, _e = !1), xe()
                }
            }
        };

    function kt(U) {
        return U.reduce((de, re) => de.then(() => le(re)), Promise.resolve())
    }
    return Hr
}

function S5(e, t) {
    const n = [],
        r = [],
        o = [],
        a = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < a; s++) {
        const i = t.matched[s];
        i && (e.matched.find(c => go(c, i)) ? r.push(i) : n.push(i));
        const l = e.matched[s];
        l && (t.matched.find(c => go(c, l)) || o.push(l))
    }
    return [n, r, o]
}

function A5() {
    return rt(Pd)
}
const Io = {
        layout: "empty",
        title: "Login",
        preview: {
            title: "Login 1",
            description: "For authentication and sign in",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-login-1.png",
            srcDark: "/img/screens/auth-login-1-dark.png",
            order: 96
        }
    },
    Mo = {
        layout: "empty",
        title: "Login",
        preview: {
            title: "Login 2",
            description: "For authentication and sign in",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-login-2.png",
            srcDark: "/img/screens/auth-login-2-dark.png",
            order: 97
        }
    },
    Fo = {
        layout: "empty",
        title: "Login",
        preview: {
            title: "Login 3",
            description: "For authentication and sign in",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-login-3.png",
            srcDark: "/img/screens/auth-login-3-dark.png",
            order: 98
        }
    },
    No = {
        layout: "empty",
        title: "Login",
        preview: {
            title: "Login 4",
            description: "For authentication and sign in",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-login-4.png",
            srcDark: "/img/screens/auth-login-4-dark.png",
            order: 99
        }
    },
    jo = {
        layout: "empty",
        title: "Recover Password",
        preview: {
            title: "Recover",
            description: "For password recovery",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-recover.png",
            srcDark: "/img/screens/auth-recover-dark.png",
            order: 103
        }
    },
    Bo = {
        layout: "empty",
        title: "Signup",
        preview: {
            title: "Signup 1",
            description: "For authentication and sign up",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-signup-1.png",
            srcDark: "/img/screens/auth-signup-1-dark.png",
            order: 100
        }
    },
    Ho = {
        layout: "empty",
        title: "Signup",
        preview: {
            title: "Signup 2",
            description: "For authentication and sign up",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-signup-2.png",
            srcDark: "/img/screens/auth-signup-2-dark.png",
            order: 101
        }
    },
    zo = {
        layout: "empty",
        title: "Signup",
        preview: {
            title: "Signup 3",
            description: "For authentication and sign up",
            categories: ["layouts", "authentication"],
            src: "/img/screens/auth-signup-3.png",
            srcDark: "/img/screens/auth-signup-3-dark.png",
            order: 102
        }
    },
    Vo = {
        title: "Analytics",
        preview: {
            title: "Analytics dashboard",
            description: "For heavy stats and kpis",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-analytics.png",
            srcDark: "/img/screens/dashboards-analytics-dark.png",
            order: 4
        }
    },
    Uo = {
        title: "Overview",
        preview: {
            title: "Banking dashboard v1",
            description: "For banking and accounts",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-banking-1.png",
            srcDark: "/img/screens/dashboards-banking-1-dark.png",
            order: 7
        }
    },
    Wo = {
        title: "Credit Cards",
        preview: {
            title: "Banking dashboard v2",
            description: "For banking and accounts",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-banking-2.png",
            srcDark: "/img/screens/dashboards-banking-2-dark.png",
            order: 8
        }
    },
    qo = {
        title: "Cryptocurrency",
        preview: {
            title: "Banking dashboard v3",
            description: "For banking and accounts",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-banking-3.png",
            srcDark: "/img/screens/dashboards-banking-3-dark.png",
            order: 9
        }
    },
    Ko = {
        title: "Calendar",
        layout: "empty",
        preview: {
            title: "Calendar app",
            description: "For email and messaging apps",
            categories: ["dashboards"],
            src: "/img/screens/dashboard-calendar.png",
            srcDark: "/img/screens/dashboard-calendar-dark.png",
            order: 25
        }
    },
    Go = {
        title: "Apex Charts",
        preview: {
            title: "Chart examples",
            description: "For data visualization",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-charts.png",
            srcDark: "/img/screens/dashboards-charts-dark.png",
            order: 26
        }
    },
    Jo = {
        title: "Company",
        preview: {
            title: "Company dashboard",
            description: "For corporate business",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-company.png",
            srcDark: "/img/screens/dashboards-company-dark.png",
            order: 11
        }
    },
    Qo = {
        title: "E-Learning",
        preview: {
            title: "Course dashboard",
            description: "For School and Education",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-course.png",
            srcDark: "/img/screens/dashboards-course-dark.png",
            order: 13
        }
    },
    Yo = {
        title: "Delivery",
        preview: {
            title: "Delivery dashboard",
            description: "For food delivery services",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-delivery.png",
            srcDark: "/img/screens/dashboards-delivery-dark.png",
            order: 22
        }
    },
    Xo = {
        title: "Ecommerce",
        preview: {
            title: "Ecommerce dashboard",
            description: "For sales and online stores",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-ecommerce.png",
            srcDark: "/img/screens/dashboards-ecommerce-dark.png",
            order: 21
        }
    },
    Zo = {
        title: "Flights",
        preview: {
            title: "Flights dashboard",
            description: "For travel and booking",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-banking-3.png",
            srcDark: "/img/screens/dashboards-banking-3-dark.png",
            order: 10
        }
    },
    ea = {
        title: "Health",
        preview: {
            title: "Health dashboard",
            description: "For health and fitness",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-health.png",
            srcDark: "/img/screens/dashboards-health-dark.png",
            order: 17
        }
    },
    ta = {
        title: "Hobbies",
        preview: {
            title: "Hobbies dashboard",
            description: "For hobbies and interests",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-hobbies.png",
            srcDark: "/img/screens/dashboards-hobbies-dark.png",
            order: 16
        }
    },
    na = {
        title: "Human Resources",
        preview: {
            title: "HR dashboard",
            description: "For HR management",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-human-resources.png",
            srcDark: "/img/screens/dashboards-human-resources-dark.png",
            order: 12
        }
    },
    ra = {
        title: "Inbox",
        layout: "empty",
        preview: {
            title: "Inbox app",
            description: "For email and messaging apps",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-inbox.png",
            srcDark: "/img/screens/dashboards-inbox-dark.png",
            order: 25
        }
    },
    oa = {
        title: "Activity",
        preview: {
            title: "Personal dashboard v1",
            description: "For personal usage and reports",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-personal-1.png",
            srcDark: "/img/screens/dashboards-personal-1-dark.png",
            order: 1
        }
    },
    aa = {
        title: "Influencer",
        preview: {
            title: "Influencer dashboard",
            description: "For social media influencers",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-influencer.png",
            srcDark: "/img/screens/dashboards-influencer-dark.png",
            order: 15
        }
    },
    sa = {
        title: "Jobs",
        preview: {
            title: "Jobs dashboard",
            description: "For recruitment and job search",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-jobs.png",
            srcDark: "/img/screens/dashboards-jobs-dark.png",
            order: 14
        }
    },
    ia = {
        title: "Map",
        layout: "empty",
        preview: {
            title: "Left map panel",
            description: "For location based apps",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-map-left.png",
            srcDark: "/img/screens/dashboards-map-left-dark.png",
            order: 23
        }
    },
    la = {
        title: "Map",
        layout: "empty",
        preview: {
            title: "Right map panel",
            description: "For location based apps",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-map-right.png",
            srcDark: "/img/screens/dashboards-map-right-dark.png",
            order: 24
        }
    },
    ca = {
        title: "Messaging",
        layout: "empty",
        preview: {
            title: "Messaging app",
            description: "For chat and messaging apps",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-messaging.png",
            srcDark: "/img/screens/dashboards-messaging-dark.png",
            order: 26
        }
    },
    ua = {
        title: "My Projects",
        preview: {
            title: "Personal dashboard v2",
            description: "For personal usage and reports",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-personal-2.png",
            srcDark: "/img/screens/dashboards-personal-2-dark.png",
            order: 2
        }
    },
    da = {
        title: "Interviews",
        preview: {
            title: "Personal dashboard v3",
            description: "For personal usage and reports",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-personal-3.png",
            srcDark: "/img/screens/dashboards-personal-3-dark.png",
            order: 3
        }
    },
    fa = {
        title: "Sales",
        preview: {
            title: "Sales dashboard",
            description: "For sales and marketing",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-sales.png",
            srcDark: "/img/screens/dashboards-sales-dark.png",
            order: 6
        }
    },
    pa = {
        title: "Soccer",
        preview: {
            title: "Soccer dashboard",
            description: "For soccer & football fans",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-soccer.png",
            srcDark: "/img/screens/dashboards-soccer-dark.png",
            order: 20
        }
    },
    ha = {
        title: "Stocks",
        preview: {
            title: "Stocks dashboard",
            description: "For stock market analysis",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-stocks.png",
            srcDark: "/img/screens/dashboards-stocks-dark.png",
            order: 5
        }
    },
    ma = {
        title: "Video",
        preview: {
            title: "Video dashboard",
            description: "For video content creators",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-video.png",
            srcDark: "/img/screens/dashboards-video-dark.png",
            order: 19
        }
    },
    ga = {
        title: "Creative Widgets",
        preview: {
            title: "Creative Widgets",
            description: "For page compositions",
            categories: ["dashboards", "widgets"],
            src: "/img/screens/dashboards-widgets-creative.png",
            srcDark: "/img/screens/dashboards-widgets-creative-dark.png",
            order: 28
        }
    },
    va = {
        title: "UI Widgets",
        preview: {
            title: "UI Widgets",
            description: "For page compositions",
            categories: ["dashboards", "widgets"],
            src: "/img/screens/dashboards-widgets-ui.png",
            srcDark: "/img/screens/dashboards-widgets-ui-dark.png",
            order: 27
        }
    },
    _a = {
        title: "List Widgets",
        preview: {
            title: "List Widgets",
            description: "For page compositions",
            categories: ["dashboards", "widgets"],
            src: "/img/screens/dashboards-widgets-lists.png",
            srcDark: "/img/screens/dashboards-widgets-lists-dark.png",
            order: 29
        }
    },
    ba = {
        title: "Writer",
        preview: {
            title: "Writer dashboard",
            description: "For writers and bloggers",
            categories: ["dashboards"],
            src: "/img/screens/dashboards-writer.png",
            srcDark: "/img/screens/dashboards-writer-dark.png",
            order: 18
        }
    },
    ya = {
        title: "Card Grid",
        preview: {
            title: "Card grid 1",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-card-grid-1.png",
            srcDark: "/img/screens/layouts-card-grid-1-dark.png",
            order: 57
        }
    },
    wa = {
        title: "Card Grid",
        preview: {
            title: "Card grid 2",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-card-grid-2.png",
            srcDark: "/img/screens/layouts-card-grid-2-dark.png",
            order: 58
        }
    },
    xa = {
        title: "Card Grid",
        preview: {
            title: "Card grid 3",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-card-grid-3.png",
            srcDark: "/img/screens/layouts-card-grid-3-dark.png",
            order: 59
        }
    },
    ka = {
        title: "Card Grid",
        preview: {
            title: "Card grid 4",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-card-grid-4.png",
            srcDark: "/img/screens/layouts-card-grid-4-dark.png",
            order: 60
        }
    },
    Ea = {
        title: "Flex List",
        preview: {
            title: "Flex list 1",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-flex-1.png",
            srcDark: "/img/screens/layouts-list-flex-1-dark.png",
            order: 41
        }
    },
    Ta = {
        title: "Flex List",
        preview: {
            title: "Flex list 2",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-flex-2.png",
            srcDark: "/img/screens/layouts-list-flex-2-dark.png",
            order: 42
        }
    },
    Ca = {
        title: "Flex List",
        preview: {
            title: "Flex list 3",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-flex-3.png",
            srcDark: "/img/screens/layouts-list-flex-3-dark.png",
            order: 43
        }
    },
    Pa = {
        title: "Form layout 1",
        preview: {
            title: "Form layout 1",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-1.png",
            srcDark: "/img/screens/layouts-form-1-dark.png",
            order: 47
        }
    },
    $a = {
        title: "New Doctor",
        preview: {
            title: "Form layout 2",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-2.png",
            srcDark: "/img/screens/layouts-form-2-dark.png",
            order: 48
        }
    },
    Sa = {
        title: "Checkout",
        preview: {
            title: "Form layout 3",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-3.png",
            srcDark: "/img/screens/layouts-form-3-dark.png",
            order: 49
        }
    },
    Aa = {
        title: "New Event",
        preview: {
            title: "Form layout 4",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-4.png",
            srcDark: "/img/screens/layouts-form-4-dark.png",
            order: 50
        }
    },
    La = {
        title: "Password",
        preview: {
            title: "Form layout 5",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-5.png",
            srcDark: "/img/screens/layouts-form-5-dark.png",
            order: 51
        }
    },
    Oa = {
        title: "Meeting",
        preview: {
            title: "Form layout 6",
            description: "For forms and input fields",
            categories: ["layouts", "forms"],
            src: "/img/screens/layouts-form-6.png",
            srcDark: "/img/screens/layouts-form-6-dark.png",
            order: 52
        }
    },
    Ra = {
        title: "List View",
        preview: {
            title: "List view 1",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-view-1.png",
            srcDark: "/img/screens/layouts-list-view-1-dark.png",
            order: 37
        }
    },
    Da = {
        title: "List View",
        preview: {
            title: "List view 2",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-view-2.png",
            srcDark: "/img/screens/layouts-list-view-2-dark.png",
            order: 38
        }
    },
    Ia = {
        title: "List View",
        preview: {
            title: "List view 3",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-view-3.png",
            srcDark: "/img/screens/layouts-list-view-3-dark.png",
            order: 39
        }
    },
    Ma = {
        title: "List View",
        preview: {
            title: "List view 4",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-list-view-4.png",
            srcDark: "/img/screens/layouts-list-view-4-dark.png",
            order: 40
        }
    },
    Fa = {
        title: "Onboarding",
        layout: "empty",
        preview: {
            title: "Onboarding 1",
            description: "For onboarding new users",
            categories: ["layouts", "onboarding"],
            src: "/img/screens/layouts-onboarding-1.png",
            srcDark: "/img/screens/layouts-onboarding-1-dark.png",
            order: 93
        }
    },
    Na = {
        title: "Onboarding",
        layout: "empty",
        preview: {
            title: "Onboarding 2",
            description: "For onboarding new users",
            categories: ["layouts", "onboarding"],
            src: "/img/screens/layouts-onboarding-2.png",
            srcDark: "/img/screens/layouts-onboarding-2-dark.png",
            order: 94
        }
    },
    ja = {
        title: "Onboarding",
        layout: "empty",
        preview: {
            title: "Onboarding 3",
            description: "For onboarding new users",
            categories: ["layouts", "onboarding"],
            src: "/img/screens/layouts-onboarding-3.png",
            srcDark: "/img/screens/layouts-onboarding-3-dark.png",
            order: 95
        }
    },
    Ba = {
        title: "Placeload",
        preview: {
            title: "Placeload 1",
            description: "For loading states",
            categories: ["layouts"],
            src: "/img/screens/layouts-placeload-1.png",
            srcDark: "/img/screens/layouts-placeload-1-dark.png",
            order: 53
        }
    },
    Ha = {
        title: "Placeload",
        preview: {
            title: "Placeload 2",
            description: "For loading states",
            categories: ["layouts"],
            src: "/img/screens/layouts-placeload-2.png",
            srcDark: "/img/screens/layouts-placeload-2-dark.png",
            order: 54
        }
    },
    za = {
        title: "Placeload",
        preview: {
            title: "Placeload 3",
            description: "For loading states",
            categories: ["layouts"],
            src: "/img/screens/layouts-placeload-3.png",
            srcDark: "/img/screens/layouts-placeload-3-dark.png",
            order: 55
        }
    },
    Va = {
        title: "Placeload",
        preview: {
            title: "Placeload 4",
            description: "For loading states",
            categories: ["layouts"],
            src: "/img/screens/layouts-placeload-4.png",
            srcDark: "/img/screens/layouts-placeload-4-dark.png",
            order: 56
        }
    },
    Ua = {
        title: "Experience",
        preview: {
            title: "Edit profile 2",
            description: "For editing a user profile",
            categories: ["layouts", "profile", "forms"],
            src: "/img/screens/layouts-subpages-profile-edit-2.png",
            srcDark: "/img/screens/layouts-subpages-profile-edit-2-dark.png",
            order: 77
        }
    },
    Wa = {
        title: "Edit Profile",
        preview: {
            title: "Edit profile 1",
            description: "For editing a user profile",
            categories: ["layouts", "profile", "forms"],
            src: "/img/screens/layouts-subpages-profile-edit-1.png",
            srcDark: "/img/screens/layouts-subpages-profile-edit-1-dark.png",
            order: 76
        }
    },
    qa = {
        title: "Settings",
        preview: {
            title: "Edit profile 4",
            description: "For editing a user profile",
            categories: ["layouts", "profile", "forms"],
            src: "/img/screens/layouts-subpages-profile-edit-4.png",
            srcDark: "/img/screens/layouts-subpages-profile-edit-4-dark.png",
            order: 79
        }
    },
    Ka = {
        title: "Skills",
        preview: {
            title: "Edit profile 3",
            description: "For editing a user profile",
            categories: ["layouts", "profile", "forms"],
            src: "/img/screens/layouts-subpages-profile-edit-3.png",
            srcDark: "/img/screens/layouts-subpages-profile-edit-3-dark.png",
            order: 78
        }
    },
    Ga = {
        title: "Edit Profile",
        preview: {
            title: "Edit profile 1",
            description: "For editing a user profile",
            categories: ["layouts", "profile", "forms"],
            src: "/img/screens/layouts-subpages-profile-edit-1.png",
            srcDark: "/img/screens/layouts-subpages-profile-edit-1-dark.png",
            order: 76
        }
    },
    Ja = {
        title: "Notifications",
        preview: {
            title: "Notifications",
            description: "For displaying account notifications",
            categories: ["layouts", "profile"],
            src: "/img/screens/layouts-subpages-notifications.png",
            srcDark: "/img/screens/layouts-subpages-notifications-dark.png",
            order: 80
        }
    },
    Qa = {
        title: "Settings",
        preview: {
            title: "Settings",
            description: "For displaying account settings",
            categories: ["layouts", "profile"],
            src: "/img/screens/layouts-subpages-settings.png",
            srcDark: "/img/screens/layouts-subpages-settings-dark.png",
            order: 81
        }
    },
    Ya = {
        title: "Profile",
        preview: {
            title: "Profile",
            description: "For displaying a user profile",
            categories: ["layouts", "profile"],
            src: "/img/screens/layouts-subpages-profile.png",
            srcDark: "/img/screens/layouts-subpages-profile-dark.png",
            order: 75
        }
    },
    Xa = {
        title: "Project Board",
        layout: "empty",
        preview: [{
            title: "Project board",
            description: "For a fitness project kanban board",
            categories: ["layouts", "projects", "kanban"],
            src: "/img/screens/layouts-projects-board.png",
            srcDark: "/img/screens/layouts-projects-board-dark.png",
            order: 74,
            params: {
                slug: "health-and-fitness-dashboard"
            }
        }, {
            title: "Project board",
            description: "For a banking project kanban board",
            categories: ["layouts", "projects", "kanban"],
            src: "/img/screens/layouts-projects-board.png",
            srcDark: "/img/screens/layouts-projects-board-dark.png",
            order: 74,
            params: {
                slug: "banking-and-finance-dashboard"
            }
        }]
    },
    Za = {
        title: "Board List",
        preview: {
            title: "Project board hub",
            description: "For displaying recent projects",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-board-hub.png",
            srcDark: "/img/screens/layouts-projects-board-hub-dark.png",
            order: 73
        }
    },
    es = {
        title: "Project Details",
        preview: [{
            title: "Project details",
            description: "For displaying fitness project details",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-details.png",
            srcDark: "/img/screens/layouts-projects-details-dark.png",
            order: 72,
            params: {
                slug: "health-and-fitness-dashboard"
            }
        }, {
            title: "Project details",
            description: "For displaying banking project details",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-details.png",
            srcDark: "/img/screens/layouts-projects-details-dark.png",
            order: 72,
            params: {
                slug: "banking-and-finance-dashboard"
            }
        }]
    },
    ts = {
        title: "Project List",
        preview: {
            title: "Project details hub",
            description: "For displaying recent projects",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-details-hub.png",
            srcDark: "/img/screens/layouts-projects-details-hub-dark.png",
            order: 71
        }
    },
    ns = {
        title: "Project List",
        preview: {
            title: "Project list 1",
            description: "For displaying a list of projects",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-1.png",
            srcDark: "/img/screens/layouts-projects-1-dark.png",
            order: 68
        }
    },
    rs = {
        title: "Project List",
        preview: {
            title: "Project list 2",
            description: "For displaying a list of projects",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-2.png",
            srcDark: "/img/screens/layouts-projects-2-dark.png",
            order: 69
        }
    },
    os = {
        title: "Project List",
        preview: {
            title: "Project list 3",
            description: "For displaying a list of projects",
            categories: ["layouts", "projects"],
            src: "/img/screens/layouts-projects-3.png",
            srcDark: "/img/screens/layouts-projects-3-dark.png",
            order: 70
        }
    },
    as = {
        title: "Empty Search",
        preview: {
            title: "Empty search",
            description: "For displaying search results",
            categories: ["layouts"],
            src: "/img/screens/layouts-subpages-search-empty.png",
            srcDark: "/img/screens/layouts-subpages-search-empty-dark.png",
            order: 83
        }
    },
    ss = {
        title: "Search Results",
        preview: {
            title: "Search results",
            description: "For displaying search results",
            categories: ["layouts"],
            src: "/img/screens/layouts-subpages-search-results.png",
            srcDark: "/img/screens/layouts-subpages-search-results-dark.png",
            order: 82
        }
    },
    is = {
        title: "Table List",
        preview: {
            title: "Table list 1",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-table-list-1.png",
            srcDark: "/img/screens/layouts-table-list-1-dark.png",
            order: 44
        }
    },
    ls = {
        title: "Table List",
        preview: {
            title: "Table list 2",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-table-list-2.png",
            srcDark: "/img/screens/layouts-table-list-2-dark.png",
            order: 45
        }
    },
    cs = {
        title: "Table List",
        preview: {
            title: "Table list 3",
            description: "For list views and collections",
            categories: ["layouts", "lists"],
            src: "/img/screens/layouts-table-list-3.png",
            srcDark: "/img/screens/layouts-table-list-3-dark.png",
            order: 46
        }
    },
    us = {
        title: "Tiles",
        preview: {
            title: "Tile grid 1",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-tile-grid-1.png",
            srcDark: "/img/screens/layouts-tile-grid-1-dark.png",
            order: 61
        }
    },
    ds = {
        title: "Tiles",
        preview: {
            title: "Tile grid 2",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-tile-grid-2.png",
            srcDark: "/img/screens/layouts-tile-grid-2-dark.png",
            order: 62
        }
    },
    fs = {
        title: "Tiles",
        preview: {
            title: "Tile grid 3",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-tile-grid-3.png",
            srcDark: "/img/screens/layouts-tile-grid-3-dark.png",
            order: 63
        }
    },
    ps = {
        title: "Users",
        preview: {
            title: "User grid 1",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-user-grid-1.png",
            srcDark: "/img/screens/layouts-user-grid-1-dark.png",
            order: 64
        }
    },
    hs = {
        title: "Users",
        preview: {
            title: "User grid 2",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-user-grid-2.png",
            srcDark: "/img/screens/layouts-user-grid-2-dark.png",
            order: 65
        }
    },
    ms = {
        title: "Users",
        preview: {
            title: "User grid 3",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-user-grid-3.png",
            srcDark: "/img/screens/layouts-user-grid-3-dark.png",
            order: 66
        }
    },
    gs = {
        title: "Users",
        preview: {
            title: "User grid 4",
            description: "For item grids and collections",
            categories: ["layouts"],
            src: "/img/screens/layouts-user-grid-4.png",
            srcDark: "/img/screens/layouts-user-grid-4-dark.png",
            order: 67
        }
    },
    vs = {
        title: "Action",
        preview: {
            title: "Action 1",
            description: "For actions and tasks",
            categories: ["layouts"],
            src: "/img/screens/layouts-subpages-action-1.png",
            srcDark: "/img/screens/layouts-subpages-action-1-dark.png",
            order: 85
        }
    },
    _s = {
        title: "Action",
        preview: {
            title: "Action 2",
            description: "For actions and tasks",
            categories: ["layouts"],
            src: "/img/screens/layouts-subpages-action-2.png",
            srcDark: "/img/screens/layouts-subpages-action-2-dark.png",
            order: 86
        }
    },
    bs = {
        title: "SaaS Billing",
        preview: {
            title: "SaaS billing",
            description: "For saas billing plans",
            categories: ["layouts"],
            src: "/img/screens/layouts-subpages-billing.png",
            srcDark: "/img/screens/layouts-subpages-billing-dark.png",
            order: 84
        }
    },
    ys = {
        title: "Confirm",
        preview: {
            title: "Confirm Account",
            description: "For account confirmation",
            categories: ["layouts"],
            src: "/img/screens/layouts-utility-confirm.png",
            srcDark: "/img/screens/layouts-utility-confirm-dark.png",
            order: 87
        }
    },
    ws = {
        title: "Error",
        layout: "empty",
        preview: {
            title: "Error",
            description: "For system errors",
            categories: ["layouts"],
            src: "/img/screens/layouts-utility-error.png",
            srcDark: "/img/screens/layouts-utility-error-dark.png",
            order: 92
        }
    },
    xs = {
        title: "Invoice",
        preview: {
            title: "Invoice",
            description: "For accounting and invoices",
            categories: ["layouts"],
            src: "/img/screens/layouts-utility-invoice.png",
            srcDark: "/img/screens/layouts-utility-invoice-dark.png",
            order: 90
        }
    },
    ks = {
        title: "Promotion",
        preview: {
            title: "Promotion",
            description: "For promotional offers",
            categories: ["layouts"],
            src: "/img/screens/layouts-utility-promotion.png",
            srcDark: "/img/screens/layouts-utility-promotion-dark.png",
            order: 88
        }
    },
    Es = {
        title: "Status",
        layout: "empty",
        preview: {
            title: "Service status",
            description: "For company service status",
            categories: ["layouts"],
            src: "/img/screens/layouts-utility-status.png",
            srcDark: "/img/screens/layouts-utility-status-dark.png",
            order: 91
        }
    },
    Ts = {},
    Cs = {
        title: "Collapse Layout",
        layout: "empty"
    },
    Ps = {
        title: "Sidebar Layout",
        layout: "empty"
    },
    $s = {
        title: "Wizard — Step 1",
        preview: {
            title: "Wizard — Step 1",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-1.png",
            srcDark: "/img/screens/wizard-1-dark.png",
            order: 30
        }
    },
    Ss = {
        title: "Wizard — Step 2",
        preview: {
            title: "Wizard — Step 2",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-2.png",
            srcDark: "/img/screens/wizard-2-dark.png",
            order: 31
        }
    },
    As = {
        title: "Wizard — Step 3",
        preview: {
            title: "Wizard — Step 3",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-3.png",
            srcDark: "/img/screens/wizard-3-dark.png",
            order: 32
        }
    },
    Ls = {
        title: "Wizard — Step 4",
        preview: {
            title: "Wizard — Step 4",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-4.png",
            srcDark: "/img/screens/wizard-4-dark.png",
            order: 33
        }
    },
    Os = {
        title: "Wizard — Step 5",
        preview: {
            title: "Wizard — Step 5",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-5.png",
            srcDark: "/img/screens/wizard-5-dark.png",
            order: 34
        }
    },
    Rs = {
        title: "Wizard — Step 6",
        preview: {
            title: "Wizard — Step 6",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-6.png",
            srcDark: "/img/screens/wizard-6-dark.png",
            order: 35
        }
    },
    Ds = {
        title: "Wizard — Step 7",
        preview: {
            title: "Wizard — Step 7",
            description: "For onboarding and step forms",
            categories: ["dashboards", "wizard", "forms"],
            src: "/img/screens/wizard-7.png",
            srcDark: "/img/screens/wizard-7-dark.png",
            order: 36
        }
    },
    Is = {
        layout: "empty"
    },
    Ms = {
        title: "Prebuilt dashboards pages",
        description: "Explore 100+ prebuilt pages, including dashboards and app examples. Kickstart your project with Nuxt and Tailwind CSS.",
        layout: "landing"
    },
    Fs = {
        title: "The Nuxt & Tailwind CSS dashboard system",
        description: "Nuxt & Tailwind CSS dashboard system template that comes with 100+ prebuilt pages and 40+ custom UI components.",
        breadcrumb: {
            label: "Tairo"
        },
        layout: "landing"
    },
    Ns = {
        pageTransition: !1,
        layoutTransition: !1
    },
    Ph = [{
        name: Io ? .name ? ? "auth",
        path: Io ? .path ? ? "/auth",
        meta: Io || {},
        alias: Io ? .alias || [],
        redirect: Io ? .redirect || void 0,
        component: () => C(() =>
            import ("./index.169447ae.js"), ["./index.169447ae.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Mo ? .name ? ? "auth-login-1",
        path: Mo ? .path ? ? "/auth/login-1",
        meta: Mo || {},
        alias: Mo ? .alias || [],
        redirect: Mo ? .redirect || void 0,
        component: () => C(() =>
            import ("./login-1.dee93332.js"), ["./login-1.dee93332.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Fo ? .name ? ? "auth-login-2",
        path: Fo ? .path ? ? "/auth/login-2",
        meta: Fo || {},
        alias: Fo ? .alias || [],
        redirect: Fo ? .redirect || void 0,
        component: () => C(() =>
            import ("./login-2.fc9669b7.js"), ["./login-2.fc9669b7.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: No ? .name ? ? "auth-login-3",
        path: No ? .path ? ? "/auth/login-3",
        meta: No || {},
        alias: No ? .alias || [],
        redirect: No ? .redirect || void 0,
        component: () => C(() =>
            import ("./login-3.29545be7.js"), ["./login-3.29545be7.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: jo ? .name ? ? "auth-recover",
        path: jo ? .path ? ? "/auth/recover",
        meta: jo || {},
        alias: jo ? .alias || [],
        redirect: jo ? .redirect || void 0,
        component: () => C(() =>
            import ("./recover.7339d4a1.js"), ["./recover.7339d4a1.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseMessage.vue.5399e0de.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Bo ? .name ? ? "auth-signup-1",
        path: Bo ? .path ? ? "/auth/signup-1",
        meta: Bo || {},
        alias: Bo ? .alias || [],
        redirect: Bo ? .redirect || void 0,
        component: () => C(() =>
            import ("./signup-1.5998685a.js"), ["./signup-1.5998685a.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Ho ? .name ? ? "auth-signup-2",
        path: Ho ? .path ? ? "/auth/signup-2",
        meta: Ho || {},
        alias: Ho ? .alias || [],
        redirect: Ho ? .redirect || void 0,
        component: () => C(() =>
            import ("./signup-2.dbdd8712.js"), ["./signup-2.dbdd8712.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: zo ? .name ? ? "auth-signup-3",
        path: zo ? .path ? ? "/auth/signup-3",
        meta: zo || {},
        alias: zo ? .alias || [],
        redirect: zo ? .redirect || void 0,
        component: () => C(() =>
            import ("./signup-3.e3d74093.js"), ["./signup-3.e3d74093.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./1.671b8c02.js", "./9.379f9e46.js", "./19.9d88898e.js", "./12.83c5e797.js", "./24.b29f931c.js", "./3.207767d4.js", "./vee-validate.esm.1896db93.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Vo ? .name ? ? "dashboards-analytics",
        path: Vo ? .path ? ? "/dashboards/analytics",
        meta: Vo || {},
        alias: Vo ? .alias || [],
        redirect: Vo ? .redirect || void 0,
        component: () => C(() =>
            import ("./analytics.a1b9ec1c.js"), ["./analytics.a1b9ec1c.js", "./BaseIconBox.vue.049ba203.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoVcardRight.vue.2925e95b.js", "./BaseAvatar.vue.97d6ac95.js", "./DemoFollowersCompact.vue.c8cdebf6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./DemoNotificationsCompact.5f69ea19.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Uo ? .name ? ? "dashboards-banking-1",
        path: Uo ? .path ? ? "/dashboards/banking-1",
        meta: Uo || {},
        alias: Uo ? .alias || [],
        redirect: Uo ? .redirect || void 0,
        component: () => C(() =>
            import ("./banking-1.d5966ccb.js"), ["./banking-1.d5966ccb.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BaseIconBox.vue.049ba203.js", "./BaseListbox.vue.af7c7605.js", "./BaseAvatar.vue.97d6ac95.js", "./use-controllable.44593918.js", "./BaseProgress.vue.39cdf738.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Wo ? .name ? ? "dashboards-banking-2",
        path: Wo ? .path ? ? "/dashboards/banking-2",
        meta: Wo || {},
        alias: Wo ? .alias || [],
        redirect: Wo ? .redirect || void 0,
        component: () => C(() =>
            import ("./banking-2.40b99da6.js"), ["./banking-2.40b99da6.js", "./BaseButtonIcon.vue.a0506f73.js", "./format-currency.1b0c1ab0.js", "./BaseListbox.vue.af7c7605.js", "./BaseIconBox.vue.049ba203.js", "./BaseAvatar.vue.97d6ac95.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-controllable.44593918.js", "./use-text-value.d92f8611.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: qo ? .name ? ? "dashboards-banking-3",
        path: qo ? .path ? ? "/dashboards/banking-3",
        meta: qo || {},
        alias: qo ? .alias || [],
        redirect: qo ? .redirect || void 0,
        component: () => C(() =>
            import ("./banking-3.678bf9ad.js"), ["./banking-3.678bf9ad.js", "./BaseButtonAction.vue.15a468c3.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoTeamListCompact.vue.d439feca.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./format-currency.1b0c1ab0.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Ko ? .name ? ? "dashboards-calendar",
        path: Ko ? .path ? ? "/dashboards/calendar",
        meta: Ko || {},
        alias: Ko ? .alias || [],
        redirect: Ko ? .redirect || void 0,
        component: () => C(() =>
            import ("./calendar.72a675ab.js"), ["./calendar.72a675ab.js", "./TairoLogo.d97795b4.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseAvatar.vue.97d6ac95.js", "./index.3e2319eb.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseButtonGroup.b6cf217c.js", "./BaseSwitchThin.vue.8e1d684e.js", "./BaseListbox.vue.af7c7605.js", "./BaseIconBox.vue.049ba203.js", "./use-controllable.44593918.js", "./BaseAutocomplete.vue.4d485ee1.js", "./combobox.7dbe84ed.js", "./BaseCheckboxHeadless.vue.c457f47c.js", "./format-strings.6ac56943.js", "./placeholder-projects-dark.6cfdfb76.js", "./index.db39d5b7.js", "./vue3-smooth-dnd.esm.b9ffb400.js", "./calendar.0a21a90b.css", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Go ? .name ? ? "dashboards-charts",
        path: Go ? .path ? ? "/dashboards/charts",
        meta: Go || {},
        alias: Go ? .alias || [],
        redirect: Go ? .redirect || void 0,
        component: () => C(() =>
            import ("./charts.3faa8169.js"), ["./charts.3faa8169.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./apex.13736249.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Jo ? .name ? ? "dashboards-company",
        path: Jo ? .path ? ? "/dashboards/company",
        meta: Jo || {},
        alias: Jo ? .alias || [],
        redirect: Jo ? .redirect || void 0,
        component: () => C(() =>
            import ("./company.bdf82521.js"), ["./company.bdf82521.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./TairoTable.vue.286c711b.js", "./BaseTag.vue.faa2c4d6.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Qo ? .name ? ? "dashboards-course",
        path: Qo ? .path ? ? "/dashboards/course",
        meta: Qo || {},
        alias: Qo ? .alias || [],
        redirect: Qo ? .redirect || void 0,
        component: () => C(() =>
            import ("./course.bcb0fb35.js"), ["./course.bcb0fb35.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseButtonIcon.vue.a0506f73.js", "./DemoFlexTableRow.vue.c4718385.js", "./BaseIconBox.vue.049ba203.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Yo ? .name ? ? "dashboards-delivery",
        path: Yo ? .path ? ? "/dashboards/delivery",
        meta: Yo || {},
        alias: Yo ? .alias || [],
        redirect: Yo ? .redirect || void 0,
        component: () => C(() =>
            import ("./delivery.97946104.js"), ["./delivery.97946104.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseAvatar.vue.97d6ac95.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Xo ? .name ? ? "dashboards-ecommerce",
        path: Xo ? .path ? ? "/dashboards/ecommerce",
        meta: Xo || {},
        alias: Xo ? .alias || [],
        redirect: Xo ? .redirect || void 0,
        component: () => C(() =>
            import ("./ecommerce.5cb30e38.js"), ["./ecommerce.5cb30e38.js", "./BaseAvatar.vue.97d6ac95.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./apex.13736249.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Zo ? .name ? ? "dashboards-flights",
        path: Zo ? .path ? ? "/dashboards/flights",
        meta: Zo || {},
        alias: Zo ? .alias || [],
        redirect: Zo ? .redirect || void 0,
        component: () => C(() =>
            import ("./flights.31a7c91b.js"), ["./flights.31a7c91b.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseAvatar.vue.97d6ac95.js", "./DemoSearchCompact.vue.47151d79.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./format-currency.1b0c1ab0.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ea ? .name ? ? "dashboards-health",
        path: ea ? .path ? ? "/dashboards/health",
        meta: ea || {},
        alias: ea ? .alias || [],
        redirect: ea ? .redirect || void 0,
        component: () => C(() =>
            import ("./health.c9b56f53.js"), ["./health.c9b56f53.js", "./BaseIconBox.vue.049ba203.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoSearchCompact.vue.47151d79.js", "./apex.13736249.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ta ? .name ? ? "dashboards-hobbies",
        path: ta ? .path ? ? "/dashboards/hobbies",
        meta: ta || {},
        alias: ta ? .alias || [],
        redirect: ta ? .redirect || void 0,
        component: () => C(() =>
            import ("./hobbies.8cf29df2.js"), ["./hobbies.8cf29df2.js", "./BaseButtonIcon.vue.a0506f73.js", "./DemoSearchCompact.vue.47151d79.js", "./colors.cbccbc0c.js", "./hobby-3.aeceb641.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: na ? .name ? ? "dashboards-human-resources",
        path: na ? .path ? ? "/dashboards/human-resources",
        meta: na || {},
        alias: na ? .alias || [],
        redirect: na ? .redirect || void 0,
        component: () => C(() =>
            import ("./human-resources.c6344d04.js"), ["./human-resources.c6344d04.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseButtonAction.vue.15a468c3.js", "./DemoFlexTableRow.vue.c4718385.js", "./BaseIconBox.vue.049ba203.js", "./BaseTag.vue.faa2c4d6.js", "./DemoSearchCompact.vue.47151d79.js", "./DemoTeamListCompact.vue.d439feca.js", "./DemoTodoListCompact.vue.f892feab.js", "./BaseCheckboxAnimated.26baf442.js", "./BaseCheckboxAnimated.c5636d54.css", "./BaseTabSlider.vue.0b806901.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ra ? .name ? ? "dashboards-inbox",
        path: ra ? .path ? ? "/dashboards/inbox",
        meta: ra || {},
        alias: ra ? .alias || [],
        redirect: ra ? .redirect || void 0,
        component: () => C(() =>
            import ("./inbox.ab3ff189.js"), ["./inbox.ab3ff189.js", "./TairoLogo.d97795b4.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./client-only.862c29b4.js", "./inbox.6a92f989.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: oa ? .name ? ? "dashboards",
        path: oa ? .path ? ? "/dashboards",
        meta: oa || {},
        alias: oa ? .alias || [],
        redirect: oa ? .redirect || void 0,
        component: () => C(() =>
            import ("./index.87a55794.js"), ["./index.87a55794.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: aa ? .name ? ? "dashboards-influencer",
        path: aa ? .path ? ? "/dashboards/influencer",
        meta: aa || {},
        alias: aa ? .alias || [],
        redirect: aa ? .redirect || void 0,
        component: () => C(() =>
            import ("./influencer.24bf91ba.js"), ["./influencer.24bf91ba.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseProse.vue.dc20bce5.js", "./TairoPopoverContentHelp.vue.d462eaad.js", "./BaseIconBox.vue.049ba203.js", "./TairoPopover.vue.833c8c48.js", "./use-resolve-button-type.8bfbdb65.js", "./BaseAvatarGroup.vue.813e2a42.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: sa ? .name ? ? "dashboards-jobs",
        path: sa ? .path ? ? "/dashboards/jobs",
        meta: sa || {},
        alias: sa ? .alias || [],
        redirect: sa ? .redirect || void 0,
        component: () => C(() =>
            import ("./jobs.82de378f.js"), ["./jobs.82de378f.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseAvatar.vue.97d6ac95.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ia ? .name ? ? "dashboards-map-left",
        path: ia ? .path ? ? "/dashboards/map-left",
        meta: ia || {},
        alias: ia ? .alias || [],
        redirect: ia ? .redirect || void 0,
        component: () => C(() =>
            import ("./map-left.f98a7562.js"), ["./map-left.f98a7562.js", "./AddonMapboxPanel.vue.b1d2a729.js", "./TairoLogo.d97795b4.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./composables.5d7dee4e.js", "./AddonMapboxPanel.417adfa0.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: la ? .name ? ? "dashboards-map-right",
        path: la ? .path ? ? "/dashboards/map-right",
        meta: la || {},
        alias: la ? .alias || [],
        redirect: la ? .redirect || void 0,
        component: () => C(() =>
            import ("./map-right.f2d99819.js"), ["./map-right.f2d99819.js", "./AddonMapboxPanel.vue.b1d2a729.js", "./TairoLogo.d97795b4.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./composables.5d7dee4e.js", "./AddonMapboxPanel.417adfa0.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ca ? .name ? ? "dashboards-messaging",
        path: ca ? .path ? ? "/dashboards/messaging",
        meta: ca || {},
        alias: ca ? .alias || [],
        redirect: ca ? .redirect || void 0,
        component: () => C(() =>
            import ("./messaging.f5b96d75.js"), ["./messaging.f5b96d75.js", "./TairoLogo.d97795b4.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ua ? .name ? ? "dashboards-personal-2",
        path: ua ? .path ? ? "/dashboards/personal-2",
        meta: ua || {},
        alias: ua ? .alias || [],
        redirect: ua ? .redirect || void 0,
        component: () => C(() =>
            import ("./personal-2.b0454f80.js"), ["./personal-2.b0454f80.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoTeamListCompact.vue.d439feca.js", "./BaseButtonIcon.vue.a0506f73.js", "./DemoTodoListCompact.vue.f892feab.js", "./BaseCheckboxAnimated.26baf442.js", "./BaseCheckboxAnimated.c5636d54.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: da ? .name ? ? "dashboards-personal-3",
        path: da ? .path ? ? "/dashboards/personal-3",
        meta: da || {},
        alias: da ? .alias || [],
        redirect: da ? .redirect || void 0,
        component: () => C(() =>
            import ("./personal-3.1a0bae19.js"), ["./personal-3.1a0bae19.js", "./BaseIconBox.vue.049ba203.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: fa ? .name ? ? "dashboards-sales",
        path: fa ? .path ? ? "/dashboards/sales",
        meta: fa || {},
        alias: fa ? .alias || [],
        redirect: fa ? .redirect || void 0,
        component: () => C(() =>
            import ("./sales.a276f99c.js"), ["./sales.a276f99c.js", "./BaseAvatar.vue.97d6ac95.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: pa ? .name ? ? "dashboards-soccer",
        path: pa ? .path ? ? "/dashboards/soccer",
        meta: pa || {},
        alias: pa ? .alias || [],
        redirect: pa ? .redirect || void 0,
        component: () => C(() =>
            import ("./soccer.be38aeaa.js"), ["./soccer.be38aeaa.js", "./BaseTag.vue.faa2c4d6.js", "./BaseButtonIcon.vue.a0506f73.js", "./format-strings.6ac56943.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ha ? .name ? ? "dashboards-stocks",
        path: ha ? .path ? ? "/dashboards/stocks",
        meta: ha || {},
        alias: ha ? .alias || [],
        redirect: ha ? .redirect || void 0,
        component: () => C(() =>
            import ("./stocks.be640eec.js"), ["./stocks.be640eec.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BaseIconBox.vue.049ba203.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ma ? .name ? ? "dashboards-video",
        path: ma ? .path ? ? "/dashboards/video",
        meta: ma || {},
        alias: ma ? .alias || [],
        redirect: ma ? .redirect || void 0,
        component: () => C(() =>
            import ("./video.a5359ee1.js"), ["./video.a5359ee1.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseTag.vue.faa2c4d6.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ga ? .name ? ? "dashboards-widgets-creative",
        path: ga ? .path ? ? "/dashboards/widgets/creative",
        meta: ga || {},
        alias: ga ? .alias || [],
        redirect: ga ? .redirect || void 0,
        component: () => C(() =>
            import ("./creative.f9eedd1e.js"), ["./creative.f9eedd1e.js", "./DemoProgressCircle.vue.6f57540c.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseProgressCircle.893ba48c.js", "./BaseProgressCircle.1fb28e22.css", "./DemoVcardRight.vue.2925e95b.js", "./DemoIconText.vue.5b4efc4d.js", "./BaseProgress.vue.39cdf738.js", "./DemoTeamListCompact.vue.d439feca.js", "./BaseTag.vue.faa2c4d6.js", "./BaseIconBox.vue.049ba203.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: va ? .name ? ? "dashboards-widgets",
        path: va ? .path ? ? "/dashboards/widgets",
        meta: va || {},
        alias: va ? .alias || [],
        redirect: va ? .redirect || void 0,
        component: () => C(() =>
            import ("./index.12d5ba88.js"), ["./index.12d5ba88.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoFollowersCompact.vue.c8cdebf6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseAvatar.vue.97d6ac95.js", "./DemoSearchCompact.vue.47151d79.js", "./DemoInboxMessage.vue.5d7fe80b.js", "./hobby-3.aeceb641.js", "./BaseTag.vue.faa2c4d6.js", "./DemoIconText.vue.5b4efc4d.js", "./BaseProgress.vue.39cdf738.js", "./DemoNotificationsCompact.5f69ea19.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: _a ? .name ? ? "dashboards-widgets-list",
        path: _a ? .path ? ? "/dashboards/widgets/list",
        meta: _a || {},
        alias: _a ? .alias || [],
        redirect: _a ? .redirect || void 0,
        component: () => C(() =>
            import ("./list.d6551dfe.js"), ["./list.d6551dfe.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./DemoTodoListCompact.vue.f892feab.js", "./BaseCheckboxAnimated.26baf442.js", "./BaseCheckboxAnimated.c5636d54.css", "./DemoCommentListCompact.vue.1a1ea406.js", "./BaseIconBox.vue.049ba203.js", "./colors.cbccbc0c.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: ba ? .name ? ? "dashboards-writer",
        path: ba ? .path ? ? "/dashboards/writer",
        meta: ba || {},
        alias: ba ? .alias || [],
        redirect: ba ? .redirect || void 0,
        component: () => C(() =>
            import ("./writer.854a81f2.js"), ["./writer.854a81f2.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./DemoCommentListCompact.vue.1a1ea406.js", "./BaseButtonAction.vue.15a468c3.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        path: Ts ? .path ? ? "/layouts",
        children: [{
            name: ya ? .name ? ? "layouts-card-grid-1",
            path: ya ? .path ? ? "card-grid-1",
            meta: ya || {},
            alias: ya ? .alias || [],
            redirect: ya ? .redirect || void 0,
            component: () => C(() =>
                import ("./card-grid-1.a59c248a.js"), ["./card-grid-1.a59c248a.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseProgress.vue.39cdf738.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-6-dark.56b69b8e.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: wa ? .name ? ? "layouts-card-grid-2",
            path: wa ? .path ? ? "card-grid-2",
            meta: wa || {},
            alias: wa ? .alias || [],
            redirect: wa ? .redirect || void 0,
            component: () => C(() =>
                import ("./card-grid-2.cd12fc3f.js"), ["./card-grid-2.cd12fc3f.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-7-dark.bcc6bc3b.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: xa ? .name ? ? "layouts-card-grid-3",
            path: xa ? .path ? ? "card-grid-3",
            meta: xa || {},
            alias: xa ? .alias || [],
            redirect: xa ? .redirect || void 0,
            component: () => C(() =>
                import ("./card-grid-3.da66bcd4.js"), ["./card-grid-3.da66bcd4.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-7-dark.bcc6bc3b.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ka ? .name ? ? "layouts-card-grid-4",
            path: ka ? .path ? ? "card-grid-4",
            meta: ka || {},
            alias: ka ? .alias || [],
            redirect: ka ? .redirect || void 0,
            component: () => C(() =>
                import ("./card-grid-4.0895fca3.js"), ["./card-grid-4.0895fca3.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-6-dark.56b69b8e.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ea ? .name ? ? "layouts-flex-list-1",
            path: Ea ? .path ? ? "flex-list-1",
            meta: Ea || {},
            alias: Ea ? .alias || [],
            redirect: Ea ? .redirect || void 0,
            component: () => C(() =>
                import ("./flex-list-1.38ea61c7.js"), ["./flex-list-1.38ea61c7.js", "./DemoFlexTableRow.vue.c4718385.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ta ? .name ? ? "layouts-flex-list-2",
            path: Ta ? .path ? ? "flex-list-2",
            meta: Ta || {},
            alias: Ta ? .alias || [],
            redirect: Ta ? .redirect || void 0,
            component: () => C(() =>
                import ("./flex-list-2.6d222ca9.js"), ["./flex-list-2.6d222ca9.js", "./DemoFlexTableRow.vue.c4718385.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ca ? .name ? ? "layouts-flex-list-3",
            path: Ca ? .path ? ? "flex-list-3",
            meta: Ca || {},
            alias: Ca ? .alias || [],
            redirect: Ca ? .redirect || void 0,
            component: () => C(() =>
                import ("./flex-list-3.a9ae2585.js"), ["./flex-list-3.a9ae2585.js", "./DemoFlexTableRow.vue.c4718385.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapperTabbed.vue.19424f08.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Pa ? .name ? ? "layouts-form-1",
            path: Pa ? .path ? ? "form-1",
            meta: Pa || {},
            alias: Pa ? .alias || [],
            redirect: Pa ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-1.78df827b.js"), ["./form-1.78df827b.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseFullscreenDropfile.vue.eb607a62.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseInputFileHeadless.vue.40c9a712.js", "./file-preview.bf4dc957.js", "./BaseRadioHeadless.vue.7b0792d0.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseListbox.vue.af7c7605.js", "./BaseIconBox.vue.049ba203.js", "./BaseAvatar.vue.97d6ac95.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-controllable.44593918.js", "./use-text-value.d92f8611.js", "./BaseTextarea.vue.464f1f49.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: $a ? .name ? ? "layouts-form-2",
            path: $a ? .path ? ? "form-2",
            meta: $a || {},
            alias: $a ? .alias || [],
            redirect: $a ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-2.2e2df0fd.js"), ["./form-2.2e2df0fd.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseTextarea.vue.464f1f49.js", "./TairoFormGroup.vue.2df2c607.js", "./BaseAvatar.vue.97d6ac95.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Sa ? .name ? ? "layouts-form-3",
            path: Sa ? .path ? ? "form-3",
            meta: Sa || {},
            alias: Sa ? .alias || [],
            redirect: Sa ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-3.7e8ddd21.js"), ["./form-3.7e8ddd21.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./DemoCreditCardReal.vue.27c73eb6.js", "./TairoLogo.d97795b4.js", "./BaseRadio.vue.b6a4bd90.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Aa ? .name ? ? "layouts-form-4",
            path: Aa ? .path ? ? "form-4",
            meta: Aa || {},
            alias: Aa ? .alias || [],
            redirect: Aa ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-4.c5e7fc87.js"), ["./form-4.c5e7fc87.js", "./BaseTextarea.vue.464f1f49.js", "./BaseAutocomplete.vue.4d485ee1.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./combobox.7dbe84ed.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-tree-walker.8f4d0e5a.js", "./use-controllable.44593918.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: La ? .name ? ? "layouts-form-5",
            path: La ? .path ? ? "form-5",
            meta: La || {},
            alias: La ? .alias || [],
            redirect: La ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-5.21ea99e1.js"), ["./form-5.21ea99e1.js", "./TairoPasswordStrength.vue.00b41c58.js", "./BaseCheckboxAnimated.26baf442.js", "./BaseCheckboxAnimated.c5636d54.css", "./toaster.4024d2b6.js", "./slider.4af0995a.js", "./slider.60c9d716.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Oa ? .name ? ? "layouts-form-6",
            path: Oa ? .path ? ? "form-6",
            meta: Oa || {},
            alias: Oa ? .alias || [],
            redirect: Oa ? .redirect || void 0,
            component: () => C(() =>
                import ("./form-6.c309d82f.js"), ["./form-6.c309d82f.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseRadio.vue.b6a4bd90.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseListbox.vue.af7c7605.js", "./BaseIconBox.vue.049ba203.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-controllable.44593918.js", "./use-text-value.d92f8611.js", "./BaseTextarea.vue.464f1f49.js", "./BaseProgress.vue.39cdf738.js", "./BaseInputFileHeadless.vue.40c9a712.js", "./file-preview.bf4dc957.js", "./BaseRadioHeadless.vue.7b0792d0.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./TairoFormSave.vue.1403a3c7.js", "./toaster.4024d2b6.js", "./format-files.fdbceb7e.js", "./placeholder-file.f15d7648.js", "./vee-validate.esm.1896db93.js", "./index.db39d5b7.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ra ? .name ? ? "layouts",
            path: Ra ? .path ? ? "",
            meta: Ra || {},
            alias: Ra ? .alias || [],
            redirect: Ra ? .redirect || void 0,
            component: () => C(() =>
                import ("./index.e63c443e.js"), ["./index.e63c443e.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Da ? .name ? ? "layouts-list-view-2",
            path: Da ? .path ? ? "list-view-2",
            meta: Da || {},
            alias: Da ? .alias || [],
            redirect: Da ? .redirect || void 0,
            component: () => C(() =>
                import ("./list-view-2.10432f49.js"), ["./list-view-2.10432f49.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapperTabbed.vue.19424f08.js", "./fetch.f60b6f70.js", "./placeholder-search-2-dark.478b8a5f.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ia ? .name ? ? "layouts-list-view-3",
            path: Ia ? .path ? ? "list-view-3",
            meta: Ia || {},
            alias: Ia ? .alias || [],
            redirect: Ia ? .redirect || void 0,
            component: () => C(() =>
                import ("./list-view-3.3c820fbc.js"), ["./list-view-3.3c820fbc.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapperTabbed.vue.19424f08.js", "./fetch.f60b6f70.js", "./placeholder-search-3-dark.4ea709c9.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ma ? .name ? ? "layouts-list-view-4",
            path: Ma ? .path ? ? "list-view-4",
            meta: Ma || {},
            alias: Ma ? .alias || [],
            redirect: Ma ? .redirect || void 0,
            component: () => C(() =>
                import ("./list-view-4.632f98bc.js"), ["./list-view-4.632f98bc.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonIcon.vue.a0506f73.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapperTabbed.vue.19424f08.js", "./fetch.f60b6f70.js", "./placeholder-search-3-dark.4ea709c9.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Fa ? .name ? ? "layouts-onboarding-1",
            path: Fa ? .path ? ? "onboarding-1",
            meta: Fa || {},
            alias: Fa ? .alias || [],
            redirect: Fa ? .redirect || void 0,
            component: () => C(() =>
                import ("./onboarding-1.ffdd9b28.js"), ["./onboarding-1.ffdd9b28.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseRadioHeadless.vue.7b0792d0.js", "./BaseIconBox.vue.049ba203.js", "./TairoCheckAnimated.ca3012ac.js", "./TairoCheckAnimated.05baebdd.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Na ? .name ? ? "layouts-onboarding-2",
            path: Na ? .path ? ? "onboarding-2",
            meta: Na || {},
            alias: Na ? .alias || [],
            redirect: Na ? .redirect || void 0,
            component: () => C(() =>
                import ("./onboarding-2.3a8b3d5d.js"), ["./onboarding-2.3a8b3d5d.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseRadioHeadless.vue.7b0792d0.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ja ? .name ? ? "layouts-onboarding-3",
            path: ja ? .path ? ? "onboarding-3",
            meta: ja || {},
            alias: ja ? .alias || [],
            redirect: ja ? .redirect || void 0,
            component: () => C(() =>
                import ("./onboarding-3.594818e2.js"), ["./onboarding-3.594818e2.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseAvatar.vue.97d6ac95.js", "./BaseRadioHeadless.vue.7b0792d0.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ba ? .name ? ? "layouts-placeload-1",
            path: Ba ? .path ? ? "placeload-1",
            meta: Ba || {},
            alias: Ba ? .alias || [],
            redirect: Ba ? .redirect || void 0,
            component: () => C(() =>
                import ("./placeload-1.7715ad5a.js"), ["./placeload-1.7715ad5a.js", "./TairoContentWrapper.vue.24b3c03d.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ha ? .name ? ? "layouts-placeload-2",
            path: Ha ? .path ? ? "placeload-2",
            meta: Ha || {},
            alias: Ha ? .alias || [],
            redirect: Ha ? .redirect || void 0,
            component: () => C(() =>
                import ("./placeload-2.f4f25de8.js"), ["./placeload-2.f4f25de8.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./TairoTable.vue.286c711b.js", "./TairoContentWrapper.vue.24b3c03d.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: za ? .name ? ? "layouts-placeload-3",
            path: za ? .path ? ? "placeload-3",
            meta: za || {},
            alias: za ? .alias || [],
            redirect: za ? .redirect || void 0,
            component: () => C(() =>
                import ("./placeload-3.0a6013db.js"), ["./placeload-3.0a6013db.js", "./TairoContentWrapper.vue.24b3c03d.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Va ? .name ? ? "layouts-placeload-4",
            path: Va ? .path ? ? "placeload-4",
            meta: Va || {},
            alias: Va ? .alias || [],
            redirect: Va ? .redirect || void 0,
            component: () => C(() =>
                import ("./placeload-4.31f0c439.js"), ["./placeload-4.31f0c439.js", "./TairoContentWrapper.vue.24b3c03d.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            path: Ga ? .path ? ? "profile-edit",
            children: [{
                name: Ua ? .name ? ? "layouts-profile-edit-experience",
                path: Ua ? .path ? ? "experience",
                meta: Ua || {},
                alias: Ua ? .alias || [],
                redirect: Ua ? .redirect || void 0,
                component: () => C(() =>
                    import ("./experience.aba672bf.js"), ["./experience.aba672bf.js", "./BaseDropdownDivider.671e2f10.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseButtonIcon.vue.a0506f73.js", "./TairoFormGroup.vue.2df2c607.js", "./TairoFormSave.vue.1403a3c7.js", "./fetch.f60b6f70.js", "./placeholder-search-2-dark.478b8a5f.js"],
                    import.meta.url).then(e => e.default || e)
            }, {
                name: Wa ? .name ? ? "layouts-profile-edit",
                path: Wa ? .path ? ? "",
                meta: Wa || {},
                alias: Wa ? .alias || [],
                redirect: Wa ? .redirect || void 0,
                component: () => C(() =>
                    import ("./index.e3b2d5a5.js"), ["./index.e3b2d5a5.js", "./BaseMessage.vue.5399e0de.js", "./BaseFullscreenDropfile.vue.eb607a62.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseInputFileHeadless.vue.40c9a712.js", "./file-preview.bf4dc957.js", "./TairoFormGroup.vue.2df2c607.js", "./BaseTextarea.vue.464f1f49.js", "./BaseListbox.vue.af7c7605.js", "./BaseIconBox.vue.049ba203.js", "./BaseAvatar.vue.97d6ac95.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-controllable.44593918.js", "./use-text-value.d92f8611.js", "./TairoFormSave.vue.1403a3c7.js", "./fetch.f60b6f70.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
                    import.meta.url).then(e => e.default || e)
            }, {
                name: qa ? .name ? ? "layouts-profile-edit-settings",
                path: qa ? .path ? ? "settings",
                meta: qa || {},
                alias: qa ? .alias || [],
                redirect: qa ? .redirect || void 0,
                component: () => C(() =>
                    import ("./settings.b4a058b5.js"), ["./settings.b4a058b5.js", "./BaseMessage.vue.5399e0de.js", "./TairoFormGroup.vue.2df2c607.js", "./BaseSwitchThin.vue.8e1d684e.js", "./BaseSwitchBall.vue.07ba7564.js", "./IconCheck.cccc4373.js", "./TairoFormSave.vue.1403a3c7.js", "./fetch.f60b6f70.js", "./toaster.4024d2b6.js", "./vee-validate.esm.1896db93.js"],
                    import.meta.url).then(e => e.default || e)
            }, {
                name: Ka ? .name ? ? "layouts-profile-edit-skills",
                path: Ka ? .path ? ? "skills",
                meta: Ka || {},
                alias: Ka ? .alias || [],
                redirect: Ka ? .redirect || void 0,
                component: () => C(() =>
                    import ("./skills.c7321384.js"), ["./skills.c7321384.js", "./BaseProgressCircle.893ba48c.js", "./BaseProgressCircle.1fb28e22.css", "./BaseDropdownDivider.671e2f10.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseButtonIcon.vue.a0506f73.js", "./TairoFormGroup.vue.2df2c607.js", "./TairoFormSave.vue.1403a3c7.js", "./fetch.f60b6f70.js", "./placeholder-search-6-dark.56b69b8e.js", "./placeholder-search-3-dark.4ea709c9.js", "./placeholder-search-4-dark.d144b695.js", "./placeholder-search-5-dark.f34c7de2.js"],
                    import.meta.url).then(e => e.default || e)
            }],
            name: Ga ? .name ? ? void 0,
            meta: Ga || {},
            alias: Ga ? .alias || [],
            redirect: Ga ? .redirect || void 0,
            component: () => C(() =>
                import ("./profile-edit.e41d1613.js"), ["./profile-edit.e41d1613.js", "./BaseAvatar.vue.97d6ac95.js", "./fetch.f60b6f70.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ja ? .name ? ? "layouts-profile-notifications",
            path: Ja ? .path ? ? "profile-notifications",
            meta: Ja || {},
            alias: Ja ? .alias || [],
            redirect: Ja ? .redirect || void 0,
            component: () => C(() =>
                import ("./profile-notifications.be4d2059.js"), ["./profile-notifications.be4d2059.js", "./BaseAvatar.vue.97d6ac95.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Qa ? .name ? ? "layouts-profile-settings",
            path: Qa ? .path ? ? "profile-settings",
            meta: Qa || {},
            alias: Qa ? .alias || [],
            redirect: Qa ? .redirect || void 0,
            component: () => C(() =>
                import ("./profile-settings.f294c4a2.js"), ["./profile-settings.f294c4a2.js", "./BaseDropdownDivider.671e2f10.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./fetch.f60b6f70.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ya ? .name ? ? "layouts-profile",
            path: Ya ? .path ? ? "profile",
            meta: Ya || {},
            alias: Ya ? .alias || [],
            redirect: Ya ? .redirect || void 0,
            component: () => C(() =>
                import ("./profile.aaa404f0.js"), ["./profile.aaa404f0.js", "./BaseDropdownDivider.671e2f10.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseProgressCircle.893ba48c.js", "./BaseProgressCircle.1fb28e22.css", "./BaseSwitchBall.vue.07ba7564.js", "./IconCheck.cccc4373.js", "./BaseButtonIcon.vue.a0506f73.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Xa ? .name ? ? "layouts-projects-board-slug",
            path: Xa ? .path ? ? "projects/board/:slug()",
            meta: Xa || {},
            alias: Xa ? .alias || [],
            redirect: Xa ? .redirect || void 0,
            component: () => C(() =>
                import ("./_slug_.a3b84c9c.js"), ["./_slug_.a3b84c9c.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseTag.vue.faa2c4d6.js", "./fetch.f60b6f70.js", "./vue3-smooth-dnd.esm.b9ffb400.js", "./_slug_.16a4a26f.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Za ? .name ? ? "layouts-projects-board",
            path: Za ? .path ? ? "projects/board",
            meta: Za || {},
            alias: Za ? .alias || [],
            redirect: Za ? .redirect || void 0,
            component: () => C(() =>
                import ("./index.96794ab5.js"), ["./index.96794ab5.js", "./BaseAutocomplete.vue.4d485ee1.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./combobox.7dbe84ed.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-tree-walker.8f4d0e5a.js", "./use-controllable.44593918.js", "./fetch.f60b6f70.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: es ? .name ? ? "layouts-projects-details-slug",
            path: es ? .path ? ? "projects/details/:slug()",
            meta: es || {},
            alias: es ? .alias || [],
            redirect: es ? .redirect || void 0,
            component: () => C(() =>
                import ("./_slug_.7bf747db.js"), ["./_slug_.7bf747db.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseProgress.vue.39cdf738.js", "./BaseTabs.vue.07c0fb35.js", "./fetch.f60b6f70.js", "./placeholder-projects-dark.6cfdfb76.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ts ? .name ? ? "layouts-projects-details",
            path: ts ? .path ? ? "projects/details",
            meta: ts || {},
            alias: ts ? .alias || [],
            redirect: ts ? .redirect || void 0,
            component: () => C(() =>
                import ("./index.b3669288.js"), ["./index.b3669288.js", "./BaseAutocomplete.vue.4d485ee1.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseIconBox.vue.049ba203.js", "./combobox.7dbe84ed.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-tree-walker.8f4d0e5a.js", "./use-controllable.44593918.js", "./fetch.f60b6f70.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ns ? .name ? ? "layouts-projects",
            path: ns ? .path ? ? "projects",
            meta: ns || {},
            alias: ns ? .alias || [],
            redirect: ns ? .redirect || void 0,
            component: () => C(() =>
                import ("./index.ddc30ab1.js"), ["./index.ddc30ab1.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: rs ? .name ? ? "layouts-projects-project-list-2",
            path: rs ? .path ? ? "projects/project-list-2",
            meta: rs || {},
            alias: rs ? .alias || [],
            redirect: rs ? .redirect || void 0,
            component: () => C(() =>
                import ("./project-list-2.bc37df88.js"), ["./project-list-2.bc37df88.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: os ? .name ? ? "layouts-projects-project-list-3",
            path: os ? .path ? ? "projects/project-list-3",
            meta: os || {},
            alias: os ? .alias || [],
            redirect: os ? .redirect || void 0,
            component: () => C(() =>
                import ("./project-list-3.50ce7be4.js"), ["./project-list-3.50ce7be4.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseAvatarGroup.vue.813e2a42.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: as ? .name ? ? "layouts-search-empty",
            path: as ? .path ? ? "search-empty",
            meta: as || {},
            alias: as ? .alias || [],
            redirect: as ? .redirect || void 0,
            component: () => C(() =>
                import ("./search-empty.654dfd1a.js"), ["./search-empty.654dfd1a.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ss ? .name ? ? "layouts-search-results",
            path: ss ? .path ? ? "search-results",
            meta: ss || {},
            alias: ss ? .alias || [],
            redirect: ss ? .redirect || void 0,
            component: () => C(() =>
                import ("./search-results.d0799fc3.js"), ["./search-results.d0799fc3.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: is ? .name ? ? "layouts-table-list-1",
            path: is ? .path ? ? "table-list-1",
            meta: is || {},
            alias: is ? .alias || [],
            redirect: is ? .redirect || void 0,
            component: () => C(() =>
                import ("./table-list-1.8cfca538.js"), ["./table-list-1.8cfca538.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./TairoTable.vue.286c711b.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseTag.vue.faa2c4d6.js", "./BaseProgressCircle.893ba48c.js", "./BaseProgressCircle.1fb28e22.css", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ls ? .name ? ? "layouts-table-list-2",
            path: ls ? .path ? ? "table-list-2",
            meta: ls || {},
            alias: ls ? .alias || [],
            redirect: ls ? .redirect || void 0,
            component: () => C(() =>
                import ("./table-list-2.f14f02b7.js"), ["./table-list-2.f14f02b7.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./TairoTable.vue.286c711b.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: cs ? .name ? ? "layouts-table-list-3",
            path: cs ? .path ? ? "table-list-3",
            meta: cs || {},
            alias: cs ? .alias || [],
            redirect: cs ? .redirect || void 0,
            component: () => C(() =>
                import ("./table-list-3.655a3ecd.js"), ["./table-list-3.655a3ecd.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./TairoTable.vue.286c711b.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonAction.vue.15a468c3.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-4-dark.d144b695.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: us ? .name ? ? "layouts-tile-grid-1",
            path: us ? .path ? ? "tile-grid-1",
            meta: us || {},
            alias: us ? .alias || [],
            redirect: us ? .redirect || void 0,
            component: () => C(() =>
                import ("./tile-grid-1.de438ad0.js"), ["./tile-grid-1.de438ad0.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-5-dark.f34c7de2.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ds ? .name ? ? "layouts-tile-grid-2",
            path: ds ? .path ? ? "tile-grid-2",
            meta: ds || {},
            alias: ds ? .alias || [],
            redirect: ds ? .redirect || void 0,
            component: () => C(() =>
                import ("./tile-grid-2.65c01ff8.js"), ["./tile-grid-2.65c01ff8.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-5-dark.f34c7de2.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: fs ? .name ? ? "layouts-tile-grid-3",
            path: fs ? .path ? ? "tile-grid-3",
            meta: fs || {},
            alias: fs ? .alias || [],
            redirect: fs ? .redirect || void 0,
            component: () => C(() =>
                import ("./tile-grid-3.1a8d2594.js"), ["./tile-grid-3.1a8d2594.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseDropdownDivider.671e2f10.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./placeholder-search-3-dark.4ea709c9.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ps ? .name ? ? "layouts-user-grid-1",
            path: ps ? .path ? ? "user-grid-1",
            meta: ps || {},
            alias: ps ? .alias || [],
            redirect: ps ? .redirect || void 0,
            component: () => C(() =>
                import ("./user-grid-1.ae25d9d9.js"), ["./user-grid-1.ae25d9d9.js", "./BaseAvatar.vue.97d6ac95.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js", "./placeholder-search-2-dark.478b8a5f.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: hs ? .name ? ? "layouts-user-grid-2",
            path: hs ? .path ? ? "user-grid-2",
            meta: hs || {},
            alias: hs ? .alias || [],
            redirect: hs ? .redirect || void 0,
            component: () => C(() =>
                import ("./user-grid-2.56cf8e0c.js"), ["./user-grid-2.56cf8e0c.js", "./BaseAvatar.vue.97d6ac95.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js", "./placeholder-search-2-dark.478b8a5f.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ms ? .name ? ? "layouts-user-grid-3",
            path: ms ? .path ? ? "user-grid-3",
            meta: ms || {},
            alias: ms ? .alias || [],
            redirect: ms ? .redirect || void 0,
            component: () => C(() =>
                import ("./user-grid-3.6288e52e.js"), ["./user-grid-3.6288e52e.js", "./BaseAvatar.vue.97d6ac95.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js", "./placeholder-search-2-dark.478b8a5f.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: gs ? .name ? ? "layouts-user-grid-4",
            path: gs ? .path ? ? "user-grid-4",
            meta: gs || {},
            alias: gs ? .alias || [],
            redirect: gs ? .redirect || void 0,
            component: () => C(() =>
                import ("./user-grid-4.e7cc1709.js"), ["./user-grid-4.e7cc1709.js", "./BaseAvatar.vue.97d6ac95.js", "./BasePagination.vue.ae097cd1.js", "./TairoContentWrapper.vue.24b3c03d.js", "./fetch.f60b6f70.js", "./colors.cbccbc0c.js", "./placeholder-search-2-dark.478b8a5f.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: vs ? .name ? ? "layouts-utility-action-1",
            path: vs ? .path ? ? "utility-action-1",
            meta: vs || {},
            alias: vs ? .alias || [],
            redirect: vs ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-action-1.59590466.js"), ["./utility-action-1.59590466.js", "./BaseAvatar.vue.97d6ac95.js", "./colors.cbccbc0c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: _s ? .name ? ? "layouts-utility-action-2",
            path: _s ? .path ? ? "utility-action-2",
            meta: _s || {},
            alias: _s ? .alias || [],
            redirect: _s ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-action-2.f63effc5.js"), ["./utility-action-2.f63effc5.js", "./BaseAvatar.vue.97d6ac95.js", "./colors.cbccbc0c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: bs ? .name ? ? "layouts-utility-billing",
            path: bs ? .path ? ? "utility-billing",
            meta: bs || {},
            alias: bs ? .alias || [],
            redirect: bs ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-billing.9b6f8040.js"), ["./utility-billing.9b6f8040.js", "./BaseAvatar.vue.97d6ac95.js", "./TairoLogo.d97795b4.js", "./BaseRadioHeadless.vue.7b0792d0.js", "./BaseSwitchBall.vue.07ba7564.js", "./IconCheck.cccc4373.js", "./BaseRadio.vue.b6a4bd90.js", "./DemoCreditCardReal.vue.27c73eb6.js", "./BaseSelect.vue.1d481c86.js", "./IconChevronDown.e507b8f4.js", "./TairoFormSave.vue.1403a3c7.js", "./colors.cbccbc0c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ys ? .name ? ? "layouts-utility-confirm",
            path: ys ? .path ? ? "utility-confirm",
            meta: ys || {},
            alias: ys ? .alias || [],
            redirect: ys ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-confirm.d7f989f6.js"), [],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ws ? .name ? ? "layouts-utility-error",
            path: ws ? .path ? ? "utility-error",
            meta: ws || {},
            alias: ws ? .alias || [],
            redirect: ws ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-error.5c26cfd1.js"), ["./utility-error.5c26cfd1.js", "./BaseSwitchBall.vue.07ba7564.js", "./IconCheck.cccc4373.js", "./BaseTag.vue.faa2c4d6.js", "./BaseIconBox.vue.049ba203.js", "./utility-error.2702b086.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: xs ? .name ? ? "layouts-utility-invoice",
            path: xs ? .path ? ? "utility-invoice",
            meta: xs || {},
            alias: xs ? .alias || [],
            redirect: xs ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-invoice.16a33f7e.js"), ["./utility-invoice.16a33f7e.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseAvatar.vue.97d6ac95.js", "./TairoLogo.d97795b4.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: ks ? .name ? ? "layouts-utility-promotion",
            path: ks ? .path ? ? "utility-promotion",
            meta: ks || {},
            alias: ks ? .alias || [],
            redirect: ks ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-promotion.eb65f6eb.js"), [],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Es ? .name ? ? "layouts-utility-status",
            path: Es ? .path ? ? "utility-status",
            meta: Es || {},
            alias: Es ? .alias || [],
            redirect: Es ? .redirect || void 0,
            component: () => C(() =>
                import ("./utility-status.f1410daf.js"), ["./utility-status.f1410daf.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./BaseAvatar.vue.97d6ac95.js"],
                import.meta.url).then(e => e.default || e)
        }],
        name: Ts ? .name ? ? void 0,
        meta: Ts || {},
        alias: Ts ? .alias || [],
        redirect: Ts ? .redirect || void 0,
        component: () => C(() =>
            import ("./layouts.b586ce8a.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Cs ? .name ? ? "starter-collapse",
        path: Cs ? .path ? ? "/starter-collapse",
        meta: Cs || {},
        alias: Cs ? .alias || [],
        redirect: Cs ? .redirect || void 0,
        component: () => C(() =>
            import ("./starter-collapse.75709f76.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Ps ? .name ? ? "starter-sidebar",
        path: Ps ? .path ? ? "/starter-sidebar",
        meta: Ps || {},
        alias: Ps ? .alias || [],
        redirect: Ps ? .redirect || void 0,
        component: () => C(() =>
            import ("./starter-sidebar.8574a829.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "test-error",
        path: "/test-error",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => C(() =>
            import ("./test-error.afd3af50.js"), [],
            import.meta.url).then(e => e.default || e)
    }, {
        path: Is ? .path ? ? "/wizard",
        children: [{
            name: $s ? .name ? ? "wizard",
            path: $s ? .path ? ? "",
            meta: $s || {},
            alias: $s ? .alias || [],
            redirect: $s ? .redirect || void 0,
            component: () => C(() =>
                import ("./index.400eed90.js"), ["./index.400eed90.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ss ? .name ? ? "wizard-step-2",
            path: Ss ? .path ? ? "step-2",
            meta: Ss || {},
            alias: Ss ? .alias || [],
            redirect: Ss ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-2.20e64bac.js"), ["./step-2.20e64bac.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseFullscreenDropfile.vue.eb607a62.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseInputFileHeadless.vue.40c9a712.js", "./file-preview.bf4dc957.js", "./BaseTextarea.vue.464f1f49.js", "./placeholder-file.f15d7648.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: As ? .name ? ? "wizard-step-3",
            path: As ? .path ? ? "step-3",
            meta: As || {},
            alias: As ? .alias || [],
            redirect: As ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-3.8133da51.js"), ["./step-3.8133da51.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseRadioHeadless.vue.7b0792d0.js", "./index.db39d5b7.js", "./vcalendar.6757662b.css"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ls ? .name ? ? "wizard-step-4",
            path: Ls ? .path ? ? "step-4",
            meta: Ls || {},
            alias: Ls ? .alias || [],
            redirect: Ls ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-4.9b06a519.js"), ["./step-4.9b06a519.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseProgress.vue.39cdf738.js", "./BaseInputFileHeadless.vue.40c9a712.js", "./file-preview.bf4dc957.js", "./format-files.fdbceb7e.js", "./placeholder-file.f15d7648.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Os ? .name ? ? "wizard-step-5",
            path: Os ? .path ? ? "step-5",
            meta: Os || {},
            alias: Os ? .alias || [],
            redirect: Os ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-5.19120a7c.js"), ["./step-5.19120a7c.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseProgress.vue.39cdf738.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Rs ? .name ? ? "wizard-step-6",
            path: Rs ? .path ? ? "step-6",
            meta: Rs || {},
            alias: Rs ? .alias || [],
            redirect: Rs ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-6.79e573af.js"), ["./step-6.79e573af.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseCheckboxHeadless.vue.c457f47c.js"],
                import.meta.url).then(e => e.default || e)
        }, {
            name: Ds ? .name ? ? "wizard-step-7",
            path: Ds ? .path ? ? "step-7",
            meta: Ds || {},
            alias: Ds ? .alias || [],
            redirect: Ds ? .redirect || void 0,
            component: () => C(() =>
                import ("./step-7.6034adfa.js"), ["./step-7.6034adfa.js", "./DemoWizardStepTitle.vue.04789c37.js", "./multi-step-form.03b99d2b.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseIconBox.vue.049ba203.js", "./file-preview.bf4dc957.js", "./index.3e2319eb.js"],
                import.meta.url).then(e => e.default || e)
        }],
        name: Is ? .name ? ? void 0,
        meta: Is || {},
        alias: Is ? .alias || [],
        redirect: Is ? .redirect || void 0,
        component: () => C(() =>
            import ("./wizard.401e99b6.js"), ["./wizard.401e99b6.js", "./TairoLogo.d97795b4.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./BaseProgress.vue.39cdf738.js", "./multi-step-form.03b99d2b.js", "./toaster.4024d2b6.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Ms ? .name ? ? "demos",
        path: Ms ? .path ? ? "/demos",
        meta: Ms || {},
        alias: Ms ? .alias || [],
        redirect: Ms ? .redirect || void 0,
        component: () => C(() =>
            import ("./demos.20e71e5e.js"), ["./demos.20e71e5e.js", "./LandingFooter.vue.6098f9ee.js", "./BaseRadio.vue.b6a4bd90.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Fs ? .name ? ? "index",
        path: Fs ? .path ? ? "/",
        meta: Fs || {},
        alias: Fs ? .alias || [],
        redirect: Fs ? .redirect || void 0,
        component: () => C(() =>
            import ("./index.db27aaa6.js"), ["./index.db27aaa6.js", "./TairoLogo.d97795b4.js", "./BaseAvatar.vue.97d6ac95.js", "./AddonApexcharts.vue.859d950a.js", "./client-only.862c29b4.js", "./AddonApexcharts.67d334b2.css", "./DemoInboxMessage.vue.5d7fe80b.js", "./hobby-3.aeceb641.js", "./DemoProgressCircle.vue.6f57540c.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseProgressCircle.893ba48c.js", "./BaseProgressCircle.1fb28e22.css", "./DemoFollowersCompact.vue.c8cdebf6.js", "./BaseAvatarGroup.vue.813e2a42.js", "./BaseTag.vue.faa2c4d6.js", "./LandingFooter.vue.6098f9ee.js", "./BaseRadio.vue.b6a4bd90.js", "./index.7a6e2f5e.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: Ns ? .name ? ? "documentation-slug",
        path: Ns ? .path ? ? "/documentation/:slug(.*)*",
        meta: Ns || {},
        alias: Ns ? .alias || [],
        redirect: Ns ? .redirect || void 0,
        component: () => C(() =>
            import ("./index.36f8ee82.js"), ["./index.36f8ee82.js", "./BaseBreadcrumb.vue.d7598c11.js", "./BaseDropdown.vue.4700bc40.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js", "./DocComponentDemo.vue.3a192e7e.js", "./TairoTocAnchor.vue.3130308f.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./AddonMarkdownRemark.c3fa08ae.js", "./BaseProse.vue.dc20bce5.js", "./composables.5d7dee4e.js", "./index.30ac238c.js", "./AddonMarkdownRemark.1694d3fc.css", "./slot.6b7d1678.js", "./node.6e7488f2.js", "./ContentRenderer.4ce562ae.js", "./ContentRendererMarkdown.vue.2d2fc16f.js", "./index.c332151d.js", "./head.dd6d1fae.js"],
            import.meta.url).then(e => e.default || e)
    }],
    L5 = {
        scrollBehavior(e, t, n) {
            const r = tt();
            let o = n || void 0;
            if (!o && t && e && e.meta.scrollToTop !== !1 && O5(t, e) && (o = {
                    left: 0,
                    top: 0
                }), e.path === t.path) {
                if (t.hash && !e.hash) return {
                    left: 0,
                    top: 0
                };
                if (e.hash) return {
                    el: e.hash,
                    top: $h(e.hash)
                }
            }
            const a = i => !!(i.meta.pageTransition ? ? Tu),
                s = a(t) && a(e) ? "page:transition:finish" : "page:finish";
            return new Promise(i => {
                r.hooks.hookOnce(s, async () => {
                    await Gt(), e.hash && (o = {
                        el: e.hash,
                        top: $h(e.hash)
                    }), i(o)
                })
            })
        }
    };

function $h(e) {
    try {
        const t = document.querySelector(e);
        if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}

function O5(e, t) {
    const n = t.matched.every((r, o) => r.components ? .default === e.matched[o] ? .components ? .default);
    return !!(!n || n && JSON.stringify(e.params) !== JSON.stringify(t.params))
}
const R5 = {},
    Qn = { ...R5,
        ...L5
    },
    D5 = async e => {
        let t, n;
        if (!e.meta ? .validate) return;
        const r = tt(),
            o = Tn();
        if (([t, n] = xl(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t) === !0) return;
        const s = Zl({
                statusCode: 404,
                statusMessage: `Page Not Found: ${e.fullPath}`
            }),
            i = o.beforeResolve(l => {
                if (i(), l === e) {
                    const c = o.afterEach(async () => {
                        c(), await r.runWithContext(() => eo(s)), window.history.pushState({}, "", e.fullPath)
                    });
                    return !1
                }
            })
    },
    rl = [D5],
    Du = {};

function I5(e, t, n) {
    const {
        pathname: r,
        search: o,
        hash: a
    } = t, s = e.indexOf("#");
    if (s > -1) {
        const c = a.includes(e.slice(s)) ? e.slice(s).length : 1;
        let u = a.slice(c);
        return u[0] !== "/" && (u = "/" + u), Gp(u, "")
    }
    const i = Gp(r, e),
        l = !n || O2(i, n, {
            trailingSlash: !0
        }) ? i : n;
    return l + (l.includes("?") ? "" : o) + a
}
const M5 = vn({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            let t, n, r = jr().app.baseURL;
            Qn.hashMode && !r.includes("#") && (r += "#");
            const o = Qn.history ? .(r) ? ? (Qn.hashMode ? WE(r) : e0(r)),
                a = Qn.routes ? .(Ph) ? ? Ph;
            let s;
            const i = I5(r, window.location, e.payload.path),
                l = $5({ ...Qn,
                    scrollBehavior: (g, P, S) => {
                        if (P === bn) {
                            s = S;
                            return
                        }
                        return l.options.scrollBehavior = Qn.scrollBehavior, Qn.scrollBehavior ? .(g, bn, s || S)
                    },
                    history: o,
                    routes: a
                });
            e.vueApp.use(l);
            const c = uo(l.currentRoute.value);
            l.afterEach((g, P) => {
                c.value = P
            }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => c.value
            });
            const u = uo(l.resolve(i)),
                p = () => {
                    u.value = l.currentRoute.value
                };
            e.hook("page:finish", p), l.afterEach((g, P) => {
                g.matched[0] ? .components ? .default === P.matched[0] ? .components ? .default && p()
            });
            const h = {};
            for (const g in u.value) Object.defineProperty(h, g, {
                get: () => u.value[g]
            });
            e._route = hi(h), e._middleware = e._middleware || {
                global: [],
                named: {}
            };
            const v = Xl();
            try {
                [t, n] = xl(() => l.isReady()), await t, n()
            } catch (g) {
                [t, n] = xl(() => e.runWithContext(() => eo(g))), await t, n()
            }
            const _ = yt("_layout");
            return l.beforeEach(async (g, P) => {
                g.meta = hn(g.meta), e.isHydrating && _.value && !Dr(g.meta.layout) && (g.meta.layout = _.value), e._processingMiddleware = !0; {
                    const S = new Set([...rl, ...e._middleware.global]);
                    for (const x of g.matched) {
                        const I = x.meta.middleware;
                        if (I)
                            if (Array.isArray(I))
                                for (const A of I) S.add(A);
                            else S.add(I)
                    }
                    for (const x of S) {
                        const I = typeof x == "string" ? e._middleware.named[x] || await Du[x] ? .().then(N => N.default || N) : x;
                        if (!I) throw new Error(`Unknown route middleware: '${x}'.`);
                        const A = await e.runWithContext(() => I(g, P));
                        if (!e.payload.serverRendered && e.isHydrating && (A === !1 || A instanceof Error)) {
                            const N = A || $u({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${i}`
                            });
                            return await e.runWithContext(() => eo(N)), !1
                        }
                        if (A || A === !1) return A
                    }
                }
            }), l.onError(() => {
                delete e._processingMiddleware
            }), l.afterEach(async (g, P, S) => {
                delete e._processingMiddleware, !e.isHydrating && v.value && await e.runWithContext(Au), g.matched.length === 0 && await e.runWithContext(() => eo($u({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${g.fullPath}`
                })))
            }), e.hooks.hookOnce("app:created", async () => {
                try {
                    await l.replace({ ...l.resolve(i),
                        name: void 0,
                        force: !0
                    }), l.options.scrollBehavior = Qn.scrollBehavior
                } catch (g) {
                    await e.runWithContext(() => eo(g))
                }
            }), {
                provide: {
                    router: l
                }
            }
        }
    }),
    F5 = se(() => C(() =>
        import ("./DocComponentDemo.51158205.js"), ["./DocComponentDemo.51158205.js", "./DocComponentDemo.vue.3a192e7e.js", "./TairoTocAnchor.vue.3130308f.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./AddonMarkdownRemark.c3fa08ae.js", "./BaseProse.vue.dc20bce5.js", "./composables.5d7dee4e.js", "./index.30ac238c.js", "./AddonMarkdownRemark.1694d3fc.css", "./slot.6b7d1678.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    N5 = se(() => C(() =>
        import ("./DocComponentList.2177adf0.js"), ["./DocComponentList.2177adf0.js", "./DocLayoutSection.vue.38ed2935.js", "./TairoTocAnchor.vue.3130308f.js", "./BaseTag.vue.faa2c4d6.js"],
        import.meta.url).then(e => e.default)),
    j5 = se(() => C(() =>
        import ("./DocComponentMeta.2c9094dc.js"), ["./DocComponentMeta.2c9094dc.js", "./TairoTocAnchor.vue.3130308f.js", "./AddonMarkdownRemark.c3fa08ae.js", "./BaseProse.vue.dc20bce5.js", "./composables.5d7dee4e.js", "./index.30ac238c.js", "./AddonMarkdownRemark.1694d3fc.css", "./BaseTag.vue.faa2c4d6.js", "./index.c332151d.js", "./DocComponentMeta.30495268.css"],
        import.meta.url).then(e => e.default)),
    B5 = se(() => C(() =>
        import ("./DocGridIcon.ff5612b3.js"), ["./DocGridIcon.ff5612b3.js", "./BaseIconBox.vue.049ba203.js", "./BaseButtonIcon.vue.a0506f73.js", "./slot.6b7d1678.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    H5 = se(() => C(() =>
        import ("./DocHeading.848db2f2.js"), ["./DocHeading.848db2f2.js", "./TairoTocAnchor.vue.3130308f.js"],
        import.meta.url).then(e => e.default)),
    z5 = se(() => C(() =>
        import ("./DocLinkExternal.7d803e79.js"), ["./DocLinkExternal.7d803e79.js", "./BaseButtonAction.vue.15a468c3.js", "./slot.6b7d1678.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    V5 = se(() => C(() =>
        import ("./DocLinkImage.3532f606.js"), [],
        import.meta.url).then(e => e.default)),
    U5 = se(() => C(() =>
        import ("./DocLinker.7d7e6bba.js"), [],
        import.meta.url).then(e => e.default)),
    W5 = se(() => C(() =>
        import ("./DocMessage.1b0cc45d.js"), ["./DocMessage.1b0cc45d.js", "./BaseMessage.vue.5399e0de.js", "./slot.6b7d1678.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    q5 = se(() => C(() =>
        import ("./DocNav.b437c270.js"), [],
        import.meta.url).then(e => e.default)),
    K5 = se(() => C(() =>
        import ("./DocOverview.80b5adc9.js"), [],
        import.meta.url).then(e => e.default)),
    G5 = se(() => C(() =>
        import ("./DocOverviewLayers.7b80fc1e.js"), ["./DocOverviewLayers.7b80fc1e.js", "./BaseTreeSelect.4f047d09.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./BaseTreeSelect.66d3a7da.css", "./DocLayoutSection.vue.38ed2935.js", "./TairoTocAnchor.vue.3130308f.js"],
        import.meta.url).then(e => e.default)),
    J5 = se(() => C(() =>
        import ("./ProseA.4eaf915f.js"), [],
        import.meta.url).then(e => e.default)),
    Q5 = se(() => C(() =>
        import ("./ProseCode.2c78584b.js"), ["./ProseCode.2c78584b.js", "./AddonMarkdownRemark.c3fa08ae.js", "./BaseProse.vue.dc20bce5.js", "./composables.5d7dee4e.js", "./index.30ac238c.js", "./AddonMarkdownRemark.1694d3fc.css"],
        import.meta.url).then(e => e.default)),
    Y5 = se(() => C(() =>
        import ("./ProseHr.ded47789.js"), [],
        import.meta.url).then(e => e.default)),
    X5 = se(() => C(() =>
        import ("./ProseLi.77f809e3.js"), ["./ProseLi.77f809e3.js", "./BaseListItem.vue.5913a706.js"],
        import.meta.url).then(e => e.default)),
    Z5 = se(() => C(() =>
        import ("./ProsePre.39785a50.js"), ["./ProsePre.39785a50.js", "./ProseCode.2c78584b.js", "./AddonMarkdownRemark.c3fa08ae.js", "./BaseProse.vue.dc20bce5.js", "./composables.5d7dee4e.js", "./index.30ac238c.js", "./AddonMarkdownRemark.1694d3fc.css"],
        import.meta.url).then(e => e.default)),
    eT = se(() => C(() =>
        import ("./ProseUl.1a4db1f9.js"), ["./ProseUl.1a4db1f9.js", "./BaseList.vue.5b9d4cf2.js"],
        import.meta.url).then(e => e.default)),
    tT = se(() => C(() =>
        import ("./DemoAccountMenu.cafda55f.js"), ["./DemoAccountMenu.cafda55f.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js"],
        import.meta.url).then(e => e.default)),
    nT = se(() => C(() =>
        import ("./DemoCircularMenuActivity.d5392947.js"), [],
        import.meta.url).then(e => e.default)),
    rT = se(() => C(() =>
        import ("./DemoCircularMenuLanguage.207d5873.js"), ["./DemoCircularMenuLanguage.207d5873.js", "./united-states-of-america.542263e9.js"],
        import.meta.url).then(e => e.default)),
    oT = se(() => C(() =>
        import ("./DemoCircularMenuNotifications.81d6dedb.js"), [],
        import.meta.url).then(e => e.default)),
    aT = se(() => C(() =>
        import ("./DemoCollapseNavigationFooter.791701b1.js"), ["./DemoCollapseNavigationFooter.791701b1.js", "./DemoAccountMenu.vue.5c7fb3b6.js", "./2.1efd1685.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js"],
        import.meta.url).then(e => e.default)),
    sT = se(() => C(() =>
        import ("./DemoCollapseNavigationHeader.67e7a0ac.js"), ["./DemoCollapseNavigationHeader.67e7a0ac.js", "./TairoLogo.d97795b4.js"],
        import.meta.url).then(e => e.default)),
    iT = se(() => C(() =>
        import ("./DemoPanelActivity.44f6f9c0.js"), ["./DemoPanelActivity.44f6f9c0.js", "./2.1efd1685.js", "./24.b29f931c.js", "./3.207767d4.js", "./19.9d88898e.js", "./18.2eb23304.js"],
        import.meta.url).then(e => e.default)),
    lT = se(() => C(() =>
        import ("./DemoPanelLanguage.119328a6.js"), ["./DemoPanelLanguage.119328a6.js", "./united-states-of-america.542263e9.js"],
        import.meta.url).then(e => e.default)),
    cT = se(() => C(() =>
        import ("./DemoPanelSearch.bbfc42fd.js"), ["./DemoPanelSearch.bbfc42fd.js", "./3.207767d4.js", "./18.2eb23304.js", "./combobox.7dbe84ed.js", "./use-tracked-pointer.975289db.js", "./use-resolve-button-type.8bfbdb65.js", "./use-tree-walker.8f4d0e5a.js", "./use-controllable.44593918.js"],
        import.meta.url).then(e => e.default)),
    uT = se(() => C(() =>
        import ("./DemoPanelTask.e9492129.js"), ["./DemoPanelTask.e9492129.js", "./BaseButtonIcon.vue.a0506f73.js", "./BaseTag.vue.faa2c4d6.js", "./BaseAvatar.vue.97d6ac95.js", "./BaseProgress.vue.39cdf738.js", "./BaseCheckbox.vue.d8a186e4.js", "./IconCheck.cccc4373.js", "./BaseButtonAction.vue.15a468c3.js", "./BaseTextarea.vue.464f1f49.js"],
        import.meta.url).then(e => e.default)),
    dT = se(() => C(() =>
        import ("./DemoSubsidebarDashboards.c08de942.js"), ["./DemoSubsidebarDashboards.c08de942.js", "./TairoSubsidebar.040d37d7.js", "./TairoSubsidebarMenu.vue.74a55ff6.js"],
        import.meta.url).then(e => e.default)),
    fT = se(() => C(() =>
        import ("./DemoSubsidebarLayouts.bad6b41a.js"), ["./DemoSubsidebarLayouts.bad6b41a.js", "./TairoSubsidebar.040d37d7.js", "./TairoSubsidebarMenu.vue.74a55ff6.js"],
        import.meta.url).then(e => e.default)),
    pT = se(() => C(() =>
        import ("./DemoThemeToggle.f3e06c8d.js"), ["./DemoThemeToggle.f3e06c8d.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css"],
        import.meta.url).then(e => e.default)),
    hT = se(() => C(() =>
        import ("./DemoToolbarAccountMenu.96e6c297.js"), ["./DemoToolbarAccountMenu.96e6c297.js", "./2.1efd1685.js", "./3.207767d4.js", "./9.379f9e46.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js"],
        import.meta.url).then(e => e.default)),
    mT = se(() => C(() =>
        import ("./DemoToolbarActivity.dd18c8a2.js"), [],
        import.meta.url).then(e => e.default)),
    gT = se(() => C(() =>
        import ("./DemoToolbarCustomize.ba646dca.js"), [],
        import.meta.url).then(e => e.default)),
    vT = se(() => C(() =>
        import ("./DemoToolbarLanguage.b9026b05.js"), ["./DemoToolbarLanguage.b9026b05.js", "./united-states-of-america.542263e9.js"],
        import.meta.url).then(e => e.default)),
    _T = se(() => C(() =>
        import ("./DemoToolbarNotifications.36a1956d.js"), ["./DemoToolbarNotifications.36a1956d.js", "./12.83c5e797.js", "./19.9d88898e.js", "./3.207767d4.js", "./menu.780a0af3.js", "./use-tracked-pointer.975289db.js", "./use-tree-walker.8f4d0e5a.js", "./use-resolve-button-type.8bfbdb65.js", "./use-text-value.d92f8611.js"],
        import.meta.url).then(e => e.default)),
    bT = se(() => C(() =>
        import ("./DemoToolbarSearch.4740476d.js"), [],
        import.meta.url).then(e => e.default)),
    yT = se(() => C(() =>
        import ("./DemoTopnavWorkspaceDropdown.902210a6.js"), ["./DemoTopnavWorkspaceDropdown.902210a6.js", "./BaseAvatar.vue.97d6ac95.js"],
        import.meta.url).then(e => e.default)),
    wT = se(() => C(() =>
        import ("./DocLayoutSection.8118c166.js"), ["./DocLayoutSection.8118c166.js", "./DocLayoutSection.vue.38ed2935.js", "./TairoTocAnchor.vue.3130308f.js"],
        import.meta.url).then(e => e.default)),
    xT = se(() => C(() =>
        import ("./DocSubsidebarCollapseLink.e665fb59.js"), ["./DocSubsidebarCollapseLink.e665fb59.js", "./DocSubsidebarCollapseLink.vue.61723c41.js"],
        import.meta.url).then(e => e.default)),
    kT = se(() => C(() =>
        import ("./DocSubsidebarDocumentation.30199440.js"), ["./DocSubsidebarDocumentation.30199440.js", "./TairoSubsidebar.040d37d7.js", "./DocSubsidebarCollapseLink.vue.61723c41.js", "./navigation.fe785a41.js"],
        import.meta.url).then(e => e.default)),
    ET = se(() => C(() =>
        import ("./TairoLogo.d97795b4.js"), [],
        import.meta.url).then(e => e.default)),
    TT = se(() => C(() => Promise.resolve().then(() => r4), void 0,
        import.meta.url).then(e => e.default)),
    CT = se(() => C(() =>
        import ("./TairoToaster.94e8a61f.js"), [],
        import.meta.url).then(e => e.default)),
    PT = se(() => C(() =>
        import ("./TairoTocAnchor.fa210dcd.js"), ["./TairoTocAnchor.fa210dcd.js", "./TairoTocAnchor.vue.3130308f.js"],
        import.meta.url).then(e => e.default)),
    $T = se(() => C(() =>
        import ("./ContentDoc.cf4e47ae.js"), ["./ContentDoc.cf4e47ae.js", "./head.dd6d1fae.js", "./ContentRenderer.4ce562ae.js", "./ContentRendererMarkdown.vue.2d2fc16f.js", "./index.c332151d.js", "./index.30ac238c.js", "./ContentQuery.c83d93ea.js"],
        import.meta.url).then(e => e.default)),
    ST = se(() => C(() =>
        import ("./ContentList.27367cd6.js"), ["./ContentList.27367cd6.js", "./ContentQuery.c83d93ea.js"],
        import.meta.url).then(e => e.default)),
    AT = se(() => C(() =>
        import ("./ContentNavigation.7806a80c.js"), ["./ContentNavigation.7806a80c.js", "./navigation.fe785a41.js"],
        import.meta.url).then(e => e.default)),
    LT = se(() => C(() =>
        import ("./ContentQuery.c83d93ea.js"), [],
        import.meta.url).then(e => e.default)),
    OT = se(() => C(() =>
        import ("./ContentRenderer.4ce562ae.js"), ["./ContentRenderer.4ce562ae.js", "./ContentRendererMarkdown.vue.2d2fc16f.js", "./index.c332151d.js", "./index.30ac238c.js"],
        import.meta.url).then(e => e.default)),
    RT = se(() => C(() =>
        import ("./ContentRendererMarkdown.cadb851a.js"), ["./ContentRendererMarkdown.cadb851a.js", "./ContentRendererMarkdown.vue.2d2fc16f.js", "./index.c332151d.js", "./index.30ac238c.js"],
        import.meta.url).then(e => e.default)),
    DT = se(() => C(() =>
        import ("./ContentSlot.82996e1d.js"), ["./ContentSlot.82996e1d.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    IT = se(() => C(() =>
        import ("./DocumentDrivenEmpty.f781f3b1.js"), [],
        import.meta.url).then(e => e.default)),
    MT = se(() => C(() =>
        import ("./DocumentDrivenNotFound.f14e99e5.js"), [],
        import.meta.url).then(e => e.default)),
    FT = se(() => C(() =>
        import ("./Markdown.7a8f446e.js"), ["./Markdown.7a8f446e.js", "./ContentSlot.82996e1d.js", "./node.6e7488f2.js"],
        import.meta.url).then(e => e.default)),
    NT = se(() => C(() =>
        import ("./ProseCodeInline.94c77028.js"), [],
        import.meta.url).then(e => e.default)),
    jT = se(() => C(() =>
        import ("./ProseBlockquote.3fd9f894.js"), [],
        import.meta.url).then(e => e.default)),
    BT = se(() => C(() =>
        import ("./ProseEm.04194f2c.js"), [],
        import.meta.url).then(e => e.default)),
    HT = se(() => C(() =>
        import ("./ProseH1.069c4585.js"), [],
        import.meta.url).then(e => e.default)),
    zT = se(() => C(() =>
        import ("./ProseH2.bc7497ee.js"), [],
        import.meta.url).then(e => e.default)),
    VT = se(() => C(() =>
        import ("./ProseH3.e0bfefde.js"), [],
        import.meta.url).then(e => e.default)),
    UT = se(() => C(() =>
        import ("./ProseH4.d40098ca.js"), [],
        import.meta.url).then(e => e.default)),
    WT = se(() => C(() =>
        import ("./ProseH5.ef043a67.js"), [],
        import.meta.url).then(e => e.default)),
    qT = se(() => C(() =>
        import ("./ProseH6.981cbc51.js"), [],
        import.meta.url).then(e => e.default)),
    KT = se(() => C(() =>
        import ("./ProseImg.f581169b.js"), [],
        import.meta.url).then(e => e.default)),
    GT = se(() => C(() =>
        import ("./ProseOl.dc189250.js"), [],
        import.meta.url).then(e => e.default)),
    JT = se(() => C(() =>
        import ("./ProseP.1d87c0d2.js"), [],
        import.meta.url).then(e => e.default)),
    QT = se(() => C(() =>
        import ("./ProseStrong.1a18ed5c.js"), [],
        import.meta.url).then(e => e.default)),
    YT = se(() => C(() =>
        import ("./ProseTable.294caa7c.js"), [],
        import.meta.url).then(e => e.default)),
    XT = se(() => C(() =>
        import ("./ProseTbody.d915a15b.js"), [],
        import.meta.url).then(e => e.default)),
    ZT = se(() => C(() =>
        import ("./ProseTd.d0a82bc8.js"), [],
        import.meta.url).then(e => e.default)),
    eC = se(() => C(() =>
        import ("./ProseTh.7aaeeeba.js"), [],
        import.meta.url).then(e => e.default)),
    tC = se(() => C(() =>
        import ("./ProseThead.937e428c.js"), [],
        import.meta.url).then(e => e.default)),
    nC = se(() => C(() =>
        import ("./ProseTr.6ad94b07.js"), [],
        import.meta.url).then(e => e.default)),
    rC = se(() => C(() => Promise.resolve().then(() => F3), void 0,
        import.meta.url).then(e => e.default)),
    oC = se(() => C(() =>
        import ("./IconCSS.5cccd832.js"), ["./IconCSS.5cccd832.js", "./IconCSS.0cf01e94.css"],
        import.meta.url).then(e => e.default)),
    aC = [
        ["DocComponentDemo", F5],
        ["DocComponentList", N5],
        ["DocComponentMeta", j5],
        ["DocGridIcon", B5],
        ["DocHeading", H5],
        ["DocLinkExternal", z5],
        ["DocLinkImage", V5],
        ["DocLinker", U5],
        ["DocMessage", W5],
        ["DocNav", q5],
        ["DocOverview", K5],
        ["DocOverviewLayers", G5],
        ["ProseA", J5],
        ["ProseCode", Q5],
        ["ProseHr", Y5],
        ["ProseLi", X5],
        ["ProsePre", Z5],
        ["ProseUl", eT],
        ["DemoAccountMenu", tT],
        ["DemoCircularMenuActivity", nT],
        ["DemoCircularMenuLanguage", rT],
        ["DemoCircularMenuNotifications", oT],
        ["DemoCollapseNavigationFooter", aT],
        ["DemoCollapseNavigationHeader", sT],
        ["DemoPanelActivity", iT],
        ["DemoPanelLanguage", lT],
        ["DemoPanelSearch", cT],
        ["DemoPanelTask", uT],
        ["DemoSubsidebarDashboards", dT],
        ["DemoSubsidebarLayouts", fT],
        ["DemoThemeToggle", pT],
        ["DemoToolbarAccountMenu", hT],
        ["DemoToolbarActivity", mT],
        ["DemoToolbarCustomize", gT],
        ["DemoToolbarLanguage", vT],
        ["DemoToolbarNotifications", _T],
        ["DemoToolbarSearch", bT],
        ["DemoTopnavWorkspaceDropdown", yT],
        ["DocLayoutSection", wT],
        ["DocSubsidebarCollapseLink", xT],
        ["DocSubsidebarDocumentation", kT],
        ["TairoLogo", ET],
        ["TairoLogoText", TT],
        ["TairoToaster", CT],
        ["TairoTocAnchor", PT],
        ["ContentDoc", $T],
        ["ContentList", ST],
        ["ContentNavigation", AT],
        ["ContentQuery", LT],
        ["ContentRenderer", OT],
        ["ContentRendererMarkdown", RT],
        ["MDCSlot", DT],
        ["DocumentDrivenEmpty", IT],
        ["DocumentDrivenNotFound", MT],
        ["Markdown", FT],
        ["ProseCodeInline", NT],
        ["ProseBlockquote", jT],
        ["ProseEm", BT],
        ["ProseH1", HT],
        ["ProseH2", zT],
        ["ProseH3", VT],
        ["ProseH4", UT],
        ["ProseH5", WT],
        ["ProseH6", qT],
        ["ProseImg", KT],
        ["ProseOl", GT],
        ["ProseP", JT],
        ["ProseStrong", QT],
        ["ProseTable", YT],
        ["ProseTbody", XT],
        ["ProseTd", ZT],
        ["ProseTh", eC],
        ["ProseThead", tC],
        ["ProseTr", nC],
        ["Icon", rC],
        ["IconCSS", oC]
    ],
    sC = vn({
        name: "nuxt:global-components",
        setup(e) {
            for (const [t, n] of aC) e.vueApp.component(t, n), e.vueApp.component("Lazy" + t, n)
        }
    }),
    iC = vn({
        name: "nuxt:head",
        setup(e) {
            const n = eE();
            n.push(oE), e.vueApp.use(n); {
                let r = !0;
                const o = () => {
                    r = !1, n.hooks.callHook("entries:updated", n)
                };
                n.hooks.hook("dom:beforeRender", a => {
                    a.shouldRender = !r
                }), e.hooks.hook("page:start", () => {
                    r = !0
                }), e.hooks.hook("page:finish", o), e.hooks.hook("app:suspense:resolve", o)
            }
        }
    }),
    Sr = {
        default: () => C(() =>
            import ("./default.8fed1f3d.js"), [],
            import.meta.url).then(e => e.default || e),
        landing: () => C(() =>
            import ("./landing.ee982d1e.js"), ["./landing.ee982d1e.js", "./BaseThemeToggle.vue.bfe8cd23.js", "./composables.5d7dee4e.js", "./BaseThemeToggle.89fc3ae2.css"],
            import.meta.url).then(e => e.default || e),
        sidebar: () => C(() =>
            import ("./sidebar.6dafe28a.js"), [],
            import.meta.url).then(e => e.default || e),
        collapse: () => C(() =>
            import ("./collapse.b12ae382.js"), [],
            import.meta.url).then(e => e.default || e),
        topnav: () => C(() =>
            import ("./topnav.42383631.js"), [],
            import.meta.url).then(e => e.default || e),
        empty: () => C(() =>
            import ("./empty.36340fdd.js"), [],
            import.meta.url).then(e => e.default || e)
    },
    lC = vn({
        name: "nuxt:prefetch",
        setup(e) {
            const t = Tn();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    const r = n ? .meta ? .layout;
                    r && typeof Sr[r] == "function" && await Sr[r]()
                })
            }), e.hooks.hook("link:prefetch", n => {
                if (_i(n)) return;
                const r = t.resolve(n);
                if (!r) return;
                const o = r ? .meta ? .layout;
                let a = Array.isArray(r ? .meta ? .middleware) ? r ? .meta ? .middleware : [r ? .meta ? .middleware];
                a = a.filter(s => typeof s == "string");
                for (const s of a) typeof Du[s] == "function" && Du[s]();
                o && typeof Sr[o] == "function" && Sr[o]()
            })
        }
    }),
    Iu = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    cC = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    d0 = e => {
        const t = tt();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            Iu(e)
        }) : Iu(e)
    },
    uC = () => null;

function dC(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    let [n, r, o = {}] = e;
    if (typeof n != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    o.server = o.server ? ? !0, o.default = o.default ? ? uC, o.lazy = o.lazy ? ? !1, o.immediate = o.immediate ? ? !0;
    const a = tt(),
        s = () => a.isHydrating ? a.payload.data[n] : a.static.data[n],
        i = () => s() !== void 0;
    a._asyncData[n] || (a._asyncData[n] = {
        data: Z(s() ? ? o.default()),
        pending: Z(!i()),
        error: jl(a.payload._errors, n),
        status: Z("idle")
    });
    const l = { ...a._asyncData[n]
    };
    l.refresh = l.execute = (h = {}) => {
        if (a._asyncDataPromises[n]) {
            if (h.dedupe === !1) return a._asyncDataPromises[n];
            a._asyncDataPromises[n].cancelled = !0
        }
        if ((h._initial || a.isHydrating && h._initial !== !1) && i()) return s();
        l.pending.value = !0, l.status.value = "pending";
        const v = new Promise((_, g) => {
            try {
                _(r(a))
            } catch (P) {
                g(P)
            }
        }).then(_ => {
            if (v.cancelled) return a._asyncDataPromises[n];
            let g = _;
            o.transform && (g = o.transform(_)), o.pick && (g = fC(g, o.pick)), l.data.value = g, l.error.value = null, l.status.value = "success"
        }).catch(_ => {
            if (v.cancelled) return a._asyncDataPromises[n];
            l.error.value = _, l.data.value = y(o.default()), l.status.value = "error"
        }).finally(() => {
            v.cancelled || (l.pending.value = !1, a.payload.data[n] = l.data.value, l.error.value && (a.payload._errors[n] = Zl(l.error.value)), delete a._asyncDataPromises[n])
        });
        return a._asyncDataPromises[n] = v, a._asyncDataPromises[n]
    };
    const c = () => l.refresh({
            _initial: !0
        }),
        u = o.server !== !1 && a.payload.serverRendered; {
        const h = Dt();
        if (h && !h._nuxtOnBeforeMountCbs) {
            h._nuxtOnBeforeMountCbs = [];
            const _ = h._nuxtOnBeforeMountCbs;
            h && (md(() => {
                _.forEach(g => {
                    g()
                }), _.splice(0, _.length)
            }), Rt(() => _.splice(0, _.length)))
        }
        u && a.isHydrating && i() ? (l.pending.value = !1, l.status.value = l.error.value ? "error" : "success") : h && (a.payload.serverRendered && a.isHydrating || o.lazy) && o.immediate ? h._nuxtOnBeforeMountCbs.push(c) : o.immediate && c(), o.watch && Ue(o.watch, () => l.refresh());
        const v = a.hook("app:data:refresh", _ => {
            if (!_ || _.includes(n)) return l.refresh()
        });
        h && Rt(v)
    }
    const p = Promise.resolve(a._asyncDataPromises[n]).then(() => l);
    return Object.assign(p, l), p
}
async function S6(e) {
    await new Promise(n => d0(n));
    const t = e ? Array.isArray(e) ? e : [e] : void 0;
    await tt().hooks.callHookParallel("app:data:refresh", t)
}

function fC(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n
}
const Sh = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});

function Mu(e, t) {
    t ? t = { ...Sh,
        ...t
    } : t = Sh;
    const n = f0(t);
    return n.dispatch(e), n.toString()
}
const pC = Object.freeze(["prototype", "__proto__", "constructor"]);

function f0(e) {
    let t = "",
        n = new Map;
    const r = o => {
        t += o
    };
    return {
        toString() {
            return t
        },
        getContext() {
            return n
        },
        dispatch(o) {
            return e.replacer && (o = e.replacer(o)), this[o === null ? "null" : typeof o](o)
        },
        object(o) {
            if (o && typeof o.toJSON == "function") return this.object(o.toJSON());
            const a = Object.prototype.toString.call(o);
            let s = "";
            const i = a.length;
            i < 10 ? s = "unknown:[" + a + "]" : s = a.slice(8, i - 1), s = s.toLowerCase();
            let l = null;
            if ((l = n.get(o)) === void 0) n.set(o, n.size);
            else return this.dispatch("[CIRCULAR:" + l + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(o)) return r("buffer:"), r(o.toString("utf8"));
            if (s !== "object" && s !== "function" && s !== "asyncfunction") this[s] ? this[s](o) : e.ignoreUnknown || this.unkown(o, s);
            else {
                let c = Object.keys(o);
                e.unorderedObjects && (c = c.sort());
                let u = [];
                e.respectType !== !1 && !Ah(o) && (u = pC), e.excludeKeys && (c = c.filter(h => !e.excludeKeys(h)), u = u.filter(h => !e.excludeKeys(h))), r("object:" + (c.length + u.length) + ":");
                const p = h => {
                    this.dispatch(h), r(":"), e.excludeValues || this.dispatch(o[h]), r(",")
                };
                for (const h of c) p(h);
                for (const h of u) p(h)
            }
        },
        array(o, a) {
            if (a = a === void 0 ? e.unorderedArrays !== !1 : a, r("array:" + o.length + ":"), !a || o.length <= 1) {
                for (const l of o) this.dispatch(l);
                return
            }
            const s = new Map,
                i = o.map(l => {
                    const c = f0(e);
                    c.dispatch(l);
                    for (const [u, p] of c.getContext()) s.set(u, p);
                    return c.toString()
                });
            return n = s, i.sort(), this.array(i, !1)
        },
        date(o) {
            return r("date:" + o.toJSON())
        },
        symbol(o) {
            return r("symbol:" + o.toString())
        },
        unkown(o, a) {
            if (r(a), !!o && (r(":"), o && typeof o.entries == "function")) return this.array(Array.from(o.entries()), !0)
        },
        error(o) {
            return r("error:" + o.toString())
        },
        boolean(o) {
            return r("bool:" + o)
        },
        string(o) {
            r("string:" + o.length + ":"), r(o)
        },
        function(o) {
            r("fn:"), Ah(o) ? this.dispatch("[native]") : this.dispatch(o.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(o.name)), e.respectFunctionProperties && this.object(o)
        },
        number(o) {
            return r("number:" + o)
        },
        xml(o) {
            return r("xml:" + o.toString())
        },
        null() {
            return r("Null")
        },
        undefined() {
            return r("Undefined")
        },
        regexp(o) {
            return r("regex:" + o.toString())
        },
        uint8array(o) {
            return r("uint8array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        uint8clampedarray(o) {
            return r("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(o))
        },
        int8array(o) {
            return r("int8array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        uint16array(o) {
            return r("uint16array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        int16array(o) {
            return r("int16array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        uint32array(o) {
            return r("uint32array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        int32array(o) {
            return r("int32array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        float32array(o) {
            return r("float32array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        float64array(o) {
            return r("float64array:"), this.dispatch(Array.prototype.slice.call(o))
        },
        arraybuffer(o) {
            return r("arraybuffer:"), this.dispatch(new Uint8Array(o))
        },
        url(o) {
            return r("url:" + o.toString())
        },
        map(o) {
            r("map:");
            const a = [...o];
            return this.array(a, e.unorderedSets !== !1)
        },
        set(o) {
            r("set:");
            const a = [...o];
            return this.array(a, e.unorderedSets !== !1)
        },
        file(o) {
            return r("file:"), this.dispatch([o.name, o.size, o.type, o.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown) return r("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return r("domwindow")
        },
        bigint(o) {
            return r("bigint:" + o.toString())
        },
        process() {
            return r("process")
        },
        timer() {
            return r("timer")
        },
        pipe() {
            return r("pipe")
        },
        tcp() {
            return r("tcp")
        },
        udp() {
            return r("udp")
        },
        tty() {
            return r("tty")
        },
        statwatcher() {
            return r("statwatcher")
        },
        securecontext() {
            return r("securecontext")
        },
        connection() {
            return r("connection")
        },
        zlib() {
            return r("zlib")
        },
        context() {
            return r("context")
        },
        nodescript() {
            return r("nodescript")
        },
        httpparser() {
            return r("httpparser")
        },
        dataview() {
            return r("dataview")
        },
        signal() {
            return r("signal")
        },
        fsevent() {
            return r("fsevent")
        },
        tlswrap() {
            return r("tlswrap")
        }
    }
}
const p0 = "[native code] }",
    hC = p0.length;

function Ah(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-hC) === p0
}
class ir {
    constructor(t, n) {
        t = this.words = t || [], this.sigBytes = n === void 0 ? t.length * 4 : n
    }
    toString(t) {
        return (t || mC).stringify(this)
    }
    concat(t) {
        if (this.clamp(), this.sigBytes % 4)
            for (let n = 0; n < t.sigBytes; n++) {
                const r = t.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                this.words[this.sigBytes + n >>> 2] |= r << 24 - (this.sigBytes + n) % 4 * 8
            } else
                for (let n = 0; n < t.sigBytes; n += 4) this.words[this.sigBytes + n >>> 2] = t.words[n >>> 2];
        return this.sigBytes += t.sigBytes, this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new ir([...this.words])
    }
}
const mC = {
        stringify(e) {
            const t = [];
            for (let n = 0; n < e.sigBytes; n++) {
                const r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                t.push((r >>> 4).toString(16), (r & 15).toString(16))
            }
            return t.join("")
        }
    },
    gC = {
        stringify(e) {
            const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                n = [];
            for (let r = 0; r < e.sigBytes; r += 3) {
                const o = e.words[r >>> 2] >>> 24 - r % 4 * 8 & 255,
                    a = e.words[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255,
                    s = e.words[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255,
                    i = o << 16 | a << 8 | s;
                for (let l = 0; l < 4 && r * 8 + l * 6 < e.sigBytes * 8; l++) n.push(t.charAt(i >>> 6 * (3 - l) & 63))
            }
            return n.join("")
        }
    },
    vC = {
        parse(e) {
            const t = e.length,
                n = [];
            for (let r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
            return new ir(n, t)
        }
    },
    _C = {
        parse(e) {
            return vC.parse(unescape(encodeURIComponent(e)))
        }
    };
class bC {
    constructor() {
        this._data = new ir, this._nDataBytes = 0, this._minBufferSize = 0, this.blockSize = 512 / 32
    }
    reset() {
        this._data = new ir, this._nDataBytes = 0
    }
    _append(t) {
        typeof t == "string" && (t = _C.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes
    }
    _doProcessBlock(t, n) {}
    _process(t) {
        let n, r = this._data.sigBytes / (this.blockSize * 4);
        t ? r = Math.ceil(r) : r = Math.max((r | 0) - this._minBufferSize, 0);
        const o = r * this.blockSize,
            a = Math.min(o * 4, this._data.sigBytes);
        if (o) {
            for (let s = 0; s < o; s += this.blockSize) this._doProcessBlock(this._data.words, s);
            n = this._data.words.splice(0, o), this._data.sigBytes -= a
        }
        return new ir(n, a)
    }
}
class yC extends bC {
    update(t) {
        return this._append(t), this._process(), this
    }
    finalize(t) {
        t && this._append(t)
    }
}
const Lh = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
    wC = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
    wr = [];
class xC extends yC {
    constructor() {
        super(...arguments), this._hash = new ir([...Lh])
    }
    reset() {
        super.reset(), this._hash = new ir([...Lh])
    }
    _doProcessBlock(t, n) {
        const r = this._hash.words;
        let o = r[0],
            a = r[1],
            s = r[2],
            i = r[3],
            l = r[4],
            c = r[5],
            u = r[6],
            p = r[7];
        for (let h = 0; h < 64; h++) {
            if (h < 16) wr[h] = t[n + h] | 0;
            else {
                const I = wr[h - 15],
                    A = (I << 25 | I >>> 7) ^ (I << 14 | I >>> 18) ^ I >>> 3,
                    N = wr[h - 2],
                    M = (N << 15 | N >>> 17) ^ (N << 13 | N >>> 19) ^ N >>> 10;
                wr[h] = A + wr[h - 7] + M + wr[h - 16]
            }
            const v = l & c ^ ~l & u,
                _ = o & a ^ o & s ^ a & s,
                g = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
                P = (l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25),
                S = p + P + v + wC[h] + wr[h],
                x = g + _;
            p = u, u = c, c = l, l = i + S | 0, i = s, s = a, a = o, o = S + x | 0
        }
        r[0] = r[0] + o | 0, r[1] = r[1] + a | 0, r[2] = r[2] + s | 0, r[3] = r[3] + i | 0, r[4] = r[4] + l | 0, r[5] = r[5] + c | 0, r[6] = r[6] + u | 0, r[7] = r[7] + p | 0
    }
    finalize(t) {
        super.finalize(t);
        const n = this._nDataBytes * 8,
            r = this._data.sigBytes * 8;
        return this._data.words[r >>> 5] |= 128 << 24 - r % 32, this._data.words[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), this._data.words[(r + 64 >>> 9 << 4) + 15] = n, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
    }
}

function kC(e) {
    return new xC().finalize(e).toString(gC)
}

function Oh(e, t = {}) {
    const n = typeof e == "string" ? e : Mu(e, t);
    return kC(n).slice(0, 10)
}

function EC(e, t, n = {}) {
    return e === t || Mu(e, n) === Mu(t, n)
}
const TC = {
    path: "/",
    watch: !0,
    decode: e => Sg(decodeURIComponent(e)),
    encode: e => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
};

function ol(e, t) {
    const n = { ...TC,
            ...t
        },
        r = CC(n) || {},
        o = Z(r[e] ? ? n.default ? .()); {
        const a = typeof BroadcastChannel > "u" ? null : new BroadcastChannel(`nuxt:cookies:${e}`);
        Dt() && Rt(() => {
            a ? .close()
        });
        const s = () => {
            $C(e, o.value, n), a ? .postMessage(Be(o.value))
        };
        let i = !1;
        a && (a.onmessage = l => {
            i = !0, o.value = l.data, Gt(() => {
                i = !1
            })
        }), n.watch ? Ue(o, (l, c) => {
            i || EC(l, c) || s()
        }, {
            deep: n.watch !== "shallow"
        }) : s()
    }
    return o
}

function CC(e = {}) {
    return fE(document.cookie, e)
}

function PC(e, t, n = {}) {
    return t == null ? ch(e, t, { ...n,
        maxAge: -1
    }) : ch(e, t, n)
}

function $C(e, t, n = {}) {
    document.cookie = PC(e, t, n)
}
async function h0(e, t = Tn()) {
    const {
        path: n,
        matched: r
    } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = new Set), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises = t._preloadPromises || [];
    if (o.length > 4) return Promise.all(o).then(() => h0(e, t));
    t._routePreloaded.add(n);
    const a = r.map(s => s.components ? .default).filter(s => typeof s == "function");
    for (const s of a) {
        const i = Promise.resolve(s()).catch(() => {}).finally(() => o.splice(o.indexOf(i)));
        o.push(i)
    }
    await Promise.all(o)
}

function SC(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || n ? .path !== t || n ? .expires < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ? ? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: tt().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const AC = (...e) => e.find(t => t !== void 0),
    LC = "noopener noreferrer"; /*!@__NO_SIDE_EFFECTS__*/
function m0(e) {
    const t = e.componentName || "NuxtLink",
        n = (r, o) => {
            if (!r || e.trailingSlash !== "append" && e.trailingSlash !== "remove") return r;
            const a = e.trailingSlash === "append" ? bl : Jl;
            if (typeof r == "string") return a(r, !0);
            const s = "path" in r ? r.path : o(r).path;
            return { ...r,
                name: void 0,
                path: a(s, !0)
            }
        };
    return be({
        name: t,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        setup(r, {
            slots: o
        }) {
            const a = Tn(),
                s = j(() => {
                    const p = r.to || r.href || "";
                    return n(p, a.resolve)
                }),
                i = j(() => r.external || r.target && r.target !== "_self" ? !0 : typeof s.value == "object" ? !1 : s.value === "" || _i(s.value, {
                    acceptRelative: !0
                })),
                l = Z(!1),
                c = Z(null),
                u = p => {
                    c.value = r.custom ? p ? .$el ? .nextElementSibling : p ? .$el
                };
            if (r.prefetch !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !RC()) {
                const h = tt();
                let v, _ = null;
                vt(() => {
                    const g = OC();
                    d0(() => {
                        v = Iu(() => {
                            c ? .value ? .tagName && (_ = g.observe(c.value, async () => {
                                _ ? .(), _ = null;
                                const P = typeof s.value == "string" ? s.value : a.resolve(s.value).fullPath;
                                await Promise.all([h.hooks.callHook("link:prefetch", P).catch(() => {}), !i.value && h0(s.value, a).catch(() => {})]), l.value = !0
                            }))
                        })
                    })
                }), Fn(() => {
                    v && cC(v), _ ? .(), _ = null
                })
            }
            return () => {
                if (!i.value) {
                    const g = {
                        ref: u,
                        to: s.value,
                        activeClass: r.activeClass || e.activeClass,
                        exactActiveClass: r.exactActiveClass || e.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (l.value && (g.class = r.prefetchedClass || e.prefetchedClass), g.rel = r.rel), Ie(Wl("RouterLink"), g, o.default)
                }
                const p = typeof s.value == "object" ? a.resolve(s.value) ? .href ? ? null : s.value || null,
                    h = r.target || null,
                    v = r.noRel ? null : AC(r.rel, e.externalRelAttribute, p ? LC : "") || null,
                    _ = () => TE(p, {
                        replace: r.replace
                    });
                return r.custom ? o.default ? o.default({
                    href: p,
                    navigate: _,
                    get route() {
                        if (!p) return;
                        const g = Ql(p);
                        return {
                            path: g.pathname,
                            fullPath: g.pathname,
                            get query() {
                                return Rg(g.search)
                            },
                            hash: g.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: p
                        }
                    },
                    rel: v,
                    target: h,
                    isExternal: i.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : Ie("a", {
                    ref: c,
                    href: p,
                    rel: v,
                    target: h
                }, o.default ? .())
            }
        }
    })
}
const hr = m0({
    componentName: "NuxtLink"
});

function OC() {
    const e = tt();
    if (e._observer) return e._observer;
    let t = null;
    const n = new Map,
        r = (a, s) => (t || (t = new IntersectionObserver(i => {
            for (const l of i) {
                const c = n.get(l.target);
                (l.isIntersecting || l.intersectionRatio > 0) && c && c()
            }
        })), n.set(a, s), t.observe(a), () => {
            n.delete(a), t.unobserve(a), n.size === 0 && (t.disconnect(), t = null)
        });
    return e._observer = {
        observe: r
    }
}

function RC() {
    const e = navigator.connection;
    return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
const DC = {
        nuxtIcon: {},
        nui: {
            defaultShapes: {}
        },
        tairo: {
            title: "Tairo",
            sidebar: {
                toolbar: {
                    showNavBurger: !0,
                    tools: [{
                        component: "DemoThemeToggle",
                        props: {
                            disableTransitions: !0
                        }
                    }, {
                        component: "DemoToolbarLanguage"
                    }, {
                        component: "DemoToolbarNotifications"
                    }, {
                        component: "DemoToolbarActivity"
                    }, {
                        component: "DemoToolbarAccountMenu"
                    }]
                },
                circularMenu: {
                    enabled: !0,
                    tools: [{
                        component: "DemoThemeToggle",
                        props: {
                            class: "ms-auto",
                            disableTransitions: !0,
                            inverted: !0
                        }
                    }, {
                        component: "DemoCircularMenuLanguage"
                    }, {
                        component: "DemoCircularMenuNotifications"
                    }, {
                        component: "DemoCircularMenuActivity"
                    }]
                },
                navigation: {
                    logo: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-600 h-10"
                        }
                    },
                    items: [{
                        title: "Dashboards",
                        icon: {
                            name: "ph:sidebar-duotone",
                            class: "w-5 h-5"
                        },
                        subsidebar: {
                            component: "DemoSubsidebarDashboards"
                        },
                        activePath: "/dashboards"
                    }, {
                        title: "Layouts",
                        icon: {
                            name: "ph:app-window-duotone",
                            class: "w-5 h-5"
                        },
                        subsidebar: {
                            component: "DemoSubsidebarLayouts"
                        },
                        activePath: "/layouts"
                    }, {
                        title: "Chat",
                        icon: {
                            name: "ph:chat-circle-duotone",
                            class: "w-5 h-5"
                        },
                        to: "/dashboards/messaging"
                    }, {
                        title: "Customize",
                        icon: {
                            name: "ph:drop-half-bottom-duotone",
                            class: "w-5 h-5"
                        },
                        click: () => {
                            const e = yt("switcher-open", () => !1);
                            e.value = !0
                        },
                        position: "end"
                    }, {
                        title: "Search",
                        icon: {
                            name: "ph:magnifying-glass-duotone",
                            class: "w-5 h-5"
                        },
                        click: () => {
                            const e = yt("search-open", () => !1);
                            e.value = !0
                        },
                        position: "end"
                    }, {
                        title: "Settings",
                        icon: {
                            name: "ph:gear-six-duotone",
                            class: "w-5 h-5"
                        },
                        to: "/layouts/profile-settings",
                        position: "end"
                    }, {
                        title: "My Account",
                        component: "DemoAccountMenu",
                        position: "end"
                    }]
                }
            },
            collapse: {
                toolbar: {
                    enabled: !0,
                    showTitle: !0,
                    showNavBurger: !0,
                    tools: [{
                        component: "DemoThemeToggle"
                    }, {
                        component: "DemoToolbarLanguage"
                    }, {
                        component: "DemoToolbarNotifications"
                    }, {
                        component: "DemoToolbarActivity"
                    }, {
                        component: "DemoToolbarAccountMenu"
                    }]
                },
                circularMenu: {
                    enabled: !0,
                    tools: [{
                        component: "DemoThemeToggle",
                        props: {
                            class: "ms-auto",
                            disableTransitions: !0,
                            inverted: !0
                        }
                    }, {
                        component: "DemoCircularMenuLanguage"
                    }, {
                        component: "DemoCircularMenuNotifications"
                    }, {
                        component: "DemoCircularMenuActivity"
                    }]
                },
                navigation: {
                    enabled: !0,
                    header: {
                        component: "DemoCollapseNavigationHeader"
                    },
                    footer: {
                        component: "DemoCollapseNavigationFooter"
                    },
                    items: [{
                        name: "Dashboards",
                        icon: {
                            name: "ph:sidebar-duotone",
                            class: "w-5 h-5"
                        },
                        activePath: "/dashboards",
                        children: [{
                            name: "Personal v1",
                            to: "/dashboards",
                            icon: {
                                name: "ph:coffee-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Personal v2",
                            to: "/dashboards/personal-2",
                            icon: {
                                name: "ph:chart-pie-slice-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Personal v3",
                            to: "/dashboards/personal-3",
                            icon: {
                                name: "ph:cactus-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Analytics",
                            to: "/dashboards/analytics",
                            icon: {
                                name: "ph:gauge-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Stocks",
                            to: "/dashboards/stocks",
                            icon: {
                                name: "ph:coin-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Sales",
                            to: "/dashboards/sales",
                            icon: {
                                name: "ph:shopping-cart-duotone",
                                class: "w-4 h-4"
                            }
                        }]
                    }, {
                        name: "Layouts",
                        icon: {
                            name: "ph:app-window-duotone",
                            class: "w-5 h-5"
                        },
                        activePath: "/layouts",
                        children: [{
                            name: "List view v1",
                            to: "/layouts",
                            icon: {
                                name: "ph:list-bullets-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Flex list v1",
                            to: "/layouts/flex-list-1",
                            icon: {
                                name: "ph:list-checks-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Table list v1",
                            to: "/layouts/table-list-1",
                            icon: {
                                name: "ph:table-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Card grid v1",
                            to: "/layouts/card-grid-1",
                            icon: {
                                name: "ph:circles-four-duotone",
                                class: "w-4 h-4"
                            }
                        }]
                    }, {
                        name: "Projects",
                        icon: {
                            name: "ph:suitcase-duotone",
                            class: "w-5 h-5"
                        },
                        activePath: "/layouts/projects/",
                        children: [{
                            name: "Projects",
                            to: "/layouts/projects/project-list-3",
                            icon: {
                                name: "ph:leaf-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Project Details",
                            to: "/layouts/projects/details",
                            icon: {
                                name: "ph:note-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Kanban Board",
                            to: "/layouts/projects/board",
                            icon: {
                                name: "ph:circles-four-duotone",
                                class: "w-4 h-4"
                            }
                        }]
                    }, {
                        name: "Auth",
                        icon: {
                            name: "ph:lock-duotone",
                            class: "w-5 h-5"
                        },
                        activePath: "/layouts/projects/",
                        children: [{
                            name: "Login",
                            to: "/auth",
                            icon: {
                                name: "ph:fingerprint-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Signup",
                            to: "/auth/signup-1",
                            icon: {
                                name: "ph:plus-circle-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Recover",
                            to: "/auth",
                            icon: {
                                name: "ph:lightning-duotone",
                                class: "w-4 h-4"
                            }
                        }]
                    }, {
                        name: "Widgets",
                        icon: {
                            name: "ph:nut-duotone",
                            class: "w-5 h-5"
                        },
                        activePath: "/dashboards/widgets",
                        children: [{
                            name: "UI Widgets",
                            to: "/dashboards/widgets",
                            icon: {
                                name: "ph:square-half-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "Creative Widgets",
                            to: "/dashboards/widgets/creative",
                            icon: {
                                name: "ph:square-half-bottom-duotone",
                                class: "w-4 h-4"
                            }
                        }, {
                            name: "List Widgets",
                            to: "/dashboards/widgets/list",
                            icon: {
                                name: "ph:square-half-duotone",
                                class: "w-4 h-4"
                            }
                        }]
                    }, {
                        name: "Divider",
                        divider: !0
                    }, {
                        name: "Charts",
                        icon: {
                            name: "ph:chart-pie-slice-duotone",
                            class: "w-5 h-5"
                        },
                        to: "/dashboards/charts"
                    }, {
                        name: "Wizard",
                        icon: {
                            name: "ph:magic-wand-duotone",
                            class: "w-5 h-5"
                        },
                        to: "/wizard"
                    }, {
                        name: "Messaging",
                        icon: {
                            name: "ph:chats-circle-duotone",
                            class: "w-5 h-5"
                        },
                        to: "/dashboards/messaging"
                    }, {
                        name: "Customize",
                        icon: {
                            name: "ph:drop-half-bottom-duotone",
                            class: "w-5 h-5"
                        },
                        click: () => {
                            const e = yt("switcher-open", () => !1);
                            e.value = !0
                        },
                        position: "end"
                    }]
                }
            },
            topnav: {
                navigation: {
                    enabled: !0,
                    logo: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-600 h-10 w-10"
                        }
                    },
                    header: {
                        component: "DemoTopnavWorkspaceDropdown"
                    },
                    items: [{
                        name: "Dashboard",
                        icon: {
                            name: "ph:gauge-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/dashboards/sales",
                        to: "/dashboards/sales"
                    }, {
                        name: "Projects",
                        icon: {
                            name: "ph:suitcase-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/projects/project-list-3",
                        to: "/layouts/projects/project-list-3"
                    }, {
                        name: "Freelancers",
                        icon: {
                            name: "ph:users-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/flex-list-1",
                        to: "/layouts/flex-list-1"
                    }, {
                        name: "Files",
                        icon: {
                            name: "ph:note-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/table-list-3",
                        to: "/layouts/table-list-3"
                    }, {
                        name: "Customers",
                        icon: {
                            name: "ph:users-three-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/user-grid-3",
                        to: "/layouts/user-grid-3"
                    }, {
                        name: "Billing",
                        icon: {
                            name: "ph:credit-card-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/utility-billing",
                        to: "/layouts/utility-billing"
                    }, {
                        name: "Settings",
                        icon: {
                            name: "ph:gear-six-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/profile-settings",
                        to: "/layouts/profile-settings"
                    }, {
                        name: "Status",
                        icon: {
                            name: "ph:notification-duotone",
                            class: "w-6 h-6"
                        },
                        activePath: "/layouts/utility-status",
                        to: "/layouts/utility-status"
                    }]
                },
                circularMenu: {
                    enabled: !0,
                    tools: [{
                        component: "DemoThemeToggle",
                        props: {
                            class: "ms-auto",
                            disableTransitions: !0,
                            inverted: !0
                        }
                    }, {
                        component: "DemoCircularMenuLanguage"
                    }, {
                        component: "DemoCircularMenuNotifications"
                    }, {
                        component: "DemoCircularMenuActivity"
                    }]
                },
                toolbar: {
                    enabled: !0,
                    showTitle: !1,
                    tools: [{
                        component: "DemoThemeToggle",
                        props: {
                            disableTransitions: !0
                        }
                    }, {
                        component: "DemoToolbarSearch"
                    }, {
                        component: "DemoToolbarCustomize"
                    }, {
                        component: "DemoToolbarNotifications"
                    }, {
                        component: "DemoAccountMenu",
                        props: {
                            horizontal: !0
                        }
                    }]
                },
                footer: {
                    enabled: !0,
                    logoSeparator: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-500 h-7 w-7"
                        }
                    },
                    logo: {
                        component: "TairoLogoText",
                        props: {
                            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
                        }
                    },
                    copyright: {
                        name: "Css Ninja",
                        to: "https://cssninja.io",
                        since: "2018"
                    },
                    links: [{
                        name: "Demo pages",
                        to: "/demo"
                    }, {
                        name: "Documentation",
                        to: "/documentation"
                    }, {
                        name: "Shuriken UI",
                        to: "https://github.com/shuriken-ui",
                        rel: "noopener",
                        target: "_blank"
                    }, {
                        name: "Support",
                        to: "https://cssninja.io/faq/support",
                        rel: "noopener",
                        target: "_blank"
                    }]
                }
            },
            panels: [{
                name: "language",
                position: "right",
                component: "DemoPanelLanguage"
            }, {
                name: "activity",
                position: "right",
                component: "DemoPanelActivity"
            }, {
                name: "search",
                position: "left",
                component: "DemoPanelSearch"
            }, {
                name: "task",
                position: "right",
                component: "DemoPanelTask"
            }],
            error: {
                logo: {
                    component: "img",
                    props: {
                        src: "/img/illustrations/system/404-1.svg",
                        class: "relative z-20 w-full max-w-lg mx-auto"
                    }
                }
            }
        }
    },
    IC = {
        tairo: {
            sidebar: {
                navigation: {
                    items: [{
                        title: "Documentation",
                        icon: {
                            name: "ph:grid-four-duotone",
                            class: "w-5 h-5"
                        },
                        subsidebar: {
                            component: "DocSubsidebarDocumentation"
                        },
                        activePath: "/documentation"
                    }]
                }
            }
        }
    },
    MC = {
        tairo: {
            sidebar: {
                circularMenu: {
                    enabled: !1,
                    tools: []
                },
                toolbar: {
                    enabled: !0,
                    showTitle: !0,
                    showNavBurger: !1,
                    tools: []
                },
                navigation: {
                    enabled: !0,
                    startOpen: !0,
                    logo: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-600 h-10"
                        }
                    },
                    items: []
                }
            }
        }
    },
    FC = {
        tairo: {
            collapse: {
                navigation: {
                    enabled: !0,
                    header: {
                        component: ""
                    },
                    footer: {
                        component: ""
                    },
                    items: []
                },
                circularMenu: {
                    enabled: !0,
                    tools: []
                },
                toolbar: {
                    enabled: !0,
                    showTitle: !1,
                    showNavBurger: !1,
                    tools: []
                }
            }
        }
    },
    NC = {
        tairo: {
            topnav: {
                navigation: {
                    enabled: !0,
                    logo: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-500 h-10 w-10"
                        }
                    },
                    header: {
                        component: void 0
                    },
                    items: []
                },
                circularMenu: {
                    enabled: !0,
                    tools: []
                },
                toolbar: {
                    enabled: !0,
                    showTitle: !1,
                    tools: []
                },
                footer: {
                    enabled: !1,
                    logoSeparator: {
                        component: "TairoLogo",
                        props: {
                            class: "text-primary-500 h-7 w-7"
                        }
                    },
                    logo: {
                        component: "TairoLogoText",
                        props: {
                            class: "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
                        }
                    },
                    copyright: {
                        name: "",
                        to: "",
                        since: ""
                    },
                    links: []
                }
            }
        }
    },
    jC = {
        tairo: {
            title: "Tairo",
            error: {
                logo: {
                    component: "TairoLogo",
                    props: {
                        class: "text-primary-500 mx-auto h-40 p-6"
                    }
                }
            },
            panels: []
        },
        toaster: {
            duration: 6e3,
            dismissible: !1,
            theme: {
                maxToasts: 1,
                containerClass: ["fixed", "inset-0", "pointer-events-none", "p-4", "flex", "flex-col-reverse", "overflow-hidden", "z-[200]", "items-center", "gap-2", "space-y-3"],
                wrapperClass: ["pointer-events-auto", "focus:outline-none", "rounded", "outline-slate-300", "outline-offset-2", "focus:outline", "focus:outline-2", "focus-within:outline", "focus-within:outline-2"],
                transition: {
                    enterActiveClass: "transition duration-300 ease-out",
                    enterFromClass: "transform translate-y-full opacity-0",
                    enterToClass: "transform translate-y-0 opacity-100",
                    leaveActiveClass: "transition duration-200 ease-in",
                    leaveFromClass: "transform translate-y-0 opacity-100",
                    leaveToClass: "transform translate-y-full opacity-0"
                }
            }
        }
    },
    BC = {
        nui: {
            defaultShapes: {
                accordion: "rounded",
                autocompleteItem: "rounded",
                avatar: "full",
                button: "rounded",
                buttonAction: "rounded",
                buttonIcon: "rounded",
                buttonClose: "full",
                card: "rounded",
                dropdown: "rounded",
                iconBox: "rounded",
                input: "rounded",
                message: "curved",
                pagination: "rounded",
                progress: "full",
                prose: "rounded",
                tabSlider: "rounded",
                tag: "rounded"
            }
        }
    },
    HC = {},
    zC = vE(DC, IC, MC, FC, NC, jC, BC, HC);

function ut() {
    const e = tt();
    return e._appConfig || (e._appConfig = hn(zC)), e._appConfig
}
const VC = "__NUXT_COLOR_MODE__",
    UC = "nuxt-color-mode",
    Sn = window[VC],
    WC = vn(e => {
        const t = yt("color-mode", () => hn({
            preference: Sn.preference,
            value: Sn.value,
            unknown: !1,
            forced: !1
        })).value;
        Tn().afterEach(o => {
            const a = o.meta.colorMode;
            a && a !== "system" ? (t.value = a, t.forced = !0) : (a === "system" && console.warn("You cannot force the colorMode to system at the page level."), t.forced = !1, t.value = t.preference === "system" ? Sn.getColorScheme() : t.preference)
        });
        let n;

        function r() {
            n || !window.matchMedia || (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", () => {
                !t.forced && t.preference === "system" && (t.value = Sn.getColorScheme())
            }))
        }
        Ue(() => t.preference, o => {
            t.forced || (o === "system" ? (t.value = Sn.getColorScheme(), r()) : t.value = o, window.localStorage ? .setItem(UC, o))
        }, {
            immediate: !0
        }), Ue(() => t.value, (o, a) => {
            Sn.removeColorScheme(a), Sn.addColorScheme(o)
        }), t.preference === "system" && r(), e.hook("app:mounted", () => {
            t.unknown && (t.preference = Sn.preference, t.value = Sn.value, t.unknown = !1)
        }), e.provide("colorMode", t)
    });

function qC() {
    const e = {};

    function t(o, a) {
        e[o] = e[o] || [], e[o].push(a)
    }

    function n(o, a) {
        if (e[o]) {
            for (let s = 0; s < e[o].length; s++)
                if (e[o][s] === a) {
                    e[o].splice(s, 1);
                    break
                }
        }
    }

    function r(o, ...a) {
        e[o] && e[o].forEach(s => {
            s(...a)
        })
    }
    return {
        queue: e,
        on: t,
        off: n,
        emit: r
    }
}

function pr(e) {
    return fm() ? (D1(e), !0) : !1
}

function Wt(e) {
    return typeof e == "function" ? e() : y(e)
}
const _o = typeof window < "u" && typeof document < "u",
    KC = e => typeof e < "u",
    GC = e => e != null,
    JC = Object.prototype.toString,
    QC = e => JC.call(e) === "[object Object]",
    Dn = () => {},
    YC = XC();

function XC() {
    var e;
    return _o && ((e = window ? .navigator) == null ? void 0 : e.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent)
}

function ZC(e, t) {
    function n(...r) {
        return new Promise((o, a) => {
            Promise.resolve(e(() => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).catch(a)
        })
    }
    return n
}

function eP(e, t = {}) {
    let n, r, o = Dn;
    const a = i => {
        clearTimeout(i), o(), o = Dn
    };
    return i => {
        const l = Wt(e),
            c = Wt(t.maxWait);
        return n && a(n), l <= 0 || c !== void 0 && c <= 0 ? (r && (a(r), r = null), Promise.resolve(i())) : new Promise((u, p) => {
            o = t.rejectOnCancel ? p : u, c && !r && (r = setTimeout(() => {
                n && a(n), r = null, u(i())
            }, c)), n = setTimeout(() => {
                r && a(r), r = null, u(i())
            }, l)
        })
    }
}

function al(...e) {
    if (e.length !== 1) return jl(...e);
    const t = e[0];
    return typeof t == "function" ? ko(fw(() => ({
        get: t,
        set: Dn
    }))) : Z(t)
}

function tP(e, t = 200, n = {}) {
    return ZC(eP(t, n), e)
}

function A6(e, t = 200, n = {}) {
    const r = Z(e.value),
        o = tP(() => {
            r.value = e.value
        }, t, n);
    return Ue(e, () => o()), r
}

function g0(e, t = !0) {
    Dt() ? md(e) : t ? e() : Gt(e)
}

function v0(e) {
    Dt() && Fn(e)
}

function nP(e, t = !0) {
    Dt() ? vt(e) : t ? e() : Gt(e)
}

function rP(e, t = 1e3, n = {}) {
    const {
        immediate: r = !0,
        immediateCallback: o = !1
    } = n;
    let a = null;
    const s = Z(!1);

    function i() {
        a && (clearInterval(a), a = null)
    }

    function l() {
        s.value = !1, i()
    }

    function c() {
        const u = Wt(t);
        u <= 0 || (s.value = !0, o && e(), i(), a = setInterval(e, u))
    }
    if (r && _o && c(), mt(t) || typeof t == "function") {
        const u = Ue(t, () => {
            s.value && _o && c()
        });
        pr(u)
    }
    return pr(l), {
        isActive: s,
        pause: l,
        resume: c
    }
}

function oP(e, t, n = {}) {
    const {
        immediate: r = !0
    } = n, o = Z(!1);
    let a = null;

    function s() {
        a && (clearTimeout(a), a = null)
    }

    function i() {
        o.value = !1, s()
    }

    function l(...c) {
        s(), o.value = !0, a = setTimeout(() => {
            o.value = !1, a = null, e(...c)
        }, Wt(t))
    }
    return r && (o.value = !0, _o && l()), pr(i), {
        isPending: ko(o),
        start: l,
        stop: i
    }
}

function xn(e) {
    var t;
    const n = Wt(e);
    return (t = n ? .$el) != null ? t : n
}
const Nn = _o ? window : void 0,
    aP = _o ? window.navigator : void 0;

function Rr(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, r, o] = e, t = Nn) : [t, n, r, o] = e, !t) return Dn;
    Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
    const a = [],
        s = () => {
            a.forEach(u => u()), a.length = 0
        },
        i = (u, p, h, v) => (u.addEventListener(p, h, v), () => u.removeEventListener(p, h, v)),
        l = Ue(() => [xn(t), Wt(o)], ([u, p]) => {
            if (s(), !u) return;
            const h = QC(p) ? { ...p
            } : p;
            a.push(...n.flatMap(v => r.map(_ => i(u, v, _, h))))
        }, {
            immediate: !0,
            flush: "post"
        }),
        c = () => {
            l(), s()
        };
    return pr(c), c
}
let Rh = !1;

function L6(e, t, n = {}) {
    const {
        window: r = Nn,
        ignore: o = [],
        capture: a = !0,
        detectIframe: s = !1
    } = n;
    if (!r) return;
    YC && !Rh && (Rh = !0, Array.from(r.document.body.children).forEach(h => h.addEventListener("click", Dn)), r.document.documentElement.addEventListener("click", Dn));
    let i = !0;
    const l = h => o.some(v => {
            if (typeof v == "string") return Array.from(r.document.querySelectorAll(v)).some(_ => _ === h.target || h.composedPath().includes(_)); {
                const _ = xn(v);
                return _ && (h.target === _ || h.composedPath().includes(_))
            }
        }),
        u = [Rr(r, "click", h => {
            const v = xn(e);
            if (!(!v || v === h.target || h.composedPath().includes(v))) {
                if (h.detail === 0 && (i = !l(h)), !i) {
                    i = !0;
                    return
                }
                t(h)
            }
        }, {
            passive: !0,
            capture: a
        }), Rr(r, "pointerdown", h => {
            const v = xn(e);
            v && (i = !h.composedPath().includes(v) && !l(h))
        }, {
            passive: !0
        }), s && Rr(r, "blur", h => {
            setTimeout(() => {
                var v;
                const _ = xn(e);
                ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !_ ? .contains(r.document.activeElement) && t(h)
            }, 0)
        })].filter(Boolean);
    return () => u.forEach(h => h())
}

function sP(e) {
    return typeof e == "function" ? e : typeof e == "string" ? t => t.key === e : Array.isArray(e) ? t => e.includes(t.key) : () => !0
}

function Fu(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
    const {
        target: o = Nn,
        eventName: a = "keydown",
        passive: s = !1,
        dedupe: i = !1
    } = r, l = sP(t);
    return Rr(o, a, u => {
        u.repeat && Wt(i) || l(u) && n(u)
    }, s)
}

function iP() {
    const e = Z(!1);
    return Dt() && vt(() => {
        e.value = !0
    }), e
}

function tc(e) {
    const t = iP();
    return j(() => (t.value, !!e()))
}

function lP(e, t = {}) {
    const {
        immediate: n = !0,
        window: r = Nn
    } = t, o = Z(!1);
    let a = 0,
        s = null;

    function i(u) {
        if (!o.value || !r) return;
        const p = u - (a || u);
        e({
            delta: p,
            timestamp: u
        }), a = u, s = r.requestAnimationFrame(i)
    }

    function l() {
        !o.value && r && (o.value = !0, s = r.requestAnimationFrame(i))
    }

    function c() {
        o.value = !1, s != null && r && (r.cancelAnimationFrame(s), s = null)
    }
    return n && l(), pr(c), {
        isActive: ko(o),
        pause: c,
        resume: l
    }
}

function Yn(e, t = {}) {
    const {
        window: n = Nn
    } = t, r = tc(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
    let o;
    const a = Z(!1),
        s = c => {
            a.value = c.matches
        },
        i = () => {
            o && ("removeEventListener" in o ? o.removeEventListener("change", s) : o.removeListener(s))
        },
        l = en(() => {
            r.value && (i(), o = n.matchMedia(Wt(e)), "addEventListener" in o ? o.addEventListener("change", s) : o.addListener(s), a.value = o.matches)
        });
    return pr(() => {
        l(), i(), o = void 0
    }), a
}

function O6(e = {}) {
    const {
        navigator: t = aP,
        read: n = !1,
        source: r,
        copiedDuring: o = 1500,
        legacy: a = !1
    } = e, s = tc(() => t && "clipboard" in t), i = j(() => s.value || a), l = Z(""), c = Z(!1), u = oP(() => c.value = !1, o);

    function p() {
        s.value ? t.clipboard.readText().then(g => {
            l.value = g
        }) : l.value = _()
    }
    i.value && n && Rr(["copy", "cut"], p);
    async function h(g = Wt(r)) {
        i.value && g != null && (s.value ? await t.clipboard.writeText(g) : v(g), l.value = g, c.value = !0, u.start())
    }

    function v(g) {
        const P = document.createElement("textarea");
        P.value = g ? ? "", P.style.position = "absolute", P.style.opacity = "0", document.body.appendChild(P), P.select(), document.execCommand("copy"), P.remove()
    }

    function _() {
        var g, P, S;
        return (S = (P = (g = document ? .getSelection) == null ? void 0 : g.call(document)) == null ? void 0 : P.toString()) != null ? S : ""
    }
    return {
        isSupported: i,
        text: l,
        copied: c,
        copy: h
    }
}

function cP(e) {
    return JSON.parse(JSON.stringify(e))
}

function uP(e, t, n = {}) {
    const {
        window: r = Nn,
        ...o
    } = n;
    let a;
    const s = tc(() => r && "MutationObserver" in r),
        i = () => {
            a && (a.disconnect(), a = void 0)
        },
        l = Ue(() => xn(e), u => {
            i(), s.value && r && u && (a = new MutationObserver(t), a.observe(u, o))
        }, {
            immediate: !0
        }),
        c = () => {
            i(), l()
        };
    return pr(c), {
        isSupported: s,
        stop: c
    }
}

function dP(e, t, n = {}) {
    const {
        window: r = Nn,
        initialValue: o = "",
        observe: a = !1
    } = n, s = Z(o), i = j(() => {
        var c;
        return xn(t) || ((c = r ? .document) == null ? void 0 : c.documentElement)
    });

    function l() {
        var c;
        const u = Wt(e),
            p = Wt(i);
        if (p && r) {
            const h = (c = r.getComputedStyle(p).getPropertyValue(u)) == null ? void 0 : c.trim();
            s.value = h || o
        }
    }
    return a && uP(i, l, {
        attributeFilter: ["style", "class"],
        window: r
    }), Ue([i, () => Wt(e)], l, {
        immediate: !0
    }), Ue(s, c => {
        var u;
        (u = i.value) != null && u.style && i.value.style.setProperty(Wt(e), c)
    }), s
}

function R6(e, t, n = {}) {
    const {
        root: r,
        rootMargin: o = "0px",
        threshold: a = .1,
        window: s = Nn,
        immediate: i = !0
    } = n, l = tc(() => s && "IntersectionObserver" in s), c = j(() => {
        const _ = Wt(e);
        return (Array.isArray(_) ? _ : [_]).map(xn).filter(GC)
    });
    let u = Dn;
    const p = Z(i),
        h = l.value ? Ue(() => [c.value, xn(r), p.value], ([_, g]) => {
            if (u(), !p.value || !_.length) return;
            const P = new IntersectionObserver(t, {
                root: xn(g),
                rootMargin: o,
                threshold: a
            });
            _.forEach(S => S && P.observe(S)), u = () => {
                P.disconnect(), u = Dn
            }
        }, {
            immediate: i,
            flush: "post"
        }) : Dn,
        v = () => {
            u(), h(), p.value = !1
        };
    return pr(v), {
        isSupported: l,
        isActive: p,
        pause() {
            u(), p.value = !1
        },
        resume() {
            p.value = !0
        },
        stop: v
    }
}

function D6(e = {}) {
    const {
        controls: t = !1,
        interval: n = "requestAnimationFrame"
    } = e, r = Z(new Date), o = () => r.value = new Date, a = n === "requestAnimationFrame" ? lP(o, {
        immediate: !0
    }) : rP(o, n, {
        immediate: !0
    });
    return t ? {
        now: r,
        ...a
    } : r
}

function fP(e, t, n, r = {}) {
    var o, a, s;
    const {
        clone: i = !1,
        passive: l = !1,
        eventName: c,
        deep: u = !1,
        defaultValue: p,
        shouldEmit: h
    } = r, v = Dt(), _ = n || v ? .emit || ((o = v ? .$emit) == null ? void 0 : o.bind(v)) || ((s = (a = v ? .proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(v ? .proxy));
    let g = c;
    t || (t = "modelValue"), g = g || `update:${t.toString()}`;
    const P = I => i ? typeof i == "function" ? i(I) : cP(I) : I,
        S = () => KC(e[t]) ? P(e[t]) : p,
        x = I => {
            h ? h(I) && _(g, I) : _(g, I)
        };
    if (l) {
        const I = S(),
            A = Z(I);
        let N = !1;
        return Ue(() => e[t], M => {
            N || (N = !0, A.value = P(M), Gt(() => N = !1))
        }), Ue(A, M => {
            !N && (M !== e[t] || u) && x(M)
        }, {
            deep: u
        }), A
    } else return j({
        get() {
            return S()
        },
        set(I) {
            x(I)
        }
    })
}

function I6({
    window: e = Nn
} = {}) {
    if (!e) return {
        x: Z(0),
        y: Z(0)
    };
    const t = Z(e.scrollX),
        n = Z(e.scrollY);
    return Rr(e, "scroll", () => {
        t.value = e.scrollX, n.value = e.scrollY
    }, {
        capture: !1,
        passive: !0
    }), {
        x: t,
        y: n
    }
}

function pP(e, t) {
    const n = Z(0),
        r = Z(0),
        o = Z(0);
    let a;

    function s() {
        a && (clearTimeout(a), a = void 0)
    }

    function i() {
        n.value = 0, r.value = Date.now(), o.value = t ? ? 0, s(), a = setTimeout(e, o.value)
    }

    function l() {
        !r.value || n.value || (s(), n.value = Date.now())
    }

    function c() {
        n.value && (s(), o.value -= n.value - r.value, r.value = Date.now(), n.value = 0, a = setTimeout(e, o.value))
    }
    return v0(s), {
        pausedAt: n,
        startedAt: r,
        remaining: o,
        start: i,
        stop: s,
        pause: l,
        resume: c
    }
}

function hP(e) {
    const t = al(e),
        n = Z(null),
        r = j(() => t.value ? .containerId ? ? "nt-container");
    return g0(() => {
        n.value = document.getElementById(r.value), n.value || (n.value = document.createElement("div"), n.value.id = r.value, document.body.appendChild(n.value)), t.value ? .containerClass && (n.value.className = Array.isArray(t.value.containerClass) ? t.value.containerClass.join(" ") : t.value.containerClass)
    }), {
        container: n,
        containerId: r
    }
}
const _0 = Symbol.for("NinjaToasterState");

function mP(e) {
    $t(_0, e)
}

function gP() {
    const e = rt(_0);
    if (!e) throw new Error("NinjaToasterState is not provided");
    return e
}

function M6() {
    const e = gP(),
        t = Z(Date.now()),
        n = j(() => e.timer.startedAt.value + e.timer.remaining.value),
        r = j(() => t.value - n.value),
        o = j(() => {
            if (!e.duration) return 0;
            const s = 1 - Math.max(0, Math.abs(r.value)) / e.duration;
            return Math.round(s * 1e3) / 1e3
        });
    let a;
    return nP(() => {
        a = setInterval(() => {
            e.isHovered.value || (t.value = Date.now())
        }, 16)
    }), v0(() => {
        clearInterval(a), a = void 0
    }), {
        percent: o,
        endAt: n,
        closeIn: r
    }
}

function vP() {
    const e = [];
    let t;

    function n(s) {
        return e.push(s), t || (t = setTimeout(a, 100)), () => {
            r(s)
        }
    }

    function r(s) {
        const i = e.indexOf(s);
        i !== -1 && e.splice(i, 1)
    }

    function o() {
        e.length = 0, t && (clearTimeout(t), t = void 0)
    }

    function a() {
        t && (clearTimeout(t), t = void 0);
        const s = e[0];
        if (s) {
            if (!s.until()) {
                t = setTimeout(a, 100);
                return
            }
            e.shift(), s.callback(), e.length > 0 && (t = setTimeout(a, 100))
        }
    }
    return {
        add: n,
        remove: r,
        clear: o
    }
}
const _P = be({
    name: "NinjaToaster",
    props: {
        content: {
            type: [String, Number, Object, Function],
            required: !0
        },
        duration: {
            type: Number,
            default: 5e3
        },
        theme: {
            type: Object,
            default: () => ({})
        },
        dismissible: {
            type: Boolean,
            default: !0
        },
        pauseOnHover: {
            type: Boolean,
            default: !0
        },
        queues: {
            type: Map,
            default: () => new Map
        },
        events: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ["close", "click", "show"],
    setup(e, {
        emit: t
    }) {
        const n = j(() => Yl(e.theme ? ? {}, {
                containerClass: [],
                wrapperClass: [],
                containerId: "nt-container",
                maxToasts: 1 / 0,
                transition: void 0
            })),
            {
                container: r,
                containerId: o
            } = hP(n),
            a = pP(() => {
                g()
            }, e.duration),
            s = Z(!1),
            i = Z(!1),
            l = Z(),
            c = Z();
        let u;
        e.queues.has(o.value) ? u = e.queues.get(o.value) : (u = vP(), e.queues.set(o.value, u));
        const p = j(() => typeof e.content == "function" ? e.content() : e.content),
            h = () => !r.value || n.value.maxToasts <= 0 || n.value.maxToasts === 1 / 0 ? !1 : n.value.maxToasts <= r.value.childElementCount;

        function v(F) {
            if (e.pauseOnHover) {
                if (F) {
                    a.pause();
                    return
                }
                a.resume()
            }
        }

        function _() {
            a.stop(), l.value ? .()
        }

        function g() {
            _(), i.value = !1
        }

        function P() {
            if (h()) {
                l.value = u.add({
                    until: () => !h(),
                    callback: P
                });
                return
            }!r.value || !c.value || (r.value.insertAdjacentElement("afterbegin", c.value), i.value = !0, e.duration > 0 && a.start(), t("show", {
                el: c.value,
                close: g
            }))
        }

        function S() {
            s.value = !0, v(!0)
        }

        function x() {
            s.value = !1, v(!1)
        }

        function I() {
            s.value = !0, v(!0)
        }

        function A() {
            s.value = !1, v(!1)
        }

        function N(F) {
            t("click", F), e.dismissible && g()
        }

        function M(F) {
            F.target === F.currentTarget && (F.key !== "Enter" && F.key !== " " || (F.preventDefault(), N(F)))
        }

        function z(F) {
            t("close"), typeof n.value ? .transition ? .onAfterLeave == "function" && n.value ? .transition.onAfterLeave(F), typeof c.value ? .remove < "u" ? c.value ? .remove() : c.value ? .parentNode ? .removeChild(c.value)
        }
        return vt(() => {
            P(), e.events.on("clear", g), e.events.on(`clear-${o}`, g)
        }), Fn(() => {
            e.events.off("clear", g), e.events.off(`clear-${o}`, g)
        }), mP({
            timer: a,
            duration: e.duration,
            isHovered: s,
            isActive: i,
            click: N,
            close: g
        }), () => {
            const F = dd(Ie("div", {
                role: "alert",
                tabindex: 0,
                class: n.value && Array.isArray(n.value ? .wrapperClass) ? n.value.wrapperClass.join(" ") : n.value ? .wrapperClass,
                onMouseover: S,
                onMouseleave: x,
                onFocus: I,
                onBlur: A,
                onKeydown: M,
                onClick: N
            }, Ie(mi, null, p.value)), [
                [Eg, i.value]
            ]);
            return Ie(To, {
                ref: c,
                ...n.value ? .transition || {},
                onAfterLeave : z
            }, () => F)
        }
    }
});

function bP() {
    return document.createElement("div")
}

function yP(e, t, n) {
    const r = bP();
    if (r) {
        const o = Ie(t, n);
        e && e._context && (o.appContext = e._context), bu(o, r)
    }
}

function Kc(e) {
    e ? .containerClass && !Array.isArray(e.containerClass) && (e.containerClass = [e.containerClass]), e ? .wrapperClass && !Array.isArray(e.wrapperClass) && (e.wrapperClass = [e.wrapperClass])
}

function wP(e = {}) {
    const t = qC(),
        n = new Map;

    function r(i, {
        props: l,
        children: c,
        options: u
    }) {
        return o({ ...u,
            content: () => Ie(Wl(i), l, c)
        })
    }

    function o(i) {
        const l = ut() ? .toaster,
            c = tt().vueApp,
            u = typeof i == "string" || typeof i == "number" || typeof i == "function" ? {
                content: i
            } : i;
        Kc(u ? .theme), Kc(e ? .theme), Kc(l ? .theme);
        const p = Yl(u, e, l);
        return new Promise(h => {
            yP(c, _P, { ...p,
                events: t,
                queues: n,
                onShow: v => {
                    h(v), p.onShow && p.onShow(v)
                }
            })
        })
    }

    function a() {
        t.emit("clear"), n.forEach(i => {
            i.clear()
        }), n.clear()
    }

    function s(i) {
        const l = typeof i == "string" ? i : i.containerId ? ? "nt-container";
        t.emit(`clear-${l}`), n.has(l) && n.get(l) ? .clear()
    }
    return {
        show: o,
        showComponent: r,
        clearAll: a,
        clear: s
    }
}
const xP = vn(() => ({
        provide: {
            nt: wP()
        }
    })),
    kP = vn(e => {
        const t = jr().public.studio || {},
            n = Kt(),
            r = ol("previewToken", {
                sameSite: "none",
                secure: !0
            }),
            o = yt("studio-client-db", () => null);
        async function a() {
            const s = await C(() =>
                    import ("./useStudio.3819d87f.js"), ["./useStudio.3819d87f.js", "./useStudio.df2118d1.css"],
                    import.meta.url).then(c => c.useStudio),
                {
                    mountPreviewUI: i,
                    initiateIframeCommunication: l
                } = s();
            i(), l()
        }
        if (t.apiURL) {
            if (Object.prototype.hasOwnProperty.call(n.query, "preview") && !n.query.preview || !n.query.preview && !r.value) return;
            n.query.preview && (r.value = String(n.query.preview)), window.sessionStorage.setItem("previewToken", String(r.value)), e.hook("content:storage", s => {
                o.value = s
            }), e.hook("app:mounted", async () => {
                await a()
            })
        }
    }),
    EP = vn({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Tn(),
                n = jr(),
                r = new Set;
            t.beforeEach(() => {
                r.clear()
            }), e.hook("app:chunkError", ({
                error: o
            }) => {
                r.add(o)
            }), t.onError((o, a) => {
                if (r.has(o)) {
                    const i = "href" in a && a.href.startsWith("#") ? n.app.baseURL + a.href : bi(n.app.baseURL, a.fullPath);
                    SC({
                        path: i,
                        persistState: !0
                    })
                }
            })
        }
    }),
    TP = vn(async e => {
        const t = be({
            render: (n, {
                slots: r
            }) => r ? r.default() : null
        });
        e.vueApp.component("VueAxePopup", t)
    }),
    CP = vn(async e => {
        e.vueApp.directive("focus", {
            mounted(t) {
                if (t && t.tabIndex === -1) {
                    const n = t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    n && n.focus();
                    return
                }
                t.focus()
            }
        })
    }),
    PP = [PE, M5, sC, iC, lC, WC, xP, kP, EP, TP, CP],
    nc = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n
    },
    $P = {},
    SP = {
        class: "nui-placeload animate-nui-placeload"
    };

function AP(e, t) {
    return R(), Q("div", SP)
}
const b0 = nc($P, [
        ["render", AP]
    ]),
    y0 = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    w0 = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    $d = Object.freeze({ ...y0,
        ...w0
    });
Object.freeze({ ...$d,
    body: "",
    hidden: !1
});
({ ...y0
});
const x0 = Object.freeze({
        width: null,
        height: null
    }),
    k0 = Object.freeze({ ...x0,
        ...w0
    });

function LP(e, t) {
    const n = { ...e
    };
    for (const r in t) {
        const o = t[r],
            a = typeof o;
        r in x0 ? (o === null || o && (a === "string" || a === "number")) && (n[r] = o) : a === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const OP = /[\s,]+/;

function RP(e, t) {
    t.split(OP).forEach(n => {
        switch (n.trim()) {
            case "horizontal":
                e.hFlip = !0;
                break;
            case "vertical":
                e.vFlip = !0;
                break
        }
    })
}

function DP(e, t = 0) {
    const n = e.replace(/^-?[0-9.]*/, "");

    function r(o) {
        for (; o < 0;) o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(e);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== e) {
        let o = 0;
        switch (n) {
            case "%":
                o = 25;
                break;
            case "deg":
                o = 90
        }
        if (o) {
            let a = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(a) ? 0 : (a = a / o, a % 1 === 0 ? r(a) : 0)
        }
    }
    return t
}
const IP = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    MP = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

function Dh(e, t, n) {
    if (t === 1) return e;
    if (n = n || 100, typeof e == "number") return Math.ceil(e * t * n) / n;
    if (typeof e != "string") return e;
    const r = e.split(IP);
    if (r === null || !r.length) return e;
    const o = [];
    let a = r.shift(),
        s = MP.test(a);
    for (;;) {
        if (s) {
            const i = parseFloat(a);
            isNaN(i) ? o.push(a) : o.push(Math.ceil(i * t * n) / n)
        } else o.push(a);
        if (a = r.shift(), a === void 0) return o.join("");
        s = !s
    }
}
const FP = e => e === "unset" || e === "undefined" || e === "none";

function NP(e, t) {
    const n = { ...$d,
            ...e
        },
        r = { ...k0,
            ...t
        },
        o = {
            left: n.left,
            top: n.top,
            width: n.width,
            height: n.height
        };
    let a = n.body;
    [n, r].forEach(_ => {
        const g = [],
            P = _.hFlip,
            S = _.vFlip;
        let x = _.rotate;
        P ? S ? x += 2 : (g.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), g.push("scale(-1 1)"), o.top = o.left = 0) : S && (g.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), g.push("scale(1 -1)"), o.top = o.left = 0);
        let I;
        switch (x < 0 && (x -= Math.floor(x / 4) * 4), x = x % 4, x) {
            case 1:
                I = o.height / 2 + o.top, g.unshift("rotate(90 " + I.toString() + " " + I.toString() + ")");
                break;
            case 2:
                g.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
                break;
            case 3:
                I = o.width / 2 + o.left, g.unshift("rotate(-90 " + I.toString() + " " + I.toString() + ")");
                break
        }
        x % 2 === 1 && (o.left !== o.top && (I = o.left, o.left = o.top, o.top = I), o.width !== o.height && (I = o.width, o.width = o.height, o.height = I)), g.length && (a = '<g transform="' + g.join(" ") + '">' + a + "</g>")
    });
    const s = r.width,
        i = r.height,
        l = o.width,
        c = o.height;
    let u, p;
    s === null ? (p = i === null ? "1em" : i === "auto" ? c : i, u = Dh(p, l / c)) : (u = s === "auto" ? l : s, p = i === null ? Dh(u, c / l) : i === "auto" ? c : i);
    const h = {},
        v = (_, g) => {
            FP(g) || (h[_] = g.toString())
        };
    return v("width", u), v("height", p), h.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + c.toString(), {
        attributes: h,
        body: a
    }
}
const jP = /\sid="(\S+)"/g,
    BP = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let HP = 0;

function zP(e, t = BP) {
    const n = [];
    let r;
    for (; r = jP.exec(e);) n.push(r[1]);
    if (!n.length) return e;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(a => {
        const s = typeof t == "function" ? t(a) : t + (HP++).toString(),
            i = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"), "$1" + s + o + "$3")
    }), e = e.replace(new RegExp(o, "g"), ""), e
}

function VP(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t) n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}

function UP(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}

function WP(e) {
    return "data:image/svg+xml," + UP(e)
}

function qP(e) {
    return 'url("' + WP(e) + '")'
}
const Ih = { ...k0,
        inline: !1
    },
    KP = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "aria-hidden": !0,
        role: "img"
    },
    GP = {
        display: "inline-block"
    },
    Nu = {
        backgroundColor: "currentColor"
    },
    E0 = {
        backgroundColor: "transparent"
    },
    Mh = {
        Image: "var(--svg)",
        Repeat: "no-repeat",
        Size: "100% 100%"
    },
    Fh = {
        webkitMask: Nu,
        mask: Nu,
        background: E0
    };
for (const e in Fh) {
    const t = Fh[e];
    for (const n in Mh) t[e + n] = Mh[n]
}
const sl = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    sl[e + "-flip"] = t, sl[e.slice(0, 1) + "-flip"] = t, sl[e + "Flip"] = t
});

function Nh(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const JP = (e, t) => {
        const n = LP(Ih, t),
            r = { ...KP
            },
            o = t.mode || "svg",
            a = {},
            s = t.style,
            i = typeof s == "object" && !(s instanceof Array) ? s : {};
        for (let g in t) {
            const P = t[g];
            if (P !== void 0) switch (g) {
                case "icon":
                case "style":
                case "onLoad":
                case "mode":
                    break;
                case "inline":
                case "hFlip":
                case "vFlip":
                    n[g] = P === !0 || P === "true" || P === 1;
                    break;
                case "flip":
                    typeof P == "string" && RP(n, P);
                    break;
                case "color":
                    a.color = P;
                    break;
                case "rotate":
                    typeof P == "string" ? n[g] = DP(P) : typeof P == "number" && (n[g] = P);
                    break;
                case "ariaHidden":
                case "aria-hidden":
                    P !== !0 && P !== "true" && delete r["aria-hidden"];
                    break;
                default:
                    {
                        const S = sl[g];S ? (P === !0 || P === "true" || P === 1) && (n[S] = !0) : Ih[g] === void 0 && (r[g] = P)
                    }
            }
        }
        const l = NP(e, n),
            c = l.attributes;
        if (n.inline && (a.verticalAlign = "-0.125em"), o === "svg") {
            r.style = { ...a,
                ...i
            }, Object.assign(r, c);
            let g = 0,
                P = t.id;
            return typeof P == "string" && (P = P.replace(/-/g, "_")), r.innerHTML = zP(l.body, P ? () => P + "ID" + g++ : "iconifyVue"), Ie("svg", r)
        }
        const {
            body: u,
            width: p,
            height: h
        } = e, v = o === "mask" || (o === "bg" ? !1 : u.indexOf("currentColor") !== -1), _ = VP(u, { ...c,
            width: p + "",
            height: h + ""
        });
        return r.style = { ...a,
            "--svg": qP(_),
            width: Nh(c.width),
            height: Nh(c.height),
            ...GP,
            ...v ? Nu : E0,
            ...i
        }, Ie("span", r)
    },
    QP = Object.create(null),
    YP = be({
        inheritAttrs: !1,
        render() {
            const e = this.$attrs,
                t = e.icon,
                n = typeof t == "string" ? QP[t] : typeof t == "object" ? t : null;
            return n === null || typeof n != "object" || typeof n.body != "string" ? this.$slots.default ? this.$slots.default() : null : JP({ ...$d,
                ...n
            }, e)
        }
    }),
    Zs = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    rc = (e, t, n, r = "") => {
        const o = e.split(":");
        if (e.slice(0, 1) === "@") {
            if (o.length < 2 || o.length > 3) return null;
            r = o.shift().slice(1)
        }
        if (o.length > 3 || !o.length) return null;
        if (o.length > 1) {
            const i = o.pop(),
                l = o.pop(),
                c = {
                    provider: o.length > 0 ? o[0] : r,
                    prefix: l,
                    name: i
                };
            return t && !il(c) ? null : c
        }
        const a = o[0],
            s = a.split("-");
        if (s.length > 1) {
            const i = {
                provider: r,
                prefix: s.shift(),
                name: s.join("-")
            };
            return t && !il(i) ? null : i
        }
        if (n && r === "") {
            const i = {
                provider: r,
                prefix: "",
                name: a
            };
            return t && !il(i, n) ? null : i
        }
        return null
    },
    il = (e, t) => e ? !!((e.provider === "" || e.provider.match(Zs)) && (t && e.prefix === "" || e.prefix.match(Zs)) && e.name.match(Zs)) : !1,
    T0 = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    Cl = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    Sd = Object.freeze({ ...T0,
        ...Cl
    }),
    ju = Object.freeze({ ...Sd,
        body: "",
        hidden: !1
    });

function XP(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r), n
}

function jh(e, t) {
    const n = XP(e, t);
    for (const r in ju) r in Cl ? r in e && !(r in n) && (n[r] = Cl[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}

function ZP(e, t) {
    const n = e.icons,
        r = e.aliases || Object.create(null),
        o = Object.create(null);

    function a(s) {
        if (n[s]) return o[s] = [];
        if (!(s in o)) {
            o[s] = null;
            const i = r[s] && r[s].parent,
                l = i && a(i);
            l && (o[s] = [i].concat(l))
        }
        return o[s]
    }
    return (t || Object.keys(n).concat(Object.keys(r))).forEach(a), o
}

function e3(e, t, n) {
    const r = e.icons,
        o = e.aliases || Object.create(null);
    let a = {};

    function s(i) {
        a = jh(r[i] || o[i], a)
    }
    return s(t), n.forEach(s), jh(e, a)
}

function C0(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object") return n;
    e.not_found instanceof Array && e.not_found.forEach(o => {
        t(o, null), n.push(o)
    });
    const r = ZP(e);
    for (const o in r) {
        const a = r[o];
        a && (t(o, e3(e, o, a)), n.push(o))
    }
    return n
}
const t3 = {
    provider: "",
    aliases: {},
    not_found: {},
    ...T0
};

function Gc(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n]) return !1;
    return !0
}

function P0(e) {
    if (typeof e != "object" || e === null) return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Gc(e, t3)) return null;
    const n = t.icons;
    for (const o in n) {
        const a = n[o];
        if (!o.match(Zs) || typeof a.body != "string" || !Gc(a, ju)) return null
    }
    const r = t.aliases || Object.create(null);
    for (const o in r) {
        const a = r[o],
            s = a.parent;
        if (!o.match(Zs) || typeof s != "string" || !n[s] && !r[s] || !Gc(a, ju)) return null
    }
    return t
}
const Bh = Object.create(null);

function n3(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}

function Fr(e, t) {
    const n = Bh[e] || (Bh[e] = Object.create(null));
    return n[t] || (n[t] = n3(e, t))
}

function Ad(e, t) {
    return P0(t) ? C0(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }) : []
}

function r3(e, t, n) {
    try {
        if (typeof n.body == "string") return e.icons[t] = { ...n
        }, !0
    } catch {}
    return !1
}
let di = !1;

function $0(e) {
    return typeof e == "boolean" && (di = e), di
}

function o3(e) {
    const t = typeof e == "string" ? rc(e, !0, di) : e;
    if (t) {
        const n = Fr(t.provider, t.prefix),
            r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}

function a3(e, t) {
    const n = rc(e, !0, di);
    if (!n) return !1;
    const r = Fr(n.provider, n.prefix);
    return r3(r, n.name, t)
}

function s3(e, t) {
    if (typeof e != "object") return !1;
    if (typeof t != "string" && (t = e.provider || ""), di && !t && !e.prefix) {
        let o = !1;
        return P0(e) && (e.prefix = "", C0(e, (a, s) => {
            s && a3(a, s) && (o = !0)
        })), o
    }
    const n = e.prefix;
    if (!il({
            provider: t,
            prefix: n,
            name: "a"
        })) return !1;
    const r = Fr(t, n);
    return !!Ad(r, e)
}
const i3 = Object.freeze({
        width: null,
        height: null
    }),
    l3 = Object.freeze({ ...i3,
        ...Cl
    });
"" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
const Bu = Object.create(null);

function c3(e, t) {
    Bu[e] = t
}

function Hu(e) {
    return Bu[e] || Bu[""]
}

function Ld(e) {
    let t;
    if (typeof e.resources == "string") t = [e.resources];
    else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const Od = Object.create(null),
    js = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    ll = [];
for (; js.length > 0;) js.length === 1 || Math.random() > .5 ? ll.push(js.shift()) : ll.push(js.pop());
Od[""] = Ld({
    resources: ["https://api.iconify.design"].concat(ll)
});

function u3(e, t) {
    const n = Ld(t);
    return n === null ? !1 : (Od[e] = n, !0)
}

function Rd(e) {
    return Od[e]
}
const d3 = () => {
    let e;
    try {
        if (e = fetch, typeof e == "function") return e
    } catch {}
};
let Hh = d3();

function f3(e, t) {
    const n = Rd(e);
    if (!n) return 0;
    let r;
    if (!n.maxURL) r = 0;
    else {
        let o = 0;
        n.resources.forEach(s => {
            o = Math.max(o, s.length)
        });
        const a = t + ".json?icons=";
        r = n.maxURL - o - n.path.length - a.length
    }
    return r
}

function p3(e) {
    return e === 404
}
const h3 = (e, t, n) => {
    const r = [],
        o = f3(e, t),
        a = "icons";
    let s = {
            type: a,
            provider: e,
            prefix: t,
            icons: []
        },
        i = 0;
    return n.forEach((l, c) => {
        i += l.length + 1, i >= o && c > 0 && (r.push(s), s = {
            type: a,
            provider: e,
            prefix: t,
            icons: []
        }, i = l.length), s.icons.push(l)
    }), r.push(s), r
};

function m3(e) {
    if (typeof e == "string") {
        const t = Rd(e);
        if (t) return t.path
    }
    return "/"
}
const g3 = (e, t, n) => {
        if (!Hh) {
            n("abort", 424);
            return
        }
        let r = m3(t.provider);
        switch (t.type) {
            case "icons":
                {
                    const a = t.prefix,
                        i = t.icons.join(","),
                        l = new URLSearchParams({
                            icons: i
                        });r += a + ".json?" + l.toString();
                    break
                }
            case "custom":
                {
                    const a = t.uri;r += a.slice(0, 1) === "/" ? a.slice(1) : a;
                    break
                }
            default:
                n("abort", 400);
                return
        }
        let o = 503;
        Hh(e + r).then(a => {
            const s = a.status;
            if (s !== 200) {
                setTimeout(() => {
                    n(p3(s) ? "abort" : "next", s)
                });
                return
            }
            return o = 501, a.json()
        }).then(a => {
            if (typeof a != "object" || a === null) {
                setTimeout(() => {
                    a === 404 ? n("abort", a) : n("next", o)
                });
                return
            }
            setTimeout(() => {
                n("success", a)
            })
        }).catch(() => {
            n("next", o)
        })
    },
    v3 = {
        prepare: h3,
        send: g3
    };

function _3(e) {
    const t = {
            loaded: [],
            missing: [],
            pending: []
        },
        n = Object.create(null);
    e.sort((o, a) => o.provider !== a.provider ? o.provider.localeCompare(a.provider) : o.prefix !== a.prefix ? o.prefix.localeCompare(a.prefix) : o.name.localeCompare(a.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(o => {
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
        r = o;
        const a = o.provider,
            s = o.prefix,
            i = o.name,
            l = n[a] || (n[a] = Object.create(null)),
            c = l[s] || (l[s] = Fr(a, s));
        let u;
        i in c.icons ? u = t.loaded : s === "" || c.missing.has(i) ? u = t.missing : u = t.pending;
        const p = {
            provider: a,
            prefix: s,
            name: i
        };
        u.push(p)
    }), t
}

function S0(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o => o.id !== t))
    })
}

function b3(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length) return;
        let n = !1;
        const r = e.provider,
            o = e.prefix;
        t.forEach(a => {
            const s = a.icons,
                i = s.pending.length;
            s.pending = s.pending.filter(l => {
                if (l.prefix !== o) return !0;
                const c = l.name;
                if (e.icons[c]) s.loaded.push({
                    provider: r,
                    prefix: o,
                    name: c
                });
                else if (e.missing.has(c)) s.missing.push({
                    provider: r,
                    prefix: o,
                    name: c
                });
                else return n = !0, !0;
                return !1
            }), s.pending.length !== i && (n || S0([e], a.id), a.callback(s.loaded.slice(0), s.missing.slice(0), s.pending.slice(0), a.abort))
        })
    }))
}
let y3 = 0;

function w3(e, t, n) {
    const r = y3++,
        o = S0.bind(null, n, r);
    if (!t.pending.length) return o;
    const a = {
        id: r,
        icons: t,
        callback: e,
        abort: o
    };
    return n.forEach(s => {
        (s.loaderCallbacks || (s.loaderCallbacks = [])).push(a)
    }), o
}

function x3(e, t = !0, n = !1) {
    const r = [];
    return e.forEach(o => {
        const a = typeof o == "string" ? rc(o, t, n) : o;
        a && r.push(a)
    }), r
}
var k3 = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};

function E3(e, t, n, r) {
    const o = e.resources.length,
        a = e.random ? Math.floor(Math.random() * o) : e.index;
    let s;
    if (e.random) {
        let M = e.resources.slice(0);
        for (s = []; M.length > 1;) {
            const z = Math.floor(Math.random() * M.length);
            s.push(M[z]), M = M.slice(0, z).concat(M.slice(z + 1))
        }
        s = s.concat(M)
    } else s = e.resources.slice(a).concat(e.resources.slice(0, a));
    const i = Date.now();
    let l = "pending",
        c = 0,
        u, p = null,
        h = [],
        v = [];
    typeof r == "function" && v.push(r);

    function _() {
        p && (clearTimeout(p), p = null)
    }

    function g() {
        l === "pending" && (l = "aborted"), _(), h.forEach(M => {
            M.status === "pending" && (M.status = "aborted")
        }), h = []
    }

    function P(M, z) {
        z && (v = []), typeof M == "function" && v.push(M)
    }

    function S() {
        return {
            startTime: i,
            payload: t,
            status: l,
            queriesSent: c,
            queriesPending: h.length,
            subscribe: P,
            abort: g
        }
    }

    function x() {
        l = "failed", v.forEach(M => {
            M(void 0, u)
        })
    }

    function I() {
        h.forEach(M => {
            M.status === "pending" && (M.status = "aborted")
        }), h = []
    }

    function A(M, z, F) {
        const le = z !== "success";
        switch (h = h.filter(oe => oe !== M), l) {
            case "pending":
                break;
            case "failed":
                if (le || !e.dataAfterTimeout) return;
                break;
            default:
                return
        }
        if (z === "abort") {
            u = F, x();
            return
        }
        if (le) {
            u = F, h.length || (s.length ? N() : x());
            return
        }
        if (_(), I(), !e.random) {
            const oe = e.resources.indexOf(M.resource);
            oe !== -1 && oe !== e.index && (e.index = oe)
        }
        l = "completed", v.forEach(oe => {
            oe(F)
        })
    }

    function N() {
        if (l !== "pending") return;
        _();
        const M = s.shift();
        if (M === void 0) {
            if (h.length) {
                p = setTimeout(() => {
                    _(), l === "pending" && (I(), x())
                }, e.timeout);
                return
            }
            x();
            return
        }
        const z = {
            status: "pending",
            resource: M,
            callback: (F, le) => {
                A(z, F, le)
            }
        };
        h.push(z), c++, p = setTimeout(N, e.rotate), n(M, t, z.callback)
    }
    return setTimeout(N), S
}

function A0(e) {
    const t = { ...k3,
        ...e
    };
    let n = [];

    function r() {
        n = n.filter(i => i().status === "pending")
    }

    function o(i, l, c) {
        const u = E3(t, i, l, (p, h) => {
            r(), c && c(p, h)
        });
        return n.push(u), u
    }

    function a(i) {
        return n.find(l => i(l)) || null
    }
    return {
        query: o,
        find: a,
        setIndex: i => {
            t.index = i
        },
        getIndex: () => t.index,
        cleanup: r
    }
}

function zh() {}
const Jc = Object.create(null);

function T3(e) {
    if (!Jc[e]) {
        const t = Rd(e);
        if (!t) return;
        const n = A0(t),
            r = {
                config: t,
                redundancy: n
            };
        Jc[e] = r
    }
    return Jc[e]
}

function C3(e, t, n) {
    let r, o;
    if (typeof e == "string") {
        const a = Hu(e);
        if (!a) return n(void 0, 424), zh;
        o = a.send;
        const s = T3(e);
        s && (r = s.redundancy)
    } else {
        const a = Ld(e);
        if (a) {
            r = A0(a);
            const s = e.resources ? e.resources[0] : "",
                i = Hu(s);
            i && (o = i.send)
        }
    }
    return !r || !o ? (n(void 0, 424), zh) : r.query(t, o, n)().abort
}
const Vh = "iconify2",
    fi = "iconify",
    L0 = fi + "-count",
    Uh = fi + "-version",
    O0 = 36e5,
    P3 = 168;

function zu(e, t) {
    try {
        return e.getItem(t)
    } catch {}
}

function Dd(e, t, n) {
    try {
        return e.setItem(t, n), !0
    } catch {}
}

function Wh(e, t) {
    try {
        e.removeItem(t)
    } catch {}
}

function Vu(e, t) {
    return Dd(e, L0, t.toString())
}

function Uu(e) {
    return parseInt(zu(e, L0)) || 0
}
const oc = {
        local: !0,
        session: !0
    },
    R0 = {
        local: new Set,
        session: new Set
    };
let Id = !1;

function $3(e) {
    Id = e
}
let Ji = typeof window > "u" ? {} : window;

function D0(e) {
    const t = e + "Storage";
    try {
        if (Ji && Ji[t] && typeof Ji[t].length == "number") return Ji[t]
    } catch {}
    oc[e] = !1
}

function I0(e, t) {
    const n = D0(e);
    if (!n) return;
    const r = zu(n, Uh);
    if (r !== Vh) {
        if (r) {
            const i = Uu(n);
            for (let l = 0; l < i; l++) Wh(n, fi + l.toString())
        }
        Dd(n, Uh, Vh), Vu(n, 0);
        return
    }
    const o = Math.floor(Date.now() / O0) - P3,
        a = i => {
            const l = fi + i.toString(),
                c = zu(n, l);
            if (typeof c == "string") {
                try {
                    const u = JSON.parse(c);
                    if (typeof u == "object" && typeof u.cached == "number" && u.cached > o && typeof u.provider == "string" && typeof u.data == "object" && typeof u.data.prefix == "string" && t(u, i)) return !0
                } catch {}
                Wh(n, l)
            }
        };
    let s = Uu(n);
    for (let i = s - 1; i >= 0; i--) a(i) || (i === s - 1 ? (s--, Vu(n, s)) : R0[e].add(i))
}

function M0() {
    if (!Id) {
        $3(!0);
        for (const e in oc) I0(e, t => {
            const n = t.data,
                r = t.provider,
                o = n.prefix,
                a = Fr(r, o);
            if (!Ad(a, n).length) return !1;
            const s = n.lastModified || -1;
            return a.lastModifiedCached = a.lastModifiedCached ? Math.min(a.lastModifiedCached, s) : s, !0
        })
    }
}

function S3(e, t) {
    const n = e.lastModifiedCached;
    if (n && n >= t) return n === t;
    if (e.lastModifiedCached = t, n)
        for (const r in oc) I0(r, o => {
            const a = o.data;
            return o.provider !== e.provider || a.prefix !== e.prefix || a.lastModified === t
        });
    return !0
}

function A3(e, t) {
    Id || M0();

    function n(r) {
        let o;
        if (!oc[r] || !(o = D0(r))) return;
        const a = R0[r];
        let s;
        if (a.size) a.delete(s = Array.from(a).shift());
        else if (s = Uu(o), !Vu(o, s + 1)) return;
        const i = {
            cached: Math.floor(Date.now() / O0),
            provider: e.provider,
            data: t
        };
        return Dd(o, fi + s.toString(), JSON.stringify(i))
    }
    t.lastModified && !S3(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"))
}

function qh() {}

function L3(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
        e.iconsLoaderFlag = !1, b3(e)
    }))
}

function O3(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
        e.iconsQueueFlag = !1;
        const {
            provider: n,
            prefix: r
        } = e, o = e.iconsToLoad;
        delete e.iconsToLoad;
        let a;
        if (!o || !(a = Hu(n))) return;
        a.prepare(n, r, o).forEach(i => {
            C3(n, i, l => {
                if (typeof l != "object") i.icons.forEach(c => {
                    e.missing.add(c)
                });
                else try {
                    const c = Ad(e, l);
                    if (!c.length) return;
                    const u = e.pendingIcons;
                    u && c.forEach(p => {
                        u.delete(p)
                    }), A3(e, l)
                } catch (c) {
                    console.error(c)
                }
                L3(e)
            })
        })
    }))
}
const R3 = (e, t) => {
        const n = x3(e, !0, $0()),
            r = _3(n);
        if (!r.pending.length) {
            let l = !0;
            return t && setTimeout(() => {
                l && t(r.loaded, r.missing, r.pending, qh)
            }), () => {
                l = !1
            }
        }
        const o = Object.create(null),
            a = [];
        let s, i;
        return r.pending.forEach(l => {
            const {
                provider: c,
                prefix: u
            } = l;
            if (u === i && c === s) return;
            s = c, i = u, a.push(Fr(c, u));
            const p = o[c] || (o[c] = Object.create(null));
            p[u] || (p[u] = [])
        }), r.pending.forEach(l => {
            const {
                provider: c,
                prefix: u,
                name: p
            } = l, h = Fr(c, u), v = h.pendingIcons || (h.pendingIcons = new Set);
            v.has(p) || (v.add(p), o[c][u].push(p))
        }), a.forEach(l => {
            const {
                provider: c,
                prefix: u
            } = l;
            o[c][u].length && O3(l, o[c][u])
        }), t ? w3(t, r, a) : qh
    },
    D3 = e => new Promise((t, n) => {
        const r = typeof e == "string" ? rc(e, !0) : e;
        if (!r) {
            n(e);
            return
        }
        R3([r || e], o => {
            if (o.length && r) {
                const a = o3(r);
                if (a) {
                    t({ ...Sd,
                        ...a
                    });
                    return
                }
            }
            n(e)
        })
    });
({ ...l3
});
const Kh = {
        backgroundColor: "currentColor"
    },
    I3 = {
        backgroundColor: "transparent"
    },
    Gh = {
        Image: "var(--svg)",
        Repeat: "no-repeat",
        Size: "100% 100%"
    },
    Jh = {
        webkitMask: Kh,
        mask: Kh,
        background: I3
    };
for (const e in Jh) {
    const t = Jh[e];
    for (const n in Gh) t[e + n] = Gh[n]
}
const Qc = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    Qc[e + "-flip"] = t, Qc[e.slice(0, 1) + "-flip"] = t, Qc[e + "Flip"] = t
});
$0(!0);
c3("", v3);
if (typeof document < "u" && typeof window < "u") {
    M0();
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !s3(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        })
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = t[n];
                    if (typeof o != "object" || !o || o.resources === void 0) continue;
                    u3(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}({ ...Sd
});
const M3 = be({
    __name: "Icon",
    props: {
        name: {
            type: String,
            required: !0
        },
        size: {
            type: String,
            default: ""
        }
    },
    async setup(e) {
        let t, n;
        const r = e,
            o = tt(),
            a = ut(),
            s = yt("icons", () => ({})),
            i = Z(!1),
            l = j(() => ((a.nuxtIcon ? .aliases || {})[r.name] || r.name).replace(/^i-/, "")),
            c = j(() => s.value ? .[l.value]),
            u = j(() => o.vueApp.component(l.value)),
            p = j(() => {
                if (!r.size && typeof a.nuxtIcon ? .size == "boolean" && !a.nuxtIcon ? .size) return;
                const _ = r.size || a.nuxtIcon ? .size || "1em";
                return String(Number(_)) === _ ? `${_}px` : _
            }),
            h = j(() => a ? .nuxtIcon ? .class ? ? "icon");
        async function v() {
            u.value || s.value ? .[l.value] || (i.value = !0, s.value[l.value] = await D3(l.value).catch(() => {}), i.value = !1)
        }
        return Ue(() => l.value, v), !u.value && ([t, n] = qw(() => v()), t = await t, n()), (_, g) => i.value ? (R(), Q("span", {
            key: 0,
            class: K(h.value),
            style: co({
                width: p.value,
                height: p.value
            })
        }, null, 6)) : c.value ? (R(), me(y(YP), {
            key: 1,
            icon: c.value,
            class: K(h.value),
            width: p.value,
            height: p.value
        }, null, 8, ["icon", "class", "width", "height"])) : u.value ? (R(), me(dt(u.value), {
            key: 2,
            class: K(h.value),
            width: p.value,
            height: p.value
        }, null, 8, ["class", "width", "height"])) : (R(), Q("span", {
            key: 3,
            class: K(h.value),
            style: co({
                fontSize: p.value,
                lineHeight: p.value,
                width: p.value,
                height: p.value
            })
        }, [Fe(_.$slots, "default", {}, () => [et(it(e.name), 1)], !0)], 6))
    }
});
const mr = nc(M3, [
        ["__scopeId", "data-v-26e5b7b0"]
    ]),
    F3 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mr
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let N3 = 0;

function j3(e) {
    return j(() => (typeof e == "function" ? e() : mt(e) ? e.value : e) ? ? `ninja-input-${++N3}`)
}
const B3 = ["for"],
    H3 = ["id", "type", "placeholder"],
    z3 = ["for"],
    V3 = {
        key: 1,
        class: "nui-input-placeload"
    },
    U3 = be({
        inheritAttrs: !1,
        __name: "BaseInput",
        props: {
            modelValue: {
                default: void 0
            },
            modelModifiers: {
                default: () => ({})
            },
            id: {
                default: void 0
            },
            type: {
                default: "text"
            },
            shape: {
                default: void 0
            },
            label: {
                default: void 0
            },
            labelFloat: {
                type: Boolean
            },
            placeholder: {
                default: void 0
            },
            icon: {
                default: void 0
            },
            colorFocus: {
                type: Boolean
            },
            loading: {
                type: Boolean
            },
            error: {
                type: [String, Boolean],
                default: !1
            },
            size: {
                default: "md"
            },
            contrast: {
                default: "default"
            },
            classes: {
                default: () => ({})
            }
        },
        emits: ["update:modelValue"],
        setup(e, {
            expose: t,
            emit: n
        }) {
            const r = e,
                o = ut(),
                a = j(() => r.shape ? ? o.nui.defaultShapes ? .input),
                s = {
                    straight: "",
                    rounded: "nui-input-rounded",
                    smooth: "nui-input-smooth",
                    curved: "nui-input-curved",
                    full: "nui-input-full"
                },
                i = {
                    sm: "nui-input-sm",
                    md: "nui-input-md",
                    lg: "nui-input-lg"
                },
                l = {
                    default: "nui-input-default",
                    "default-contrast": "nui-input-default-contrast",
                    muted: "nui-input-muted",
                    "muted-contrast": "nui-input-muted-contrast"
                };

            function c(_) {
                const g = Number.parseFloat(_);
                return Number.isNaN(g) ? _ : g
            }
            const u = fP(r, "modelValue", (_, g) => {
                    r.modelModifiers.number ? n("update:modelValue", c(g)) : r.modelModifiers.trim ? n("update:modelValue", typeof g == "string" ? g.trim() : g) : n("update:modelValue", g)
                }, {
                    passive: !0
                }),
                p = Z();
            t({
                el: p
            });
            const h = j3(() => r.id),
                v = j(() => {
                    if (!r.loading) return r.labelFloat ? r.label : r.placeholder
                });
            return (_, g) => {
                const P = b0,
                    S = mr;
                return R(), Q("div", {
                    class: K(["nui-input-wrapper", [l[r.contrast], i[r.size], y(a) && s[y(a)], r.error && !r.loading && "nui-input-error", r.loading && "nui-input-loading", r.labelFloat && "nui-input-label-float", r.icon && "nui-has-icon", r.colorFocus && "nui-input-focus", r.classes ? .wrapper]])
                }, ["label" in _.$slots && !r.labelFloat || r.label && !r.labelFloat ? (R(), Q("label", {
                    key: 0,
                    class: K(["nui-input-label", r.classes.label]),
                    for: y(h)
                }, [Fe(_.$slots, "label", {}, () => [et(it(r.label), 1)])], 10, B3)) : Te("", !0), B("div", {
                    class: K(["nui-input-outer", r.classes ? .outer])
                }, [B("div", null, [dd(B("input", tn({
                    id: y(h),
                    ref_key: "inputRef",
                    ref: p,
                    "onUpdate:modelValue": g[0] || (g[0] = x => mt(u) ? u.value = x : null),
                    type: r.type
                }, _.$attrs, {
                    class: ["nui-input", r.classes.input],
                    placeholder: y(v)
                }), null, 16, H3), [
                    [xg, y(u)]
                ]), "label" in _.$slots && r.labelFloat || r.label && r.labelFloat ? (R(), Q("label", {
                    key: 0,
                    class: K(["nui-label-float", r.classes.label]),
                    for: y(h)
                }, [Fe(_.$slots, "label", {}, () => [et(it(r.label), 1)])], 10, z3)) : Te("", !0), r.loading ? (R(), Q("div", V3, [te(P, {
                    class: "nui-placeload"
                })])) : Te("", !0), r.icon ? (R(), Q("div", {
                    key: 2,
                    class: K(["nui-input-icon", r.classes.icon])
                }, [Fe(_.$slots, "icon", {}, () => [te(S, {
                    name: r.icon,
                    class: "nui-input-icon-inner"
                }, null, 8, ["name"])])], 2)) : Te("", !0), Fe(_.$slots, "action")]), r.error && typeof r.error == "string" ? (R(), Q("span", {
                    key: 0,
                    class: K([r.classes ? .error, "nui-input-error-text"])
                }, it(r.error), 3)) : Te("", !0)], 2)], 2)
            }
        }
    });

function Qh(e, t, n) {
    const r = al(e),
        o = al(n),
        a = al(t);
    return j(() => {
        const s = y(r),
            i = y(a);
        if (!s) return "";
        if (!i) return cp(s);
        const l = new RegExp(i, "gi");
        return s.replace(l, c => `<mark class="${o.value}">${cp(c)}</mark>`)
    })
}
const W3 = {
        class: "flex grow flex-col"
    },
    q3 = ["innerHTML"],
    K3 = ["innerHTML"],
    G3 = {
        key: 0,
        class: "shrink-0"
    },
    J3 = ["src"],
    Q3 = be({
        __name: "DemoAppSearchResult",
        props: {
            to: {},
            title: {},
            subtitle: {},
            icon: {},
            search: {}
        },
        setup(e) {
            const t = e,
                n = Qh(() => t.title, () => t.search, "nui-text-800 group-focus:text-primary-500 underline decoration-muted-500/40 group-focus:decoration-primary-500/40 group-hover:decoration-primary-500/40 group-hover:text-primary-500 dark:group-focus:text-primary-400 dark:group-hover:text-primary-400 bg-transparent"),
                r = Qh(() => t.subtitle, () => t.search, "nui-text-500 bg-transparent underline decoration-muted-500/30");
            return (o, a) => {
                const s = hr;
                return R(), me(s, {
                    class: "nui-focus hover:bg-muted-50 focus:bg-muted-50 dark:hover:bg-muted-900 dark:focus:bg-muted-900 group flex items-center rounded p-3",
                    to: t.to
                }, {
                    default: ye(() => [B("div", W3, [t.title ? (R(), Q("span", {
                        key: 0,
                        class: "nui-text-600 font-heading group-hover:text-primary-500 group-focus:text-primary-500 dark:group-hover:text-primary-400 dark:group-focus:text-primary-400 text-sm",
                        innerHTML: y(n)
                    }, null, 8, q3)) : Te("", !0), t.subtitle ? (R(), Q("span", {
                        key: 1,
                        class: "nui-text-400 line-clamp-1 text-sm",
                        innerHTML: y(r)
                    }, null, 8, K3)) : Te("", !0)]), t.icon ? (R(), Q("div", G3, [B("img", {
                        src: t.icon,
                        class: "h-8 w-8"
                    }, null, 8, J3)])) : Te("", !0)]),
                    _: 1
                }, 8, ["to"])
            }
        }
    }),
    Y3 = be({
        props: {
            as: {
                type: String,
                default: "div"
            },
            nextKeys: {
                type: [Array, String],
                default: "PageDown"
            },
            prevKeys: {
                type: [Array, String],
                default: "PageUp"
            },
            prevent: {
                type: Boolean,
                default: !0
            }
        },
        setup(e, {
            slots: t
        }) {
            const n = Z(),
                r = new Map;
            let o = [],
                a = null,
                s = 0;

            function i() {
                for (const c of o) c.node ? .removeEventListener("focus", c.focusListener), c.node ? .removeEventListener("focusout", c.focusOutListener);
                o = []
            }

            function l() {
                if (n.value) {
                    const c = document.createTreeWalker(n.value, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(p) {
                            return p.disabled || !p.isConnected ? NodeFilter.FILTER_SKIP : p.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                    i(), r.clear();
                    let u = 0;
                    for (; c.nextNode();) {
                        const p = c.currentNode,
                            h = u;
                        r.set(u, p);
                        const v = () => {
                                a = h
                            },
                            _ = () => {
                                a = null
                            };
                        p.addEventListener("focus", v), p.addEventListener("focusout", _), o.push({
                            focusListener: v,
                            focusOutListener: _,
                            node: p
                        }), s = u, u += 1
                    }
                }
            }
            return Ul(l), vt(l), Fn(i), Fu(e.nextKeys, c => {
                a !== null && (e.prevent && c.preventDefault(), a + 1 <= s ? r.get(a + 1) ? .focus() : r.get(0) ? .focus())
            }), Fu(e.prevKeys, c => {
                a !== null && (e.prevent && c.preventDefault(), a > 0 ? r.get(a - 1) ? .focus() : r.get(s) ? .focus())
            }), () => Ie(e.as, {
                ref: n
            }, t ? .default ? .())
        }
    }),
    Md = be({
        __name: "BaseText",
        props: {
            size: {
                default: "md"
            },
            weight: {
                default: "normal"
            },
            lead: {
                default: "normal"
            }
        },
        setup(e) {
            const t = e,
                n = {
                    xs: "nui-content-xs",
                    sm: "nui-content-sm",
                    md: "nui-content-md",
                    lg: "nui-content-lg",
                    xl: "nui-content-xl",
                    "2xl": "nui-content-2xl",
                    "3xl": "nui-content-3xl",
                    "4xl": "nui-content-4xl",
                    "5xl": "nui-content-5xl",
                    "6xl": "nui-content-6xl",
                    "7xl": "nui-content-7xl",
                    "8xl": "nui-content-8xl",
                    "9xl": "nui-content-9xl"
                },
                r = {
                    light: "nui-weight-light",
                    normal: "nui-weight-normal",
                    medium: "nui-weight-medium",
                    semibold: "nui-weight-semibold",
                    bold: "nui-weight-bold",
                    extrabold: "nui-weight-extrabold"
                },
                o = {
                    none: "nui-lead-none",
                    tight: "nui-lead-tight",
                    snug: "nui-lead-snug",
                    normal: "nui-lead-normal",
                    relaxed: "nui-lead-relaxed",
                    loose: "nui-lead-loose"
                },
                a = j(() => ["nui-text", n[t.size], r[t.weight], o[t.lead]]);
            return (s, i) => (R(), Q("p", {
                class: K(y(a))
            }, [Fe(s.$slots, "default")], 2))
        }
    }),
    X3 = {},
    Z3 = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        class: "shrink-0",
        viewBox: "0 0 1524.6 500"
    },
    e4 = hx('<defs><path id="a" d="M180.5 391.1c-53-2.4-77.4-18-77.4-74.2V191.3h79.5V88.2h-79.5V1.7H0V321c0 119.2 69.5 168.6 180.5 168.8h2.1v-98.7h-2.1z"></path></defs><use xlink:href="#a" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="b"><use xlink:href="#a" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M0 1.7h182.6v488.1H0z" clip-path="url(#b)"></path><defs><path id="c" d="M409.2 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8s48.3-107.8 107.8-107.8m206.7-93h-98.5v43C486.2 98.3 443.2 79.6 394 79.6c-104.7 0-197.2 90.6-197.2 210.2 0 118.8 92.5 209.4 197.2 209.4 49.2 0 92.2-18.8 123.5-51.6v43H616V88.2z"></path></defs><use xlink:href="#c" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="d"><use xlink:href="#c" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M196.8 79.6H616v419.7H196.8z" clip-path="url(#d)"></path><defs><path id="e" d="M674.2 88.2h103.2v402.5H674.2z"></path></defs><use xlink:href="#e" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="f"><use xlink:href="#e" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M674.2 88.2h103.2v402.5H674.2z" clip-path="url(#f)"></path><defs><path id="g" d="M1047.4 80.4C913.8 64 834.8 143.7 834.8 257.8v232.9H938V257.8c0-57 43.8-92.2 109.4-80.5V80.4z"></path></defs><use xlink:href="#g" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="h"><use xlink:href="#g" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M834.8 63.9h212.6v426.7H834.8z" clip-path="url(#h)"></path><defs><path id="i" d="M1270.4 181.2c59.6 0 107.8 48.3 107.8 107.8 0 59.6-48.3 107.8-107.8 107.8-59.6 0-107.8-48.3-107.8-107.8-.1-59.5 48.2-107.8 107.8-107.8m0-103.2c-116.5 0-211 94.5-211 211s94.5 211 211 211 211-94.5 211-211c0-25.2-4.4-49.5-12.6-71.9-5.2-14.4-16.9-24.2-32-26.9-45.1-7.9-82-39.7-97.1-81.9-5.2-14.5-16.8-24.3-31.9-27-12.1-2.1-24.6-3.3-37.4-3.3z"></path></defs><use xlink:href="#i" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="j"><use xlink:href="#i" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1059.4 78h422v422h-422z" clip-path="url(#j)"></path><defs><path id="k" d="M1458.8 0c36.3 0 65.8 29.5 65.8 65.8s-29.5 65.8-65.8 65.8-65.8-29.5-65.8-65.8S1422.4 0 1458.8 0"></path></defs><use xlink:href="#k" fill="currentColor" fill-rule="evenodd" class="overflow-visible" clip-rule="evenodd"></use><clipPath id="l"><use xlink:href="#k" class="overflow-visible"></use></clipPath><path fill="currentColor" d="M1393 0h131.6v131.6H1393z" clip-path="url(#l)"></path>', 24),
    t4 = [e4];

function n4(e, t) {
    return R(), Q("svg", Z3, t4)
}
const F0 = nc(X3, [
        ["render", n4]
    ]),
    r4 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: F0
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function En(e, t, ...n) {
    if (e in t) {
        let o = t[e];
        return typeof o == "function" ? o(...n) : o
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, En), r
}
var Pl = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Pl || {}),
    rr = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(rr || {});

function jn({
    visible: e = !0,
    features: t = 0,
    ourProps: n,
    theirProps: r,
    ...o
}) {
    var a;
    let s = j0(r, n),
        i = Object.assign(o, {
            props: s
        });
    if (e || t & 2 && s.static) return Yc(i);
    if (t & 1) {
        let l = (a = s.unmount) == null || a ? 0 : 1;
        return En(l, {
            [0]() {
                return null
            },
            [1]() {
                return Yc({ ...o,
                    props: { ...s,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }
                })
            }
        })
    }
    return Yc(i)
}

function Yc({
    props: e,
    attrs: t,
    slots: n,
    slot: r,
    name: o
}) {
    var a, s;
    let {
        as: i,
        ...l
    } = B0(e, ["unmount", "static"]), c = (a = n.default) == null ? void 0 : a.call(n, r), u = {};
    if (r) {
        let p = !1,
            h = [];
        for (let [v, _] of Object.entries(r)) typeof _ == "boolean" && (p = !0), _ === !0 && h.push(v);
        p && (u["data-headlessui-state"] = h.join(" "))
    }
    if (i === "template") {
        if (c = N0(c ? ? []), Object.keys(l).length > 0 || Object.keys(t).length > 0) {
            let [p, ...h] = c ? ? [];
            if (!o4(p) || h.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t)).map(g => g.trim()).filter((g, P, S) => S.indexOf(g) === P).sort((g, P) => g.localeCompare(P)).map(g => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(g => `  - ${g}`).join(`
`)].join(`
`));
            let v = j0((s = p.props) != null ? s : {}, l),
                _ = kn(p, v);
            for (let g in v) g.startsWith("on") && (_.props || (_.props = {}), _.props[g] = v[g]);
            return _
        }
        return Array.isArray(c) && c.length === 1 ? c[0] : c
    }
    return Ie(i, Object.assign({}, l, u), {
        default: () => c
    })
}

function N0(e) {
    return e.flatMap(t => t.type === Le ? N0(t.children) : [t])
}

function j0(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let o in r) o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []), n[o].push(r[o])) : t[o] = r[o];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](o, ...a) {
            let s = n[r];
            for (let i of s) {
                if (o instanceof Event && o.defaultPrevented) return;
                i(o, ...a)
            }
        }
    });
    return t
}

function F6(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function B0(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}

function o4(e) {
    return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function"
}
let a4 = 0;

function s4() {
    return ++a4
}

function Fd() {
    return s4()
}
var H0 = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(H0 || {});

function wt(e) {
    var t;
    return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value
}
let z0 = Symbol("Context");
var Xt = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Xt || {});

function i4() {
    return Nd() !== null
}

function Nd() {
    return rt(z0, null)
}

function l4(e) {
    $t(z0, e)
}
var c4 = Object.defineProperty,
    u4 = (e, t, n) => t in e ? c4(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Yh = (e, t, n) => (u4(e, typeof t != "symbol" ? t + "" : t, n), n);
class d4 {
    constructor() {
        Yh(this, "current", this.detect()), Yh(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.currentId = 0, this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
}
let wi = new d4;

function Br(e) {
    if (wi.isServer) return null;
    if (e instanceof Node) return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = wt(e);
        if (t) return t.ownerDocument
    }
    return document
}
let Wu = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var nr = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(nr || {}),
    V0 = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(V0 || {}),
    f4 = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(f4 || {});

function U0(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Wu)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var W0 = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(W0 || {});

function q0(e, t = 0) {
    var n;
    return e === ((n = Br(e)) == null ? void 0 : n.body) ? !1 : En(t, {
        [0]() {
            return e.matches(Wu)
        },
        [1]() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(Wu)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}

function N6(e) {
    let t = Br(e);
    Gt(() => {
        t && !q0(t.activeElement, 0) && lr(e)
    })
}
var p4 = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(p4 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function lr(e) {
    e ? .focus({
        preventScroll: !0
    })
}
let h4 = ["textarea", "input"].join(",");

function m4(e) {
    var t, n;
    return (n = (t = e ? .matches) == null ? void 0 : t.call(e, h4)) != null ? n : !1
}

function g4(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let o = t(n),
            a = t(r);
        if (o === null || a === null) return 0;
        let s = o.compareDocumentPosition(a);
        return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function j6(e, t) {
    return ei(U0(), t, {
        relativeTo: e
    })
}

function ei(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: o = []
} = {}) {
    var a;
    let s = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e ? .ownerDocument) != null ? a : document,
        i = Array.isArray(e) ? n ? g4(e) : e : U0(e);
    o.length > 0 && i.length > 1 && (i = i.filter(_ => !o.includes(_))), r = r ? ? s.activeElement;
    let l = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        c = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
            if (t & 8) return i.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = t & 32 ? {
            preventScroll: !0
        } : {},
        p = 0,
        h = i.length,
        v;
    do {
        if (p >= h || p + h <= 0) return 0;
        let _ = c + p;
        if (t & 16) _ = (_ + h) % h;
        else {
            if (_ < 0) return 3;
            if (_ >= h) return 1
        }
        v = i[_], v ? .focus(u), p += l
    } while (v !== s.activeElement);
    return t & 6 && m4(v) && v.select(), 2
}

function Qi(e, t, n) {
    wi.isServer || en(r => {
        document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n))
    })
}

function K0(e, t, n) {
    wi.isServer || en(r => {
        window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n))
    })
}

function v4(e, t, n = j(() => !0)) {
    function r(a, s) {
        if (!n.value || a.defaultPrevented) return;
        let i = s(a);
        if (i === null || !i.getRootNode().contains(i)) return;
        let l = function c(u) {
            return typeof u == "function" ? c(u()) : Array.isArray(u) || u instanceof Set ? u : [u]
        }(e);
        for (let c of l) {
            if (c === null) continue;
            let u = c instanceof HTMLElement ? c : wt(c);
            if (u != null && u.contains(i) || a.composed && a.composedPath().includes(u)) return
        }
        return !q0(i, W0.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i)
    }
    let o = Z(null);
    Qi("pointerdown", a => {
        var s, i;
        n.value && (o.value = ((i = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : i[0]) || a.target)
    }, !0), Qi("mousedown", a => {
        var s, i;
        n.value && (o.value = ((i = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : i[0]) || a.target)
    }, !0), Qi("click", a => {
        o.value && (r(a, () => o.value), o.value = null)
    }, !0), Qi("touchend", a => r(a, () => a.target instanceof HTMLElement ? a.target : null), !0), K0("blur", a => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}
var $l = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))($l || {});
let qu = be({
    name: "Hidden",
    props: {
        as: {
            type: [Object, String],
            default: "div"
        },
        features: {
            type: Number,
            default: 1
        }
    },
    setup(e, {
        slots: t,
        attrs: n
    }) {
        return () => {
            let {
                features: r,
                ...o
            } = e, a = {
                "aria-hidden": (r & 2) === 2 ? !0 : void 0,
                style: {
                    position: "fixed",
                    top: 1,
                    left: 1,
                    width: 1,
                    height: 0,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    borderWidth: "0",
                    ...(r & 4) === 4 && (r & 2) !== 2 && {
                        display: "none"
                    }
                }
            };
            return jn({
                ourProps: a,
                theirProps: o,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden"
            })
        }
    }
});

function G0() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function _4() {
    return /Android/gi.test(window.navigator.userAgent)
}

function B6() {
    return G0() || _4()
}

function jd(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function xi() {
    let e = [],
        t = {
            addEventListener(n, r, o, a) {
                return n.addEventListener(r, o, a), t.add(() => n.removeEventListener(r, o, a))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                t.requestAnimationFrame(() => {
                    t.requestAnimationFrame(...n)
                })
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return jd(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, o) {
                let a = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: o
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: a
                    })
                })
            },
            group(n) {
                let r = xi();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let o of e.splice(r, 1)) o()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}
var Ws = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ws || {});

function b4() {
    let e = Z(0);
    return K0("keydown", t => {
        t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0)
    }), e
}

function J0(e, t, n, r) {
    wi.isServer || en(o => {
        e = e ? ? window, e.addEventListener(t, n, r), o(() => e.removeEventListener(t, n, r))
    })
}

function y4(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function Q0(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.value) {
        let r = wt(n);
        r instanceof HTMLElement && t.add(r)
    }
    return t
}
var Y0 = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Y0 || {});
let Bs = Object.assign(be({
        name: "FocusTrap",
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            initialFocus: {
                type: Object,
                default: null
            },
            features: {
                type: Number,
                default: 30
            },
            containers: {
                type: [Object, Function],
                default: Z(new Set)
            }
        },
        inheritAttrs: !1,
        setup(e, {
            attrs: t,
            slots: n,
            expose: r
        }) {
            let o = Z(null);
            r({
                el: o,
                $el: o
            });
            let a = j(() => Br(o)),
                s = Z(!1);
            vt(() => s.value = !0), Rt(() => s.value = !1), x4({
                ownerDocument: a
            }, j(() => s.value && !!(e.features & 16)));
            let i = k4({
                ownerDocument: a,
                container: o,
                initialFocus: j(() => e.initialFocus)
            }, j(() => s.value && !!(e.features & 2)));
            E4({
                ownerDocument: a,
                container: o,
                containers: e.containers,
                previousActiveElement: i
            }, j(() => s.value && !!(e.features & 8)));
            let l = b4();

            function c(v) {
                let _ = wt(o);
                _ && (g => g())(() => {
                    En(l.value, {
                        [Ws.Forwards]: () => {
                            ei(_, nr.First, {
                                skipElements: [v.relatedTarget]
                            })
                        },
                        [Ws.Backwards]: () => {
                            ei(_, nr.Last, {
                                skipElements: [v.relatedTarget]
                            })
                        }
                    })
                })
            }
            let u = Z(!1);

            function p(v) {
                v.key === "Tab" && (u.value = !0, requestAnimationFrame(() => {
                    u.value = !1
                }))
            }

            function h(v) {
                if (!s.value) return;
                let _ = Q0(e.containers);
                wt(o) instanceof HTMLElement && _.add(wt(o));
                let g = v.relatedTarget;
                g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (X0(_, g) || (u.value ? ei(wt(o), En(l.value, {
                    [Ws.Forwards]: () => nr.Next,
                    [Ws.Backwards]: () => nr.Previous
                }) | nr.WrapAround, {
                    relativeTo: v.target
                }) : v.target instanceof HTMLElement && lr(v.target)))
            }
            return () => {
                let v = {},
                    _ = {
                        ref: o,
                        onKeydown: p,
                        onFocusout: h
                    },
                    {
                        features: g,
                        initialFocus: P,
                        containers: S,
                        ...x
                    } = e;
                return Ie(Le, [!!(g & 4) && Ie(qu, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: c,
                    features: $l.Focusable
                }), jn({
                    ourProps: _,
                    theirProps: { ...t,
                        ...x
                    },
                    slot: v,
                    attrs: t,
                    slots: n,
                    name: "FocusTrap"
                }), !!(g & 4) && Ie(qu, {
                    as: "button",
                    type: "button",
                    "data-headlessui-focus-guard": !0,
                    onFocus: c,
                    features: $l.Focusable
                })])
            }
        }
    }), {
        features: Y0
    }),
    Pr = [];
y4(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && Pr[0] !== t.target && (Pr.unshift(t.target), Pr = Pr.filter(n => n != null && n.isConnected), Pr.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function w4(e) {
    let t = Z(Pr.slice());
    return Ue([e], ([n], [r]) => {
        r === !0 && n === !1 ? jd(() => {
            t.value.splice(0)
        }) : r === !1 && n === !0 && (t.value = Pr.slice())
    }, {
        flush: "post"
    }), () => {
        var n;
        return (n = t.value.find(r => r != null && r.isConnected)) != null ? n : null
    }
}

function x4({
    ownerDocument: e
}, t) {
    let n = w4(t);
    vt(() => {
        en(() => {
            var r, o;
            t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((o = e.value) == null ? void 0 : o.body) && lr(n())
        }, {
            flush: "post"
        })
    }), Rt(() => {
        t.value && lr(n())
    })
}

function k4({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let o = Z(null),
        a = Z(!1);
    return vt(() => a.value = !0), Rt(() => a.value = !1), vt(() => {
        Ue([t, n, r], (s, i) => {
            if (s.every((c, u) => i ? .[u] === c) || !r.value) return;
            let l = wt(t);
            l && jd(() => {
                var c, u;
                if (!a.value) return;
                let p = wt(n),
                    h = (c = e.value) == null ? void 0 : c.activeElement;
                if (p) {
                    if (p === h) {
                        o.value = h;
                        return
                    }
                } else if (l.contains(h)) {
                    o.value = h;
                    return
                }
                p ? lr(p) : ei(l, nr.First | nr.NoScroll) === V0.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (u = e.value) == null ? void 0 : u.activeElement
            })
        }, {
            immediate: !0,
            flush: "post"
        })
    }), o
}

function E4({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, o) {
    var a;
    J0((a = e.value) == null ? void 0 : a.defaultView, "focus", s => {
        if (!o.value) return;
        let i = Q0(n);
        wt(t) instanceof HTMLElement && i.add(wt(t));
        let l = r.value;
        if (!l) return;
        let c = s.target;
        c && c instanceof HTMLElement ? X0(i, c) ? (r.value = c, lr(c)) : (s.preventDefault(), s.stopPropagation(), lr(l)) : lr(r.value)
    }, !0)
}

function X0(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let Xc = new Map,
    Hs = new Map;

function Xh(e, t = Z(!0)) {
    en(n => {
        var r;
        if (!t.value) return;
        let o = wt(e);
        if (!o) return;
        n(function() {
            var s;
            if (!o) return;
            let i = (s = Hs.get(o)) != null ? s : 1;
            if (i === 1 ? Hs.delete(o) : Hs.set(o, i - 1), i !== 1) return;
            let l = Xc.get(o);
            l && (l["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", l["aria-hidden"]), o.inert = l.inert, Xc.delete(o))
        });
        let a = (r = Hs.get(o)) != null ? r : 0;
        Hs.set(o, a + 1), a === 0 && (Xc.set(o, {
            "aria-hidden": o.getAttribute("aria-hidden"),
            inert: o.inert
        }), o.setAttribute("aria-hidden", "true"), o.inert = !0)
    })
}
let Z0 = Symbol("ForcePortalRootContext");

function T4() {
    return rt(Z0, !1)
}
let Zh = be({
    name: "ForcePortalRoot",
    props: {
        as: {
            type: [Object, String],
            default: "template"
        },
        force: {
            type: Boolean,
            default: !1
        }
    },
    setup(e, {
        slots: t,
        attrs: n
    }) {
        return $t(Z0, e.force), () => {
            let {
                force: r,
                ...o
            } = e;
            return jn({
                theirProps: o,
                ourProps: {},
                slot: {},
                slots: t,
                attrs: n,
                name: "ForcePortalRoot"
            })
        }
    }
});

function C4(e) {
    let t = Br(e);
    if (!t) {
        if (e === null) return null;
        throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n) return n;
    let r = t.createElement("div");
    return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r)
}
let P4 = be({
        name: "Portal",
        props: {
            as: {
                type: [Object, String],
                default: "div"
            }
        },
        setup(e, {
            slots: t,
            attrs: n
        }) {
            let r = Z(null),
                o = j(() => Br(r)),
                a = T4(),
                s = rt(ev, null),
                i = Z(a === !0 || s == null ? C4(r.value) : s.resolveTarget());
            en(() => {
                a || s != null && (i.value = s.resolveTarget())
            });
            let l = rt(Ku, null);
            return vt(() => {
                let c = wt(r);
                c && l && Rt(l.register(c))
            }), Rt(() => {
                var c, u;
                let p = (c = o.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
                p && i.value === p && i.value.children.length <= 0 && ((u = i.value.parentElement) == null || u.removeChild(i.value))
            }), () => {
                if (i.value === null) return null;
                let c = {
                    ref: r,
                    "data-headlessui-portal": ""
                };
                return Ie(fx, {
                    to: i.value
                }, jn({
                    ourProps: c,
                    theirProps: e,
                    slot: {},
                    attrs: n,
                    slots: t,
                    name: "Portal"
                }))
            }
        }
    }),
    Ku = Symbol("PortalParentContext");

function $4() {
    let e = rt(Ku, null),
        t = Z([]);

    function n(a) {
        return t.value.push(a), e && e.register(a), () => r(a)
    }

    function r(a) {
        let s = t.value.indexOf(a);
        s !== -1 && t.value.splice(s, 1), e && e.unregister(a)
    }
    let o = {
        register: n,
        unregister: r,
        portals: t
    };
    return [t, be({
        name: "PortalWrapper",
        setup(a, {
            slots: s
        }) {
            return $t(Ku, o), () => {
                var i;
                return (i = s.default) == null ? void 0 : i.call(s)
            }
        }
    })]
}
let ev = Symbol("PortalGroupContext"),
    S4 = be({
        name: "PortalGroup",
        props: {
            as: {
                type: [Object, String],
                default: "template"
            },
            target: {
                type: Object,
                default: null
            }
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            let r = hn({
                resolveTarget() {
                    return e.target
                }
            });
            return $t(ev, r), () => {
                let {
                    target: o,
                    ...a
                } = e;
                return jn({
                    theirProps: a,
                    ourProps: {},
                    slot: {},
                    attrs: t,
                    slots: n,
                    name: "PortalGroup"
                })
            }
        }
    }),
    tv = Symbol("StackContext");
var Gu = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Gu || {});

function A4() {
    return rt(tv, () => {})
}

function L4({
    type: e,
    enabled: t,
    element: n,
    onUpdate: r
}) {
    let o = A4();

    function a(...s) {
        r ? .(...s), o(...s)
    }
    vt(() => {
        Ue(t, (s, i) => {
            s ? a(0, e, n) : i === !0 && a(1, e, n)
        }, {
            immediate: !0,
            flush: "sync"
        })
    }), Rt(() => {
        t.value && a(1, e, n)
    }), $t(tv, a)
}
let O4 = Symbol("DescriptionContext");

function R4({
    slot: e = Z({}),
    name: t = "Description",
    props: n = {}
} = {}) {
    let r = Z([]);

    function o(a) {
        return r.value.push(a), () => {
            let s = r.value.indexOf(a);
            s !== -1 && r.value.splice(s, 1)
        }
    }
    return $t(O4, {
        register: o,
        slot: e,
        name: t,
        props: n
    }), j(() => r.value.length > 0 ? r.value.join(" ") : void 0)
}

function D4(e) {
    let t = uo(e.getSnapshot());
    return Rt(e.subscribe(() => {
        t.value = e.getSnapshot()
    })), t
}

function I4(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(o) {
            return r.add(o), () => r.delete(o)
        },
        dispatch(o, ...a) {
            let s = t[o].call(n, ...a);
            s && (n = s, r.forEach(i => i()))
        }
    }
}

function M4() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                o = r.clientWidth - r.offsetWidth,
                a = e - o;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}

function F4() {
    if (!G0()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset
        },
        after({
            doc: t,
            d: n,
            meta: r
        }) {
            function o(s) {
                return r.containers.flatMap(i => i()).some(i => i.contains(s))
            }
            if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
                let s = xi();
                s.style(t.documentElement, "scroll-behavior", "auto"), n.add(() => n.microTask(() => s.dispose()))
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let a = null;
            n.addEventListener(t, "click", s => {
                if (s.target instanceof HTMLElement) try {
                    let i = s.target.closest("a");
                    if (!i) return;
                    let {
                        hash: l
                    } = new URL(i.href), c = t.querySelector(l);
                    c && !o(c) && (a = c)
                } catch {}
            }, !0), n.addEventListener(t, "touchmove", s => {
                s.target instanceof HTMLElement && !o(s.target) && s.preventDefault()
            }, {
                passive: !1
            }), n.add(() => {
                window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({
                    block: "nearest"
                }), a = null)
            })
        }
    }
}

function N4() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function j4(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let Ar = I4(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: xi(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: j4(n)
            },
            o = [F4(), M4(), N4()];
        o.forEach(({
            before: a
        }) => a ? .(r)), o.forEach(({
            after: a
        }) => a ? .(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
Ar.subscribe(() => {
    let e = Ar.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            o = n.count !== 0;
        (o && !r || !o && r) && Ar.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Ar.dispatch("TEARDOWN", n)
    }
});

function B4(e, t, n) {
    let r = D4(Ar),
        o = j(() => {
            let a = e.value ? r.value.get(e.value) : void 0;
            return a ? a.count > 0 : !1
        });
    return Ue([e, t], ([a, s], [i], l) => {
        if (!a || !s) return;
        Ar.dispatch("PUSH", a, n);
        let c = !1;
        l(() => {
            c || (Ar.dispatch("POP", i ? ? a, n), c = !0)
        })
    }, {
        immediate: !0
    }), o
}

function H4({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    let r = Z(null),
        o = Br(r);

    function a() {
        var s;
        let i = [];
        for (let l of e) l !== null && (l instanceof HTMLElement ? i.push(l) : "value" in l && l.value instanceof HTMLElement && i.push(l.value));
        if (t != null && t.value)
            for (let l of t.value) i.push(l);
        for (let l of (s = o ? .querySelectorAll("html > *, body > *")) != null ? s : []) l !== document.body && l !== document.head && l instanceof HTMLElement && l.id !== "headlessui-portal-root" && (l.contains(wt(r)) || i.some(c => l.contains(c)) || i.push(l));
        return i
    }
    return {
        resolveContainers: a,
        contains(s) {
            return a().some(i => i.contains(s))
        },
        mainTreeNodeRef: r,
        MainTreeNode() {
            return n != null ? null : Ie(qu, {
                features: $l.Hidden,
                ref: r
            })
        }
    }
}
var z4 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(z4 || {});
let Ju = Symbol("DialogContext");

function nv(e) {
    let t = rt(Ju, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, nv), n
    }
    return t
}
let Yi = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
    V4 = be({
        name: "Dialog",
        inheritAttrs: !1,
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            static: {
                type: Boolean,
                default: !1
            },
            unmount: {
                type: Boolean,
                default: !0
            },
            open: {
                type: [Boolean, String],
                default: Yi
            },
            initialFocus: {
                type: Object,
                default: null
            },
            id: {
                type: String,
                default: () => `headlessui-dialog-${Fd()}`
            }
        },
        emits: {
            close: e => !0
        },
        setup(e, {
            emit: t,
            attrs: n,
            slots: r,
            expose: o
        }) {
            var a;
            let s = Z(!1);
            vt(() => {
                s.value = !0
            });
            let i = Z(0),
                l = Nd(),
                c = j(() => e.open === Yi && l !== null ? (l.value & Xt.Open) === Xt.Open : e.open),
                u = Z(null),
                p = j(() => Br(u));
            if (o({
                    el: u,
                    $el: u
                }), !(e.open !== Yi || l !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
            if (typeof c.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value===Yi?void 0:e.open}`);
            let h = j(() => s.value && c.value ? 0 : 1),
                v = j(() => h.value === 0),
                _ = j(() => i.value > 1),
                g = rt(Ju, null) !== null,
                [P, S] = $4(),
                {
                    resolveContainers: x,
                    mainTreeNodeRef: I,
                    MainTreeNode: A
                } = H4({
                    portals: P,
                    defaultContainers: [j(() => {
                        var _e;
                        return (_e = fe.panelRef.value) != null ? _e : u.value
                    })]
                }),
                N = j(() => _.value ? "parent" : "leaf"),
                M = j(() => l !== null ? (l.value & Xt.Closing) === Xt.Closing : !1),
                z = j(() => g || M.value ? !1 : v.value),
                F = j(() => {
                    var _e, Ce, pt;
                    return (pt = Array.from((Ce = (_e = p.value) == null ? void 0 : _e.querySelectorAll("body > *")) != null ? Ce : []).find(gt => gt.id === "headlessui-portal-root" ? !1 : gt.contains(wt(I)) && gt instanceof HTMLElement)) != null ? pt : null
                });
            Xh(F, z);
            let le = j(() => _.value ? !0 : v.value),
                oe = j(() => {
                    var _e, Ce, pt;
                    return (pt = Array.from((Ce = (_e = p.value) == null ? void 0 : _e.querySelectorAll("[data-headlessui-portal]")) != null ? Ce : []).find(gt => gt.contains(wt(I)) && gt instanceof HTMLElement)) != null ? pt : null
                });
            Xh(oe, le), L4({
                type: "Dialog",
                enabled: j(() => h.value === 0),
                element: u,
                onUpdate: (_e, Ce) => {
                    if (Ce === "Dialog") return En(_e, {
                        [Gu.Add]: () => i.value += 1,
                        [Gu.Remove]: () => i.value -= 1
                    })
                }
            });
            let we = R4({
                    name: "DialogDescription",
                    slot: j(() => ({
                        open: c.value
                    }))
                }),
                ae = Z(null),
                fe = {
                    titleId: ae,
                    panelRef: Z(null),
                    dialogState: h,
                    setTitleId(_e) {
                        ae.value !== _e && (ae.value = _e)
                    },
                    close() {
                        t("close", !1)
                    }
                };
            $t(Ju, fe);
            let ue = j(() => !(!v.value || _.value));
            v4(x, (_e, Ce) => {
                fe.close(), Gt(() => Ce ? .focus())
            }, ue);
            let We = j(() => !(_.value || h.value !== 0));
            J0((a = p.value) == null ? void 0 : a.defaultView, "keydown", _e => {
                We.value && (_e.defaultPrevented || _e.key === H0.Escape && (_e.preventDefault(), _e.stopPropagation(), fe.close()))
            });
            let Ae = j(() => !(M.value || h.value !== 0 || g));
            return B4(p, Ae, _e => {
                var Ce;
                return {
                    containers: [...(Ce = _e.containers) != null ? Ce : [], x]
                }
            }), en(_e => {
                if (h.value !== 0) return;
                let Ce = wt(u);
                if (!Ce) return;
                let pt = new ResizeObserver(gt => {
                    for (let St of gt) {
                        let at = St.target.getBoundingClientRect();
                        at.x === 0 && at.y === 0 && at.width === 0 && at.height === 0 && fe.close()
                    }
                });
                pt.observe(Ce), _e(() => pt.disconnect())
            }), () => {
                let {
                    id: _e,
                    open: Ce,
                    initialFocus: pt,
                    ...gt
                } = e, St = { ...n,
                    ref: u,
                    id: _e,
                    role: "dialog",
                    "aria-modal": h.value === 0 ? !0 : void 0,
                    "aria-labelledby": ae.value,
                    "aria-describedby": we.value
                }, at = {
                    open: h.value === 0
                };
                return Ie(Zh, {
                    force: !0
                }, () => [Ie(P4, () => Ie(S4, {
                    target: u.value
                }, () => Ie(Zh, {
                    force: !1
                }, () => Ie(Bs, {
                    initialFocus: pt,
                    containers: x,
                    features: v.value ? En(N.value, {
                        parent: Bs.features.RestoreFocus,
                        leaf: Bs.features.All & ~Bs.features.FocusLock
                    }) : Bs.features.None
                }, () => Ie(S, {}, () => jn({
                    ourProps: St,
                    theirProps: { ...gt,
                        ...n
                    },
                    slot: at,
                    attrs: n,
                    slots: r,
                    visible: h.value === 0,
                    features: Pl.RenderStrategy | Pl.Static,
                    name: "Dialog"
                })))))), Ie(A)])
            }
        }
    }),
    U4 = be({
        name: "DialogPanel",
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            id: {
                type: String,
                default: () => `headlessui-dialog-panel-${Fd()}`
            }
        },
        setup(e, {
            attrs: t,
            slots: n,
            expose: r
        }) {
            let o = nv("DialogPanel");
            r({
                el: o.panelRef,
                $el: o.panelRef
            });

            function a(s) {
                s.stopPropagation()
            }
            return () => {
                let {
                    id: s,
                    ...i
                } = e, l = {
                    id: s,
                    ref: o.panelRef,
                    onClick: a
                };
                return jn({
                    ourProps: l,
                    theirProps: i,
                    slot: {
                        open: o.dialogState.value === 0
                    },
                    attrs: t,
                    slots: n,
                    name: "DialogPanel"
                })
            }
        }
    });

function W4(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function Zc(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Xi(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var Qu = (e => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Qu || {});

function q4(e, t) {
    let n = xi();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: o
    } = getComputedStyle(e), [a, s] = [r, o].map(i => {
        let [l = 0] = i.split(",").filter(Boolean).map(c => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, u) => u - c);
        return l
    });
    return a !== 0 ? n.setTimeout(() => t("finished"), a + s) : t("finished"), n.add(() => t("cancelled")), n.dispose
}

function em(e, t, n, r, o, a) {
    let s = xi(),
        i = a !== void 0 ? W4(a) : () => {};
    return Xi(e, ...o), Zc(e, ...t, ...n), s.nextFrame(() => {
        Xi(e, ...n), Zc(e, ...r), s.add(q4(e, l => (Xi(e, ...r, ...t), Zc(e, ...o), i(l))))
    }), s.add(() => Xi(e, ...t, ...n, ...r, ...o)), s.add(() => i("cancelled")), s.dispose
}

function xr(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let Bd = Symbol("TransitionContext");
var K4 = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(K4 || {});

function G4() {
    return rt(Bd, null) !== null
}

function J4() {
    let e = rt(Bd, null);
    if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}

function Q4() {
    let e = rt(Hd, null);
    if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
let Hd = Symbol("NestingContext");

function ac(e) {
    return "children" in e ? ac(e.children) : e.value.filter(({
        state: t
    }) => t === "visible").length > 0
}

function rv(e) {
    let t = Z([]),
        n = Z(!1);
    vt(() => n.value = !0), Rt(() => n.value = !1);

    function r(a, s = rr.Hidden) {
        let i = t.value.findIndex(({
            id: l
        }) => l === a);
        i !== -1 && (En(s, {
            [rr.Unmount]() {
                t.value.splice(i, 1)
            },
            [rr.Hidden]() {
                t.value[i].state = "hidden"
            }
        }), !ac(t) && n.value && e ? .())
    }

    function o(a) {
        let s = t.value.find(({
            id: i
        }) => i === a);
        return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({
            id: a,
            state: "visible"
        }), () => r(a, rr.Unmount)
    }
    return {
        children: t,
        register: o,
        unregister: r
    }
}
let ov = Pl.RenderStrategy,
    Yu = be({
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            show: {
                type: [Boolean],
                default: null
            },
            unmount: {
                type: [Boolean],
                default: !0
            },
            appear: {
                type: [Boolean],
                default: !1
            },
            enter: {
                type: [String],
                default: ""
            },
            enterFrom: {
                type: [String],
                default: ""
            },
            enterTo: {
                type: [String],
                default: ""
            },
            entered: {
                type: [String],
                default: ""
            },
            leave: {
                type: [String],
                default: ""
            },
            leaveFrom: {
                type: [String],
                default: ""
            },
            leaveTo: {
                type: [String],
                default: ""
            }
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0
        },
        setup(e, {
            emit: t,
            attrs: n,
            slots: r,
            expose: o
        }) {
            let a = Z(0);

            function s() {
                a.value |= Xt.Opening, t("beforeEnter")
            }

            function i() {
                a.value &= ~Xt.Opening, t("afterEnter")
            }

            function l() {
                a.value |= Xt.Closing, t("beforeLeave")
            }

            function c() {
                a.value &= ~Xt.Closing, t("afterLeave")
            }
            if (!G4() && i4()) return () => Ie(av, { ...e,
                onBeforeEnter: s,
                onAfterEnter: i,
                onBeforeLeave: l,
                onAfterLeave: c
            }, r);
            let u = Z(null),
                p = j(() => e.unmount ? rr.Unmount : rr.Hidden);
            o({
                el: u,
                $el: u
            });
            let {
                show: h,
                appear: v
            } = J4(), {
                register: _,
                unregister: g
            } = Q4(), P = Z(h.value ? "visible" : "hidden"), S = {
                value: !0
            }, x = Fd(), I = {
                value: !1
            }, A = rv(() => {
                !I.value && P.value !== "hidden" && (P.value = "hidden", g(x), c())
            });
            vt(() => {
                let fe = _(x);
                Rt(fe)
            }), en(() => {
                if (p.value === rr.Hidden && x) {
                    if (h.value && P.value !== "visible") {
                        P.value = "visible";
                        return
                    }
                    En(P.value, {
                        hidden: () => g(x),
                        visible: () => _(x)
                    })
                }
            });
            let N = xr(e.enter),
                M = xr(e.enterFrom),
                z = xr(e.enterTo),
                F = xr(e.entered),
                le = xr(e.leave),
                oe = xr(e.leaveFrom),
                we = xr(e.leaveTo);
            vt(() => {
                en(() => {
                    if (P.value === "visible") {
                        let fe = wt(u);
                        if (fe instanceof Comment && fe.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }
                })
            });

            function ae(fe) {
                let ue = S.value && !v.value,
                    We = wt(u);
                !We || !(We instanceof HTMLElement) || ue || (I.value = !0, h.value && s(), h.value || l(), fe(h.value ? em(We, N, M, z, F, Ae => {
                    I.value = !1, Ae === Qu.Finished && i()
                }) : em(We, le, oe, we, F, Ae => {
                    I.value = !1, Ae === Qu.Finished && (ac(A) || (P.value = "hidden", g(x), c()))
                })))
            }
            return vt(() => {
                Ue([h], (fe, ue, We) => {
                    ae(We), S.value = !1
                }, {
                    immediate: !0
                })
            }), $t(Hd, A), l4(j(() => En(P.value, {
                visible: Xt.Open,
                hidden: Xt.Closed
            }) | a.value)), () => {
                let {
                    appear: fe,
                    show: ue,
                    enter: We,
                    enterFrom: Ae,
                    enterTo: _e,
                    entered: Ce,
                    leave: pt,
                    leaveFrom: gt,
                    leaveTo: St,
                    ...at
                } = e, _n = {
                    ref: u
                }, nn = { ...at,
                    ...v.value && h.value && wi.isServer ? {
                        class: K([n.class, at.class, ...N, ...M])
                    } : {}
                };
                return jn({
                    theirProps: nn,
                    ourProps: _n,
                    slot: {},
                    slots: r,
                    attrs: n,
                    features: ov,
                    visible: P.value === "visible",
                    name: "TransitionChild"
                })
            }
        }
    }),
    Y4 = Yu,
    av = be({
        inheritAttrs: !1,
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            show: {
                type: [Boolean],
                default: null
            },
            unmount: {
                type: [Boolean],
                default: !0
            },
            appear: {
                type: [Boolean],
                default: !1
            },
            enter: {
                type: [String],
                default: ""
            },
            enterFrom: {
                type: [String],
                default: ""
            },
            enterTo: {
                type: [String],
                default: ""
            },
            entered: {
                type: [String],
                default: ""
            },
            leave: {
                type: [String],
                default: ""
            },
            leaveFrom: {
                type: [String],
                default: ""
            },
            leaveTo: {
                type: [String],
                default: ""
            }
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0
        },
        setup(e, {
            emit: t,
            attrs: n,
            slots: r
        }) {
            let o = Nd(),
                a = j(() => e.show === null && o !== null ? (o.value & Xt.Open) === Xt.Open : e.show);
            en(() => {
                if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
            });
            let s = Z(a.value ? "visible" : "hidden"),
                i = rv(() => {
                    s.value = "hidden"
                }),
                l = Z(!0),
                c = {
                    show: a,
                    appear: j(() => e.appear || !l.value)
                };
            return vt(() => {
                en(() => {
                    l.value = !1, a.value ? s.value = "visible" : ac(i) || (s.value = "hidden")
                })
            }), $t(Hd, i), $t(Bd, c), () => {
                let u = B0(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]),
                    p = {
                        unmount: e.unmount
                    };
                return jn({
                    ourProps: { ...p,
                        as: "template"
                    },
                    theirProps: {},
                    slot: {},
                    slots: { ...r,
                        default: () => [Ie(Y4, {
                            onBeforeEnter: () => t("beforeEnter"),
                            onAfterEnter: () => t("afterEnter"),
                            onBeforeLeave: () => t("beforeLeave"),
                            onAfterLeave: () => t("afterLeave"),
                            ...n,
                            ...p,
                            ...u
                        }, r.default)]
                    },
                    attrs: {},
                    features: ov,
                    visible: s.value === "visible",
                    name: "Transition"
                })
            }
        }
    });
const X4 = {
        class: "fixed inset-0 z-[9999] flex items-center justify-center"
    },
    Z4 = B("div", {
        class: "bg-muted-800/70 dark:bg-muted-900/80 fixed inset-0"
    }, null, -1),
    e$ = {
        class: "fixed inset-0"
    },
    t$ = {
        inheritAttrs: !1
    },
    sv = be({ ...t$,
        __name: "TairoModal",
        props: {
            open: {
                type: Boolean
            },
            size: {
                default: "md"
            },
            shape: {
                default: "rounded"
            },
            footerAlign: {
                default: "end"
            },
            classes: {
                default: () => ({
                    wrapper: "",
                    dialog: ""
                })
            }
        },
        emits: ["close"],
        setup(e, {
            emit: t
        }) {
            const n = e,
                r = j(() => {
                    const o = [];
                    switch (n.classes.dialog && (Array.isArray(n.classes.dialog) ? o.push(...n.classes.dialog) : o.push(n.classes.dialog)), n.shape) {
                        case "rounded":
                            o.push("rounded-lg");
                            break;
                        case "curved":
                            o.push("rounded-xl");
                            break
                    }
                    switch (n.size) {
                        case "sm":
                            o.push("max-w-sm");
                            break;
                        case "md":
                            o.push("max-w-md");
                            break;
                        case "lg":
                            o.push("max-w-xl");
                            break;
                        case "xl":
                            o.push("max-w-2xl");
                            break;
                        case "2xl":
                            o.push("max-w-3xl");
                            break;
                        case "3xl":
                            o.push("max-w-5xl");
                            break
                    }
                    return o
                });
            return (o, a) => (R(), me(y(av), {
                appear: "",
                show: n.open,
                as: "template"
            }, {
                default: ye(() => [B("div", X4, [te(y(V4), {
                    class: "relative z-[9999]",
                    as: "div",
                    onClose: a[0] || (a[0] = s => t("close"))
                }, {
                    default: ye(() => [te(y(Yu), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                    }, {
                        default: ye(() => [Z4]),
                        _: 1
                    }), B("div", e$, [B("div", {
                        class: K(["flex min-h-full items-center justify-center p-4 text-center", n.classes.wrapper])
                    }, [te(y(Yu), {
                        as: "template",
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                    }, {
                        default: ye(() => [te(y(U4), {
                            class: K(["dark:bg-muted-800 w-full bg-white text-left align-middle shadow-xl transition-all", y(r)])
                        }, {
                            default: ye(() => [Fe(o.$slots, "header"), Fe(o.$slots, "default"), "footer" in o.$slots ? (R(), Q("div", {
                                key: 0,
                                class: K(["flex w-full items-center gap-x-2", [n.footerAlign === "center" && "justify-center", n.footerAlign === "end" && "justify-end", n.footerAlign === "between" && "justify-between"]])
                            }, [Fe(o.$slots, "footer")], 2)) : Te("", !0)]),
                            _: 3
                        }, 8, ["class"])]),
                        _: 3
                    })], 2)])]),
                    _: 3
                })])]),
                _: 3
            }, 8, ["show"]))
        }
    }),
    n$ = /Mac|iP/;

function iv() {
    const e = Z(!1);
    return g0(() => {
        n$.test(navigator.platform) && (e.value = !0)
    }), ko(e)
}

function r$() {
    const e = iv();
    return j(() => e.value ? "⌘" : "ctrl")
}
const tm = (e, t) => t.split(".").reduce((n, r) => n && n[r], e),
    zd = (e, t) => Object.keys(e).filter(t).reduce((n, r) => Object.assign(n, {
        [r]: e[r]
    }), {}),
    H6 = e => t => e && e.length ? zd(t, n => !e.includes(n)) : t,
    z6 = e => t => Array.isArray(t) ? t.map(n => e(n)) : e(t),
    lv = e => {
        const t = [],
            n = [];
        for (const r of e)["$", "_"].includes(r) ? t.push(r) : n.push(r);
        return {
            prefixes: t,
            properties: n
        }
    },
    V6 = (e = []) => t => {
        if (e.length === 0 || !t) return t;
        const {
            prefixes: n,
            properties: r
        } = lv(e);
        return zd(t, o => !r.includes(o) && !n.includes(o[0]))
    },
    U6 = (e = []) => t => {
        if (e.length === 0 || !t) return t;
        const {
            prefixes: n,
            properties: r
        } = lv(e);
        return zd(t, o => r.includes(o) || n.includes(o[0]))
    },
    W6 = (e, t) => {
        const n = new Intl.Collator(t.$locale, {
                numeric: t.$numeric,
                caseFirst: t.$caseFirst,
                sensitivity: t.$sensitivity
            }),
            r = Object.keys(t).filter(o => !o.startsWith("$"));
        for (const o of r) e = e.sort((a, s) => {
            const i = [tm(a, o), tm(s, o)].map(l => {
                if (l !== null) return l instanceof Date ? l.toISOString() : l
            });
            return t[o] === -1 && i.reverse(), n.compare(i[0], i[1])
        });
        return e
    },
    q6 = (e, t = "Expected an array") => {
        if (!Array.isArray(e)) throw new TypeError(t)
    },
    An = e => Array.isArray(e) ? e : [void 0, null].includes(e) ? [] : [e],
    o$ = ["sort", "where", "only", "without"];

function a$(e, t = {}) {
    const n = {};
    for (const s of Object.keys(t.initialParams || {})) n[s] = o$.includes(s) ? An(t.initialParams[s]) : t.initialParams[s];
    const r = (s, i = l => l) => (...l) => (n[s] = i(...l), a),
        o = s => t.legacy ? s ? .surround ? s.surround : s && (s ? .dirConfig && (s.result = {
            _path: s.dirConfig ? ._path,
            ...s.result,
            _dir: s.dirConfig
        }), s ? ._path || Array.isArray(s) || !Object.prototype.hasOwnProperty.call(s, "result") ? s : s ? .result) : s,
        a = {
            params: () => ({ ...n,
                ...n.where ? {
                    where: [...An(n.where)]
                } : {},
                ...n.sort ? {
                    sort: [...An(n.sort)]
                } : {}
            }),
            only: r("only", An),
            without: r("without", An),
            where: r("where", s => [...An(n.where), ...An(s)]),
            sort: r("sort", s => [...An(n.sort), ...An(s)]),
            limit: r("limit", s => parseInt(String(s), 10)),
            skip: r("skip", s => parseInt(String(s), 10)),
            find: () => e(a).then(o),
            findOne: () => e(r("first")(!0)).then(o),
            count: () => e(r("count")(!0)).then(o),
            locale: s => a.where({
                _locale: s
            }),
            withSurround: r("surround", (s, i) => ({
                query: s,
                ...i
            })),
            withDirConfig: () => r("dirConfig")(!0)
        };
    return t.legacy && (a.findSurround = (s, i) => a.withSurround(s, i).findOne().then(o)), a
}

function cv(e) {
    return JSON.stringify(e, s$)
}

function s$(e, t) {
    return t instanceof RegExp ? `--REGEX ${t.toString()}` : t
}
const i$ = e => {
        let t = cv(e);
        return t = typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t), t = t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), (t.match(/.{1,100}/g) || []).join("/")
    },
    uv = () => ({
        isEnabled: () => {
            const r = Kt().query;
            return Object.prototype.hasOwnProperty.call(r, "preview") && !r.preview ? !1 : !!(r.preview || ol("previewToken").value || sessionStorage.getItem("previewToken"))
        },
        getPreviewToken: () => ol("previewToken").value || sessionStorage.getItem("previewToken") || void 0,
        setPreviewToken: r => {
            ol("previewToken").value = r, Kt().query.preview = r || "", r ? sessionStorage.setItem("previewToken", r) : sessionStorage.removeItem("previewToken"), window.location.reload()
        }
    }),
    nm = e => Dg(e, jr().public.content.api.baseURL),
    K6 = () => {
        throw console.warn("useContent is only accessible when you are using `documentDriven` mode."), console.warn("Learn more by visiting: https://content.nuxtjs.org/guide/writing/document-driven"), new Error("useContent is only accessible when you are using `documentDriven` mode.")
    },
    l$ = () => {
        const {
            experimental: e
        } = jr().public.content;
        return e.clientDB ? !0 : uv().isEnabled()
    },
    c$ = () => async e => {
        const {
            content: t
        } = jr().public, n = e.params(), r = t.experimental.stripQueryParameters ? nm(`/query/${`${Oh(n)}.${t.integrity}`}/${i$(n)}.json`) : nm(`/query/${Oh(n)}.${t.integrity}.json`);
        if (l$()) return (await C(() =>
            import ("./client-db.61de6251.js"), ["./client-db.61de6251.js", "./index.c332151d.js"],
            import.meta.url).then(s => s.useContentDatabase())).fetch(e);
        const o = await $fetch(r, {
            method: "GET",
            responseType: "json",
            params: t.experimental.stripQueryParameters ? void 0 : {
                _params: cv(n),
                previewToken: uv().getPreviewToken()
            }
        });
        if (typeof o == "string" && o.startsWith("<!DOCTYPE html>")) throw new Error("Not found");
        return o
    };

function u$(e, ...t) {
    const {
        content: n
    } = jr().public, r = a$(c$(), {
        initialParams: typeof e != "string" ? e : {},
        legacy: !0
    });
    let o;
    typeof e == "string" && (o = xu(bi(e, ...t)));
    const a = r.params;
    return r.params = () => {
        const s = a();
        return o && (s.where = s.where || [], s.first && (s.where || []).length === 0 ? s.where.push({
            _path: Jl(o)
        }) : s.where.push({
            _path: new RegExp(`^${o.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)
        })), s.sort ? .length || (s.sort = [{
            _file: 1,
            $numeric: !0
        }]), n.locales.length && (s.where ? .find(l => l._locale) ? ._locale || (s.where = s.where || [], s.where.push({
            _locale: n.defaultLocale
        }))), s
    }, r
}
const d$ = {
        class: "px-2 pb-2"
    },
    f$ = {
        class: "flex w-full justify-between"
    },
    p$ = B("span", null, "Search", -1),
    h$ = {
        key: 0,
        class: "text-xs opacity-60"
    },
    m$ = B("kbd", null, "↑", -1),
    g$ = B("kbd", null, "↓", -1),
    v$ = {
        key: 1,
        class: "text-xs opacity-60"
    },
    _$ = B("kbd", null, "k", -1),
    b$ = {
        key: 0
    },
    y$ = B("div", {
        class: "px-3 pt-2"
    }, [B("span", {
        class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
    }, " Documentation Hub ")], -1),
    w$ = {
        key: 1
    },
    x$ = B("div", {
        class: "px-3 pt-2"
    }, [B("span", {
        class: "nui-text-500 text-[0.65rem] font-medium uppercase tracking-wider"
    }, " Demo Pages ")], -1),
    k$ = {
        class: "flex flex-col items-center py-3 text-center"
    },
    E$ = {
        class: "scale-[0.8]"
    },
    T$ = be({
        __name: "DemoAppSearch",
        setup(e) {
            const t = iv(),
                n = yt("search-open", () => !1),
                r = Z("");
            Fu("k", h => {
                (t.value ? h.metaKey : h.ctrlKey) && (h.preventDefault(), n.value = !n.value)
            });
            const {
                data: o
            } = dC(() => r.value ? u$().where({
                $and: [{
                    _type: "markdown",
                    _draft: !1,
                    _partial: !1
                }, {
                    $or: [{
                        components: {
                            $icontains: r.value
                        }
                    }, {
                        title: {
                            $regex: `/${r.value.replaceAll(" ",".*")}/i`
                        }
                    }, {
                        _path: {
                            $regex: `/${r.value.replaceAll(" ",".*")}/i`
                        }
                    }]
                }]
            }).limit(6).find().catch(() => []) : Promise.resolve([]), {
                watch: [r]
            }, "$KyeTl6nybl"), a = Tn(), s = j(() => {
                if (!r.value) return [];
                const h = [],
                    v = new RegExp(r.value, "i");

                function _(g) {
                    for (const P of g)
                        if (P.children) _(P.children);
                        else {
                            if (P.path.includes(":")) continue;
                            (P.meta ? .preview ? .title && v.test(P.meta ? .preview ? .title) || P.meta ? .preview ? .description && v.test(P.meta ? .preview ? .description)) && h.push(P)
                        }
                }
                return _(a.options.routes), h.slice(0, 6)
            }), i = j(() => {
                const h = 6 - Math.min(s.value.length, 3);
                return o.value ? .slice(0, h)
            }), l = j(() => {
                const h = 6 - Math.min(o.value ? .length || 0, 3);
                return s.value ? .slice(0, h)
            }), c = j(() => !!(i.value ? .length || l.value ? .length));

            function u() {
                n.value = !1
            }
            const p = r$();
            return (h, v) => {
                const _ = U3,
                    g = Q3,
                    P = Y3,
                    S = Md,
                    x = F0,
                    I = sv,
                    A = Uw("focus");
                return R(), Q("div", null, [te(I, {
                    classes: {
                        wrapper: "!items-start pt-20",
                        dialog: "p-3 rounded-xl"
                    },
                    open: y(n),
                    size: "md",
                    onClose: v[1] || (v[1] = N => n.value = !1)
                }, {
                    default: ye(() => [te(P, {
                        "next-keys": "ArrowDown",
                        "prev-keys": "ArrowUp"
                    }, {
                        default: ye(() => [B("div", d$, [dd((R(), me(_, {
                            type: "search",
                            shape: "curved",
                            icon: "lucide:search",
                            modelValue: y(r),
                            "onUpdate:modelValue": v[0] || (v[0] = N => mt(r) ? r.value = N : null),
                            placeholder: "Ex: button or analytics...",
                            "color-focus": ""
                        }, {
                            label: ye(() => [B("span", f$, [p$, y(c) ? (R(), Q("span", h$, [et(" navigate with "), m$, et(" and "), g$])) : y(r) ? Te("", !0) : (R(), Q("span", v$, [et(" press "), B("kbd", null, it(y(p)), 1), et(" + "), _$, et(" to open ")]))])]),
                            _: 1
                        }, 8, ["modelValue"])), [
                            [A]
                        ])]), y(i) ? .length ? (R(), Q("div", b$, [y$, B("ul", null, [(R(!0), Q(Le, null, Pt(y(i), N => (R(), Q("li", {
                            key: N ? ._path,
                            class: ""
                        }, [te(g, {
                            to: N ? ._path,
                            search: y(r),
                            title: N ? .title,
                            subtitle: N ? ._path,
                            icon: N ? .icon ? .src,
                            onClickPassive: u
                        }, null, 8, ["to", "search", "title", "subtitle", "icon"])]))), 128))])])) : Te("", !0), y(l) ? .length ? (R(), Q("div", w$, [x$, B("ul", null, [(R(!0), Q(Le, null, Pt(y(l), N => (R(), Q("li", {
                            key: N ? .name,
                            class: ""
                        }, [te(g, {
                            to: {
                                name: N ? .name
                            },
                            search: y(r),
                            title: N ? .meta ? .preview ? .title,
                            subtitle: N ? .meta ? .preview ? .description,
                            onClickPassive: u
                        }, null, 8, ["to", "search", "title", "subtitle"])]))), 128))])])) : Te("", !0)]),
                        _: 1
                    }), B("div", k$, [B("div", E$, [te(S, {
                        size: "xs",
                        weight: "medium",
                        class: "text-muted-400"
                    }, {
                        default: ye(() => [et("Search by")]),
                        _: 1
                    }), te(x, {
                        class: "text-muted-400 mx-auto w-20"
                    })])])]),
                    _: 1
                }, 8, ["open"])])
            }
        }
    }),
    C$ = {},
    P$ = {
        "aria-hidden": "true",
        viewBox: "0 0 24 24"
    },
    $$ = B("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M18 6 6 18M6 6l12 12"
    }, null, -1),
    S$ = [$$];

function A$(e, t) {
    return R(), Q("svg", P$, S$)
}
const L$ = nc(C$, [
        ["render", A$]
    ]),
    dv = be({
        __name: "BaseButtonClose",
        props: {
            shape: {
                default: void 0
            },
            color: {
                default: "default"
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                r = j(() => t.shape ? ? n.nui.defaultShapes ? .buttonClose),
                o = {
                    straight: "",
                    rounded: "nui-button-rounded",
                    smooth: "nui-button-smooth",
                    curved: "nui-button-curved",
                    full: "nui-button-full"
                },
                a = {
                    default: "nui-button-default",
                    muted: "nui-button-muted",
                    primary: "nui-button-primary",
                    info: "nui-button-info",
                    success: "nui-button-success",
                    warning: "nui-button-warning",
                    danger: "nui-button-danger",
                    none: ""
                },
                s = j(() => ["nui-button-close", r.value && o[r.value], a[t.color]]);
            return (i, l) => {
                const c = L$;
                return R(), Q("button", {
                    type: "button",
                    class: K(y(s))
                }, [te(c, {
                    class: "nui-button-icon"
                })], 2)
            }
        }
    }),
    ki = be({
        __name: "BaseHeading",
        props: {
            as: {
                default: "p"
            },
            size: {
                default: "xl"
            },
            weight: {
                default: "semibold"
            },
            lead: {
                default: "normal"
            }
        },
        setup(e) {
            const t = e,
                n = {
                    xs: "nui-heading-xs",
                    sm: "nui-heading-sm",
                    md: "nui-heading-md",
                    lg: "nui-heading-lg",
                    xl: "nui-heading-xl",
                    "2xl": "nui-heading-2xl",
                    "3xl": "nui-heading-3xl",
                    "4xl": "nui-heading-4xl",
                    "5xl": "nui-heading-5xl",
                    "6xl": "nui-heading-6xl",
                    "7xl": "nui-heading-7xl",
                    "8xl": "nui-heading-8xl",
                    "9xl": "nui-heading-9xl"
                },
                r = {
                    light: "nui-weight-light",
                    normal: "nui-weight-normal",
                    medium: "nui-weight-medium",
                    semibold: "nui-weight-semibold",
                    bold: "nui-weight-bold",
                    extrabold: "nui-weight-extrabold"
                },
                o = {
                    none: "nui-lead-none",
                    tight: "nui-lead-tight",
                    snug: "nui-lead-snug",
                    normal: "nui-lead-normal",
                    relaxed: "nui-lead-relaxed",
                    loose: "nui-lead-loose"
                },
                a = j(() => ["nui-heading", n[t.size], r[t.weight], o[t.lead]]);
            return (s, i) => (R(), me(dt(t.as), {
                class: K(y(a))
            }, {
                default: ye(() => [Fe(s.$slots, "default")]),
                _: 3
            }, 8, ["class"]))
        }
    }),
    O$ = be({
        __name: "BaseParagraph",
        props: {
            as: {
                default: "p"
            },
            size: {
                default: "md"
            },
            weight: {
                default: "normal"
            },
            lead: {
                default: "normal"
            }
        },
        setup(e) {
            const t = e,
                n = {
                    xs: "nui-paragraph-xs",
                    sm: "nui-paragraph-sm",
                    md: "nui-paragraph-md",
                    lg: "nui-paragraph-lg",
                    xl: "nui-paragraph-xl",
                    "2xl": "nui-paragraph-2xl",
                    "3xl": "nui-paragraph-3xl",
                    "4xl": "nui-paragraph-4xl",
                    "5xl": "nui-paragraph-5xl",
                    "6xl": "nui-paragraph-6xl",
                    "7xl": "nui-paragraph-7xl",
                    "8xl": "nui-paragraph-8xl",
                    "9xl": "nui-paragraph-9xl"
                },
                r = {
                    light: "nui-weight-light",
                    normal: "nui-weight-normal",
                    medium: "nui-weight-medium",
                    semibold: "nui-weight-semibold",
                    bold: "nui-weight-bold",
                    extrabold: "nui-weight-extrabold"
                },
                o = {
                    none: "nui-lead-none",
                    tight: "nui-lead-tight",
                    snug: "nui-lead-snug",
                    normal: "nui-lead-normal",
                    relaxed: "nui-lead-relaxed",
                    loose: "nui-lead-loose"
                },
                a = j(() => ["nui-paragraph", n[t.size], r[t.weight], o[t.lead]]);
            return (s, i) => (R(), me(dt(t.as), {
                class: K(y(a))
            }, {
                default: ye(() => [Fe(s.$slots, "default")]),
                _: 3
            }, 8, ["class"]))
        }
    }),
    R$ = be({
        __name: "BaseCard",
        props: {
            shape: {
                default: void 0
            },
            elevated: {
                type: Boolean,
                default: !1
            },
            elevatedHover: {
                type: Boolean,
                default: !1
            },
            color: {
                default: "white"
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                r = j(() => t.shape ? ? n.nui.defaultShapes ? .card),
                o = {
                    straight: "",
                    rounded: "nui-card-rounded",
                    smooth: "nui-card-smooth",
                    curved: "nui-card-curved"
                },
                a = {
                    white: "nui-card-white",
                    "white-contrast": "nui-card-white-contrast",
                    muted: "nui-card-muted",
                    "muted-contrast": "nui-card-muted-contrast",
                    primary: "nui-card-primary",
                    info: "nui-card-info",
                    success: "nui-card-success",
                    warning: "nui-card-warning",
                    danger: "nui-card-danger",
                    none: ""
                },
                s = j(() => ["nui-card", r.value && o[r.value], a[t.color], t.elevated && "nui-card-shadow", t.elevatedHover && "nui-card-shadow-hover"]);
            return (i, l) => (R(), Q("div", {
                class: K(y(s))
            }, [Fe(i.$slots, "default")], 2))
        }
    }),
    D$ = {
        class: "group"
    },
    I$ = ["onClick"],
    M$ = be({
        __name: "TairoCollapseNavigationCollapseLinks",
        props: {
            item: {},
            expanded: {
                type: Boolean
            }
        },
        emits: ["clicked"],
        setup(e, {
            emit: t
        }) {
            const n = e,
                r = Kt(),
                o = j(() => n.item ? .activePath ? r.path.startsWith(n.item.activePath) : !1),
                a = Z(),
                s = Z(o.value);

            function i() {
                s.value = !s.value, s.value || a.value ? .blur(), t("clicked")
            }
            return (l, c) => {
                const u = mr,
                    p = hr;
                return R(), Q("div", D$, [B("button", {
                    class: K(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center rounded-lg py-3 transition-colors duration-300", n.expanded ? "gap-4 px-4" : "px-2 justify-center"]),
                    ref_key: "buttonRef",
                    ref: a,
                    onClick: t2(i, ["stop", "prevent"])
                }, [te(u, {
                    name: l.item.icon.name,
                    class: K([
                        [l.item.icon.class, y(o) && "text-primary-500"], "shrink-0"
                    ])
                }, null, 8, ["name", "class"]), B("span", {
                    class: K(["block whitespace-nowrap font-sans text-sm", [y(o) && "text-primary-500", n.expanded ? "block" : "hidden"]])
                }, it(l.item.name), 3), B("span", {
                    class: K(["ms-auto items-center justify-center", n.expanded ? "flex" : "hidden"])
                }, [te(u, {
                    name: "lucide:chevron-up",
                    class: K(["h-4 w-4 transition-transform duration-200", y(s) ? "" : "rotate-180"])
                }, null, 8, ["class"])], 2)], 10, I$), n.expanded ? (R(), Q("ul", {
                    key: 0,
                    class: K(["border-muted-200 relative block ps-4", {
                        "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !y(s),
                        "after:border-muted-200 max-h-max opacity-100": y(s)
                    }])
                }, [(R(!0), Q(Le, null, Pt(n.item.children, h => (R(), Q("li", {
                    key: h.to,
                    class: "border-muted-300 dark:border-muted-700 ms-2 border-s-2 first:mt-2"
                }, [te(p, {
                    to: h.to,
                    "exact-active-class": "!border-primary-500 !text-primary-500 dark:!text-primary-500",
                    class: "nui-focus text-muted-500 hover:text-muted-600 dark:text-muted-400/80 dark:hover:text-muted-200 relative -start-0.5 flex cursor-pointer items-center gap-2 border-s-2 border-transparent py-2 ps-4 transition-colors duration-300"
                }, {
                    default: ye(() => [te(u, {
                        name: h.icon.name,
                        class: K([h.icon.class, "shrink-0"])
                    }, null, 8, ["name", "class"]), B("span", {
                        class: K(["whitespace-nowrap font-sans text-[0.85rem]", [n.expanded ? "block" : "hidden"]])
                    }, it(h.name), 3)]),
                    _: 2
                }, 1032, ["to"])]))), 128))], 2)) : Te("", !0)])
            }
        }
    }),
    F$ = ["img", "div"];

function xt(e) {
    return F$.includes(e) ? e : Wl(e)
}
const fv = /(\d+) (\d+) (\d+)/;

function N$(e) {
    const [, t, n, r] = e.match(fv) || [], o = Number(t).toString(16), a = Number(n).toString(16), s = Number(r).toString(16);
    return `#${o}${a}${s}`
}

function Xn(e) {
    return j(() => {
        const t = dP(e, document.documentElement);
        return t.value && fv.test(t.value) ? N$(t.value) : t.value
    })
}

function G6() {
    const e = Xn("--color-primary-500"),
        t = Xn("--color-success-500"),
        n = Xn("--color-info-500"),
        r = Xn("--color-warning-500"),
        o = Xn("--color-danger-500"),
        a = Xn("--color-yellow-400"),
        s = Xn("--color-muted-600"),
        i = Xn("--color-muted-400");
    return {
        primary: e,
        info: n,
        success: t,
        warning: r,
        danger: o,
        yellow: a,
        title: s,
        subtitle: i
    }
}

function bo() {
    const e = Yn("(max-width: 639px)"),
        t = Yn("(min-width: 640px)"),
        n = Yn("(min-width: 768px)"),
        r = Yn("(min-width: 1025px)"),
        o = Yn("(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)"),
        a = Yn("(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)"),
        s = Yn("(min-width: 1280px)"),
        i = Yn("(min-width: 1536px)");
    return {
        xs: e,
        sm: t,
        md: n,
        lg: r,
        ptablet: o,
        ltablet: a,
        xl: s,
        doublexl: i
    }
}

function Vd() {
    const e = ut(),
        t = j(() => e.tairo.collapse ? .navigation ? .enabled === !1 || e.tairo.collapse ? .navigation ? .items ? .length === 0 ? [] : e.tairo.collapse ? .navigation ? .items ? .map(i => ({ ...i,
            position: i.position ? ? "start"
        }))),
        n = yt("collapse-open", () => !0),
        r = yt("collapse-mobile-open", () => !1),
        o = j(() => e.tairo.collapse ? .navigation ? .header),
        a = j(() => e.tairo.collapse ? .navigation ? .footer);

    function s() {
        const {
            lg: i
        } = bo();
        i.value ? n.value = !n.value : r.value = !r.value
    } {
        const i = Kt(),
            {
                lg: l,
                xl: c
            } = bo();
        Ue(l, u => {
            u && (r.value = !1)
        }), Ue(() => i.fullPath, () => {
            l.value || (r.value = !1)
        })
    }
    return {
        toggle: s,
        menuItems: t,
        isOpen: n,
        isMobileOpen: r,
        header: o,
        footer: a
    }
}
const j$ = {
        key: 0,
        class: "space-y-2"
    },
    B$ = {
        key: 3,
        class: "border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
    },
    H$ = ["onClick"],
    z$ = B("div", {
        class: "mb-2 grow"
    }, null, -1),
    V$ = {
        key: 1,
        class: "space-y-2"
    },
    U$ = {
        key: 3,
        class: "border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
    },
    W$ = ["onClick"],
    q$ = be({
        __name: "TairoCollapseNavigation",
        setup(e) {
            const {
                isOpen: t,
                isMobileOpen: n,
                menuItems: r
            } = Vd(), o = ut(), a = j(() => r.value ? .filter(i => !i.position || i.position === "start")), s = j(() => r.value ? .filter(i => i.position === "end"));
            return (i, l) => {
                const c = M$,
                    u = mr,
                    p = hr;
                return R(), Q("div", {
                    class: K(["dark:bg-muted-800 border-muted-200 dark:border-muted-700 fixed start-0 top-0 z-[60] flex h-full flex-col border-r bg-white transition-all duration-300", [y(t) ? "w-[280px]" : "w-[80px]", y(n) ? "translate-x-0 lg:translate-x-0" : "-translate-x-full lg:translate-x-0"]])
                }, [Fe(i.$slots, "header", {}, () => [y(o).tairo.collapse ? .navigation ? .header ? .component ? (R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(y(o).tairo.collapse ? .navigation ? .header ? .component)), {
                    key: 0
                })) : Te("", !0)]), B("div", {
                    class: K(["nui-slimscroll relative flex w-full grow flex-col overflow-y-auto py-6", y(t) ? "px-6" : "px-4"])
                }, [y(a) ? .length ? (R(), Q("ul", j$, [(R(!0), Q(Le, null, Pt(y(a), (h, v) => (R(), Q("li", {
                    key: v
                }, [h ? .component ? .name ? (R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(h ? .component ? .name)), jt(tn({
                    key: 0
                }, h ? .component ? .props)), null, 16)) : h.children ? (R(), me(c, {
                    key: 1,
                    item: h,
                    expanded: y(t),
                    onClicked: l[0] || (l[0] = _ => t.value = !0)
                }, null, 8, ["item", "expanded"])) : h.to ? (R(), me(p, {
                    key: 2,
                    to: h.to,
                    "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
                    class: K(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", y(t) ? "px-4" : "px-1 justify-center"])
                }, {
                    default: ye(() => [te(u, {
                        name: h.icon.name,
                        class: K(h.icon.class)
                    }, null, 8, ["name", "class"]), B("span", {
                        class: K(["whitespace-nowrap font-sans text-sm", y(t) ? "block" : "hidden"])
                    }, it(h.name), 3)]),
                    _: 2
                }, 1032, ["to", "class"])) : h.divider ? (R(), Q("div", B$)) : (R(), Q("button", {
                    key: 4,
                    class: K(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", y(t) ? "px-4" : "px-1 justify-center"]),
                    onClick: h.click
                }, [te(u, {
                    name: h.icon.name,
                    class: K(h.icon.class)
                }, null, 8, ["name", "class"]), B("span", {
                    class: K(["whitespace-nowrap font-sans text-sm", y(t) ? "block" : "hidden"])
                }, it(h.name), 3)], 10, H$))]))), 128))])) : Te("", !0), z$, y(s) ? .length ? (R(), Q("ul", V$, [(R(!0), Q(Le, null, Pt(y(s), (h, v) => (R(), Q("li", {
                    key: v
                }, [h ? .component ? .name ? (R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(h ? .component ? .name)), jt(tn({
                    key: 0
                }, h ? .component ? .props)), null, 16)) : h.children ? (R(), me(c, {
                    key: 1,
                    item: h,
                    expanded: y(t),
                    onClicked: l[1] || (l[1] = _ => t.value = !0)
                }, null, 8, ["item", "expanded"])) : h.to ? (R(), me(p, {
                    key: 2,
                    to: h.to,
                    "exact-active-class": "!bg-primary-500/10 dark:!bg-primary-500/20 !text-primary-500 dark:!text-primary-500",
                    class: K(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", y(t) ? "px-4" : "px-1 justify-center"])
                }, {
                    default: ye(() => [te(u, {
                        name: h.icon.name,
                        class: K(h.icon.class)
                    }, null, 8, ["name", "class"]), B("span", {
                        class: K(["whitespace-nowrap font-sans text-sm", y(t) ? "block" : "hidden"])
                    }, it(h.name), 3)]),
                    _: 2
                }, 1032, ["to", "class"])) : h.divider ? (R(), Q("div", U$)) : (R(), Q("button", {
                    key: 4,
                    class: K(["nui-focus text-muted-500 dark:text-muted-400/80 hover:bg-muted-100 dark:hover:bg-muted-700/60 hover:text-muted-600 dark:hover:text-muted-200 flex w-full cursor-pointer items-center gap-4 rounded-lg py-3 transition-colors duration-300", y(t) ? "px-4" : "px-1 justify-center"]),
                    onClick: h.click
                }, [te(u, {
                    name: h.icon.name,
                    class: K(h.icon.class)
                }, null, 8, ["name", "class"]), B("span", {
                    class: K(["whitespace-nowrap font-sans text-sm", y(t) ? "block" : "hidden"])
                }, it(h.name), 3)], 10, W$))]))), 128))])) : Te("", !0)], 2), Fe(i.$slots, "footer", {}, () => [y(o).tairo.collapse ? .navigation ? .footer ? .component ? (R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(y(o).tairo.collapse ? .navigation ? .footer ? .component)), {
                    key: 0
                })) : Te("", !0)])], 2)
            }
        }
    }),
    K$ = be({
        __name: "TairoCollapseBurger",
        setup(e) {
            const {
                isOpen: t,
                isMobileOpen: n,
                toggle: r
            } = Vd(), {
                lg: o
            } = bo();
            return (a, s) => (R(), Q("button", {
                type: "button",
                class: "flex h-10 w-10 items-center justify-center",
                onClick: s[0] || (s[0] = () => y(r)())
            }, [B("div", {
                class: K(["relative h-5 w-5", [y(t) && y(o) ? "scale-90" : "", y(n) && !y(o) ? "scale-90" : ""]])
            }, [B("span", {
                class: K(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300", [y(t) && y(o) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5", y(n) && !y(o) ? "top-1 max-w-[75%] -rotate-45 rtl:rotate-45" : "top-0.5"]])
            }, null, 2), B("span", {
                class: K(["bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300", [y(t) && y(o) ? "translate-x-4 opacity-0 rtl:-translate-x-4" : "", y(n) && !y(o) ? "translate-x-4 opacity-0  rtl:-translate-x-4" : ""]])
            }, null, 2), B("span", {
                class: K(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300", [y(t) && y(o) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0", y(n) && !y(o) ? "bottom-1 max-w-[75%] rotate-45 rtl:-rotate-45" : "bottom-0"]])
            }, null, 2)], 2)]))
        }
    }),
    G$ = B("div", {
        class: "ms-auto"
    }, null, -1),
    J$ = be({
        __name: "TairoCollapseToolbar",
        props: {
            collapse: {
                type: Boolean,
                default: !0
            },
            horizontalScroll: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                r = Kt(),
                o = j(() => t.collapse && n.tairo.collapse ? .toolbar ? .showNavBurger);
            return (a, s) => {
                const i = K$,
                    l = ki;
                return R(), Q("div", {
                    class: K(["relative z-50 mb-5 flex h-16 items-center gap-2", t.horizontalScroll && "pe-4 xl:pe-10"])
                }, [y(o) ? (R(), me(i, {
                    key: 0,
                    class: "-ms-3"
                })) : Te("", !0), y(n).tairo.collapse ? .toolbar ? .showTitle ? (R(), me(l, {
                    key: 1,
                    as: "h1",
                    size: "2xl",
                    weight: "light",
                    class: "text-muted-800 hidden dark:text-white md:block"
                }, {
                    default: ye(() => [Fe(a.$slots, "title", {}, () => [et(it(y(r).meta.title), 1)])]),
                    _: 3
                })) : Te("", !0), G$, (R(!0), Q(Le, null, Pt(y(n).tairo.collapse ? .toolbar ? .tools, c => (R(), Q(Le, null, [c.component ? (R(), me(dt(("resolveComponentOrNative" in a ? a.resolveComponentOrNative : y(xt))(c.component)), tn({
                    key: c.component
                }, c.props), null, 16)) : Te("", !0)], 64))), 256))], 2)
            }
        }
    });

function Q$() {
    const e = ut(),
        t = j(() => e.tairo ? .panels ? .map(c => ({ ...c,
            position: c.position ? ? "left",
            overlay: c.overlay ? ? !0
        })) ? ? []),
        n = yt("panels-current-name", () => ""),
        r = yt("panels-transition-from", () => "left"),
        o = yt("panels-overlay", () => !0),
        a = yt("panels-current-props", () => ({})),
        s = j(() => {
            if (n.value) return t.value.find(c => c.name === n.value)
        });

    function i(c, u) {
        const p = t.value.find(({
            name: h
        }) => h === c);
        p && (r.value = p.position, n.value = p.name, o.value = p.overlay, a.value = Yl(u ? ? {}, p.props ? ? {}))
    }

    function l() {
        n.value = ""
    }
    return {
        panels: t,
        current: s,
        transitionFrom: r,
        currentProps: a,
        showOverlay: o,
        open: i,
        close: l
    }
}
const Ud = be({
    __name: "TairoPanels",
    setup(e) {
        const {
            panels: t,
            current: n,
            transitionFrom: r,
            currentProps: o,
            showOverlay: a,
            open: s,
            close: i
        } = Q$();
        return (l, c) => (R(), Q("div", null, [te(To, {
            "enter-active-class": "transition-transform duration-300 ease-out",
            "enter-from-class": y(r) === "left" ? "-translate-x-full rtl:translate-x-full" : "translate-x-full rtl:-translate-x-full",
            "leave-active-class": "transition-transform duration-300 ease-in",
            "leave-to-class": y(r) === "left" ? "-translate-x-full rtl:translate-x-full" : "translate-x-full rtl:-translate-x-full"
        }, {
            default: ye(() => [Fe(l.$slots, "default", jt(mn({
                panels: y(t),
                current: y(n),
                transitionFrom: y(r),
                currentProps: y(o),
                showOverlay: y(a),
                open: y(s),
                close: y(i)
            })), () => [(R(), me(mi, null, {
                default: ye(() => [y(n) ? .component ? (R(), me(dt(("resolveComponentOrNative" in l ? l.resolveComponentOrNative : y(xt))(y(n).component)), tn({
                    key: 0
                }, y(o), {
                    class: ["fixed top-0 z-[100] h-full w-96", [y(n).position === "left" ? "start-0" : "end-0"]]
                }), null, 16, ["class"])) : Te("", !0)]),
                _: 1
            }))])]),
            _: 3
        }, 8, ["enter-from-class", "leave-to-class"]), B("div", {
            class: K(["bg-muted-800/60 fixed start-0 top-0 z-[99] h-full w-full cursor-pointer transition-opacity duration-300", y(n) && y(a) ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"]),
            onClick: c[0] || (c[0] = (...u) => y(i) && y(i)(...u))
        }, null, 2)]))
    }
});

function Wd() {
    const e = Z(0),
        t = Z(0);
    return Rr(window, "scroll", () => {
        e.value = window.scrollX, t.value = window.scrollY
    }, {
        capture: !1,
        passive: !0
    }), vt(() => {
        e.value = window.scrollX, t.value = window.scrollY
    }), {
        x: e,
        y: t
    }
}
const Y$ = be({
        __name: "TairoCollapseCircularMenu",
        setup(e) {
            const {
                y: t
            } = Wd(), n = ut(), r = Z(!1), o = j(() => (t.value < 60 && (r.value = !1), t.value > 60)), a = ["translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]", "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]", "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]", "translate-x-[0em] translate-y-[6.5em]"], s = j(() => n.tairo.collapse ? .circularMenu ? .tools ? .slice(0, 4) || []);
            return (i, l) => (R(), Q("div", {
                class: K(["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:right-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [y(r) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "", y(o) ? "" : "-translate-y-24"]])
            }, [B("button", {
                type: "button",
                class: "bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg",
                onClick: l[0] || (l[0] = c => r.value = !y(r))
            }, [B("span", {
                class: K(["relative block h-3 w-3 transition-all duration-300", y(r) ? "scale-90 top-0" : "-top-0.5"])
            }, [B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "-rotate-45 top-1" : "top-0.5"])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300", y(r) ? "opacity-0 translate-x-4" : ""])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "rotate-45 bottom-1.5" : "bottom-0"])
            }, null, 2)], 2)]), B("div", null, [(R(!0), Q(Le, null, Pt(y(s), (c, u) => (R(), Q(Le, null, [c.component ? (R(), Q("div", {
                key: c.component,
                class: K(["absolute right-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300", y(r) ? a[u] : "translate-x-0 translate-y-0"])
            }, [(R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(c.component)), jt(mn(c.props)), null, 16))], 2)) : Te("", !0)], 64))), 256))])], 2))
        }
    }),
    X$ = {
        class: "bg-muted-100 dark:bg-muted-900 pb-20"
    },
    Z$ = be({
        __name: "TairoCollapseLayout",
        props: {
            collapse: {
                type: Boolean,
                default: !0
            },
            toolbar: {
                type: Boolean,
                default: !0
            },
            circularMenu: {
                type: Boolean,
                default: !0
            },
            condensed: {
                type: Boolean
            },
            horizontalScroll: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                {
                    isOpen: r,
                    isMobileOpen: o,
                    toggle: a
                } = Vd(),
                s = j(() => n.tairo.collapse ? .navigation ? .enabled !== !1 && t.collapse !== !1),
                i = j(() => n.tairo.collapse ? .toolbar ? .enabled !== !1 && t.toolbar !== !1),
                l = j(() => n.tairo.collapse ? .circularMenu ? .enabled !== !1 && t.circularMenu !== !1),
                c = j(() => {
                    if (t.condensed) return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
                    if (!s.value) return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
                    const u = ["bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"];
                    return r.value ? u.push("lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]") : u.push("lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]"), t.horizontalScroll && u.push("!pe-0 xl:!pe-0"), u
                });
            return (u, p) => {
                const h = q$,
                    v = J$,
                    _ = Ud,
                    g = Y$;
                return R(), Q("div", X$, [Fe(u.$slots, "navigation", {}, () => [y(s) ? (R(), me(h, {
                    key: 0
                })) : Te("", !0), B("div", {
                    role: "button",
                    class: K(["bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden", y(o) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none"]),
                    onClick: p[0] || (p[0] = (...P) => y(a) && y(a)(...P))
                }, null, 2)]), B("div", {
                    class: K(y(c))
                }, [B("div", {
                    class: K([t.condensed && !t.horizontalScroll && "w-full", !t.condensed && t.horizontalScroll && "mx-auto w-full", !t.condensed && !t.horizontalScroll && "mx-auto w-full max-w-7xl"])
                }, [Fe(u.$slots, "toolbar", {}, () => [y(i) ? (R(), me(v, {
                    key: 0,
                    collapse: t.collapse,
                    "horizontal-scroll": t.horizontalScroll
                }, {
                    title: ye(() => [Fe(u.$slots, "toolbar-title")]),
                    _: 3
                }, 8, ["collapse", "horizontal-scroll"])) : Te("", !0)]), Fe(u.$slots, "default")], 2)], 2), te(_), y(l) ? (R(), me(g, {
                    key: 0
                })) : Te("", !0)])
            }
        }
    });

function Ei() {
    const e = ut(),
        t = Kt(),
        n = j(() => e.tairo.sidebar ? .navigation ? .enabled === !1 || e.tairo.sidebar ? .navigation ? .items ? .length === 0 ? [] : e.tairo.sidebar ? .navigation ? .items),
        r = yt("sidebar-name", () => ""),
        o = yt("sidebar-open", () => {}),
        a = j(() => n.value ? .some(h => h.subsidebar ? .component)),
        s = j(() => {
            if (r.value) return n.value ? .find(({
                title: h
            }) => h === r.value)
        });

    function i() {
        if (!r.value && !o.value) {
            if (!n.value ? .[0] ? .title) return;
            r.value = n.value[0].title
        }
        o.value = !o.value
    }

    function l(h = !1) {
        o.value = !1, h && (r.value = "")
    }

    function c(h) {
        r.value = h, o.value = !0
    }

    function u() {
        if (!e.tairo.sidebar ? .navigation ? .startOpen) {
            o.value = !1;
            return
        }
        const h = n.value ? .find(v => v ? .activePath && t.fullPath.startsWith(v.activePath));
        if (h) {
            r.value = h.title; {
                const v = bo().xl.value;
                o.value = !!r.value && v
            }
        }
    }

    function p() {
        const v = tt().hook("page:finish", g => {
                u(), v()
            }),
            {
                xl: _
            } = bo();
        Ue(_, g => {
            g || (o.value = !1)
        }), Ue(() => r, g => {
            g ? _.value && (o.value = !0) : o.value = !1
        })
    }
    return {
        sidebars: n,
        hasSubsidebar: a,
        current: s,
        currentName: r,
        isOpen: o,
        toggle: i,
        close: l,
        open: c,
        detect: u,
        setup: p
    }
}
const eS = {
        class: "flex h-16 w-full items-center justify-center"
    },
    tS = ["data-nui-tooltip"],
    nS = be({
        __name: "TairoSidebarNavigationItem",
        props: {
            sidebar: {}
        },
        setup(e) {
            const t = e,
                {
                    currentName: n,
                    isOpen: r
                } = Ei();

            function o() {
                if (typeof t.sidebar.click == "function") return t.sidebar.click();
                n.value = t.sidebar.title, r.value = !0
            }
            return (a, s) => {
                const i = mr,
                    l = hr;
                return R(), Q("div", eS, [B("span", null, it(t.sidebar.order), 1), t.sidebar.component ? (R(), me(dt(("resolveComponentOrNative" in a ? a.resolveComponentOrNative : y(xt))(t.sidebar.component)), jt(tn({
                    key: 0
                }, t.sidebar.props)), null, 16)) : t.sidebar.to && t.sidebar.icon ? (R(), me(l, {
                    key: 1,
                    to: t.sidebar.to,
                    class: "text-muted-400 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
                    "data-nui-tooltip-position": "right",
                    "data-nui-tooltip": t.sidebar.title
                }, {
                    default: ye(() => [te(i, jt(mn(t.sidebar.icon)), null, 16)]),
                    _: 1
                }, 8, ["to", "data-nui-tooltip"])) : t.sidebar.icon ? (R(), Q("button", {
                    key: 2,
                    type: "button",
                    class: K(["flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300", y(n) === t.sidebar.title ? "bg-primary-100 text-primary-500 dark:bg-primary-500/10" : "text-muted-400"]),
                    "data-nui-tooltip-position": "right",
                    "data-nui-tooltip": t.sidebar.title,
                    onClick: o
                }, [te(i, jt(mn(t.sidebar.icon)), null, 16)], 10, tS)) : Te("", !0)])
            }
        }
    }),
    rS = {
        class: "pointer-events-none fixed start-0 top-0 z-[60] flex h-full xl:z-10"
    },
    oS = {
        class: "mt-auto"
    },
    aS = be({
        __name: "TairoSidebarNavigation",
        props: {
            subsidebar: {
                type: Boolean,
                default: !0
            },
            expanded: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                {
                    isOpen: n,
                    current: r,
                    sidebars: o
                } = Ei(),
                a = j(() => o.value ? .filter(l => !l.position || l.position === "start")),
                s = j(() => o.value ? .filter(l => l.position === "end")),
                i = j(() => !!(t.subsidebar !== !1 && r.value ? .subsidebar ? .component));
            return (l, c) => {
                const u = nS;
                return R(), Q("div", rS, [B("div", {
                    class: K(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-20 flex h-full w-[80px] flex-col border-r bg-white transition-all duration-300", y(n) ? "" : "-translate-x-full rtl:translate-x-full xl:translate-x-0 rtl:xl:-translate-x-0"])
                }, [Fe(l.$slots, "default"), B("div", null, [Fe(l.$slots, "top"), (R(!0), Q(Le, null, Pt(y(a), p => (R(), me(u, {
                    key: p.title,
                    sidebar: p
                }, null, 8, ["sidebar"]))), 128))]), B("div", oS, [(R(!0), Q(Le, null, Pt(y(s), p => (R(), me(u, {
                    key: p.title,
                    sidebar: p
                }, null, 8, ["sidebar"]))), 128)), Fe(l.$slots, "end")])], 2), y(i) ? (R(), Q("div", {
                    key: 0,
                    class: K(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 pointer-events-auto relative z-10 h-full w-[220px] border-r bg-white transition-all duration-300", y(n) ? "" : "rtl:translate-x-[calc(100%_+_80px)] translate-x-[calc(-100%_-_80px)]"])
                }, [Fe(l.$slots, "subnav", {}, () => [(R(), me(Hm, null, [y(r) ? .subsidebar ? .component ? (R(), me(dt(("resolveComponentOrNative" in l ? l.resolveComponentOrNative : y(xt))(y(r).subsidebar ? .component)), {
                    key: y(r) ? .subsidebar ? .component
                })) : Te("", !0)], 1024))])], 2)) : Te("", !0)])
            }
        }
    }),
    sS = be({
        __name: "TairoSidebarBurger",
        setup(e) {
            const {
                isOpen: t,
                toggle: n
            } = Ei();
            return (r, o) => (R(), Q("button", {
                type: "button",
                class: "flex h-10 w-10 items-center justify-center",
                onClick: o[0] || (o[0] = (...a) => y(n) && y(n)(...a))
            }, [B("div", {
                class: K(["relative h-5 w-5", y(t) ? "scale-90" : ""])
            }, [B("span", {
                class: K(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300", y(t) ? "-rotate-45 rtl:rotate-45 max-w-[75%] top-1" : "top-0.5"])
            }, null, 2), B("span", {
                class: K(["bg-primary-500 absolute top-1/2 block h-0.5 w-full max-w-[50%] transition-all duration-300", y(t) ? "opacity-0 translate-x-4 rtl:-translate-x-4" : ""])
            }, null, 2), B("span", {
                class: K(["bg-primary-500 absolute block h-0.5 w-full transition-all duration-300", y(t) ? "rotate-45 rtl:-rotate-45 max-w-[75%] bottom-1" : "bottom-0"])
            }, null, 2)], 2)]))
        }
    }),
    iS = {
        class: "flex items-center gap-2"
    },
    lS = be({
        __name: "TairoSidebarTools",
        setup(e) {
            const t = ut();
            return (n, r) => (R(), Q("div", iS, [(R(!0), Q(Le, null, Pt(y(t).tairo.sidebar ? .toolbar ? .tools, o => (R(), Q(Le, null, [o.component ? (R(), me(dt(("resolveComponentOrNative" in n ? n.resolveComponentOrNative : y(xt))(o.component)), tn({
                key: o.component
            }, o.props), null, 16)) : Te("", !0)], 64))), 256))]))
        }
    }),
    cS = B("div", {
        class: "ms-auto"
    }, null, -1),
    uS = be({
        __name: "TairoSidebarToolbar",
        props: {
            sidebar: {
                type: Boolean,
                default: !0
            },
            horizontalScroll: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                {
                    hasSubsidebar: r
                } = Ei(),
                o = Kt(),
                a = j(() => t.sidebar && n.tairo.sidebar ? .toolbar ? .showNavBurger && r.value);
            return (s, i) => {
                const l = sS,
                    c = ki,
                    u = lS;
                return R(), Q("div", {
                    class: K(["relative z-50 mb-5 flex h-16 items-center gap-2", t.horizontalScroll && "pe-4 xl:pe-10"])
                }, [y(a) ? (R(), me(l, {
                    key: 0,
                    class: "-ms-3"
                })) : Te("", !0), y(n).tairo.sidebar ? .toolbar ? .showTitle ? (R(), me(c, {
                    key: 1,
                    as: "h1",
                    size: "2xl",
                    weight: "light",
                    class: "text-muted-800 hidden dark:text-white md:block"
                }, {
                    default: ye(() => [Fe(s.$slots, "title", {}, () => [et(it(y(o).meta.title), 1)])]),
                    _: 3
                })) : Te("", !0), cS, te(u, {
                    class: "h-16"
                })], 2)
            }
        }
    }),
    dS = be({
        __name: "TairoSidebarCircularMenu",
        setup(e) {
            const {
                y: t
            } = Wd(), n = ut(), r = Z(!1), o = j(() => (t.value < 60 && (r.value = !1), t.value > 60)), a = ["translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]", "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]", "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]", "translate-x-[0em] translate-y-[6.5em]"], s = j(() => n.tairo ? .sidebar ? .circularMenu ? .tools ? .slice(0, 4) || []);
            return (i, l) => (R(), Q("div", {
                class: K(["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed end-[1em] top-[0.6em] z-[90] transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [y(r) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "", y(o) ? "" : "-translate-y-24"]])
            }, [B("button", {
                type: "button",
                class: "bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg",
                onClick: l[0] || (l[0] = c => r.value = !y(r))
            }, [B("span", {
                class: K(["relative block h-3 w-3 transition-all duration-300", y(r) ? "scale-90 top-0" : "-top-0.5"])
            }, [B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "-rotate-45 top-1" : "top-0.5"])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300", y(r) ? "opacity-0 translate-x-4" : ""])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "rotate-45 bottom-1.5" : "bottom-0"])
            }, null, 2)], 2)]), B("div", null, [(R(!0), Q(Le, null, Pt(y(s), (c, u) => (R(), Q(Le, null, [c.component ? (R(), Q("div", {
                key: c.component,
                class: K(["absolute end-[0.2em] top-[0.2em] z-20 flex items-center justify-center transition-all duration-300", y(r) ? a[u] : "translate-x-0 translate-y-0"])
            }, [(R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(c.component)), jt(mn(c.props)), null, 16))], 2)) : Te("", !0)], 64))), 256))])], 2))
        }
    }),
    fS = {
        class: "bg-muted-100 dark:bg-muted-900 pb-20"
    },
    pS = {
        key: 0,
        class: "flex h-16 w-full items-center justify-center"
    },
    Xu = be({
        __name: "TairoSidebarLayout",
        props: {
            sidebar: {
                type: Boolean,
                default: !0
            },
            subsidebar: {
                type: Boolean,
                default: !0
            },
            toolbar: {
                type: Boolean,
                default: !0
            },
            circularMenu: {
                type: Boolean,
                default: !0
            },
            condensed: {
                type: Boolean
            },
            horizontalScroll: {
                type: Boolean
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                {
                    setup: r,
                    currentName: o,
                    isOpen: a,
                    toggle: s
                } = Ei();
            r(), Rt(() => {
                o.value = "", a.value = void 0
            });
            const i = j(() => n.tairo.sidebar ? .navigation ? .enabled !== !1 && t.sidebar !== !1),
                l = j(() => n.tairo.sidebar ? .toolbar ? .enabled !== !1 && t.toolbar !== !1),
                c = j(() => n.tairo.sidebar ? .circularMenu ? .enabled !== !1 && t.circularMenu !== !1),
                u = j(() => {
                    if (t.condensed) return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
                    if (!i.value) return "bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
                    const p = ["bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"];
                    return a.value ? p.push("xl:max-w-[calc(100%_-_300px)] xl:ms-[300px]") : p.push("xl:max-w-[calc(100%_-_80px)] xl:ms-[80px]"), t.horizontalScroll && p.push("!pe-0 xl:!pe-0"), p
                });
            return (p, h) => {
                const v = hr,
                    _ = aS,
                    g = uS,
                    P = Ud,
                    S = dS;
                return R(), Q("div", fS, [Fe(p.$slots, "sidebar", {}, () => [y(i) ? (R(), me(_, {
                    key: 0,
                    subsidebar: t.subsidebar
                }, {
                    default: ye(() => [y(n).tairo.sidebar ? .navigation ? .logo ? .component ? (R(), Q("div", pS, [Fe(p.$slots, "logo", {}, () => [te(v, {
                        to: "/",
                        class: "flex items-center justify-center"
                    }, {
                        default: ye(() => [(R(), me(dt(("resolveComponentOrNative" in p ? p.resolveComponentOrNative : y(xt))(y(n).tairo.sidebar ? .navigation.logo.component)), jt(mn(y(n).tairo.sidebar ? .navigation.logo.props)), null, 16))]),
                        _: 1
                    })])])) : Te("", !0)]),
                    _: 3
                }, 8, ["subsidebar"])) : Te("", !0), B("div", {
                    role: "button",
                    class: K(["bg-muted-800 dark:bg-muted-900 fixed start-0 top-0 z-[59] block h-full w-full transition-opacity duration-300 lg:hidden", y(a) ? "opacity-50 dark:opacity-75" : "opacity-0 pointer-events-none"]),
                    onClick: h[0] || (h[0] = (...x) => y(s) && y(s)(...x))
                }, null, 2)]), B("div", {
                    class: K(y(u))
                }, [B("div", {
                    class: K([t.condensed && !t.horizontalScroll && "w-full", !t.condensed && t.horizontalScroll && "mx-auto w-full", !t.condensed && !t.horizontalScroll && "mx-auto w-full max-w-7xl"])
                }, [Fe(p.$slots, "toolbar", {}, () => [y(l) ? (R(), me(g, {
                    key: 0,
                    sidebar: t.sidebar,
                    "horizontal-scroll": t.horizontalScroll
                }, {
                    title: ye(() => [Fe(p.$slots, "toolbar-title")]),
                    _: 3
                }, 8, ["sidebar", "horizontal-scroll"])) : Te("", !0)]), B("main", null, [Fe(p.$slots, "default")])], 2)], 2), te(P), y(c) ? (R(), me(S, {
                    key: 0
                })) : Te("", !0)])
            }
        }
    }),
    hS = (e, {
        externalDefaultRelationship: t = "noopener noreferrer",
        externalDefaultTarget: n = "_blank"
    } = {}) => {
        const r = m0({}),
            o = j(() => e.to ? r : e.href ? "a" : "button"),
            a = j(() => {
                if (o.value === "button") return e.type || "button"
            }),
            s = j(() => typeof e.to == "string" && e.to.startsWith("http") ? !0 : !!(typeof e.to == "object" && "path" in e.to && e.to.path.startsWith("http"))),
            i = j(() => s.value ? e.rel ? ? t : e.rel),
            l = j(() => s.value ? e.target ? ? n : e.target);
        return {
            attributes: j(() => ({
                to: e.disabled ? void 0 : e.to,
                href: e.disabled ? void 0 : e.href,
                disabled: e.disabled,
                type: a.value,
                rel: i.value,
                target: l.value
            })),
            is: o
        }
    },
    mS = {
        key: 0,
        class: "nui-button-badge-pulse"
    },
    gS = B("span", {
        class: "nui-button-badge-inner"
    }, null, -1),
    pv = be({
        __name: "BaseButton",
        props: {
            type: {
                default: void 0
            },
            to: {
                default: void 0
            },
            href: {
                default: void 0
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            rel: {
                default: ""
            },
            target: {
                default: ""
            },
            size: {
                default: "md"
            },
            flavor: {
                default: "solid"
            },
            color: {
                default: "default"
            },
            shape: {
                default: void 0
            },
            loading: {
                type: Boolean
            },
            badge: {
                type: Boolean,
                default: !1
            },
            badgePulse: {
                type: Boolean,
                default: !1
            },
            shadow: {
                default: void 0
            }
        },
        setup(e) {
            const t = e,
                n = ut(),
                r = j(() => t.shape ? ? n.nui.defaultShapes ? .button),
                o = {
                    primary: "nui-badge-primary",
                    info: "nui-badge-info",
                    success: "nui-badge-success",
                    warning: "nui-badge-warning",
                    danger: "nui-badge-danger",
                    none: "",
                    default: "",
                    light: "",
                    muted: ""
                },
                a = {
                    sm: "nui-button-small",
                    md: "nui-button-medium",
                    lg: "nui-button-large",
                    xl: "nui-button-big"
                },
                s = {
                    straight: "",
                    rounded: "nui-button-rounded",
                    curved: "nui-button-curved",
                    smooth: "nui-button-smooth",
                    full: "nui-button-full"
                },
                i = {
                    solid: "nui-button-solid",
                    pastel: "nui-button-pastel",
                    outline: "nui-button-outline"
                },
                l = {
                    none: "",
                    default: "nui-button-default",
                    primary: "nui-button-primary",
                    info: "nui-button-info",
                    success: "nui-button-success",
                    warning: "nui-button-warning",
                    danger: "nui-button-danger",
                    light: "nui-button-light",
                    muted: "nui-button-muted"
                },
                c = {
                    flat: "nui-button-shadow",
                    hover: "nui-button-shadow-hover"
                },
                u = j(() => t.badge && ["default", "light", "muted", "none"].includes(t.color) ? "" : `nui-button-badge ${o[t.color]}`),
                p = j(() => ["nui-button", t.loading && "nui-button-loading", a[t.size], r.value && s[r.value], i[t.flavor], l[t.color], t.shadow && c[t.shadow]]),
                {
                    attributes: h,
                    is: v
                } = hS(t);
            return (_, g) => {
                const P = b0;
                return R(), me(dt(y(v)), tn(y(h), {
                    class: y(p)
                }), {
                    default: ye(() => [t.loading ? (R(), me(P, {
                        key: 1,
                        class: "h-4 w-12 rounded"
                    })) : Fe(_.$slots, "default", {
                        key: 0
                    }), t.badge ? (R(), Q("span", {
                        key: 2,
                        class: K(y(u))
                    }, [t.badgePulse ? (R(), Q("span", mS)) : Te("", !0), gS], 2)) : Te("", !0)]),
                    _: 3
                }, 16, ["class"])
            }
        }
    });

function hv() {
    const e = Kt(),
        t = ut(),
        n = j(() => t.tairo.topnav ? .navigation ? .enabled === !1 || t.tairo.topnav ? .navigation ? .items ? .length === 0 ? [] : t.tairo.topnav ? .navigation ? .items ? .map(s => ({ ...s
        }))),
        r = yt("collapse-open", () => !1),
        o = j(() => n.value ? .find(s => s.activePath ? e.path.startsWith(s.activePath) : s.to ? e.path.startsWith(s.to.toString()) : !1)),
        a = yt("topnav-selected-menu-item", () => o.value);
    return Ue(o, s => {
        a.value = s
    }), bo(), {
        menuItems: n,
        activeMenuItem: o,
        selectedMenuItem: a,
        isMobileOpen: r
    }
}
const vS = {
        class: "flex w-full flex-col items-center justify-between md:h-16 md:flex-row"
    },
    _S = {
        class: "w-full grow md:w-auto"
    },
    bS = {
        class: "me-auto block md:hidden"
    },
    yS = {
        class: "flex overflow-x-auto lg:overflow-x-hidden"
    },
    wS = be({
        __name: "TairoTopnavNavigation",
        props: {
            display: {
                default: "expanded-md"
            },
            position: {
                default: "absolute"
            }
        },
        setup(e) {
            const t = e,
                {
                    menuItems: n,
                    isMobileOpen: r
                } = hv();
            return ut(), (o, a) => {
                const s = dv,
                    i = pv,
                    l = Md,
                    c = hr;
                return R(), Q("div", {
                    class: K(["dark:bg-muted-800 border-muted-200 dark:border-muted-700 left-0 top-0 z-40 w-full border-b bg-white transition-all duration-300", [t.position === "fixed" && "fixed", t.position === "absolute" && "absolute"]])
                }, [B("nav", {
                    class: K(["relative", [t.display === "condensed" && "w-full", t.display === "horizontal-scroll" && "mx-auto w-full pe-4", t.display === "expanded-sm" && "mx-auto w-full max-w-5xl px-4 lg:px-0", t.display === "expanded-md" && "mx-auto w-full max-w-6xl px-4 lg:px-0", t.display === "expanded-lg" && "mx-auto w-full max-w-7xl px-4 lg:px-0", t.display === "expanded-xl" && "mx-auto w-full px-4 lg:px-0"]])
                }, [B("div", vS, [B("div", _S, [Fe(o.$slots, "default")]), B("div", {
                    class: K(["dark:bg-muted-800 fixed start-0 top-0 z-20 w-full grow items-center bg-white p-3 md:static md:z-0 md:block md:w-auto md:bg-transparent md:p-0", y(r) ? "flex" : "hidden"])
                }, [B("div", bS, [te(s, {
                    color: "muted",
                    shape: "full",
                    onClick: a[0] || (a[0] = u => r.value = !1)
                })]), Fe(o.$slots, "toolbar", {}, () => [te(i, {
                    to: "#",
                    color: "primary"
                }, {
                    default: ye(() => [et("Get Started")]),
                    _: 1
                })])], 2)])], 2), B("div", {
                    class: K(["flex items-center", [t.display === "condensed" && "w-full", t.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto", t.display === "expanded-sm" && "mx-auto w-full max-w-5xl", t.display === "expanded-md" && "mx-auto w-full max-w-6xl", t.display === "expanded-lg" && "mx-auto w-full max-w-7xl", t.display === "expanded-xl" && "mx-auto w-full"]])
                }, [B("div", yS, [(R(!0), Q(Le, null, Pt(y(n), (u, p) => (R(), me(c, {
                    key: p,
                    to: u.to,
                    class: "text-muted-400 hover:text-muted-500 dark:text-muted-500 dark:hover:text-muted-400 flex items-center justify-center border-b-2 border-transparent p-3 text-center transition-colors duration-300",
                    "exact-active-class": "!border-primary-500 !text-muted-800 dark:!text-muted-100"
                }, {
                    default: ye(() => [te(l, {
                        size: "sm"
                    }, {
                        default: ye(() => [et(it(u.name), 1)]),
                        _: 2
                    }, 1024)]),
                    _: 2
                }, 1032, ["to"]))), 128))])], 2)], 2)
            }
        }
    }),
    xS = be({
        __name: "TairoTopnavCircularMenu",
        setup(e) {
            const {
                y: t
            } = Wd(), n = ut(), r = Z(!1), o = j(() => (t.value < 60 && (r.value = !1), t.value > 60)), a = ["translate-x-[-6.5em] rtl:translate-x-[6.5em] translate-y-[-0.25em]", "translate-x-[-5.75em] rtl:translate-x-[5.75em] translate-y-[3em]", "translate-x-[-3.15em] rtl:translate-x-[3.15em] translate-y-[5.5em]", "translate-x-[0em] translate-y-[6.5em]"], s = j(() => n.tairo.collapse ? .circularMenu ? .tools ? .slice(0, 4) || []);
            return (i, l) => (R(), Q("div", {
                class: K(["after:bg-primary-600 after:shadow-primary-500/50 dark:after:shadow-muted-800/10 fixed bottom-[0.6em] end-[1em] z-[90] rotate-90 transition-transform duration-300 after:absolute after:end-0 after:top-0 after:block after:h-12 after:w-12 after:rounded-full after:shadow-lg after:transition-transform after:duration-300 after:content-['']", [y(r) ? "after:ease-[cubic-bezier(0.68, 1.55, 0.265, 1)] after:scale-[5.5]" : "", y(o) ? "" : "translate-y-24"]])
            }, [B("button", {
                type: "button",
                class: "bg-primary-500 shadow-primary-500/50 dark:shadow-muted-800/10 relative z-30 flex h-12 w-12 -rotate-90 items-center justify-center rounded-full text-white shadow-lg",
                onClick: l[0] || (l[0] = c => r.value = !y(r))
            }, [B("span", {
                class: K(["relative block h-3 w-3 transition-all duration-300", y(r) ? "scale-90 top-0" : "-top-0.5"])
            }, [B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "-rotate-45 top-1" : "top-0.5"])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute top-1/2 block h-0.5 w-full transition-all duration-300", y(r) ? "opacity-0 translate-x-4" : ""])
            }, null, 2), B("span", {
                class: K(["bg-muted-50 absolute block h-0.5 w-full transition-all duration-300", y(r) ? "rotate-45 bottom-1.5" : "bottom-0"])
            }, null, 2)], 2)]), B("div", null, [(R(!0), Q(Le, null, Pt(y(s), (c, u) => (R(), Q(Le, null, [c.component ? (R(), Q("div", {
                key: c.component,
                class: K(["absolute end-[0.2em] top-[0.2em] z-20 flex -rotate-90 items-center justify-center transition-all duration-300", y(r) ? a[u] : "translate-x-0 translate-y-0"])
            }, [(R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(c.component)), jt(mn(c.props)), null, 16))], 2)) : Te("", !0)], 64))), 256))])], 2))
        }
    }),
    kS = {
        class: "dark:bg-muted-900 border-muted-200 dark:border-muted-700 bg-muted-50 relative border-t"
    },
    ES = {
        key: 1,
        class: "ltablet:w-1/5 block w-full lg:w-1/5"
    },
    TS = {
        class: "ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:gap-6"
    },
    CS = {
        class: "text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end"
    },
    PS = {
        key: 0,
        class: "inline-flex gap-1"
    },
    $S = B("span", null, "©", -1),
    SS = {
        key: 0
    },
    AS = be({
        __name: "TairoTopnavFooter",
        props: {
            display: {
                default: "expanded-lg"
            }
        },
        setup(e) {
            const t = e,
                n = ut().tairo.topnav ? .footer,
                r = new Date().getFullYear();
            return (o, a) => {
                const s = hr;
                return R(), Q("footer", kS, [y(n) ? .logoSeparator ? .component ? (R(), me(s, {
                    key: 0,
                    to: "/",
                    "aria-label": "Go to Homepage",
                    class: "dark:bg-muted-900 bg-muted-50 absolute inset-x-0 -top-4 mx-auto flex h-9 w-14 items-center justify-center"
                }, {
                    default: ye(() => [(R(), me(dt(("resolveComponentOrNative" in o ? o.resolveComponentOrNative : y(xt))(y(n).logoSeparator.component)), jt(mn(y(n).logoSeparator.props)), null, 16))]),
                    _: 1
                })) : Te("", !0), B("div", {
                    class: K(["ltablet:flex-row mx-auto flex flex-col items-center justify-between px-6 py-8 lg:flex-row", [t.display === "expanded-sm" && "mx-auto w-full max-w-5xl", t.display === "expanded-md" && "mx-auto w-full max-w-6xl", t.display === "expanded-lg" && "mx-auto w-full max-w-7xl", t.display === "expanded-xl" && "mx-auto w-full"]])
                }, [y(n) ? .logo ? .component ? (R(), me(s, {
                    key: 0,
                    to: "/",
                    "aria-label": "Go to Homepage",
                    class: "ltablet:w-1/5 block w-full lg:w-1/5"
                }, {
                    default: ye(() => [(R(), me(dt(("resolveComponentOrNative" in o ? o.resolveComponentOrNative : y(xt))(y(n).logo.component)), jt(mn(y(n).logo.props)), null, 16))]),
                    _: 1
                })) : (R(), Q("div", ES)), B("div", TS, [(R(!0), Q(Le, null, Pt(y(n) ? .links, i => (R(), me(s, {
                    key: i.to,
                    to: i.to,
                    rel: i.rel,
                    target: i.target,
                    class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
                }, {
                    default: ye(() => [et(it(i.name), 1)]),
                    _: 2
                }, 1032, ["to", "rel", "target"]))), 128))]), B("div", CS, [y(n) ? .copyright ? .name && y(n) ? .copyright ? .to ? (R(), Q("span", PS, [$S, te(s, {
                    to: y(n).copyright.to,
                    target: "_blank",
                    rel: "noopener",
                    class: "text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300"
                }, {
                    default: ye(() => [et(it(y(n).copyright.name), 1)]),
                    _: 1
                }, 8, ["to"]), y(n) ? .copyright ? .since ? (R(), Q("span", SS, it(y(n).copyright.since) + "-" + it(y(r)) + ".", 1)) : Te("", !0)])) : Te("", !0)])], 2)])
            }
        }
    }),
    LS = {
        class: "dark:bg-muted-900 bg-muted-50 pb-20"
    },
    OS = {
        key: 0,
        class: "flex h-16 w-full items-center gap-x-4"
    },
    RS = {
        class: "flex items-center justify-center md:hidden"
    },
    DS = {
        key: 0
    },
    IS = {
        class: "flex items-center justify-end gap-4 md:gap-2"
    },
    MS = be({
        __name: "TairoTopnavLayout",
        props: {
            topnav: {
                type: Boolean,
                default: !0
            },
            toolbar: {
                type: Boolean,
                default: !0
            },
            circularMenu: {
                type: Boolean,
                default: !0
            },
            display: {
                default: "expanded-lg"
            }
        },
        setup(e) {
            const t = e,
                n = Kt(),
                r = ut().tairo.topnav,
                {
                    isMobileOpen: o
                } = hv(),
                a = j(() => r ? .navigation ? .enabled !== !1 && t.topnav !== !1),
                s = j(() => r ? .toolbar ? .enabled !== !1 && t.toolbar !== !1),
                i = j(() => r ? .circularMenu ? .enabled !== !1 && t.circularMenu !== !1),
                l = j(() => {
                    if (t.display === "condensed") return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden";
                    if (!a.value) return "bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10";
                    const c = ["bg-muted-50 dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10"];
                    return t.display === "horizontal-scroll" && c.push("!pe-0 xl:!pe-0"), c
                });
            return (c, u) => {
                const p = hr,
                    h = ki,
                    v = mr,
                    _ = wS,
                    g = Ud,
                    P = xS,
                    S = AS;
                return R(), Q("div", null, [B("div", LS, [Fe(c.$slots, "navigation", {}, () => [y(a) ? (R(), me(_, {
                    key: 0,
                    display: t.display,
                    position: "fixed"
                }, {
                    toolbar: ye(() => [y(s) ? (R(), Q("div", DS, [B("div", IS, [(R(!0), Q(Le, null, Pt(y(r) ? .toolbar ? .tools, x => (R(), Q(Le, null, [x.component ? (R(), me(dt(("resolveComponentOrNative" in c ? c.resolveComponentOrNative : y(xt))(x.component)), tn({
                        key: x.component
                    }, x.props), null, 16)) : Te("", !0)], 64))), 256))])])) : Te("", !0)]),
                    default: ye(() => [y(r) ? .navigation ? .logo ? .component ? (R(), Q("div", OS, [te(p, {
                        to: "/",
                        class: "flex items-center justify-center"
                    }, {
                        default: ye(() => [(R(), me(dt(("resolveComponentOrNative" in c ? c.resolveComponentOrNative : y(xt))(y(r) ? .navigation.logo.component)), jt(mn(y(r) ? .navigation.logo.props)), null, 16))]),
                        _: 1
                    }), y(r) ? .toolbar ? .showTitle ? (R(), me(h, {
                        key: 0,
                        as: "h1",
                        size: "lg",
                        weight: "light",
                        class: "text-muted-800 hidden dark:text-white md:block"
                    }, {
                        default: ye(() => [Fe(c.$slots, "title", {}, () => [et(it(y(n).meta.title), 1)])]),
                        _: 3
                    })) : Te("", !0), y(r) ? .navigation ? .header ? .component ? (R(), me(dt(("resolveComponentOrNative" in c ? c.resolveComponentOrNative : y(xt))(y(r) ? .navigation ? .header ? .component)), jt(tn({
                        key: 1
                    }, y(r) ? .navigation ? .header ? .props)), null, 16)) : Te("", !0), B("div", RS, [B("button", {
                        type: "button",
                        onClick: u[0] || (u[0] = x => o.value = !0)
                    }, [te(v, {
                        name: "lucide:menu",
                        class: "text-muted-400 h-6 w-6"
                    })])])])) : Te("", !0)]),
                    _: 3
                }, 8, ["display"])) : Te("", !0)]), B("div", {
                    class: K(y(l))
                }, [B("div", {
                    class: K(["pt-40 md:pt-36", [t.display === "condensed" && "w-full", t.display === "horizontal-scroll" && "mx-auto w-full overflow-x-auto", t.display === "expanded-sm" && "mx-auto w-full max-w-5xl", t.display === "expanded-md" && "mx-auto w-full max-w-6xl", t.display === "expanded-lg" && "mx-auto w-full max-w-7xl", t.display === "expanded-xl" && "mx-auto w-full"]])
                }, [Fe(c.$slots, "default")], 2)], 2), te(g), y(i) ? (R(), me(P, {
                    key: 0
                })) : Te("", !0)]), y(r) ? .footer ? .enabled ? (R(), me(S, {
                    key: 0,
                    display: t.display
                }, null, 8, ["display"])) : Te("", !0)])
            }
        }
    });

function FS() {
    const e = [{
            name: "sidebar",
            label: "Sidebar",
            component: Xu
        }, {
            name: "collapse",
            label: "Collapse",
            component: Z$
        }, {
            name: "topnav",
            label: "Top navigation",
            component: MS
        }],
        t = yt("layout-switcher-active", () => "sidebar"),
        n = j(() => e.find(o => o.name === t.value)),
        r = j(() => n.value ? .component || Xu);
    return {
        layouts: e,
        activeLayout: n,
        activeLayoutName: t,
        activeLayoutComponent: r
    }
}
var NS = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function mv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function J6(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function r() {
            if (this instanceof r) {
                var o = [null];
                o.push.apply(o, arguments);
                var a = Function.bind.apply(t, o);
                return new a
            }
            return t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(r) {
        var o = Object.getOwnPropertyDescriptor(e, r);
        Object.defineProperty(n, r, o.get ? o : {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    }), n
}
var gv = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })(NS, function() {
        for (var n = function(d, f, m) {
                return f === void 0 && (f = 0), m === void 0 && (m = 1), d < f ? f : d > m ? m : d
            }, r = n, o = function(d) {
                d._clipped = !1, d._unclipped = d.slice(0);
                for (var f = 0; f <= 3; f++) f < 3 ? ((d[f] < 0 || d[f] > 255) && (d._clipped = !0), d[f] = r(d[f], 0, 255)) : f === 3 && (d[f] = r(d[f], 0, 1));
                return d
            }, a = {}, s = 0, i = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; s < i.length; s += 1) {
            var l = i[s];
            a["[object " + l + "]"] = l.toLowerCase()
        }
        var c = function(d) {
                return a[Object.prototype.toString.call(d)] || "object"
            },
            u = c,
            p = function(d, f) {
                return f === void 0 && (f = null), d.length >= 3 ? Array.prototype.slice.call(d) : u(d[0]) == "object" && f ? f.split("").filter(function(m) {
                    return d[0][m] !== void 0
                }).map(function(m) {
                    return d[0][m]
                }) : d[0]
            },
            h = c,
            v = function(d) {
                if (d.length < 2) return null;
                var f = d.length - 1;
                return h(d[f]) == "string" ? d[f].toLowerCase() : null
            },
            _ = Math.PI,
            g = {
                clip_rgb: o,
                limit: n,
                type: c,
                unpack: p,
                last: v,
                PI: _,
                TWOPI: _ * 2,
                PITHIRD: _ / 3,
                DEG2RAD: _ / 180,
                RAD2DEG: 180 / _
            },
            P = {
                format: {},
                autodetect: []
            },
            S = g.last,
            x = g.clip_rgb,
            I = g.type,
            A = P,
            N = function() {
                for (var f = [], m = arguments.length; m--;) f[m] = arguments[m];
                var b = this;
                if (I(f[0]) === "object" && f[0].constructor && f[0].constructor === this.constructor) return f[0];
                var T = S(f),
                    $ = !1;
                if (!T) {
                    $ = !0, A.sorted || (A.autodetect = A.autodetect.sort(function(q, ce) {
                        return ce.p - q.p
                    }), A.sorted = !0);
                    for (var k = 0, L = A.autodetect; k < L.length; k += 1) {
                        var D = L[k];
                        if (T = D.test.apply(D, f), T) break
                    }
                }
                if (A.format[T]) {
                    var V = A.format[T].apply(null, $ ? f : f.slice(0, -1));
                    b._rgb = x(V)
                } else throw new Error("unknown format: " + f);
                b._rgb.length === 3 && b._rgb.push(1)
            };
        N.prototype.toString = function() {
            return I(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var M = N,
            z = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                return new(Function.prototype.bind.apply(z.Color, [null].concat(d)))
            };
        z.Color = M, z.version = "2.4.2";
        var F = z,
            le = g.unpack,
            oe = Math.max,
            we = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = le(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2];
                b = b / 255, T = T / 255, $ = $ / 255;
                var k = 1 - oe(b, oe(T, $)),
                    L = k < 1 ? 1 / (1 - k) : 0,
                    D = (1 - b - k) * L,
                    V = (1 - T - k) * L,
                    q = (1 - $ - k) * L;
                return [D, V, q, k]
            },
            ae = we,
            fe = g.unpack,
            ue = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = fe(d, "cmyk");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $ = d[3],
                    k = d.length > 4 ? d[4] : 1;
                return $ === 1 ? [0, 0, 0, k] : [m >= 1 ? 0 : 255 * (1 - m) * (1 - $), b >= 1 ? 0 : 255 * (1 - b) * (1 - $), T >= 1 ? 0 : 255 * (1 - T) * (1 - $), k]
            },
            We = ue,
            Ae = F,
            _e = M,
            Ce = P,
            pt = g.unpack,
            gt = g.type,
            St = ae;
        _e.prototype.cmyk = function() {
            return St(this._rgb)
        }, Ae.cmyk = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(_e, [null].concat(d, ["cmyk"])))
        }, Ce.format.cmyk = We, Ce.autodetect.push({
            p: 2,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = pt(d, "cmyk"), gt(d) === "array" && d.length === 4) return "cmyk"
            }
        });
        var at = g.unpack,
            _n = g.last,
            nn = function(d) {
                return Math.round(d * 100) / 100
            },
            Hr = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = at(d, "hsla"),
                    b = _n(d) || "lsa";
                return m[0] = nn(m[0] || 0), m[1] = nn(m[1] * 100) + "%", m[2] = nn(m[2] * 100) + "%", b === "hsla" || m.length > 3 && m[3] < 1 ? (m[3] = m.length > 3 ? m[3] : 1, b = "hsla") : m.length = 3, b + "(" + m.join(",") + ")"
            },
            kt = Hr,
            U = g.unpack,
            de = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = U(d, "rgba");
                var m = d[0],
                    b = d[1],
                    T = d[2];
                m /= 255, b /= 255, T /= 255;
                var $ = Math.min(m, b, T),
                    k = Math.max(m, b, T),
                    L = (k + $) / 2,
                    D, V;
                return k === $ ? (D = 0, V = Number.NaN) : D = L < .5 ? (k - $) / (k + $) : (k - $) / (2 - k - $), m == k ? V = (b - T) / (k - $) : b == k ? V = 2 + (T - m) / (k - $) : T == k && (V = 4 + (m - b) / (k - $)), V *= 60, V < 0 && (V += 360), d.length > 3 && d[3] !== void 0 ? [V, D, L, d[3]] : [V, D, L]
            },
            re = de,
            xe = g.unpack,
            qe = g.last,
            w = kt,
            E = re,
            O = Math.round,
            H = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = xe(d, "rgba"),
                    b = qe(d) || "rgb";
                return b.substr(0, 3) == "hsl" ? w(E(m), b) : (m[0] = O(m[0]), m[1] = O(m[1]), m[2] = O(m[2]), (b === "rgba" || m.length > 3 && m[3] < 1) && (m[3] = m.length > 3 ? m[3] : 1, b = "rgba"), b + "(" + m.slice(0, b === "rgb" ? 3 : 4).join(",") + ")")
            },
            W = H,
            G = g.unpack,
            ie = Math.round,
            ee = function() {
                for (var d, f = [], m = arguments.length; m--;) f[m] = arguments[m];
                f = G(f, "hsl");
                var b = f[0],
                    T = f[1],
                    $ = f[2],
                    k, L, D;
                if (T === 0) k = L = D = $ * 255;
                else {
                    var V = [0, 0, 0],
                        q = [0, 0, 0],
                        ce = $ < .5 ? $ * (1 + T) : $ + T - $ * T,
                        Y = 2 * $ - ce,
                        he = b / 360;
                    V[0] = he + 1 / 3, V[1] = he, V[2] = he - 1 / 3;
                    for (var pe = 0; pe < 3; pe++) V[pe] < 0 && (V[pe] += 1), V[pe] > 1 && (V[pe] -= 1), 6 * V[pe] < 1 ? q[pe] = Y + (ce - Y) * 6 * V[pe] : 2 * V[pe] < 1 ? q[pe] = ce : 3 * V[pe] < 2 ? q[pe] = Y + (ce - Y) * (2 / 3 - V[pe]) * 6 : q[pe] = Y;
                    d = [ie(q[0] * 255), ie(q[1] * 255), ie(q[2] * 255)], k = d[0], L = d[1], D = d[2]
                }
                return f.length > 3 ? [k, L, D, f[3]] : [k, L, D, 1]
            },
            ne = ee,
            J = ne,
            ke = P,
            ve = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            Ee = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            $e = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            Oe = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            Ye = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            Ke = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            ht = Math.round,
            Ht = function(d) {
                d = d.toLowerCase().trim();
                var f;
                if (ke.format.named) try {
                    return ke.format.named(d)
                } catch {}
                if (f = d.match(ve)) {
                    for (var m = f.slice(1, 4), b = 0; b < 3; b++) m[b] = +m[b];
                    return m[3] = 1, m
                }
                if (f = d.match(Ee)) {
                    for (var T = f.slice(1, 5), $ = 0; $ < 4; $++) T[$] = +T[$];
                    return T
                }
                if (f = d.match($e)) {
                    for (var k = f.slice(1, 4), L = 0; L < 3; L++) k[L] = ht(k[L] * 2.55);
                    return k[3] = 1, k
                }
                if (f = d.match(Oe)) {
                    for (var D = f.slice(1, 5), V = 0; V < 3; V++) D[V] = ht(D[V] * 2.55);
                    return D[3] = +D[3], D
                }
                if (f = d.match(Ye)) {
                    var q = f.slice(1, 4);
                    q[1] *= .01, q[2] *= .01;
                    var ce = J(q);
                    return ce[3] = 1, ce
                }
                if (f = d.match(Ke)) {
                    var Y = f.slice(1, 4);
                    Y[1] *= .01, Y[2] *= .01;
                    var he = J(Y);
                    return he[3] = +f[4], he
                }
            };
        Ht.test = function(d) {
            return ve.test(d) || Ee.test(d) || $e.test(d) || Oe.test(d) || Ye.test(d) || Ke.test(d)
        };
        var Bn = Ht,
            Ti = F,
            Hn = M,
            Co = P,
            Ft = g.type,
            rn = W,
            Po = Bn;
        Hn.prototype.css = function(d) {
            return rn(this._rgb, d)
        }, Ti.css = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Hn, [null].concat(d, ["css"])))
        }, Co.format.css = Po, Co.autodetect.push({
            p: 5,
            test: function(d) {
                for (var f = [], m = arguments.length - 1; m-- > 0;) f[m] = arguments[m + 1];
                if (!f.length && Ft(d) === "string" && Po.test(d)) return "css"
            }
        });
        var Kd = M,
            wv = F,
            xv = P,
            kv = g.unpack;
        xv.format.gl = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            var m = kv(d, "rgba");
            return m[0] *= 255, m[1] *= 255, m[2] *= 255, m
        }, wv.gl = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Kd, [null].concat(d, ["gl"])))
        }, Kd.prototype.gl = function() {
            var d = this._rgb;
            return [d[0] / 255, d[1] / 255, d[2] / 255, d[3]]
        };
        var Ev = g.unpack,
            Tv = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Ev(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = Math.min(b, T, $),
                    L = Math.max(b, T, $),
                    D = L - k,
                    V = D * 100 / 255,
                    q = k / (255 - D) * 100,
                    ce;
                return D === 0 ? ce = Number.NaN : (b === L && (ce = (T - $) / D), T === L && (ce = 2 + ($ - b) / D), $ === L && (ce = 4 + (b - T) / D), ce *= 60, ce < 0 && (ce += 360)), [ce, V, q]
            },
            Cv = Tv,
            Pv = g.unpack,
            $v = Math.floor,
            Sv = function() {
                for (var d, f, m, b, T, $, k = [], L = arguments.length; L--;) k[L] = arguments[L];
                k = Pv(k, "hcg");
                var D = k[0],
                    V = k[1],
                    q = k[2],
                    ce, Y, he;
                q = q * 255;
                var pe = V * 255;
                if (V === 0) ce = Y = he = q;
                else {
                    D === 360 && (D = 0), D > 360 && (D -= 360), D < 0 && (D += 360), D /= 60;
                    var Re = $v(D),
                        Ne = D - Re,
                        He = q * (1 - V),
                        Ge = He + pe * (1 - Ne),
                        At = He + pe * Ne,
                        Tt = He + pe;
                    switch (Re) {
                        case 0:
                            d = [Tt, At, He], ce = d[0], Y = d[1], he = d[2];
                            break;
                        case 1:
                            f = [Ge, Tt, He], ce = f[0], Y = f[1], he = f[2];
                            break;
                        case 2:
                            m = [He, Tt, At], ce = m[0], Y = m[1], he = m[2];
                            break;
                        case 3:
                            b = [He, Ge, Tt], ce = b[0], Y = b[1], he = b[2];
                            break;
                        case 4:
                            T = [At, He, Tt], ce = T[0], Y = T[1], he = T[2];
                            break;
                        case 5:
                            $ = [Tt, He, Ge], ce = $[0], Y = $[1], he = $[2];
                            break
                    }
                }
                return [ce, Y, he, k.length > 3 ? k[3] : 1]
            },
            Av = Sv,
            Lv = g.unpack,
            Ov = g.type,
            Rv = F,
            Gd = M,
            Jd = P,
            Dv = Cv;
        Gd.prototype.hcg = function() {
            return Dv(this._rgb)
        }, Rv.hcg = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Gd, [null].concat(d, ["hcg"])))
        }, Jd.format.hcg = Av, Jd.autodetect.push({
            p: 1,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = Lv(d, "hcg"), Ov(d) === "array" && d.length === 3) return "hcg"
            }
        });
        var Iv = g.unpack,
            Mv = g.last,
            Ci = Math.round,
            Fv = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Iv(d, "rgba"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = m[3],
                    L = Mv(d) || "auto";
                k === void 0 && (k = 1), L === "auto" && (L = k < 1 ? "rgba" : "rgb"), b = Ci(b), T = Ci(T), $ = Ci($);
                var D = b << 16 | T << 8 | $,
                    V = "000000" + D.toString(16);
                V = V.substr(V.length - 6);
                var q = "0" + Ci(k * 255).toString(16);
                switch (q = q.substr(q.length - 2), L.toLowerCase()) {
                    case "rgba":
                        return "#" + V + q;
                    case "argb":
                        return "#" + q + V;
                    default:
                        return "#" + V
                }
            },
            Qd = Fv,
            Nv = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            jv = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            Bv = function(d) {
                if (d.match(Nv)) {
                    (d.length === 4 || d.length === 7) && (d = d.substr(1)), d.length === 3 && (d = d.split(""), d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]);
                    var f = parseInt(d, 16),
                        m = f >> 16,
                        b = f >> 8 & 255,
                        T = f & 255;
                    return [m, b, T, 1]
                }
                if (d.match(jv)) {
                    (d.length === 5 || d.length === 9) && (d = d.substr(1)), d.length === 4 && (d = d.split(""), d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2] + d[3] + d[3]);
                    var $ = parseInt(d, 16),
                        k = $ >> 24 & 255,
                        L = $ >> 16 & 255,
                        D = $ >> 8 & 255,
                        V = Math.round(($ & 255) / 255 * 100) / 100;
                    return [k, L, D, V]
                }
                throw new Error("unknown hex color: " + d)
            },
            Yd = Bv,
            Hv = F,
            Xd = M,
            zv = g.type,
            Zd = P,
            Vv = Qd;
        Xd.prototype.hex = function(d) {
            return Vv(this._rgb, d)
        }, Hv.hex = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Xd, [null].concat(d, ["hex"])))
        }, Zd.format.hex = Yd, Zd.autodetect.push({
            p: 4,
            test: function(d) {
                for (var f = [], m = arguments.length - 1; m-- > 0;) f[m] = arguments[m + 1];
                if (!f.length && zv(d) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(d.length) >= 0) return "hex"
            }
        });
        var Uv = g.unpack,
            ef = g.TWOPI,
            Wv = Math.min,
            qv = Math.sqrt,
            Kv = Math.acos,
            Gv = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Uv(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2];
                b /= 255, T /= 255, $ /= 255;
                var k, L = Wv(b, T, $),
                    D = (b + T + $) / 3,
                    V = D > 0 ? 1 - L / D : 0;
                return V === 0 ? k = NaN : (k = (b - T + (b - $)) / 2, k /= qv((b - T) * (b - T) + (b - $) * (T - $)), k = Kv(k), $ > T && (k = ef - k), k /= ef), [k * 360, V, D]
            },
            Jv = Gv,
            Qv = g.unpack,
            sc = g.limit,
            zr = g.TWOPI,
            ic = g.PITHIRD,
            Vr = Math.cos,
            Yv = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = Qv(d, "hsi");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $, k, L;
                return isNaN(m) && (m = 0), isNaN(b) && (b = 0), m > 360 && (m -= 360), m < 0 && (m += 360), m /= 360, m < 1 / 3 ? (L = (1 - b) / 3, $ = (1 + b * Vr(zr * m) / Vr(ic - zr * m)) / 3, k = 1 - (L + $)) : m < 2 / 3 ? (m -= 1 / 3, $ = (1 - b) / 3, k = (1 + b * Vr(zr * m) / Vr(ic - zr * m)) / 3, L = 1 - ($ + k)) : (m -= 2 / 3, k = (1 - b) / 3, L = (1 + b * Vr(zr * m) / Vr(ic - zr * m)) / 3, $ = 1 - (k + L)), $ = sc(T * $ * 3), k = sc(T * k * 3), L = sc(T * L * 3), [$ * 255, k * 255, L * 255, d.length > 3 ? d[3] : 1]
            },
            Xv = Yv,
            Zv = g.unpack,
            e_ = g.type,
            t_ = F,
            tf = M,
            nf = P,
            n_ = Jv;
        tf.prototype.hsi = function() {
            return n_(this._rgb)
        }, t_.hsi = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(tf, [null].concat(d, ["hsi"])))
        }, nf.format.hsi = Xv, nf.autodetect.push({
            p: 2,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = Zv(d, "hsi"), e_(d) === "array" && d.length === 3) return "hsi"
            }
        });
        var r_ = g.unpack,
            o_ = g.type,
            a_ = F,
            rf = M,
            of = P,
            s_ = re;
        rf.prototype.hsl = function() {
            return s_(this._rgb)
        }, a_.hsl = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(rf, [null].concat(d, ["hsl"])))
        }, of .format.hsl = ne, of .autodetect.push({
            p: 2,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = r_(d, "hsl"), o_(d) === "array" && d.length === 3) return "hsl"
            }
        });
        var i_ = g.unpack,
            l_ = Math.min,
            c_ = Math.max,
            u_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = i_(d, "rgb");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $ = l_(m, b, T),
                    k = c_(m, b, T),
                    L = k - $,
                    D, V, q;
                return q = k / 255, k === 0 ? (D = Number.NaN, V = 0) : (V = L / k, m === k && (D = (b - T) / L), b === k && (D = 2 + (T - m) / L), T === k && (D = 4 + (m - b) / L), D *= 60, D < 0 && (D += 360)), [D, V, q]
            },
            d_ = u_,
            f_ = g.unpack,
            p_ = Math.floor,
            h_ = function() {
                for (var d, f, m, b, T, $, k = [], L = arguments.length; L--;) k[L] = arguments[L];
                k = f_(k, "hsv");
                var D = k[0],
                    V = k[1],
                    q = k[2],
                    ce, Y, he;
                if (q *= 255, V === 0) ce = Y = he = q;
                else {
                    D === 360 && (D = 0), D > 360 && (D -= 360), D < 0 && (D += 360), D /= 60;
                    var pe = p_(D),
                        Re = D - pe,
                        Ne = q * (1 - V),
                        He = q * (1 - V * Re),
                        Ge = q * (1 - V * (1 - Re));
                    switch (pe) {
                        case 0:
                            d = [q, Ge, Ne], ce = d[0], Y = d[1], he = d[2];
                            break;
                        case 1:
                            f = [He, q, Ne], ce = f[0], Y = f[1], he = f[2];
                            break;
                        case 2:
                            m = [Ne, q, Ge], ce = m[0], Y = m[1], he = m[2];
                            break;
                        case 3:
                            b = [Ne, He, q], ce = b[0], Y = b[1], he = b[2];
                            break;
                        case 4:
                            T = [Ge, Ne, q], ce = T[0], Y = T[1], he = T[2];
                            break;
                        case 5:
                            $ = [q, Ne, He], ce = $[0], Y = $[1], he = $[2];
                            break
                    }
                }
                return [ce, Y, he, k.length > 3 ? k[3] : 1]
            },
            m_ = h_,
            g_ = g.unpack,
            v_ = g.type,
            __ = F,
            af = M,
            sf = P,
            b_ = d_;
        af.prototype.hsv = function() {
            return b_(this._rgb)
        }, __.hsv = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(af, [null].concat(d, ["hsv"])))
        }, sf.format.hsv = m_, sf.autodetect.push({
            p: 2,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = g_(d, "hsv"), v_(d) === "array" && d.length === 3) return "hsv"
            }
        });
        var Pi = {
                Kn: 18,
                Xn: .95047,
                Yn: 1,
                Zn: 1.08883,
                t0: .137931034,
                t1: .206896552,
                t2: .12841855,
                t3: .008856452
            },
            Ur = Pi,
            y_ = g.unpack,
            lf = Math.pow,
            w_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = y_(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = x_(b, T, $),
                    L = k[0],
                    D = k[1],
                    V = k[2],
                    q = 116 * D - 16;
                return [q < 0 ? 0 : q, 500 * (L - D), 200 * (D - V)]
            },
            lc = function(d) {
                return (d /= 255) <= .04045 ? d / 12.92 : lf((d + .055) / 1.055, 2.4)
            },
            cc = function(d) {
                return d > Ur.t3 ? lf(d, 1 / 3) : d / Ur.t2 + Ur.t0
            },
            x_ = function(d, f, m) {
                d = lc(d), f = lc(f), m = lc(m);
                var b = cc((.4124564 * d + .3575761 * f + .1804375 * m) / Ur.Xn),
                    T = cc((.2126729 * d + .7151522 * f + .072175 * m) / Ur.Yn),
                    $ = cc((.0193339 * d + .119192 * f + .9503041 * m) / Ur.Zn);
                return [b, T, $]
            },
            cf = w_,
            Wr = Pi,
            k_ = g.unpack,
            E_ = Math.pow,
            T_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = k_(d, "lab");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $, k, L, D, V, q;
                return k = (m + 16) / 116, $ = isNaN(b) ? k : k + b / 500, L = isNaN(T) ? k : k - T / 200, k = Wr.Yn * dc(k), $ = Wr.Xn * dc($), L = Wr.Zn * dc(L), D = uc(3.2404542 * $ - 1.5371385 * k - .4985314 * L), V = uc(-.969266 * $ + 1.8760108 * k + .041556 * L), q = uc(.0556434 * $ - .2040259 * k + 1.0572252 * L), [D, V, q, d.length > 3 ? d[3] : 1]
            },
            uc = function(d) {
                return 255 * (d <= .00304 ? 12.92 * d : 1.055 * E_(d, 1 / 2.4) - .055)
            },
            dc = function(d) {
                return d > Wr.t1 ? d * d * d : Wr.t2 * (d - Wr.t0)
            },
            uf = T_,
            C_ = g.unpack,
            P_ = g.type,
            $_ = F,
            df = M,
            ff = P,
            S_ = cf;
        df.prototype.lab = function() {
            return S_(this._rgb)
        }, $_.lab = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(df, [null].concat(d, ["lab"])))
        }, ff.format.lab = uf, ff.autodetect.push({
            p: 2,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = C_(d, "lab"), P_(d) === "array" && d.length === 3) return "lab"
            }
        });
        var A_ = g.unpack,
            L_ = g.RAD2DEG,
            O_ = Math.sqrt,
            R_ = Math.atan2,
            D_ = Math.round,
            I_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = A_(d, "lab"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = O_(T * T + $ * $),
                    L = (R_($, T) * L_ + 360) % 360;
                return D_(k * 1e4) === 0 && (L = Number.NaN), [b, k, L]
            },
            pf = I_,
            M_ = g.unpack,
            F_ = cf,
            N_ = pf,
            j_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = M_(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = F_(b, T, $),
                    L = k[0],
                    D = k[1],
                    V = k[2];
                return N_(L, D, V)
            },
            B_ = j_,
            H_ = g.unpack,
            z_ = g.DEG2RAD,
            V_ = Math.sin,
            U_ = Math.cos,
            W_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = H_(d, "lch"),
                    b = m[0],
                    T = m[1],
                    $ = m[2];
                return isNaN($) && ($ = 0), $ = $ * z_, [b, U_($) * T, V_($) * T]
            },
            hf = W_,
            q_ = g.unpack,
            K_ = hf,
            G_ = uf,
            J_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = q_(d, "lch");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $ = K_(m, b, T),
                    k = $[0],
                    L = $[1],
                    D = $[2],
                    V = G_(k, L, D),
                    q = V[0],
                    ce = V[1],
                    Y = V[2];
                return [q, ce, Y, d.length > 3 ? d[3] : 1]
            },
            mf = J_,
            Q_ = g.unpack,
            Y_ = mf,
            X_ = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Q_(d, "hcl").reverse();
                return Y_.apply(void 0, m)
            },
            Z_ = X_,
            eb = g.unpack,
            tb = g.type,
            gf = F,
            $i = M,
            fc = P,
            vf = B_;
        $i.prototype.lch = function() {
            return vf(this._rgb)
        }, $i.prototype.hcl = function() {
            return vf(this._rgb).reverse()
        }, gf.lch = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply($i, [null].concat(d, ["lch"])))
        }, gf.hcl = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply($i, [null].concat(d, ["hcl"])))
        }, fc.format.lch = mf, fc.format.hcl = Z_, ["lch", "hcl"].forEach(function(d) {
            return fc.autodetect.push({
                p: 2,
                test: function() {
                    for (var f = [], m = arguments.length; m--;) f[m] = arguments[m];
                    if (f = eb(f, d), tb(f) === "array" && f.length === 3) return d
                }
            })
        });
        var nb = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            _f = nb,
            rb = M,
            bf = P,
            ob = g.type,
            $o = _f,
            ab = Yd,
            sb = Qd;
        rb.prototype.name = function() {
            for (var d = sb(this._rgb, "rgb"), f = 0, m = Object.keys($o); f < m.length; f += 1) {
                var b = m[f];
                if ($o[b] === d) return b.toLowerCase()
            }
            return d
        }, bf.format.named = function(d) {
            if (d = d.toLowerCase(), $o[d]) return ab($o[d]);
            throw new Error("unknown color name: " + d)
        }, bf.autodetect.push({
            p: 5,
            test: function(d) {
                for (var f = [], m = arguments.length - 1; m-- > 0;) f[m] = arguments[m + 1];
                if (!f.length && ob(d) === "string" && $o[d.toLowerCase()]) return "named"
            }
        });
        var ib = g.unpack,
            lb = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = ib(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2];
                return (b << 16) + (T << 8) + $
            },
            cb = lb,
            ub = g.type,
            db = function(d) {
                if (ub(d) == "number" && d >= 0 && d <= 16777215) {
                    var f = d >> 16,
                        m = d >> 8 & 255,
                        b = d & 255;
                    return [f, m, b, 1]
                }
                throw new Error("unknown num color: " + d)
            },
            fb = db,
            pb = F,
            yf = M,
            wf = P,
            hb = g.type,
            mb = cb;
        yf.prototype.num = function() {
            return mb(this._rgb)
        }, pb.num = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(yf, [null].concat(d, ["num"])))
        }, wf.format.num = fb, wf.autodetect.push({
            p: 5,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d.length === 1 && hb(d[0]) === "number" && d[0] >= 0 && d[0] <= 16777215) return "num"
            }
        });
        var gb = F,
            pc = M,
            xf = P,
            kf = g.unpack,
            Ef = g.type,
            Tf = Math.round;
        pc.prototype.rgb = function(d) {
            return d === void 0 && (d = !0), d === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Tf)
        }, pc.prototype.rgba = function(d) {
            return d === void 0 && (d = !0), this._rgb.slice(0, 4).map(function(f, m) {
                return m < 3 ? d === !1 ? f : Tf(f) : f
            })
        }, gb.rgb = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(pc, [null].concat(d, ["rgb"])))
        }, xf.format.rgb = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            var m = kf(d, "rgba");
            return m[3] === void 0 && (m[3] = 1), m
        }, xf.autodetect.push({
            p: 3,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = kf(d, "rgba"), Ef(d) === "array" && (d.length === 3 || d.length === 4 && Ef(d[3]) == "number" && d[3] >= 0 && d[3] <= 1)) return "rgb"
            }
        });
        var Si = Math.log,
            vb = function(d) {
                var f = d / 100,
                    m, b, T;
                return f < 66 ? (m = 255, b = f < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (b = f - 2) + 104.49216199393888 * Si(b), T = f < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (T = f - 10) + 115.67994401066147 * Si(T)) : (m = 351.97690566805693 + .114206453784165 * (m = f - 55) - 40.25366309332127 * Si(m), b = 325.4494125711974 + .07943456536662342 * (b = f - 50) - 28.0852963507957 * Si(b), T = 255), [m, b, T, 1]
            },
            Cf = vb,
            _b = Cf,
            bb = g.unpack,
            yb = Math.round,
            wb = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                for (var m = bb(d, "rgb"), b = m[0], T = m[2], $ = 1e3, k = 4e4, L = .4, D; k - $ > L;) {
                    D = (k + $) * .5;
                    var V = _b(D);
                    V[2] / V[0] >= T / b ? k = D : $ = D
                }
                return yb(D)
            },
            xb = wb,
            hc = F,
            Ai = M,
            mc = P,
            kb = xb;
        Ai.prototype.temp = Ai.prototype.kelvin = Ai.prototype.temperature = function() {
            return kb(this._rgb)
        }, hc.temp = hc.kelvin = hc.temperature = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Ai, [null].concat(d, ["temp"])))
        }, mc.format.temp = mc.format.kelvin = mc.format.temperature = Cf;
        var Eb = g.unpack,
            gc = Math.cbrt,
            Tb = Math.pow,
            Cb = Math.sign,
            Pb = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Eb(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = [vc(b / 255), vc(T / 255), vc($ / 255)],
                    L = k[0],
                    D = k[1],
                    V = k[2],
                    q = gc(.4122214708 * L + .5363325363 * D + .0514459929 * V),
                    ce = gc(.2119034982 * L + .6806995451 * D + .1073969566 * V),
                    Y = gc(.0883024619 * L + .2817188376 * D + .6299787005 * V);
                return [.2104542553 * q + .793617785 * ce - .0040720468 * Y, 1.9779984951 * q - 2.428592205 * ce + .4505937099 * Y, .0259040371 * q + .7827717662 * ce - .808675766 * Y]
            },
            Pf = Pb;

        function vc(d) {
            var f = Math.abs(d);
            return f < .04045 ? d / 12.92 : (Cb(d) || 1) * Tb((f + .055) / 1.055, 2.4)
        }
        var $b = g.unpack,
            Li = Math.pow,
            Sb = Math.sign,
            Ab = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = $b(d, "lab");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $ = Li(m + .3963377774 * b + .2158037573 * T, 3),
                    k = Li(m - .1055613458 * b - .0638541728 * T, 3),
                    L = Li(m - .0894841775 * b - 1.291485548 * T, 3);
                return [255 * _c(4.0767416621 * $ - 3.3077115913 * k + .2309699292 * L), 255 * _c(-1.2684380046 * $ + 2.6097574011 * k - .3413193965 * L), 255 * _c(-.0041960863 * $ - .7034186147 * k + 1.707614701 * L), d.length > 3 ? d[3] : 1]
            },
            $f = Ab;

        function _c(d) {
            var f = Math.abs(d);
            return f > .0031308 ? (Sb(d) || 1) * (1.055 * Li(f, 1 / 2.4) - .055) : d * 12.92
        }
        var Lb = g.unpack,
            Ob = g.type,
            Rb = F,
            Sf = M,
            Af = P,
            Db = Pf;
        Sf.prototype.oklab = function() {
            return Db(this._rgb)
        }, Rb.oklab = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Sf, [null].concat(d, ["oklab"])))
        }, Af.format.oklab = $f, Af.autodetect.push({
            p: 3,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = Lb(d, "oklab"), Ob(d) === "array" && d.length === 3) return "oklab"
            }
        });
        var Ib = g.unpack,
            Mb = Pf,
            Fb = pf,
            Nb = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                var m = Ib(d, "rgb"),
                    b = m[0],
                    T = m[1],
                    $ = m[2],
                    k = Mb(b, T, $),
                    L = k[0],
                    D = k[1],
                    V = k[2];
                return Fb(L, D, V)
            },
            jb = Nb,
            Bb = g.unpack,
            Hb = hf,
            zb = $f,
            Vb = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                d = Bb(d, "lch");
                var m = d[0],
                    b = d[1],
                    T = d[2],
                    $ = Hb(m, b, T),
                    k = $[0],
                    L = $[1],
                    D = $[2],
                    V = zb(k, L, D),
                    q = V[0],
                    ce = V[1],
                    Y = V[2];
                return [q, ce, Y, d.length > 3 ? d[3] : 1]
            },
            Ub = Vb,
            Wb = g.unpack,
            qb = g.type,
            Kb = F,
            Lf = M,
            Of = P,
            Gb = jb;
        Lf.prototype.oklch = function() {
            return Gb(this._rgb)
        }, Kb.oklch = function() {
            for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
            return new(Function.prototype.bind.apply(Lf, [null].concat(d, ["oklch"])))
        }, Of.format.oklch = Ub, Of.autodetect.push({
            p: 3,
            test: function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                if (d = Wb(d, "oklch"), qb(d) === "array" && d.length === 3) return "oklch"
            }
        });
        var Rf = M,
            Jb = g.type;
        Rf.prototype.alpha = function(d, f) {
            return f === void 0 && (f = !1), d !== void 0 && Jb(d) === "number" ? f ? (this._rgb[3] = d, this) : new Rf([this._rgb[0], this._rgb[1], this._rgb[2], d], "rgb") : this._rgb[3]
        };
        var Qb = M;
        Qb.prototype.clipped = function() {
            return this._rgb._clipped || !1
        };
        var gr = M,
            Yb = Pi;
        gr.prototype.darken = function(d) {
            d === void 0 && (d = 1);
            var f = this,
                m = f.lab();
            return m[0] -= Yb.Kn * d, new gr(m, "lab").alpha(f.alpha(), !0)
        }, gr.prototype.brighten = function(d) {
            return d === void 0 && (d = 1), this.darken(-d)
        }, gr.prototype.darker = gr.prototype.darken, gr.prototype.brighter = gr.prototype.brighten;
        var Xb = M;
        Xb.prototype.get = function(d) {
            var f = d.split("."),
                m = f[0],
                b = f[1],
                T = this[m]();
            if (b) {
                var $ = m.indexOf(b) - (m.substr(0, 2) === "ok" ? 2 : 0);
                if ($ > -1) return T[$];
                throw new Error("unknown channel " + b + " in mode " + m)
            } else return T
        };
        var qr = M,
            Zb = g.type,
            ey = Math.pow,
            ty = 1e-7,
            ny = 20;
        qr.prototype.luminance = function(d) {
            if (d !== void 0 && Zb(d) === "number") {
                if (d === 0) return new qr([0, 0, 0, this._rgb[3]], "rgb");
                if (d === 1) return new qr([255, 255, 255, this._rgb[3]], "rgb");
                var f = this.luminance(),
                    m = "rgb",
                    b = ny,
                    T = function(k, L) {
                        var D = k.interpolate(L, .5, m),
                            V = D.luminance();
                        return Math.abs(d - V) < ty || !b-- ? D : V > d ? T(k, D) : T(D, L)
                    },
                    $ = (f > d ? T(new qr([0, 0, 0]), this) : T(this, new qr([255, 255, 255]))).rgb();
                return new qr($.concat([this._rgb[3]]))
            }
            return ry.apply(void 0, this._rgb.slice(0, 3))
        };
        var ry = function(d, f, m) {
                return d = bc(d), f = bc(f), m = bc(m), .2126 * d + .7152 * f + .0722 * m
            },
            bc = function(d) {
                return d /= 255, d <= .03928 ? d / 12.92 : ey((d + .055) / 1.055, 2.4)
            },
            Jt = {},
            Df = M,
            If = g.type,
            Oi = Jt,
            Mf = function(d, f, m) {
                m === void 0 && (m = .5);
                for (var b = [], T = arguments.length - 3; T-- > 0;) b[T] = arguments[T + 3];
                var $ = b[0] || "lrgb";
                if (!Oi[$] && !b.length && ($ = Object.keys(Oi)[0]), !Oi[$]) throw new Error("interpolation mode " + $ + " is not defined");
                return If(d) !== "object" && (d = new Df(d)), If(f) !== "object" && (f = new Df(f)), Oi[$](d, f, m).alpha(d.alpha() + m * (f.alpha() - d.alpha()))
            },
            Ff = M,
            oy = Mf;
        Ff.prototype.mix = Ff.prototype.interpolate = function(d, f) {
            f === void 0 && (f = .5);
            for (var m = [], b = arguments.length - 2; b-- > 0;) m[b] = arguments[b + 2];
            return oy.apply(void 0, [this, d, f].concat(m))
        };
        var Nf = M;
        Nf.prototype.premultiply = function(d) {
            d === void 0 && (d = !1);
            var f = this._rgb,
                m = f[3];
            return d ? (this._rgb = [f[0] * m, f[1] * m, f[2] * m, m], this) : new Nf([f[0] * m, f[1] * m, f[2] * m, m], "rgb")
        };
        var yc = M,
            ay = Pi;
        yc.prototype.saturate = function(d) {
            d === void 0 && (d = 1);
            var f = this,
                m = f.lch();
            return m[1] += ay.Kn * d, m[1] < 0 && (m[1] = 0), new yc(m, "lch").alpha(f.alpha(), !0)
        }, yc.prototype.desaturate = function(d) {
            return d === void 0 && (d = 1), this.saturate(-d)
        };
        var jf = M,
            Bf = g.type;
        jf.prototype.set = function(d, f, m) {
            m === void 0 && (m = !1);
            var b = d.split("."),
                T = b[0],
                $ = b[1],
                k = this[T]();
            if ($) {
                var L = T.indexOf($) - (T.substr(0, 2) === "ok" ? 2 : 0);
                if (L > -1) {
                    if (Bf(f) == "string") switch (f.charAt(0)) {
                            case "+":
                                k[L] += +f;
                                break;
                            case "-":
                                k[L] += +f;
                                break;
                            case "*":
                                k[L] *= +f.substr(1);
                                break;
                            case "/":
                                k[L] /= +f.substr(1);
                                break;
                            default:
                                k[L] = +f
                        } else if (Bf(f) === "number") k[L] = f;
                        else throw new Error("unsupported value for Color.set");
                    var D = new jf(k, T);
                    return m ? (this._rgb = D._rgb, this) : D
                }
                throw new Error("unknown channel " + $ + " in mode " + T)
            } else return k
        };
        var sy = M,
            iy = function(d, f, m) {
                var b = d._rgb,
                    T = f._rgb;
                return new sy(b[0] + m * (T[0] - b[0]), b[1] + m * (T[1] - b[1]), b[2] + m * (T[2] - b[2]), "rgb")
            };
        Jt.rgb = iy;
        var ly = M,
            wc = Math.sqrt,
            Kr = Math.pow,
            cy = function(d, f, m) {
                var b = d._rgb,
                    T = b[0],
                    $ = b[1],
                    k = b[2],
                    L = f._rgb,
                    D = L[0],
                    V = L[1],
                    q = L[2];
                return new ly(wc(Kr(T, 2) * (1 - m) + Kr(D, 2) * m), wc(Kr($, 2) * (1 - m) + Kr(V, 2) * m), wc(Kr(k, 2) * (1 - m) + Kr(q, 2) * m), "rgb")
            };
        Jt.lrgb = cy;
        var uy = M,
            dy = function(d, f, m) {
                var b = d.lab(),
                    T = f.lab();
                return new uy(b[0] + m * (T[0] - b[0]), b[1] + m * (T[1] - b[1]), b[2] + m * (T[2] - b[2]), "lab")
            };
        Jt.lab = dy;
        var Hf = M,
            Gr = function(d, f, m, b) {
                var T, $, k, L;
                b === "hsl" ? (k = d.hsl(), L = f.hsl()) : b === "hsv" ? (k = d.hsv(), L = f.hsv()) : b === "hcg" ? (k = d.hcg(), L = f.hcg()) : b === "hsi" ? (k = d.hsi(), L = f.hsi()) : b === "lch" || b === "hcl" ? (b = "hcl", k = d.hcl(), L = f.hcl()) : b === "oklch" && (k = d.oklch().reverse(), L = f.oklch().reverse());
                var D, V, q, ce, Y, he;
                (b.substr(0, 1) === "h" || b === "oklch") && (T = k, D = T[0], q = T[1], Y = T[2], $ = L, V = $[0], ce = $[1], he = $[2]);
                var pe, Re, Ne, He;
                return !isNaN(D) && !isNaN(V) ? (V > D && V - D > 180 ? He = V - (D + 360) : V < D && D - V > 180 ? He = V + 360 - D : He = V - D, Re = D + m * He) : isNaN(D) ? isNaN(V) ? Re = Number.NaN : (Re = V, (Y == 1 || Y == 0) && b != "hsv" && (pe = ce)) : (Re = D, (he == 1 || he == 0) && b != "hsv" && (pe = q)), pe === void 0 && (pe = q + m * (ce - q)), Ne = Y + m * (he - Y), b === "oklch" ? new Hf([Ne, pe, Re], b) : new Hf([Re, pe, Ne], b)
            },
            fy = Gr,
            zf = function(d, f, m) {
                return fy(d, f, m, "lch")
            };
        Jt.lch = zf, Jt.hcl = zf;
        var py = M,
            hy = function(d, f, m) {
                var b = d.num(),
                    T = f.num();
                return new py(b + m * (T - b), "num")
            };
        Jt.num = hy;
        var my = Gr,
            gy = function(d, f, m) {
                return my(d, f, m, "hcg")
            };
        Jt.hcg = gy;
        var vy = Gr,
            _y = function(d, f, m) {
                return vy(d, f, m, "hsi")
            };
        Jt.hsi = _y;
        var by = Gr,
            yy = function(d, f, m) {
                return by(d, f, m, "hsl")
            };
        Jt.hsl = yy;
        var wy = Gr,
            xy = function(d, f, m) {
                return wy(d, f, m, "hsv")
            };
        Jt.hsv = xy;
        var ky = M,
            Ey = function(d, f, m) {
                var b = d.oklab(),
                    T = f.oklab();
                return new ky(b[0] + m * (T[0] - b[0]), b[1] + m * (T[1] - b[1]), b[2] + m * (T[2] - b[2]), "oklab")
            };
        Jt.oklab = Ey;
        var Ty = Gr,
            Cy = function(d, f, m) {
                return Ty(d, f, m, "oklch")
            };
        Jt.oklch = Cy;
        var xc = M,
            Py = g.clip_rgb,
            kc = Math.pow,
            Ec = Math.sqrt,
            Tc = Math.PI,
            Vf = Math.cos,
            Uf = Math.sin,
            $y = Math.atan2,
            Sy = function(d, f, m) {
                f === void 0 && (f = "lrgb"), m === void 0 && (m = null);
                var b = d.length;
                m || (m = Array.from(new Array(b)).map(function() {
                    return 1
                }));
                var T = b / m.reduce(function(Re, Ne) {
                    return Re + Ne
                });
                if (m.forEach(function(Re, Ne) {
                        m[Ne] *= T
                    }), d = d.map(function(Re) {
                        return new xc(Re)
                    }), f === "lrgb") return Ay(d, m);
                for (var $ = d.shift(), k = $.get(f), L = [], D = 0, V = 0, q = 0; q < k.length; q++)
                    if (k[q] = (k[q] || 0) * m[0], L.push(isNaN(k[q]) ? 0 : m[0]), f.charAt(q) === "h" && !isNaN(k[q])) {
                        var ce = k[q] / 180 * Tc;
                        D += Vf(ce) * m[0], V += Uf(ce) * m[0]
                    }
                var Y = $.alpha() * m[0];
                d.forEach(function(Re, Ne) {
                    var He = Re.get(f);
                    Y += Re.alpha() * m[Ne + 1];
                    for (var Ge = 0; Ge < k.length; Ge++)
                        if (!isNaN(He[Ge]))
                            if (L[Ge] += m[Ne + 1], f.charAt(Ge) === "h") {
                                var At = He[Ge] / 180 * Tc;
                                D += Vf(At) * m[Ne + 1], V += Uf(At) * m[Ne + 1]
                            } else k[Ge] += He[Ge] * m[Ne + 1]
                });
                for (var he = 0; he < k.length; he++)
                    if (f.charAt(he) === "h") {
                        for (var pe = $y(V / L[he], D / L[he]) / Tc * 180; pe < 0;) pe += 360;
                        for (; pe >= 360;) pe -= 360;
                        k[he] = pe
                    } else k[he] = k[he] / L[he];
                return Y /= b, new xc(k, f).alpha(Y > .99999 ? 1 : Y, !0)
            },
            Ay = function(d, f) {
                for (var m = d.length, b = [0, 0, 0, 0], T = 0; T < d.length; T++) {
                    var $ = d[T],
                        k = f[T] / m,
                        L = $._rgb;
                    b[0] += kc(L[0], 2) * k, b[1] += kc(L[1], 2) * k, b[2] += kc(L[2], 2) * k, b[3] += L[3] * k
                }
                return b[0] = Ec(b[0]), b[1] = Ec(b[1]), b[2] = Ec(b[2]), b[3] > .9999999 && (b[3] = 1), new xc(Py(b))
            },
            ln = F,
            Jr = g.type,
            Ly = Math.pow,
            Cc = function(d) {
                var f = "rgb",
                    m = ln("#ccc"),
                    b = 0,
                    T = [0, 1],
                    $ = [],
                    k = [0, 0],
                    L = !1,
                    D = [],
                    V = !1,
                    q = 0,
                    ce = 1,
                    Y = !1,
                    he = {},
                    pe = !0,
                    Re = 1,
                    Ne = function(X) {
                        if (X = X || ["#fff", "#000"], X && Jr(X) === "string" && ln.brewer && ln.brewer[X.toLowerCase()] && (X = ln.brewer[X.toLowerCase()]), Jr(X) === "array") {
                            X.length === 1 && (X = [X[0], X[0]]), X = X.slice(0);
                            for (var Pe = 0; Pe < X.length; Pe++) X[Pe] = ln(X[Pe]);
                            $.length = 0;
                            for (var Me = 0; Me < X.length; Me++) $.push(Me / (X.length - 1))
                        }
                        return zt(), D = X
                    },
                    He = function(X) {
                        if (L != null) {
                            for (var Pe = L.length - 1, Me = 0; Me < Pe && X >= L[Me];) Me++;
                            return Me - 1
                        }
                        return 0
                    },
                    Ge = function(X) {
                        return X
                    },
                    At = function(X) {
                        return X
                    },
                    Tt = function(X, Pe) {
                        var Me, De;
                        if (Pe == null && (Pe = !1), isNaN(X) || X === null) return m;
                        if (Pe) De = X;
                        else if (L && L.length > 2) {
                            var Lt = He(X);
                            De = Lt / (L.length - 2)
                        } else ce !== q ? De = (X - q) / (ce - q) : De = 1;
                        De = At(De), Pe || (De = Ge(De)), Re !== 1 && (De = Ly(De, Re)), De = k[0] + De * (1 - k[0] - k[1]), De = Math.min(1, Math.max(0, De));
                        var st = Math.floor(De * 1e4);
                        if (pe && he[st]) Me = he[st];
                        else {
                            if (Jr(D) === "array")
                                for (var ze = 0; ze < $.length; ze++) {
                                    var Je = $[ze];
                                    if (De <= Je) {
                                        Me = D[ze];
                                        break
                                    }
                                    if (De >= Je && ze === $.length - 1) {
                                        Me = D[ze];
                                        break
                                    }
                                    if (De > Je && De < $[ze + 1]) {
                                        De = (De - Je) / ($[ze + 1] - Je), Me = ln.interpolate(D[ze], D[ze + 1], De, f);
                                        break
                                    }
                                } else Jr(D) === "function" && (Me = D(De));
                            pe && (he[st] = Me)
                        }
                        return Me
                    },
                    zt = function() {
                        return he = {}
                    };
                Ne(d);
                var je = function(X) {
                    var Pe = ln(Tt(X));
                    return V && Pe[V] ? Pe[V]() : Pe
                };
                return je.classes = function(X) {
                    if (X != null) {
                        if (Jr(X) === "array") L = X, T = [X[0], X[X.length - 1]];
                        else {
                            var Pe = ln.analyze(T);
                            X === 0 ? L = [Pe.min, Pe.max] : L = ln.limits(Pe, "e", X)
                        }
                        return je
                    }
                    return L
                }, je.domain = function(X) {
                    if (!arguments.length) return T;
                    q = X[0], ce = X[X.length - 1], $ = [];
                    var Pe = D.length;
                    if (X.length === Pe && q !== ce)
                        for (var Me = 0, De = Array.from(X); Me < De.length; Me += 1) {
                            var Lt = De[Me];
                            $.push((Lt - q) / (ce - q))
                        } else {
                            for (var st = 0; st < Pe; st++) $.push(st / (Pe - 1));
                            if (X.length > 2) {
                                var ze = X.map(function(Qe, Xe) {
                                        return Xe / (X.length - 1)
                                    }),
                                    Je = X.map(function(Qe) {
                                        return (Qe - q) / (ce - q)
                                    });
                                Je.every(function(Qe, Xe) {
                                    return ze[Xe] === Qe
                                }) || (At = function(Qe) {
                                    if (Qe <= 0 || Qe >= 1) return Qe;
                                    for (var Xe = 0; Qe >= Je[Xe + 1];) Xe++;
                                    var un = (Qe - Je[Xe]) / (Je[Xe + 1] - Je[Xe]),
                                        Un = ze[Xe] + un * (ze[Xe + 1] - ze[Xe]);
                                    return Un
                                })
                            }
                        }
                    return T = [q, ce], je
                }, je.mode = function(X) {
                    return arguments.length ? (f = X, zt(), je) : f
                }, je.range = function(X, Pe) {
                    return Ne(X), je
                }, je.out = function(X) {
                    return V = X, je
                }, je.spread = function(X) {
                    return arguments.length ? (b = X, je) : b
                }, je.correctLightness = function(X) {
                    return X == null && (X = !0), Y = X, zt(), Y ? Ge = function(Pe) {
                        for (var Me = Tt(0, !0).lab()[0], De = Tt(1, !0).lab()[0], Lt = Me > De, st = Tt(Pe, !0).lab()[0], ze = Me + (De - Me) * Pe, Je = st - ze, Qe = 0, Xe = 1, un = 20; Math.abs(Je) > .01 && un-- > 0;)(function() {
                            return Lt && (Je *= -1), Je < 0 ? (Qe = Pe, Pe += (Xe - Pe) * .5) : (Xe = Pe, Pe += (Qe - Pe) * .5), st = Tt(Pe, !0).lab()[0], Je = st - ze
                        })();
                        return Pe
                    } : Ge = function(Pe) {
                        return Pe
                    }, je
                }, je.padding = function(X) {
                    return X != null ? (Jr(X) === "number" && (X = [X, X]), k = X, je) : k
                }, je.colors = function(X, Pe) {
                    arguments.length < 2 && (Pe = "hex");
                    var Me = [];
                    if (arguments.length === 0) Me = D.slice(0);
                    else if (X === 1) Me = [je(.5)];
                    else if (X > 1) {
                        var De = T[0],
                            Lt = T[1] - De;
                        Me = Oy(0, X, !1).map(function(Xe) {
                            return je(De + Xe / (X - 1) * Lt)
                        })
                    } else {
                        d = [];
                        var st = [];
                        if (L && L.length > 2)
                            for (var ze = 1, Je = L.length, Qe = 1 <= Je; Qe ? ze < Je : ze > Je; Qe ? ze++ : ze--) st.push((L[ze - 1] + L[ze]) * .5);
                        else st = T;
                        Me = st.map(function(Xe) {
                            return je(Xe)
                        })
                    }
                    return ln[Pe] && (Me = Me.map(function(Xe) {
                        return Xe[Pe]()
                    })), Me
                }, je.cache = function(X) {
                    return X != null ? (pe = X, je) : pe
                }, je.gamma = function(X) {
                    return X != null ? (Re = X, je) : Re
                }, je.nodata = function(X) {
                    return X != null ? (m = ln(X), je) : m
                }, je
            };

        function Oy(d, f, m) {
            for (var b = [], T = d < f, $ = m ? T ? f + 1 : f - 1 : f, k = d; T ? k < $ : k > $; T ? k++ : k--) b.push(k);
            return b
        }
        var So = M,
            Ry = Cc,
            Dy = function(d) {
                for (var f = [1, 1], m = 1; m < d; m++) {
                    for (var b = [1], T = 1; T <= f.length; T++) b[T] = (f[T] || 0) + f[T - 1];
                    f = b
                }
                return f
            },
            Iy = function(d) {
                var f, m, b, T, $, k, L;
                if (d = d.map(function(Y) {
                        return new So(Y)
                    }), d.length === 2) f = d.map(function(Y) {
                    return Y.lab()
                }), $ = f[0], k = f[1], T = function(Y) {
                    var he = [0, 1, 2].map(function(pe) {
                        return $[pe] + Y * (k[pe] - $[pe])
                    });
                    return new So(he, "lab")
                };
                else if (d.length === 3) m = d.map(function(Y) {
                    return Y.lab()
                }), $ = m[0], k = m[1], L = m[2], T = function(Y) {
                    var he = [0, 1, 2].map(function(pe) {
                        return (1 - Y) * (1 - Y) * $[pe] + 2 * (1 - Y) * Y * k[pe] + Y * Y * L[pe]
                    });
                    return new So(he, "lab")
                };
                else if (d.length === 4) {
                    var D;
                    b = d.map(function(Y) {
                        return Y.lab()
                    }), $ = b[0], k = b[1], L = b[2], D = b[3], T = function(Y) {
                        var he = [0, 1, 2].map(function(pe) {
                            return (1 - Y) * (1 - Y) * (1 - Y) * $[pe] + 3 * (1 - Y) * (1 - Y) * Y * k[pe] + 3 * (1 - Y) * Y * Y * L[pe] + Y * Y * Y * D[pe]
                        });
                        return new So(he, "lab")
                    }
                } else if (d.length >= 5) {
                    var V, q, ce;
                    V = d.map(function(Y) {
                        return Y.lab()
                    }), ce = d.length - 1, q = Dy(ce), T = function(Y) {
                        var he = 1 - Y,
                            pe = [0, 1, 2].map(function(Re) {
                                return V.reduce(function(Ne, He, Ge) {
                                    return Ne + q[Ge] * Math.pow(he, ce - Ge) * Math.pow(Y, Ge) * He[Re]
                                }, 0)
                            });
                        return new So(pe, "lab")
                    }
                } else throw new RangeError("No point in running bezier with only one color.");
                return T
            },
            My = function(d) {
                var f = Iy(d);
                return f.scale = function() {
                    return Ry(f)
                }, f
            },
            Pc = F,
            cn = function(d, f, m) {
                if (!cn[m]) throw new Error("unknown blend mode " + m);
                return cn[m](d, f)
            },
            zn = function(d) {
                return function(f, m) {
                    var b = Pc(m).rgb(),
                        T = Pc(f).rgb();
                    return Pc.rgb(d(b, T))
                }
            },
            Vn = function(d) {
                return function(f, m) {
                    var b = [];
                    return b[0] = d(f[0], m[0]), b[1] = d(f[1], m[1]), b[2] = d(f[2], m[2]), b
                }
            },
            Fy = function(d) {
                return d
            },
            Ny = function(d, f) {
                return d * f / 255
            },
            jy = function(d, f) {
                return d > f ? f : d
            },
            By = function(d, f) {
                return d > f ? d : f
            },
            Hy = function(d, f) {
                return 255 * (1 - (1 - d / 255) * (1 - f / 255))
            },
            zy = function(d, f) {
                return f < 128 ? 2 * d * f / 255 : 255 * (1 - 2 * (1 - d / 255) * (1 - f / 255))
            },
            Vy = function(d, f) {
                return 255 * (1 - (1 - f / 255) / (d / 255))
            },
            Uy = function(d, f) {
                return d === 255 ? 255 : (d = 255 * (f / 255) / (1 - d / 255), d > 255 ? 255 : d)
            };
        cn.normal = zn(Vn(Fy)), cn.multiply = zn(Vn(Ny)), cn.screen = zn(Vn(Hy)), cn.overlay = zn(Vn(zy)), cn.darken = zn(Vn(jy)), cn.lighten = zn(Vn(By)), cn.dodge = zn(Vn(Uy)), cn.burn = zn(Vn(Vy));
        for (var Wy = cn, $c = g.type, qy = g.clip_rgb, Ky = g.TWOPI, Gy = Math.pow, Jy = Math.sin, Qy = Math.cos, Wf = F, Yy = function(d, f, m, b, T) {
                d === void 0 && (d = 300), f === void 0 && (f = -1.5), m === void 0 && (m = 1), b === void 0 && (b = 1), T === void 0 && (T = [0, 1]);
                var $ = 0,
                    k;
                $c(T) === "array" ? k = T[1] - T[0] : (k = 0, T = [T, T]);
                var L = function(D) {
                    var V = Ky * ((d + 120) / 360 + f * D),
                        q = Gy(T[0] + k * D, b),
                        ce = $ !== 0 ? m[0] + D * $ : m,
                        Y = ce * q * (1 - q) / 2,
                        he = Qy(V),
                        pe = Jy(V),
                        Re = q + Y * (-.14861 * he + 1.78277 * pe),
                        Ne = q + Y * (-.29227 * he - .90649 * pe),
                        He = q + Y * (1.97294 * he);
                    return Wf(qy([Re * 255, Ne * 255, He * 255, 1]))
                };
                return L.start = function(D) {
                    return D == null ? d : (d = D, L)
                }, L.rotations = function(D) {
                    return D == null ? f : (f = D, L)
                }, L.gamma = function(D) {
                    return D == null ? b : (b = D, L)
                }, L.hue = function(D) {
                    return D == null ? m : (m = D, $c(m) === "array" ? ($ = m[1] - m[0], $ === 0 && (m = m[1])) : $ = 0, L)
                }, L.lightness = function(D) {
                    return D == null ? T : ($c(D) === "array" ? (T = D, k = D[1] - D[0]) : (T = [D, D], k = 0), L)
                }, L.scale = function() {
                    return Wf.scale(L)
                }, L.hue(m), L
            }, Xy = M, Zy = "0123456789abcdef", e1 = Math.floor, t1 = Math.random, n1 = function() {
                for (var d = "#", f = 0; f < 6; f++) d += Zy.charAt(e1(t1() * 16));
                return new Xy(d, "hex")
            }, Sc = c, qf = Math.log, r1 = Math.pow, o1 = Math.floor, a1 = Math.abs, Kf = function(d, f) {
                f === void 0 && (f = null);
                var m = {
                    min: Number.MAX_VALUE,
                    max: Number.MAX_VALUE * -1,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return Sc(d) === "object" && (d = Object.values(d)), d.forEach(function(b) {
                    f && Sc(b) === "object" && (b = b[f]), b != null && !isNaN(b) && (m.values.push(b), m.sum += b, b < m.min && (m.min = b), b > m.max && (m.max = b), m.count += 1)
                }), m.domain = [m.min, m.max], m.limits = function(b, T) {
                    return Gf(m, b, T)
                }, m
            }, Gf = function(d, f, m) {
                f === void 0 && (f = "equal"), m === void 0 && (m = 7), Sc(d) == "array" && (d = Kf(d));
                var b = d.min,
                    T = d.max,
                    $ = d.values.sort(function(Lc, Oc) {
                        return Lc - Oc
                    });
                if (m === 1) return [b, T];
                var k = [];
                if (f.substr(0, 1) === "c" && (k.push(b), k.push(T)), f.substr(0, 1) === "e") {
                    k.push(b);
                    for (var L = 1; L < m; L++) k.push(b + L / m * (T - b));
                    k.push(T)
                } else if (f.substr(0, 1) === "l") {
                    if (b <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
                    var D = Math.LOG10E * qf(b),
                        V = Math.LOG10E * qf(T);
                    k.push(b);
                    for (var q = 1; q < m; q++) k.push(r1(10, D + q / m * (V - D)));
                    k.push(T)
                } else if (f.substr(0, 1) === "q") {
                    k.push(b);
                    for (var ce = 1; ce < m; ce++) {
                        var Y = ($.length - 1) * ce / m,
                            he = o1(Y);
                        if (he === Y) k.push($[he]);
                        else {
                            var pe = Y - he;
                            k.push($[he] * (1 - pe) + $[he + 1] * pe)
                        }
                    }
                    k.push(T)
                } else if (f.substr(0, 1) === "k") {
                    var Re, Ne = $.length,
                        He = new Array(Ne),
                        Ge = new Array(m),
                        At = !0,
                        Tt = 0,
                        zt = null;
                    zt = [], zt.push(b);
                    for (var je = 1; je < m; je++) zt.push(b + je / m * (T - b));
                    for (zt.push(T); At;) {
                        for (var X = 0; X < m; X++) Ge[X] = 0;
                        for (var Pe = 0; Pe < Ne; Pe++)
                            for (var Me = $[Pe], De = Number.MAX_VALUE, Lt = void 0, st = 0; st < m; st++) {
                                var ze = a1(zt[st] - Me);
                                ze < De && (De = ze, Lt = st), Ge[Lt]++, He[Pe] = Lt
                            }
                        for (var Je = new Array(m), Qe = 0; Qe < m; Qe++) Je[Qe] = null;
                        for (var Xe = 0; Xe < Ne; Xe++) Re = He[Xe], Je[Re] === null ? Je[Re] = $[Xe] : Je[Re] += $[Xe];
                        for (var un = 0; un < m; un++) Je[un] *= 1 / Ge[un];
                        At = !1;
                        for (var Un = 0; Un < m; Un++)
                            if (Je[Un] !== zt[Un]) {
                                At = !0;
                                break
                            }
                        zt = Je, Tt++, Tt > 200 && (At = !1)
                    }
                    for (var Wn = {}, Qr = 0; Qr < m; Qr++) Wn[Qr] = [];
                    for (var Yr = 0; Yr < Ne; Yr++) Re = He[Yr], Wn[Re].push($[Yr]);
                    for (var Pn = [], vr = 0; vr < m; vr++) Pn.push(Wn[vr][0]), Pn.push(Wn[vr][Wn[vr].length - 1]);
                    Pn = Pn.sort(function(Lc, Oc) {
                        return Lc - Oc
                    }), k.push(Pn[0]);
                    for (var Ao = 1; Ao < Pn.length; Ao += 2) {
                        var _r = Pn[Ao];
                        !isNaN(_r) && k.indexOf(_r) === -1 && k.push(_r)
                    }
                }
                return k
            }, Jf = {
                analyze: Kf,
                limits: Gf
            }, Qf = M, s1 = function(d, f) {
                d = new Qf(d), f = new Qf(f);
                var m = d.luminance(),
                    b = f.luminance();
                return m > b ? (m + .05) / (b + .05) : (b + .05) / (m + .05)
            }, Yf = M, Cn = Math.sqrt, _t = Math.pow, i1 = Math.min, l1 = Math.max, Xf = Math.atan2, Zf = Math.abs, Ri = Math.cos, ep = Math.sin, c1 = Math.exp, tp = Math.PI, u1 = function(d, f, m, b, T) {
                m === void 0 && (m = 1), b === void 0 && (b = 1), T === void 0 && (T = 1);
                var $ = function(_r) {
                        return 360 * _r / (2 * tp)
                    },
                    k = function(_r) {
                        return 2 * tp * _r / 360
                    };
                d = new Yf(d), f = new Yf(f);
                var L = Array.from(d.lab()),
                    D = L[0],
                    V = L[1],
                    q = L[2],
                    ce = Array.from(f.lab()),
                    Y = ce[0],
                    he = ce[1],
                    pe = ce[2],
                    Re = (D + Y) / 2,
                    Ne = Cn(_t(V, 2) + _t(q, 2)),
                    He = Cn(_t(he, 2) + _t(pe, 2)),
                    Ge = (Ne + He) / 2,
                    At = .5 * (1 - Cn(_t(Ge, 7) / (_t(Ge, 7) + _t(25, 7)))),
                    Tt = V * (1 + At),
                    zt = he * (1 + At),
                    je = Cn(_t(Tt, 2) + _t(q, 2)),
                    X = Cn(_t(zt, 2) + _t(pe, 2)),
                    Pe = (je + X) / 2,
                    Me = $(Xf(q, Tt)),
                    De = $(Xf(pe, zt)),
                    Lt = Me >= 0 ? Me : Me + 360,
                    st = De >= 0 ? De : De + 360,
                    ze = Zf(Lt - st) > 180 ? (Lt + st + 360) / 2 : (Lt + st) / 2,
                    Je = 1 - .17 * Ri(k(ze - 30)) + .24 * Ri(k(2 * ze)) + .32 * Ri(k(3 * ze + 6)) - .2 * Ri(k(4 * ze - 63)),
                    Qe = st - Lt;
                Qe = Zf(Qe) <= 180 ? Qe : st <= Lt ? Qe + 360 : Qe - 360, Qe = 2 * Cn(je * X) * ep(k(Qe) / 2);
                var Xe = Y - D,
                    un = X - je,
                    Un = 1 + .015 * _t(Re - 50, 2) / Cn(20 + _t(Re - 50, 2)),
                    Wn = 1 + .045 * Pe,
                    Qr = 1 + .015 * Pe * Je,
                    Yr = 30 * c1(-_t((ze - 275) / 25, 2)),
                    Pn = 2 * Cn(_t(Pe, 7) / (_t(Pe, 7) + _t(25, 7))),
                    vr = -Pn * ep(2 * k(Yr)),
                    Ao = Cn(_t(Xe / (m * Un), 2) + _t(un / (b * Wn), 2) + _t(Qe / (T * Qr), 2) + vr * (un / (b * Wn)) * (Qe / (T * Qr)));
                return l1(0, i1(100, Ao))
            }, np = M, d1 = function(d, f, m) {
                m === void 0 && (m = "lab"), d = new np(d), f = new np(f);
                var b = d.get(m),
                    T = f.get(m),
                    $ = 0;
                for (var k in b) {
                    var L = (b[k] || 0) - (T[k] || 0);
                    $ += L * L
                }
                return Math.sqrt($)
            }, f1 = M, p1 = function() {
                for (var d = [], f = arguments.length; f--;) d[f] = arguments[f];
                try {
                    return new(Function.prototype.bind.apply(f1, [null].concat(d))), !0
                } catch {
                    return !1
                }
            }, rp = F, op = Cc, h1 = {
                cool: function() {
                    return op([rp.hsl(180, 1, .9), rp.hsl(250, .7, .4)])
                },
                hot: function() {
                    return op(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
                }
            }, Di = {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
            }, Ac = 0, ap = Object.keys(Di); Ac < ap.length; Ac += 1) {
            var sp = ap[Ac];
            Di[sp.toLowerCase()] = Di[sp]
        }
        var m1 = Di,
            Et = F;
        Et.average = Sy, Et.bezier = My, Et.blend = Wy, Et.cubehelix = Yy, Et.mix = Et.interpolate = Mf, Et.random = n1, Et.scale = Cc, Et.analyze = Jf.analyze, Et.contrast = s1, Et.deltaE = u1, Et.distance = d1, Et.limits = Jf.limits, Et.valid = p1, Et.scales = h1, Et.colors = _f, Et.brewer = m1;
        var g1 = Et;
        return g1
    })
})(gv);
var jS = gv.exports;
const BS = mv(jS),
    HS = "0 0 0",
    zS = e => e ? BS(e).rgb().map(t => Number.isNaN(t) ? 0 : Math.round(t)).slice(0, 3).join(" ") : HS;

function rm(e, t) {
    Object.entries(t).forEach(([n, r]) => {
        VS(e, n, r)
    })
}

function VS(e, t, n) {
    const r = zS(n);
    window.document.documentElement.style.setProperty(`--color-${e}-${t}`, r)
}
var vv = {},
    _v = {},
    qd = {
        exports: {}
    },
    ct = String,
    bv = function() {
        return {
            isColorSupported: !1,
            reset: ct,
            bold: ct,
            dim: ct,
            italic: ct,
            underline: ct,
            inverse: ct,
            hidden: ct,
            strikethrough: ct,
            black: ct,
            red: ct,
            green: ct,
            yellow: ct,
            blue: ct,
            magenta: ct,
            cyan: ct,
            white: ct,
            gray: ct,
            bgBlack: ct,
            bgRed: ct,
            bgGreen: ct,
            bgYellow: ct,
            bgBlue: ct,
            bgMagenta: ct,
            bgCyan: ct,
            bgWhite: ct
        }
    };
qd.exports = bv();
qd.exports.createColors = bv;
var US = qd.exports;
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });

    function t(l, c) {
        for (var u in c) Object.defineProperty(l, u, {
            enumerable: !0,
            get: c[u]
        })
    }
    t(e, {
        dim: function() {
            return s
        },
        default: function() {
            return i
        }
    });
    const n = r(US);

    function r(l) {
        return l && l.__esModule ? l : {
            default: l
        }
    }
    let o = new Set;

    function a(l, c, u) {
        typeof process < "u" && {}.JEST_WORKER_ID || u && o.has(u) || (u && o.add(u), console.warn(""), c.forEach(p => console.warn(l, "-", p)))
    }

    function s(l) {
        return n.default.dim(l)
    }
    const i = {
        info(l, c) {
            a(n.default.bold(n.default.cyan("info")), ...Array.isArray(l) ? [l] : [c, l])
        },
        warn(l, c) {
            a(n.default.bold(n.default.yellow("warn")), ...Array.isArray(l) ? [l] : [c, l])
        },
        risk(l, c) {
            a(n.default.bold(n.default.magenta("risk")), ...Array.isArray(l) ? [l] : [c, l])
        }
    }
})(_v);
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = n(_v);

    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }

    function r({
        version: a,
        from: s,
        to: i
    }) {
        t.default.warn(`${s}-color-renamed`, [`As of Tailwind CSS ${a}, \`${s}\` has been renamed to \`${i}\`.`, "Update your configuration file to silence this warning."])
    }
    const o = {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        slate: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617"
        },
        gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
            950: "#030712"
        },
        zinc: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            950: "#09090b"
        },
        neutral: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
            950: "#0a0a0a"
        },
        stone: {
            50: "#fafaf9",
            100: "#f5f5f4",
            200: "#e7e5e4",
            300: "#d6d3d1",
            400: "#a8a29e",
            500: "#78716c",
            600: "#57534e",
            700: "#44403c",
            800: "#292524",
            900: "#1c1917",
            950: "#0c0a09"
        },
        red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
            950: "#450a0a"
        },
        orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407"
        },
        amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
            800: "#92400e",
            900: "#78350f",
            950: "#451a03"
        },
        yellow: {
            50: "#fefce8",
            100: "#fef9c3",
            200: "#fef08a",
            300: "#fde047",
            400: "#facc15",
            500: "#eab308",
            600: "#ca8a04",
            700: "#a16207",
            800: "#854d0e",
            900: "#713f12",
            950: "#422006"
        },
        lime: {
            50: "#f7fee7",
            100: "#ecfccb",
            200: "#d9f99d",
            300: "#bef264",
            400: "#a3e635",
            500: "#84cc16",
            600: "#65a30d",
            700: "#4d7c0f",
            800: "#3f6212",
            900: "#365314",
            950: "#1a2e05"
        },
        green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16"
        },
        emerald: {
            50: "#ecfdf5",
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
            700: "#047857",
            800: "#065f46",
            900: "#064e3b",
            950: "#022c22"
        },
        teal: {
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e"
        },
        cyan: {
            50: "#ecfeff",
            100: "#cffafe",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
            950: "#083344"
        },
        sky: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
            950: "#082f49"
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554"
        },
        indigo: {
            50: "#eef2ff",
            100: "#e0e7ff",
            200: "#c7d2fe",
            300: "#a5b4fc",
            400: "#818cf8",
            500: "#6366f1",
            600: "#4f46e5",
            700: "#4338ca",
            800: "#3730a3",
            900: "#312e81",
            950: "#1e1b4b"
        },
        violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065"
        },
        purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764"
        },
        fuchsia: {
            50: "#fdf4ff",
            100: "#fae8ff",
            200: "#f5d0fe",
            300: "#f0abfc",
            400: "#e879f9",
            500: "#d946ef",
            600: "#c026d3",
            700: "#a21caf",
            800: "#86198f",
            900: "#701a75",
            950: "#4a044e"
        },
        pink: {
            50: "#fdf2f8",
            100: "#fce7f3",
            200: "#fbcfe8",
            300: "#f9a8d4",
            400: "#f472b6",
            500: "#ec4899",
            600: "#db2777",
            700: "#be185d",
            800: "#9d174d",
            900: "#831843",
            950: "#500724"
        },
        rose: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
            800: "#9f1239",
            900: "#881337",
            950: "#4c0519"
        },
        get lightBlue() {
            return r({
                version: "v2.2",
                from: "lightBlue",
                to: "sky"
            }), this.sky
        },
        get warmGray() {
            return r({
                version: "v3.0",
                from: "warmGray",
                to: "stone"
            }), this.stone
        },
        get trueGray() {
            return r({
                version: "v3.0",
                from: "trueGray",
                to: "neutral"
            }), this.neutral
        },
        get coolGray() {
            return r({
                version: "v3.0",
                from: "coolGray",
                to: "gray"
            }), this.gray
        },
        get blueGray() {
            return r({
                version: "v3.0",
                from: "blueGray",
                to: "slate"
            }), this.slate
        }
    }
})(vv);
let eu = vv;
var WS = (eu.__esModule ? eu : {
    default: eu
}).default;
const It = mv(WS),
    qS = {
        class: "flex w-full items-center justify-between p-4 md:p-6"
    },
    KS = B("h3", {
        class: "font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
    }, " Theme configuration ", -1),
    GS = {
        class: "px-4 pb-4 md:px-6 md:pb-6 max-h-[550px] overflow-y-auto nui-slimscroll"
    },
    JS = {
        class: "grid grid-cols-12 gap-6"
    },
    QS = {
        key: 0,
        class: "col-span-12 sm:col-span-7 flex flex-col gap-4"
    },
    YS = {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted-100 dark:bg-muted-700/40 rounded-xl"
    },
    XS = {
        class: "bg-muted-50 dark:bg-muted-700/70 flex items-center justify-center rounded-lg py-6 sm:py-3"
    },
    ZS = ["src", "alt"],
    eA = ["src", "alt"],
    tA = {
        class: "flex items-center justify-between py-2"
    },
    nA = {
        class: "space-y-1"
    },
    rA = {
        class: "grid grid-cols-1 sm:grid-cols-2 gap-x-4"
    },
    oA = ["onClick"],
    aA = B("hr", {
        class: "border-muted-200 dark:border-muted-700"
    }, null, -1),
    sA = {
        type: "button",
        class: "group w-full flex items-center gap-3 p-2 rounded-lg"
    },
    iA = B("span", {
        class: "block h-6 w-6 rounded-lg bg-muted-200 dark:bg-muted-900"
    }, null, -1),
    lA = {
        class: "flex items-center px-2 pt-2"
    },
    cA = {
        class: "ml-auto flex items-center justify-end gap-2"
    },
    uA = ["data-nui-tooltip", "onClick"],
    dA = be({
        __name: "DemoAppLayoutSwitcher",
        setup(e) {
            const {
                layouts: t,
                activeLayoutName: n
            } = FS(), r = Kt(), o = yt("switcher-open", () => !1), a = Z("violet"), s = Z("slate");
            Ue([a, s], u);
            const i = j(() => !r.meta.layout || r.meta.layout === "default"),
                l = [{
                    name: "indigo",
                    label: "Indigo",
                    shades: It.indigo,
                    class: "bg-indigo-500"
                }, {
                    name: "sky",
                    label: "Sky",
                    shades: It.sky,
                    class: "bg-sky-500"
                }, {
                    name: "purple",
                    label: "Purple",
                    shades: It.purple,
                    class: "bg-purple-500"
                }, {
                    name: "violet",
                    label: "Violet",
                    shades: It.violet,
                    class: "bg-violet-500"
                }, {
                    name: "lime",
                    label: "Lime",
                    shades: It.lime,
                    class: "bg-lime-500"
                }, {
                    name: "teal",
                    label: "Teal",
                    shades: It.teal,
                    class: "bg-teal-500"
                }, {
                    name: "emerald",
                    label: "Emerald",
                    shades: It.emerald,
                    class: "bg-emerald-500"
                }, {
                    name: "rose",
                    label: "Rose",
                    shades: It.rose,
                    class: "bg-rose-500"
                }, {
                    name: "pink",
                    label: "Pink",
                    shades: It.pink,
                    class: "bg-pink-500"
                }, {
                    name: "yellow",
                    label: "Yellow",
                    shades: It.yellow,
                    class: "bg-yellow-500"
                }, {
                    name: "orange",
                    label: "Orange",
                    shades: It.orange,
                    class: "bg-orange-500"
                }, {
                    name: "mauve",
                    label: "Custom",
                    shades: {
                        50: "#EEECF9",
                        100: "#DCD8F3",
                        200: "#B6AEE5",
                        300: "#9488D8",
                        400: "#6E5DCB",
                        500: "#4E3CB9",
                        600: "#3E2F92",
                        700: "#302470",
                        800: "#1F1849",
                        900: "#100C27",
                        950: "#080613"
                    },
                    class: "bg-mauve-500"
                }],
                c = [{
                    name: "gray",
                    label: "Gray",
                    shades: It.gray,
                    class: "bg-gray-300 dark:bg-gray-900"
                }, {
                    name: "slate",
                    label: "Slate",
                    shades: It.slate,
                    class: "bg-slate-300 dark:bg-slate-900"
                }, {
                    name: "stone",
                    label: "Stone",
                    shades: It.stone,
                    class: "bg-stone-300 dark:bg-stone-900"
                }, {
                    name: "zinc",
                    label: "Zinc",
                    shades: It.zinc,
                    class: "bg-zinc-300 dark:bg-zinc-900"
                }, {
                    name: "neutral",
                    label: "Neutral",
                    shades: It.neutral,
                    class: "bg-neutral-300 dark:bg-neutral-900"
                }];

            function u() {
                o.value = !1
            }

            function p(_) {
                n.value = _, u()
            }

            function h(_) {
                a.value = _.name, rm("primary", _.shades)
            }

            function v(_) {
                s.value = _.name, rm("muted", _.shades)
            }
            return (_, g) => {
                const P = dv,
                    S = ki,
                    x = O$,
                    I = Md,
                    A = mr,
                    N = R$,
                    M = sv;
                return R(), me(M, {
                    open: y(o),
                    size: y(i) ? "2xl" : "sm",
                    onClose: g[0] || (g[0] = z => o.value = !1)
                }, {
                    header: ye(() => [B("div", qS, [KS, te(P, {
                        onClick: u
                    })])]),
                    default: ye(() => [B("div", GS, [B("div", JS, [y(i) ? (R(), Q("div", QS, [B("div", null, [te(S, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                    }, {
                        default: ye(() => [et(" Layout selection ")]),
                        _: 1
                    }), te(x, {
                        size: "sm",
                        class: "text-muted-400"
                    }, {
                        default: ye(() => [et(" Select the layout you want to use for your application ")]),
                        _: 1
                    })]), B("div", YS, [(R(!0), Q(Le, null, Pt(y(t), z => (R(), me(N, {
                        key: z.name,
                        role: "button",
                        shape: "curved",
                        class: K(["p-2", y(n) === z.name && "!border-primary-500"]),
                        onClick: F => p(z.name)
                    }, {
                        default: ye(() => [B("div", XS, [B("img", {
                            src: `/img/illustrations/switcher/layout-${z.name}-default.svg`,
                            class: K(["block dark:hidden max-w-[110px] mx-auto transition-opacity duration-200", y(n) === z.name ? "opacity-100" : "opacity-60"]),
                            alt: `${z.name} layout`
                        }, null, 10, ZS), B("img", {
                            src: `/img/illustrations/switcher/layout-${z.name}-default-dark.svg`,
                            class: K(["hidden dark:block max-w-[110px] mx-auto transition-opacity duration-200", y(n) === z.name ? "opacity-100" : "opacity-60"]),
                            alt: `${z.name} layout`
                        }, null, 10, eA)]), B("div", tA, [te(I, {
                            size: "xs",
                            class: K(["capitalize", y(n) === z.name ? "text-muted-600 dark:text-muted-100" : "text-muted-400 dark:text-muted-500"])
                        }, {
                            default: ye(() => [et(it(z.name) + " Layout ", 1)]),
                            _: 2
                        }, 1032, ["class"]), te(A, {
                            name: "ph:check-circle-duotone",
                            class: K(["w-5 h-5 text-success-500 transition-opacity duration-200", y(n) === z.name ? "opacity-100" : "opacity-0"])
                        }, null, 8, ["class"])])]),
                        _: 2
                    }, 1032, ["class", "onClick"]))), 128))])])) : Te("", !0), B("div", {
                        class: K(["col-span-12 flex flex-col gap-4", [y(i) ? "sm:col-span-5" : ""]])
                    }, [B("div", null, [te(S, {
                        as: "h4",
                        size: "sm",
                        weight: "medium",
                        class: "text-muted-900 dark:text-white"
                    }, {
                        default: ye(() => [et(" Color selection ")]),
                        _: 1
                    }), te(x, {
                        size: "sm",
                        class: "text-muted-400"
                    }, {
                        default: ye(() => [et(" Make changes to the color palette ")]),
                        _: 1
                    })]), B("div", nA, [B("div", rA, [(R(), Q(Le, null, Pt(l, z => B("div", {
                        key: z.name
                    }, [B("button", {
                        type: "button",
                        class: K(["group w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-700/70 transition-colors duration-200", [y(a) === z.name ? "ring-1 ring-primary-500 z-10 relative" : "ring-0"]]),
                        onClick: () => h(z)
                    }, [B("span", {
                        class: K(["block h-6 w-6 rounded-lg shrink-0", z.class])
                    }, null, 2), te(I, {
                        size: "sm"
                    }, {
                        default: ye(() => [et(it(z.label), 1)]),
                        _: 2
                    }, 1024)], 10, oA)])), 64))]), aA, B("div", null, [B("button", sA, [iA, te(I, {
                        size: "sm"
                    }, {
                        default: ye(() => [et("Background shade")]),
                        _: 1
                    })]), B("div", lA, [te(I, {
                        size: "xs",
                        class: "text-muted-400"
                    }, {
                        default: ye(() => [et("Pick a shade")]),
                        _: 1
                    }), B("div", cA, [(R(), Q(Le, null, Pt(c, z => B("button", {
                        key: z.name,
                        type: "button",
                        class: K(["block h-6 w-6 rounded-full", [z.class, y(s) === z.name ? "ring-1 ring-primary-500" : "ring-0"]]),
                        "data-nui-tooltip": z.label,
                        onClick: () => v(z)
                    }, null, 10, uA)), 64))])])])])], 2)])])]),
                    _: 1
                }, 8, ["open", "size"])
            }
        }
    }),
    fA = be({
        name: "NuxtLoadingIndicator",
        props: {
            throttle: {
                type: Number,
                default: 200
            },
            duration: {
                type: Number,
                default: 2e3
            },
            height: {
                type: Number,
                default: 3
            },
            color: {
                type: [String, Boolean],
                default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
            }
        },
        setup(e, {
            slots: t
        }) {
            const n = pA({
                    duration: e.duration,
                    throttle: e.throttle
                }),
                r = tt(),
                o = Tn();
            return rl.unshift(n.start), o.onError(() => {
                n.finish()
            }), o.beforeResolve((a, s) => {
                (a === s || a.matched.every((i, l) => i.components && i.components ? .default === s.matched[l] ? .components ? .default)) && n.finish()
            }), o.afterEach((a, s, i) => {
                i && n.finish()
            }), r.hook("page:finish", n.finish), r.hook("vue:error", n.finish), Fn(() => {
                const a = rl.indexOf(n.start);
                a >= 0 && rl.splice(a, 1), n.clear()
            }), () => Ie("div", {
                class: "nuxt-loading-indicator",
                style: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    pointerEvents: "none",
                    width: "auto",
                    height: `${e.height}px`,
                    opacity: n.isLoading.value ? 1 : 0,
                    background: e.color || void 0,
                    backgroundSize: `${100/n.progress.value*100}% auto`,
                    transform: `scaleX(${n.progress.value}%)`,
                    transformOrigin: "left",
                    transition: "transform 0.1s, height 0.4s, opacity 0.4s",
                    zIndex: 999999
                }
            }, t)
        }
    });

function pA(e) {
    const t = Z(0),
        n = Z(!1),
        r = j(() => 1e4 / e.duration);
    let o = null,
        a = null;

    function s() {
        l(), t.value = 0, e.throttle ? a = setTimeout(() => {
            n.value = !0, p()
        }, e.throttle) : (n.value = !0, p())
    }

    function i() {
        t.value = 100, u()
    }

    function l() {
        clearInterval(o), clearTimeout(a), o = null, a = null
    }

    function c(h) {
        t.value = Math.min(100, t.value + h)
    }

    function u() {
        l(), setTimeout(() => {
            n.value = !1, setTimeout(() => {
                t.value = 0
            }, 400)
        }, 500)
    }

    function p() {
        o = setInterval(() => {
            c(r.value)
        }, 100)
    }
    return {
        progress: t,
        isLoading: n,
        start: s,
        finish: i,
        clear: l
    }
}
const hA = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => e.params[n.slice(1)] ? .toString() || ""),
    Zu = (e, t) => {
        const n = e.route.matched.find(o => o.components ? .default === e.Component.type),
            r = t ? ? n ? .meta.key ? ? (n && hA(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    mA = (e, t) => ({
        default: () => e ? Ie(Hm, e === !0 ? {} : e, t) : t
    }),
    gA = be({
        name: "RouteProvider",
        props: {
            vnode: {
                type: Object,
                required: !0
            },
            route: {
                type: Object,
                required: !0
            },
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(e) {
            const t = e.renderKey,
                n = e.route,
                r = {};
            for (const o in e.route) Object.defineProperty(r, o, {
                get: () => t === e.renderKey ? e.route[o] : n[o]
            });
            return $t(yi, hi(r)), () => Ie(e.vnode, {
                ref: e.vnodeRef
            })
        }
    }),
    yv = (e, t, n) => (t = t === !0 ? {} : t, {
        default: () => t ? Ie(e, t, n) : n.default ? .()
    }),
    vA = be({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t,
            expose: n
        }) {
            const r = tt(),
                o = Z(),
                a = rt(yi, null);
            n({
                pageRef: o
            });
            const s = rt(Yg, null);
            let i;
            const l = r.deferHydration();
            return () => Ie(u0, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: c => {
                    const u = yA(a, c.route, c.Component),
                        p = a && a.matched.length === c.route.matched.length;
                    if (!c.Component) return i && !p ? i : void 0;
                    if (i && s && !s.isCurrent(c.route)) return i;
                    if (u && a && (!s || s ? .isCurrent(a))) return p ? i : null;
                    const h = Zu(c, e.pageKey),
                        v = !!(e.transition ? ? c.route.meta.pageTransition ? ? Tu),
                        _ = v && bA([e.transition, c.route.meta.pageTransition, Tu, {
                            onAfterLeave: () => {
                                r.callHook("page:transition:finish", c.Component)
                            }
                        }].filter(Boolean));
                    return i = yv(To, v && _, mA(e.keepalive ? ? c.route.meta.keepalive ? ? sE, Ie(mi, {
                        suspensible: !0,
                        onPending: () => r.callHook("page:start", c.Component),
                        onResolve: () => {
                            Gt(() => r.callHook("page:finish", c.Component).finally(l))
                        }
                    }, {
                        default: () => Ie(gA, {
                            key: h,
                            vnode: c.Component,
                            route: c.route,
                            renderKey: h,
                            trackRootNodes: v,
                            vnodeRef: o
                        })
                    }))).default(), i
                }
            })
        }
    });

function _A(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}

function bA(e) {
    const t = e.map(n => ({ ...n,
        onAfterLeave: _A(n.onAfterLeave)
    }));
    return Yl(...t)
}

function yA(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex(o => o.components ? .default === n ? .type);
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((o, a) => o.components ? .default !== e.matched[a] ? .components ? .default) || n && Zu({
        route: t,
        Component: n
    }) !== Zu({
        route: e,
        Component: n
    })
}
const wA = be({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        async setup(e, t) {
            const n = await Sr[e.name]().then(r => r.default || r);
            return () => Ie(n, e.layoutProps, t.slots)
        }
    }),
    xA = be({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            }
        },
        setup(e, t) {
            const n = tt(),
                r = rt(yi),
                o = r === Kt() ? A5() : r,
                a = j(() => y(e.name) ? ? o.meta.layout ? ? "default"),
                s = Z();
            t.expose({
                layoutRef: s
            });
            const i = n.deferHydration();
            return () => {
                const l = a.value && a.value in Sr,
                    c = o.meta.layoutTransition ? ? aE;
                return yv(To, l && c, {
                    default: () => Ie(mi, {
                        suspensible: !0,
                        onResolve: () => {
                            Gt(i)
                        }
                    }, {
                        default: () => Ie(kA, {
                            layoutProps: tn(t.attrs, {
                                ref: s
                            }),
                            key: a.value,
                            name: a.value,
                            shouldProvide: !e.name,
                            hasTransition: !!c
                        }, t.slots)
                    })
                }).default()
            }
        }
    }),
    kA = be({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(e, t) {
            const n = e.name;
            return e.shouldProvide && $t(Yg, {
                isCurrent: r => n === (r.meta.layout ? ? "default")
            }), () => !n || typeof n == "string" && !(n in Sr) ? t.slots.default ? .() : Ie(wA, {
                key: n,
                layoutProps: e.layoutProps,
                name: n
            }, t.slots)
        }
    }),
    EA = be({
        __name: "app",
        setup(e) {
            const t = Kt(),
                n = ut();
            return nE({
                title: () => t.meta ? .title ? ? "",
                titleTemplate: r => r ? `${r} - ${n.tairo.title}` : `${n.tairo.title}`,
                htmlAttrs: {
                    lang: "en",
                    dir: "ltr"
                },
                link: [{
                    rel: "icon",
                    type: "image/png",
                    href: "/img/favicon.png"
                }],
                meta: [{
                    name: "description",
                    content: () => t.meta.description ? ? "The most advanced Nuxt and Tailwind CSS dashboard template"
                }, {
                    name: "twitter:card",
                    content: "summary_large_image"
                }, {
                    name: "twitter:site",
                    content: "@cssninjaStudio"
                }, {
                    name: "og:image:type",
                    content: "image/png"
                }, {
                    name: "og:image:width",
                    content: "1200"
                }, {
                    name: "og:image:height",
                    content: "630"
                }, {
                    name: "og:image",
                    content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(t.meta.description||(t.meta.preview?`${t.meta.preview?.title} - ${t.meta.preview?.description}`:"Nuxt & Tailwind CSS dashboard system"))}&url=${encodeURIComponent("https://media.cssninja.io/content/products/logos/tairo-text-white.svg")}&previewUrl=${encodeURIComponent(`https://tairo.cssninja.io${t.meta.preview?.src||"/img/screens/documentation-hub.png"}`)}`
                }]
            }), (r, o) => {
                const a = T$,
                    s = dA,
                    i = Wl("VueAxePopup"),
                    l = fA,
                    c = vA,
                    u = xA;
                return R(), Q("div", null, [te(a), te(s), te(i), te(u, null, {
                    default: ye(() => [te(l, {
                        color: "rgb(var(--color-primary-500))"
                    }), te(c)]),
                    _: 1
                })])
            }
        }
    }),
    TA = be({
        name: "DevOnly",
        setup(e, t) {
            return () => t.slots.fallback ? .()
        }
    }),
    CA = {
        class: "nui-placeholder-page-inner"
    },
    PA = {
        key: 0,
        class: "nui-placeholder-page-img"
    },
    $A = {
        class: "nui-placeholder-page-content"
    },
    SA = {
        key: 0,
        class: "nui-placeholder-page-subtitle"
    },
    AA = be({
        __name: "BasePlaceholderPage",
        props: {
            title: {},
            subtitle: {
                default: void 0
            },
            imageSize: {
                default: "xs"
            }
        },
        setup(e) {
            const t = e,
                n = {
                    xs: "nui-placeholder-xs",
                    sm: "nui-placeholder-sm",
                    md: "nui-placeholder-md",
                    lg: "nui-placeholder-lg",
                    xl: "nui-placeholder-xl"
                };
            return (r, o) => {
                const a = ki;
                return R(), Q("div", {
                    class: K(["nui-placeholder-page", n[t.imageSize]])
                }, [B("div", CA, ["image" in r.$slots ? (R(), Q("div", PA, [Fe(r.$slots, "image")])) : Te("", !0), B("div", $A, [te(a, {
                    as: "h4",
                    weight: "medium",
                    size: "xl",
                    class: "nui-placeholder-page-title"
                }, {
                    default: ye(() => [et(it(t.title), 1)]),
                    _: 1
                }), t.subtitle ? (R(), Q("p", SA, it(t.subtitle), 1)) : Te("", !0), Fe(r.$slots, "default")])])], 2)
            }
        }
    }),
    LA = {
        class: "pb-16"
    },
    OA = {
        class: "mt-4"
    },
    RA = {
        class: "text-muted-400/20 dark:text-muted-400/10 absolute inset-x-0 top-1/3 -translate-y-1/2 text-[13rem] font-bold sm:text-[20rem]"
    },
    DA = {
        class: "mx-auto flex w-full max-w-xs items-center justify-center gap-2"
    },
    IA = B("span", null, "Clear Error", -1),
    MA = be({
        __name: "TairoError",
        props: {
            error: {}
        },
        setup(e) {
            const t = e,
                n = j(() => t.error ? .statusCode === 401 ? "Not authorized" : t.error ? .statusCode === 404 ? "Page not found" : "Oops... Something went wrong"),
                r = j(() => t.error ? .statusCode === 401 ? "You are not authorized to access this page." : t.error ? .statusCode === 404 ? "We couldn't find the page you were looking for, please contact a system administrator or try again later." : "An error has occured. If the problem persists, please contact a system administrator or try again later."),
                o = ut(),
                a = () => Au({
                    redirect: "/"
                }),
                s = () => Au();
            return Z(!0), (i, l) => {
                const c = mr,
                    u = pv,
                    p = TA,
                    h = AA;
                return R(), Q("div", LA, [te(h, {
                    title: y(n),
                    subtitle: y(r),
                    "image-size": "md",
                    class: "relative !items-end"
                }, {
                    image: ye(() => [y(o).tairo.error ? .logo ? .component ? (R(), me(dt(("resolveComponentOrNative" in i ? i.resolveComponentOrNative : y(xt))(y(o).tairo.error.logo.component)), jt(tn({
                        key: 0
                    }, y(o).tairo.error.logo.props)), null, 16)) : Te("", !0)]),
                    default: ye(() => [B("div", OA, [B("div", RA, [B("span", null, it(t.error ? .statusCode), 1)]), B("div", DA, [te(u, {
                        shape: "curved",
                        class: "mx-auto !h-12 w-full max-w-[160px] items-center gap-2",
                        onClick: a
                    }, {
                        default: ye(() => [te(c, {
                            name: "feather:arrow-left"
                        }), et(" Back to home ")]),
                        _: 1
                    }), te(p, null, {
                        default: ye(() => [te(u, {
                            color: "muted",
                            shape: "curved",
                            class: "mx-auto !h-12 w-full max-w-[160px]",
                            onClick: s
                        }, {
                            default: ye(() => [te(c, {
                                name: "feather:refresh-cw",
                                class: "h-3 w-3"
                            }), IA]),
                            _: 1
                        })]),
                        _: 1
                    })])])]),
                    _: 1
                }, 8, ["title", "subtitle"])])
            }
        }
    });
const FA = be({
        __name: "error",
        props: {
            error: {}
        },
        setup(e) {
            const t = e,
                n = ut();
            return (r, o) => {
                const a = MA,
                    s = Xu;
                return R(), me(s, {
                    sidebar: !1
                }, {
                    "toolbar-title": ye(() => [et(it(y(n).tairo.title), 1)]),
                    default: ye(() => [te(a, {
                        error: t.error
                    }, null, 8, ["error"])]),
                    _: 1
                })
            }
        }
    }),
    NA = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = tt(),
                r = n.deferHydration(),
                o = !1;
            $t(yi, Kt()), n.hooks.callHookWith(i => i.map(l => l()), "vue:setup");
            const a = Xl();
            Vm((i, l, c) => {
                if (n.hooks.callHook("vue:error", i, l, c).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)), CE(i) && (i.fatal || i.unhandled)) return n.runWithContext(() => eo(i)), !1
            });
            const {
                islandContext: s
            } = !1;
            return (i, l) => (R(), me(mi, {
                onResolve: y(r)
            }, {
                default: ye(() => [y(a) ? (R(), me(y(FA), {
                    key: 0,
                    error: y(a)
                }, null, 8, ["error"])) : y(s) ? (R(), me(y(t), {
                    key: 1,
                    context: y(s)
                }, null, 8, ["context"])) : y(o) ? (R(), me(dt(y(o)), {
                    key: 2
                })) : (R(), me(y(EA), {
                    key: 3
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    },
    om = NA;
globalThis.$fetch || (globalThis.$fetch = G2.create({
    baseURL: Q2()
}));
let am; {
    let e;
    am = async function() {
        if (e) return e;
        const r = !!(window.__NUXT__ ? .serverRendered || document.getElementById("__NUXT_DATA__") ? .dataset.ssr === "true") ? s2(om) : a2(om),
            o = ck({
                vueApp: r
            });
        try {
            await dk(o, PP)
        } catch (a) {
            await o.callHook("app:error", a), o.payload.error = o.payload.error || a
        }
        try {
            await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount("#" + iE), await o.hooks.callHook("app:mounted", r), await Gt()
        } catch (a) {
            await o.callHook("app:error", a), o.payload.error = o.payload.error || a
        }
        return r
    }, e = am().catch(t => {
        console.error("Error while mounting app:", t)
    })
}
export {
    Rr as $, K6 as A, S6 as B, Be as C, j as D, et as E, Le as F, t2 as G, y as H, mr as I, hr as J, ki as K, O$ as L, U3 as M, pv as N, Md as O, hx as P, R$ as Q, hn as R, G6 as S, To as T, jt as U, mn as V, uo as W, mt as X, Pt as Y, D6 as Z, C as _, Rt as a, U0 as a$, UA as a0, Fu as a1, Ue as a2, Uw as a3, T6 as a4, co as a5, dd as a6, Gt as a7, lS as a8, dv as a9, v4 as aA, q0 as aB, W0 as aC, wt as aD, l4 as aE, Xt as aF, qu as aG, F6 as aH, $l as aI, jn as aJ, B0 as aK, Fd as aL, Nd as aM, Pl as aN, g4 as aO, H0 as aP, Yx as aQ, j6 as aR, nr as aS, N6 as aT, Br as aU, Qh as aV, A6 as aW, av as aX, NS as aY, xi as aZ, B6 as a_, me as aa, tn as ab, Fn as ac, ZA as ad, Ie as ae, Fe as af, bo as ag, Q$ as ah, en as ai, b0 as aj, bg as ak, fP as al, j3 as am, $t as an, ko as ao, rt as ap, Dt as aq, jl as ar, dt as as, se as at, R6 as au, Eg as av, WA as aw, Wl as ax, hS as ay, En as az, R as b, U6 as b$, $4 as b0, H4 as b1, J0 as b2, b4 as b3, ei as b4, Ws as b5, V0 as b6, qw as b7, E6 as b8, AA as b9, r$ as bA, Cm as bB, i6 as bC, mv as bD, po as bE, Sg as bF, uv as bG, Vd as bH, Ei as bI, nm as bJ, i$ as bK, l$ as bL, cv as bM, gP as bN, M6 as bO, bl as bP, k6 as bQ, FS as bR, Ud as bS, MS as bT, tm as bU, q6 as bV, An as bW, H6 as bX, W6 as bY, V6 as bZ, z6 as b_, Y3 as ba, Oh as bb, dC as bc, $6 as bd, yg as be, _u as bf, al as bg, O6 as bh, I6 as bi, TE as bj, Xu as bk, Au as bl, xt as bm, F0 as bn, vA as bo, Z$ as bp, nE as bq, L6 as br, _i as bs, xu as bt, bi as bu, Ql as bv, P6 as bw, y2 as bx, Wd as by, md as bz, Q as c, h6 as c$, a$ as c0, Dg as c1, Mw as c2, jm as c3, Bt as c4, um as c5, Hm as c6, Rl as c7, io as c8, mi as c9, fm as cA, fd as cB, Eo as cC, Jm as cD, o2 as cE, g6 as cF, C6 as cG, xx as cH, Tm as cI, oo as cJ, Dr as cK, m6 as cL, pl as cM, Mr as cN, u6 as cO, d6 as cP, pd as cQ, jw as cR, hd as cS, Vm as cT, zw as cU, Hw as cV, D1 as cW, Bw as cX, Ul as cY, $m as cZ, Om as c_, fx as ca, kd as cb, KA as cc, sn as cd, ar as ce, Zt as cf, Ll as cg, kn as ch, y6 as ci, ix as cj, f6 as ck, sx as cl, s2 as cm, XA as cn, fw as co, Bx as cp, t6 as cq, n6 as cr, a6 as cs, r6 as ct, e6 as cu, w6 as cv, o6 as cw, Lo as cx, BA as cy, jA as cz, be as d, bu as d0, b6 as d1, ii as d2, Ap as d3, ww as d4, fo as d5, hi as d6, zA as d7, yx as d8, _6 as d9, HA as da, Zi as db, p6 as dc, VA as dd, l6 as de, x6 as df, c6 as dg, wx as dh, Nm as di, xg as dj, dg as dk, qA as dl, Rw as dm, YA as dn, s6 as dp, v6 as dq, QA as dr, J6 as ds, sv as dt, MA as du, m0 as dv, B as e, Te as f, te as g, ol as h, JA as i, tt as j, nc as k, jr as l, yt as m, K as n, vt as o, GA as p, u$ as q, Z as r, Kt as s, it as t, Tn as u, fk as v, ye as w, ut as x, Yl as y, a2 as z
};