import { Type } from "lucide-react";
import {texts_fade} from "./texts/text_fade"
import {texts_fade_overlay} from "./texts/text_fade_overlay"
import {texts_fade_skew} from "./texts/text_fade_skew"
import {texts_fade_skew_2} from "./texts/text_fade_skew_2"
import {texts_fade_down} from "./texts/text_fade_down"
import {texts_texter} from "./texts/text_texter"
import {overlay_reveal} from "./texts/overlay_reveal"

function z_text () {
    const z_text_contents = [
        texts_fade,
        texts_fade_overlay,
        texts_fade_skew,
        texts_fade_skew_2,
        texts_fade_down,
        // texts_texter,
    ]

    const z_text_grouped = z_text_contents.map((item, index)=>{
        z_text_contents[index].taken = true
        return {
            title: item.title,
            href: item.href
        }
    })
    
    return {
        z_text_contents,
        z_text_grouped
    }
}


const {z_text_contents, z_text_grouped} = z_text()

const z_text_parent =  {
    parent: true,
    title: "Fade Series",
    id: "z_text_id",
    grouped: z_text_grouped
}

// const z_text_parent2 =  {
//     parent: true,
//     title: "Z-Text Engine",
//     id: "z_text_id2",
//     grouped: z_text_grouped
// }

export const alltexts = {
    section: "Texts",
    Icon: ()=><Type size={"13px"}/>,
    content: [
        z_text_parent,
        // z_text_parent2,
        ...z_text_contents,

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