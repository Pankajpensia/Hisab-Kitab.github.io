import {
    _ as x
} from "./DemoWizardStepTitle.vue.04789c37.js";
import {
    d as w,
    bq as f,
    b,
    c as k,
    g as e,
    e as t,
    n as m,
    H as a,
    w as s,
    t as p,
    G as _,
    K as y,
    L as z,
    N as C,
    J as S
} from "./entry.ab3e2748.js";
import {
    u as U
} from "./multi-step-form.03b99d2b.js";
const L = "" + globalThis.__publicAssetsURL("img/illustrations/wizard/design.svg"),
    B = "" + globalThis.__publicAssetsURL("img/illustrations/wizard/development.svg"),
    M = "" + globalThis.__publicAssetsURL("img/illustrations/wizard/marketing.svg"),
    T = {
        class: "mx-auto w-full max-w-6xl px-4 text-center"
    },
    A = {
        class: "ltablet:grid-cols-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    },
    D = t("img", {
        class: "rounded-2xl",
        src: L,
        alt: "UI/UX design"
    }, null, -1),
    N = {
        class: "my-4"
    },
    W = t("span", null, "UI/UX design", -1),
    $ = t("span", null, " UI/UX is done to improve interaction between the user and the product. ", -1),
    H = {
        class: "mb-5 flex flex-col items-center"
    },
    I = {
        class: "mt-4 text-center"
    },
    R = t("span", null, "Learn More", -1),
    X = t("img", {
        class: "rounded-2xl",
        src: B,
        alt: "Web Development"
    }, null, -1),
    j = {
        class: "my-4"
    },
    P = t("span", null, "Web Development", -1),
    V = t("span", null, " A discipline that involves the creation of websites and web applications ", -1),
    q = {
        class: "mb-5 flex flex-col items-center"
    },
    E = {
        class: "mt-4 text-center"
    },
    F = t("span", null, "Learn More", -1),
    G = t("img", {
        class: "rounded-2xl",
        src: M,
        alt: "Web Development"
    }, null, -1),
    J = {
        class: "my-4"
    },
    K = t("span", null, "Marketing", -1),
    O = t("span", null, " A discipline that involves the creation of promotional content ", -1),
    Q = {
        class: "mb-5 flex flex-col items-center"
    },
    Y = {
        class: "mt-4 text-center"
    },
    Z = t("span", null, "Learn More", -1),
    at = w({
        __name: "index",
        setup(tt) {
            const {
                getNextStep: d,
                data: n,
                goToStep: g
            } = U();
            f({
                title: "Project type"
            });

            function i(h) {
                const o = d();
                o && (n.value.type = h, g(o))
            }
            return (h, o) => {
                const v = x,
                    l = y,
                    r = z,
                    c = C,
                    u = S;
                return b(), k("div", null, [e(v), t("div", T, [t("div", A, [t("div", {
                    class: m(["dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl", [a(n).type === "design" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""]])
                }, [D, t("div", N, [e(l, {
                    tag: "h3",
                    weight: "medium",
                    size: "xl",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                }, {
                    default: s(() => [W]),
                    _: 1
                }), e(r, {
                    class: "text-muted-400"
                }, {
                    default: s(() => [$]),
                    _: 1
                })]), t("div", H, [e(c, {
                    to: a(d)() ? .to,
                    color: "primary",
                    shape: "curved",
                    class: "w-36",
                    onClick: o[0] || (o[0] = _(() => i("design"), ["prevent"]))
                }, {
                    default: s(() => [t("span", null, p(a(n).type === "design" ? "Selected" : "Continue"), 1)]),
                    _: 1
                }, 8, ["to"]), t("div", I, [e(u, {
                    to: "/wizard",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
                }, {
                    default: s(() => [R]),
                    _: 1
                })])])], 2), t("div", {
                    class: m(["dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl", [a(n).type === "development" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""]])
                }, [X, t("div", j, [e(l, {
                    tag: "h3",
                    weight: "medium",
                    size: "xl",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                }, {
                    default: s(() => [P]),
                    _: 1
                }), e(r, {
                    class: "text-muted-400"
                }, {
                    default: s(() => [V]),
                    _: 1
                })]), t("div", q, [e(c, {
                    to: a(d)() ? .to,
                    color: "primary",
                    shape: "curved",
                    class: "w-36",
                    onClick: o[1] || (o[1] = _(() => i("development"), ["prevent"]))
                }, {
                    default: s(() => [t("span", null, p(a(n).type === "development" ? "Selected" : "Continue"), 1)]),
                    _: 1
                }, 8, ["to"]), t("div", E, [e(u, {
                    to: "/wizard",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
                }, {
                    default: s(() => [F]),
                    _: 1
                })])])], 2), t("div", {
                    class: m(["dark:hover:bg-muted-800 hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 group rounded-2xl p-5 transition-all duration-300 hover:bg-white hover:shadow-xl", [a(n).type === "marketing" ? "dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-800/30 bg-white shadow-xl" : ""]])
                }, [G, t("div", J, [e(l, {
                    tag: "h3",
                    weight: "medium",
                    size: "xl",
                    class: "text-muted-800 dark:text-muted-100 mb-2"
                }, {
                    default: s(() => [K]),
                    _: 1
                }), e(r, {
                    class: "text-muted-400"
                }, {
                    default: s(() => [O]),
                    _: 1
                })]), t("div", Q, [e(c, {
                    to: a(d)() ? .to,
                    color: "primary",
                    shape: "curved",
                    class: "w-36",
                    onClick: o[2] || (o[2] = _(() => i("marketing"), ["prevent"]))
                }, {
                    default: s(() => [t("span", null, p(a(n).type === "marketing" ? "Selected" : "Continue"), 1)]),
                    _: 1
                }, 8, ["to"]), t("div", Y, [e(u, {
                    to: "/wizard",
                    class: "text-muted-400 hover:text-primary-500 font-sans text-[0.65rem] font-semibold uppercase opacity-0 transition-all duration-300 group-hover:opacity-100"
                }, {
                    default: s(() => [Z]),
                    _: 1
                })])])], 2)])])])
            }
        }
    });
export {
    at as
    default
};