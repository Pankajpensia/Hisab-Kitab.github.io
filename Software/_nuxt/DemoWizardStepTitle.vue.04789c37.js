import {
    d as _,
    D as l,
    b as p,
    c as d,
    g as a,
    w as s,
    e as n,
    t as o,
    H as r,
    K as f,
    L as x
} from "./entry.ab3e2748.js";
import {
    u as h
} from "./multi-step-form.03b99d2b.js";
const g = {
        class: "mb-10 text-center"
    },
    b = _({
        __name: "DemoWizardStepTitle",
        setup(B) {
            const {
                steps: c,
                currentStep: i
            } = h(), e = l(() => c.value.find(t => t.id === i.value));
            return (t, S) => {
                const m = f,
                    u = x;
                return p(), d("div", g, [a(m, {
                    tag: "h1",
                    size: "2xl",
                    class: "text-muted-800 dark:text-white"
                }, {
                    default: s(() => [n("span", null, o(r(e) ? .meta ? .title), 1)]),
                    _: 1
                }), a(u, {
                    size: "sm",
                    class: "text-muted-500 dark:text-muted-400"
                }, {
                    default: s(() => [n("span", null, o(r(e) ? .meta ? .subtitle), 1)]),
                    _: 1
                })])
            }
        }
    });
export {
    b as _
};