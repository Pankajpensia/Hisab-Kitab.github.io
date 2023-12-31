import {
    d as m,
    x as f,
    D as t,
    b as v,
    c as x,
    e as h,
    n as u,
    H as e,
    a5 as y
} from "./entry.ab3e2748.js";
const _ = ["aria-valuenow", "aria-valuemax"],
    S = m({
        __name: "BaseProgress",
        props: {
            color: {
                default: "primary"
            },
            contrast: {
                default: "default"
            },
            shape: {
                default: void 0
            },
            size: {
                default: "sm"
            },
            value: {
                default: void 0
            },
            max: {
                default: 100
            }
        },
        setup(i) {
            const s = i,
                l = f(),
                o = t(() => s.shape ? ? l.nui.defaultShapes ? .progress),
                p = {
                    primary: "nui-progress-primary",
                    info: "nui-progress-info",
                    success: "nui-progress-success",
                    warning: "nui-progress-warning",
                    danger: "nui-progress-danger"
                },
                c = {
                    default: "nui-progress-default",
                    contrast: "nui-progress-contrast"
                },
                d = {
                    straight: "",
                    rounded: "nui-progress-rounded",
                    curved: "nui-progress-curved",
                    full: "nui-progress-full"
                },
                g = {
                    xs: "nui-progress-xs",
                    sm: "nui-progress-sm",
                    md: "nui-progress-md",
                    lg: "nui-progress-lg",
                    xl: "nui-progress-xl"
                },
                r = t(() => {
                    const {
                        value: a,
                        max: n
                    } = s;
                    return n === 0 ? 0 : typeof a == "number" ? a / n * 100 : null
                });
            return (a, n) => (v(), x("div", {
                role: "progressbar",
                "aria-valuenow": e(r),
                "aria-valuemax": s.max,
                class: u(["nui-progress", [c[s.contrast], p[s.color], g[s.size], e(o) && d[e(o)]]])
            }, [h("div", {
                class: u(["nui-progress-bar", [e(r) === null && "nui-progress-indeterminate animate-nui-progress-indeterminate"]]),
                style: y(e(r) !== null ? `width: ${e(r)}%` : "width: 100%")
            }, null, 6)], 10, _))
        }
    });
export {
    S as _
};