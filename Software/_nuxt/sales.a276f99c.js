import {
    _ as U
} from "./BaseAvatar.vue.97d6ac95.js";
import {
    d as G,
    R as y,
    S as g,
    r as b,
    o as z,
    ac as S,
    b as K,
    c as Q,
    e as t,
    g as e,
    w as n,
    U as v,
    V as w,
    H as x,
    E as q,
    ab as tt,
    K as et,
    L as st,
    N as at,
    Q as ot,
    J as lt
} from "./entry.ab3e2748.js";
import {
    _ as nt
} from "./AddonApexcharts.vue.859d950a.js";
import {
    C as it
} from "./index.db39d5b7.js";
import "./client-only.862c29b4.js";
const rt = {
        class: "mb-8 flex flex-col justify-between md:flex-row md:items-center"
    },
    ct = {
        class: "ltablet:max-w-full flex max-w-[425px] flex-col items-center gap-4 text-center md:flex-row md:text-left lg:max-w-full"
    },
    dt = t("span", null, "Welcome back, Maya", -1),
    ut = t("span", {
        class: "text-muted-500"
    }, " Happy to see you again on your dashboard. ", -1),
    mt = {
        class: "mt-4 flex items-center justify-center gap-2 md:mt-0 md:justify-start"
    },
    pt = t("span", null, "View Reports", -1),
    ft = t("span", null, "Transactions", -1),
    ht = {
        class: "grid grid-cols-12 gap-6"
    },
    xt = {
        class: "ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    _t = {
        class: "ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    yt = {
        class: "ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    gt = {
        class: "ltablet:col-span-3 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    bt = {
        class: "relative col-span-12 md:col-span-7"
    },
    vt = {
        class: "mb-2 flex items-center justify-between"
    },
    wt = t("span", null, "Revenue Overview", -1),
    kt = t("div", {
        class: "flex gap-8"
    }, [t("div", null, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, "This month"), t("p", {
        class: "text-primary-500 font-sans text-lg font-medium"
    }, " $75,689 ")]), t("div", null, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, "Last month"), t("p", {
        class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
    }, " $59,724 ")]), t("div", null, [t("span", {
        class: "text-muted-400 font-sans text-xs"
    }, "Average"), t("p", {
        class: "text-muted-800 dark:text-muted-100 font-sans text-lg font-medium"
    }, " $66,561 ")])], -1),
    Tt = {
        class: "relative col-span-12 md:col-span-5"
    },
    zt = {
        class: "flex h-full flex-col gap-6"
    },
    St = {
        class: "flex items-center justify-center"
    },
    Bt = {
        class: "flex-1"
    },
    At = t("span", null, "Sales Revenue", -1),
    Mt = t("span", null, "$8,641.26", -1),
    Rt = t("span", {
        class: "text-muted-400"
    }, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bonum integritas corporis. ", -1),
    Ct = {
        class: "flex-1"
    },
    Ot = {
        class: "mb-6 flex items-center justify-between"
    },
    Wt = t("span", null, "Additional Stats", -1),
    $t = {
        class: "flex justify-between gap-2"
    },
    Ft = {
        class: "flex flex-1 flex-col gap-2 text-center"
    },
    Nt = {
        class: "-mt-6"
    },
    Pt = t("span", null, "278", -1),
    Lt = t("span", {
        class: "text-muted-400"
    }, "New Deals", -1),
    Yt = {
        class: "flex flex-1 flex-col gap-2 text-center"
    },
    It = {
        class: "-mt-6"
    },
    Vt = t("span", null, "1,519", -1),
    jt = t("span", {
        class: "text-muted-400"
    }, "Proposals", -1),
    Xt = {
        class: "flex flex-1 flex-col gap-2 text-center"
    },
    Dt = {
        class: "-mt-6"
    },
    Jt = t("span", null, "3,214", -1),
    Zt = t("span", {
        class: "text-muted-400"
    }, "Closed deals", -1),
    Ht = {
        class: "ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    Et = {
        class: "mb-6 flex items-center justify-between"
    },
    Ut = t("span", null, "Personal Score", -1),
    Gt = {
        class: "py-16"
    },
    Kt = {
        class: "mt-auto text-center"
    },
    Qt = t("span", {
        class: "text-muted-400"
    }, " Your score has been calculated based on the latest metrics ", -1),
    qt = {
        class: "ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-6"
    },
    te = {
        class: "mb-6"
    },
    ee = t("span", null, "Orders Summary", -1),
    se = {
        class: "ltablet:col-span-4 relative col-span-12 md:col-span-6 lg:col-span-3"
    },
    de = G({
        __name: "sales",
        setup(ae) {
            const A = y(Y()),
                M = y(I()),
                R = y(V()),
                C = y(j()),
                O = y(X()),
                W = y(D()),
                $ = y(J()),
                F = y(Z()),
                N = y(H()),
                P = y(E()),
                L = y(B());

            function Y() {
                const {
                    primary: u,
                    title: m,
                    subtitle: c
                } = g(), o = "area", i = 130, h = {
                    chart: {
                        id: "sparkline1",
                        group: "sparklines",
                        sparkline: {
                            enabled: !0
                        }
                    },
                    colors: [u.value],
                    stroke: {
                        width: [2],
                        curve: "straight"
                    },
                    fill: {
                        opacity: 1
                    },
                    labels: [...Array(24).keys()].map(r => `2020-10-0${r+1}`),
                    yaxis: {
                        min: 0,
                        labels: {
                            minWidth: 100
                        }
                    },
                    xaxis: {
                        type: "datetime"
                    },
                    title: {
                        text: "Total Sales",
                        offsetX: 5,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: c.value,
                            cssClass: "apexcharts-spark-title"
                        }
                    },
                    subtitle: {
                        text: "9,374",
                        offsetX: 5,
                        offsetY: 15,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "22px",
                            fontWeight: "500",
                            color: m.value,
                            cssClass: "apexcharts-spark-subtitle"
                        }
                    }
                }, l = b([{
                    name: "Total Sales",
                    data: T([472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465])
                }]);
                let a;
                z(() => {
                    p()
                }), S(() => {
                    clearTimeout(a)
                });

                function p() {
                    a && clearTimeout(a), a = setTimeout(() => {
                        l.value[0].data.push(k(200, 600)), l.value[0].data.shift(), p()
                    }, 2e3)
                }

                function k(r, s) {
                    return Math.floor(Math.random() * (s - r + 1) + r)
                }

                function T(r) {
                    const s = r.slice();
                    let d = s.length,
                        _, f;
                    for (; d !== 0;) f = Math.floor(Math.random() * d), d -= 1, _ = s[d], s[d] = s[f], s[f] = _;
                    return s
                }
                return {
                    type: o,
                    height: i,
                    options: h,
                    series: l
                }
            }

            function I() {
                const {
                    success: u,
                    title: m,
                    subtitle: c
                } = g(), o = "area", i = 130, h = {
                    chart: {
                        id: "sparkline1",
                        group: "sparklines",
                        sparkline: {
                            enabled: !0
                        }
                    },
                    colors: [u.value],
                    stroke: {
                        width: [2],
                        curve: "straight"
                    },
                    fill: {
                        opacity: 1
                    },
                    labels: [...Array(24).keys()].map(r => `2020-10-0${r+1}`),
                    yaxis: {
                        min: 0,
                        labels: {
                            minWidth: 100
                        }
                    },
                    xaxis: {
                        type: "datetime"
                    },
                    title: {
                        text: "Total Profit",
                        offsetX: 5,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: c.value,
                            cssClass: "apexcharts-spark-title"
                        }
                    },
                    subtitle: {
                        text: "$24,273.31",
                        offsetX: 5,
                        offsetY: 15,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "22px",
                            fontWeight: "500",
                            color: m.value,
                            cssClass: "apexcharts-spark-subtitle"
                        }
                    }
                }, l = b([{
                    name: "Total Profit",
                    data: T([472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465])
                }]);
                let a;
                z(() => {
                    p()
                }), S(() => {
                    clearTimeout(a)
                });

                function p() {
                    a && clearTimeout(a), a = setTimeout(() => {
                        l.value[0].data.push(k(200, 600)), l.value[0].data.shift(), p()
                    }, 2e3)
                }

                function k(r, s) {
                    return Math.floor(Math.random() * (s - r + 1) + r)
                }

                function T(r) {
                    const s = r.slice();
                    let d = s.length,
                        _, f;
                    for (; d !== 0;) f = Math.floor(Math.random() * d), d -= 1, _ = s[d], s[d] = s[f], s[f] = _;
                    return s
                }
                return {
                    type: o,
                    height: i,
                    options: h,
                    series: l
                }
            }

            function V() {
                const {
                    yellow: u,
                    title: m,
                    subtitle: c
                } = g(), o = "area", i = 130, h = {
                    chart: {
                        id: "sparkline1",
                        group: "sparklines",
                        sparkline: {
                            enabled: !0
                        }
                    },
                    colors: [u.value],
                    stroke: {
                        width: [2],
                        curve: "straight"
                    },
                    fill: {
                        opacity: 1
                    },
                    labels: [...Array(24).keys()].map(r => `2020-10-0${r+1}`),
                    yaxis: {
                        min: 0,
                        labels: {
                            minWidth: 100
                        }
                    },
                    xaxis: {
                        type: "datetime"
                    },
                    title: {
                        text: "Total Orders",
                        offsetX: 5,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: c.value,
                            cssClass: "apexcharts-spark-title"
                        }
                    },
                    subtitle: {
                        text: "3912",
                        offsetX: 5,
                        offsetY: 15,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "22px",
                            fontWeight: "500",
                            color: m.value,
                            cssClass: "apexcharts-spark-subtitle"
                        }
                    }
                }, l = b([{
                    name: "Total Orders",
                    data: T([472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465])
                }]);
                let a;
                z(() => {
                    p()
                }), S(() => {
                    clearTimeout(a)
                });

                function p() {
                    a && clearTimeout(a), a = setTimeout(() => {
                        l.value[0].data.push(k(200, 600)), l.value[0].data.shift(), p()
                    }, 2e3)
                }

                function k(r, s) {
                    return Math.floor(Math.random() * (s - r + 1) + r)
                }

                function T(r) {
                    const s = r.slice();
                    let d = s.length,
                        _, f;
                    for (; d !== 0;) f = Math.floor(Math.random() * d), d -= 1, _ = s[d], s[d] = s[f], s[f] = _;
                    return s
                }
                return {
                    type: o,
                    height: i,
                    options: h,
                    series: l
                }
            }

            function j() {
                const {
                    info: u,
                    title: m,
                    subtitle: c
                } = g(), o = "area", i = 130, h = {
                    chart: {
                        id: "sparkline1",
                        group: "sparklines",
                        sparkline: {
                            enabled: !0
                        }
                    },
                    colors: [u.value],
                    stroke: {
                        width: [2],
                        curve: "straight"
                    },
                    fill: {
                        opacity: 1
                    },
                    labels: [...Array(24).keys()].map(r => `2020-10-0${r+1}`),
                    yaxis: {
                        min: 0,
                        labels: {
                            minWidth: 100
                        }
                    },
                    xaxis: {
                        type: "datetime"
                    },
                    title: {
                        text: "Consolidated",
                        offsetX: 5,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: c.value,
                            cssClass: "apexcharts-spark-title"
                        }
                    },
                    subtitle: {
                        text: "$17,865.29",
                        offsetX: 5,
                        offsetY: 15,
                        style: {
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "22px",
                            fontWeight: "500",
                            color: m.value,
                            cssClass: "apexcharts-spark-subtitle"
                        }
                    }
                }, l = b([{
                    name: "Consolidated",
                    data: T([472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932, 534, 615, 278, 546, 435, 192, 465])
                }]);
                let a;
                z(() => {
                    p()
                }), S(() => {
                    clearTimeout(a)
                });

                function p() {
                    a && clearTimeout(a), a = setTimeout(() => {
                        l.value[0].data.push(k(200, 600)), l.value[0].data.shift(), p()
                    }, 2e3)
                }

                function k(r, s) {
                    return Math.floor(Math.random() * (s - r + 1) + r)
                }

                function T(r) {
                    const s = r.slice();
                    let d = s.length,
                        _, f;
                    for (; d !== 0;) f = Math.floor(Math.random() * d), d -= 1, _ = s[d], s[d] = s[f], s[f] = _;
                    return s
                }
                return {
                    type: o,
                    height: i,
                    options: h,
                    series: l
                }
            }

            function X() {
                const {
                    primary: u,
                    info: m,
                    success: c
                } = g(), o = "area", i = 258, h = {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value, m.value, c.value],
                    title: {
                        show: !1,
                        text: void 0,
                        align: "left"
                    },
                    legend: {
                        show: !0,
                        position: "top"
                    },
                    dataLabels: {
                        enabled: !1
                    },
                    stroke: {
                        width: [2, 2, 2],
                        curve: "smooth"
                    },
                    xaxis: {
                        type: "datetime",
                        categories: ["2020-09-19T00:00:00.000Z", "2020-09-20T01:30:00.000Z", "2020-09-21T02:30:00.000Z", "2020-09-22T03:30:00.000Z", "2020-09-23T04:30:00.000Z", "2020-09-24T05:30:00.000Z", "2020-09-25T06:30:00.000Z"]
                    },
                    tooltip: {
                        x: {
                            format: "dd/MM/yy HH:mm"
                        }
                    }
                }, l = b([{
                    name: "Returning",
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: "Newcomers",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }, {
                    name: "Abandonned",
                    data: [78, 53, 36, 10, 14, 5, 2]
                }]);
                return {
                    type: o,
                    height: i,
                    options: h,
                    series: l
                }
            }

            function D() {
                const {
                    primary: u
                } = g(), m = "radialBar", c = 155, o = {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "75%"
                            },
                            dataLabels: {
                                show: !0,
                                name: {
                                    show: !1,
                                    fontSize: "12px",
                                    fontFamily: "Roboto, sans-serif",
                                    fontWeight: 400,
                                    offsetY: 5
                                },
                                value: {
                                    show: !0,
                                    fontWeight: 600,
                                    fontFamily: "Roboto, sans-serif",
                                    fontSize: "16px",
                                    offsetY: 5
                                }
                            }
                        }
                    },
                    labels: ["Progress"]
                }, i = b([65]);
                return {
                    type: m,
                    height: c,
                    options: o,
                    series: i
                }
            }

            function J() {
                const {
                    primary: u
                } = g(), m = "radialBar", c = 100, o = {
                    chart: {
                        height: 100,
                        type: "radialBar",
                        offsetY: -10,
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "35%"
                            },
                            dataLabels: {
                                show: !1
                            }
                        }
                    },
                    labels: [""]
                }, i = b([31]);
                return {
                    type: m,
                    height: c,
                    options: o,
                    series: i
                }
            }

            function Z() {
                const {
                    success: u
                } = g(), m = "radialBar", c = 100, o = {
                    chart: {
                        height: 100,
                        type: "radialBar",
                        offsetY: -10,
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "35%"
                            },
                            dataLabels: {
                                show: !1
                            }
                        }
                    },
                    labels: [""]
                }, i = b([53]);
                return {
                    type: m,
                    height: c,
                    options: o,
                    series: i
                }
            }

            function H() {
                const {
                    danger: u
                } = g(), m = "radialBar", c = 100, o = {
                    chart: {
                        height: 100,
                        type: "radialBar",
                        offsetY: -10,
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value],
                    plotOptions: {
                        radialBar: {
                            hollow: {
                                size: "35%"
                            },
                            dataLabels: {
                                show: !1
                            }
                        }
                    },
                    labels: [""]
                }, i = b([84]);
                return {
                    type: m,
                    height: c,
                    options: o,
                    series: i
                }
            }

            function E() {
                const {
                    primary: u
                } = g(), m = "radialBar", c = 220, o = {
                    title: {
                        text: void 0
                    },
                    chart: {
                        sparkline: {
                            enabled: !0
                        },
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value],
                    plotOptions: {
                        radialBar: {
                            startAngle: -90,
                            endAngle: 90,
                            track: {
                                background: "#e7e7e7",
                                strokeWidth: "97%",
                                margin: 5,
                                dropShadow: {
                                    enabled: !1,
                                    top: 2,
                                    left: 0,
                                    color: "#999",
                                    opacity: 1,
                                    blur: 2
                                }
                            },
                            hollow: {
                                margin: 0,
                                size: "35%"
                            },
                            dataLabels: {
                                name: {
                                    show: !1
                                },
                                value: {
                                    offsetY: -2,
                                    fontSize: "22px"
                                }
                            }
                        }
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shade: "light",
                            shadeIntensity: .1,
                            inverseColors: !1,
                            opacityFrom: 1,
                            opacityTo: 1,
                            stops: [0, 50, 53, 91]
                        }
                    },
                    labels: ["Average Results"]
                }, i = b([76]);
                return {
                    type: m,
                    height: c,
                    options: o,
                    series: i
                }
            }

            function B() {
                const {
                    primary: u,
                    success: m
                } = g(), c = "bar", o = 210, i = b([]), h = {
                    chart: {
                        toolbar: {
                            show: !1
                        }
                    },
                    colors: [u.value, m.value],
                    dataLabels: {
                        enabled: !1
                    },
                    noData: {
                        text: "Loading..."
                    },
                    xaxis: {
                        type: "category",
                        tickPlacement: "on",
                        labels: {
                            rotate: -45,
                            rotateAlways: !0
                        }
                    }
                };
                let l, a;
                return z(() => {
                    const {
                        series: p
                    } = B();
                    l = setTimeout(() => {
                        p.value.push({
                            name: "Orders",
                            data: [{
                                x: "Jan",
                                y: 322
                            }, {
                                x: "Feb",
                                y: 459
                            }, {
                                x: "Mar",
                                y: 212
                            }, {
                                x: "Apr",
                                y: 345
                            }, {
                                x: "May",
                                y: 111
                            }, {
                                x: "Jun",
                                y: 189
                            }, {
                                x: "Jul",
                                y: 498
                            }, {
                                x: "Aug",
                                y: 612
                            }, {
                                x: "Sep",
                                y: 451
                            }, {
                                x: "Oct",
                                y: 248
                            }, {
                                x: "Nov",
                                y: 306
                            }, {
                                x: "Dec",
                                y: 366
                            }]
                        })
                    }, 1e3), a = setTimeout(() => {
                        p.value.push({
                            name: "Abandonned",
                            data: [{
                                x: "Jan",
                                y: 25
                            }, {
                                x: "Feb",
                                y: 49
                            }, {
                                x: "Mar",
                                y: 36
                            }, {
                                x: "Apr",
                                y: 84
                            }, {
                                x: "May",
                                y: 64
                            }, {
                                x: "Jun",
                                y: 131
                            }, {
                                x: "Jul",
                                y: 48
                            }, {
                                x: "Aug",
                                y: 144
                            }, {
                                x: "Sep",
                                y: 96
                            }, {
                                x: "Oct",
                                y: 11
                            }, {
                                x: "Nov",
                                y: 31
                            }, {
                                x: "Dec",
                                y: 8
                            }]
                        })
                    }, 2500)
                }), S(() => {
                    clearTimeout(l), clearTimeout(a)
                }), {
                    type: c,
                    height: o,
                    options: h,
                    series: i
                }
            }
            return (u, m) => {
                const c = U,
                    o = et,
                    i = st,
                    h = at,
                    l = nt,
                    a = ot,
                    p = lt;
                return K(), Q("div", null, [t("div", rt, [t("div", ct, [e(c, {
                    src: "/img/avatars/2.svg",
                    size: "lg"
                }), t("div", null, [e(o, {
                    as: "h2",
                    size: "xl",
                    weight: "light",
                    lead: "tight",
                    class: "text-muted-800 dark:text-white"
                }, {
                    default: n(() => [dt]),
                    _: 1
                }), e(i, null, {
                    default: n(() => [ut]),
                    _: 1
                })])]), t("div", mt, [e(h, null, {
                    default: n(() => [pt]),
                    _: 1
                }), e(h, {
                    color: "primary"
                }, {
                    default: n(() => [ft]),
                    _: 1
                })])]), t("div", ht, [t("div", xt, [e(a, {
                    class: "pt-4"
                }, {
                    default: n(() => [e(l, v(w(x(A))), null, 16)]),
                    _: 1
                })]), t("div", _t, [e(a, {
                    class: "pt-4"
                }, {
                    default: n(() => [e(l, v(w(x(M))), null, 16)]),
                    _: 1
                })]), t("div", yt, [e(a, {
                    class: "pt-4"
                }, {
                    default: n(() => [e(l, v(w(x(R))), null, 16)]),
                    _: 1
                })]), t("div", gt, [e(a, {
                    class: "pt-4"
                }, {
                    default: n(() => [e(l, v(w(x(C))), null, 16)]),
                    _: 1
                })]), t("div", bt, [e(a, {
                    class: "p-6"
                }, {
                    default: n(() => [t("div", vt, [e(o, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [wt]),
                        _: 1
                    }), e(p, {
                        to: "#",
                        class: "bg-muted-100 hover:bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-900 text-primary-500 rounded-lg px-4 py-2 font-sans text-sm font-medium underline-offset-4 transition-colors duration-300 hover:underline"
                    }, {
                        default: n(() => [q(" Details ")]),
                        _: 1
                    })]), kt, e(l, v(w(x(O))), null, 16)]),
                    _: 1
                })]), t("div", Tt, [t("div", zt, [e(a, {
                    class: "flex-1 p-6"
                }, {
                    default: n(() => [t("div", St, [t("div", Bt, [e(o, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 mb-4 dark:text-white"
                    }, {
                        default: n(() => [At]),
                        _: 1
                    }), e(o, {
                        as: "h4",
                        size: "lg",
                        weight: "light",
                        lead: "tight",
                        class: "text-muted-800 mb-2 dark:text-white"
                    }, {
                        default: n(() => [Mt]),
                        _: 1
                    }), e(i, {
                        size: "xs"
                    }, {
                        default: n(() => [Rt]),
                        _: 1
                    })]), t("div", Ct, [e(l, v(w(x(W))), null, 16)])])]),
                    _: 1
                }), e(a, {
                    class: "flex-1 p-6"
                }, {
                    default: n(() => [t("div", Ot, [e(o, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [Wt]),
                        _: 1
                    })]), t("div", $t, [t("div", Ft, [e(l, v(w(x($))), null, 16), t("div", Nt, [e(o, {
                        as: "h5",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [Pt]),
                        _: 1
                    }), e(i, {
                        size: "xs"
                    }, {
                        default: n(() => [Lt]),
                        _: 1
                    })])]), t("div", Yt, [e(l, v(w(x(F))), null, 16), t("div", It, [e(o, {
                        as: "h5",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [Vt]),
                        _: 1
                    }), e(i, {
                        size: "xs"
                    }, {
                        default: n(() => [jt]),
                        _: 1
                    })])]), t("div", Xt, [e(l, v(w(x(N))), null, 16), t("div", Dt, [e(o, {
                        as: "h5",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [Jt]),
                        _: 1
                    }), e(i, {
                        size: "xs"
                    }, {
                        default: n(() => [Zt]),
                        _: 1
                    })])])])]),
                    _: 1
                })])]), t("div", Ht, [e(a, {
                    class: "flex flex-col p-6"
                }, {
                    default: n(() => [t("div", Et, [e(o, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [Ut]),
                        _: 1
                    })]), t("div", Gt, [e(l, tt(x(P), {
                        class: "-mt-14"
                    }), null, 16)]), t("div", Kt, [e(i, {
                        size: "sm"
                    }, {
                        default: n(() => [Qt]),
                        _: 1
                    })])]),
                    _: 1
                })]), t("div", qt, [e(a, {
                    class: "relative p-6"
                }, {
                    default: n(() => [t("div", te, [e(o, {
                        as: "h3",
                        size: "md",
                        weight: "semibold",
                        lead: "tight",
                        class: "text-muted-800 dark:text-white"
                    }, {
                        default: n(() => [ee]),
                        _: 1
                    })]), e(l, v(w(x(L))), null, 16)]),
                    _: 1
                })]), t("div", se, [e(a, {
                    class: "p-2"
                }, {
                    default: n(() => [e(x(it), {
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
                })])])])
            }
        }
    });
export {
    de as
    default
};