// Animation Presets

import { animation_list } from "./animation_list";
import { clipPath_animation } from "./clipPath_animations";

export const textPack_animations = {
    ...animation_list,


    GlitchIn: {
        opacity: [0, 1],
        x: [-15, 0],
        rotation: [-3, 0],
        filter: [
        "contrast(3) blur(8px)",
        "contrast(1) blur(0px)"
        ]
    },
    ...clipPath_animation
};
