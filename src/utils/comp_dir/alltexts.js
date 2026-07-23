import { Type } from "lucide-react";
import {texts_fade} from "./texts/text_fade"
import {texts_fade_overlay} from "./texts/text_fade_overlay"
import {texts_fade_skew} from "./texts/text_fade_skew"
import {texts_fade_skew_2} from "./texts/text_fade_skew_2"
import {texts_fade_down} from "./texts/text_fade_down"
import {z_text_proto} from "./texts/z_text_proto"
import {overlay_text_proto} from "./texts/overlay_text_proto"
import {texts_texter} from "./texts/text_texter"
import { animation_list } from "../animlations/animation_list";
import { overlay_text_animations } from "../animlations/overlay_text_animations";


function z_text(){
    const built_animation = Object.entries(animation_list).map((each)=>{
        const [key, val] = each;
        return {title:key, val};
    });

    const z_text_content = []
    
    for(let i=0; i<built_animation.length; i++){
        const {title, val} = built_animation[i]
        let sample = {...z_text_proto, href: ""}
        sample.taken = true
        sample.title = title
        sample.href = `/components/${title}`
        z_text_content.push(sample)
    }

    const z_text_parent =  {
        parent: true,
        title: "Z Text",
        id: "z_text_id",
        grouped: z_text_content
    }

    return {
        z_text_parent, 
        z_text_content
    }
}

function overlay_text(){
    const built_animation = Object.entries(overlay_text_animations).map((each)=>{
        const [key, val] = each;
        return {title:key, val};
    });

    const overlay_text_content = []
    
    for(let i=0; i<built_animation.length; i++){
        const {title, val} = built_animation[i]
        let sample = {...overlay_text_proto, href: ""}
        sample.taken = true
        sample.title = title
        sample.href = `/components/${title}`
        sample.animation = val
        overlay_text_content.push(sample)
    }

    const overlay_text_parent =  {
        parent: true,
        title: "Overlay Text",
        id: "overlay_text_id",
        grouped: overlay_text_content
    }

    return {
        overlay_text_parent, 
        overlay_text_content
    }
}

const {z_text_content, z_text_parent} = z_text()
const {overlay_text_content, overlay_text_parent} = overlay_text()

export const alltexts = {
    section: "Text Engines",
    Icon: ()=><Type size={"13px"}/>,
    content: [
        // fade_parent,
        // ...fade_contents,

        z_text_parent,
        ...z_text_content,
        overlay_text_parent,
        ...overlay_text_content,
        // overlay_text_proto,
        // texts_texter,

        // texts_fade,
        // texts_fade_overlay,
        // texts_fade_skew,
        // texts_fade_skew_2,
        // texts_fade_down,



        // overlay_reveal,
        // {
        //     title: "Text Fadez",
        //     href: "/components/text_fadez",
        //     id: "lsd3"
        // },
        // {
        //     title: "Text By Height",
        //     href: "/components/text_height",
        //     id: "main_4"
        // },
    ]
}