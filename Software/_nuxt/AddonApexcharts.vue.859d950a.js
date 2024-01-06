import {
    m as f,
    at as x,
    _ as y,
    a7 as v,
    d as g,
    r as p,
    au as C,
    b as s,
    c as k,
    H as a,
    aa as n,
    a5 as i,
    f as A,
    g as w,
    w as L,
    a6 as b,
    U as z,
    ab as P,
    av as B,
    aj as V
} from "./entry.ab3e2748.js";
import {
    _ as E
} from "./client-only.862c29b4.js";
const u = () => f("apex-loaded", () => !1),
    O = x({
        suspensible: !1,
        loader: () => y(() =>
            import ("./vue3-apexcharts.common.ed1d0aa6.js").then(e => e.v), ["./vue3-apexcharts.common.ed1d0aa6.js", "./entry.ab3e2748.js", "./entry.55c1e76c.css"],
            import.meta.url).then(e => (v(() => {
            u().value = !0
        }), e.default))
    });

function S() {
    const e = u();
    return {
        LazyApexCharts: O,
        isLoaded: e
    }
}
const T = g({
    __name: "AddonApexcharts",
    props: {
        type: {},
        height: {},
        width: {},
        series: {},
        options: {}
    },
    setup(e) {
        const _ = e,
            {
                LazyApexCharts: m,
                isLoaded: r
            } = S(),
            l = p(null),
            o = p(!1),
            {
                stop: d
            } = C(l, ([{
                isIntersecting: t
            }]) => {
                t && (o.value = t, d())
            });
        return (t, D) => {
            const c = V,
                h = E;
            return s(), k("div", {
                ref_key: "target",
                ref: l
            }, [!a(r) && !a(o) ? (s(), n(c, {
                key: 0,
                class: "m-4 w-[calc(100%-32px)]",
                style: i({
                    height: `${t.height-32}px`
                })
            }, null, 8, ["style"])) : A("", !0), w(h, null, {
                default: L(() => [a(o) ? b((s(), n(a(m), z(P({
                    key: 0
                }, _)), null, 16)), [
                    [B, a(r)]
                ]) : (s(), n(c, {
                    key: 1,
                    class: "m-4 w-[calc(100%-32px)]",
                    style: i({
                        height: `${t.height-32}px`
                    })
                }, null, 8, ["style"]))]),
                _: 1
            })], 512)
        }
    }
});
export {
    T as _
};