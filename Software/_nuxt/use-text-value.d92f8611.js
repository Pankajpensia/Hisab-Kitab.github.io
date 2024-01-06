import {
    r as a,
    aD as m
} from "./entry.ab3e2748.js";
let o = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function f(r) {
    var l, u;
    let e = (l = r.innerText) != null ? l : "",
        n = r.cloneNode(!0);
    if (!(n instanceof HTMLElement)) return e;
    let t = !1;
    for (let F of n.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) F.remove(), t = !0;
    let i = t ? (u = n.innerText) != null ? u : "" : e;
    return o.test(i) && (i = i.replace(o, "")), i
}

function D(r) {
    let l = r.getAttribute("aria-label");
    if (typeof l == "string") return l.trim();
    let u = r.getAttribute("aria-labelledby");
    if (u) {
        let e = u.split(" ").map(n => {
            let t = document.getElementById(n);
            if (t) {
                let i = t.getAttribute("aria-label");
                return typeof i == "string" ? i.trim() : f(t).trim()
            }
            return null
        }).filter(Boolean);
        if (e.length > 0) return e.join(", ")
    }
    return f(r).trim()
}

function c(r) {
    let l = a(""),
        u = a("");
    return () => {
        let e = m(r);
        if (!e) return "";
        let n = e.innerText;
        if (l.value === n) return u.value;
        let t = D(e).trim().toLowerCase();
        return l.value = n, u.value = t, t
    }
}
export {
    c as p
};