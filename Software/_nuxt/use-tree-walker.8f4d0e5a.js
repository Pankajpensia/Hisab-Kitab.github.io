import {
    ai as f,
    aU as d
} from "./entry.ab3e2748.js";

function p({
    container: e,
    accept: t,
    walk: l,
    enabled: r
}) {
    f(() => {
        let a = e.value;
        if (!a || r !== void 0 && !r.value) return;
        let c = d(e);
        if (!c) return;
        let o = Object.assign(i => t(i), {
                acceptNode: t
            }),
            n = c.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, o, !1);
        for (; n.nextNode();) l(n.currentNode)
    })
}
export {
    p
};