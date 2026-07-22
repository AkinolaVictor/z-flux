import { Type } from "lucide-react";
import { getCode } from "@/utils/helper";
import { overlay_text_animations } from "@/utils/animlations/overlay_text_animations";
import Overlay_Text_preview from "../../component_previews/texts/Overlay_Text_preview";
import { Overlay_Text_Engine_Props } from "../../engineProps/Overlay_Text_Engine_Props";


const usageFunc = (setState)=>getCode("/codes/z_text/z_text_usage.txt", setState)
const js_cs = (setState)=>getCode("/codes/z_text/z_text_js_cs.txt", setState)
const animations = (setState)=>getCode("/codes/z_text/animation_list.txt", setState)

function getAnimationObj({func, name}){
    let obj = ""
    const built_animation = Object.entries(overlay_text_animations).forEach((each)=>{
        const [key, val] = each;
        if(key === name){
            obj = JSON.stringify(val)
        }
        // return {title:key, val};
    });
    func(obj)
}

function animationName({func, name}){
    let prop = `animation="${name}"`
    func(prop)
}

export const overlay_text_proto = {
    title: "Overlay_Text",
    href: "/components/Overlay_text",
    id: "main2awkel",
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    date_published: "04-07-2026",
    description: "Reveal text by removing the top layer element",
    // concept: "Description of the way this was achieved",
    setup: {
        cli: {
            npm: "npx shadcn add https://z-flux.vercel.app/r/Overlay_Text.json",
            npm_react: "npm i z-flux-react",
            npm_vue: "npm i z-flux-vue",
            // usage: usageFunc,
            codespack: [
                {
                    title: "Keep in Mind",
                    id: "special_function",
                    code: animationName
                },
                {
                    title: "Usage",
                    code: usageFunc,
                    id: "aouihmndss"
                },
            ]
        },
        rawcode: {
            dependencies: "npm install gsap @gsap/react z-flux-utils",
            // codes: {
            //     js_cs,
            //     animations
            // },
            codespack: [
                {
                    title: "Animation Styles",
                    code: getAnimationObj,
                    id: "special_function"
                },
                {
                    title: "Raw Code",
                    code: js_cs,
                    id: "Ssaz"
                },
            ]
        }
    },
    engine: "Overlay_Text",
    preview: (props)=> <Overlay_Text_preview data={overlay_text_proto} {...props}/>,
    props: [
        ...Overlay_Text_Engine_Props
    ]
}
