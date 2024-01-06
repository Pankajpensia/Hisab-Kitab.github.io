import {
    R as Pn,
    D as b,
    d as Ne,
    ae as Dr,
    r as se,
    a2 as ye,
    o as qr,
    a7 as ar,
    ar as fn,
    an as Zr,
    a as Tn,
    aw as Bo,
    b as F,
    c as B,
    g as oe,
    w as xe,
    ab as hr,
    af as wt,
    E as Yn,
    t as be,
    e as G,
    n as ce,
    f as de,
    T as gs,
    ax as yt,
    aa as Ve,
    a5 as ir,
    F as we,
    Y as Be,
    G as zo,
    U as bs,
    V as Vo,
    ai as Uo,
    H as S,
    a4 as ia,
    a6 as ws,
    X as Qt,
    as as Ds,
    ap as Cn,
    a3 as Ko,
    ad as Go
} from "./entry.ab3e2748.js";
var De = "top",
    Ce = "bottom",
    Se = "right",
    $e = "left",
    Sn = "auto",
    pr = [De, Ce, Se, $e],
    xt = "start",
    cr = "end",
    qo = "clippingParents",
    $s = "viewport",
    er = "popper",
    Zo = "reference",
    la = pr.reduce(function(e, t) {
        return e.concat([t + "-" + xt, t + "-" + cr])
    }, []),
    _s = [].concat(pr, [Sn]).reduce(function(e, t) {
        return e.concat([t, t + "-" + xt, t + "-" + cr])
    }, []),
    Xo = "beforeRead",
    Jo = "read",
    Qo = "afterRead",
    ei = "beforeMain",
    ti = "main",
    ri = "afterMain",
    ni = "beforeWrite",
    ai = "write",
    si = "afterWrite",
    oi = [Xo, Jo, Qo, ei, ti, ri, ni, ai, si];

function Ue(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Me(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Dt(e) {
    var t = Me(e).Element;
    return e instanceof t || e instanceof Element
}

function Te(e) {
    var t = Me(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function An(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = Me(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function ii(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(r) {
        var n = t.styles[r] || {},
            a = t.attributes[r] || {},
            s = t.elements[r];
        !Te(s) || !Ue(s) || (Object.assign(s.style, n), Object.keys(a).forEach(function(o) {
            var i = a[o];
            i === !1 ? s.removeAttribute(o) : s.setAttribute(o, i === !0 ? "" : i)
        }))
    })
}

function li(e) {
    var t = e.state,
        r = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
        function() {
            Object.keys(t.elements).forEach(function(n) {
                var a = t.elements[n],
                    s = t.attributes[n] || {},
                    o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
                    i = o.reduce(function(l, c) {
                        return l[c] = "", l
                    }, {});
                !Te(a) || !Ue(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(l) {
                    a.removeAttribute(l)
                }))
            })
        }
}
const ui = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: ii,
    effect: li,
    requires: ["computeStyles"]
};

function ze(e) {
    return e.split("-")[0]
}
var bt = Math.max,
    Sr = Math.min,
    Et = Math.round;

function mn() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function Ms() {
    return !/^((?!chrome|android).)*safari/i.test(mn())
}

function Nt(e, t, r) {
    t === void 0 && (t = !1), r === void 0 && (r = !1);
    var n = e.getBoundingClientRect(),
        a = 1,
        s = 1;
    t && Te(e) && (a = e.offsetWidth > 0 && Et(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Et(n.height) / e.offsetHeight || 1);
    var o = Dt(e) ? Me(e) : window,
        i = o.visualViewport,
        l = !Ms() && r,
        c = (n.left + (l && i ? i.offsetLeft : 0)) / a,
        u = (n.top + (l && i ? i.offsetTop : 0)) / s,
        v = n.width / a,
        h = n.height / s;
    return {
        width: v,
        height: h,
        top: u,
        right: c + v,
        bottom: u + h,
        left: c,
        x: c,
        y: u
    }
}

function In(e) {
    var t = Nt(e),
        r = e.offsetWidth,
        n = e.offsetHeight;
    return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: r,
        height: n
    }
}

function Os(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && An(r)) {
        var n = t;
        do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host
        } while (n)
    }
    return !1
}

function Xe(e) {
    return Me(e).getComputedStyle(e)
}

function ci(e) {
    return ["table", "td", "th"].indexOf(Ue(e)) >= 0
}

function ct(e) {
    return ((Dt(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function Xr(e) {
    return Ue(e) === "html" ? e : e.assignedSlot || e.parentNode || (An(e) ? e.host : null) || ct(e)
}

function ua(e) {
    return !Te(e) || Xe(e).position === "fixed" ? null : e.offsetParent
}

function fi(e) {
    var t = /firefox/i.test(mn()),
        r = /Trident/i.test(mn());
    if (r && Te(e)) {
        var n = Xe(e);
        if (n.position === "fixed") return null
    }
    var a = Xr(e);
    for (An(a) && (a = a.host); Te(a) && ["html", "body"].indexOf(Ue(a)) < 0;) {
        var s = Xe(a);
        if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return a;
        a = a.parentNode
    }
    return null
}

function mr(e) {
    for (var t = Me(e), r = ua(e); r && ci(r) && Xe(r).position === "static";) r = ua(r);
    return r && (Ue(r) === "html" || Ue(r) === "body" && Xe(r).position === "static") ? t : r || fi(e) || t
}

function xn(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function lr(e, t, r) {
    return bt(e, Sr(t, r))
}

function di(e, t, r) {
    var n = lr(e, t, r);
    return n > r ? r : n
}

function ks() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Ps(e) {
    return Object.assign({}, ks(), e)
}

function Ts(e, t) {
    return t.reduce(function(r, n) {
        return r[n] = e, r
    }, {})
}
var vi = function(t, r) {
    return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
        placement: r.placement
    })) : t, Ps(typeof t != "number" ? t : Ts(t, pr))
};

function hi(e) {
    var t, r = e.state,
        n = e.name,
        a = e.options,
        s = r.elements.arrow,
        o = r.modifiersData.popperOffsets,
        i = ze(r.placement),
        l = xn(i),
        c = [$e, Se].indexOf(i) >= 0,
        u = c ? "height" : "width";
    if (!(!s || !o)) {
        var v = vi(a.padding, r),
            h = In(s),
            f = l === "y" ? De : $e,
            g = l === "y" ? Ce : Se,
            p = r.rects.reference[u] + r.rects.reference[l] - o[l] - r.rects.popper[u],
            y = o[l] - r.rects.reference[l],
            m = mr(s),
            T = m ? l === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
            x = p / 2 - y / 2,
            _ = v[f],
            A = T - h[u] - v[g],
            E = T / 2 - h[u] / 2 + x,
            I = lr(_, E, A),
            D = l;
        r.modifiersData[n] = (t = {}, t[D] = I, t.centerOffset = I - E, t)
    }
}

function pi(e) {
    var t = e.state,
        r = e.options,
        n = r.element,
        a = n === void 0 ? "[data-popper-arrow]" : n;
    a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Os(t.elements.popper, a) && (t.elements.arrow = a))
}
const mi = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: hi,
    effect: pi,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Lt(e) {
    return e.split("-")[1]
}
var yi = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function gi(e, t) {
    var r = e.x,
        n = e.y,
        a = t.devicePixelRatio || 1;
    return {
        x: Et(r * a) / a || 0,
        y: Et(n * a) / a || 0
    }
}

function ca(e) {
    var t, r = e.popper,
        n = e.popperRect,
        a = e.placement,
        s = e.variation,
        o = e.offsets,
        i = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        u = e.roundOffsets,
        v = e.isFixed,
        h = o.x,
        f = h === void 0 ? 0 : h,
        g = o.y,
        p = g === void 0 ? 0 : g,
        y = typeof u == "function" ? u({
            x: f,
            y: p
        }) : {
            x: f,
            y: p
        };
    f = y.x, p = y.y;
    var m = o.hasOwnProperty("x"),
        T = o.hasOwnProperty("y"),
        x = $e,
        _ = De,
        A = window;
    if (c) {
        var E = mr(r),
            I = "clientHeight",
            D = "clientWidth";
        if (E === Me(r) && (E = ct(r), Xe(E).position !== "static" && i === "absolute" && (I = "scrollHeight", D = "scrollWidth")), E = E, a === De || (a === $e || a === Se) && s === cr) {
            _ = Ce;
            var $ = v && E === A && A.visualViewport ? A.visualViewport.height : E[I];
            p -= $ - n.height, p *= l ? 1 : -1
        }
        if (a === $e || (a === De || a === Ce) && s === cr) {
            x = Se;
            var w = v && E === A && A.visualViewport ? A.visualViewport.width : E[D];
            f -= w - n.width, f *= l ? 1 : -1
        }
    }
    var C = Object.assign({
            position: i
        }, c && yi),
        k = u === !0 ? gi({
            x: f,
            y: p
        }, Me(r)) : {
            x: f,
            y: p
        };
    if (f = k.x, p = k.y, l) {
        var N;
        return Object.assign({}, C, (N = {}, N[_] = T ? "0" : "", N[x] = m ? "0" : "", N.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", N))
    }
    return Object.assign({}, C, (t = {}, t[_] = T ? p + "px" : "", t[x] = m ? f + "px" : "", t.transform = "", t))
}

function bi(e) {
    var t = e.state,
        r = e.options,
        n = r.gpuAcceleration,
        a = n === void 0 ? !0 : n,
        s = r.adaptive,
        o = s === void 0 ? !0 : s,
        i = r.roundOffsets,
        l = i === void 0 ? !0 : i,
        c = {
            placement: ze(t.placement),
            variation: Lt(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: a,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ca(Object.assign({}, c, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ca(Object.assign({}, c, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const wi = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: bi,
    data: {}
};
var $r = {
    passive: !0
};

function Di(e) {
    var t = e.state,
        r = e.instance,
        n = e.options,
        a = n.scroll,
        s = a === void 0 ? !0 : a,
        o = n.resize,
        i = o === void 0 ? !0 : o,
        l = Me(t.elements.popper),
        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && c.forEach(function(u) {
            u.addEventListener("scroll", r.update, $r)
        }), i && l.addEventListener("resize", r.update, $r),
        function() {
            s && c.forEach(function(u) {
                u.removeEventListener("scroll", r.update, $r)
            }), i && l.removeEventListener("resize", r.update, $r)
        }
}
const $i = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: Di,
    data: {}
};
var _i = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function kr(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return _i[t]
    })
}
var Mi = {
    start: "end",
    end: "start"
};

function fa(e) {
    return e.replace(/start|end/g, function(t) {
        return Mi[t]
    })
}

function En(e) {
    var t = Me(e),
        r = t.pageXOffset,
        n = t.pageYOffset;
    return {
        scrollLeft: r,
        scrollTop: n
    }
}

function Nn(e) {
    return Nt(ct(e)).left + En(e).scrollLeft
}

function Oi(e, t) {
    var r = Me(e),
        n = ct(e),
        a = r.visualViewport,
        s = n.clientWidth,
        o = n.clientHeight,
        i = 0,
        l = 0;
    if (a) {
        s = a.width, o = a.height;
        var c = Ms();
        (c || !c && t === "fixed") && (i = a.offsetLeft, l = a.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: i + Nn(e),
        y: l
    }
}

function ki(e) {
    var t, r = ct(e),
        n = En(e),
        a = (t = e.ownerDocument) == null ? void 0 : t.body,
        s = bt(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        o = bt(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        i = -n.scrollLeft + Nn(e),
        l = -n.scrollTop;
    return Xe(a || r).direction === "rtl" && (i += bt(r.clientWidth, a ? a.clientWidth : 0) - s), {
        width: s,
        height: o,
        x: i,
        y: l
    }
}

function Ln(e) {
    var t = Xe(e),
        r = t.overflow,
        n = t.overflowX,
        a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + a + n)
}

function Ys(e) {
    return ["html", "body", "#document"].indexOf(Ue(e)) >= 0 ? e.ownerDocument.body : Te(e) && Ln(e) ? e : Ys(Xr(e))
}

function ur(e, t) {
    var r;
    t === void 0 && (t = []);
    var n = Ys(e),
        a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = Me(n),
        o = a ? [s].concat(s.visualViewport || [], Ln(n) ? n : []) : n,
        i = t.concat(o);
    return a ? i : i.concat(ur(Xr(o)))
}

function yn(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function Pi(e, t) {
    var r = Nt(e, !1, t === "fixed");
    return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r
}

function da(e, t, r) {
    return t === $s ? yn(Oi(e, r)) : Dt(t) ? Pi(t, r) : yn(ki(ct(e)))
}

function Ti(e) {
    var t = ur(Xr(e)),
        r = ["absolute", "fixed"].indexOf(Xe(e).position) >= 0,
        n = r && Te(e) ? mr(e) : e;
    return Dt(n) ? t.filter(function(a) {
        return Dt(a) && Os(a, n) && Ue(a) !== "body"
    }) : []
}

function Yi(e, t, r, n) {
    var a = t === "clippingParents" ? Ti(e) : [].concat(t),
        s = [].concat(a, [r]),
        o = s[0],
        i = s.reduce(function(l, c) {
            var u = da(e, c, n);
            return l.top = bt(u.top, l.top), l.right = Sr(u.right, l.right), l.bottom = Sr(u.bottom, l.bottom), l.left = bt(u.left, l.left), l
        }, da(e, o, n));
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
}

function Cs(e) {
    var t = e.reference,
        r = e.element,
        n = e.placement,
        a = n ? ze(n) : null,
        s = n ? Lt(n) : null,
        o = t.x + t.width / 2 - r.width / 2,
        i = t.y + t.height / 2 - r.height / 2,
        l;
    switch (a) {
        case De:
            l = {
                x: o,
                y: t.y - r.height
            };
            break;
        case Ce:
            l = {
                x: o,
                y: t.y + t.height
            };
            break;
        case Se:
            l = {
                x: t.x + t.width,
                y: i
            };
            break;
        case $e:
            l = {
                x: t.x - r.width,
                y: i
            };
            break;
        default:
            l = {
                x: t.x,
                y: t.y
            }
    }
    var c = a ? xn(a) : null;
    if (c != null) {
        var u = c === "y" ? "height" : "width";
        switch (s) {
            case xt:
                l[c] = l[c] - (t[u] / 2 - r[u] / 2);
                break;
            case cr:
                l[c] = l[c] + (t[u] / 2 - r[u] / 2);
                break
        }
    }
    return l
}

function fr(e, t) {
    t === void 0 && (t = {});
    var r = t,
        n = r.placement,
        a = n === void 0 ? e.placement : n,
        s = r.strategy,
        o = s === void 0 ? e.strategy : s,
        i = r.boundary,
        l = i === void 0 ? qo : i,
        c = r.rootBoundary,
        u = c === void 0 ? $s : c,
        v = r.elementContext,
        h = v === void 0 ? er : v,
        f = r.altBoundary,
        g = f === void 0 ? !1 : f,
        p = r.padding,
        y = p === void 0 ? 0 : p,
        m = Ps(typeof y != "number" ? y : Ts(y, pr)),
        T = h === er ? Zo : er,
        x = e.rects.popper,
        _ = e.elements[g ? T : h],
        A = Yi(Dt(_) ? _ : _.contextElement || ct(e.elements.popper), l, u, o),
        E = Nt(e.elements.reference),
        I = Cs({
            reference: E,
            element: x,
            strategy: "absolute",
            placement: a
        }),
        D = yn(Object.assign({}, x, I)),
        $ = h === er ? D : E,
        w = {
            top: A.top - $.top + m.top,
            bottom: $.bottom - A.bottom + m.bottom,
            left: A.left - $.left + m.left,
            right: $.right - A.right + m.right
        },
        C = e.modifiersData.offset;
    if (h === er && C) {
        var k = C[a];
        Object.keys(w).forEach(function(N) {
            var z = [Se, Ce].indexOf(N) >= 0 ? 1 : -1,
                L = [De, Ce].indexOf(N) >= 0 ? "y" : "x";
            w[N] += k[L] * z
        })
    }
    return w
}

function Ci(e, t) {
    t === void 0 && (t = {});
    var r = t,
        n = r.placement,
        a = r.boundary,
        s = r.rootBoundary,
        o = r.padding,
        i = r.flipVariations,
        l = r.allowedAutoPlacements,
        c = l === void 0 ? _s : l,
        u = Lt(n),
        v = u ? i ? la : la.filter(function(g) {
            return Lt(g) === u
        }) : pr,
        h = v.filter(function(g) {
            return c.indexOf(g) >= 0
        });
    h.length === 0 && (h = v);
    var f = h.reduce(function(g, p) {
        return g[p] = fr(e, {
            placement: p,
            boundary: a,
            rootBoundary: s,
            padding: o
        })[ze(p)], g
    }, {});
    return Object.keys(f).sort(function(g, p) {
        return f[g] - f[p]
    })
}

function Si(e) {
    if (ze(e) === Sn) return [];
    var t = kr(e);
    return [fa(e), t, fa(t)]
}

function Ai(e) {
    var t = e.state,
        r = e.options,
        n = e.name;
    if (!t.modifiersData[n]._skip) {
        for (var a = r.mainAxis, s = a === void 0 ? !0 : a, o = r.altAxis, i = o === void 0 ? !0 : o, l = r.fallbackPlacements, c = r.padding, u = r.boundary, v = r.rootBoundary, h = r.altBoundary, f = r.flipVariations, g = f === void 0 ? !0 : f, p = r.allowedAutoPlacements, y = t.options.placement, m = ze(y), T = m === y, x = l || (T || !g ? [kr(y)] : Si(y)), _ = [y].concat(x).reduce(function(H, re) {
                return H.concat(ze(re) === Sn ? Ci(t, {
                    placement: re,
                    boundary: u,
                    rootBoundary: v,
                    padding: c,
                    flipVariations: g,
                    allowedAutoPlacements: p
                }) : re)
            }, []), A = t.rects.reference, E = t.rects.popper, I = new Map, D = !0, $ = _[0], w = 0; w < _.length; w++) {
            var C = _[w],
                k = ze(C),
                N = Lt(C) === xt,
                z = [De, Ce].indexOf(k) >= 0,
                L = z ? "width" : "height",
                V = fr(t, {
                    placement: C,
                    boundary: u,
                    rootBoundary: v,
                    altBoundary: h,
                    padding: c
                }),
                Z = z ? N ? Se : $e : N ? Ce : De;
            A[L] > E[L] && (Z = kr(Z));
            var te = kr(Z),
                q = [];
            if (s && q.push(V[k] <= 0), i && q.push(V[Z] <= 0, V[te] <= 0), q.every(function(H) {
                    return H
                })) {
                $ = C, D = !1;
                break
            }
            I.set(C, q)
        }
        if (D)
            for (var O = g ? 3 : 1, U = function(re) {
                    var X = _.find(function(ue) {
                        var ae = I.get(ue);
                        if (ae) return ae.slice(0, re).every(function(J) {
                            return J
                        })
                    });
                    if (X) return $ = X, "break"
                }, le = O; le > 0; le--) {
                var fe = U(le);
                if (fe === "break") break
            }
        t.placement !== $ && (t.modifiersData[n]._skip = !0, t.placement = $, t.reset = !0)
    }
}
const Ii = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Ai,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function va(e, t, r) {
    return r === void 0 && (r = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - r.y,
        right: e.right - t.width + r.x,
        bottom: e.bottom - t.height + r.y,
        left: e.left - t.width - r.x
    }
}

function ha(e) {
    return [De, Se, Ce, $e].some(function(t) {
        return e[t] >= 0
    })
}

function xi(e) {
    var t = e.state,
        r = e.name,
        n = t.rects.reference,
        a = t.rects.popper,
        s = t.modifiersData.preventOverflow,
        o = fr(t, {
            elementContext: "reference"
        }),
        i = fr(t, {
            altBoundary: !0
        }),
        l = va(o, n),
        c = va(i, a, s),
        u = ha(l),
        v = ha(c);
    t.modifiersData[r] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: u,
        hasPopperEscaped: v
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": u,
        "data-popper-escaped": v
    })
}
const Ei = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: xi
};

function Ni(e, t, r) {
    var n = ze(e),
        a = [$e, De].indexOf(n) >= 0 ? -1 : 1,
        s = typeof r == "function" ? r(Object.assign({}, t, {
            placement: e
        })) : r,
        o = s[0],
        i = s[1];
    return o = o || 0, i = (i || 0) * a, [$e, Se].indexOf(n) >= 0 ? {
        x: i,
        y: o
    } : {
        x: o,
        y: i
    }
}

function Li(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        a = r.offset,
        s = a === void 0 ? [0, 0] : a,
        o = _s.reduce(function(u, v) {
            return u[v] = Ni(v, t.rects, s), u
        }, {}),
        i = o[t.placement],
        l = i.x,
        c = i.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = o
}
const Ri = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Li
};

function Fi(e) {
    var t = e.state,
        r = e.name;
    t.modifiersData[r] = Cs({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const Hi = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Fi,
    data: {}
};

function Wi(e) {
    return e === "x" ? "y" : "x"
}

function ji(e) {
    var t = e.state,
        r = e.options,
        n = e.name,
        a = r.mainAxis,
        s = a === void 0 ? !0 : a,
        o = r.altAxis,
        i = o === void 0 ? !1 : o,
        l = r.boundary,
        c = r.rootBoundary,
        u = r.altBoundary,
        v = r.padding,
        h = r.tether,
        f = h === void 0 ? !0 : h,
        g = r.tetherOffset,
        p = g === void 0 ? 0 : g,
        y = fr(t, {
            boundary: l,
            rootBoundary: c,
            padding: v,
            altBoundary: u
        }),
        m = ze(t.placement),
        T = Lt(t.placement),
        x = !T,
        _ = xn(m),
        A = Wi(_),
        E = t.modifiersData.popperOffsets,
        I = t.rects.reference,
        D = t.rects.popper,
        $ = typeof p == "function" ? p(Object.assign({}, t.rects, {
            placement: t.placement
        })) : p,
        w = typeof $ == "number" ? {
            mainAxis: $,
            altAxis: $
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, $),
        C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        k = {
            x: 0,
            y: 0
        };
    if (E) {
        if (s) {
            var N, z = _ === "y" ? De : $e,
                L = _ === "y" ? Ce : Se,
                V = _ === "y" ? "height" : "width",
                Z = E[_],
                te = Z + y[z],
                q = Z - y[L],
                O = f ? -D[V] / 2 : 0,
                U = T === xt ? I[V] : D[V],
                le = T === xt ? -D[V] : -I[V],
                fe = t.elements.arrow,
                H = f && fe ? In(fe) : {
                    width: 0,
                    height: 0
                },
                re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ks(),
                X = re[z],
                ue = re[L],
                ae = lr(0, I[V], H[V]),
                J = x ? I[V] / 2 - O - ae - X - w.mainAxis : U - ae - X - w.mainAxis,
                _e = x ? -I[V] / 2 + O + ae + ue + w.mainAxis : le + ae + ue + w.mainAxis,
                pe = t.elements.arrow && mr(t.elements.arrow),
                Oe = pe ? _ === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0,
                ke = (N = C ? .[_]) != null ? N : 0,
                ft = Z + J - ke - Oe,
                Fe = Z + _e - ke,
                dt = lr(f ? Sr(te, ft) : te, Z, f ? bt(q, Fe) : q);
            E[_] = dt, k[_] = dt - Z
        }
        if (i) {
            var nt, vt = _ === "x" ? De : $e,
                Gt = _ === "x" ? Ce : Se,
                Ae = E[A],
                He = A === "y" ? "height" : "width",
                at = Ae + y[vt],
                ht = Ae - y[Gt],
                st = [De, $e].indexOf(m) !== -1,
                qe = (nt = C ? .[A]) != null ? nt : 0,
                pt = st ? at : Ae - I[He] - D[He] - qe + w.altAxis,
                kt = st ? Ae + I[He] + D[He] - qe - w.altAxis : ht,
                Pt = f && st ? di(pt, Ae, kt) : lr(f ? pt : at, Ae, f ? kt : ht);
            E[A] = Pt, k[A] = Pt - Ae
        }
        t.modifiersData[n] = k
    }
}
const Bi = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: ji,
    requiresIfExists: ["offset"]
};

function zi(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Vi(e) {
    return e === Me(e) || !Te(e) ? En(e) : zi(e)
}

function Ui(e) {
    var t = e.getBoundingClientRect(),
        r = Et(t.width) / e.offsetWidth || 1,
        n = Et(t.height) / e.offsetHeight || 1;
    return r !== 1 || n !== 1
}

function Ki(e, t, r) {
    r === void 0 && (r = !1);
    var n = Te(t),
        a = Te(t) && Ui(t),
        s = ct(t),
        o = Nt(e, a, r),
        i = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (n || !n && !r) && ((Ue(t) !== "body" || Ln(s)) && (i = Vi(t)), Te(t) ? (l = Nt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Nn(s))), {
        x: o.left + i.scrollLeft - l.x,
        y: o.top + i.scrollTop - l.y,
        width: o.width,
        height: o.height
    }
}

function Gi(e) {
    var t = new Map,
        r = new Set,
        n = [];
    e.forEach(function(s) {
        t.set(s.name, s)
    });

    function a(s) {
        r.add(s.name);
        var o = [].concat(s.requires || [], s.requiresIfExists || []);
        o.forEach(function(i) {
            if (!r.has(i)) {
                var l = t.get(i);
                l && a(l)
            }
        }), n.push(s)
    }
    return e.forEach(function(s) {
        r.has(s.name) || a(s)
    }), n
}

function qi(e) {
    var t = Gi(e);
    return oi.reduce(function(r, n) {
        return r.concat(t.filter(function(a) {
            return a.phase === n
        }))
    }, [])
}

function Zi(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(r) {
            Promise.resolve().then(function() {
                t = void 0, r(e())
            })
        })), t
    }
}

function Xi(e) {
    var t = e.reduce(function(r, n) {
        var a = r[n.name];
        return r[n.name] = a ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data)
        }) : n, r
    }, {});
    return Object.keys(t).map(function(r) {
        return t[r]
    })
}
var pa = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function ma() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function(n) {
        return !(n && typeof n.getBoundingClientRect == "function")
    })
}

