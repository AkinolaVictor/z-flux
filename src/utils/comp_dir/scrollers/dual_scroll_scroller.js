import { Type } from "lucide-react";
import { getCode } from "../../helper";
import { vertical_scroll_animations } from "@/utils/animlations/vertical_scroll_animation";
import { DualScrollProps } from "@/utils/engineProps/DualScrollProps";
import Dual_scroll_preview from "@/utils/component_previews/scrollers/Dual_scroll_preview";

const usageFunc = (setState)=>getCode("/codes/dual_scroll/dual_scroll_usage.txt", setState)
const js_cs = (setState)=>getCode("/codes/dual_scroll/dual_scroll_js_cs.txt", setState)

function getAnimationObj({func, name}){
    let obj = ""
    Object.entries(vertical_scroll_animations).forEach((each)=>{
        const [key, val] = each;
        if(key === name){
            obj = JSON.stringify(val)
        }
    });
    func(obj)
}

export const dual_scroll_scroller = {
    title: "Dual Scroll",
    href: "/components/dual_scroll",
    date_published: "18-07-2026",
    id: "vertical_scroll",
    section: "Scrollers",
    Icon: ()=><Type size={"13px"}/>,
    description: "Implements different types of scroll for two list of items",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/DualScroll.json",
            npm_react: "npm i z-flux-react",
            npm_vue: "npm i z-flux-vue",
            // usage: usageFunc,
            codespack: [
                {
                    title: "Usage",
                    code: usageFunc,
                    id: "uwiewk"
                }
            ]
        },
        rawcode: {
            dependencies: "npm install gsap z-flux-utils",
            // codes: {
            //     js_cs
            // },
            codespack: [
                {
                    title: "Animation Styles",
                    code: getAnimationObj,
                    id: "special_functionaav",
                    params: "special_function"
                },
                {
                    title: "Raw Code",
                    code: js_cs,
                    id: "Sakf"
                }
            ]
        }
    },
    // similar: [
    //     {
    //         name: "FadeSkew 2",
    //         href: "/components/text_fade_skew_2"
    //     }
    // ],
    // engine: "TextEngine",
    preview: [
        {
            Preview: Dual_scroll_preview
        }
    ],
    props: [
        ...DualScrollProps
    ]
}