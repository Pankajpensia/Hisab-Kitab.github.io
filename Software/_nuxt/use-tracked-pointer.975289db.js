import {
    r as d
} from "./entry.ab3e2748.js";

function v(e) {
    throw new Error("Unexpected object: " + e)
}
var f = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(f || {});

function h(e, n) {
    let t = n.resolveItems();
    if (t.length <= 0) return null;
    let s = n.resolveActiveIndex(),
        i = s ? ? -1,
        u = (() => {
            switch (e.focus) {
                case 0:
                    return t.findIndex(r => !n.resolveDisabled(r));
                case 1:
                    {
                        let r = t.slice().reverse().findIndex((l, o, a) => i !== -1 && a.length - o - 1 >= i ? !1 : !n.resolveDisabled(l));
                        return r === -1 ? r : t.length - 1 - r
                    }
                case 2:
                    return t.findIndex((r, l) => l <= i ? !1 : !n.resolveDisabled(r));
                case 3:
                    {
                        let r = t.slice().reverse().findIndex(l => !n.resolveDisabled(l));
                        return r === -1 ? r : t.length - 1 - r
                    }
                case 4:
                    return t.findIndex(r => n.resolveId(r) === e.id);
                case 5:
                    return null;
                default:
                    v(e)
            }
        })();
    return u === -1 ? s : u
}

function c(e) {
    return [e.screenX, e.screenY]
}

function I() {
    let e = d([-1, -1]);
    return {
        wasMoved(n) {
            let t = c(n);
            return e.value[0] === t[0] && e.value[1] === t[1] ? !1 : (e.value = t, !0)
        },
        update(n) {
            e.value = c(n)
        }
    }
}
export {
    f as a, I as u, h as x
};