import {
    d as S,
    D as W,
    r as x,
    br as A,
    b as l,
    c as f,
    e,
    g as s,
    w as i,
    t as v,
    H as t,
    n as z,
    F,
    Y as M,
    J as T,
    I as C,
    aa as k,
    f as E,
    T as L,
    N as V,
    Q as O,
    bq as Y,
    ax as I,
    G as $,
    bk as H
} from "./entry.ab3e2748.js";
import R from "./TairoLogo.d97795b4.js";
import {
    _ as q
} from "./BaseThemeToggle.vue.bfe8cd23.js";
import {
    _ as G
} from "./DemoAccountMenu.vue.5c7fb3b6.js";
import {
    _ as J
} from "./BaseProgress.vue.39cdf738.js";
import {
    u as D,
    c as K
} from "./multi-step-form.03b99d2b.js";
import {
    u as Q
} from "./toaster.4024d2b6.js";
import "./composables.5d7dee4e.js";
import "./2.1efd1685.js";
import "./menu.780a0af3.js";
import "./use-tracked-pointer.975289db.js";
import "./use-tree-walker.8f4d0e5a.js";
import "./use-resolve-button-type.8bfbdb65.js";
import "./use-text-value.d92f8611.js";
const U = {
        class: "dark:bg-muted-800 absolute start-0 top-0 h-16 w-full bg-white"
    },
    X = {
        class: "relative flex h-16 w-full items-center justify-between px-4"
    },
    Z = {
        class: "flex items-center"
    },
    tt = {
        class: "hidden items-center gap-2 ps-6 font-sans sm:flex"
    },
    et = {
        class: "text-muted-500 dark:text-muted-400"
    },
    ot = {
        class: "text-muted-800 font-semibold dark:text-white"
    },
    st = {
        class: "space-y-1"
    },
    at = ["onClick"],
    nt = {
        class: "text-muted-500 dark:text-muted-400 text-xs"
    },
    rt = {
        class: "text-muted-800 text-xs font-medium dark:text-white"
    },
    it = {
        class: "flex items-center justify-end gap-4"
    },
    lt = {
        class: "absolute inset-x-0 bottom-0 z-10 w-full"
    },
    ct = S({
        __name: "DemoWizardNavigation",
        setup(j) {
            const {
                steps: u,
                currentStep: c,
                progress: n,
                preview: p,
                goToStep: m
            } = D(), o = W(() => u.value.find(h => h.id === c.value) ? .meta ? .name), a = x(null), r = x(!1);

            function d() {
                r.value = !0
            }
            return A(a, () => r.value = !1), (_, h) => {
                const g = R,
                    y = T,
                    b = C,
                    P = q,
                    B = G,
                    N = J;
                return l(), f("div", U, [e("div", X, [e("div", Z, [s(y, {
                    to: "/dashboards",
                    class: "border-muted-200 dark:border-muted-700 flex w-14 items-center justify-center border-r pe-6"
                }, {
                    default: i(() => [s(g, {
                        class: "text-primary-600 h-10 shrink-0"
                    })]),
                    _: 1
                }), e("div", tt, [e("p", et, " Step " + v(t(c) + 1) + ": ", 1), e("h2", ot, v(t(o)), 1)]), e("div", {
                    ref_key: "target",
                    ref: a,
                    class: "relative hidden sm:block"
                }, [e("button", {
                    type: "button",
                    class: "flex h-10 w-10 items-center justify-center",
                    onClick: d
                }, [s(b, {
                    name: "lucide:chevron-down",
                    class: z(["text-muted-400 h-4 w-4 transition-transform duration-300", t(r) ? "rotate-180" : ""])
                }, null, 8, ["class"])]), e("div", {
                    class: z(["border-muted-200 dark:border-muted-700 dark:bg-muted-800 shadow-muted-300/30 dark:shadow-muted-900/30 absolute start-0 top-8 z-20 w-52 rounded-xl border bg-white p-2 shadow-xl transition-all duration-300", t(r) ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-1"])
                }, [e("div", st, [(l(!0), f(F, null, M(t(u), w => (l(), f("button", {
                    key: w.id,
                    type: "button",
                    class: "hover:bg-muted-100 dark:hover:bg-muted-700 flex w-full items-center gap-2 rounded-lg px-3 py-2 font-sans disabled:cursor-not-allowed disabled:opacity-70",
                    onClick: () => {
                        r.value = !1, t(m)(w)
                    }
                }, [e("p", nt, " Step " + v(w.id + 1) + ": ", 1), e("h4", rt, v(w.meta.name), 1)], 8, at))), 128))])], 2)], 512)]), e("div", it, [s(P), s(B, {
                    horizontal: ""
                })]), e("div", lt, [s(N, {
                    value: t(n),
                    size: "xs",
                    shape: "full"
                }, null, 8, ["value"])])])])
            }
        }
    }),
    dt = {
        key: 0,
        class: "fixed inset-x-0 bottom-6 z-20 mx-auto w-full max-w-[304px]"
    },
    ut = e("span", null, "Previous", -1),
    mt = e("span", null, "Continue", -1),
    pt = e("span", null, "Finish", -1),
    _t = S({
        __name: "DemoWizardButtons",
        setup(j) {
            const {
                totalSteps: u,
                currentStep: c,
                loading: n,
                complete: p,
                getNextStep: m,
                getPrevStep: o
            } = D();
            return (a, r) => {
                const d = V,
                    _ = O;
                return l(), f("div", null, [s(L, {
                    "enter-active-class": "transition-all duration-300 ease-out",
                    "enter-from-class": "translate-y-20 opacity-0",
                    "enter-to-class": "translate-y-0 opacity-100",
                    "leave-active-class": "transition-all duration-100 ease-in",
                    "leave-from-class": "translate-y-0 opacity-100",
                    "leave-to-class": "translate-y-20 opacity-0"
                }, {
                    default: i(() => [t(c) > 0 && !t(p) ? (l(), f("div", dt, [s(_, {
                        class: "shadow-muted-300/30 dark:shadow-muted-800/30 flex items-center justify-between gap-2 rounded-2xl p-4 shadow-xl"
                    }, {
                        default: i(() => [s(d, {
                            to: t(n) ? void 0 : t(o)() ? .to,
                            disabled: !t(o)(),
                            shape: "curved",
                            class: "w-full"
                        }, {
                            default: i(() => [ut]),
                            _: 1
                        }, 8, ["to", "disabled"]), t(c) < t(u) - 1 ? (l(), k(d, {
                            key: 0,
                            to: t(m)() ? .to,
                            disabled: !t(m)(),
                            shape: "curved",
                            color: "primary",
                            class: "w-full"
                        }, {
                            default: i(() => [mt]),
                            _: 1
                        }, 8, ["to", "disabled"])) : (l(), k(d, {
                            key: 1,
                            type: "submit",
                            shape: "curved",
                            color: "primary",
                            class: "w-full",
                            loading: t(n),
                            disabled: t(n)
                        }, {
                            default: i(() => [pt]),
                            _: 1
                        }, 8, ["loading", "disabled"]))]),
                        _: 1
                    })])) : E("", !0)]),
                    _: 1
                })])
            }
        }
    }),
    ft = {
        class: "pb-32 pt-24"
    },
    Dt = S({
        __name: "wizard",
        setup(j) {
            const u = x({
                    type: void 0,
                    name: "",
                    description: "",
                    startDate: void 0,
                    endDate: void 0,
                    customer: {
                        name: void 0,
                        logo: void 0,
                        location: void 0
                    },
                    files: null,
                    avatar: null,
                    team: [],
                    tools: [],
                    budget: "< 5K"
                }),
                c = [{
                    to: "/wizard",
                    meta: {
                        name: "Project type",
                        title: "Select project type",
                        subtitle: "Select the type of project you want to create"
                    }
                }, {
                    to: "/wizard/step-2",
                    meta: {
                        name: "Project info",
                        title: "What is this project about?",
                        subtitle: "Manage better by adding all relevant project information"
                    }
                }, {
                    to: "/wizard/step-3",
                    meta: {
                        name: "Project details",
                        title: "Add more details",
                        subtitle: "Add useful details to your project. You can edit this later"
                    }
                }, {
                    to: "/wizard/step-4",
                    meta: {
                        name: "Project files",
                        title: "Add files to this project",
                        subtitle: "Or you can skip this step. You can always add more files later"
                    }
                }, {
                    to: "/wizard/step-5",
                    meta: {
                        name: "Team members",
                        title: "Who will be working on this project?",
                        subtitle: "Start by adding members to your team"
                    }
                }, {
                    to: "/wizard/step-6",
                    meta: {
                        name: "Project tools",
                        title: "What tools will you be using?",
                        subtitle: "Choose a set of tools that you'll be using in this project"
                    }
                }, {
                    to: "/wizard/step-7",
                    meta: {
                        preview: !0,
                        name: "Finish",
                        title: "Make sure it looks good",
                        subtitle: "You can go back to previous steps if you need to edit anything"
                    }
                }],
                n = Q(),
                {
                    handleSubmit: p,
                    currentStep: m
                } = K({
                    initialState: u,
                    steps: c,
                    onSubmit: async (o, a) => {
                        if (console.log("multi-step-submit", o), !o.type) throw a.goToStep(a.getStep(0)), new Error("Please select a project type");
                        if (!o.name) throw a.goToStep(a.getStep(1)), new Error("Enter a project name");
                        await new Promise(r => setTimeout(r, 4e3)), n.clearAll(), n.show({
                            title: "Success",
                            message: `Project ${o.name} created!`,
                            color: "success",
                            icon: "ph:check",
                            closable: !0
                        })
                    },
                    onError: o => {
                        console.log("multi-step-error", o), n.clearAll(), n.show({
                            title: "Oops!",
                            message: o.message,
                            color: "danger",
                            icon: "lucide:alert-triangle",
                            closable: !0
                        })
                    }
                });
            return Y({
                titleTemplate: o => `${o} | Wizard - Step ${m.value+1}`
            }), (o, a) => {
                const r = C,
                    d = T,
                    _ = ct,
                    h = I("RouterView"),
                    g = _t,
                    y = H;
                return l(), k(y, {
                    toolbar: !1,
                    sidebar: !1,
                    class: "bg-muted-100 dark:bg-muted-900 min-h-screen w-full"
                }, {
                    logo: i(() => [s(d, {
                        to: "/",
                        class: "text-muted-400 hover:text-primary-500 hover:bg-primary-500/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300",
                        onClick: a[0] || (a[0] = $(b => o.$router.back(), ["prevent"]))
                    }, {
                        default: i(() => [s(r, {
                            name: "lucide:arrow-left",
                            class: "h-5 w-5"
                        })]),
                        _: 1
                    })]),
                    default: i(() => [s(_), e("form", {
                        action: "",
                        method: "POST",
                        onSubmit: a[1] || (a[1] = $((...b) => t(p) && t(p)(...b), ["prevent"])),
                        novalidate: ""
                    }, [e("div", ft, [s(h)]), s(g)], 32)]),
                    _: 1
                })
            }
        }
    });
export {
    Dt as
    default
};