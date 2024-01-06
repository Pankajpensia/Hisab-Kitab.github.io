import {
    d as f,
    x as k,
    D as y,
    b as n,
    c as s,
    e as x,
    af as d,
    n as r,
    f as e,
    t as h,
    H as l
} from "./entry.ab3e2748.js";
const _ = {
        class: "nui-avatar-inner"
    },
    S = ["src"],
    b = ["src"],
    w = {
        key: 2,
        class: "nui-avatar-text"
    },
    B = {
        key: 0,
        class: "nui-avatar-badge"
    },
    D = ["src"],
    z = f({
        __name: "BaseAvatar",
        props: {
            src: {
                default: void 0
            },
            srcDark: {
                default: void 0
            },
            badgeSrc: {
                default: void 0
            },
            text: {
                default: "?"
            },
            size: {
                default: "sm"
            },
            shape: {
                default: void 0
            },
            mask: {
                default: void 0
            },
            dot: {
                type: [Boolean, String],
                default: !1
            },
            ring: {
                type: [Boolean, String],
                default: !1
            }
        },
        setup(c) {
            const a = c,
                g = k(),
                t = y(() => a.shape ? ? g.nui.defaultShapes ? .avatar),
                u = {
                    success: "nui-dot-success",
                    primary: "nui-dot-primary",
                    info: "nui-dot-info",
                    warning: "nui-dot-warning",
                    danger: "nui-dot-danger",
                    pink: "nui-dot-pink",
                    yellow: "nui-dot-yellow"
                },
                o = {
                    success: "nui-ring-success",
                    primary: "nui-ring-primary",
                    info: "nui-ring-info",
                    warning: "nui-ring-warning",
                    danger: "nui-ring-danger",
                    pink: "nui-ring-pink",
                    yellow: "nui-ring-yellow"
                },
                m = {
                    xxs: "nui-avatar-xxs",
                    xs: "nui-avatar-xs",
                    sm: "nui-avatar-sm",
                    md: "nui-avatar-md",
                    lg: "nui-avatar-lg",
                    xl: "nui-avatar-xl",
                    "2xl": "nui-avatar-2xl",
                    "3xl": "nui-avatar-3xl",
                    "4xl": "nui-avatar-4xl"
                },
                v = {
                    straight: "nui-avatar-straight",
                    rounded: "nui-avatar-rounded",
                    curved: "nui-avatar-curved",
                    full: "nui-avatar-full"
                },
                p = {
                    hex: "nui-mask-hex",
                    hexed: "nui-mask-hexed",
                    deca: "nui-mask-deca",
                    blob: "nui-mask-blob",
                    diamond: "nui-mask-diamond"
                };
            return (i, $) => (n(), s("div", {
                class: r(["nui-avatar", [m[a.size], l(t) && v[l(t)], a.mask && `nui-avatar-mask ${p[a.mask]}`, a.ring && (a.ring === !0 ? `nui-avatar-ring ${o.primary}` : `nui-avatar-ring ${o[a.ring]}`)]])
            }, [x("div", _, [d(i.$slots, "default", {}, () => [a.src ? (n(), s("img", {
                key: 0,
                src: a.src,
                class: r(["nui-avatar-img", [a.srcDark ? "dark:hidden" : ""]])
            }, null, 10, S)) : e("", !0), a.src && a.srcDark ? (n(), s("img", {
                key: 1,
                src: a.srcDark,
                class: "nui-avatar-img hidden"
            }, null, 8, b)) : e("", !0), a.src ? e("", !0) : (n(), s("span", w, h(a.text), 1))])]), "badge" in i.$slots || a.badgeSrc ? (n(), s("div", B, [d(i.$slots, "badge", {}, () => [a.badgeSrc ? (n(), s("img", {
                key: 0,
                src: a.badgeSrc,
                class: "nui-badge-img",
                alt: ""
            }, null, 8, D)) : e("", !0)])])) : e("", !0), a.dot ? (n(), s("span", {
                key: 1,
                class: r(["nui-avatar-dot", [a.dot === !0 ? u.primary : u[a.dot]]])
            }, null, 2)) : e("", !0)], 2))
        }
    });
export {
    z as _
};