function Ji(e) {
    e === void 0 && (e = {});
    var t = e,
        r = t.defaultModifiers,
        n = r === void 0 ? [] : r,
        a = t.defaultOptions,
        s = a === void 0 ? pa : a;
    return function(i, l, c) {
        c === void 0 && (c = s);
        var u = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, pa, s),
                modifiersData: {},
                elements: {
                    reference: i,
                    popper: l
                },
                attributes: {},
                styles: {}
            },
            v = [],
            h = !1,
            f = {
                state: u,
                setOptions: function(m) {
                    var T = typeof m == "function" ? m(u.options) : m;
                    p(), u.options = Object.assign({}, s, u.options, T), u.scrollParents = {
                        reference: Dt(i) ? ur(i) : i.contextElement ? ur(i.contextElement) : [],
                        popper: ur(l)
                    };
                    var x = qi(Xi([].concat(n, u.options.modifiers)));
                    return u.orderedModifiers = x.filter(function(_) {
                        return _.enabled
                    }), g(), f.update()
                },
                forceUpdate: function() {
                    if (!h) {
                        var m = u.elements,
                            T = m.reference,
                            x = m.popper;
                        if (ma(T, x)) {
                            u.rects = {
                                reference: Ki(T, mr(x), u.options.strategy === "fixed"),
                                popper: In(x)
                            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(w) {
                                return u.modifiersData[w.name] = Object.assign({}, w.data)
                            });
                            for (var _ = 0; _ < u.orderedModifiers.length; _++) {
                                if (u.reset === !0) {
                                    u.reset = !1, _ = -1;
                                    continue
                                }
                                var A = u.orderedModifiers[_],
                                    E = A.fn,
                                    I = A.options,
                                    D = I === void 0 ? {} : I,
                                    $ = A.name;
                                typeof E == "function" && (u = E({
                                    state: u,
                                    options: D,
                                    name: $,
                                    instance: f
                                }) || u)
                            }
                        }
                    }
                },
                update: Zi(function() {
                    return new Promise(function(y) {
                        f.forceUpdate(), y(u)
                    })
                }),
                destroy: function() {
                    p(), h = !0
                }
            };
        if (!ma(i, l)) return f;
        f.setOptions(c).then(function(y) {
            !h && c.onFirstUpdate && c.onFirstUpdate(y)
        });

        function g() {
            u.orderedModifiers.forEach(function(y) {
                var m = y.name,
                    T = y.options,
                    x = T === void 0 ? {} : T,
                    _ = y.effect;
                if (typeof _ == "function") {
                    var A = _({
                            state: u,
                            name: m,
                            instance: f,
                            options: x
                        }),
                        E = function() {};
                    v.push(A || E)
                }
            })
        }

        function p() {
            v.forEach(function(y) {
                return y()
            }), v = []
        }
        return f
    }
}
var Qi = [$i, Hi, wi, ui, Ri, Ii, Bi, mi, Ei],
    el = Ji({
        defaultModifiers: Qi
    }),
    tl = Object.defineProperty,
    rl = (e, t, r) => t in e ? tl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    R = (e, t, r) => (rl(e, typeof t != "symbol" ? t + "" : t, r), r);
const et = (e, t) => {
        const r = e.__vccOpts || e;
        for (const [n, a] of t) r[n] = a;
        return r
    },
    nl = {},
    al = {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        viewBox: "0 0 24 24"
    },
    sl = G("polyline", {
        points: "9 18 15 12 9 6"
    }, null, -1),
    ol = [sl];

function il(e, t) {
    return F(), B("svg", al, ol)
}
const ll = et(nl, [
        ["render", il]
    ]),
    ul = {},
    cl = {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        viewBox: "0 0 24 24"
    },
    fl = G("polyline", {
        points: "15 18 9 12 15 6"
    }, null, -1),
    dl = [fl];

function vl(e, t) {
    return F(), B("svg", cl, dl)
}
const hl = et(ul, [
        ["render", vl]
    ]),
    pl = {},
    ml = {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        viewBox: "0 0 24 24"
    },
    yl = G("polyline", {
        points: "6 9 12 15 18 9"
    }, null, -1),
    gl = [yl];

function bl(e, t) {
    return F(), B("svg", ml, gl)
}
const wl = et(pl, [
        ["render", bl]
    ]),
    Dl = {},
    $l = {
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        viewBox: "0 0 24 24"
    },
    _l = G("path", {
        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    }, null, -1),
    Ml = [_l];

