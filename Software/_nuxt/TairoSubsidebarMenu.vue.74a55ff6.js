import {
    k as I,
    b as t,
    c as s,
    d as y,
    bI as $,
    ag as L,
    g as f,
    w as S,
    e as l,
    t as v,
    J as M,
    r as g,
    s as P,
    D as R,
    ai as V,
    H as p,
    f as b,
    n as h,
    G as A,
    F as k,
    Y as T,
    I as E,
    aa as x,
    ab as C
} from "./entry.ab3e2748.js";
const F = {},
    W = {
        class: "border-muted-200 dark:border-muted-700 my-3 h-px w-full border-t"
    };

function z(i, e) {
    return t(), s("li", W)
}
const G = I(F, [
        ["render", z]
    ]),
    H = {
        class: "mb-1 flex min-h-[2rem] items-center"
    },
    J = {
        class: "font-sans text-sm"
    },
    Y = y({
        __name: "TairoSubsidebarMenuLink",
        props: {
            name: {},
            to: {}
        },
        setup(i) {
            const e = i,
                {
                    toggle: n
                } = $(),
                {
                    xl: r
                } = L();

            function c() {
                console.log("onClick", e.name, r.value), !r.value && n()
            }
            return (u, d) => {
                const o = M;
                return t(), s("li", H, [f(o, {
                    to: e.to,
                    class: "nui-focus text-muted-400 hover:text-primary-500 flex w-full items-center transition-colors duration-300",
                    onClickPassive: c
                }, {
                    default: S(() => [l("span", J, v(e.name), 1)]),
                    _: 1
                }, 8, ["to"])])
            }
        }
    }),
    j = {
        class: "group mb-1 min-h-[2rem]"
    },
    q = ["onClick"],
    K = {
        class: "text-muted-400 group-hover:text-primary-500 relative inline-flex items-center gap-2 font-sans text-sm transition-colors duration-300"
    },
    O = {
        key: 0,
        class: "bg-primary-500 absolute -start-3 top-2 h-1 w-1 rounded-full"
    },
    Q = {
        key: 0,
        class: "py-2"
    },
    U = {
        class: "font-sans text-xs"
    },
    X = y({
        __name: "TairoSubsidebarMenuCollapseLinks",
        props: {
            name: {},
            children: {}
        },
        setup(i) {
            const e = i,
                n = g(!1),
                r = P(),
                c = g(),
                u = R(() => e.children.some(a => a.exact === !0 ? r.path === a.to : r.path.startsWith(a.to)));
            V(() => {
                u.value && (n.value = !0)
            });

            function d() {
                n.value = !n.value, n.value || c.value ? .blur()
            }

            function o(a) {
                return a.exact && r.path === a.to || !a.exact && r.path.startsWith(a.to)
            }
            const {
                toggle: _
            } = $(), {
                xl: B
            } = L();

            function N() {
                B.value || _()
            }
            return (a, Z) => {
                const w = E,
                    D = M;
                return t(), s("li", j, [l("a", {
                    ref_key: "buttonRef",
                    ref: c,
                    href: "#",
                    class: "nui-focus relative top-0.5 flex items-center",
                    onClick: A(d, ["stop", "prevent"])
                }, [l("span", K, [p(u) ? (t(), s("span", O)) : b("", !0), l("span", null, v(e.name), 1)]), f(w, {
                    name: "feather:chevron-down",
                    class: h(["text-muted-400 ms-auto block h-4 w-4 transition-transform duration-300", {
                        "group-focus-within:rotate-180": !p(n),
                        "rotate-180": p(n)
                    }])
                }, null, 8, ["class"])], 8, q), l("div", {
                    class: h(["transition-all duration-150", {
                        "max-h-0 overflow-hidden opacity-0 group-focus-within:max-h-max group-focus-within:overflow-visible group-focus-within:opacity-100": !p(n),
                        "max-h-max opacity-100": p(n)
                    }])
                }, [e ? .children ? (t(), s("ul", Q, [(t(!0), s(k, null, T(e.children, m => (t(), s("li", {
                    key: m.to,
                    class: "flex h-8 w-full items-center"
                }, [f(D, {
                    to: m.to,
                    class: h([{
                        "text-primary-500": o(m)
                    }, "nui-focus text-muted-400 hover:text-primary-500 focus:text-primary-500 flex w-full items-center ps-3 transition-colors duration-300"]),
                    onClickPassive: N
                }, {
                    default: S(() => [f(w, {
                        name: m.icon,
                        class: "me-2 h-5 w-5"
                    }, null, 8, ["name"]), l("span", U, v(m.name), 1)]),
                    _: 2
                }, 1032, ["to", "class"])]))), 128))])) : b("", !0)], 2)])
            }
        }
    }),
    et = y({
        __name: "TairoSubsidebarMenu",
        props: {
            navigation: {}
        },
        setup(i) {
            const e = i;
            return (n, r) => {
                const c = G,
                    u = Y,
                    d = X;
                return t(), s("ul", null, [(t(!0), s(k, null, T(e.navigation, (o, _) => (t(), s(k, null, ["divider" in o ? (t(), x(c, {
                    key: `${_}-divider`
                })) : "to" in o ? (t(), x(u, C({
                    key: 1
                }, o, {
                    key: `${_}-link`
                }), null, 16)) : "children" in o ? (t(), x(d, C({
                    key: 2
                }, o, {
                    key: `${_}-collapse`
                }), null, 16)) : b("", !0)], 64))), 256))])
            }
        }
    });
export {
    et as _
};