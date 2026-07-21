import Text_Fade_Preview from "@/utils/component_previews/texts/Text_Fade_Preview";
import { Type } from "lucide-react";
import { getCode } from "@/utils/helper";
import { Z_TextEngineProps } from "../../engineProps/Z_TextEngineProps";
import Z_Text_Preview from "../../component_previews/texts/Z_Text_Preview";

const usageFunc = (setState)=>getCode("/codes/text_fade/text_fade_usage.txt", setState)
const js_cs = (setState)=>getCode("/codes/z_text/z_text_js_cs.txt", setState)

export const z_text_proto = {
    title: "Z_Text",
    child: true,
    href: "/components/z_text",
    id: "main2",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    date_published: "04-07-2026",
    description: "Text animation using the Z-Text Engine",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/Z_Text.json",
            usage: usageFunc
        },
        rawcode: {
            dependencies: "npm install gsap z-flux-utils",
            codes: {
                js_cs
            }
        }
    },
    engine: "Z_Text",
    preview: (props)=> <Z_Text_Preview data={z_text_proto} {...props}/>,
    props: [
        ...Z_TextEngineProps
    ]
}
