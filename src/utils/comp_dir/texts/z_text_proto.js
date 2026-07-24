import { Type } from "lucide-react";
import { getCode } from "../../../utils/helper";
import { Z_TextEngineProps } from "../../engineProps/Z_TextEngineProps";
import Z_Text_Preview from "../../component_previews/texts/Z_Text_Preview";
import { animation_list } from "../../../utils/animlations/animation_list";

const usageFunc = (setState)=>getCode("/codes/z_text/z_text_usage.txt", setState)
const js_cs = (setState)=>getCode("/codes/z_text/z_text_js_cs.txt", setState)
const usagePreview = (setState)=>getCode("/codes/z_text/z_text_preview.txt", setState)
// const animations = (setState)=>getCode("/codes/z_text/animation_list.txt", setState)

function getAnimationObj({func, name}){
    let obj = ""
    Object.entries(animation_list).forEach((each)=>{
        const [key, val] = each;
        if(key === name){
            obj = JSON.stringify(val)
        }
    });
    func(obj)
}

function animationName({func, name}){
    let prop = `animation="${name}"`
    func(prop)
}

export const z_text_proto = {
    title: "Z_Text",
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
            npm_react: "npm i z-flux-react",
            npm_vue: "npm i z-flux-vue",
            // usage: usageFunc,
            codespack: [
                {
                    title: "Keep in Mind",
                    id: "special_functionx",
                    params: "special_function",
                    code: animationName
                },
                {
                    title: "Usage",
                    code: usageFunc,
                    id: "aouihmnd"
                },
                {
                    title: "Usage in Preview",
                    code: usagePreview,
                    id: "aouihmnd"
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
                    id: "special_function",
                    params: "special_function"
                },
                {
                    title: "Raw Code",
                    code: js_cs,
                    id: "Ssa"
                },
            ]
        }
    },
    engine: "Z_Text",
    preview: (props)=> <Z_Text_Preview data={z_text_proto} {...props}/>,
    props: [
        ...Z_TextEngineProps
    ]
}
