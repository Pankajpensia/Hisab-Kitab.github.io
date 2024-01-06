import {
    d as x,
    r as R,
    aA as F,
    D as S,
    aB as $,
    aC as N,
    aD as c,
    an as B,
    aE as L,
    az as K,
    aF as P,
    aJ as T,
    aL as w,
    aM as j,
    aN as D,
    o as U,
    a as _,
    ai as V,
    a7 as y,
    ap as q,
    aP as v,
    aR as H,
    aS as O,
    aT as E,
    aO as J
} from "./entry.ab3e2748.js";
import {
    u as Q,
    x as z,
    a as b
} from "./use-tracked-pointer.975289db.js";
import {
    p as W
} from "./use-tree-walker.8f4d0e5a.js";
import {
    b as Y
} from "./use-resolve-button-type.8bfbdb65.js";
import {
    p as Z
} from "./use-text-value.d92f8611.js";
var G = (a => (a[a.Open = 0] = "Open", a[a.Closed = 1] = "Closed", a))(G || {}),
    X = (a => (a[a.Pointer = 0] = "Pointer", a[a.Other = 1] = "Other", a))(X || {});

function ee(a) {
    requestAnimationFrame(() => requestAnimationFrame(a))
}
let A = Symbol("MenuContext");

function k(a) {
    let g = q(A, null);
    if (g === null) {
        let M = new Error(`<${a} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(M, k), M
    }
    return g
}
let ue = x({
        name: "Menu",
        props: {
            as: {
                type: [Object, String],
                default: "template"
            }
        },
        setup(a, {
            slots: g,
            attrs: M
        }) {
            let f = R(1),
                e = R(null),
                d = R(null),
                s = R([]),
                I = R(""),
                i = R(null),
                o = R(1);

            function t(l = u => u) {
                let u = i.value !== null ? s.value[i.value] : null,
                    r = J(l(s.value.slice()), m => c(m.dataRef.domRef)),
                    n = u ? r.indexOf(u) : null;
                return n === -1 && (n = null), {
                    items: r,
                    activeItemIndex: n
                }
            }
            let p = {
                menuState: f,
                buttonRef: e,
                itemsRef: d,
                items: s,
                searchQuery: I,
                activeItemIndex: i,
                activationTrigger: o,
                closeMenu: () => {
                    f.value = 1, i.value = null
                },
                openMenu: () => f.value = 0,
                goToItem(l, u, r) {
                    let n = t(),
                        m = z(l === b.Specific ? {
                            focus: b.Specific,
                            id: u
                        } : {
                            focus: l
                        }, {
                            resolveItems: () => n.items,
                            resolveActiveIndex: () => n.activeItemIndex,
                            resolveId: h => h.id,
                            resolveDisabled: h => h.dataRef.disabled
                        });
                    I.value = "", i.value = m, o.value = r ? ? 1, s.value = n.items
                },
                search(l) {
                    let u = I.value !== "" ? 0 : 1;
                    I.value += l.toLowerCase();
                    let r = (i.value !== null ? s.value.slice(i.value + u).concat(s.value.slice(0, i.value + u)) : s.value).find(m => m.dataRef.textValue.startsWith(I.value) && !m.dataRef.disabled),
                        n = r ? s.value.indexOf(r) : -1;
                    n === -1 || n === i.value || (i.value = n, o.value = 1)
                },
                clearSearch() {
                    I.value = ""
                },
                registerItem(l, u) {
                    let r = t(n => [...n, {
                        id: l,
                        dataRef: u
                    }]);
                    s.value = r.items, i.value = r.activeItemIndex, o.value = 1
                },
                unregisterItem(l) {
                    let u = t(r => {
                        let n = r.findIndex(m => m.id === l);
                        return n !== -1 && r.splice(n, 1), r
                    });
                    s.value = u.items, i.value = u.activeItemIndex, o.value = 1
                }
            };
            return F([e, d], (l, u) => {
                var r;
                p.closeMenu(), $(u, N.Loose) || (l.preventDefault(), (r = c(e)) == null || r.focus())
            }, S(() => f.value === 0)), B(A, p), L(S(() => K(f.value, {
                [0]: P.Open,
                [1]: P.Closed
            }))), () => {
                let l = {
                    open: f.value === 0,
                    close: p.closeMenu
                };
                return T({
                    ourProps: {},
                    theirProps: a,
                    slot: l,
                    slots: g,
                    attrs: M,
                    name: "Menu"
                })
            }
        }
    }),
    re = x({
        name: "MenuButton",
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            as: {
                type: [Object, String],
                default: "button"
            },
            id: {
                type: String,
                default: () => `headlessui-menu-button-${w()}`
            }
        },
        setup(a, {
            attrs: g,
            slots: M,
            expose: f
        }) {
            let e = k("MenuButton");
            f({
                el: e.buttonRef,
                $el: e.buttonRef
            });

            function d(o) {
                switch (o.key) {
                    case v.Space:
                    case v.Enter:
                    case v.ArrowDown:
                        o.preventDefault(), o.stopPropagation(), e.openMenu(), y(() => {
                            var t;
                            (t = c(e.itemsRef)) == null || t.focus({
                                preventScroll: !0
                            }), e.goToItem(b.First)
                        });
                        break;
                    case v.ArrowUp:
                        o.preventDefault(), o.stopPropagation(), e.openMenu(), y(() => {
                            var t;
                            (t = c(e.itemsRef)) == null || t.focus({
                                preventScroll: !0
                            }), e.goToItem(b.Last)
                        });
                        break
                }
            }

            function s(o) {
                switch (o.key) {
                    case v.Space:
                        o.preventDefault();
                        break
                }
            }

            function I(o) {
                a.disabled || (e.menuState.value === 0 ? (e.closeMenu(), y(() => {
                    var t;
                    return (t = c(e.buttonRef)) == null ? void 0 : t.focus({
                        preventScroll: !0
                    })
                })) : (o.preventDefault(), e.openMenu(), ee(() => {
                    var t;
                    return (t = c(e.itemsRef)) == null ? void 0 : t.focus({
                        preventScroll: !0
                    })
                })))
            }
            let i = Y(S(() => ({
                as: a.as,
                type: g.type
            })), e.buttonRef);
            return () => {
                var o;
                let t = {
                        open: e.menuState.value === 0
                    },
                    {
                        id: p,
                        ...l
                    } = a,
                    u = {
                        ref: e.buttonRef,
                        id: p,
                        type: i.value,
                        "aria-haspopup": "menu",
                        "aria-controls": (o = c(e.itemsRef)) == null ? void 0 : o.id,
                        "aria-expanded": e.menuState.value === 0,
                        onKeydown: d,
                        onKeyup: s,
                        onClick: I
                    };
                return T({
                    ourProps: u,
                    theirProps: l,
                    slot: t,
                    attrs: g,
                    slots: M,
                    name: "MenuButton"
                })
            }
        }
    }),
    se = x({
        name: "MenuItems",
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
            id: {
                type: String,
                default: () => `headlessui-menu-items-${w()}`
            }
        },
        setup(a, {
            attrs: g,
            slots: M,
            expose: f
        }) {
            let e = k("MenuItems"),
                d = R(null);
            f({
                el: e.itemsRef,
                $el: e.itemsRef
            }), W({
                container: S(() => c(e.itemsRef)),
                enabled: S(() => e.menuState.value === 0),
                accept(t) {
                    return t.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
                },
                walk(t) {
                    t.setAttribute("role", "none")
                }
            });

            function s(t) {
                var p;
                switch (d.value && clearTimeout(d.value), t.key) {
                    case v.Space:
                        if (e.searchQuery.value !== "") return t.preventDefault(), t.stopPropagation(), e.search(t.key);
                    case v.Enter:
                        if (t.preventDefault(), t.stopPropagation(), e.activeItemIndex.value !== null) {
                            let l = e.items.value[e.activeItemIndex.value];
                            (p = c(l.dataRef.domRef)) == null || p.click()
                        }
                        e.closeMenu(), E(c(e.buttonRef));
                        break;
                    case v.ArrowDown:
                        return t.preventDefault(), t.stopPropagation(), e.goToItem(b.Next);
                    case v.ArrowUp:
                        return t.preventDefault(), t.stopPropagation(), e.goToItem(b.Previous);
                    case v.Home:
                    case v.PageUp:
                        return t.preventDefault(), t.stopPropagation(), e.goToItem(b.First);
                    case v.End:
                    case v.PageDown:
                        return t.preventDefault(), t.stopPropagation(), e.goToItem(b.Last);
                    case v.Escape:
                        t.preventDefault(), t.stopPropagation(), e.closeMenu(), y(() => {
                            var l;
                            return (l = c(e.buttonRef)) == null ? void 0 : l.focus({
                                preventScroll: !0
                            })
                        });
                        break;
                    case v.Tab:
                        t.preventDefault(), t.stopPropagation(), e.closeMenu(), y(() => H(c(e.buttonRef), t.shiftKey ? O.Previous : O.Next));
                        break;
                    default:
                        t.key.length === 1 && (e.search(t.key), d.value = setTimeout(() => e.clearSearch(), 350));
                        break
                }
            }

            function I(t) {
                switch (t.key) {
                    case v.Space:
                        t.preventDefault();
                        break
                }
            }
            let i = j(),
                o = S(() => i !== null ? (i.value & P.Open) === P.Open : e.menuState.value === 0);
            return () => {
                var t, p;
                let l = {
                        open: e.menuState.value === 0
                    },
                    {
                        id: u,
                        ...r
                    } = a,
                    n = {
                        "aria-activedescendant": e.activeItemIndex.value === null || (t = e.items.value[e.activeItemIndex.value]) == null ? void 0 : t.id,
                        "aria-labelledby": (p = c(e.buttonRef)) == null ? void 0 : p.id,
                        id: u,
                        onKeydown: s,
                        onKeyup: I,
                        role: "menu",
                        tabIndex: 0,
                        ref: e.itemsRef
                    };
                return T({
                    ourProps: n,
                    theirProps: r,
                    slot: l,
                    attrs: g,
                    slots: M,
                    features: D.RenderStrategy | D.Static,
                    visible: o.value,
                    name: "MenuItems"
                })
            }
        }
    }),
    ie = x({
        name: "MenuItem",
        inheritAttrs: !1,
        props: {
            as: {
                type: [Object, String],
                default: "template"
            },
            disabled: {
                type: Boolean,
                default: !1
            },
            id: {
                type: String,
                default: () => `headlessui-menu-item-${w()}`
            }
        },
        setup(a, {
            slots: g,
            attrs: M,
            expose: f
        }) {
            let e = k("MenuItem"),
                d = R(null);
            f({
                el: d,
                $el: d
            });
            let s = S(() => e.activeItemIndex.value !== null ? e.items.value[e.activeItemIndex.value].id === a.id : !1),
                I = Z(d),
                i = S(() => ({
                    disabled: a.disabled,
                    get textValue() {
                        return I()
                    },
                    domRef: d
                }));
            U(() => e.registerItem(a.id, i)), _(() => e.unregisterItem(a.id)), V(() => {
                e.menuState.value === 0 && s.value && e.activationTrigger.value !== 0 && y(() => {
                    var n, m;
                    return (m = (n = c(d)) == null ? void 0 : n.scrollIntoView) == null ? void 0 : m.call(n, {
                        block: "nearest"
                    })
                })
            });

            function o(n) {
                if (a.disabled) return n.preventDefault();
                e.closeMenu(), E(c(e.buttonRef))
            }

            function t() {
                if (a.disabled) return e.goToItem(b.Nothing);
                e.goToItem(b.Specific, a.id)
            }
            let p = Q();

            function l(n) {
                p.update(n)
            }

            function u(n) {
                p.wasMoved(n) && (a.disabled || s.value || e.goToItem(b.Specific, a.id, 0))
            }

            function r(n) {
                p.wasMoved(n) && (a.disabled || s.value && e.goToItem(b.Nothing))
            }
            return () => {
                let {
                    disabled: n
                } = a, m = {
                    active: s.value,
                    disabled: n,
                    close: e.closeMenu
                }, {
                    id: h,
                    ...C
                } = a;
                return T({
                    ourProps: {
                        id: h,
                        ref: d,
                        role: "menuitem",
                        tabIndex: n === !0 ? void 0 : -1,
                        "aria-disabled": n === !0 ? !0 : void 0,
                        disabled: void 0,
                        onClick: o,
                        onFocus: t,
                        onPointerenter: l,
                        onMouseenter: l,
                        onPointermove: u,
                        onMousemove: u,
                        onPointerleave: r,
                        onMouseleave: r
                    },
                    theirProps: { ...M,
                        ...C
                    },
                    slot: m,
                    attrs: M,
                    slots: g,
                    name: "MenuItem"
                })
            }
        }
    });
export {
    ue as M, re as R, se as h, ie as y
};