import {
    k as _,
    b as s,
    c as a,
    e,
    d as p,
    D as h,
    a6 as f,
    ak as g,
    H as v,
    X as k,
    g as l,
    n as x
} from "./entry.ab3e2748.js";
import {
    u as M
} from "./composables.5d7dee4e.js";
const B = {},
    b = {
        "aria-hidden": "true",
        viewBox: "0 0 24 24"
    },
    C = e("g", {
        fill: "currentColor",
        stroke: "currentColor",
        class: "stroke-2"
    }, [e("circle", {
        cx: "12",
        cy: "12",
        r: "5"
    }), e("path", {
        d: "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
    })], -1),
    T = [C];

function $(t, n) {
    return s(), a("svg", b, T)
}
const y = _(B, [
        ["render", $]
    ]),
    w = {},
    D = {
        "aria-hidden": "true",
        viewBox: "0 0 24 24"
    },
    E = e("path", {
        fill: "currentColor",
        stroke: "currentColor",
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",
        class: "stroke-2"
    }, null, -1),
    V = [E];

function z(t, n) {
    return s(), a("svg", D, V)
}
const I = _(w, [
        ["render", z]
    ]),
    L = {
        class: "nui-theme-toggle-inner"
    },
    H = p({
        __name: "BaseThemeToggle",
        props: {
            inverted: {
                type: Boolean,
                default: !1
            },
            disableTransitions: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const n = t,
                c = M(),
                o = h({
                    get() {
                        return c.value === "dark"
                    },
                    set(r) {
                        n.disableTransitions && document.documentElement.classList.add("nui-no-transition"), c.preference = r ? "dark" : "light", n.disableTransitions && setTimeout(() => {
                            document.documentElement.classList.remove("nui-no-transition")
                        }, 0)
                    }
                });
            return (r, i) => {
                const u = y,
                    d = I;
                return s(), a("label", {
                    class: x(["nui-theme-toggle", n.inverted && "nui-theme-toggle-inverted"])
                }, [f(e("input", {
                    "onUpdate:modelValue": i[0] || (i[0] = m => k(o) ? o.value = m : null),
                    type: "checkbox",
                    class: "nui-theme-toggle-input"
                }, null, 512), [
                    [g, v(o)]
                ]), e("span", L, [l(u, {
                    class: "nui-sun"
                }), l(d, {
                    class: "nui-moon"
                })])], 2)
            }
        }
    });
export {
    H as _, y as a, I as b
};