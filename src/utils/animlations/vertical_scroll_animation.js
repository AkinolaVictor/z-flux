export const vertical_scroll_animations = {
    Basic: { },
    SlideUp: {
        y: ["150%", 0]
    },
    
    SlideDown: {
        y: ["-150%", 0]
    },

    ScaleUp: {
        scale: [0.5, 1],
        opacity: [0, 1]
    },

    StretchUp: {
        scaleY: [0, 1],
        opacity: [0, 1]
    },

    StretchWide: {
        scaleX: [0.2, 1],
        opacity: [0, 1]
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
        scale: [0.82, 1],
        filter: [
            "blur(38px) brightness(.75)",
            "blur(0px) brightness(1)"
        ],
        opacity: [0, 1],
        transformPerspective: [1600, 1600]
    },

    RotateUp: {
        rotate: [45, 0],
        x: [150, 0],
        opacity: [0, 1]
    },

    FlipX: {
        rotationX: [45, 0],
        x: [170, 0],
        opacity: [0, 1],
        transformPerspective: [800, 800]
    },

    ZoomBlur: {
        scale: [0.5, 1],
        opacity: [0, 1],
        filter: ["blur(30px)", "blur(0px)"]
    },
    
    EclipseFold: {
        scaleY: [0, 1],
        x: [150, 0],
        rotateX: [90, 0],
        transformPerspective: [600, 600],
    },

    CinemaFlip: {
        rotateY: [45, 0],
        scaleX: [0.5, 1],
    },
    AuroraRise: {
        opacity: [0, 1],
        y: [120, 0],
        scale: [0.75, 1],
        rotateX: [-70, 0],
        filter: ["blur(20px)", "blur(0px)"],
    },


    CosmicBloom: {
        scale: [0.4, 1],
        rotate: [-45, 0],
        opacity: [0, 1],
        filter: ["blur(25px)", "blur(0px)"],
    },

    GravityDrop: {
        y: [-350, 0],
        scaleY: [1.4, 1],
        opacity: [0, 1],
    },  

    VaporLift: {
        y: [120, 0],
        skewY: [12, 0],
        opacity: [0, 1],
        filter: ["blur(18px)", "blur(0px)"],
    }, 

    PortalOpen: {
        scale: [0.4, 1],
        rotateY: [180, 0],
        opacity: [0, 1],
        transformPerspective: [1000, 1000],
    },  

    CrystalGrow: {
        scale: [0.4, 1],
        rotate: [45, 0],
        borderRadius: ["40%", "0%"],
        opacity: [0, 1],
    }, 

    GalaxySpiral: {
        rotate: [-540, 0],
        scale: [0.15, 1],
        opacity: [0, 1],
    },

    LiquidStretch: {
        scaleX: [0.3, 1],
        scaleY: [1.6, 1],
        borderRadius: ["50%", "0%"],
    },  

    ShadowLift: {
        y: ["50%", 0],
        opacity: [0, 1],
        filter: [
            "drop-shadow(0px 0px 0px rgba(0,0,0,0))",
            "drop-shadow(0px 20px 30px rgba(0,0,0,.3))"
        ],
    },

    InkSpread: {
        clipPath: [
            "circle(5%)",
            "circle(140%)"
        ],
        filter: ["blur(18px)", "blur(0px)"],
        opacity: [0, 1],
    }, 
  

    SmokeBloom: {
        scale: [0.5, 1],
        filter: ["blur(35px)", "blur(0px)"],
        opacity: [0, 1],
    },

    TornadoLift: {
        rotate: [540, 0],
        y: [220, 0],
        opacity: [0, 1],
    }, 

    HelixEntrance: {
        x: [-180, 0],
        rotate: [360, 0],
        scale: [0.4, 1],
        opacity: [0, 1],
    },   

    PhantomFold: {
        rotateX: [110, 0],
        scaleY: [0.2, 1],
        opacity: [0, 1],
    }, 

    InfinitySpin: {
        rotate: [1080, 0],
        scale: [0.5, 1],
        opacity: [0, 1],
    },
}