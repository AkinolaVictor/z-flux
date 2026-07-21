import Transition_Integrated_Scroll_Preview from "@/utils/component_previews/transitions/Transition_Integrated_Scroll_Preview";
import { Type } from "lucide-react";
import { TextEngineProps } from "../../engineProps/TextEngineProps"
import { getCode } from "@/utils/helper";

const usageFunc = (setState)=>getCode("/codes/text_fade_skew_2/text_fade_skew_2_usage.txt", setState)
const ts_tw = (setState)=>getCode("/codes/text_fade_skew_2/text_fade_skew_2_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade_skew_2/text_fade_skew_2_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade_skew_2/text_fade_skew_2_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade_skew_2/text_fade_skew_2_js_cs.txt", setState)

export const transition_integrated_scroll = {
    title: "Integrated Scroll",
    href: "/components/transition_integrated_scroll",
    id: "transition_integrated_scroll",
    section: "Transitions",
    Icon: ()=><Type size={"13px"}/>,
    // Icon: ()=><Workflow size={"13px"}/>,
    description: "Allow contents of the container to be revealed without disrupting the main flow of the scrollable element, this makes scrolling across webpages to behave smoothly.",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/TextFadeSkew_2.json",
            usage: usageFunc
        },
        rawcode: {
            dependencies: "npm install gsap z-flux-utils",
            codes: {
                ts_tw,
                ts_cs,
                js_tw,
                js_cs
            }
        }
    },
    // similar: [
    //     {
    //         name: "FadeSkew 2",
    //         href: "/components/text_fade_skew_2"
    //     }
    // ],
    // engine: "TextEngine",
    preview: Transition_Integrated_Scroll_Preview,
    props: [
        ...TextEngineProps
    ]
}