import {
    j as e
} from "./entry.ab3e2748.js";

function s() {
    const {
        $nt: r
    } = e();
    return r
}

function u() {
    const r = s();

    function t(n, o) {
        return r.showComponent("TairoToaster", {
            props: n,
            options: o
        })
    }
    return {
        show: t,
        clear: r.clear,
        clearAll: r.clearAll
    }
}
export {
    u
};