function Ol(e, t) {
    return F(), B("svg", $l, Ml)
}
const kl = et(Dl, [
        ["render", Ol]
    ]),
    Pl = Object.freeze(Object.defineProperty({
        __proto__: null,
        IconChevronDown: wl,
        IconChevronLeft: hl,
        IconChevronRight: ll,
        IconClock: kl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Rt = Ne({
        __name: "BaseIcon",
        props: {
            name: {
                type: String,
                required: !0
            },
            width: {
                type: String
            },
            height: {
                type: String
            },
            size: {
                type: String,
                default: "26"
            },
            viewBox: {
                type: String
            }
        },
        setup(e) {
            const t = e,
                r = b(() => t.width || t.size),
                n = b(() => t.height || t.size),
                a = b(() => Pl[`Icon${t.name}`]);
            return (s, o) => (F(), Ve(Ds(S(a)), {
                width: S(r),
                height: S(n),
                class: "vc-base-icon"
            }, null, 8, ["width", "height"]))
        }
    });

function Ss() {
    return typeof window < "u"
}

function Tl(e) {
    return Ss() && e in window
}

function Yl(e) {
    const t = se(!1),
        r = b(() => t.value ? "dark" : "light");
    let n, a;

    function s(f) {
        t.value = f.matches
    }

    function o() {
        Tl("matchMedia") && (n = window.matchMedia("(prefers-color-scheme: dark)"), n.addEventListener("change", s), t.value = n.matches)
    }

    function i() {
        const {
            selector: f = ":root",
            darkClass: g = "dark"
        } = e.value, p = document.querySelector(f);
        t.value = p.classList.contains(g)
    }

    function l(f) {
        const {
            selector: g = ":root",
            darkClass: p = "dark"
        } = f;
        if (Ss() && g && p) {
            const y = document.querySelector(g);
            y && (a = new MutationObserver(i), a.observe(y, {
                attributes: !0,
                attributeFilter: ["class"]
            }), t.value = y.classList.contains(p))
        }
    }

    function c() {
        v();
        const f = typeof e.value;
        f === "string" && e.value.toLowerCase() === "system" ? o() : f === "object" ? l(e.value) : t.value = !!e.value
    }
    const u = ye(() => e.value, () => c(), {
        immediate: !0
    });

    function v() {
        n && (n.removeEventListener("change", s), n = void 0), a && (a.disconnect(), a = void 0)
    }

    function h() {
        v(), u()
    }
    return Tn(() => h()), {
        isDark: t,
        displayMode: r,
        cleanup: h
    }
}
var _r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Cl(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Sl = typeof _r == "object" && _r && _r.Object === Object && _r,
    As = Sl,
    Al = As,
    Il = typeof self == "object" && self && self.Object === Object && self,
    xl = Al || Il || Function("return this")(),
    Ke = xl,
    El = Ke,
    Nl = El.Symbol,
    Jr = Nl,
    ya = Jr,
    Is = Object.prototype,
    Ll = Is.hasOwnProperty,
    Rl = Is.toString,
    tr = ya ? ya.toStringTag : void 0;

function Fl(e) {
    var t = Ll.call(e, tr),
        r = e[tr];
    try {
        e[tr] = void 0;
        var n = !0
    } catch {}
    var a = Rl.call(e);
    return n && (t ? e[tr] = r : delete e[tr]), a
}
var Hl = Fl,
    Wl = Object.prototype,
    jl = Wl.toString;

function Bl(e) {
    return jl.call(e)
}
var zl = Bl,
    ga = Jr,
    Vl = Hl,
    Ul = zl,
    Kl = "[object Null]",
    Gl = "[object Undefined]",
    ba = ga ? ga.toStringTag : void 0;

function ql(e) {
    return e == null ? e === void 0 ? Gl : Kl : ba && ba in Object(e) ? Vl(e) : Ul(e)
}
var Ge = ql;

function Zl(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var tt = Zl,
    Xl = Ge,
    Jl = tt,
    Ql = "[object AsyncFunction]",
    eu = "[object Function]",
    tu = "[object GeneratorFunction]",
    ru = "[object Proxy]";

function nu(e) {
    if (!Jl(e)) return !1;
    var t = Xl(e);
    return t == eu || t == tu || t == Ql || t == ru
}
var _t = nu,
    au = Array.isArray,
    Le = au;

function su(e) {
    return e != null && typeof e == "object"
}
var Re = su,
    ou = Ge,
    iu = Le,
    lu = Re,
    uu = "[object String]";

function cu(e) {
    return typeof e == "string" || !iu(e) && lu(e) && ou(e) == uu
}
var We = cu,
    fu = Ge,
    du = Re,
    vu = "[object Boolean]";

function hu(e) {
    return e === !0 || e === !1 || du(e) && fu(e) == vu
}
var pu = hu,
    mu = Ge,
    yu = Re,
    gu = "[object Number]";

function bu(e) {
    return typeof e == "number" || yu(e) && mu(e) == gu
}
var Ee = bu,
    wu = Ge,
    Du = Re,
    $u = "[object Date]";

function _u(e) {
    return Du(e) && wu(e) == $u
}
var Mu = _u;

function Ou(e) {
    return function(t) {
        return e(t)
    }
}
var xs = Ou,
    dr = {},
    ku = {
        get exports() {
            return dr
        },
        set exports(e) {
            dr = e
        }
    };
(function(e, t) {
    var r = As,
        n = t && !t.nodeType && t,
        a = n && !0 && e && !e.nodeType && e,
        s = a && a.exports === n,
        o = s && r.process,
        i = function() {
            try {
                var l = a && a.require && a.require("util").types;
                return l || o && o.binding && o.binding("util")
            } catch {}
        }();
    e.exports = i
})(ku, dr);
var Pu = Mu,
    Tu = xs,
    wa = dr,
    Da = wa && wa.isDate,
    Yu = Da ? Tu(Da) : Pu,
    Cu = Yu,
    Su = Ge,
    Au = Re,
    Iu = "[object Symbol]";

function xu(e) {
    return typeof e == "symbol" || Au(e) && Su(e) == Iu
}
var Rn = xu,
    Eu = Le,
    Nu = Rn,
    Lu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Ru = /^\w*$/;

function Fu(e, t) {
    if (Eu(e)) return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || Nu(e) ? !0 : Ru.test(e) || !Lu.test(e) || t != null && e in Object(t)
}
var Fn = Fu,
    Hu = Ke,
    Wu = Hu["__core-js_shared__"],
    ju = Wu,
    dn = ju,
    $a = function() {
        var e = /[^.]+$/.exec(dn && dn.keys && dn.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

function Bu(e) {
    return !!$a && $a in e
}
var zu = Bu,
    Vu = Function.prototype,
    Uu = Vu.toString;

function Ku(e) {
    if (e != null) {
        try {
            return Uu.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Es = Ku,
    Gu = _t,
    qu = zu,
    Zu = tt,
    Xu = Es,
    Ju = /[\\^$.*+?()[\]{}|]/g,
    Qu = /^\[object .+?Constructor\]$/,
    ec = Function.prototype,
    tc = Object.prototype,
    rc = ec.toString,
    nc = tc.hasOwnProperty,
    ac = RegExp("^" + rc.call(nc).replace(Ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function sc(e) {
    if (!Zu(e) || qu(e)) return !1;
    var t = Gu(e) ? ac : Qu;
    return t.test(Xu(e))
}
var oc = sc;

function ic(e, t) {
    return e ? .[t]
}
var lc = ic,
    uc = oc,
    cc = lc;

function fc(e, t) {
    var r = cc(e, t);
    return uc(r) ? r : void 0
}
var Mt = fc,
    dc = Mt,
    vc = dc(Object, "create"),
    Qr = vc,
    _a = Qr;

function hc() {
    this.__data__ = _a ? _a(null) : {}, this.size = 0
}
var pc = hc;

function mc(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}
var yc = mc,
    gc = Qr,
    bc = "__lodash_hash_undefined__",
    wc = Object.prototype,
    Dc = wc.hasOwnProperty;

function $c(e) {
    var t = this.__data__;
    if (gc) {
        var r = t[e];
        return r === bc ? void 0 : r
    }
    return Dc.call(t, e) ? t[e] : void 0
}
var _c = $c,
    Mc = Qr,
    Oc = Object.prototype,
    kc = Oc.hasOwnProperty;

function Pc(e) {
    var t = this.__data__;
    return Mc ? t[e] !== void 0 : kc.call(t, e)
}
var Tc = Pc,
    Yc = Qr,
    Cc = "__lodash_hash_undefined__";

function Sc(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = Yc && t === void 0 ? Cc : t, this
}
var Ac = Sc,
    Ic = pc,
    xc = yc,
    Ec = _c,
    Nc = Tc,
    Lc = Ac;

function Ht(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
Ht.prototype.clear = Ic;
Ht.prototype.delete = xc;
Ht.prototype.get = Ec;
Ht.prototype.has = Nc;
Ht.prototype.set = Lc;
var Rc = Ht;

function Fc() {
    this.__data__ = [], this.size = 0
}
var Hc = Fc;

function Wc(e, t) {
    return e === t || e !== e && t !== t
}
var Wt = Wc,
    jc = Wt;

function Bc(e, t) {
    for (var r = e.length; r--;)
        if (jc(e[r][0], t)) return r;
    return -1
}
var en = Bc,
    zc = en,
    Vc = Array.prototype,
    Uc = Vc.splice;

function Kc(e) {
    var t = this.__data__,
        r = zc(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : Uc.call(t, r, 1), --this.size, !0
}
var Gc = Kc,
    qc = en;

function Zc(e) {
    var t = this.__data__,
        r = qc(t, e);
    return r < 0 ? void 0 : t[r][1]
}
var Xc = Zc,
    Jc = en;

function Qc(e) {
    return Jc(this.__data__, e) > -1
}
var ef = Qc,
    tf = en;

function rf(e, t) {
    var r = this.__data__,
        n = tf(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
}
var nf = rf,
    af = Hc,
    sf = Gc,
    of = Xc,
    lf = ef,
    uf = nf;

function jt(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
jt.prototype.clear = af;
jt.prototype.delete = sf;
jt.prototype.get = of ;
jt.prototype.has = lf;
jt.prototype.set = uf;
var tn = jt,
    cf = Mt,
    ff = Ke,
    df = cf(ff, "Map"),
    Hn = df,
    Ma = Rc,
    vf = tn,
    hf = Hn;

function pf() {
    this.size = 0, this.__data__ = {
        hash: new Ma,
        map: new(hf || vf),
        string: new Ma
    }
}
var mf = pf;

function yf(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var gf = yf,
    bf = gf;

function wf(e, t) {
    var r = e.__data__;
    return bf(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
var rn = wf,
    Df = rn;

function $f(e) {
    var t = Df(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}
var _f = $f,
    Mf = rn;

function Of(e) {
    return Mf(this, e).get(e)
}
var kf = Of,
    Pf = rn;

function Tf(e) {
    return Pf(this, e).has(e)
}
var Yf = Tf,
    Cf = rn;

function Sf(e, t) {
    var r = Cf(this, e),
        n = r.size;
    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
}
var Af = Sf,
    If = mf,
    xf = _f,
    Ef = kf,
    Nf = Yf,
    Lf = Af;

function Bt(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
Bt.prototype.clear = If;
Bt.prototype.delete = xf;
Bt.prototype.get = Ef;
Bt.prototype.has = Nf;
Bt.prototype.set = Lf;
var Wn = Bt,
    Ns = Wn,
    Rf = "Expected a function";

function jn(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Rf);
    var r = function() {
        var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            s = r.cache;
        if (s.has(a)) return s.get(a);
        var o = e.apply(this, n);
        return r.cache = s.set(a, o) || s, o
    };
    return r.cache = new(jn.Cache || Ns), r
}
jn.Cache = Ns;
var Ff = jn,
    Hf = Ff,
    Wf = 500;

function jf(e) {
    var t = Hf(e, function(n) {
            return r.size === Wf && r.clear(), n
        }),
        r = t.cache;
    return t
}
var Bf = jf,
    zf = Bf,
    Vf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Uf = /\\(\\)?/g,
    Kf = zf(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Vf, function(r, n, a, s) {
            t.push(a ? s.replace(Uf, "$1") : n || r)
        }), t
    }),
    Gf = Kf;

function qf(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n;) a[r] = t(e[r], r, e);
    return a
}
var Zf = qf,
    Oa = Jr,
    Xf = Zf,
    Jf = Le,
    Qf = Rn,
    ed = 1 / 0,
    ka = Oa ? Oa.prototype : void 0,
    Pa = ka ? ka.toString : void 0;

function Ls(e) {
    if (typeof e == "string") return e;
    if (Jf(e)) return Xf(e, Ls) + "";
    if (Qf(e)) return Pa ? Pa.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -ed ? "-0" : t
}
var td = Ls,
    rd = td;

function nd(e) {
    return e == null ? "" : rd(e)
}
var ad = nd,
    sd = Le,
    od = Fn,
    id = Gf,
    ld = ad;

function ud(e, t) {
    return sd(e) ? e : od(e, t) ? [e] : id(ld(e))
}
var Rs = ud,
    cd = Rn,
    fd = 1 / 0;

function dd(e) {
    if (typeof e == "string" || cd(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -fd ? "-0" : t
}
var nn = dd,
    vd = Rs,
    hd = nn;

function pd(e, t) {
    t = vd(t, e);
    for (var r = 0, n = t.length; e != null && r < n;) e = e[hd(t[r++])];
    return r && r == n ? e : void 0
}
var Fs = pd,
    md = Fs;

function yd(e, t, r) {
    var n = e == null ? void 0 : md(e, t);
    return n === void 0 ? r : n
}
var gt = yd,
    gd = Mt,
    bd = function() {
        try {
            var e = gd(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {}
    }(),
    Hs = bd,
    Ta = Hs;

function wd(e, t, r) {
    t == "__proto__" && Ta ? Ta(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : e[t] = r
}
var an = wd,
    Dd = an,
    $d = Wt,
    _d = Object.prototype,
    Md = _d.hasOwnProperty;

function Od(e, t, r) {
    var n = e[t];
    (!(Md.call(e, t) && $d(n, r)) || r === void 0 && !(t in e)) && Dd(e, t, r)
}
var kd = Od,
    Pd = 9007199254740991,
    Td = /^(?:0|[1-9]\d*)$/;

function Yd(e, t) {
    var r = typeof e;
    return t = t ? ? Pd, !!t && (r == "number" || r != "symbol" && Td.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var Bn = Yd;

function Cd(e) {
    return function(t, r, n) {
        for (var a = -1, s = Object(t), o = n(t), i = o.length; i--;) {
            var l = o[e ? i : ++a];
            if (r(s[l], l, s) === !1) break
        }
        return t
    }
}
var Sd = Cd,
    Ad = Sd,
    Id = Ad(),
    Ws = Id;

function xd(e, t) {
    for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
    return n
}
var Ed = xd,
    Nd = Ge,
    Ld = Re,
    Rd = "[object Arguments]";

function Fd(e) {
    return Ld(e) && Nd(e) == Rd
}
var Hd = Fd,
    Ya = Hd,
    Wd = Re,
    js = Object.prototype,
    jd = js.hasOwnProperty,
    Bd = js.propertyIsEnumerable,
    zd = Ya(function() {
        return arguments
    }()) ? Ya : function(e) {
        return Wd(e) && jd.call(e, "callee") && !Bd.call(e, "callee")
    },
    zn = zd,
    Ft = {},
    Vd = {
        get exports() {
            return Ft
        },
        set exports(e) {
            Ft = e
        }
    };

function Ud() {
    return !1
}
var Kd = Ud;
(function(e, t) {
    var r = Ke,
        n = Kd,
        a = t && !t.nodeType && t,
        s = a && !0 && e && !e.nodeType && e,
        o = s && s.exports === a,
        i = o ? r.Buffer : void 0,
        l = i ? i.isBuffer : void 0,
        c = l || n;
    e.exports = c
})(Vd, Ft);
var Gd = 9007199254740991;

function qd(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Gd
}
var Vn = qd,
    Zd = Ge,
    Xd = Vn,
    Jd = Re,
    Qd = "[object Arguments]",
    ev = "[object Array]",
    tv = "[object Boolean]",
    rv = "[object Date]",
    nv = "[object Error]",
    av = "[object Function]",
    sv = "[object Map]",
    ov = "[object Number]",
    iv = "[object Object]",
    lv = "[object RegExp]",
    uv = "[object Set]",
    cv = "[object String]",
    fv = "[object WeakMap]",
    dv = "[object ArrayBuffer]",
    vv = "[object DataView]",
    hv = "[object Float32Array]",
    pv = "[object Float64Array]",
    mv = "[object Int8Array]",
    yv = "[object Int16Array]",
    gv = "[object Int32Array]",
    bv = "[object Uint8Array]",
    wv = "[object Uint8ClampedArray]",
    Dv = "[object Uint16Array]",
    $v = "[object Uint32Array]",
    ne = {};
ne[hv] = ne[pv] = ne[mv] = ne[yv] = ne[gv] = ne[bv] = ne[wv] = ne[Dv] = ne[$v] = !0;
ne[Qd] = ne[ev] = ne[dv] = ne[tv] = ne[vv] = ne[rv] = ne[nv] = ne[av] = ne[sv] = ne[ov] = ne[iv] = ne[lv] = ne[uv] = ne[cv] = ne[fv] = !1;

function _v(e) {
    return Jd(e) && Xd(e.length) && !!ne[Zd(e)]
}
var Mv = _v,
    Ov = Mv,
    kv = xs,
    Ca = dr,
    Sa = Ca && Ca.isTypedArray,
    Pv = Sa ? kv(Sa) : Ov,
    Un = Pv,
    Tv = Ed,
    Yv = zn,
    Cv = Le,
    Sv = Ft,
    Av = Bn,
    Iv = Un,
    xv = Object.prototype,
    Ev = xv.hasOwnProperty;

function Nv(e, t) {
    var r = Cv(e),
        n = !r && Yv(e),
        a = !r && !n && Sv(e),
        s = !r && !n && !a && Iv(e),
        o = r || n || a || s,
        i = o ? Tv(e.length, String) : [],
        l = i.length;
    for (var c in e)(t || Ev.call(e, c)) && !(o && (c == "length" || a && (c == "offset" || c == "parent") || s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Av(c, l))) && i.push(c);
    return i
}
var Bs = Nv,
    Lv = Object.prototype;

function Rv(e) {
    var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || Lv;
    return e === r
}
var Kn = Rv;

function Fv(e, t) {
    return function(r) {
        return e(t(r))
    }
}
var zs = Fv,
    Hv = zs,
    Wv = Hv(Object.keys, Object),
    jv = Wv,
    Bv = Kn,
    zv = jv,
    Vv = Object.prototype,
    Uv = Vv.hasOwnProperty;

function Kv(e) {
    if (!Bv(e)) return zv(e);
    var t = [];
    for (var r in Object(e)) Uv.call(e, r) && r != "constructor" && t.push(r);
    return t
}
var Gv = Kv,
    qv = _t,
    Zv = Vn;

function Xv(e) {
    return e != null && Zv(e.length) && !qv(e)
}
var yr = Xv,
    Jv = Bs,
    Qv = Gv,
    eh = yr;

function th(e) {
    return eh(e) ? Jv(e) : Qv(e)
}
var Gn = th,
    rh = Ws,
    nh = Gn;

function ah(e, t) {
    return e && rh(e, t, nh)
}
var Vs = ah,
    sh = tn;

function oh() {
    this.__data__ = new sh, this.size = 0
}
var ih = oh;

function lh(e) {
    var t = this.__data__,
        r = t.delete(e);
    return this.size = t.size, r
}
var uh = lh;

function ch(e) {
    return this.__data__.get(e)
}
var fh = ch;

function dh(e) {
    return this.__data__.has(e)
}
var vh = dh,
    hh = tn,
    ph = Hn,
    mh = Wn,
    yh = 200;

function gh(e, t) {
    var r = this.__data__;
    if (r instanceof hh) {
        var n = r.__data__;
        if (!ph || n.length < yh - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new mh(n)
    }
    return r.set(e, t), this.size = r.size, this
}
var bh = gh,
    wh = tn,
    Dh = ih,
    $h = uh,
    _h = fh,
    Mh = vh,
    Oh = bh;

function zt(e) {
    var t = this.__data__ = new wh(e);
    this.size = t.size
}
zt.prototype.clear = Dh;
zt.prototype.delete = $h;
zt.prototype.get = _h;
zt.prototype.has = Mh;
zt.prototype.set = Oh;
var qn = zt,
    kh = "__lodash_hash_undefined__";

function Ph(e) {
    return this.__data__.set(e, kh), this
}
var Th = Ph;

function Yh(e) {
    return this.__data__.has(e)
}
var Ch = Yh,
    Sh = Wn,
    Ah = Th,
    Ih = Ch;

function Ar(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.__data__ = new Sh; ++t < r;) this.add(e[t])
}
Ar.prototype.add = Ar.prototype.push = Ah;
Ar.prototype.has = Ih;
var xh = Ar;

function Eh(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
    return !1
}
var Us = Eh;

function Nh(e, t) {
    return e.has(t)
}
var Lh = Nh,
    Rh = xh,
    Fh = Us,
    Hh = Lh,
    Wh = 1,
    jh = 2;

function Bh(e, t, r, n, a, s) {
    var o = r & Wh,
        i = e.length,
        l = t.length;
    if (i != l && !(o && l > i)) return !1;
    var c = s.get(e),
        u = s.get(t);
    if (c && u) return c == t && u == e;
    var v = -1,
        h = !0,
        f = r & jh ? new Rh : void 0;
    for (s.set(e, t), s.set(t, e); ++v < i;) {
        var g = e[v],
            p = t[v];
        if (n) var y = o ? n(p, g, v, t, e, s) : n(g, p, v, e, t, s);
        if (y !== void 0) {
            if (y) continue;
            h = !1;
            break
        }
        if (f) {
            if (!Fh(t, function(m, T) {
                    if (!Hh(f, T) && (g === m || a(g, m, r, n, s))) return f.push(T)
                })) {
                h = !1;
                break
            }
        } else if (!(g === p || a(g, p, r, n, s))) {
            h = !1;
            break
        }
    }
    return s.delete(e), s.delete(t), h
}
var Ks = Bh,
    zh = Ke,
    Vh = zh.Uint8Array,
    Gs = Vh;

function Uh(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n, a) {
        r[++t] = [a, n]
    }), r
}
var Kh = Uh;

function Gh(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n) {
        r[++t] = n
    }), r
}
var qh = Gh,
    Aa = Jr,
    Ia = Gs,
    Zh = Wt,
    Xh = Ks,
    Jh = Kh,
    Qh = qh,
    ep = 1,
    tp = 2,
    rp = "[object Boolean]",
    np = "[object Date]",
    ap = "[object Error]",
    sp = "[object Map]",
    op = "[object Number]",
    ip = "[object RegExp]",
    lp = "[object Set]",
    up = "[object String]",
    cp = "[object Symbol]",
    fp = "[object ArrayBuffer]",
    dp = "[object DataView]",
    xa = Aa ? Aa.prototype : void 0,
    vn = xa ? xa.valueOf : void 0;

function vp(e, t, r, n, a, s, o) {
    switch (r) {
        case dp:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case fp:
            return !(e.byteLength != t.byteLength || !s(new Ia(e), new Ia(t)));
        case rp:
        case np:
        case op:
            return Zh(+e, +t);
        case ap:
            return e.name == t.name && e.message == t.message;
        case ip:
        case up:
            return e == t + "";
        case sp:
            var i = Jh;
        case lp:
            var l = n & ep;
            if (i || (i = Qh), e.size != t.size && !l) return !1;
            var c = o.get(e);
            if (c) return c == t;
            n |= tp, o.set(e, t);
            var u = Xh(i(e), i(t), n, a, s, o);
            return o.delete(e), u;
        case cp:
            if (vn) return vn.call(e) == vn.call(t)
    }
    return !1
}
var hp = vp;

function pp(e, t) {
    for (var r = -1, n = t.length, a = e.length; ++r < n;) e[a + r] = t[r];
    return e
}
var mp = pp,
    yp = mp,
    gp = Le;

function bp(e, t, r) {
    var n = t(e);
    return gp(e) ? n : yp(n, r(e))
}
var wp = bp;

function Dp(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = 0, s = []; ++r < n;) {
        var o = e[r];
        t(o, r, e) && (s[a++] = o)
    }
    return s
}
var $p = Dp;

function _p() {
    return []
}
var Mp = _p,
    Op = $p,
    kp = Mp,
    Pp = Object.prototype,
    Tp = Pp.propertyIsEnumerable,
    Ea = Object.getOwnPropertySymbols,
    Yp = Ea ? function(e) {
        return e == null ? [] : (e = Object(e), Op(Ea(e), function(t) {
            return Tp.call(e, t)
        }))
    } : kp,
    Cp = Yp,
    Sp = wp,
    Ap = Cp,
    Ip = Gn;

function xp(e) {
    return Sp(e, Ip, Ap)
}
var Ep = xp,
    Na = Ep,
    Np = 1,
    Lp = Object.prototype,
    Rp = Lp.hasOwnProperty;

function Fp(e, t, r, n, a, s) {
    var o = r & Np,
        i = Na(e),
        l = i.length,
        c = Na(t),
        u = c.length;
    if (l != u && !o) return !1;
    for (var v = l; v--;) {
        var h = i[v];
        if (!(o ? h in t : Rp.call(t, h))) return !1
    }
    var f = s.get(e),
        g = s.get(t);
    if (f && g) return f == t && g == e;
    var p = !0;
    s.set(e, t), s.set(t, e);
    for (var y = o; ++v < l;) {
        h = i[v];
        var m = e[h],
            T = t[h];
        if (n) var x = o ? n(T, m, h, t, e, s) : n(m, T, h, e, t, s);
        if (!(x === void 0 ? m === T || a(m, T, r, n, s) : x)) {
            p = !1;
            break
        }
        y || (y = h == "constructor")
    }
    if (p && !y) {
        var _ = e.constructor,
            A = t.constructor;
        _ != A && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof A == "function" && A instanceof A) && (p = !1)
    }
    return s.delete(e), s.delete(t), p
}
var Hp = Fp,
    Wp = Mt,
    jp = Ke,
    Bp = Wp(jp, "DataView"),
    zp = Bp,
    Vp = Mt,
    Up = Ke,
    Kp = Vp(Up, "Promise"),
    Gp = Kp,
    qp = Mt,
    Zp = Ke,
    Xp = qp(Zp, "Set"),
    Jp = Xp,
    Qp = Mt,
    em = Ke,
    tm = Qp(em, "WeakMap"),
    rm = tm,
    gn = zp,
    bn = Hn,
    wn = Gp,
    Dn = Jp,
    $n = rm,
    qs = Ge,
    Vt = Es,
    La = "[object Map]",
    nm = "[object Object]",
    Ra = "[object Promise]",
    Fa = "[object Set]",
    Ha = "[object WeakMap]",
    Wa = "[object DataView]",
    am = Vt(gn),
    sm = Vt(bn),
    om = Vt(wn),
    im = Vt(Dn),
    lm = Vt($n),
    mt = qs;
(gn && mt(new gn(new ArrayBuffer(1))) != Wa || bn && mt(new bn) != La || wn && mt(wn.resolve()) != Ra || Dn && mt(new Dn) != Fa || $n && mt(new $n) != Ha) && (mt = function(e) {
    var t = qs(e),
        r = t == nm ? e.constructor : void 0,
        n = r ? Vt(r) : "";
    if (n) switch (n) {
        case am:
            return Wa;
        case sm:
            return La;
        case om:
            return Ra;
        case im:
            return Fa;
        case lm:
            return Ha
    }
    return t
});
var um = mt,
    hn = qn,
    cm = Ks,
    fm = hp,
    dm = Hp,
    ja = um,
    Ba = Le,
    za = Ft,
    vm = Un,
    hm = 1,
    Va = "[object Arguments]",
    Ua = "[object Array]",
    Mr = "[object Object]",
    pm = Object.prototype,
    Ka = pm.hasOwnProperty;

function mm(e, t, r, n, a, s) {
    var o = Ba(e),
        i = Ba(t),
        l = o ? Ua : ja(e),
        c = i ? Ua : ja(t);
    l = l == Va ? Mr : l, c = c == Va ? Mr : c;
    var u = l == Mr,
        v = c == Mr,
        h = l == c;
    if (h && za(e)) {
        if (!za(t)) return !1;
        o = !0, u = !1
    }
    if (h && !u) return s || (s = new hn), o || vm(e) ? cm(e, t, r, n, a, s) : fm(e, t, l, r, n, a, s);
    if (!(r & hm)) {
        var f = u && Ka.call(e, "__wrapped__"),
            g = v && Ka.call(t, "__wrapped__");
        if (f || g) {
            var p = f ? e.value() : e,
                y = g ? t.value() : t;
            return s || (s = new hn), a(p, y, r, n, s)
        }
    }
    return h ? (s || (s = new hn), dm(e, t, r, n, a, s)) : !1
}
var ym = mm,
    gm = ym,
    Ga = Re;

function Zs(e, t, r, n, a) {
    return e === t ? !0 : e == null || t == null || !Ga(e) && !Ga(t) ? e !== e && t !== t : gm(e, t, r, n, Zs, a)
}
var Xs = Zs,
    bm = qn,
    wm = Xs,
    Dm = 1,
    $m = 2;

function _m(e, t, r, n) {
    var a = r.length,
        s = a,
        o = !n;
    if (e == null) return !s;
    for (e = Object(e); a--;) {
        var i = r[a];
        if (o && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1
    }
    for (; ++a < s;) {
        i = r[a];
        var l = i[0],
            c = e[l],
            u = i[1];
        if (o && i[2]) {
            if (c === void 0 && !(l in e)) return !1
        } else {
            var v = new bm;
            if (n) var h = n(c, u, l, e, t, v);
            if (!(h === void 0 ? wm(u, c, Dm | $m, n, v) : h)) return !1
        }
    }
    return !0
}
var Mm = _m,
    Om = tt;

function km(e) {
    return e === e && !Om(e)
}
var Js = km,
    Pm = Js,
    Tm = Gn;

function Ym(e) {
    for (var t = Tm(e), r = t.length; r--;) {
        var n = t[r],
            a = e[n];
        t[r] = [n, a, Pm(a)]
    }
    return t
}
var Cm = Ym;

function Sm(e, t) {
    return function(r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
    }
}
var Qs = Sm,
    Am = Mm,
    Im = Cm,
    xm = Qs;

function Em(e) {
    var t = Im(e);
    return t.length == 1 && t[0][2] ? xm(t[0][0], t[0][1]) : function(r) {
        return r === e || Am(r, e, t)
    }
}
var Nm = Em;

function Lm(e, t) {
    return e != null && t in Object(e)
}
var Rm = Lm,
    Fm = Rs,
    Hm = zn,
    Wm = Le,
    jm = Bn,
    Bm = Vn,
    zm = nn;

function Vm(e, t, r) {
    t = Fm(t, e);
    for (var n = -1, a = t.length, s = !1; ++n < a;) {
        var o = zm(t[n]);
        if (!(s = e != null && r(e, o))) break;
        e = e[o]
    }
    return s || ++n != a ? s : (a = e == null ? 0 : e.length, !!a && Bm(a) && jm(o, a) && (Wm(e) || Hm(e)))
}
var eo = Vm,
    Um = Rm,
    Km = eo;

function Gm(e, t) {
    return e != null && Km(e, t, Um)
}
var qm = Gm,
    Zm = Xs,
    Xm = gt,
    Jm = qm,
    Qm = Fn,
    ey = Js,
    ty = Qs,
    ry = nn,
    ny = 1,
    ay = 2;

function sy(e, t) {
    return Qm(e) && ey(t) ? ty(ry(e), t) : function(r) {
        var n = Xm(r, e);
        return n === void 0 && n === t ? Jm(r, e) : Zm(t, n, ny | ay)
    }
}
var oy = sy;

function iy(e) {
    return e
}
var Zn = iy;

function ly(e) {
    return function(t) {
        return t ? .[e]
    }
}
var uy = ly,
    cy = Fs;

function fy(e) {
    return function(t) {
        return cy(t, e)
    }
}
var dy = fy,
    vy = uy,
    hy = dy,
    py = Fn,
    my = nn;

function yy(e) {
    return py(e) ? vy(my(e)) : hy(e)
}
var gy = yy,
    by = Nm,
    wy = oy,
    Dy = Zn,
    $y = Le,
    _y = gy;

function My(e) {
    return typeof e == "function" ? e : e == null ? Dy : typeof e == "object" ? $y(e) ? wy(e[0], e[1]) : by(e) : _y(e)
}
var to = My,
    Oy = an,
    ky = Vs,
    Py = to;

function Ty(e, t) {
    var r = {};
    return t = Py(t), ky(e, function(n, a, s) {
        Oy(r, a, t(n, a, s))
    }), r
}
var Yy = Ty;

function Cy(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var ro = Cy,
    Sy = ro,
    qa = Math.max;

function Ay(e, t, r) {
    return t = qa(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var n = arguments, a = -1, s = qa(n.length - t, 0), o = Array(s); ++a < s;) o[a] = n[t + a];
            a = -1;
            for (var i = Array(t + 1); ++a < t;) i[a] = n[a];
            return i[t] = r(o), Sy(e, this, i)
        }
}
var Iy = Ay;

function xy(e) {
    return function() {
        return e
    }
}
var Ey = xy,
    Ny = Ey,
    Za = Hs,
    Ly = Zn,
    Ry = Za ? function(e, t) {
        return Za(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ny(t),
            writable: !0
        })
    } : Ly,
    Fy = Ry,
    Hy = 800,
    Wy = 16,
    jy = Date.now;

function By(e) {
    var t = 0,
        r = 0;
    return function() {
        var n = jy(),
            a = Wy - (n - r);
        if (r = n, a > 0) {
            if (++t >= Hy) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}
var zy = By,
    Vy = Fy,
    Uy = zy,
    Ky = Uy(Vy),
    Gy = Ky,
    qy = Zn,
    Zy = Iy,
    Xy = Gy;

function Jy(e, t) {
    return Xy(Zy(e, t, qy), e + "")
}
var Xn = Jy,
    Qy = Wt,
    eg = yr,
    tg = Bn,
    rg = tt;

function ng(e, t, r) {
    if (!rg(r)) return !1;
    var n = typeof t;
    return (n == "number" ? eg(r) && tg(t, r.length) : n == "string" && t in r) ? Qy(r[t], e) : !1
}
var Jn = ng;

function ag(e) {
    var t = [];
    if (e != null)
        for (var r in Object(e)) t.push(r);
    return t
}
var sg = ag,
    og = tt,
    ig = Kn,
    lg = sg,
    ug = Object.prototype,
    cg = ug.hasOwnProperty;

function fg(e) {
    if (!og(e)) return lg(e);
    var t = ig(e),
        r = [];
    for (var n in e) n == "constructor" && (t || !cg.call(e, n)) || r.push(n);
    return r
}
var dg = fg,
    vg = Bs,
    hg = dg,
    pg = yr;

function mg(e) {
    return pg(e) ? vg(e, !0) : hg(e)
}
var Qn = mg,
    yg = Xn,
    gg = Wt,
    bg = Jn,
    wg = Qn,
    no = Object.prototype,
    Dg = no.hasOwnProperty,
    $g = yg(function(e, t) {
        e = Object(e);
        var r = -1,
            n = t.length,
            a = n > 2 ? t[2] : void 0;
        for (a && bg(t[0], t[1], a) && (n = 1); ++r < n;)
            for (var s = t[r], o = wg(s), i = -1, l = o.length; ++i < l;) {
                var c = o[i],
                    u = e[c];
                (u === void 0 || gg(u, no[c]) && !Dg.call(e, c)) && (e[c] = s[c])
            }
        return e
    }),
    Xa = $g,
    _g = an,
    Mg = Wt;

function Og(e, t, r) {
    (r !== void 0 && !Mg(e[t], r) || r === void 0 && !(t in e)) && _g(e, t, r)
}
var ao = Og,
    Ir = {},
    kg = {
        get exports() {
            return Ir
        },
        set exports(e) {
            Ir = e
        }
    };
(function(e, t) {
    var r = Ke,
        n = t && !t.nodeType && t,
        a = n && !0 && e && !e.nodeType && e,
        s = a && a.exports === n,
        o = s ? r.Buffer : void 0,
        i = o ? o.allocUnsafe : void 0;

    function l(c, u) {
        if (u) return c.slice();
        var v = c.length,
            h = i ? i(v) : new c.constructor(v);
        return c.copy(h), h
    }
    e.exports = l
})(kg, Ir);
var Ja = Gs;

function Pg(e) {
    var t = new e.constructor(e.byteLength);
    return new Ja(t).set(new Ja(e)), t
}
var Tg = Pg,
    Yg = Tg;

function Cg(e, t) {
    var r = t ? Yg(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length)
}
var Sg = Cg;

function Ag(e, t) {
    var r = -1,
        n = e.length;
    for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
    return t
}
var Ig = Ag,
    xg = tt,
    Qa = Object.create,
    Eg = function() {
        function e() {}
        return function(t) {
            if (!xg(t)) return {};
            if (Qa) return Qa(t);
            e.prototype = t;
            var r = new e;
            return e.prototype = void 0, r
        }
    }(),
    Ng = Eg,
    Lg = zs,
    Rg = Lg(Object.getPrototypeOf, Object),
    so = Rg,
    Fg = Ng,
    Hg = so,
    Wg = Kn;

function jg(e) {
    return typeof e.constructor == "function" && !Wg(e) ? Fg(Hg(e)) : {}
}
var Bg = jg,
    zg = yr,
    Vg = Re;

function Ug(e) {
    return Vg(e) && zg(e)
}
var Kg = Ug,
    Gg = Ge,
    qg = so,
    Zg = Re,
    Xg = "[object Object]",
    Jg = Function.prototype,
    Qg = Object.prototype,
    oo = Jg.toString,
    eb = Qg.hasOwnProperty,
    tb = oo.call(Object);

function rb(e) {
    if (!Zg(e) || Gg(e) != Xg) return !1;
    var t = qg(e);
    if (t === null) return !0;
    var r = eb.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && oo.call(r) == tb
}
var nb = rb;

function ab(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t]
}
var io = ab,
    sb = kd,
    ob = an;

function ib(e, t, r, n) {
    var a = !r;
    r || (r = {});
    for (var s = -1, o = t.length; ++s < o;) {
        var i = t[s],
            l = n ? n(r[i], e[i], i, r, e) : void 0;
        l === void 0 && (l = e[i]), a ? ob(r, i, l) : sb(r, i, l)
    }
    return r
}
var lb = ib,
    ub = lb,
    cb = Qn;

function fb(e) {
    return ub(e, cb(e))
}
var db = fb,
    es = ao,
    vb = Ir,
    hb = Sg,
    pb = Ig,
    mb = Bg,
    ts = zn,
    rs = Le,
    yb = Kg,
    gb = Ft,
    bb = _t,
    wb = tt,
    Db = nb,
    $b = Un,
    ns = io,
    _b = db;

function Mb(e, t, r, n, a, s, o) {
    var i = ns(e, r),
        l = ns(t, r),
        c = o.get(l);
    if (c) {
        es(e, r, c);
        return
    }
    var u = s ? s(i, l, r + "", e, t, o) : void 0,
        v = u === void 0;
    if (v) {
        var h = rs(l),
            f = !h && gb(l),
            g = !h && !f && $b(l);
        u = l, h || f || g ? rs(i) ? u = i : yb(i) ? u = pb(i) : f ? (v = !1, u = vb(l, !0)) : g ? (v = !1, u = hb(l, !0)) : u = [] : Db(l) || ts(l) ? (u = i, ts(i) ? u = _b(i) : (!wb(i) || bb(i)) && (u = mb(l))) : v = !1
    }
    v && (o.set(l, u), a(u, l, n, s, o), o.delete(l)), es(e, r, u)
}
var Ob = Mb,
    kb = qn,
    Pb = ao,
    Tb = Ws,
    Yb = Ob,
    Cb = tt,
    Sb = Qn,
    Ab = io;

function lo(e, t, r, n, a) {
    e !== t && Tb(t, function(s, o) {
        if (a || (a = new kb), Cb(s)) Yb(e, t, o, r, lo, n, a);
        else {
            var i = n ? n(Ab(e, o), s, o + "", e, t, a) : void 0;
            i === void 0 && (i = s), Pb(e, o, i)
        }
    }, Sb)
}
var uo = lo,
    Ib = uo,
    as = tt;

function co(e, t, r, n, a, s) {
    return as(e) && as(t) && (s.set(t, e), Ib(e, t, void 0, co, s), s.delete(t)), e
}
var xb = co,
    Eb = Xn,
    Nb = Jn;

function Lb(e) {
    return Eb(function(t, r) {
        var n = -1,
            a = r.length,
            s = a > 1 ? r[a - 1] : void 0,
            o = a > 2 ? r[2] : void 0;
        for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && Nb(r[0], r[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++n < a;) {
            var i = r[n];
            i && e(t, i, n, s)
        }
        return t
    })
}
var Rb = Lb,
    Fb = uo,
    Hb = Rb,
    Wb = Hb(function(e, t, r, n) {
        Fb(e, t, r, n)
    }),
    jb = Wb,
    Bb = ro,
    zb = Xn,
    Vb = xb,
    Ub = jb,
    Kb = zb(function(e) {
        return e.push(void 0, Vb), Bb(Ub, void 0, e)
    }),
    vr = Kb,
    Gb = Object.prototype,
    qb = Gb.hasOwnProperty;

function Zb(e, t) {
    return e != null && qb.call(e, t)
}
var Xb = Zb,
    Jb = Xb,
    Qb = eo;

function ew(e, t) {
    return e != null && Qb(e, t, Jb)
}
var fo = ew,
    tw = yr;

function rw(e, t) {
    return function(r, n) {
        if (r == null) return r;
        if (!tw(r)) return e(r, n);
        for (var a = r.length, s = t ? a : -1, o = Object(r);
            (t ? s-- : ++s < a) && n(o[s], s, o) !== !1;);
        return r
    }
}
var nw = rw,
    aw = Vs,
    sw = nw,
    ow = sw(aw),
    iw = ow;

function lw(e) {
    return e && e.length ? e[0] : void 0
}
var vo = lw;

function uw(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var Ct = uw,
    cw = iw;

function fw(e, t) {
    var r;
    return cw(e, function(n, a, s) {
        return r = t(n, a, s), !r
    }), !!r
}
var dw = fw,
    vw = Us,
    hw = to,
    pw = dw,
    mw = Le,
    yw = Jn;

function gw(e, t, r) {
    var n = mw(e) ? vw : pw;
    return r && yw(e, t, r) && (t = void 0), n(e, hw(t))
}
var bw = gw;
const ww = e => Object.prototype.toString.call(e).slice(8, -1),
    St = e => Cu(e) && !isNaN(e.getTime()),
    Je = e => ww(e) === "Object",
    ea = fo,
    ss = (e, t) => bw(t, r => fo(e, r)),
    Q = (e, t, r = "0") => {
        for (e = e != null ? String(e) : "", t = t || 2; e.length < t;) e = `${r}${e}`;
        return e
    },
    Ye = e => Array.isArray(e),
    Ze = e => Ye(e) && e.length > 0,
    xr = e => e == null ? e ? ? null : document && We(e) ? document.querySelector(e) : e.$el ? ? e,
    it = (e, t, r, n = void 0) => {
        e.removeEventListener(t, r, n)
    },
    lt = (e, t, r, n = void 0) => (e.addEventListener(t, r, n), () => it(e, t, r, n)),
    Pr = (e, t) => !!e && !!t && (e === t || e.contains(t)),
    Or = (e, t) => {
        (e.key === " " || e.key === "Enter") && (t(e), e.preventDefault())
    },
    ho = (e, ...t) => {
        const r = {};
        let n;
        for (n in e) t.includes(n) || (r[n] = e[n]);
        return r
    },
    po = (e, t) => {
        const r = {};
        return t.forEach(n => {
            n in e && (r[n] = e[n])
        }), r
    };

function Dw(e, t, r) {
    return Math.min(Math.max(e, t), r)
}
const Er = () => {
        function e() {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
        }
        return `${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`
    },
    $w = ["base", "start", "end", "startEnd"],
    _w = ["class", "wrapperClass", "contentClass", "style", "contentStyle", "color", "fillMode"],
    Mw = {
        base: {},
        start: {},
        end: {}
    };

function ta(e, t, r = Mw) {
    let n = e,
        a = {};
    t === !0 || We(t) ? (n = We(t) ? t : n, a = { ...r
    }) : Je(t) && (ss(t, $w) ? a = { ...t
    } : a = {
        base: { ...t
        },
        start: { ...t
        },
        end: { ...t
        }
    });
    const s = vr(a, {
        start: a.startEnd,
        end: a.startEnd
    }, r);
    return Object.entries(s).forEach(([o, i]) => {
        let l = n;
        i === !0 || We(i) ? (l = We(i) ? i : l, s[o] = {
            color: l
        }) : Je(i) && (ss(i, _w) ? s[o] = { ...i
        } : s[o] = {}), vr(s[o], {
            color: l
        })
    }), s
}
class Ow {
    constructor() {
        R(this, "type", "highlight")
    }
    normalizeConfig(t, r) {
        return ta(t, r, {
            base: {
                fillMode: "light"
            },
            start: {
                fillMode: "solid"
            },
            end: {
                fillMode: "solid"
            }
        })
    }
    prepareRender(t) {
        t.highlights = [], t.content || (t.content = [])
    }
    render({
        data: t,
        onStart: r,
        onEnd: n
    }, a) {
        const {
            key: s,
            highlight: o
        } = t;
        if (!o) return;
        const {
            highlights: i
        } = a, {
            base: l,
            start: c,
            end: u
        } = o;
        r && n ? i.push({ ...c,
            key: s,
            wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
            class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
            contentClass: [`vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`, c.contentClass]
        }) : r ? (i.push({ ...l,
            key: `${s}-base`,
            wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${l.color}`,
            class: [`vc-highlight vc-highlight-base-start vc-highlight-bg-${l.fillMode}`, l.class]
        }), i.push({ ...c,
            key: s,
            wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${c.color}`,
            class: [`vc-highlight vc-highlight-bg-${c.fillMode}`, c.class],
            contentClass: [`vc-attr vc-highlight-content-${c.fillMode} vc-${c.color}`, c.contentClass]
        })) : n ? (i.push({ ...l,
            key: `${s}-base`,
            wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${l.color}`,
            class: [`vc-highlight vc-highlight-base-end vc-highlight-bg-${l.fillMode}`, l.class]
        }), i.push({ ...u,
            key: s,
            wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${u.color}`,
            class: [`vc-highlight vc-highlight-bg-${u.fillMode}`, u.class],
            contentClass: [`vc-attr vc-highlight-content-${u.fillMode} vc-${u.color}`, u.contentClass]
        })) : i.push({ ...l,
            key: `${s}-middle`,
            wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${l.color}`,
            class: [`vc-highlight vc-highlight-base-middle vc-highlight-bg-${l.fillMode}`, l.class],
            contentClass: [`vc-attr vc-highlight-content-${l.fillMode} vc-${l.color}`, l.contentClass]
        })
    }
}
class ra {
    constructor(t, r) {
        R(this, "type", ""), R(this, "collectionType", ""), this.type = t, this.collectionType = r
    }
    normalizeConfig(t, r) {
        return ta(t, r)
    }
    prepareRender(t) {
        t[this.collectionType] = []
    }
    render({
        data: t,
        onStart: r,
        onEnd: n
    }, a) {
        const {
            key: s
        } = t, o = t[this.type];
        if (!s || !o) return;
        const i = a[this.collectionType],
            {
                base: l,
                start: c,
                end: u
            } = o;
        r ? i.push({ ...c,
            key: s,
            class: [`vc-${this.type} vc-${this.type}-start vc-${c.color} vc-attr`, c.class]
        }) : n ? i.push({ ...u,
            key: s,
            class: [`vc-${this.type} vc-${this.type}-end vc-${u.color} vc-attr`, u.class]
        }) : i.push({ ...l,
            key: s,
            class: [`vc-${this.type} vc-${this.type}-base vc-${l.color} vc-attr`, l.class]
        })
    }
}
class kw extends ra {
    constructor() {
        super("content", "content")
    }
    normalizeConfig(t, r) {
        return ta("base", r)
    }
}
class Pw extends ra {
    constructor() {
        super("dot", "dots")
    }
}
class Tw extends ra {
    constructor() {
        super("bar", "bars")
    }
}
class Yw {
    constructor(t) {
        R(this, "color"), R(this, "renderers", [new kw, new Ow, new Pw, new Tw]), this.color = t
    }
    normalizeGlyphs(t) {
        this.renderers.forEach(r => {
            const n = r.type;
            t[n] != null && (t[n] = r.normalizeConfig(this.color, t[n]))
        })
    }
    prepareRender(t = {}) {
        return this.renderers.forEach(r => {
            r.prepareRender(t)
        }), t
    }
    render(t, r) {
        this.renderers.forEach(n => {
            n.render(t, r)
        })
    }
}
const Cw = 300,
    Sw = 60,
    Aw = 80,
    Iw = {
        maxSwipeTime: Cw,
        minHorizontalSwipeDistance: Sw,
        maxVerticalSwipeDistance: Aw
    },
    xw = "MMMM YYYY",
    Ew = "W",
    Nw = "MMM",
    Lw = "h A",
    Rw = ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
    Fw = ["L h:mm A", "YYYY-MM-DD h:mm A", "YYYY/MM/DD h:mm A"],
    Hw = ["L HH:mm", "YYYY-MM-DD HH:mm", "YYYY/MM/DD HH:mm"],
    Ww = ["h:mm A"],
    jw = ["HH:mm"],
    Bw = "WWW, MMM D, YYYY",
    zw = ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
    Vw = "iso",
    Uw = "YYYY-MM-DDTHH:mm:ss.SSSZ",
    Kw = {
        title: xw,
        weekdays: Ew,
        navMonths: Nw,
        hours: Lw,
        input: Rw,
        inputDateTime: Fw,
        inputDateTime24hr: Hw,
        inputTime: Ww,
        inputTime24hr: jw,
        dayPopover: Bw,
        data: zw,
        model: Vw,
        iso: Uw
    },
    Qe = {
        ar: {
            dow: 7,
            L: "D/‏M/‏YYYY"
        },
        bg: {
            dow: 2,
            L: "D.MM.YYYY"
        },
        ca: {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "zh-CN": {
            dow: 2,
            L: "YYYY/MM/DD"
        },
        "zh-TW": {
            dow: 1,
            L: "YYYY/MM/DD"
        },
        hr: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        cs: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        da: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        nl: {
            dow: 2,
            L: "DD-MM-YYYY"
        },
        "en-US": {
            dow: 1,
            L: "MM/DD/YYYY"
        },
        "en-AU": {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "en-CA": {
            dow: 1,
            L: "YYYY-MM-DD"
        },
        "en-GB": {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "en-IE": {
            dow: 2,
            L: "DD-MM-YYYY"
        },
        "en-NZ": {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "en-ZA": {
            dow: 1,
            L: "YYYY/MM/DD"
        },
        eo: {
            dow: 2,
            L: "YYYY-MM-DD"
        },
        et: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        fi: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        fr: {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "fr-CA": {
            dow: 1,
            L: "YYYY-MM-DD"
        },
        "fr-CH": {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        de: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        he: {
            dow: 1,
            L: "DD.MM.YYYY"
        },
        id: {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        it: {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        ja: {
            dow: 1,
            L: "YYYY年M月D日"
        },
        ko: {
            dow: 1,
            L: "YYYY.MM.DD"
        },
        lv: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        lt: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        mk: {
            dow: 2,
            L: "D.MM.YYYY"
        },
        nb: {
            dow: 2,
            L: "D. MMMM YYYY"
        },
        nn: {
            dow: 2,
            L: "D. MMMM YYYY"
        },
        pl: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        pt: {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        ro: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        ru: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        sk: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        "es-ES": {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        "es-MX": {
            dow: 2,
            L: "DD/MM/YYYY"
        },
        sv: {
            dow: 2,
            L: "YYYY-MM-DD"
        },
        th: {
            dow: 1,
            L: "DD/MM/YYYY"
        },
        tr: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        uk: {
            dow: 2,
            L: "DD.MM.YYYY"
        },
        vi: {
            dow: 2,
            L: "DD/MM/YYYY"
        }
    };
Qe.en = Qe["en-US"];
Qe.es = Qe["es-ES"];
Qe.no = Qe.nb;
Qe.zh = Qe["zh-CN"];
const Gw = Object.entries(Qe).reduce((e, [t, {
        dow: r,
        L: n
    }]) => (e[t] = {
        id: t,
        firstDayOfWeek: r,
        masks: {
            L: n
        }
    }, e), {}),
    qw = {
        componentPrefix: "V",
        color: "blue",
        isDark: !1,
        navVisibility: "click",
        titlePosition: "center",
        transition: "slide-h",
        touch: Iw,
        masks: Kw,
        locales: Gw,
        datePicker: {
            updateOnInput: !0,
            inputDebounce: 1e3,
            popover: {
                visibility: "hover-focus",
                placement: "bottom-start",
                isInteractive: !0
            }
        }
    },
    _n = Pn(qw),
    Zw = b(() => Yy(_n.locales, e => (e.masks = vr(e.masks, _n.masks), e))),
    ut = e => typeof window < "u" && ea(window.__vcalendar__, e) ? gt(window.__vcalendar__, e) : gt(_n, e);
var Nr = {},
    Xw = {
        get exports() {
            return Nr
        },
        set exports(e) {
            Nr = e
        }
    },
    Lr = {},
    Jw = {
        get exports() {
            return Lr
        },
        set exports(e) {
            Lr = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;

    function r(n) {
        if (n === null || n === !0 || n === !1) return NaN;
        var a = Number(n);
        return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a)
    }
    e.exports = t.default
})(Jw, Lr);
var Rr = {},
    Qw = {
        get exports() {
            return Rr
        },
        set exports(e) {
            Rr = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;

    function r(n) {
        var a = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
        return a.setUTCFullYear(n.getFullYear()), n.getTime() - a.getTime()
    }
    e.exports = t.default
})(Qw, Rr);
var Fr = {},
    e1 = {
        get exports() {
            return Fr
        },
        set exports(e) {
            Fr = e
        }
    },
    Hr = {},
    t1 = {
        get exports() {
            return Hr
        },
        set exports(e) {
            Hr = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;

    function r(l, c) {
        var u = i(c);
        return u.formatToParts ? a(u, l) : s(u, l)
    }
    var n = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
    };

    function a(l, c) {
        try {
            for (var u = l.formatToParts(c), v = [], h = 0; h < u.length; h++) {
                var f = n[u[h].type];
                f >= 0 && (v[f] = parseInt(u[h].value, 10))
            }
            return v
        } catch (g) {
            if (g instanceof RangeError) return [NaN];
            throw g
        }
    }

    function s(l, c) {
        var u = l.format(c).replace(/\u200E/g, ""),
            v = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(u);
        return [v[3], v[1], v[2], v[4], v[5], v[6]]
    }
    var o = {};

    function i(l) {
        if (!o[l]) {
            var c = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: "America/New_York",
                    year: "numeric",
                    month: "numeric",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }).format(new Date("2014-06-25T04:00:00.123Z")),
                u = c === "06/25/2014, 00:00:00" || c === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
            o[l] = u ? new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: l,
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }) : new Intl.DateTimeFormat("en-US", {
                hourCycle: "h23",
                timeZone: l,
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            })
        }
        return o[l]
    }
    e.exports = t.default
})(t1, Hr);
var Wr = {},
    r1 = {
        get exports() {
            return Wr
        },
        set exports(e) {
            Wr = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;

    function r(n, a, s, o, i, l, c) {
        var u = new Date(0);
        return u.setUTCFullYear(n, a, s), u.setUTCHours(o, i, l, c), u
    }
    e.exports = t.default
})(r1, Wr);
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = l;
    var r = a(Hr),
        n = a(Wr);

    function a(p) {
        return p && p.__esModule ? p : {
            default: p
        }
    }
    var s = 36e5,
        o = 6e4,
        i = {
            timezone: /([Z+-].*)$/,
            timezoneZ: /^(Z)$/,
            timezoneHH: /^([+-]\d{2})$/,
            timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
        };

    function l(p, y, m) {
        var T, x;
        if (!p || (T = i.timezoneZ.exec(p), T)) return 0;
        var _;
        if (T = i.timezoneHH.exec(p), T) return _ = parseInt(T[1], 10), h(_) ? -(_ * s) : NaN;
        if (T = i.timezoneHHMM.exec(p), T) {
            _ = parseInt(T[1], 10);
            var A = parseInt(T[2], 10);
            return h(_, A) ? (x = Math.abs(_) * s + A * o, _ > 0 ? -x : x) : NaN
        }
        if (g(p)) {
            y = new Date(y || Date.now());
            var E = m ? y : c(y),
                I = u(E, p),
                D = m ? I : v(y, I, p);
            return -D
        }
        return NaN
    }

    function c(p) {
        return (0, n.default)(p.getFullYear(), p.getMonth(), p.getDate(), p.getHours(), p.getMinutes(), p.getSeconds(), p.getMilliseconds())
    }

    function u(p, y) {
        var m = (0, r.default)(p, y),
            T = (0, n.default)(m[0], m[1] - 1, m[2], m[3] % 24, m[4], m[5], 0).getTime(),
            x = p.getTime(),
            _ = x % 1e3;
        return x -= _ >= 0 ? _ : 1e3 + _, T - x
    }

    function v(p, y, m) {
        var T = p.getTime(),
            x = T - y,
            _ = u(new Date(x), m);
        if (y === _) return y;
        x -= _ - y;
        var A = u(new Date(x), m);
        return _ === A ? _ : Math.max(_, A)
    }

    function h(p, y) {
        return -23 <= p && p <= 23 && (y == null || 0 <= y && y <= 59)
    }
    var f = {};

    function g(p) {
        if (f[p]) return !0;
        try {
            return new Intl.DateTimeFormat(void 0, {
                timeZone: p
            }), f[p] = !0, !0
        } catch {
            return !1
        }
    }
    e.exports = t.default
})(e1, Fr);
var jr = {},
    n1 = {
        get exports() {
            return jr
        },
        set exports(e) {
            jr = e
        }
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
        n = r;
    t.default = n, e.exports = t.default
})(n1, jr);
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = v;
    var r = o(Lr),
        n = o(Rr),
        a = o(Fr),
        s = o(jr);

    function o(D) {
        return D && D.__esModule ? D : {
            default: D
        }
    }
    var i = 36e5,
        l = 6e4,
        c = 2,
        u = {
            dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
            datePattern: /^([0-9W+-]+)(.*)/,
            plainTime: /:/,
            YY: /^(\d{2})$/,
            YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            YYYY: /^(\d{4})/,
            YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            MM: /^-(\d{2})$/,
            DDD: /^-?(\d{3})$/,
            MMDD: /^-?(\d{2})-?(\d{2})$/,
            Www: /^-?W(\d{2})$/,
            WwwD: /^-?W(\d{2})-?(\d{1})$/,
            HH: /^(\d{2}([.,]\d*)?)$/,
            HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            timeZone: s.default
        };

    function v(D, $) {
        if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
        if (D === null) return new Date(NaN);
        var w = $ || {},
            C = w.additionalDigits == null ? c : (0, r.default)(w.additionalDigits);
        if (C !== 2 && C !== 1 && C !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
        if (D instanceof Date || typeof D == "object" && Object.prototype.toString.call(D) === "[object Date]") return new Date(D.getTime());
        if (typeof D == "number" || Object.prototype.toString.call(D) === "[object Number]") return new Date(D);
        if (!(typeof D == "string" || Object.prototype.toString.call(D) === "[object String]")) return new Date(NaN);
        var k = h(D),
            N = f(k.date, C),
            z = N.year,
            L = N.restDateString,
            V = g(L, z);
        if (isNaN(V)) return new Date(NaN);
        if (V) {
            var Z = V.getTime(),
                te = 0,
                q;
            if (k.time && (te = p(k.time), isNaN(te))) return new Date(NaN);
            if (k.timeZone || w.timeZone) {
                if (q = (0, a.default)(k.timeZone || w.timeZone, new Date(Z + te)), isNaN(q)) return new Date(NaN)
            } else q = (0, n.default)(new Date(Z + te)), q = (0, n.default)(new Date(Z + te + q));
            return new Date(Z + te + q)
        } else return new Date(NaN)
    }

    function h(D) {
        var $ = {},
            w = u.dateTimePattern.exec(D),
            C;
        if (w ? ($.date = w[1], C = w[3]) : (w = u.datePattern.exec(D), w ? ($.date = w[1], C = w[2]) : ($.date = null, C = D)), C) {
            var k = u.timeZone.exec(C);
            k ? ($.time = C.replace(k[1], ""), $.timeZone = k[1].trim()) : $.time = C
        }
        return $
    }

    function f(D, $) {
        var w = u.YYY[$],
            C = u.YYYYY[$],
            k;
        if (k = u.YYYY.exec(D) || C.exec(D), k) {
            var N = k[1];
            return {
                year: parseInt(N, 10),
                restDateString: D.slice(N.length)
            }
        }
        if (k = u.YY.exec(D) || w.exec(D), k) {
            var z = k[1];
            return {
                year: parseInt(z, 10) * 100,
                restDateString: D.slice(z.length)
            }
        }
        return {
            year: null
        }
    }

    function g(D, $) {
        if ($ === null) return null;
        var w, C, k, N;
        if (D.length === 0) return C = new Date(0), C.setUTCFullYear($), C;
        if (w = u.MM.exec(D), w) return C = new Date(0), k = parseInt(w[1], 10) - 1, _($, k) ? (C.setUTCFullYear($, k), C) : new Date(NaN);
        if (w = u.DDD.exec(D), w) {
            C = new Date(0);
            var z = parseInt(w[1], 10);
            return A($, z) ? (C.setUTCFullYear($, 0, z), C) : new Date(NaN)
        }
        if (w = u.MMDD.exec(D), w) {
            C = new Date(0), k = parseInt(w[1], 10) - 1;
            var L = parseInt(w[2], 10);
            return _($, k, L) ? (C.setUTCFullYear($, k, L), C) : new Date(NaN)
        }
        if (w = u.Www.exec(D), w) return N = parseInt(w[1], 10) - 1, E($, N) ? y($, N) : new Date(NaN);
        if (w = u.WwwD.exec(D), w) {
            N = parseInt(w[1], 10) - 1;
            var V = parseInt(w[2], 10) - 1;
            return E($, N, V) ? y($, N, V) : new Date(NaN)
        }
        return null
    }

    function p(D) {
        var $, w, C;
        if ($ = u.HH.exec(D), $) return w = parseFloat($[1].replace(",", ".")), I(w) ? w % 24 * i : NaN;
        if ($ = u.HHMM.exec(D), $) return w = parseInt($[1], 10), C = parseFloat($[2].replace(",", ".")), I(w, C) ? w % 24 * i + C * l : NaN;
        if ($ = u.HHMMSS.exec(D), $) {
            w = parseInt($[1], 10), C = parseInt($[2], 10);
            var k = parseFloat($[3].replace(",", "."));
            return I(w, C, k) ? w % 24 * i + C * l + k * 1e3 : NaN
        }
        return null
    }

    function y(D, $, w) {
        $ = $ || 0, w = w || 0;
        var C = new Date(0);
        C.setUTCFullYear(D, 0, 4);
        var k = C.getUTCDay() || 7,
            N = $ * 7 + w + 1 - k;
        return C.setUTCDate(C.getUTCDate() + N), C
    }
    var m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        T = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function x(D) {
        return D % 400 === 0 || D % 4 === 0 && D % 100 !== 0
    }

    function _(D, $, w) {
        if ($ < 0 || $ > 11) return !1;
        if (w != null) {
            if (w < 1) return !1;
            var C = x(D);
            if (C && w > T[$] || !C && w > m[$]) return !1
        }
        return !0
    }

    function A(D, $) {
        if ($ < 1) return !1;
        var w = x(D);
        return !(w && $ > 366 || !w && $ > 365)
    }

    function E(D, $, w) {
        return !($ < 0 || $ > 52 || w != null && (w < 0 || w > 6))
    }

    function I(D, $, w) {
        return !(D != null && (D < 0 || D >= 25) || $ != null && ($ < 0 || $ >= 60) || w != null && (w < 0 || w >= 60))
    }
    e.exports = t.default
})(Xw, Nr);
const a1 = Cl(Nr);

function he(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}

function Tr(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tr = function(r) {
        return typeof r
    } : Tr = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Tr(e)
}

function rt(e) {
    he(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || Tr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN))
}

function Ut(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}
var s1 = {};

function na() {
    return s1
}

function $t(e, t) {
    var r, n, a, s, o, i, l, c;
    he(1, arguments);
    var u = na(),
        v = Ut((r = (n = (a = (s = t ? .weekStartsOn) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && a !== void 0 ? a : u.weekStartsOn) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && r !== void 0 ? r : 0);
    if (!(v >= 0 && v <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var h = rt(e),
        f = h.getDay(),
        g = (f < v ? 7 : 0) + f - v;
    return h.setDate(h.getDate() - g), h.setHours(0, 0, 0, 0), h
}

function os(e) {
    var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime()
}
var o1 = 6048e5;

function i1(e, t, r) {
    he(2, arguments);
    var n = $t(e, r),
        a = $t(t, r),
        s = n.getTime() - os(n),
        o = a.getTime() - os(a);
    return Math.round((s - o) / o1)
}

function l1(e) {
    he(1, arguments);
    var t = rt(e),
        r = t.getMonth();
    return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t
}

function u1(e) {
    he(1, arguments);
    var t = rt(e);
    return t.setDate(1), t.setHours(0, 0, 0, 0), t
}

function c1(e, t) {
    return he(1, arguments), i1(l1(e), u1(e), t) + 1
}

function f1(e, t) {
    var r, n, a, s, o, i, l, c;
    he(1, arguments);
    var u = rt(e),
        v = u.getFullYear(),
        h = na(),
        f = Ut((r = (n = (a = (s = t ? .firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : h.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = h.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
    if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var g = new Date(0);
    g.setFullYear(v + 1, 0, f), g.setHours(0, 0, 0, 0);
    var p = $t(g, t),
        y = new Date(0);
    y.setFullYear(v, 0, f), y.setHours(0, 0, 0, 0);
    var m = $t(y, t);
    return u.getTime() >= p.getTime() ? v + 1 : u.getTime() >= m.getTime() ? v : v - 1
}

function d1(e, t) {
    var r, n, a, s, o, i, l, c;
    he(1, arguments);
    var u = na(),
        v = Ut((r = (n = (a = (s = t ? .firstWeekContainsDate) !== null && s !== void 0 ? s : t == null || (o = t.locale) === null || o === void 0 || (i = o.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && a !== void 0 ? a : u.firstWeekContainsDate) !== null && n !== void 0 ? n : (l = u.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.firstWeekContainsDate) !== null && r !== void 0 ? r : 1),
        h = f1(e, t),
        f = new Date(0);
    f.setFullYear(h, 0, v), f.setHours(0, 0, 0, 0);
    var g = $t(f, t);
    return g
}
var v1 = 6048e5;

function h1(e, t) {
    he(1, arguments);
    var r = rt(e),
        n = $t(r, t).getTime() - d1(r, t).getTime();
    return Math.round(n / v1) + 1
}

function Br(e) {
    return he(1, arguments), $t(e, {
        weekStartsOn: 1
    })
}

function p1(e) {
    he(1, arguments);
    var t = rt(e),
        r = t.getFullYear(),
        n = new Date(0);
    n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
    var a = Br(n),
        s = new Date(0);
    s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
    var o = Br(s);
    return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= o.getTime() ? r : r - 1
}

function m1(e) {
    he(1, arguments);
    var t = p1(e),
        r = new Date(0);
    r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0);
    var n = Br(r);
    return n
}
var y1 = 6048e5;

function g1(e) {
    he(1, arguments);
    var t = rt(e),
        r = Br(t).getTime() - m1(t).getTime();
    return Math.round(r / y1) + 1
}

function me(e, t) {
    he(2, arguments);
    var r = rt(e),
        n = Ut(t);
    return isNaN(n) ? new Date(NaN) : (n && r.setDate(r.getDate() + n), r)
}

function zr(e, t) {
    he(2, arguments);
    var r = rt(e),
        n = Ut(t);
    if (isNaN(n)) return new Date(NaN);
    if (!n) return r;
    var a = r.getDate(),
        s = new Date(r.getTime());
    s.setMonth(r.getMonth() + n + 1, 0);
    var o = s.getDate();
    return a >= o ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), a), r)
}

function is(e, t) {
    he(2, arguments);
    var r = Ut(t);
    return zr(e, r * 12)
}
var Yt = (e => (e.Any = "any", e.All = "all", e))(Yt || {}),
    mo = (e => (e.Days = "days", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(mo || {}),
    yo = (e => (e.Days = "days", e.Weekdays = "weekdays", e.Weeks = "weeks", e.Months = "months", e.Years = "years", e))(yo || {}),
    go = (e => (e.OrdinalWeekdays = "ordinalWeekdays", e))(go || {});
class b1 {
    constructor(t, r, n) {
        R(this, "validated", !0), this.type = t, this.interval = r, this.from = n, this.from || (console.error('A valid "from" date is required for date interval rule. This rule will be skipped.'), this.validated = !1)
    }
    passes(t) {
        if (!this.validated) return !0;
        const {
            date: r
        } = t;
        switch (this.type) {
            case "days":
                return aa(this.from.date, r) % this.interval === 0;
            case "weeks":
                return L1(this.from.date, r) % this.interval === 0;
            case "months":
                return R1(this.from.date, r) % this.interval === 0;
            case "years":
                return ko(this.from.date, r) % this.interval === 0;
            default:
                return !1
        }
    }
}
class Kt {
    constructor(t, r, n, a) {
        R(this, "components", []), this.type = t, this.validator = n, this.getter = a, this.components = this.normalizeComponents(r)
    }
    static create(t, r) {
        switch (t) {
            case "days":
                return new w1(r);
            case "weekdays":
                return new D1(r);
            case "weeks":
                return new $1(r);
            case "months":
                return new _1(r);
            case "years":
                return new M1(r)
        }
    }
    normalizeComponents(t) {
        if (this.validator(t)) return [t];
        if (!Ye(t)) return [];
        const r = [];
        return t.forEach(n => {
            if (!this.validator(n)) {
                console.error(`Component value ${n} in invalid for "${this.type}" rule. This rule will be skipped.`);
                return
            }
            r.push(n)
        }), r
    }
    passes(t) {
        return this.getter(t).some(a => this.components.includes(a))
    }
}
class w1 extends Kt {
    constructor(t) {
        super("days", t, P1, ({
            day: r,
            dayFromEnd: n
        }) => [r, -n])
    }
}
class D1 extends Kt {
    constructor(t) {
        super("weekdays", t, Mn, ({
            weekday: r
        }) => [r])
    }
}
class $1 extends Kt {
    constructor(t) {
        super("weeks", t, T1, ({
            week: r,
            weekFromEnd: n
        }) => [r, -n])
    }
}
class _1 extends Kt {
    constructor(t) {
        super("months", t, Y1, ({
            month: r
        }) => [r])
    }
}
class M1 extends Kt {
    constructor(t) {
        super("years", t, Ee, ({
            year: r
        }) => [r])
    }
}
class O1 {
    constructor(t, r) {
        R(this, "components"), this.type = t, this.components = this.normalizeComponents(r)
    }
    normalizeArrayConfig(t) {
        const r = [];
        return t.forEach((n, a) => {
            if (Ee(n)) {
                if (a === 0) return;
                if (!ls(t[0])) {
                    console.error(`Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`);
                    return
                }
                if (!Mn(n)) {
                    console.error(`Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`);
                    return
                }
                r.push([t[0], n])
            } else Ye(n) && r.push(...this.normalizeArrayConfig(n))
        }), r
    }
    normalizeComponents(t) {
        const r = [];
        return t.forEach((n, a) => {
            if (Ee(n)) {
                if (a === 0) return;
                if (!ls(t[0])) {
                    console.error(`Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`);
                    return
                }
                if (!Mn(n)) {
                    console.error(`Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`);
                    return
                }
                r.push([t[0], n])
            } else Ye(n) && r.push(...this.normalizeArrayConfig(n))
        }), r
    }
    passes(t) {
        const {
            weekday: r,
            weekdayOrdinal: n,
            weekdayOrdinalFromEnd: a
        } = t;
        return this.components.some(([s, o]) => (s === n || s === -a) && r === o)
    }
}
class k1 {
    constructor(t) {
        R(this, "type", "function"), R(this, "validated", !0), this.fn = t, _t(t) || (console.error("The function rule requires a valid function. This rule will be skipped."), this.validated = !1)
    }
    passes(t) {
        return this.validated ? this.fn(t) : !0
    }
}
class Vr {
    constructor(t, r = {}, n) {
        R(this, "validated", !0), R(this, "config"), R(this, "type", Yt.Any), R(this, "from"), R(this, "until"), R(this, "rules", []), R(this, "locale", new Kr), this.parent = n, r.locale && (this.locale = r.locale), this.config = t, _t(t) ? (this.type = Yt.All, this.rules = [new k1(t)]) : Ye(t) ? (this.type = Yt.Any, this.rules = t.map(a => new Vr(a, r, this))) : Je(t) ? (this.type = Yt.All, this.from = t.from ? this.locale.getDateParts(t.from) : n ? .from, this.until = t.until ? this.locale.getDateParts(t.until) : n ? .until, this.rules = this.getObjectRules(t)) : (console.error("Rule group configuration must be an object or an array."), this.validated = !1)
    }
    getObjectRules(t) {
        const r = [];
        if (t.every && (We(t.every) && (t.every = [1, `${t.every}s`]), Ye(t.every))) {
            const [n = 1, a = mo.Days] = t.every;
            r.push(new b1(a, n, this.from))
        }
        return Object.values(yo).forEach(n => {
            n in t && r.push(Kt.create(n, t[n]))
        }), Object.values(go).forEach(n => {
            n in t && r.push(new O1(n, t[n]))
        }), t.on != null && (Ye(t.on) || (t.on = [t.on]), r.push(new Vr(t.on, {
            locale: this.locale
        }, this.parent))), r
    }
    passes(t) {
        return this.validated ? this.from && t.dayIndex <= this.from.dayIndex || this.until && t.dayIndex >= this.until.dayIndex ? !1 : this.type === Yt.Any ? this.rules.some(r => r.passes(t)) : this.rules.every(r => r.passes(t)) : !0
    }
}

function P1(e) {
    return Ee(e) ? e >= 1 && e <= 31 : !1
}

function Mn(e) {
    return Ee(e) ? e >= 1 && e <= 7 : !1
}

function T1(e) {
    return Ee(e) ? e >= -6 && e <= -1 || e >= 1 && e <= 6 : !1
}

function Y1(e) {
    return Ee(e) ? e >= 1 && e <= 12 : !1
}

function ls(e) {
    return !(!Ee(e) || e < -5 || e > 5 || e === 0)
}
const C1 = {
        dateTime: ["year", "month", "day", "hours", "minutes", "seconds", "milliseconds"],
        date: ["year", "month", "day"],
        time: ["hours", "minutes", "seconds", "milliseconds"]
    },
    ve = 7,
    S1 = 6,
    bo = 1e3,
    wo = bo * 60,
    Do = wo * 60,
    Yr = Do * 24,
    A1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    I1 = ["L", "iso"],
    sr = {
        milliseconds: [0, 999, 3],
        seconds: [0, 59, 2],
        minutes: [0, 59, 2],
        hours: [0, 23, 2]
    },
    $o = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
    x1 = /\[([^]*?)\]/gm,
    us = {
        D(e) {
            return e.day
        },
        DD(e) {
            return Q(e.day, 2)
        },
        d(e) {
            return e.weekday - 1
        },
        dd(e) {
            return Q(e.weekday - 1, 2)
        },
        W(e, t) {
            return t.dayNamesNarrow[e.weekday - 1]
        },
        WW(e, t) {
            return t.dayNamesShorter[e.weekday - 1]
        },
        WWW(e, t) {
            return t.dayNamesShort[e.weekday - 1]
        },
        WWWW(e, t) {
            return t.dayNames[e.weekday - 1]
        },
        M(e) {
            return e.month
        },
        MM(e) {
            return Q(e.month, 2)
        },
        MMM(e, t) {
            return t.monthNamesShort[e.month - 1]
        },
        MMMM(e, t) {
            return t.monthNames[e.month - 1]
        },
        YY(e) {
            return String(e.year).substr(2)
        },
        YYYY(e) {
            return Q(e.year, 4)
        },
        h(e) {
            return e.hours % 12 || 12
        },
        hh(e) {
            return Q(e.hours % 12 || 12, 2)
        },
        H(e) {
            return e.hours
        },
        HH(e) {
            return Q(e.hours, 2)
        },
        m(e) {
            return e.minutes
        },
        mm(e) {
            return Q(e.minutes, 2)
        },
        s(e) {
            return e.seconds
        },
        ss(e) {
            return Q(e.seconds, 2)
        },
        S(e) {
            return Math.round(e.milliseconds / 100)
        },
        SS(e) {
            return Q(Math.round(e.milliseconds / 10), 2)
        },
        SSS(e) {
            return Q(e.milliseconds, 3)
        },
        a(e, t) {
            return e.hours < 12 ? t.amPm[0] : t.amPm[1]
        },
        A(e, t) {
            return e.hours < 12 ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase()
        },
        Z() {
            return "Z"
        },
        ZZ(e) {
            const t = e.timezoneOffset;
            return `${t>0?"-":"+"}${Q(Math.floor(Math.abs(t)/60),2)}`
        },
        ZZZ(e) {
            const t = e.timezoneOffset;
            return `${t>0?"-":"+"}${Q(Math.floor(Math.abs(t)/60)*100+Math.abs(t)%60,4)}`
        },
        ZZZZ(e) {
            const t = e.timezoneOffset;
            return `${t>0?"-":"+"}${Q(Math.floor(Math.abs(t)/60),2)}:${Q(Math.abs(t)%60,2)}`
        }
    },
    ot = /\d\d?/,
    E1 = /\d{3}/,
    N1 = /\d{4}/,
    rr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    cs = () => {},
    fs = e => (t, r, n) => {
        const a = n[e].indexOf(r.charAt(0).toUpperCase() + r.substr(1).toLowerCase());
        ~a && (t.month = a)
    },
    ee = {
        D: [ot, (e, t) => {
            e.day = t
        }],
        Do: [new RegExp(ot.source + rr.source), (e, t) => {
            e.day = parseInt(t, 10)
        }],
        d: [ot, cs],
        W: [rr, cs],
        M: [ot, (e, t) => {
            e.month = t - 1
        }],
        MMM: [rr, fs("monthNamesShort")],
        MMMM: [rr, fs("monthNames")],
        YY: [ot, (e, t) => {
            const n = +new Date().getFullYear().toString().substr(0, 2);
            e.year = +`${t>68?n-1:n}${t}`
        }],
        YYYY: [N1, (e, t) => {
            e.year = t
        }],
        S: [/\d/, (e, t) => {
            e.milliseconds = t * 100
        }],
        SS: [/\d{2}/, (e, t) => {
            e.milliseconds = t * 10
        }],
        SSS: [E1, (e, t) => {
            e.milliseconds = t
        }],
        h: [ot, (e, t) => {
            e.hours = t
        }],
        m: [ot, (e, t) => {
            e.minutes = t
        }],
        s: [ot, (e, t) => {
            e.seconds = t
        }],
        a: [rr, (e, t, r) => {
            const n = t.toLowerCase();
            n === r.amPm[0] ? e.isPm = !1 : n === r.amPm[1] && (e.isPm = !0)
        }],
        Z: [/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/, (e, t) => {
            t === "Z" && (t = "+00:00");
            const r = `${t}`.match(/([+-]|\d\d)/gi);
            if (r) {
                const n = +r[1] * 60 + parseInt(r[2], 10);
                e.timezoneOffset = r[0] === "+" ? n : -n
            }
        }]
    };
ee.DD = ee.D;
ee.dd = ee.d;
ee.WWWW = ee.WWW = ee.WW = ee.W;
ee.MM = ee.M;
ee.mm = ee.m;
ee.hh = ee.H = ee.HH = ee.h;
ee.ss = ee.s;
ee.A = ee.a;
ee.ZZZZ = ee.ZZZ = ee.ZZ = ee.Z;

function _o(e, t) {
    return (Ze(e) && e || [We(e) && e || "YYYY-MM-DD"]).map(r => I1.reduce((n, a) => n.replace(a, t.masks[a] || ""), r))
}

function Mo(e) {
    return Je(e) && "year" in e && "month" in e && "day" in e
}

function ds(e, t = 1) {
    const r = e.getDay() + 1,
        n = r >= t ? t - r : -(7 - (t - r));
    return me(e, n)
}

function Oo(e, t, r) {
    const n = Date.UTC(e, t - 1, r);
    return aa(new Date(0), new Date(n))
}

function aa(e, t) {
    return Math.round((t.getTime() - e.getTime()) / Yr)
}

function L1(e, t) {
    return Math.ceil(aa(ds(e), ds(t)) / 7)
}

function ko(e, t) {
    return t.getUTCFullYear() - e.getUTCFullYear()
}

function R1(e, t) {
    return ko(e, t) * 12 + (t.getMonth() - e.getMonth())
}

function Po(e, t = "") {
    const r = new Date,
        {
            year: n = r.getFullYear(),
            month: a = r.getMonth() + 1,
            day: s = r.getDate(),
            hours: o = 0,
            minutes: i = 0,
            seconds: l = 0,
            milliseconds: c = 0
        } = e;
    if (t) {
        const u = `${Q(n,4)}-${Q(a,2)}-${Q(s,2)}T${Q(o,2)}:${Q(i,2)}:${Q(l,2)}.${Q(c,3)}`;
        return a1(u, {
            timeZone: t
        })
    }
    return new Date(n, a - 1, s, o, i, l, c)
}

function F1(e, t) {
    let r = new Date(e.getTime());
    t.timezone && (r = new Date(e.toLocaleString("en-US", {
        timeZone: t.timezone
    })), r.setMilliseconds(e.getMilliseconds()));
    const n = r.getMilliseconds(),
        a = r.getSeconds(),
        s = r.getMinutes(),
        o = r.getHours(),
        i = n + a * bo + s * wo + o * Do,
        l = r.getMonth() + 1,
        c = r.getFullYear(),
        u = t.getMonthParts(l, c),
        v = r.getDate(),
        h = u.numDays - v + 1,
        f = r.getDay() + 1,
        g = Math.floor((v - 1) / 7 + 1),
        p = Math.floor((u.numDays - v) / 7 + 1),
        y = Math.ceil((v + Math.abs(u.firstWeekday - u.firstDayOfWeek)) / 7),
        m = u.numWeeks - y + 1,
        T = u.weeknumbers[y],
        x = Oo(c, l, v);
    return {
        milliseconds: n,
        seconds: a,
        minutes: s,
        hours: o,
        time: i,
        day: v,
        dayFromEnd: h,
        weekday: f,
        weekdayOrdinal: g,
        weekdayOrdinalFromEnd: p,
        week: y,
        weekFromEnd: m,
        weeknumber: T,
        month: l,
        year: c,
        date: r,
        dateTime: r.getTime(),
        dayIndex: x,
        timezoneOffset: 0,
        isValid: !0
    }
}

function H1(e, t, r) {
    return `${t}-${e}-${r}`
}

function W1(e, t, r) {
    const n = t % 4 === 0 && t % 100 !== 0 || t % 400 === 0,
        a = new Date(t, e - 1, 1),
        s = a.getDay() + 1,
        o = e === 2 && n ? 29 : A1[e - 1],
        i = r - 1,
        l = c1(a, {
            weekStartsOn: i
        }),
        c = [],
        u = [];
    for (let v = 0; v < l; v++) {
        const h = me(a, v * 7);
        c.push(h1(h, {
            weekStartsOn: i
        })), u.push(g1(h))
    }
    return {
        firstDayOfWeek: r,
        firstDayOfMonth: a,
        inLeapYear: n,
        firstWeekday: s,
        numDays: o,
        numWeeks: l,
        month: e,
        year: t,
        weeknumbers: c,
        isoWeeknumbers: u
    }
}

function j1() {
    const e = [];
    for (let a = 0; a < ve; a++) e.push(Po({
        year: 2020,
        month: 1,
        day: 5 + a,
        hours: 12
    }));
    return e
}

function pn(e, t = void 0) {
    const r = new Intl.DateTimeFormat(t, {
        weekday: e
    });
    return j1().map(n => r.format(n))
}

function B1() {
    const e = [];
    for (let t = 0; t <= 24; t++) e.push(new Date(2e3, 0, 1, t));
    return e
}

function z1(e = void 0) {
    const t = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"],
        r = new Intl.RelativeTimeFormat(e);
    return t.reduce((n, a) => {
        const s = r.formatToParts(100, a);
        return n[a] = s[1].unit, n
    }, {})
}

function To() {
    const e = [];
    for (let t = 0; t < 12; t++) e.push(new Date(2e3, t, 15));
    return e
}

function vs(e, t = void 0) {
    const r = new Intl.DateTimeFormat(t, {
        month: e,
        timeZone: "UTC"
    });
    return To().map(n => r.format(n))
}

function V1(e, t, r) {
    return Ee(t) ? t === e : Ye(t) ? t.includes(e) : _t(t) ? t(e, r) : !(t.min != null && t.min > e || t.max != null && t.max < e || t.interval != null && e % t.interval !== 0)
}

function or(e, t, r) {
    const n = [],
        [a, s, o] = t;
    for (let i = a; i <= s; i++)(r == null || V1(i, r, e)) && n.push({
        value: i,
        label: Q(i, o)
    });
    return n
}

function U1(e, t) {
    return {
        milliseconds: or(e, sr.milliseconds, t.milliseconds),
        seconds: or(e, sr.seconds, t.seconds),
        minutes: or(e, sr.minutes, t.minutes),
        hours: or(e, sr.hours, t.hours)
    }
}

function K1(e, t, r, n) {
    const s = or(e, t, n).reduce((o, i) => {
        if (i.disabled) return o;
        if (isNaN(o)) return i.value;
        const l = Math.abs(o - r);
        return Math.abs(i.value - r) < l ? i.value : o
    }, NaN);
    return isNaN(s) ? r : s
}

function G1(e, t) {
    const r = { ...e
    };
    return Object.entries(t).forEach(([n, a]) => {
        const s = sr[n],
            o = e[n];
        r[n] = K1(e, s, o, a)
    }), r
}

function hs(e, t, r) {
    return _o(t, r).map(a => {
        if (typeof a != "string") throw new Error("Invalid mask");
        let s = e;
        if (s.length > 1e3) return !1;
        let o = !0;
        const i = {};
        if (a.replace($o, u => {
                if (ee[u]) {
                    const v = ee[u],
                        h = s.search(v[0]);
                    ~h ? s.replace(v[0], f => (v[1](i, f, r), s = s.substr(h + f.length), f)) : o = !1
                }
                return ee[u] ? "" : u.slice(1, u.length - 1)
            }), !o) return !1;
        const l = new Date;
        i.hours != null && (i.isPm === !0 && +i.hours != 12 ? i.hours = +i.hours + 12 : i.isPm === !1 && +i.hours == 12 && (i.hours = 0));
        let c;
        return i.timezoneOffset != null ? (i.minutes = +(i.minutes || 0) - +i.timezoneOffset, c = new Date(Date.UTC(i.year || l.getFullYear(), i.month || 0, i.day || 1, i.hours || 0, i.minutes || 0, i.seconds || 0, i.milliseconds || 0))) : c = r.getDateFromParts({
            year: i.year || l.getFullYear(),
            month: (i.month || 0) + 1,
            day: i.day || 1,
            hours: i.hours || 0,
            minutes: i.minutes || 0,
            seconds: i.seconds || 0,
            milliseconds: i.milliseconds || 0
        }), c
    }).find(a => a) || new Date(e)
}

function q1(e, t, r) {
    if (e == null) return "";
    let n = _o(t, r)[0];
    /Z$/.test(n) && (r.timezone = "utc");
    const a = [];
    n = n.replace(x1, (o, i) => (a.push(i), "??"));
    const s = r.getDateParts(e);
    return n = n.replace($o, o => o in us ? us[o](s, r) : o.slice(1, o.length - 1)), n.replace(/\?\?/g, () => a.shift())
}
const Z1 = {
    daily: ["year", "month", "day"],
    weekly: ["year", "month", "week"],
    monthly: ["year", "month"]
};

function X1({
    monthComps: e,
    prevMonthComps: t,
    nextMonthComps: r
}, n) {
    const a = [],
        {
            firstDayOfWeek: s,
            firstWeekday: o,
            isoWeeknumbers: i,
            weeknumbers: l,
            numDays: c,
            numWeeks: u
        } = e,
        v = o + (o < s ? ve : 0) - s;
    let h = !0,
        f = !1,
        g = !1,
        p = 0;
    const y = new Intl.DateTimeFormat(n.id, {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric"
    });
    let m = t.numDays - v + 1,
        T = t.numDays - m + 1,
        x = Math.floor((m - 1) / ve + 1),
        _ = 1,
        A = t.numWeeks,
        E = 1,
        I = t.month,
        D = t.year;
    const $ = new Date,
        w = $.getDate(),
        C = $.getMonth() + 1,
        k = $.getFullYear();
    for (let N = 1; N <= S1; N++) {
        for (let z = 1, L = s; z <= ve; z++, L += L === ve ? 1 - ve : 1) {
            h && L === o && (m = 1, T = e.numDays, x = Math.floor((m - 1) / ve + 1), _ = Math.floor((c - m) / ve + 1), A = 1, E = u, I = e.month, D = e.year, h = !1, f = !0);
            const V = n.getDateFromParams(D, I, m, 0, 0, 0, 0),
                Z = n.getDateFromParams(D, I, m, 12, 0, 0, 0),
                te = n.getDateFromParams(D, I, m, 23, 59, 59, 999),
                q = V,
                O = `${Q(D,4)}-${Q(I,2)}-${Q(m,2)}`,
                U = z,
                le = ve - z,
                fe = l[N - 1],
                H = i[N - 1],
                re = m === w && I === C && D === k,
                X = f && m === 1,
                ue = f && m === c,
                ae = N === 1,
                J = N === u,
                _e = z === 1,
                pe = z === ve,
                Oe = Oo(D, I, m);
            a.push({
                locale: n,
                id: O,
                position: ++p,
                label: m.toString(),
                ariaLabel: y.format(new Date(D, I - 1, m)),
                day: m,
                dayFromEnd: T,
                weekday: L,
                weekdayPosition: U,
                weekdayPositionFromEnd: le,
                weekdayOrdinal: x,
                weekdayOrdinalFromEnd: _,
                week: A,
                weekFromEnd: E,
                weekPosition: N,
                weeknumber: fe,
                isoWeeknumber: H,
                month: I,
                year: D,
                date: q,
                startDate: V,
                endDate: te,
                noonDate: Z,
                dayIndex: Oe,
                isToday: re,
                isFirstDay: X,
                isLastDay: ue,
                isDisabled: !f,
                isFocusable: !f,
                isFocused: !1,
                inMonth: f,
                inPrevMonth: h,
                inNextMonth: g,
                onTop: ae,
                onBottom: J,
                onLeft: _e,
                onRight: pe,
                classes: [`id-${O}`, `day-${m}`, `day-from-end-${T}`, `weekday-${L}`, `weekday-position-${U}`, `weekday-ordinal-${x}`, `weekday-ordinal-from-end-${_}`, `week-${A}`, `week-from-end-${E}`, {
                    "is-today": re,
                    "is-first-day": X,
                    "is-last-day": ue,
                    "in-month": f,
                    "in-prev-month": h,
                    "in-next-month": g,
                    "on-top": ae,
                    "on-bottom": J,
                    "on-left": _e,
                    "on-right": pe
                }]
            }), f && ue ? (f = !1, g = !0, m = 1, T = c, x = 1, _ = Math.floor((c - m) / ve + 1), A = 1, E = r.numWeeks, I = r.month, D = r.year) : (m++, T--, x = Math.floor((m - 1) / ve + 1), _ = Math.floor((c - m) / ve + 1))
        }
        A++, E--
    }
    return a
}

function J1(e, t, r, n) {
    const a = e.reduce((s, o, i) => {
        const l = Math.floor(i / 7);
        let c = s[l];
        return c || (c = {
            id: `week-${l+1}`,
            title: "",
            week: o.week,
            weekPosition: o.weekPosition,
            weeknumber: o.weeknumber,
            isoWeeknumber: o.isoWeeknumber,
            weeknumberDisplay: t ? o.weeknumber : r ? o.isoWeeknumber : void 0,
            days: []
        }, s[l] = c), c.days.push(o), s
    }, Array(e.length / ve));
    return a.forEach(s => {
        const o = s.days[0],
            i = s.days[s.days.length - 1];
        o.month === i.month ? s.title = `${n.formatDate(o.date,"MMMM YYYY")}` : o.year === i.year ? s.title = `${n.formatDate(o.date,"MMM")} - ${n.formatDate(i.date,"MMM YYYY")}` : s.title = `${n.formatDate(o.date,"MMM YYYY")} - ${n.formatDate(i.date,"MMM YYYY")}`
    }), a
}

function Q1(e, t) {
    return e.days.map(r => ({
        label: t.formatDate(r.date, t.masks.weekdays),
        weekday: r.weekday
    }))
}

function Yo(e, t, r) {
    return po(r.getDateParts(r.toDate(e)), Z1[t])
}

function Co({
    day: e,
    week: t,
    month: r,
    year: n
}, a, s, o) {
    if (s === "daily" && e) {
        const i = new Date(n, r - 1, e),
            l = me(i, a);
        return {
            day: l.getDate(),
            month: l.getMonth() + 1,
            year: l.getFullYear()
        }
    } else if (s === "weekly" && t) {
        const l = o.getMonthParts(r, n).firstDayOfMonth,
            c = me(l, (t - 1 + a) * 7),
            u = o.getDateParts(c);
        return {
            week: u.week,
            month: u.month,
            year: u.year
        }
    } else {
        const i = new Date(n, r - 1, 1),
            l = zr(i, a);
        return {
            month: l.getMonth() + 1,
            year: l.getFullYear()
        }
    }
}

function je(e) {
    return e != null && e.month != null && e.year != null
}

function On(e, t) {
    return !je(e) || !je(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year < t.year : e.month && t.month && e.month !== t.month ? e.month < t.month : e.week && t.week && e.week !== t.week ? e.week < t.week : e.day && t.day && e.day !== t.day ? e.day < t.day : !1)
}

function Ur(e, t) {
    return !je(e) || !je(t) ? !1 : (e = e, t = t, e.year !== t.year ? e.year > t.year : e.month && t.month && e.month !== t.month ? e.month > t.month : e.week && t.week && e.week !== t.week ? e.week > t.week : e.day && t.day && e.day !== t.day ? e.day > t.day : !1)
}

function So(e, t, r) {
    return (e || !1) && !On(e, t) && !Ur(e, r)
}

function eD(e, t) {
    return !e && t || e && !t ? !1 : !e && !t ? !0 : (e = e, t = t, e.year === t.year && e.month === t.month && e.week === t.week && e.day === t.day)
}

function tD(e, t, r, n) {
    if (!je(e) || !je(t)) return [];
    const a = [];
    for (; !Ur(e, t);) a.push(e), e = Co(e, 1, r, n);
    return a
}

function Ao(e) {
    const {
        day: t,
        week: r,
        month: n,
        year: a
    } = e;
    let s = `${a}-${Q(n,2)}`;
    return r && (s = `${s}-w${r}`), t && (s = `${s}-${Q(t,2)}`), s
}

function rD(e, t) {
    const {
        month: r,
        year: n,
        showWeeknumbers: a,
        showIsoWeeknumbers: s
    } = e, o = new Date(n, r - 1, 15), i = t.getMonthParts(r, n), l = t.getPrevMonthParts(r, n), c = t.getNextMonthParts(r, n), u = X1({
        monthComps: i,
        prevMonthComps: l,
        nextMonthComps: c
    }, t), v = J1(u, a, s, t), h = Q1(v[0], t);
    return {
        id: Ao(e),
        month: r,
        year: n,
        monthTitle: t.formatDate(o, t.masks.title),
        shortMonthLabel: t.formatDate(o, "MMM"),
        monthLabel: t.formatDate(o, "MMMM"),
        shortYearLabel: n.toString().substring(2),
        yearLabel: n.toString(),
        monthComps: i,
        prevMonthComps: l,
        nextMonthComps: c,
        days: u,
        weeks: v,
        weekdays: h
    }
}

function nD(e, t) {
    const {
        day: r,
        week: n,
        view: a,
        trimWeeks: s
    } = e, o = { ...t,
        ...e,
        title: "",
        viewDays: [],
        viewWeeks: []
    };
    switch (a) {
        case "daily":
            {
                let i = o.days.find(c => c.inMonth);r ? i = o.days.find(c => c.day === r && c.inMonth) || i : n && (i = o.days.find(c => c.week === n && c.inMonth));
                const l = o.weeks[i.week - 1];o.viewWeeks = [l],
                o.viewDays = [i],
                o.week = i.week,
                o.weekTitle = l.title,
                o.day = i.day,
                o.dayTitle = i.ariaLabel,
                o.title = o.dayTitle;
                break
            }
        case "weekly":
            {
                o.week = n || 1;
                const i = o.weeks[o.week - 1];o.viewWeeks = [i],
                o.viewDays = i.days,
                o.weekTitle = i.title,
                o.title = o.weekTitle;
                break
            }
        default:
            {
                o.title = o.monthTitle,
                o.viewWeeks = o.weeks.slice(0, s ? o.monthComps.numWeeks : void 0),
                o.viewDays = o.days;
                break
            }
    }
    return o
}
class ps {
    constructor(t, r, n) {
        R(this, "keys", []), R(this, "store", {}), this.size = t, this.createKey = r, this.createItem = n
    }
    get(...t) {
        const r = this.createKey(...t);
        return this.store[r]
    }
    getOrSet(...t) {
        const r = this.createKey(...t);
        if (this.store[r]) return this.store[r];
        const n = this.createItem(...t);
        if (this.keys.length >= this.size) {
            const a = this.keys.shift();
            a != null && delete this.store[a]
        }
        return this.keys.push(r), this.store[r] = n, n
    }
}
class At {
    constructor(t, r = new Kr) {
        R(this, "order"), R(this, "locale"), R(this, "start", null), R(this, "end", null), R(this, "repeat", null);
        var n;
        this.locale = r;
        const {
            start: a,
            end: s,
            span: o,
            order: i,
            repeat: l
        } = t;
        St(a) && (this.start = r.getDateParts(a)), St(s) ? this.end = r.getDateParts(s) : this.start != null && o && (this.end = r.getDateParts(me(this.start.date, o - 1))), this.order = i ? ? 0, l && (this.repeat = new Vr({
            from: (n = this.start) == null ? void 0 : n.date,
            ...l
        }, {
            locale: this.locale
        }))
    }
    static fromMany(t, r) {
        return (Ye(t) ? t : [t]).filter(n => n).map(n => At.from(n, r))
    }
    static from(t, r) {
        if (t instanceof At) return t;
        const n = {
            start: null,
            end: null
        };
        return t != null && (Ye(t) ? (n.start = t[0] ? ? null, n.end = t[1] ? ? null) : Je(t) ? Object.assign(n, t) : (n.start = t, n.end = t)), n.start != null && (n.start = new Date(n.start)), n.end != null && (n.end = new Date(n.end)), new At(n, r)
    }
    get opts() {
        const {
            order: t,
            locale: r
        } = this;
        return {
            order: t,
            locale: r
        }
    }
    get hasRepeat() {
        return !!this.repeat
    }
    get isSingleDay() {
        const {
            start: t,
            end: r
        } = this;
        return t && r && t.year === r.year && t.month === r.month && t.day === r.day
    }
    get isMultiDay() {
        return !this.isSingleDay
    }
    get daySpan() {
        return this.start == null || this.end == null ? this.hasRepeat ? 1 : 1 / 0 : this.end.dayIndex - this.start.dayIndex
    }
    startsOnDay(t) {
        var r, n;
        return ((r = this.start) == null ? void 0 : r.dayIndex) === t.dayIndex || !!((n = this.repeat) != null && n.passes(t))
    }
    intersectsDay(t) {
        return this.intersectsDayRange(t, t)
    }
    intersectsRange(t) {
        var r, n;
        return this.intersectsDayRange(((r = t.start) == null ? void 0 : r.dayIndex) ? ? -1 / 0, ((n = t.end) == null ? void 0 : n.dayIndex) ? ? 1 / 0)
    }
    intersectsDayRange(t, r) {
        return !(this.start && this.start.dayIndex > r || this.end && this.end.dayIndex < t)
    }
}
class aD {
    constructor() {
        R(this, "records", {})
    }
    render(t, r, n) {
        var a, s, o, i;
        let l = null;
        const c = n[0].dayIndex,
            u = n[n.length - 1].dayIndex;
        return r.hasRepeat ? n.forEach(v => {
            var h, f;
            if (r.startsOnDay(v)) {
                const g = r.daySpan < 1 / 0 ? r.daySpan : 1;
                l = {
                    startDay: v.dayIndex,
                    startTime: ((h = r.start) == null ? void 0 : h.time) ? ? 0,
                    endDay: v.dayIndex + g - 1,
                    endTime: ((f = r.end) == null ? void 0 : f.time) ? ? Yr
                }, this.getRangeRecords(t).push(l)
            }
        }) : r.intersectsDayRange(c, u) && (l = {
            startDay: ((a = r.start) == null ? void 0 : a.dayIndex) ? ? -1 / 0,
            startTime: ((s = r.start) == null ? void 0 : s.time) ? ? -1 / 0,
            endDay: ((o = r.end) == null ? void 0 : o.dayIndex) ? ? 1 / 0,
            endTime: ((i = r.end) == null ? void 0 : i.time) ? ? 1 / 0
        }, this.getRangeRecords(t).push(l)), l
    }
    getRangeRecords(t) {
        let r = this.records[t.key];
        return r || (r = {
            ranges: [],
            data: t
        }, this.records[t.key] = r), r.ranges
    }
    getCell(t, r) {
        return this.getCells(r).find(s => s.data.key === t)
    }
    cellExists(t, r) {
        const n = this.records[t];
        return n == null ? !1 : n.ranges.some(a => a.startDay <= r && a.endDay >= r)
    }
    getCells(t) {
        const r = Object.values(this.records),
            n = [],
            {
                dayIndex: a
            } = t;
        return r.forEach(({
            data: s,
            ranges: o
        }) => {
            o.filter(i => i.startDay <= a && i.endDay >= a).forEach(i => {
                const l = a === i.startDay,
                    c = a === i.endDay,
                    u = l ? i.startTime : 0,
                    v = new Date(t.startDate.getTime() + u),
                    h = c ? i.endTime : Yr,
                    f = new Date(t.endDate.getTime() + h),
                    g = u === 0 && h === Yr,
                    p = s.order || 0;
                n.push({ ...i,
                    data: s,
                    onStart: l,
                    onEnd: c,
                    startTime: u,
                    startDate: v,
                    endTime: h,
                    endDate: f,
                    allDay: g,
                    order: p
                })
            })
        }), n.sort((s, o) => s.order - o.order), n
    }
}
const sD = 12,
    oD = 5;

function iD(e, t) {
    const r = new Intl.DateTimeFormat().resolvedOptions().locale;
    let n;
    We(e) ? n = e : ea(e, "id") && (n = e.id), n = (n || r).toLowerCase();
    const a = Object.keys(t),
        s = l => a.find(c => c.toLowerCase() === l);
    n = s(n) || s(n.substring(0, 2)) || r;
    const o = { ...t["en-IE"],
        ...t[n],
        id: n,
        monthCacheSize: sD,
        pageCacheSize: oD
    };
    return Je(e) ? vr(e, o) : o
}
class Kr {
    constructor(t = void 0, r) {
        R(this, "id"), R(this, "daysInWeek"), R(this, "firstDayOfWeek"), R(this, "masks"), R(this, "timezone"), R(this, "hourLabels"), R(this, "dayNames"), R(this, "dayNamesShort"), R(this, "dayNamesShorter"), R(this, "dayNamesNarrow"), R(this, "monthNames"), R(this, "monthNamesShort"), R(this, "relativeTimeNames"), R(this, "amPm", ["am", "pm"]), R(this, "monthCache"), R(this, "pageCache");
        const {
            id: n,
            firstDayOfWeek: a,
            masks: s,
            monthCacheSize: o,
            pageCacheSize: i
        } = iD(t, Zw.value);
        this.monthCache = new ps(o, H1, W1), this.pageCache = new ps(i, Ao, rD), this.id = n, this.daysInWeek = ve, this.firstDayOfWeek = Dw(a, 1, ve), this.masks = s, this.timezone = r || void 0, this.hourLabels = this.getHourLabels(), this.dayNames = pn("long", this.id), this.dayNamesShort = pn("short", this.id), this.dayNamesShorter = this.dayNamesShort.map(l => l.substring(0, 2)), this.dayNamesNarrow = pn("narrow", this.id), this.monthNames = vs("long", this.id), this.monthNamesShort = vs("short", this.id), this.relativeTimeNames = z1(this.id)
    }
    formatDate(t, r) {
        return q1(t, r, this)
    }
    parseDate(t, r) {
        return hs(t, r, this)
    }
    toDate(t, r = {}) {
        const n = new Date(NaN);
        let a = n;
        const {
            fillDate: s,
            mask: o,
            patch: i,
            rules: l
        } = r;
        if (Ee(t) ? (r.type = "number", a = new Date(+t)) : We(t) ? (r.type = "string", a = t ? hs(t, o || "iso", this) : n) : St(t) ? (r.type = "date", a = new Date(t.getTime())) : Mo(t) && (r.type = "object", a = this.getDateFromParts(t)), a && (i || l)) {
            let c = this.getDateParts(a);
            if (i && s != null) {
                const u = this.getDateParts(this.toDate(s));
                c = this.getDateParts(this.toDate({ ...u,
                    ...po(c, C1[i])
                }))
            }
            l && (c = G1(c, l)), a = this.getDateFromParts(c)
        }
        return a || n
    }
    toDateOrNull(t, r = {}) {
        const n = this.toDate(t, r);
        return isNaN(n.getTime()) ? null : n
    }
    fromDate(t, {
        type: r,
        mask: n
    } = {}) {
        switch (r) {
            case "number":
                return t ? t.getTime() : NaN;
            case "string":
                return t ? this.formatDate(t, n || "iso") : "";
            case "object":
                return t ? this.getDateParts(t) : null;
            default:
                return t ? new Date(t) : null
        }
    }
    range(t) {
        return At.from(t, this)
    }
    ranges(t) {
        return At.fromMany(t, this)
    }
    getDateParts(t) {
        return F1(t, this)
    }
    getDateFromParts(t) {
        return Po(t, this.timezone)
    }
    getDateFromParams(t, r, n, a, s, o, i) {
        return this.getDateFromParts({
            year: t,
            month: r,
            day: n,
            hours: a,
            minutes: s,
            seconds: o,
            milliseconds: i
        })
    }
    getPage(t) {
        const r = this.pageCache.getOrSet(t, this);
        return nD(t, r)
    }
    getMonthParts(t, r) {
        const {
            firstDayOfWeek: n
        } = this;
        return this.monthCache.getOrSet(t, r, n)
    }
    getThisMonthParts() {
        const t = new Date;
        return this.getMonthParts(t.getMonth() + 1, t.getFullYear())
    }
    getPrevMonthParts(t, r) {
        return t === 1 ? this.getMonthParts(12, r - 1) : this.getMonthParts(t - 1, r)
    }
    getNextMonthParts(t, r) {
        return t === 12 ? this.getMonthParts(1, r + 1) : this.getMonthParts(t + 1, r)
    }
    getHourLabels() {
        return B1().map(t => this.formatDate(t, this.masks.hours))
    }
    getDayId(t) {
        return this.formatDate(t, "YYYY-MM-DD")
    }
}
class Io {
    constructor(t, r, n) {
        R(this, "key", ""), R(this, "hashcode", ""), R(this, "highlight", null), R(this, "content", null), R(this, "dot", null), R(this, "bar", null), R(this, "event", null), R(this, "popover", null), R(this, "customData", null), R(this, "ranges"), R(this, "hasRanges", !1), R(this, "order", 0), R(this, "pinPage", !1), R(this, "maxRepeatSpan", 0), R(this, "locale");
        const {
            dates: a
        } = Object.assign(this, {
            hashcode: "",
            order: 0,
            pinPage: !1
        }, t);
        this.key || (this.key = Er()), this.locale = n, r.normalizeGlyphs(this), this.ranges = n.ranges(a ? ? []), this.hasRanges = !!Ze(this.ranges), this.maxRepeatSpan = this.ranges.filter(s => s.hasRepeat).map(s => s.daySpan).reduce((s, o) => Math.max(s, o), 0)
    }
    intersectsRange({
        start: t,
        end: r
    }) {
        if (t == null || r == null) return !1;
        const n = this.ranges.filter(o => !o.hasRepeat);
        for (const o of n)
            if (o.intersectsDayRange(t.dayIndex, r.dayIndex)) return !0;
        const a = this.ranges.filter(o => o.hasRepeat);
        if (!a.length) return !1;
        let s = t;
        for (this.maxRepeatSpan > 1 && (s = this.locale.getDateParts(me(s.date, -this.maxRepeatSpan))); s.dayIndex <= r.dayIndex;) {
            for (const o of a)
                if (o.startsOnDay(s)) return !0;
            s = this.locale.getDateParts(me(s.date, 1))
        }
        return !1
    }
}
const xo = "__vc_base_context__",
    Eo = {
        color: {
            type: String,
            default: () => ut("color")
        },
        isDark: {
            type: [Boolean, String, Object],
            default: () => ut("isDark")
        },
        firstDayOfWeek: Number,
        masks: Object,
        locale: [String, Object],
        timezone: String,
        minDate: null,
        maxDate: null,
        disabledDates: null
    };

function No(e) {
    const t = b(() => e.color ? ? ""),
        r = b(() => e.isDark ? ? !1),
        {
            displayMode: n
        } = Yl(r),
        a = b(() => new Yw(t.value)),
        s = b(() => {
            if (e.locale instanceof Kr) return e.locale;
            const u = Je(e.locale) ? e.locale : {
                id: e.locale,
                firstDayOfWeek: e.firstDayOfWeek,
                masks: e.masks
            };
            return new Kr(u, e.timezone)
        }),
        o = b(() => s.value.masks),
        i = b(() => {
            const u = e.disabledDates ? ? [];
            return e.minDate != null && u.push({
                start: null,
                end: me(s.value.toDate(e.minDate), -1)
            }), e.maxDate != null && u.push({
                start: me(s.value.toDate(e.maxDate), 1),
                end: null
            }), s.value.ranges(u)
        }),
        l = b(() => new Io({
            key: "disabled",
            dates: i.value,
            order: 100
        }, a.value, s.value)),
        c = {
            color: t,
            isDark: r,
            displayMode: n,
            theme: a,
            locale: s,
            masks: o,
            disabledDates: i,
            disabledAttribute: l
        };
    return Zr(xo, c), c
}

function lD(e) {
    return Cn(xo, No(e))
}
const uD = (e, t, {
        maxSwipeTime: r,
        minHorizontalSwipeDistance: n,
        maxVerticalSwipeDistance: a
    }) => {
        if (!e || !e.addEventListener || !_t(t)) return null;
        let s = 0,
            o = 0,
            i = null,
            l = !1;

        function c(v) {
            const h = v.changedTouches[0];
            s = h.screenX, o = h.screenY, i = new Date().getTime(), l = !0
        }

        function u(v) {
            if (!l || !i) return;
            l = !1;
            const h = v.changedTouches[0],
                f = h.screenX - s,
                g = h.screenY - o;
            if (new Date().getTime() - i < r && Math.abs(f) >= n && Math.abs(g) <= a) {
                const y = {
                    toLeft: !1,
                    toRight: !1
                };
                f < 0 ? y.toLeft = !0 : y.toRight = !0, t(y)
            }
        }
        return lt(e, "touchstart", c, {
            passive: !0
        }), lt(e, "touchend", u, {
            passive: !0
        }), () => {
            it(e, "touchstart", c), it(e, "touchend", u)
        }
    },
    Cr = {},
    cD = (e, t = 10) => {
        Cr[e] = Date.now() + t
    },
    fD = (e, t) => {
        if (e in Cr) {
            const r = Cr[e];
            if (Date.now() < r) return;
            delete Cr[e]
        }
        t()
    },
    dD = { ...Eo,
        view: {
            type: String,
            default: "monthly",
            validator(e) {
                return ["daily", "weekly", "monthly"].includes(e)
            }
        },
        rows: {
            type: Number,
            default: 1
        },
        columns: {
            type: Number,
            default: 1
        },
        step: Number,
        titlePosition: {
            type: String,
            default: () => ut("titlePosition")
        },
        navVisibility: {
            type: String,
            default: () => ut("navVisibility")
        },
        showWeeknumbers: [Boolean, String],
        showIsoWeeknumbers: [Boolean, String],
        expanded: Boolean,
        borderless: Boolean,
        transparent: Boolean,
        initialPage: Object,
        initialPagePosition: {
            type: Number,
            default: 1
        },
        minPage: Object,
        maxPage: Object,
        transition: String,
        attributes: Array,
        trimWeeks: Boolean,
        disablePageSwipe: Boolean
    },
    vD = ["dayclick", "daymouseenter", "daymouseleave", "dayfocusin", "dayfocusout", "daykeydown", "weeknumberclick", "transition-start", "transition-end", "did-move", "update:view", "update:pages"],
    Lo = "__vc_calendar_context__";

function hD(e, {
    emit: t,
    slots: r
}) {
    const n = se(null),
        a = se(null),
        s = se(null),
        o = se(new Date().getDate()),
        i = se(!1),
        l = se(Er()),
        c = se(Er()),
        u = se(e.view),
        v = se([]),
        h = se("");
    let f = null,
        g = null;
    const {
        theme: p,
        color: y,
        displayMode: m,
        locale: T,
        masks: x,
        disabledAttribute: _,
        disabledDates: A
    } = lD(e), E = b(() => e.rows * e.columns), I = b(() => e.step || E.value), D = b(() => vo(v.value) ? ? null), $ = b(() => Ct(v.value) ? ? null), w = b(() => e.minPage || (e.minDate ? U(e.minDate) : null)), C = b(() => e.maxPage || (e.maxDate ? U(e.maxDate) : null)), k = b(() => e.navVisibility), N = b(() => !!e.showWeeknumbers), z = b(() => !!e.showIsoWeeknumbers), L = b(() => u.value === "monthly"), V = b(() => u.value === "weekly"), Z = b(() => u.value === "daily"), te = () => {
        i.value = !0, t("transition-start")
    }, q = () => {
        i.value = !1, t("transition-end"), f && (f.resolve(!0), f = null)
    }, O = (M, Y, j = u.value) => Co(M, Y, j, T.value), U = M => Yo(M, u.value, T.value), le = M => {
        !_.value || !ae.value || (M.isDisabled = ae.value.cellExists(_.value.key, M.dayIndex))
    }, fe = M => {
        M.isFocusable = M.inMonth && M.day === o.value
    }, H = (M, Y) => {
        for (const j of M)
            for (const d of j.days)
                if (Y(d) === !1) return
    }, re = b(() => v.value.reduce((M, Y) => (M.push(...Y.viewDays), M), [])), X = b(() => {
        const M = [];
        return (e.attributes || []).forEach((Y, j) => {
            if (!Y || !Y.dates) return;
            const d = ea(Y, "key") ? Y.key : j,
                P = Y.order || 0;
            M.push(new Io({ ...Y,
                key: d,
                order: P
            }, p.value, T.value))
        }), _.value && M.push(_.value), M
    }), ue = b(() => Ze(X.value)), ae = b(() => {
        const M = new aD;
        return X.value.forEach(Y => {
            Y.ranges.forEach(j => {
                M.render(Y, j, re.value)
            })
        }), M
    }), J = b(() => re.value.reduce((M, Y) => (M[Y.dayIndex] = {
        day: Y,
        cells: []
    }, M[Y.dayIndex].cells.push(...ae.value.getCells(Y)), M), {})), _e = (M, Y) => {
        const j = e.showWeeknumbers || e.showIsoWeeknumbers;
        return j == null ? "" : pu(j) ? j ? "left" : "" : j.startsWith("right") ? Y > 1 ? "right" : j : M > 1 ? "left" : j
    }, pe = () => {
        var M, Y;
        if (!ue.value) return null;
        const j = X.value.find(W => W.pinPage) || X.value[0];
        if (!j || !j.hasRanges) return null;
        const [d] = j.ranges, P = ((M = d.start) == null ? void 0 : M.date) || ((Y = d.end) == null ? void 0 : Y.date);
        return P ? U(P) : null
    }, Oe = () => {
        if (je(D.value)) return D.value;
        const M = pe();
        return je(M) ? M : U(new Date)
    }, ke = (M, Y = {}) => {
        const {
            view: j = u.value,
            position: d = 1,
            force: P
        } = Y, W = d > 0 ? 1 - d : -(E.value + d);
        let K = O(M, W, j),
            ie = O(K, E.value - 1, j);
        return P || (On(K, w.value) ? K = w.value : Ur(ie, C.value) && (K = O(C.value, 1 - E.value)), ie = O(K, E.value - 1)), {
            fromPage: K,
            toPage: ie
        }
    }, ft = (M, Y, j = "") => {
        if (j === "none" || j === "fade") return j;
        if (M ? .view !== Y ? .view) return "fade";
        const d = Ur(Y, M),
            P = On(Y, M);
        return !d && !P ? "fade" : j === "slide-v" ? P ? "slide-down" : "slide-up" : P ? "slide-right" : "slide-left"
    }, Fe = (M = {}) => new Promise((Y, j) => {
        const {
            position: d = 1,
            force: P = !1,
            transition: W
        } = M, K = je(M.page) ? M.page : Oe(), {
            fromPage: ie
        } = ke(K, {
            position: d,
            force: P
        }), Ie = [];
        for (let ge = 0; ge < E.value; ge++) {
            const Tt = O(ie, ge),
                Xt = ge + 1,
                br = Math.ceil(Xt / e.columns),
                Pe = e.rows - br + 1,
                wr = Xt % e.columns || e.columns,
                Jt = e.columns - wr + 1,
                cn = _e(wr, Jt);
            Ie.push(T.value.getPage({ ...Tt,
                view: u.value,
                titlePosition: e.titlePosition,
                trimWeeks: e.trimWeeks,
                position: Xt,
                row: br,
                rowFromEnd: Pe,
                column: wr,
                columnFromEnd: Jt,
                showWeeknumbers: N.value,
                showIsoWeeknumbers: z.value,
                weeknumberPosition: cn
            }))
        }
        h.value = ft(v.value[0], Ie[0], W), v.value = Ie, h.value && h.value !== "none" ? f = {
            resolve: Y,
            reject: j
        } : Y(!0)
    }), dt = M => {
        const Y = D.value ? ? U(new Date);
        return O(Y, M)
    }, nt = (M, Y = {}) => {
        const j = je(M) ? M : U(M);
        return Object.assign(Y, ke(j, { ...Y,
            force: !0
        })), tD(Y.fromPage, Y.toPage, u.value, T.value).map(P => So(P, w.value, C.value)).every(P => P)
    }, vt = (M, Y = {}) => nt(dt(M), Y), Gt = b(() => vt(-I.value)), Ae = b(() => vt(I.value)), He = async (M, Y = {}) => !Y.force && !nt(M, Y) ? !1 : (Y.fromPage && !eD(Y.fromPage, D.value) && (a.value && a.value.hide({
        hideDelay: 0
    }), Y.view && (cD("view", 10), u.value = Y.view), await Fe({ ...Y,
        page: Y.fromPage,
        position: 1,
        force: !0
    }), t("did-move", v.value)), !0), at = (M, Y = {}) => He(dt(M), Y), ht = () => at(-I.value), st = () => at(I.value), qe = M => {
        const Y = L.value ? ".in-month" : "",
            j = `.id-${T.value.getDayId(M)}${Y}`,
            d = `${j}.vc-focusable, ${j} .vc-focusable`,
            P = n.value;
        if (P) {
            const W = P.querySelector(d);
            if (W) return W.focus(), !0
        }
        return !1
    }, pt = async (M, Y = {}) => qe(M) ? !0 : (await He(M, Y), qe(M)), kt = (M, Y) => {
        o.value = M.day, t("dayclick", M, Y)
    }, Pt = (M, Y) => {
        t("daymouseenter", M, Y)
    }, sn = (M, Y) => {
        t("daymouseleave", M, Y)
    }, qt = (M, Y) => {
        o.value = M.day, s.value = M, M.isFocused = !0, t("dayfocusin", M, Y)
    }, on = (M, Y) => {
        s.value = null, M.isFocused = !1, t("dayfocusout", M, Y)
    }, Zt = (M, Y) => {
        t("daykeydown", M, Y);
        const j = M.noonDate;
        let d = null;
        switch (Y.key) {
            case "ArrowLeft":
                {
                    d = me(j, -1);
                    break
                }
            case "ArrowRight":
                {
                    d = me(j, 1);
                    break
                }
            case "ArrowUp":
                {
                    d = me(j, -7);
                    break
                }
            case "ArrowDown":
                {
                    d = me(j, 7);
                    break
                }
            case "Home":
                {
                    d = me(j, -M.weekdayPosition + 1);
                    break
                }
            case "End":
                {
                    d = me(j, M.weekdayPositionFromEnd);
                    break
                }
            case "PageUp":
                {
                    Y.altKey ? d = is(j, -1) : d = zr(j, -1);
                    break
                }
            case "PageDown":
                {
                    Y.altKey ? d = is(j, 1) : d = zr(j, 1);
                    break
                }
        }
        d && (Y.preventDefault(), pt(d).catch())
    }, ln = M => {
        const Y = s.value;
        Y != null && Zt(Y, M)
    }, un = (M, Y) => {
        t("weeknumberclick", M, Y)
    };
    Fe({
        page: e.initialPage,
        position: e.initialPagePosition
    }), qr(() => {
        !e.disablePageSwipe && n.value && (g = uD(n.value, ({
            toLeft: M = !1,
            toRight: Y = !1
        }) => {
            M ? st() : Y && ht()
        }, ut("touch")))
    }), Tn(() => {
        v.value = [], g && g()
    }), ye(() => T.value, () => {
        Fe()
    }), ye(() => E.value, () => Fe()), ye(() => e.view, () => u.value = e.view), ye(() => u.value, () => {
        fD("view", () => {
            Fe()
        }), t("update:view", u.value)
    }), ye(() => o.value, () => {
        H(v.value, M => fe(M))
    }), Uo(() => {
        t("update:pages", v.value), H(v.value, M => {
            le(M), fe(M)
        })
    });
    const gr = {
        emit: t,
        slots: r,
        containerRef: n,
        navPopoverRef: a,
        focusedDay: s,
        inTransition: i,
        navPopoverId: l,
        dayPopoverId: c,
        view: u,
        pages: v,
        transitionName: h,
        theme: p,
        color: y,
        displayMode: m,
        locale: T,
        masks: x,
        attributes: X,
        disabledAttribute: _,
        disabledDates: A,
        attributeContext: ae,
        days: re,
        dayCells: J,
        count: E,
        step: I,
        firstPage: D,
        lastPage: $,
        canMovePrev: Gt,
        canMoveNext: Ae,
        minPage: w,
        maxPage: C,
        isMonthly: L,
        isWeekly: V,
        isDaily: Z,
        navVisibility: k,
        showWeeknumbers: N,
        showIsoWeeknumbers: z,
        getDateAddress: U,
        canMove: nt,
        canMoveBy: vt,
        move: He,
        moveBy: at,
        movePrev: ht,
        moveNext: st,
        onTransitionBeforeEnter: te,
        onTransitionAfterEnter: q,
        tryFocusDate: qe,
        focusDate: pt,
        onKeydown: ln,
        onDayKeydown: Zt,
        onDayClick: kt,
        onDayMouseenter: Pt,
        onDayMouseleave: sn,
        onDayFocusin: qt,
        onDayFocusout: on,
        onWeeknumberClick: un
    };
    return Zr(Lo, gr), gr
}

function Ot() {
    const e = Cn(Lo);
    if (e) return e;
    throw new Error("Calendar context missing. Please verify this component is nested within a valid context provider.")
}
const pD = {
        inheritAttrs: !1
    },
    It = Ne({ ...pD,
        __name: "CalendarSlot",
        props: {
            name: null
        },
        setup(e) {
            const {
                slots: t
            } = Ot();
            return (r, n) => S(t)[e.name] ? (F(), Ve(Ds(S(t)[e.name]), bs(hr({
                key: 0
            }, r.$attrs)), null, 16)) : wt(r.$slots, "default", {
                key: 1
            })
        }
    });

function kn(e) {
    document && document.dispatchEvent(new CustomEvent("show-popover", {
        detail: e
    }))
}

function Gr(e) {
    document && document.dispatchEvent(new CustomEvent("hide-popover", {
        detail: e
    }))
}

function Ro(e) {
    document && document.dispatchEvent(new CustomEvent("toggle-popover", {
        detail: e
    }))
}

function Fo(e) {
    const {
        visibility: t
    } = e, r = t === "click", n = t === "hover", a = t === "hover-focus", s = t === "focus";
    e.autoHide = !r;
    let o = !1,
        i = !1;
    const l = g => {
            r && (Ro({ ...e,
                target: e.target || g.currentTarget
            }), g.stopPropagation())
        },
        c = g => {
            o || (o = !0, (n || a) && kn({ ...e,
                target: e.target || g.currentTarget
            }))
        },
        u = () => {
            o && (o = !1, (n || a && !i) && Gr(e))
        },
        v = g => {
            i || (i = !0, (s || a) && kn({ ...e,
                target: e.target || g.currentTarget
            }))
        },
        h = g => {
            i && !Pr(g.currentTarget, g.relatedTarget) && (i = !1, (s || a && !o) && Gr(e))
        },
        f = {};
    switch (e.visibility) {
        case "click":
            f.click = l;
            break;
        case "hover":
            f.mousemove = c, f.mouseleave = u;
            break;
        case "focus":
            f.focusin = v, f.focusout = h;
            break;
        case "hover-focus":
            f.mousemove = c, f.mouseleave = u, f.focusin = v, f.focusout = h;
            break
    }
    return f
}
const ms = e => {
        const t = xr(e);
        if (t == null) return;
        const r = t.popoverHandlers;
        !r || !r.length || (r.forEach(n => n()), delete t.popoverHandlers)
    },
    ys = (e, t) => {
        const r = xr(e);
        if (r == null) return;
        const n = [],
            a = Fo(t);
        Object.entries(a).forEach(([s, o]) => {
            n.push(lt(r, s, o))
        }), r.popoverHandlers = n
    },
    Ho = {
        mounted(e, t) {
            const {
                value: r
            } = t;
            r && ys(e, r)
        },
        updated(e, t) {
            const {
                oldValue: r,
                value: n
            } = t, a = r ? .visibility, s = n ? .visibility;
            a !== s && (a && (ms(e), s || Gr(r)), s && ys(e, n))
        },
        unmounted(e) {
            ms(e)
        }
    },
    mD = ["disabled"],
    yD = {
        key: 1,
        type: "button",
        class: "vc-title"
    },
    gD = ["disabled"],
    Wo = Ne({
        __name: "CalendarHeader",
        props: {
            page: {
                type: Object,
                required: !0
            },
            layout: String,
            isLg: Boolean,
            isXl: Boolean,
            is2xl: Boolean,
            hideTitle: Boolean,
            hideArrows: Boolean
        },
        setup(e) {
            const t = e,
                {
                    navPopoverId: r,
                    navVisibility: n,
                    canMovePrev: a,
                    movePrev: s,
                    canMoveNext: o,
                    moveNext: i
                } = Ot(),
                l = b(() => {
                    switch (t.page.titlePosition) {
                        case "left":
                            return "bottom-start";
                        case "right":
                            return "bottom-end";
                        default:
                            return "bottom"
                    }
                }),
                c = b(() => {
                    const {
                        page: p
                    } = t;
                    return {
                        id: r.value,
                        visibility: n.value,
                        placement: l.value,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: ["bottom"]
                            }
                        }],
                        data: {
                            page: p
                        },
                        isInteractive: !0
                    }
                }),
                u = b(() => t.page.titlePosition.includes("left")),
                v = b(() => t.page.titlePosition.includes("right")),
                h = b(() => t.layout ? t.layout : u.value ? "tu-pn" : v.value ? "pn-tu" : "p-tu-n;"),
                f = b(() => ({
                    prev: h.value.includes("p") && !t.hideArrows,
                    title: h.value.includes("t") && !t.hideTitle,
                    next: h.value.includes("n") && !t.hideArrows
                })),
                g = b(() => ({
                    gridTemplateColumns: h.value.split("").map(y => {
                        switch (y) {
                            case "p":
                                return "[prev] auto";
                            case "n":
                                return "[next] auto";
                            case "t":
                                return "[title] auto";
                            case "-":
                                return "1fr";
                            default:
                                return ""
                        }
                    }).join(" ")
                }));
            return (p, y) => (F(), B("div", {
                class: ce(["vc-header", {
                    "is-lg": e.isLg,
                    "is-xl": e.isXl,
                    "is-2xl": e.is2xl
                }]),
                style: ir(S(g))
            }, [S(f).prev ? (F(), B("button", {
                key: 0,
                type: "button",
                class: "vc-arrow vc-prev vc-focus",
                disabled: !S(a),
                onClick: y[0] || (y[0] = (...m) => S(s) && S(s)(...m)),
                onKeydown: y[1] || (y[1] = ia((...m) => S(s) && S(s)(...m), ["space", "enter"]))
            }, [oe(It, {
                name: "header-prev-button",
                disabled: !S(a)
            }, {
                default: xe(() => [oe(Rt, {
                    name: "ChevronLeft",
                    size: "24"
                })]),
                _: 1
            }, 8, ["disabled"])], 40, mD)) : de("", !0), S(f).title ? ws((F(), B("button", yD, [oe(It, {
                name: "header-title",
                title: e.page.title
            }, {
                default: xe(() => [G("span", null, be(e.page.title), 1)]),
                _: 1
            }, 8, ["title"])])), [
                [S(Ho), S(c)]
            ]) : de("", !0), S(f).next ? (F(), B("button", {
                key: 2,
                type: "button",
                class: "vc-arrow vc-next vc-focus",
                disabled: !S(o),
                onClick: y[2] || (y[2] = (...m) => S(i) && S(i)(...m)),
                onKeydown: y[3] || (y[3] = ia((...m) => S(i) && S(i)(...m), ["space", "enter"]))
            }, [oe(It, {
                name: "header-next-button",
                disabled: !S(o)
            }, {
                default: xe(() => [oe(Rt, {
                    name: "ChevronRight",
                    size: "24"
                })]),
                _: 1
            }, 8, ["disabled"])], 40, gD)) : de("", !0)], 6))
        }
    }),
    bD = Ne({
        directives: {
            popover: Ho
        },
        components: {
            CalendarSlot: It
        },
        props: {
            day: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const {
                locale: t,
                theme: r,
                attributeContext: n,
                dayPopoverId: a,
                slots: s,
                onDayClick: o,
                onDayMouseenter: i,
                onDayMouseleave: l,
                onDayFocusin: c,
                onDayFocusout: u,
                onDayKeydown: v
            } = Ot(), h = b(() => e.day), f = b(() => n.value.getCells(h.value)), g = b(() => f.value.map(L => L.data)), p = b(() => ({ ...h.value,
                attributes: g.value,
                attributeCells: f.value
            }));

            function y({
                data: L
            }, {
                popovers: V
            }) {
                const {
                    key: Z,
                    customData: te,
                    popover: q
                } = L;
                if (!q) return;
                const O = Xa({
                    key: Z,
                    customData: te,
                    attribute: L
                }, { ...q
                }, {
                    visibility: q.label ? "hover" : "click",
                    placement: "bottom",
                    isInteractive: !q.label
                });
                V.splice(0, 0, O)
            }
            const m = b(() => {
                    const L = { ...r.value.prepareRender({}),
                        popovers: []
                    };
                    return f.value.forEach(V => {
                        r.value.render(V, L), y(V, L)
                    }), L
                }),
                T = b(() => m.value.highlights),
                x = b(() => !!Ze(T.value)),
                _ = b(() => m.value.content),
                A = b(() => m.value.dots),
                E = b(() => !!Ze(A.value)),
                I = b(() => m.value.bars),
                D = b(() => !!Ze(I.value)),
                $ = b(() => m.value.popovers),
                w = b(() => $.value.map(L => L.attribute)),
                C = b(() => ["vc-day", ...h.value.classes, {
                    "vc-day-box-center-center": !s["day-content"]
                }, {
                    "is-not-in-month": !e.day.inMonth
                }]),
                k = b(() => {
                    let L;
                    h.value.isFocusable ? L = "0" : L = "-1";
                    const V = ["vc-day-content vc-focusable vc-focus vc-attr", {
                            "vc-disabled": h.value.isDisabled
                        }, gt(Ct(T.value), "contentClass"), gt(Ct(_.value), "class") || ""],
                        Z = { ...gt(Ct(T.value), "contentStyle"),
                            ...gt(Ct(_.value), "style")
                        };
                    return {
                        class: V,
                        style: Z,
                        tabindex: L,
                        "aria-label": h.value.ariaLabel,
                        "aria-disabled": !!h.value.isDisabled,
                        role: "button"
                    }
                }),
                N = b(() => ({
                    click(L) {
                        o(p.value, L)
                    },
                    mouseenter(L) {
                        i(p.value, L)
                    },
                    mouseleave(L) {
                        l(p.value, L)
                    },
                    focusin(L) {
                        c(p.value, L)
                    },
                    focusout(L) {
                        u(p.value, L)
                    },
                    keydown(L) {
                        v(p.value, L)
                    }
                })),
                z = b(() => Ze($.value) ? Xa({
                    id: a.value,
                    data: {
                        day: h,
                        attributes: w.value
                    }
                }, ...$.value) : null);
            return {
                attributes: g,
                attributeCells: f,
                bars: I,
                dayClasses: C,
                dayContentProps: k,
                dayContentEvents: N,
                dayPopover: z,
                glyphs: m,
                dots: A,
                hasDots: E,
                hasBars: D,
                highlights: T,
                hasHighlights: x,
                locale: t,
                popovers: $
            }
        }
    }),
    wD = {
        key: 0,
        class: "vc-highlights vc-day-layer"
    },
    DD = {
        key: 1,
        class: "vc-day-layer vc-day-box-center-bottom"
    },
    $D = {
        class: "vc-dots"
    },
    _D = {
        key: 2,
        class: "vc-day-layer vc-day-box-center-bottom"
    },
    MD = {
        class: "vc-bars"
    };

function OD(e, t, r, n, a, s) {
    const o = yt("CalendarSlot"),
        i = Ko("popover");
    return F(), B("div", {
        class: ce(e.dayClasses)
    }, [e.hasHighlights ? (F(), B("div", wD, [(F(!0), B(we, null, Be(e.highlights, ({
        key: l,
        wrapperClass: c,
        class: u,
        style: v
    }) => (F(), B("div", {
        key: l,
        class: ce(c)
    }, [G("div", {
        class: ce(u),
        style: ir(v)
    }, null, 6)], 2))), 128))])) : de("", !0), oe(o, {
        name: "day-content",
        day: e.day,
        attributes: e.attributes,
        "attribute-cells": e.attributeCells,
        dayProps: e.dayContentProps,
        dayEvents: e.dayContentEvents,
        locale: e.locale
    }, {
        default: xe(() => [ws((F(), B("div", hr(e.dayContentProps, Go(e.dayContentEvents, !0)), [Yn(be(e.day.label), 1)], 16)), [
            [i, e.dayPopover]
        ])]),
        _: 1
    }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]), e.hasDots ? (F(), B("div", DD, [G("div", $D, [(F(!0), B(we, null, Be(e.dots, ({
        key: l,
        class: c,
        style: u
    }) => (F(), B("span", {
        key: l,
        class: ce(c),
        style: ir(u)
    }, null, 6))), 128))])])) : de("", !0), e.hasBars ? (F(), B("div", _D, [G("div", MD, [(F(!0), B(we, null, Be(e.bars, ({
        key: l,
        class: c,
        style: u
    }) => (F(), B("span", {
        key: l,
        class: ce(c),
        style: ir(u)
    }, null, 6))), 128))])])) : de("", !0)], 2)
}
const kD = et(bD, [
        ["render", OD]
    ]),
    PD = {
        name: "CalendarPane",
        inheritAttrs: !1,
        components: {
            CalendarHeader: Wo,
            CalendarDay: kD
        },
        props: {
            page: {
                type: Object,
                required: !0
            }
        },
        setup() {
            const {
                onWeeknumberClick: e
            } = Ot();
            return {
                onWeeknumberClick: e
            }
        }
    },
    TD = {
        class: "vc-weekdays"
    },
    YD = ["onClick"];

function CD(e, t, r, n, a, s) {
    const o = yt("CalendarHeader"),
        i = yt("CalendarDay");
    return F(), B("div", {
        class: ce(["vc-pane", `row-${r.page.row}`, `row-from-end-${r.page.rowFromEnd}`, `column-${r.page.column}`, `column-from-end-${r.page.columnFromEnd}`]),
        ref: "pane"
    }, [oe(o, {
        page: r.page,
        "is-lg": "",
        "hide-arrows": ""
    }, null, 8, ["page"]), G("div", {
        class: ce(["vc-weeks", {
            [`vc-show-weeknumbers-${r.page.weeknumberPosition}`]: r.page.weeknumberPosition
        }])
    }, [G("div", TD, [(F(!0), B(we, null, Be(r.page.weekdays, ({
        weekday: l,
        label: c
    }, u) => (F(), B("div", {
        key: u,
        class: ce(`vc-weekday vc-weekday-${l}`)
    }, be(c), 3))), 128))]), (F(!0), B(we, null, Be(r.page.viewWeeks, l => (F(), B("div", {
        key: `weeknumber-${l.weeknumber}`,
        class: "vc-week"
    }, [r.page.weeknumberPosition ? (F(), B("div", {
        key: 0,
        class: ce(["vc-weeknumber", `is-${r.page.weeknumberPosition}`])
    }, [G("span", {
        class: ce(["vc-weeknumber-content"]),
        onClick: c => n.onWeeknumberClick(l, c)
    }, be(l.weeknumberDisplay), 9, YD)], 2)) : de("", !0), (F(!0), B(we, null, Be(l.days, c => (F(), Ve(i, {
        key: c.id,
        day: c
    }, null, 8, ["day"]))), 128))]))), 128))], 2)], 2)
}
const SD = et(PD, [
        ["render", CD]
    ]),
    AD = Ne({
        name: "Popover",
        inheritAttrs: !1,
        emits: ["before-show", "after-show", "before-hide", "after-hide"],
        props: {
            id: {
                type: String,
                required: !0
            },
            showDelay: {
                type: Number,
                default: 0
            },
            hideDelay: {
                type: Number,
                default: 110
            },
            boundarySelector: {
                type: String
            }
        },
        setup(e, {
            emit: t
        }) {
            let r;
            const n = se();
            let a = null,
                s = null;
            const o = Pn({
                isVisible: !1,
                target: null,
                data: null,
                transition: "slide-fade",
                placement: "bottom",
                direction: "",
                positionFixed: !1,
                modifiers: [],
                isInteractive: !0,
                visibility: "click",
                isHovered: !1,
                isFocused: !1,
                autoHide: !1,
                force: !1
            });

            function i(O) {
                O && (o.direction = O.split("-")[0])
            }

            function l({
                placement: O,
                options: U
            }) {
                i(O || U ? .placement)
            }
            const c = b(() => ({
                    placement: o.placement,
                    strategy: o.positionFixed ? "fixed" : "absolute",
                    boundary: "",
                    modifiers: [{
                        name: "onUpdate",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: l
                    }, ...o.modifiers || []],
                    onFirstUpdate: l
                })),
                u = b(() => {
                    const O = o.direction === "left" || o.direction === "right";
                    let U = "";
                    if (o.placement) {
                        const le = o.placement.split("-");
                        le.length > 1 && (U = le[1])
                    }
                    return ["start", "top", "left"].includes(U) ? O ? "top" : "left" : ["end", "bottom", "right"].includes(U) ? O ? "bottom" : "right" : O ? "middle" : "center"
                });

            function v() {
                s && (s.destroy(), s = null)
            }

            function h() {
                ar(() => {
                    const O = xr(o.target);
                    !O || !n.value || (s && s.state.elements.reference !== O && v(), s ? s.update() : s = el(O, n.value, c.value))
                })
            }

            function f(O) {
                Object.assign(o, ho(O, "force"))
            }

            function g(O, U) {
                clearTimeout(r), O > 0 ? r = setTimeout(U, O) : U()
            }

            function p(O) {
                return !O || !s ? !1 : xr(O) === s.state.elements.reference
            }
            async function y(O = {}) {
                o.force || (O.force && (o.force = !0), g(O.showDelay ? ? e.showDelay, () => {
                    o.isVisible && (o.force = !1, t("after-show")), f({ ...O,
                        isVisible: !0
                    }), h()
                }))
            }

            function m(O = {}) {
                s && (O.target && !p(O.target) || o.force || (O.force && (o.force = !0), g(O.hideDelay ? ? e.hideDelay, () => {
                    o.isVisible || (o.force = !1), o.isVisible = !1
                })))
            }

            function T(O = {}) {
                O.target != null && (o.isVisible && p(O.target) ? m(O) : y(O))
            }

            function x(O) {
                if (!s) return;
                const U = s.state.elements.reference;
                if (!n.value || !U) return;
                const le = O.target;
                Pr(n.value, le) || Pr(U, le) || m({
                    force: !0
                })
            }

            function _(O) {
                (O.key === "Esc" || O.key === "Escape") && m()
            }

            function A({
                detail: O
            }) {
                !O.id || O.id !== e.id || y(O)
            }

            function E({
                detail: O
            }) {
                !O.id || O.id !== e.id || m(O)
            }

            function I({
                detail: O
            }) {
                !O.id || O.id !== e.id || T(O)
            }

            function D() {
                lt(document, "keydown", _), lt(document, "click", x), lt(document, "show-popover", A), lt(document, "hide-popover", E), lt(document, "toggle-popover", I)
            }

            function $() {
                it(document, "keydown", _), it(document, "click", x), it(document, "show-popover", A), it(document, "hide-popover", E), it(document, "toggle-popover", I)
            }

            function w(O) {
                t("before-show", O)
            }

            function C(O) {
                o.force = !1, t("after-show", O)
            }

            function k(O) {
                t("before-hide", O)
            }

            function N(O) {
                o.force = !1, v(), t("after-hide", O)
            }

            function z(O) {
                O.stopPropagation()
            }

            function L() {
                o.isHovered = !0, o.isInteractive && ["hover", "hover-focus"].includes(o.visibility) && y()
            }

            function V() {
                if (o.isHovered = !1, !s) return;
                const O = s.state.elements.reference;
                o.autoHide && !o.isFocused && (!O || O !== document.activeElement) && ["hover", "hover-focus"].includes(o.visibility) && m()
            }

            function Z() {
                o.isFocused = !0, o.isInteractive && ["focus", "hover-focus"].includes(o.visibility) && y()
            }

            function te(O) {
                ["focus", "hover-focus"].includes(o.visibility) && (!O.relatedTarget || !Pr(n.value, O.relatedTarget)) && (o.isFocused = !1, !o.isHovered && o.autoHide && m())
            }

            function q() {
                a != null && (a.disconnect(), a = null)
            }
            return ye(() => n.value, O => {
                q(), O && (a = new ResizeObserver(() => {
                    s && s.update()
                }), a.observe(O))
            }), ye(() => o.placement, i, {
                immediate: !0
            }), qr(() => {
                D()
            }), Tn(() => {
                v(), q(), $()
            }), { ...Bo(o),
                popoverRef: n,
                alignment: u,
                hide: m,
                setupPopper: h,
                beforeEnter: w,
                afterEnter: C,
                beforeLeave: k,
                afterLeave: N,
                onClick: z,
                onMouseOver: L,
                onMouseLeave: V,
                onFocusIn: Z,
                onFocusOut: te
            }
        }
    });

function ID(e, t, r, n, a, s) {
    return F(), B("div", {
        class: ce(["vc-popover-content-wrapper", {
            "is-interactive": e.isInteractive
        }]),
        ref: "popoverRef",
        onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
        onMouseover: t[1] || (t[1] = (...o) => e.onMouseOver && e.onMouseOver(...o)),
        onMouseleave: t[2] || (t[2] = (...o) => e.onMouseLeave && e.onMouseLeave(...o)),
        onFocusin: t[3] || (t[3] = (...o) => e.onFocusIn && e.onFocusIn(...o)),
        onFocusout: t[4] || (t[4] = (...o) => e.onFocusOut && e.onFocusOut(...o))
    }, [oe(gs, {
        name: `vc-${e.transition}`,
        appear: "",
        onBeforeEnter: e.beforeEnter,
        onAfterEnter: e.afterEnter,
        onBeforeLeave: e.beforeLeave,
        onAfterLeave: e.afterLeave
    }, {
        default: xe(() => [e.isVisible ? (F(), B("div", hr({
            key: 0,
            tabindex: "-1",
            class: `vc-popover-content direction-${e.direction}`
        }, e.$attrs), [wt(e.$slots, "default", {
            direction: e.direction,
            alignment: e.alignment,
            data: e.data,
            hide: e.hide
        }, () => [Yn(be(e.data), 1)]), G("span", {
            class: ce(["vc-popover-caret", `direction-${e.direction}`, `align-${e.alignment}`])
        }, null, 2)], 16)) : de("", !0)]),
        _: 3
    }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])], 34)
}
const sa = et(AD, [
        ["render", ID]
    ]),
    xD = {
        value: {
            type: Object,
            required: !0
        }
    },
    ED = ["input"],
    ND = "__vc_calendar_nav_context__";

function LD(e, {
    emit: t
}) {
    const r = se(!0),
        n = se(0),
        a = se(0),
        s = 12,
        o = se(null),
        {
            locale: i,
            masks: l,
            canMove: c,
            getDateAddress: u
        } = Ot();

    function v() {
        setTimeout(() => {
            if (o.value == null) return;
            const H = o.value.querySelector(".vc-nav-item:not(:disabled)");
            H && H.focus()
        }, 10)
    }

    function h(H, re) {
        t("input", {
            month: H,
            year: re
        }, {
            position: w.value
        })
    }

    function f(H) {
        n.value = H, r.value = !0, v()
    }

    function g(H) {
        const {
            year: re
        } = u(new Date), X = H * s, ue = X + s, ae = [];
        for (let J = X; J < ue; J += 1) {
            let _e = !1;
            for (let pe = 1; pe < 12 && (_e = c({
                    month: pe,
                    year: J
                }, {
                    position: w.value
                }), !_e); pe++);
            ae.push({
                year: J,
                id: J.toString(),
                label: J.toString(),
                ariaLabel: J.toString(),
                isActive: J === $.value,
                isCurrent: J === re,
                isDisabled: !_e,
                click: () => f(J)
            })
        }
        return ae
    }

    function p(H) {
        const {
            month: re,
            year: X
        } = u(new Date);
        return To().map((ue, ae) => {
            const J = ae + 1;
            return {
                month: J,
                year: H,
                id: `${H}.${Q(J,2)}`,
                label: i.value.formatDate(ue, l.value.navMonths),
                ariaLabel: i.value.formatDate(ue, "MMMM YYYY"),
                isActive: J === D.value && H === $.value,
                isCurrent: J === re && H === X,
                isDisabled: !c({
                    month: J,
                    year: H
                }, {
                    position: w.value
                }),
                click: () => h(J, H)
            }
        })
    }

    function y(H) {
        return Math.floor(H / s)
    }

    function m() {
        r.value = !r.value
    }

    function T() {
        te.value && (r.value && _(), E())
    }

    function x() {
        U.value && (r.value && A(), I())
    }

    function _() {
        n.value--
    }

    function A() {
        n.value++
    }

    function E() {
        a.value--
    }

    function I() {
        a.value++
    }
    const D = b(() => {
            var H;
            return ((H = e.value) == null ? void 0 : H.month) || 0
        }),
        $ = b(() => {
            var H;
            return ((H = e.value) == null ? void 0 : H.year) || 0
        }),
        w = b(() => {
            var H;
            return ((H = e.value) == null ? void 0 : H.position) || 1
        }),
        C = b(() => p(n.value)),
        k = b(() => g(a.value)),
        N = b(() => vo(k.value.map(H => H.year))),
        z = b(() => Ct(k.value.map(H => H.year))),
        L = b(() => r.value ? n.value : `${N.value} - ${z.value}`),
        V = b(() => p(n.value - 1).some(H => !H.isDisabled)),
        Z = b(() => g(a.value - 1).some(H => !H.isDisabled)),
        te = b(() => r.value ? V.value : Z.value),
        q = b(() => p(n.value + 1).some(H => !H.isDisabled)),
        O = b(() => g(a.value + 1).some(H => !H.isDisabled)),
        U = b(() => r.value ? q.value : O.value),
        le = b(() => r.value ? C.value : k.value);
    ye(() => $.value, () => {
        n.value = $.value
    }), ye(() => n.value, H => {
        a.value = y(H)
    }), n.value = $.value, qr(() => v());
    const fe = {
        navContainer: o,
        title: L,
        monthMode: r,
        currentMonth: D,
        currentYear: $,
        activeItems: le,
        prevItemsEnabled: te,
        nextItemsEnabled: U,
        toggleMode: m,
        movePrev: T,
        moveNext: x,
        movePrevYear: _,
        moveNextYear: A,
        movePrevYearGroup: E,
        moveNextYearGroup: I
    };
    return Zr(ND, fe), fe
}
const RD = {
        class: "vc-nav-header"
    },
    FD = ["disabled"],
    HD = ["disabled"],
    WD = {
        class: "vc-nav-items"
    },
    jD = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"],
    BD = Ne({
        __name: "CalendarNav",
        props: xD,
        emits: ED,
        setup(e, {
            emit: t
        }) {
            const r = e,
                {
                    navContainer: n,
                    title: a,
                    prevItemsEnabled: s,
                    nextItemsEnabled: o,
                    activeItems: i,
                    toggleMode: l,
                    movePrev: c,
                    moveNext: u
                } = LD(r, {
                    emit: t
                });
            return (v, h) => (F(), B("div", {
                class: "vc-nav-container",
                ref_key: "navContainer",
                ref: n
            }, [G("div", RD, [G("button", {
                type: "button",
                class: "vc-nav-arrow is-left vc-focus",
                disabled: !S(s),
                onClick: h[0] || (h[0] = (...f) => S(c) && S(c)(...f)),
                onKeydown: h[1] || (h[1] = f => S(Or)(f, S(c)))
            }, [oe(It, {
                name: "nav-prev-button",
                move: S(c),
                disabled: !S(s)
            }, {
                default: xe(() => [oe(Rt, {
                    name: "ChevronLeft",
                    width: "22px",
                    height: "24px"
                })]),
                _: 1
            }, 8, ["move", "disabled"])], 40, FD), G("button", {
                type: "button",
                class: "vc-nav-title vc-focus",
                onClick: h[2] || (h[2] = (...f) => S(l) && S(l)(...f)),
                onKeydown: h[3] || (h[3] = f => S(Or)(f, S(l)))
            }, be(S(a)), 33), G("button", {
                type: "button",
                class: "vc-nav-arrow is-right vc-focus",
                disabled: !S(o),
                onClick: h[4] || (h[4] = (...f) => S(u) && S(u)(...f)),
                onKeydown: h[5] || (h[5] = f => S(Or)(f, S(u)))
            }, [oe(It, {
                name: "nav-next-button",
                move: S(u),
                disabled: !S(o)
            }, {
                default: xe(() => [oe(Rt, {
                    name: "ChevronRight",
                    width: "22px",
                    height: "24px"
                })]),
                _: 1
            }, 8, ["move", "disabled"])], 40, HD)]), G("div", WD, [(F(!0), B(we, null, Be(S(i), f => (F(), B("button", {
                key: f.label,
                type: "button",
                "data-id": f.id,
                "aria-label": f.ariaLabel,
                class: ce(["vc-nav-item vc-focus", [f.isActive ? "is-active" : f.isCurrent ? "is-current" : ""]]),
                disabled: f.isDisabled,
                onClick: f.click,
                onKeydown: g => S(Or)(g, f.click)
            }, be(f.label), 43, jD))), 128))])], 512))
        }
    }),
    zD = {
        __name: "CalendarNavPopover",
        setup(e) {
            const {
                navPopoverId: t,
                color: r,
                displayMode: n,
                navPopoverRef: a,
                move: s
            } = Ot();
            return (o, i) => (F(), Ve(sa, {
                id: S(t),
                class: ce(["vc-nav-popover-container", `vc-${S(r)}`, `vc-${S(n)}`]),
                ref_key: "navPopoverRef",
                ref: a
            }, {
                default: xe(({
                    data: l
                }) => [oe(BD, {
                    value: l.page,
                    onInput: S(s)
                }, null, 8, ["value", "onInput"])]),
                _: 1
            }, 8, ["id", "class"]))
        }
    },
    VD = Ne({
        name: "PopoverRow",
        props: {
            attribute: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            return {
                indicator: b(() => {
                    const {
                        content: r,
                        highlight: n,
                        dot: a,
                        bar: s,
                        popover: o
                    } = e.attribute;
                    return o && o.hideIndicator ? null : r ? {
                        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${r.base.color}`
                    } : n ? {
                        class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${n.base.color}`
                    } : a ? {
                        class: `vc-dot vc-attr vc-${a.base.color}`
                    } : s ? {
                        class: `vc-bar vc-day-popover-row-bar vc-attr vc-${s.base.color}`
                    } : null
                })
            }
        }
    }),
    UD = {
        class: "vc-day-popover-row"
    },
    KD = {
        key: 0,
        class: "vc-day-popover-row-indicator"
    },
    GD = {
        class: "vc-day-popover-row-label"
    };

function qD(e, t, r, n, a, s) {
    return F(), B("div", UD, [e.indicator ? (F(), B("div", KD, [G("span", {
        class: ce(e.indicator.class)
    }, null, 2)])) : de("", !0), G("div", GD, [wt(e.$slots, "default", {}, () => [Yn(be(e.attribute.popover ? e.attribute.popover.label : "No content provided"), 1)])])])
}
const ZD = et(VD, [
        ["render", qD]
    ]),
    XD = {
        class: "vc-day-popover-container"
    },
    JD = {
        key: 0,
        class: "vc-day-popover-header"
    },
    QD = Ne({
        __name: "CalendarDayPopover",
        setup(e) {
            const {
                dayPopoverId: t,
                displayMode: r,
                color: n,
                masks: a,
                locale: s
            } = Ot();

            function o(l, c) {
                return s.value.formatDate(l, c)
            }

            function i(l) {
                return s.value.formatDate(l.date, a.value.dayPopover)
            }
            return (l, c) => (F(), Ve(sa, {
                id: S(t),
                class: ce([`vc-${S(n)}`, `vc-${S(r)}`])
            }, {
                default: xe(({
                    data: {
                        day: u,
                        attributes: v
                    },
                    hide: h
                }) => [wt(l.$slots, "default", {
                    day: u,
                    dayTitle: i(u),
                    attributes: v,
                    format: o,
                    masks: S(a),
                    hide: h
                }, () => [G("div", XD, [S(a).dayPopover ? (F(), B("div", JD, be(i(u)), 1)) : de("", !0), (F(!0), B(we, null, Be(v, f => (F(), Ve(ZD, {
                    key: f.key,
                    attribute: f
                }, null, 8, ["attribute"]))), 128))])])]),
                _: 3
            }, 8, ["id", "class"]))
        }
    }),
    e0 = Ne({
        name: "Calendar",
        components: {
            CalendarHeader: Wo,
            CalendarPane: SD,
            CalendarNavPopover: zD,
            CalendarDayPopover: QD
        },
        emits: vD,
        props: dD,
        setup(e, {
            emit: t,
            slots: r
        }) {
            return hD(e, {
                emit: t,
                slots: r
            })
        }
    }),
    t0 = {
        class: "vc-pane-header-wrapper"
    };

function r0(e, t, r, n, a, s) {
    const o = yt("CalendarHeader"),
        i = yt("CalendarPane"),
        l = yt("CalendarDayPopover"),
        c = yt("CalendarNavPopover");
    return F(), B(we, null, [G("div", hr({
        "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year"
    }, e.$attrs, {
        class: ["vc-container", `vc-${e.view}`, `vc-${e.color}`, `vc-${e.displayMode}`, {
            "vc-expanded": e.expanded,
            "vc-bordered": !e.borderless,
            "vc-transparent": e.transparent
        }],
        onMouseup: t[0] || (t[0] = zo(() => {}, ["prevent"])),
        ref: "containerRef"
    }), [G("div", {
        class: ce(["vc-pane-container", {
            "in-transition": e.inTransition
        }])
    }, [G("div", t0, [e.firstPage ? (F(), Ve(o, {
        key: 0,
        page: e.firstPage,
        "is-lg": "",
        "hide-title": ""
    }, null, 8, ["page"])) : de("", !0)]), oe(gs, {
        name: `vc-${e.transitionName}`,
        onBeforeEnter: e.onTransitionBeforeEnter,
        onAfterEnter: e.onTransitionAfterEnter
    }, {
        default: xe(() => [(F(), B("div", {
            key: e.pages[0].id,
            class: "vc-pane-layout",
            style: ir({
                gridTemplateColumns: `repeat(${e.columns}, 1fr)`
            })
        }, [(F(!0), B(we, null, Be(e.pages, u => (F(), Ve(i, {
            key: u.id,
            page: u
        }, null, 8, ["page"]))), 128))], 4))]),
        _: 1
    }, 8, ["name", "onBeforeEnter", "onAfterEnter"]), wt(e.$slots, "footer")], 2)], 16), oe(l, null, {
        default: xe(u => [wt(e.$slots, "day-popover", bs(Vo(u)))]),
        _: 3
    }), oe(c)], 64)
}
const n0 = et(e0, [
        ["render", r0]
    ]),
    a0 = {
        class: "vc-base-select"
    },
    s0 = ["value"],
    o0 = ["value", "disabled"],
    i0 = {
        inheritAttrs: !1
    },
    nr = Object.assign(i0, {
        __name: "BaseSelect",
        props: {
            options: Array,
            modelValue: null,
            alignRight: Boolean,
            alignLeft: Boolean,
            showIcon: Boolean,
            small: Boolean
        },
        emits: ["update:modelValue"],
        setup(e) {
            return (t, r) => (F(), B("div", a0, [e.showIcon ? (F(), Ve(Rt, {
                key: 0,
                name: "ChevronDown",
                size: e.small ? "16" : "18"
            }, null, 8, ["size"])) : de("", !0), G("select", hr(t.$attrs, {
                value: e.modelValue,
                class: ["vc-focus", {
                    "vc-has-icon": e.showIcon,
                    "vc-align-right": e.alignRight,
                    "vc-align-left": e.alignLeft,
                    "vc-small": e.small
                }],
                onChange: r[0] || (r[0] = n => t.$emit("update:modelValue", n.target.value))
            }), [(F(!0), B(we, null, Be(e.options, n => (F(), B("option", {
                key: n.value,
                value: n.value,
                disabled: n.disabled
            }, be(n.label), 9, o0))), 128))], 16, s0)]))
        }
    }),
    jo = "__vc_date_picker_context__",
    l0 = { ...Eo,
        mode: {
            type: String,
            default: "date"
        },
        modelValue: {
            type: [Number, String, Date, Object]
        },
        modelModifiers: {
            type: Object,
            default: () => ({})
        },
        rules: [String, Object],
        is24hr: Boolean,
        hideTimeHeader: Boolean,
        timeAccuracy: {
            type: Number,
            default: 2
        },
        isRequired: Boolean,
        isRange: Boolean,
        updateOnInput: {
            type: Boolean,
            default: () => ut("datePicker.updateOnInput")
        },
        inputDebounce: {
            type: Number,
            default: () => ut("datePicker.inputDebounce")
        },
        popover: {
            type: [Boolean, Object],
            default: !0
        },
        dragAttribute: Object,
        selectAttribute: Object,
        attributes: [Object, Array]
    },
    u0 = ["update:modelValue", "drag", "dayclick", "daykeydown", "popover-will-show", "popover-did-show", "popover-will-hide", "popover-did-hide"];

function c0(e, t) {
    const r = No(e),
        {
            locale: n,
            masks: a,
            disabledAttribute: s
        } = r,
        {
            emit: o
        } = t,
        i = se(!1),
        l = se(Er()),
        c = se(null),
        u = se(null),
        v = se(["", ""]),
        h = se(null),
        f = se(null);
    let g, p, y = !0;
    const m = b(() => e.isRange || e.modelModifiers.range === !0),
        T = b(() => m.value && c.value != null ? c.value.start : null),
        x = b(() => m.value && c.value != null ? c.value.end : null),
        _ = b(() => e.mode.toLowerCase() === "date"),
        A = b(() => e.mode.toLowerCase() === "datetime"),
        E = b(() => e.mode.toLowerCase() === "time"),
        I = b(() => !!u.value),
        D = b(() => {
            let d = "date";
            e.modelModifiers.number && (d = "number"), e.modelModifiers.string && (d = "string");
            const P = a.value.modelValue || "iso";
            return fe({
                type: d,
                mask: P
            })
        }),
        $ = b(() => Gt(u.value ? ? c.value)),
        w = b(() => E.value ? e.is24hr ? a.value.inputTime24hr : a.value.inputTime : A.value ? e.is24hr ? a.value.inputDateTime24hr : a.value.inputDateTime : a.value.input),
        C = b(() => /[Hh]/g.test(w.value)),
        k = b(() => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(w.value)),
        N = b(() => {
            if (C.value && k.value) return "dateTime";
            if (k.value) return "date";
            if (C.value) return "time"
        }),
        z = b(() => {
            var d;
            const P = ((d = h.value) == null ? void 0 : d.$el.previousElementSibling) ? ? void 0;
            return vr({}, e.popover, ut("datePicker.popover"), {
                target: P
            })
        }),
        L = b(() => Fo({ ...z.value,
            id: l.value
        })),
        V = b(() => m.value ? {
            start: v.value[0],
            end: v.value[1]
        } : v.value[0]),
        Z = b(() => {
            const d = ["start", "end"].map(P => ({
                input: dt(P),
                change: nt(P),
                keyup: vt,
                ...e.popover && L.value
            }));
            return m.value ? {
                start: d[0],
                end: d[1]
            } : d[0]
        }),
        te = b(() => {
            if (!X(c.value)) return null;
            const d = {
                    key: "select-drag",
                    ...e.selectAttribute,
                    dates: c.value,
                    pinPage: !0
                },
                {
                    dot: P,
                    bar: W,
                    highlight: K,
                    content: ie
                } = d;
            return !P && !W && !K && !ie && (d.highlight = !0), d
        }),
        q = b(() => {
            if (!m.value || !X(u.value)) return null;
            const d = {
                    key: "select-drag",
                    ...e.dragAttribute,
                    dates: u.value
                },
                {
                    dot: P,
                    bar: W,
                    highlight: K,
                    content: ie
                } = d;
            return !P && !W && !K && !ie && (d.highlight = {
                startEnd: {
                    fillMode: "outline"
                }
            }), d
        }),
        O = b(() => {
            const d = Ye(e.attributes) ? [...e.attributes] : [];
            return q.value ? d.unshift(q.value) : te.value && d.unshift(te.value), d
        }),
        U = b(() => fe(e.rules === "auto" ? le() : e.rules ? ? {}));

    function le() {
        const d = {
                ms: [0, 999],
                sec: [0, 59],
                min: [0, 59],
                hr: [0, 23]
            },
            P = _.value ? 0 : e.timeAccuracy;
        return [0, 1].map(W => {
            switch (P) {
                case 0:
                    return {
                        hours: d.hr[W],
                        minutes: d.min[W],
                        seconds: d.sec[W],
                        milliseconds: d.ms[W]
                    };
                case 1:
                    return {
                        minutes: d.min[W],
                        seconds: d.sec[W],
                        milliseconds: d.ms[W]
                    };
                case 3:
                    return {
                        milliseconds: d.ms[W]
                    };
                case 4:
                    return {};
                default:
                    return {
                        seconds: d.sec[W],
                        milliseconds: d.ms[W]
                    }
            }
        })
    }

    function fe(d) {
        return Ye(d) ? d.length === 1 ? [d[0], d[0]] : d : [d, d]
    }

    function H(d) {
        return fe(d).map((P, W) => ({ ...P,
            rules: U.value[W]
        }))
    }

    function re(d) {
        return Ee(d) ? !isNaN(d) : St(d) ? !isNaN(d.getTime()) : We(d) ? d !== "" : d != null
    }

    function X(d) {
        return m.value ? Je(d) && re(d.start) && re(d.end) : re(d)
    }

    function ue(d, P) {
        const W = St(d),
            K = St(P);
        return !W && !K ? !0 : W !== K ? !1 : d.getTime() === P.getTime()
    }

    function ae(d, P) {
        if (m.value) {
            const W = X(d),
                K = X(P);
            return !W && !K ? !0 : W !== K ? !1 : ue(d.start, P.start) && ue(d.end, P.end)
        }
        return ue(d, P)
    }

    function J(d) {
        return !X(d) || !s.value ? !1 : s.value.intersectsRange(n.value.range(d))
    }

    function _e(d, P, W, K) {
        if (!X(d)) return null;
        if (m.value) {
            const ie = n.value.toDate(d.start, { ...P[0],
                    fillDate: T.value ? ? void 0,
                    patch: W
                }),
                Ie = n.value.toDate(d.end, { ...P[1],
                    fillDate: x.value ? ? void 0,
                    patch: W
                });
            return Zt({
                start: ie,
                end: Ie
            }, K)
        }
        return n.value.toDateOrNull(d, { ...P[0],
            fillDate: c.value,
            patch: W
        })
    }

    function pe(d, P) {
        return m.value ? X(d) ? {
            start: n.value.fromDate(d.start, P[0]),
            end: n.value.fromDate(d.end, P[1])
        } : null : n.value.fromDate(d, P[0])
    }

    function Oe(d, P = {}) {
        return clearTimeout(g), new Promise(W => {
            const {
                debounce: K = 0,
                ...ie
            } = P;
            K > 0 ? g = window.setTimeout(() => {
                W(ke(d, ie))
            }, K) : W(ke(d, ie))
        })
    }

    function ke(d, {
        config: P = D.value,
        patch: W = "dateTime",
        clearIfEqual: K = !1,
        formatInput: ie = !0,
        hidePopover: Ie = !1,
        dragging: ge = I.value,
        targetPriority: Tt,
        moveToValue: Xt = !1
    } = {}) {
        const br = H(P);
        let Pe = _e(d, br, W, Tt);
        if (J(Pe)) {
            if (ge) return null;
            Pe = c.value, Ie = !1
        } else Pe == null && e.isRequired ? Pe = c.value : Pe != null && ae(c.value, Pe) && K && (Pe = null);
        const Jt = ge ? u : c,
            cn = !ae(Jt.value, Pe);
        Jt.value = Pe, ge || (u.value = null);
        const oa = pe(Pe, D.value);
        return cn && (y = !1, o(ge ? "drag" : "update:modelValue", oa), ar(() => y = !0)), Ie && !ge && qt(), ie && ft(), Xt && ar(() => M(Tt ? ? "start")), oa
    }

    function ft() {
        ar(() => {
            const d = H({
                    type: "string",
                    mask: w.value
                }),
                P = pe(u.value || c.value, d);
            m.value ? v.value = [P && P.start, P && P.end] : v.value = [P, ""]
        })
    }

    function Fe(d, P, W) {
        v.value.splice(P === "start" ? 0 : 1, 1, d);
        const K = m.value ? {
                start: v.value[0],
                end: v.value[1] || v.value[0]
            } : d,
            ie = {
                type: "string",
                mask: w.value
            };
        Oe(K, { ...W,
            config: ie,
            patch: N.value,
            targetPriority: P,
            moveToValue: !0
        })
    }

    function dt(d) {
        return P => {
            e.updateOnInput && Fe(P.currentTarget.value, d, {
                formatInput: !1,
                hidePopover: !1,
                debounce: e.inputDebounce
            })
        }
    }

    function nt(d) {
        return P => {
            Fe(P.currentTarget.value, d, {
                formatInput: !0,
                hidePopover: !1
            })
        }
    }

    function vt(d) {
        d.key === "Escape" && Oe(c.value, {
            formatInput: !0,
            hidePopover: !0
        })
    }

    function Gt(d) {
        return m.value ? [d && d.start ? n.value.getDateParts(d.start) : null, d && d.end ? n.value.getDateParts(d.end) : null] : [d ? n.value.getDateParts(d) : null]
    }

    function Ae() {
        u.value = null, ft()
    }

    function He(d) {
        o("popover-will-show", d)
    }

    function at(d) {
        o("popover-did-show", d)
    }

    function ht(d) {
        Ae(), o("popover-will-hide", d)
    }

    function st(d) {
        o("popover-did-hide", d)
    }

    function qe(d) {
        const P = {
            patch: "date",
            formatInput: !0,
            hidePopover: !0
        };
        if (m.value) {
            const W = !I.value;
            W ? p = {
                start: d.startDate,
                end: d.endDate
            } : p != null && (p.end = d.date), Oe(p, { ...P,
                dragging: W
            })
        } else Oe(d.date, { ...P,
            clearIfEqual: !e.isRequired
        })
    }

    function pt(d, P) {
        qe(d), o("dayclick", d, P)
    }

    function kt(d, P) {
        switch (P.key) {
            case " ":
            case "Enter":
                {
                    qe(d),
                    P.preventDefault();
                    break
                }
            case "Escape":
                qt()
        }
        o("daykeydown", d, P)
    }

    function Pt(d, P) {
        !I.value || p == null || (p.end = d.date, Oe(Zt(p), {
            patch: "date",
            formatInput: !0
        }))
    }

    function sn(d = {}) {
        kn({ ...z.value,
            ...d,
            isInteractive: !0,
            id: l.value
        })
    }

    function qt(d = {}) {
        Gr({
            hideDelay: 10,
            force: !0,
            ...z.value,
            ...d,
            id: l.value
        })
    }

    function on(d) {
        Ro({ ...z.value,
            ...d,
            isInteractive: !0,
            id: l.value
        })
    }

    function Zt(d, P) {
        const {
            start: W,
            end: K
        } = d;
        if (W > K) switch (P) {
            case "start":
                return {
                    start: W,
                    end: W
                };
            case "end":
                return {
                    start: K,
                    end: K
                };
            default:
                return {
                    start: K,
                    end: W
                }
        }
        return {
            start: W,
            end: K
        }
    }

    function ln(d) {
        if (X(c.value)) {
            const P = m.value ? d ? T.value : x.value : c.value;
            return Yo(P, "monthly", n.value)
        }
        return null
    }
    async function un(d, P = {}) {
        return f.value == null ? !1 : f.value.move(d, P)
    }
    async function gr(d, P = {}) {
        return f.value == null ? !1 : f.value.moveBy(d, P)
    }
    async function M(d, P = {}) {
        if (f.value == null) return !1;
        const {
            firstPage: W,
            lastPage: K,
            move: ie
        } = f.value, Ie = d !== "end", ge = ln(Ie), Tt = Ie ? 1 : -1;
        return !ge || So(ge, W, K) ? !1 : ie(ge, {
            position: Tt,
            ...P
        })
    }
    ye(() => e.isRange, d => {
        d && console.warn("The `is-range` prop will be deprecated in future releases. Please use the `range` modifier.")
    }, {
        immediate: !0
    }), ye(() => w.value, () => ft()), ye(() => e.modelValue, d => {
        y && ke(d, {
            formatInput: !0,
            hidePopover: !1
        })
    }), ye(() => U.value, () => {
        Je(e.rules) && ke(e.modelValue, {
            formatInput: !0,
            hidePopover: !1
        })
    }), ye(() => e.timezone, () => {
        ke(c.value, {
            formatInput: !0
        })
    });
    const Y = fe(D.value);
    c.value = _e(e.modelValue, Y, "dateTime"), qr(() => {
        ke(e.modelValue, {
            formatInput: !0,
            hidePopover: !1
        })
    }), ar(() => i.value = !0);
    const j = { ...r,
        showCalendar: i,
        datePickerPopoverId: l,
        popoverRef: h,
        popoverEvents: L,
        calendarRef: f,
        isRange: m,
        isTimeMode: E,
        isDateTimeMode: A,
        is24hr: fn(e, "is24hr"),
        hideTimeHeader: fn(e, "hideTimeHeader"),
        timeAccuracy: fn(e, "timeAccuracy"),
        isDragging: I,
        inputValue: V,
        inputEvents: Z,
        dateParts: $,
        attributes: O,
        rules: U,
        move: un,
        moveBy: gr,
        moveToValue: M,
        updateValue: Oe,
        showPopover: sn,
        hidePopover: qt,
        togglePopover: on,
        onDayClick: pt,
        onDayKeydown: kt,
        onDayMouseEnter: Pt,
        onPopoverBeforeShow: He,
        onPopoverAfterShow: at,
        onPopoverBeforeHide: ht,
        onPopoverAfterHide: st
    };
    return Zr(jo, j), j
}

function f0() {
    const e = Cn(jo);
    if (e) return e;
    throw new Error("DatePicker context missing. Please verify this component is nested within a valid context provider.")
}
const d0 = [{
        value: 0,
        label: "12"
    }, {
        value: 1,
        label: "1"
    }, {
        value: 2,
        label: "2"
    }, {
        value: 3,
        label: "3"
    }, {
        value: 4,
        label: "4"
    }, {
        value: 5,
        label: "5"
    }, {
        value: 6,
        label: "6"
    }, {
        value: 7,
        label: "7"
    }, {
        value: 8,
        label: "8"
    }, {
        value: 9,
        label: "9"
    }, {
        value: 10,
        label: "10"
    }, {
        value: 11,
        label: "11"
    }],
    v0 = [{
        value: 12,
        label: "12"
    }, {
        value: 13,
        label: "1"
    }, {
        value: 14,
        label: "2"
    }, {
        value: 15,
        label: "3"
    }, {
        value: 16,
        label: "4"
    }, {
        value: 17,
        label: "5"
    }, {
        value: 18,
        label: "6"
    }, {
        value: 19,
        label: "7"
    }, {
        value: 20,
        label: "8"
    }, {
        value: 21,
        label: "9"
    }, {
        value: 22,
        label: "10"
    }, {
        value: 23,
        label: "11"
    }];

function h0(e) {
    const t = f0(),
        {
            locale: r,
            isRange: n,
            isTimeMode: a,
            dateParts: s,
            rules: o,
            is24hr: i,
            hideTimeHeader: l,
            timeAccuracy: c,
            updateValue: u
        } = t;

    function v(k) {
        k = Object.assign(f.value, k);
        let N = null;
        if (n.value) {
            const z = h.value ? k : s.value[0],
                L = h.value ? s.value[1] : k;
            N = {
                start: z,
                end: L
            }
        } else N = k;
        u(N, {
            patch: "time",
            targetPriority: h.value ? "start" : "end",
            moveToValue: !0
        })
    }
    const h = b(() => e.position === 0),
        f = b(() => s.value[e.position] || {
            isValid: !1
        }),
        g = b(() => Mo(f.value)),
        p = b(() => !!f.value.isValid),
        y = b(() => !l.value && p.value),
        m = b(() => {
            if (!g.value) return null;
            let k = r.value.toDate(f.value);
            return f.value.hours === 24 && (k = new Date(k.getTime() - 1)), k
        }),
        T = b({
            get() {
                return f.value.hours
            },
            set(k) {
                v({
                    hours: k
                })
            }
        }),
        x = b({
            get() {
                return f.value.minutes
            },
            set(k) {
                v({
                    minutes: k
                })
            }
        }),
        _ = b({
            get() {
                return f.value.seconds
            },
            set(k) {
                v({
                    seconds: k
                })
            }
        }),
        A = b({
            get() {
                return f.value.milliseconds
            },
            set(k) {
                v({
                    milliseconds: k
                })
            }
        }),
        E = b({
            get() {
                return f.value.hours < 12
            },
            set(k) {
                k = String(k).toLowerCase() == "true";
                let N = T.value;
                k && N >= 12 ? N -= 12 : !k && N < 12 && (N += 12), v({
                    hours: N
                })
            }
        }),
        I = b(() => U1(f.value, o.value[e.position])),
        D = b(() => d0.filter(k => I.value.hours.some(N => N.value === k.value))),
        $ = b(() => v0.filter(k => I.value.hours.some(N => N.value === k.value))),
        w = b(() => i.value ? I.value.hours : E.value ? D.value : $.value),
        C = b(() => {
            const k = [];
            return Ze(D.value) && k.push({
                value: !0,
                label: "AM"
            }), Ze($.value) && k.push({
                value: !1,
                label: "PM"
            }), k
        });
    return { ...t,
        showHeader: y,
        timeAccuracy: c,
        parts: f,
        isValid: p,
        date: m,
        hours: T,
        minutes: x,
        seconds: _,
        milliseconds: A,
        options: I,
        hourOptions: w,
        isAM: E,
        isAMOptions: C,
        is24hr: i
    }
}
const p0 = {
        key: 0,
        class: "vc-time-header"
    },
    m0 = {
        class: "vc-time-weekday"
    },
    y0 = {
        class: "vc-time-month"
    },
    g0 = {
        class: "vc-time-day"
    },
    b0 = {
        class: "vc-time-year"
    },
    w0 = {
        class: "vc-time-select-group"
    },
    D0 = G("span", {
        class: "vc-time-colon"
    }, ":", -1),
    $0 = G("span", {
        class: "vc-time-colon"
    }, ":", -1),
    _0 = G("span", {
        class: "vc-time-decimal"
    }, ".", -1),
    M0 = Ne({
        __name: "TimePicker",
        props: {
            position: null
        },
        setup(e, {
            expose: t
        }) {
            const n = h0(e);
            t(n);
            const {
                locale: a,
                isValid: s,
                date: o,
                hours: i,
                minutes: l,
                seconds: c,
                milliseconds: u,
                options: v,
                hourOptions: h,
                isTimeMode: f,
                isAM: g,
                isAMOptions: p,
                is24hr: y,
                showHeader: m,
                timeAccuracy: T
            } = n;
            return (x, _) => (F(), B("div", {
                class: ce(["vc-time-picker", [{
                    "vc-invalid": !S(s),
                    "vc-attached": !S(f)
                }]])
            }, [wt(x.$slots, "time-header", {}, () => [S(m) && S(o) ? (F(), B("div", p0, [G("span", m0, be(S(a).formatDate(S(o), "WWW")), 1), G("span", y0, be(S(a).formatDate(S(o), "MMM")), 1), G("span", g0, be(S(a).formatDate(S(o), "D")), 1), G("span", b0, be(S(a).formatDate(S(o), "YYYY")), 1)])) : de("", !0)]), G("div", w0, [oe(Rt, {
                name: "Clock",
                size: "17"
            }), oe(nr, {
                modelValue: S(i),
                "onUpdate:modelValue": _[0] || (_[0] = A => Qt(i) ? i.value = A : null),
                modelModifiers: {
                    number: !0
                },
                options: S(h),
                "align-right": ""
            }, null, 8, ["modelValue", "options"]), S(T) > 1 ? (F(), B(we, {
                key: 0
            }, [D0, oe(nr, {
                modelValue: S(l),
                "onUpdate:modelValue": _[1] || (_[1] = A => Qt(l) ? l.value = A : null),
                modelModifiers: {
                    number: !0
                },
                options: S(v).minutes,
                "align-left": S(T) === 2
            }, null, 8, ["modelValue", "options", "align-left"])], 64)) : de("", !0), S(T) > 2 ? (F(), B(we, {
                key: 1
            }, [$0, oe(nr, {
                modelValue: S(c),
                "onUpdate:modelValue": _[2] || (_[2] = A => Qt(c) ? c.value = A : null),
                modelModifiers: {
                    number: !0
                },
                options: S(v).seconds,
                "align-left": S(T) === 3
            }, null, 8, ["modelValue", "options", "align-left"])], 64)) : de("", !0), S(T) > 3 ? (F(), B(we, {
                key: 2
            }, [_0, oe(nr, {
                modelValue: S(u),
                "onUpdate:modelValue": _[3] || (_[3] = A => Qt(u) ? u.value = A : null),
                modelModifiers: {
                    number: !0
                },
                options: S(v).milliseconds,
                "align-left": ""
            }, null, 8, ["modelValue", "options"])], 64)) : de("", !0), S(y) ? de("", !0) : (F(), Ve(nr, {
                key: 3,
                modelValue: S(g),
                "onUpdate:modelValue": _[4] || (_[4] = A => Qt(g) ? g.value = A : null),
                options: S(p)
            }, null, 8, ["modelValue", "options"]))])], 2))
        }
    }),
    k0 = Ne({
        name: "DatePicker",
        inheritAttrs: !1,
        emits: u0,
        props: l0,
        setup(e, t) {
            const r = c0(e, t),
                {
                    slots: n,
                    attrs: a
                } = t,
                {
                    isTimeMode: s,
                    isRange: o,
                    isDateTimeMode: i,
                    color: l,
                    displayMode: c,
                    dateParts: u,
                    datePickerPopoverId: v,
                    attributes: h,
                    calendarRef: f,
                    popoverRef: g,
                    showCalendar: p,
                    onDayClick: y,
                    onDayMouseEnter: m,
                    onDayKeydown: T,
                    onPopoverBeforeShow: x,
                    onPopoverAfterShow: _,
                    onPopoverBeforeHide: A,
                    onPopoverAfterHide: E
                } = r;
            t.expose(r);
            const I = Pn(ho(r, "calendarRef", "popoverRef")),
                D = () => (o.value ? [0, 1] : [0]).map(k => Dr(M0, {
                    position: k
                })),
                $ = () => {
                    if (!u.value) return null;
                    const C = i.value ? { ...n,
                        footer: D
                    } : n;
                    return Dr(n0, { ...a,
                        attributes: h.value,
                        ref: f,
                        onDayclick: y,
                        onDaymouseenter: m,
                        onDaykeydown: T
                    }, C)
                },
                w = () => {
                    if (s.value) return Dr("div", {
                        class: `vc-container vc-bordered vc-${l.value} vc-${c.value}`
                    }, [D()]);
                    if (p.value) return $()
                };
            return n.default ? () => [n.default(I), Dr(sa, {
                id: v.value,
                placement: "bottom-start",
                class: `vc-date-picker-content vc-${l.value} vc-${c.value}`,
                ref: g,
                "onBefore-show": x,
                "onAfter-show": _,
                "onBefore-hide": A,
                "onAfter-hide": E
            }, {
                default: w
            })] : w
        }
    });
export {
    n0 as C, k0 as _
};