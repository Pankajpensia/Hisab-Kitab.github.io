import {
    d as c,
    x as m,
    D as n,
    b,
    c as f,
    af as p,
    n as k,
    H as v
} from "./entry.ab3e2748.js";
const y = c({
    __name: "BaseIconBox",
    props: {
        shape: {
            default: void 0
        },
        size: {
            default: "xs"
        },
        color: {
            default: void 0
        },
        flavor: {
            default: "pastel"
        },
        bordered: {
            type: Boolean,
            default: !1
        },
        mask: {
            default: void 0
        }
    },
    setup(s) {
        const o = s,
            a = m(),
            e = n(() => o.shape ? ? a.nui.defaultShapes ? .iconBox),
            i = {
                straight: "",
                rounded: "nui-box-rounded",
                curved: "nui-box-curved",
                full: "nui-box-full"
            },
            u = {
                xs: "nui-box-xs",
                sm: "nui-box-sm",
                md: "nui-box-md",
                lg: "nui-box-lg",
                xl: "nui-box-xl",
                "2xl": "nui-box-2xl"
            },
            l = {
                solid: "nui-box-solid",
                pastel: "nui-box-pastel",
                outline: "nui-box-outline"
            },
            t = {
                default: "nui-box-default",
                invert: "nui-box-invert",
                primary: "nui-box-primary",
                info: "nui-box-info",
                success: "nui-box-success",
                warning: "nui-box-warning",
                danger: "nui-box-danger"
            },
            d = {
                hex: "nui-mask nui-mask-hex",
                hexed: "nui-mask nui-mask-hexed",
                deca: "nui-mask nui-mask-deca",
                blob: "nui-mask nui-mask-blob",
                diamond: "nui-mask nui-mask-diamond"
            },
            r = n(() => ["nui-icon-box", o.bordered && "nui-box-bordered", e.value && i[e.value], u[o.size], l[o.flavor], o.color && t[o.color], o.mask && d[o.mask]]);
        return (x, h) => (b(), f("div", {
            class: k(v(r))
        }, [p(x.$slots, "default")], 2))
    }
});
export {
    y as _
};