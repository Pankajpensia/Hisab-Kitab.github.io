import {
    d as m,
    b as d,
    c as _,
    e,
    g as s,
    w as o,
    n as a,
    aa as p,
    f as x,
    K as f,
    L as h,
    I as u
} from "./entry.ab3e2748.js";
import {
    _ as v
} from "./BaseAvatar.vue.97d6ac95.js";
const y = {
        class: "flex h-full flex-col"
    },
    g = {
        class: "flex-1"
    },
    w = e("span", null, "Maya R.", -1),
    B = e("span", {
        class: "text-primary-500 text-xs"
    }, "Tairo HQ", -1),
    b = e("span", {
        class: "text-muted-400 text-xs"
    }, "UI/UX designer", -1),
    k = {
        class: "flex-1 shrink-0"
    },
    C = {
        class: "mb-4 space-y-2 font-sans"
    },
    z = e("span", {
        class: "text-muted-400 text-xs"
    }, "Los Angeles, CA", -1),
    V = e("span", {
        class: "text-muted-400 text-xs"
    }, "+1 444-751-5156", -1),
    j = {
        class: "border-muted-200 dark:border-muted-700 mt-auto flex items-end justify-between border-t pt-3"
    },
    A = e("a", {
        href: "mailto:maya@tairo.io",
        class: "text-primary-500 font-sans text-sm underline-offset-4 hover:underline"
    }, " maya@tairo.io ", -1),
    L = m({
        __name: "DemoVcardRight",
        props: {
            centered: {
                type: Boolean
            }
        },
        setup(r) {
            const t = r;
            return (I, N) => {
                const i = f,
                    c = h,
                    l = v,
                    n = u;
                return d(), _("div", y, [e("div", {
                    class: a(["mb-4 flex items-center", t.centered && "flex-col-reverse"])
                }, [e("div", g, [s(i, {
                    as: "h3",
                    size: "md",
                    weight: "medium",
                    lead: "relaxed",
                    class: a(["text-muted-800 dark:text-white", t.centered && "text-center"])
                }, {
                    default: o(() => [w]),
                    _: 1
                }, 8, ["class"]), t.centered ? x("", !0) : (d(), p(c, {
                    key: 0,
                    lead: "none"
                }, {
                    default: o(() => [B]),
                    _: 1
                })), s(c, {
                    lead: "none",
                    class: a(t.centered && "text-center")
                }, {
                    default: o(() => [b]),
                    _: 1
                }, 8, ["class"])]), e("div", k, [e("div", {
                    class: a(["mx-auto", t.centered ? "w-16" : "w-12"])
                }, [s(l, {
                    src: "/img/avatars/2.svg",
                    size: t.centered ? "lg" : "md"
                }, null, 8, ["size"])], 2)])], 2), e("div", C, [e("div", {
                    class: a(["flex items-end gap-2", t.centered && "justify-center"])
                }, [s(n, {
                    name: "ph:map-pin-duotone",
                    class: "text-primary-500 h-4 w-4"
                }), z], 2), e("div", {
                    class: a(["flex items-end gap-2", t.centered && "justify-center"])
                }, [s(n, {
                    name: "ph:phone-duotone",
                    class: "text-primary-500 h-4 w-4"
                }), V], 2)]), e("div", j, [A, s(n, {
                    name: "ph:envelope-duotone",
                    class: "text-muted-400 h-4 w-4"
                })])])
            }
        }
    });
export {
    L as _
};