import { Workflow } from "lucide-react";
import {transition_integrated_scroll} from "./transitions/transition_integrated_scroll"

export const alltransitions = {
    section: "Transitions",
    Icon: ()=><Workflow size={"13px"}/>,
    content: [
        transition_integrated_scroll,
    ]
}