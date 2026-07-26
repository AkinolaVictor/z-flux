import { GalleryVertical } from "lucide-react";
import {slider_vertical_scroll} from "./scrollers/slider_vertical_scroll"
import { vertical_scroll_animations } from "../animlations/vertical_scroll_animation";


function vertical_scroll(){
    const built_animation = Object.entries(vertical_scroll_animations).map((each)=>{
        const [key, val] = each;
        return {title:key, val};
    });

    const vertical_scroll_content = []
    
    for(let i=0; i<built_animation.length; i++){
        const {title, val} = built_animation[i]
        let sample = {...slider_vertical_scroll, href: ""}
        sample.taken = true
        sample.title = title
        sample.href = `/components/vertical_scroll_${title}`
        sample.animation = val
        vertical_scroll_content.push(sample)
    }

    const vertical_scroll_parent =  {
        parent: true,
        title: "Vertical Scroller",
        id: "vertical_scroll_id",
        grouped: vertical_scroll_content
    }

    return {
        vertical_scroll_parent, 
        vertical_scroll_content
    }
}

const {vertical_scroll_content, vertical_scroll_parent} = vertical_scroll()

export const allscrollers = {
    section: "Scroller Engines",
    Icon: ()=><GalleryVertical size={"13px"}/>,
    content: [
        // slider_vertical_scroll,
        vertical_scroll_parent,
        ...vertical_scroll_content,
    ]
}