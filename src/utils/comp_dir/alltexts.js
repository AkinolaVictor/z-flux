import { Type } from "lucide-react";
import {texts_fade} from "./texts/text_fade"
import {texts_fade_overlay} from "./texts/text_fade_overlay"
import {texts_fade_skew} from "./texts/text_fade_skew"
import {texts_fade_skew_2} from "./texts/text_fade_skew_2"
import {texts_fade_down} from "./texts/text_fade_down"
import {z_text_proto} from "./texts/z_text_proto"
import {texts_texter} from "./texts/text_texter"
import {overlay_reveal} from "./texts/overlay_reveal"
import { animation_list } from "../animation_list";

function fade () {
    const fade_contents = [
        texts_fade,
        texts_fade_overlay,
        texts_fade_skew,
        texts_fade_skew_2,
        texts_fade_down,
        // texts_texter,
    ]

    fade_contents.map((item, index)=>{
        fade_contents[index].taken = true
        // return {
        //     title: item.title,
        //     href: item.href
        // }
    })

    const fade_parent =  {
        parent: true,
        title: "Fade Series",
        id: "fade_id",
        grouped: fade_contents
    }
    
    return {
        fade_contents,
        fade_parent
    }
}

// const animation_list = [
//     {
//         title: "Fly_Up",
//         style: {},
//     },
//     {
//         title: "Fly_Down",
//         style: {},
//     },
// ]

function z_text(){
    const built_animation = Object.entries(animation_list).map((each)=>{
        const [key, val] = each;

        return {title:key, val};
    });


    const z_text_content = []

    for(let i=0; i<built_animation.length; i++){
        const each = built_animation[i]
        let sample = {...z_text_proto, href: ""}

        sample.taken = true
        sample.title = each.title
        sample.href = `/components/${each.title}`
        sample.tests = "works..."
        z_text_content.push(sample)
    }

    const z_text_parent =  {
        parent: true,
        title: "Z Text Series",
        id: "z_text_id",
        grouped: z_text_content
    }

    return {
        z_text_parent, 
        z_text_content
    }
}


const {fade_contents, fade_parent} = fade()
const {z_text_content, z_text_parent} = z_text()


export const alltexts = {
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    content: [
        fade_parent,
        z_text_parent,
        ...fade_contents,
        ...z_text_content,
        texts_texter

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