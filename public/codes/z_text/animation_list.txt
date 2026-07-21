export const animation_list = {
    Fade: {
        opacity: [0, 1]
    },
    Overlay: {
        opacity: [0.2, 1]
    },
    SkewX: {
        opacity: [0, 1],
        skewX: [100, 0],
    },
    SkewXY: {
        opacity: [0, 1],
        x: [100, 0],
        y: [100, 0],
        skewX: [-100, 0]
    },
    SkewXY: {
        opacity: [0, 1],
        x: [100, 0],
        y: [100, 0],
        skewX: [-100, 0]
    },
    TopSkewXY: {
        opacity: [0, 1],
        x: [100, 0],
        y: [-100, 0],
        skewX: [-100, 0]
    },
    RightSkewX: {
        opacity: [0, 1],
        x: [100, 0],
        skewX: [100, 0],
    },
    FromRight: {
        opacity: [0, 1],
        x: [100, 0],
    },
    FromLeft: {
        opacity: [0, 1],
        x: [-100, 0],
    },
    FromTop: {
        opacity: [0, 1],
        y: [-100, 0],
    },
    FromBottom: {
        opacity: [0, 1],
        y: [100, 0],
    },
    FadeUp: {
        opacity: [0, 1],
        y: ["100%", "0%"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    ScaleXY: {
        x: [100, 0],
        y: [100, 0],
        scale: [0, 1],
        stagger: [null, 0.5],
        duration: [null, 1]
    },
}