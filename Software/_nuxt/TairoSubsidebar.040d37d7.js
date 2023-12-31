import {
    d,
    bI as _,
    b as o,
    c as n,
    H as r,
    t as u,
    f,
    e,
    g as m,
    I as h,
    k as p,
    af as c
} from "./entry.ab3e2748.js";
const x = {
        class: "flex h-16 w-full items-center px-6"
    },
    v = {
        key: 0,
        class: "font-heading text-muted-700 text-lg font-light capitalize dark:text-white"
    },
    I = d({
        __name: "TairoSubsidebarHeader",
        setup(t) {
            const {
                current: s,
                isOpen: l
            } = _();
            return (S, a) => {
                const i = h;
                return o(), n("div", x, [r(s) ? (o(), n("div", v, u(r(s).title), 1)) : f("", !0), e("button", {
                    type: "button",
                    class: "text-muted-400 hover:bg-muted-100 hover:text-muted-600 ms-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 xl:hidden",
                    onClick: a[0] || (a[0] = B => l.value = !1)
                }, [m(i, {
                    name: "feather:chevron-left",
                    class: "h-6 w-6"
                })])])
            }
        }
    }),
    b = {},
    g = {
        class: "flex h-screen flex-col"
    },
    w = {
        class: "nui-slimscroll relative h-full w-full overflow-y-auto"
    },
    k = {
        class: "px-6 pb-8"
    },
    $ = e("div", {
        class: "dark:from-muted-800 pointer-events-none fixed bottom-0 z-10 h-10 w-[212px] bg-gradient-to-t from-white to-transparent"
    }, null, -1);

function y(t, s) {
    return o(), n("div", g, [c(t.$slots, "header"), e("div", w, [e("div", k, [c(t.$slots, "default")]), $])])
}
const N = p(b, [
    ["render", y]
]);
export {
    I as _, N as a
};