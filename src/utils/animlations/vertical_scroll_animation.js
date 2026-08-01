export const vertical_scroll_animations = {
    Basic: { },
    SlideUp: {
        y: ["150%", 0]
    },
    
    SlideDown: {
        y: ["-150%", 0]
    },

    SlideDiagonalUp: {
        x: ["200", 0],
        y: ["200%", 0]
    },

    SlideDiagonalDown: {
        x: ["100", 0],
        y: ["-200%", 0]
    },

    FloatingCardReveal: {
        y: ["200%", 0],
        x: [100, 0],
        z: [100, 0],
        // rotationX: [18, 0],
        // rotationY: [20, 0],
        // rotationZ: [-60, 0],
        scale: [0.82, 1],
        // filter: [
        //     "blur(18px) brightness(.75)",
        //     "blur(0px) brightness(1)"
        // ],
        // opacity: [0, 1],
        transformPerspective: [1600, 1600]
    },
    perspectiveFlipLeft: {
        rotationY: [-95, 0],
        rotationX: [12, 0],
        x: [-120, 0],
        z: [-250, 0],
        scale: [0.75, 1],
        opacity: [0, 1],
        transformPerspective: [1200, 1200],
        transformOrigin: ["left center", "left center"]
    },
    FadeLeft: {
        x: ["-120%", 0],
        opacity: [0, 1]
    },

    ScaleUp: {
        scale: [0.7, 1],
        opacity: [0, 1]
    },

    RotateUp: {
        y: [80, 0],
        rotation: [15, 0],
        opacity: [0, 1]
    },

    FlipX: {
        rotationX: [-90, 0],
        opacity: [0, 1],
        transformPerspective: [800, 800]
    },

    ZoomBlur: {
        scale: [0.6, 1],
        opacity: [0, 1],
        filter: ["blur(20px)", "blur(0px)"]
    },


    // slides

    slideLeft: {
        x: [-150, 0]
    },

    slideRight: {
        x: [150, 0]
    },

    slideUpFade: {
        y: ["200%", 0],
        opacity: [0, 1]
    },

    slideDownFade: {
        y: ["-200%", 0],
        opacity: [0, 1]
    },

    slideLeftFade: {
        x: [-150, 0],
        opacity: [0, 1]
    },

    slideRightFade: {
        x: [150, 0],
        opacity: [0, 1]
    },

    slideDiagonalTopLeft: {
        x: [-120, 0],
        y: [-120, 0],
        opacity: [0, 1]
    },

    slideDiagonalBottomRight: {
        x: [120, 0],
        y: [120, 0],
        opacity: [0, 1]
    }
}