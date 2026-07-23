import { GalleryVertical } from "lucide-react";
import {slider_vertical_scroll} from "./scrollers/slider_vertical_scroll"

export const allscrollers = {
    section: "Scroller Engines",
    Icon: ()=><GalleryVertical size={"13px"}/>,
    content: [
        slider_vertical_scroll
    ]
}