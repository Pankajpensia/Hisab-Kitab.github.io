import {
    d as P,
    R as u,
    S as m,
    r as _,
    b as $,
    c as A,
    e as t,
    g as s,
    w as e,
    E as L,
    U as p,
    V as h,
    H as r,
    K as j,
    I as F,
    Q as G,
    J as O,
    L as W
} from "./entry.ab3e2748.js";
import {
    _ as D
} from "./BaseIconBox.vue.049ba203.js";
import {
    _ as N
} from "./AddonApexcharts.vue.859d950a.js";
import {
    _ as J
} from "./DemoVcardRight.vue.2925e95b.js";
import {
    _ as T
} from "./DemoFollowersCompact.vue.c8cdebf6.js";
import {
    _ as V
} from "./DemoNotificationsCompact.5f69ea19.js";
import {
    C as Y
} from "./index.db39d5b7.js";
import "./client-only.862c29b4.js";
import "./BaseAvatar.vue.97d6ac95.js";
import "./BaseAvatarGroup.vue.813e2a42.js";
const I = {
        class: "grid grid-cols-12 gap-4"
    },
    M = {
        class: "ltablet:col-span-9 col-span-12 lg:col-span-9"
    },
    E = {
        class: "grid grid-cols-12 gap-4"
    },
    H = {
        class: "col-span-12 md:col-span-4"
    },
    K = {
        class: "mb-1 flex items-center justify-between"
    },
    Q = t("span", null, "Transactions", -1),
    U = {
        class: "mb-2"
    },
    q = t("span", null, "7,549", -1),
    X = {
        class: "text-success-500 flex items-center gap-1 font-sans text-sm"
    },
    Z = t("span", null, "+7.8%", -1),
    tt = t("span", {
        class: "text-muted-400 text-xs"
    }, "since last month", -1),
    st = {
        class: "col-span-12 md:col-span-4"
    },
    et = {
        class: "mb-1 flex items-center justify-between"
    },
    at = t("span", null, "Subscriptions", -1),
    ot = {
        class: "mb-2"
    },
    nt = t("span", null, "1,611", -1),
    lt = {
        class: "text-danger-500 flex items-center gap-1 font-sans text-sm"
    },
    it = t("span", null, "-2.7%", -1),
    dt = t("span", {
        class: "text-muted-400 text-xs"
    }, "going down", -1),
    ct = {
        class: "col-span-12 md:col-span-4"
    },
    rt = {
        class: "mb-1 flex items-center justify-between"
    },
    ut = t("span", null, "Referals", -1),
    mt = {
        class: "mb-2"
    },
    _t = t("span", null, "862", -1),
    pt = {
        class: "text-success-500 flex items-center gap-1 font-sans text-sm"
    },
    ht = t("span", null, "+4.5%", -1),
    ft = t("span", {
        class: "text-muted-400 text-xs"
    }, "going up", -1),
    xt = {
        class: "col-span-12 md:col-span-8"
    },
    gt = {
        class: "mb-2 flex items-center justify-between"
    },
    bt = t("span", null, "Revenue", -1),
    wt = t("div", {
        class: "flex gap-8"
    }, [t("div", null, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, "This month"), t("p", {
        class: "text-primary-500 font-sans text-lg font-medium"
    }, " $75,689 ")]), t("div", null, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, "Last month"), t("p", {
        class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
    }, " $59,724 ")])], -1),
    vt = {
        class: "col-span-12 md:col-span-4"
    },
    yt = {
        class: "mb-10 flex items-center justify-between"
    },
    kt = t("span", null, "Goal Overview", -1),
    zt = {
        class: "mb-6"
    },
    Bt = t("div", {
        class: "mt-auto"
    }, [t("div", {
        class: "border-muted-200 dark:border-muted-700 flex w-full border-t pt-4 text-center"
    }, [t("div", {
        class: "border-muted-200 dark:border-muted-700 flex-1 border-r px-2"
    }, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, " Completed "), t("p", {
        class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
    }, " 1431 ")]), t("div", {
        class: "flex-1 px-2"
    }, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, " In Progress "), t("p", {
        class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
    }, " 219 ")])])], -1),
    St = {
        class: "col-span-12 md:col-span-4"
    },
    Rt = {
        class: "mb-5 flex items-center justify-between"
    },
    Ct = t("span", null, "Sales Growth", -1),
    Pt = {
        class: "mb-6"
    },
    $t = {
        class: "mt-auto"
    },
    At = {
        class: "flex justify-center gap-2"
    },
    Lt = t("span", null, "Shopify", -1),
    jt = t("span", {
        class: "text-muted-400"
    }, "Best selling channel", -1),
    Ft = {
        class: "col-span-12 md:col-span-8"
    },
    Gt = {
        class: "mb-6"
    },
    Ot = t("span", null, "Profit", -1),
    Wt = {
        class: "ltablet:col-span-3 col-span-12 lg:col-span-3"
    },
    Dt = {
        class: "ptablet:grid-cols-2 ltablet:flex ltablet:flex-col grid gap-4 lg:flex lg:flex-col"
    },
    qt = P({
        __name: "analytics",
        setup(Nt) {
            const x = u(v()),
                g = u(y()),
                b = u(k()),
                w = u(z());

            function v() {
                const {
                    primary: i
                } = m(), d = "line", a = 250, n = {
                    chart: {
                        zoom: {
                            enabled: !1
                        },
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [i.value],
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        width: [2, 2, 2],
                        curve: "smooth"
                    },
                    grid: {
                        row: {
                            colors: ["transparent", "transparent"],
                            opacity: .5
                        }
                    },
                    xaxis: {
                        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
                    },
                    tooltip: {
                        y: {
                            formatter: function(o) {
                                return "$" + o
                            }
                        }
                    }
                }, l = _([{
                    name: "Revenue",
                    data: [10835, 40214, 36257, 51411, 45697, 61221, 65295, 91512, 75648]
                }]);
                return {
                    type: d,
                    height: a,
                    options: n,
                    series: l
                }
            }

            function y() {
                const {
                    primary: i,
                    success: d
                } = m(), a = "radialBar", n = 220, l = {
                    chart: {
                        offsetY: -10
                    },
                    colors: [i.value, d.value],
                    plotOptions: {
                        radialBar: {
                            startAngle: -135,
                            endAngle: 135,
                            inverseOrder: !0,
                            dataLabels: {
                                show: !0,
                                name: {
                                    show: !0,
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    offsetY: -10
                                },
                                value: {
                                    show: !0,
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    offsetY: -5
                                },
                                total: {
                                    show: !0,
                                    fontSize: "14px",
                                    fontWeight: 500
                                }
                            },
                            hollow: {
                                margin: 15,
                                size: "75%"
                            },
                            track: {
                                strokeWidth: "100%"
                            }
                        }
                    },
                    stroke: {
                        lineCap: "round"
                    },
                    labels: ["Efficiency", "Productivity"]
                }, o = _([57, 86]);
                return {
                    type: a,
                    height: n,
                    options: l,
                    series: o
                }
            }

            function k() {
                const {
                    success: i
                } = m(), d = 180, a = "radialBar", n = {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [i.value],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "75%"
                            },
                            dataLabels: {
                                show: !0,
                                name: {
                                    show: !0,
                                    fontSize: "0.7rem",
                                    fontFamily: "Roboto",
                                    fontWeight: 400,
                                    offsetY: -10
                                },
                                value: {
                                    show: !0,
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    fontFamily: "Roboto",
                                    offsetY: -5
                                }
                            }
                        }
                    },
                    labels: ["Growth"]
                }, l = _([65]);
                return {
                    type: a,
                    height: d,
                    options: n,
                    series: l
                }
            }

            function z() {
                const {
                    primary: i,
                    info: d,
                    success: a
                } = m(), n = "bar", l = 250, o = {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [i.value, d.value, a.value],
                    legend: {
                        position: "top"
                    },
                    plotOptions: {
                        bar: {
                            horizontal: !1,
                            endingShape: "rounded",
                            columnWidth: "55%"
                        }
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        show: !0,
                        width: 2,
                        colors: ["transparent"]
                    },
                    xaxis: {
                        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
                    },
                    yaxis: {
                        labels: {
                            formatter: function(c) {
                                return c + 70
                            }
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function(c) {
                                return c + 70
                            }
                        }
                    }
                }, f = _([{
                    name: "Net Profit",
                    data: [-26, -15, -13, -14, -9, -12, -7, -10, -4]
                }, {
                    name: "Revenue",
                    data: [6, 15, 31, 28, 17, 35, 21, 44, 24]
                }, {
                    name: "Free Cash Flow",
                    data: [-35, -29, -34, -44, -25, -22, -18, -17, -29]
                }]);
                return {
                    type: n,
                    height: l,
                    options: o,
                    series: f
                }
            }
            return (i, d) => {
                const a = j,
                    n = F,
                    l = D,
                    o = G,
                    f = O,
                    c = N,
                    B = W,
                    S = J,
                    R = T,
                    C = V;
                return $(), A("div", I, [t("div", M, [t("div", E, [t("div", H, [s(o, {
                    class: "p-4"
                }, {
                    default: e(() => [t("div", K, [s(a, {
                        as: "h5",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-500 dark:text-muted-400"
                    }, {
                        default: e(() => [Q]),
                        _: 1
                    }), s(l, {
                        size: "xs",
                        class: "bg-success-100 text-success-500 dark:bg-success-500/20 dark:text-success-400 dark:border-success-500 dark:border-2",
                        shape: "full"
                    }, {
                        default: e(() => [s(n, {
                            name: "ph:sketch-logo-duotone",
                            class: "h-5 w-5"
                        })]),
                        _: 1
                    })]), t("div", U, [s(a, {
                        as: "h4",
                        size: "3xl",
                        weight: "bold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [q]),
                        _: 1
                    })]), t("div", X, [Z, s(n, {
                        name: "lucide:trending-up",
                        class: "h-5 w-5"
                    }), tt])]),
                    _: 1
                })]), t("div", st, [s(o, {
                    class: "p-4"
                }, {
                    default: e(() => [t("div", et, [s(a, {
                        as: "h5",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-500 dark:text-muted-400"
                    }, {
                        default: e(() => [at]),
                        _: 1
                    }), s(l, {
                        size: "xs",
                        class: "bg-yellow-100 text-yellow-500 dark:border-2 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
                        shape: "full"
                    }, {
                        default: e(() => [s(n, {
                            name: "ph:rocket-duotone",
                            class: "h-5 w-5"
                        })]),
                        _: 1
                    })]), t("div", ot, [s(a, {
                        as: "h4",
                        size: "3xl",
                        weight: "bold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [nt]),
                        _: 1
                    })]), t("div", lt, [it, s(n, {
                        name: "lucide:trending-down",
                        class: "h-5 w-5"
                    }), dt])]),
                    _: 1
                })]), t("div", ct, [s(o, {
                    class: "p-4"
                }, {
                    default: e(() => [t("div", rt, [s(a, {
                        as: "h5",
                        size: "sm",
                        weight: "medium",
                        lead: "tight",
                        class: "text-muted-500 dark:text-muted-400"
                    }, {
                        default: e(() => [ut]),
                        _: 1
                    }), s(l, {
                        size: "xs",
                        class: "bg-primary-100 text-primary-500 dark:bg-primary-500/20 dark:text-primary-400 dark:border-primary-500 dark:border-2",
                        shape: "full"
                    }, {
                        default: e(() => [s(n, {
                            name: "ph:megaphone-simple-duotone",
                            class: "h-5 w-5"
                        })]),
                        _: 1
                    })]), t("div", mt, [s(a, {
                        as: "h4",
                        size: "3xl",
                        weight: "bold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [_t]),
                        _: 1
                    })]), t("div", pt, [ht, s(n, {
                        name: "lucide:trending-up",
                        class: "h-5 w-5"
                    }), ft])]),
                    _: 1
                })]), t("div", xt, [s(o, {
                    class: "p-6"
                }, {
                    default: e(() => [t("div", gt, [s(a, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [bt]),
                        _: 1
                    }), s(f, {
                        to: "#",
                        class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                    }, {
                        default: e(() => [L(" Details ")]),
                        _: 1
                    })]), wt, s(c, p(h(r(x))), null, 16)]),
                    _: 1
                })]), t("div", vt, [s(o, {
                    class: "flex h-full flex-col p-6"
                }, {
                    default: e(() => [t("div", yt, [s(a, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [kt]),
                        _: 1
                    })]), t("div", zt, [s(c, p(h(r(g))), null, 16)]), Bt]),
                    _: 1
                })]), t("div", St, [s(o, {
                    class: "flex h-full flex-col p-6"
                }, {
                    default: e(() => [t("div", Rt, [s(a, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [Ct]),
                        _: 1
                    })]), t("div", Pt, [s(c, p(h(r(b))), null, 16)]), t("div", $t, [t("div", At, [s(n, {
                        name: "logos:shopify",
                        class: "h-8 w-8"
                    }), t("div", null, [s(a, {
                        as: "h5",
                        size: "sm",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [Lt]),
                        _: 1
                    }), s(B, {
                        size: "xs"
                    }, {
                        default: e(() => [jt]),
                        _: 1
                    })])])])]),
                    _: 1
                })]), t("div", Ft, [s(o, {
                    class: "relative p-6"
                }, {
                    default: e(() => [t("div", Gt, [s(a, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: e(() => [Ot]),
                        _: 1
                    })]), s(c, p(h(r(w))), null, 16)]),
                    _: 1
                })])])]), t("div", Wt, [t("div", Dt, [s(o, {
                    class: "p-6"
                }, {
                    default: e(() => [s(S)]),
                    _: 1
                }), s(o, {
                    class: "p-2"
                }, {
                    default: e(() => [s(r(Y), {
                        attributes: [{
                            key: "today",
                            dot: !0,
                            bar: !1,
                            content: "Today",
                            customData: {},
                            event: {},
                            hashcode: "today",
                            highlight: !1,
                            order: 0,
                            pinPage: !1,
                            popover: {},
                            dates: [new Date]
                        }],
                        "title-position": "left",
                        expanded: "",
                        borderless: "",
                        transparent: "",
                        "trim-weeks": "",
                        class: "max-w-full rounded-md"
                    }, null, 8, ["attributes"])]),
                    _: 1
                }), s(o, {
                    class: "p-6"
                }, {
                    default: e(() => [s(R)]),
                    _: 1
                }), s(o, {
                    class: "p-6"
                }, {
                    default: e(() => [s(C)]),
                    _: 1
                })])])])
            }
        }
    });
export {
    qt as
    default
};