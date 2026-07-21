import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { Type } from "lucide-react";
import { TextEngineProps } from "../../engineProps/TextEngineProps"
import { getCode } from "@/utils/helper";

const usageFunc = (setState)=>getCode("/codes/text_fade/text_fade_usage.txt", setState)
const ts_tw = (setState)=>getCode("/codes/text_fade/text_fade_ts_tw.txt", setState)
const ts_cs = (setState)=>getCode("/codes/text_fade/text_fade_ts_cs.txt", setState)
const js_tw = (setState)=>getCode("/codes/text_fade/text_fade_js_tw.txt", setState)
const js_cs = (setState)=>getCode("/codes/text_fade/text_fade_js_cs.txt", setState)

export const texts_fade = {
    title: "Fade",
    child: true,
    href: "/components/text_fade",
    id: "main2",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    date_published: "04-07-2026",
    description: "Reveal text by adjusting its opacity value",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/TextFade.json",
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
    engine: "TextEngine",
    preview: Text_Fade_Preview,
    props: [
        ...TextEngineProps
    ]
}