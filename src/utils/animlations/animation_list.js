
const module = require("z-flux-utils").animation_list

const local = {
    Fade: {
        opacity: [0, 1],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeUp: {
        opacity: [0, 1],
        y: [100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeDown: {
        opacity: [0, 1],
        y: [-100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeFromRight: {
        opacity: [0, 1],
        x: [100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeFromLeft: {
        opacity: [0, 1],
        x: [-100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeBlur: {
        opacity: [0, 1],
        filter: ["blur(10px)", "blur(0px)"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeUpBlur: {
        opacity: [0, 1],
        y: [100, 0],
        filter: ["blur(10px)", "blur(0px)"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeDownBlur: {
        opacity: [0, 1],
        y: [-100, 0],
        filter: ["blur(10px)", "blur(0px)"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeFromRightBlur: {
        opacity: [0, 1],
        x: [100, 0],
        filter: ["blur(10px)", "blur(0px)"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    FadeFromLeftBlur: {
        opacity: [0, 1],
        x: [-100, 0],
        filter: ["blur(10px)", "blur(0px)"],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    Overlay: {
        opacity: [0.2, 1],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    BendRight: {
        opacity: [0, 1],
        skewX: [100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    BendLeft: {
        opacity: [0, 1],
        skewX: [-100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    BendFromBottom: {
        opacity: [0, 1],
        x: [100, 0],
        y: [100, 0],
        skewX: [-100, 0],
        duration: [null, 1],
        stagger: [null, 0.1]
    },
    BendFromTop: {
        opacity: [0, 1],
        x: [100, 0],
        y: [-100, 0],
        skewX: [100, 0],
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
    CameraPush: {
        z: [-900, 0],
        scale: [0.45, 1],
        rotationX: [8, 0],
        rotationY: [-8, 0],
        opacity: [0, 1],
        filter: [
            "blur(25px)",
            "blur(0px)"
        ],
        transformPerspective: [2200, 2200]
    },
    CinematicFocus: {
        opacity: [0, 1],
        filter: ["blur(50px)", "blur(0px)"],
        x: [-120, 0],
        y: [-100, 0],
        scale: [0.2, 1],
        rotation: [-90, 0],
        skewX: [-24, 0],
        stagger: [null, 0.5],
        duration: [null, 1]
    },
    
    DispersedFocus: {
        opacity: [0, 1],
        filter: ["blur(50px)", "blur(0px)"],
        x: [80, 0],
        y: [-75, 0],
        scale: [3.32, 1],
        rotation: [-72, 0],
        rotationX: [-15, 0],
        rotationY: [20, 0],
        skewX: [-16, 0],
        stagger: [null, 0.5],
        duration: [null, 1]
    },

    PerspectiveFlipLeft: {
        rotationY: [-90, 0],
        transformPerspective: [1000, 1000],
        opacity: [0, 1],
        stagger: [null, 0.5],
        duration: [null, 1]
    },

    PerspectiveFlipRight: {
        rotationY: [90, 0],
        transformPerspective: [1000, 1000],
        opacity: [0, 1],
        stagger: [null, 0.5],
        duration: [null, 1]
    },

    ElasticScale: {
        scale: [0.2, 1],
        opacity: [0, 1],
        stagger: [null, 0.5],
        duration: [null, 1]
    },

    FilmRoll: {
        opacity: [0, 1],
        rotation: [720, 0],
        stagger: [null, 0.5],
        duration: [null, 1],
        y: [120, 0]
    },

    GalaxySpin: {
        opacity: [0, 1],
        rotation: [2160, 0],
        scale: [0.15, 1]
    },
    
    RotateClockwise: {
        rotation: [-180, 0],
        stagger: [null, 0.5],
        duration: [null, 1]
    },
    
    RotateCounterClockwise: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [180, 0]
    },
    
    RotateSmallLeft: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [-20, 0]
    },
    
    RotateSmallRight: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [20, 0]
    },
    
    RotateScaleIn: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [-90, 0],
        scale: [0.5, 1],
        opacity: [0, 1]
    },
    
    UpsideDown: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [180, 0],
        // opacity: [0, 1]
    },
    
    FlapRotate: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotationX: [180, 0],
        // opacity: [0, 1]
    },

    FlapLock: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotationY: [180, 0],
        // opacity: [0, 1]
    },

    FlapRoll: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotationZ: [180, 0],
        // opacity: [0, 1]
    },

    FlapRoll2: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotationZ: [-180, 0],
        // opacity: [0, 1]
    },
    
    FlapScatter: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [180, 0],
        rotationX: [180, 0],
        // opacity: [0, 1]
    },
    
    FlapScatter2: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [-180, 0],
        rotationX: [-180, 0],
        // opacity: [0, 1]
    },

    SpinIn: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [-360, 0],
        opacity: [0, 1]
    },
    
    SpinOut: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotation: [360, 0],
        opacity: [0, 1]
    },
    
    PrismRotate: {
        stagger: [null, 0.5],
        duration: [null, 1],
        rotationY: [-140, 0],
        rotationX: [35, 0],
        rotationZ: [-15, 0],
        z: [-280, 0],
        x: [-60, 0],
        scale: [0.78, 1],
        opacity: [0, 1],
        transformPerspective: [2000, 2000]
    },

    FoldOpen: {
        rotationX: [-110, 0],
        y: [80, 0],
        z: [-120, 0],
        scaleY: [0.85, 1],
        opacity: [0, 1],
        transformPerspective: [1800, 1800],
        transformOrigin: ["center top", "center top"]
    },

    OrbitDrop: {
        rotationY: [140, 0],
        rotationX: [-30, 0],
        rotationZ: [18, 0],
        x: [180, 0],
        y: [-140, 0],
        z: [-450, 0],
        scale: [0.65, 1],
        opacity: [0, 1],
        transformPerspective: [2200, 2200]
    },

    CinematicZoom: {
        opacity: [0, 1],
        scale: [3, 1],
    },
    
    CinematicZoomBlur: {
        opacity: [0, 1],
        scale: [7, 1],
        filter: [
            "blur(18px)",
            "blur(0px)"
        ]
    },

    CinematicZoom_5x: {
        opacity: [0, 1],
        scale: [5, 1],
    },


    CinematicZoom_8x: {
        opacity: [0, 1],
        scale: [8, 1],
    },

    CinematicZoom_20x: {
        opacity: [0, 1],
        scale: [20, 1],
    },

    CinematicZoom_50x: {
        opacity: [0, 1],
        scale: [50, 1],
    },
    
    DistortedZoom: {
        opacity: [0, 1],
        scale: [50, 1],
        filter: [
            "blur(18px)",
            "blur(0px)"
        ]
    },

    EpicTitle: {
        opacity: [0, 1],
        scale: [6, 1],
        rotationY: [25, 0],
        filter: [
            "brightness(4) blur(30px)",
            "brightness(1) blur(0px)"
        ]
    },


    FilmFocus: {
        opacity: [0, 1],
        scale: [1.5, 1],
        filter: [
            "blur(30px) contrast(.7)",
            "blur(0px) contrast(1)"
        ]
    },

    JustAppear: {
        opacity: [0, 1],
        clipPath: [
            "inset(0 0 100% 0)",
            "inset(0 0 0 0)"
        ]
    }, 

    LensZoom: {
        opacity: [0, 1],
        scale: [3, 1],
        rotation: [-8, 0]
    }, 

    FinalReveal: {
        opacity: [0, 1],
        rotationX: [90, 0],
        scale: [3, 1]
    },

    horizonRise: {
        opacity: [0, 1],
        y: [250, 0],
        rotationX: [60, 0]
    },

    Camera_1996: {
        opacity: [0, 1],
        scale: [12, 1],
        rotation: [1080, 0],
        filter: [
            "brightness(15) blur(60px)",
            "brightness(1) blur(0px)"
        ]
    },

    AnamorphicReveal: {
        opacity: [0, 1],
        scaleX: [5, 1],
        scaleY: [0.4, 1],
        filter: [
            "blur(25px)",
            "blur(0px)"
        ]
    },

    SlashEntrance: {
        opacity: [0, 1],
        clipPath: [
            "inset(45% 0 45% 0)",
            "inset(0 0 0 0)"
        ]
    },

    

}

const useLocal = process.env.NEXT_PUBLIC_DEVELOPMENT_ENV==="local"?local:{}

export const animation_list = {
    // ...module,
    ...useLocal
}