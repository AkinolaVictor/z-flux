import { Type } from "lucide-react";
import { VerticalScrollProps } from "../../engineProps/VerticalScrollProps"
import { getCode } from "@/utils/helper";
import Slider_Vertical_Scroll_Preview from "../../component_previews/scrollers/Sliders_vertical_Scroll_Preview";

const usageFunc = (setState)=>getCode("/codes/vertical_scroll/vertical_scroll_usage.txt", setState)
const js_cs = (setState)=>getCode("/codes/vertical_scroll/vertical_scroll_js_cs.txt", setState)

export const slider_vertical_scroll = {
    title: "Vertical Scroll",
    href: "/components/vertical_scroll",
    date_published: "18-07-2026",
    id: "vertical_scroll",
    section: "Transitions",
    Icon: ()=><Type size={"13px"}/>,
    description: "Converts the vertical scroll to a horizontal movement for the list of items",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/TextFadeSkew_2.json",
            usage: usageFunc
        },
        rawcode: {
            dependencies: "npm install gsap",
            codes: {
                // ts_tw,
                // ts_cs,
                // js_tw,
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
    preview: Slider_Vertical_Scroll_Preview,
    props: [
        ...VerticalScrollProps
    ]
}