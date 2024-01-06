import {
    _ as u
} from "./BaseAvatar.vue.97d6ac95.js";
import {
    d as p,
    b as e,
    c as r,
    af as m,
    F as c,
    Y as g,
    g as v,
    ab as d,
    e as n,
    t as f,
    f as _,
    n as h
} from "./entry.ab3e2748.js";
const x = {
        key: 0,
        class: "nui-avatar-count"
    },
    y = {
        class: "nui-avatar-count-inner"
    },
    z = {
        class: "nui-avatar-count-text"
    },
    C = p({
        __name: "BaseAvatarGroup",
        props: {
            limit: {
                default: 4
            },
            size: {
                default: "sm"
            },
            avatars: {}
        },
        setup(i) {
            const t = i,
                o = {
                    xxs: "nui-avatar-group-xxs",
                    xs: "nui-avatar-group-xs",
                    sm: "nui-avatar-group-sm",
                    md: "nui-avatar-group-md",
                    lg: "nui-avatar-group-lg",
                    xl: "nui-avatar-group-lg",
                    "2xl": "nui-avatar-group-lg",
                    "3xl": "nui-avatar-group-lg",
                    "4xl": "nui-avatar-group-lg"
                };
            return (a, B) => {
                const l = u;
                return e(), r("div", {
                    class: h(["nui-avatar-group", [o[t.size]]])
                }, [m(a.$slots, "default", {}, () => [(e(!0), r(c, null, g(a.avatars.length <= a.limit ? a.avatars : a.avatars.slice(0, t.limit - 1), s => (e(), r("div", {
                    key: typeof s == "string" ? s : s.src,
                    class: "nui-avatar-outer"
                }, [v(l, d(typeof s == "string" ? {
                    src: s
                } : s, {
                    size: t.size,
                    shape: "full",
                    tabindex: "0",
                    class: "bg-primary-500/20 text-primary-500 !scale-90"
                }), null, 16, ["size"])]))), 128)), a.avatars.length > t.limit ? (e(), r("div", x, [n("div", y, [n("span", z, " +" + f(a.avatars.length - t.limit + 1), 1)])])) : _("", !0)])], 2)
            }
        }
    });
export {
    C as _
};