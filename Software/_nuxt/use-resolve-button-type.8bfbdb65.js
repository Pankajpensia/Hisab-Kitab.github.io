import {
    r,
    o as l,
    ai as f,
    aD as u
} from "./entry.ab3e2748.js";

function o(t, n) {
    if (t) return t;
    let e = n ? ? "button";
    if (typeof e == "string" && e.toLowerCase() === "button") return "button"
}

function i(t, n) {
    let e = r(o(t.value.type, t.value.as));
    return l(() => {
        e.value = o(t.value.type, t.value.as)
    }), f(() => {
        var a;
        e.value || u(n) && u(n) instanceof HTMLButtonElement && !((a = u(n)) != null && a.hasAttribute("type")) && (e.value = "button")
    }), e
}
export {
    i as b
};