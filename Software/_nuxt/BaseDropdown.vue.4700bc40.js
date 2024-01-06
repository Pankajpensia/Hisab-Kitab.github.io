import {
    d as S,
    ay as N,
    b as a,
    aa as g,
    w as l,
    as as D,
    H as e,
    ab as P,
    af as n,
    e as s,
    n as d,
    E as B,
    t as f,
    c as m,
    f as $,
    x as V,
    D as I,
    g as u,
    U as h,
    V as v,
    T as L,
    I as R,
    N as T
} from "./entry.ab3e2748.js";
import {
    y as E,
    R as M,
    h as j,
    M as A
} from "./menu.780a0af3.js";
const H = {
        class: "nui-item-content"
    },
    U = {
        key: 0,
        class: "text-muted-400 font-sans text-xs"
    },
    Z = S({
        __name: "BaseDropdownItem",
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
            shape: {
                default: void 0
            },
            color: {
                default: "default"
            },
            rel: {
                default: void 0
            },
            target: {
                default: void 0
            },
            title: {
                default: void 0
            },
            text: {
                default: void 0
            },
            classes: {
                default: () => ({
                    title: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",
                    text: "text-muted-400 font-sans text-xs"
                })
            }
        },
        setup(_) {
            const t = _,
                b = {
                    straight: "",
                    rounded: "nui-item-rounded",
                    smooth: "nui-item-smooth",
                    curved: "nui-item-curved"
                },
                c = {
                    default: "nui-item-default",
                    contrast: "nui-item-contrast"
                },
                {
                    is: y,
                    attributes: x
                } = N(t);
            return (o, k) => (a(), g(e(E), {
                as: "div"
            }, {
                default: l(({
                    active: r,
                    close: C
                }) => [(a(), g(D(e(y)), P(e(x), {
                    class: ["nui-dropdown-item", [r && "nui-active", t.shape && b[t.shape], c[t.color]]],
                    onClickPassive: C
                }), {
                    default: l(() => [n(o.$slots, "start"), s("div", H, [s("div", {
                        class: d(t.classes.title)
                    }, [n(o.$slots, "default", {}, () => [B(f(t.title), 1)])], 2), "text" in o.$slots || t.text ? (a(), m("p", U, [n(o.$slots, "text", {}, () => [B(f(t.text), 1)])])) : $("", !0)]), n(o.$slots, "end")]),
                    _: 2
                }, 1040, ["class", "onClickPassive"]))]),
                _: 3
            }))
        }
    }),
    q = {
        key: 1,
        type: "button",
        class: "nui-context-button"
    },
    F = {
        class: "nui-context-button-inner"
    },
    G = {
        key: 2,
        type: "button",
        class: "nui-text-button"
    },
    J = {
        class: "nui-text-button-inner"
    },
    K = {
        key: 0,
        class: "nui-menu-header"
    },
    O = {
        class: "nui-menu-header-inner"
    },
    Q = {
        class: "nui-menu-header-title"
    },
    W = {
        class: "nui-menu-content"
    },
    tt = S({
        __name: "BaseDropdown",
        props: {
            flavor: {
                default: "button"
            },
            buttonColor: {
                default: "default"
            },
            color: {
                default: "white"
            },
            shape: {
                default: void 0
            },
            orientation: {
                default: "start"
            },
            size: {
                default: "md"
            },
            label: {
                default: ""
            },
            headerLabel: {
                default: void 0
            }
        },
        setup(_) {
            const t = _,
                b = V(),
                c = I(() => t.shape ? ? b.nui.defaultShapes ? .dropdown),
                y = {
                    start: "nui-dropdown-start",
                    end: "nui-dropdown-end"
                },
                x = {
                    md: "nui-menu-md",
                    lg: "nui-menu-lg"
                },
                o = {
                    straight: "",
                    rounded: "nui-menu-rounded",
                    smooth: "nui-menu-smooth",
                    curved: "nui-menu-curved",
                    full: "nui-menu-curved"
                },
                k = {
                    white: "nui-menu-white",
                    "white-contrast": "nui-menu-white-contrast",
                    muted: "nui-menu-muted",
                    "muted-contrast": "nui-menu-muted-contrast",
                    primary: "nui-menu-primary",
                    info: "nui-menu-info",
                    success: "nui-menu-success",
                    warning: "nui-menu-warning",
                    danger: "nui-menu-danger",
                    none: ""
                };
            return (r, C) => {
                const w = R,
                    z = T;
                return a(), m("div", {
                    class: d(["nui-dropdown", [y[t.orientation]]])
                }, [u(e(A), {
                    as: "div",
                    class: "nui-menu"
                }, {
                    default: l(({
                        open: i,
                        close: p
                    }) => [u(e(M), {
                        as: "template"
                    }, {
                        default: l(() => [n(r.$slots, "button", h(v({
                            open: i,
                            close: p
                        })), () => [t.flavor === "button" ? (a(), g(z, {
                            key: 0,
                            color: t.buttonColor,
                            shape: e(c),
                            class: "!pe-3 !ps-4"
                        }, {
                            default: l(() => [n(r.$slots, "label", h(v({
                                open: i,
                                close: p
                            })), () => [s("span", null, f(t.label), 1)]), u(w, {
                                name: "lucide:chevron-down",
                                class: d(["nui-chevron", i && "rotate-180"])
                            }, null, 8, ["class"])]),
                            _: 2
                        }, 1032, ["color", "shape"])) : t.flavor === "context" ? (a(), m("button", q, [s("span", F, [u(w, {
                            name: "lucide:more-horizontal",
                            class: d(["nui-context-icon", i && "rotate-90"])
                        }, null, 8, ["class"])])])) : t.flavor === "text" ? (a(), m("button", G, [n(r.$slots, "label", h(v({
                            open: i,
                            close: p
                        })), () => [s("span", J, f(t.label), 1)]), u(w, {
                            name: "lucide:chevron-down",
                            class: d(["nui-chevron", i && "rotate-180"])
                        }, null, 8, ["class"])])) : $("", !0)])]),
                        _: 2
                    }, 1024), u(L, {
                        "enter-active-class": "transition duration-100 ease-out",
                        "enter-from-class": "transform scale-95 opacity-0",
                        "enter-to-class": "transform scale-100 opacity-100",
                        "leave-active-class": "transition duration-75 ease-in",
                        "leave-from-class": "transform scale-100 opacity-100",
                        "leave-to-class": "transform scale-95 opacity-0"
                    }, {
                        default: l(() => [u(e(j), {
                            class: d(["nui-dropdown-menu", [e(c) && o[e(c)], x[t.size], k[t.color]]])
                        }, {
                            default: l(() => [t.headerLabel ? (a(), m("div", K, [s("div", O, [s("h4", Q, f(t.headerLabel), 1)])])) : $("", !0), s("div", W, [n(r.$slots, "default", h(v({
                                open: i,
                                close: p
                            })))])]),
                            _: 2
                        }, 1032, ["class"])]),
                        _: 2
                    }, 1024)]),
                    _: 3
                })], 2)
            }
        }
    });
export {
    Z as _, tt as a
};