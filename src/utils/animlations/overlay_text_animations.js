const module = require("z-flux-utils").overlay_text_animations
const origins = {
    center: "center",
    left: "left",
    right: "right",
    top: "top",
    bottom: "bottom",
    
    topLeft: "top left", 
    topRight: "top right", 
    topCenter: "top center",

    bottomRight: "bottom right", 
    bottomLeft: "bottom left", 
    bottomCenter: "bottom center", 

    centerLeft: "center left", 
    centerRight: "center right"
}

const bothScale = [
    origins.bottomRight, //def
    origins.center, 
    origins.bottom,
    origins.bottomCenter,
    origins.centerRight, 
    origins.centerLeft, 
    origins.topLeft, 
    origins.topRight, 
    origins.bottomLeft,
    origins.top,
] 

const local = {
    VerticalReveal: {
        defaultGsap: {
            scaleY: [1, 0],
            duration: [null, 1.5],
        },
        animation_origins: [
            origins.bottom, //def
            origins.center,
            origins.top,
        ]

    },
    HorizontalReveal: {
        defaultGsap: {
            scaleX: [1, 0],
            duration: [null, 1.5],
            // stagger: [null, 0]
        },
        animation_origins: [
            origins.right, //def
            origins.center,
            origins.left,
        ]
    },
    VerticalBlur: {
        defaultGsap: {
            scaleY: [1, 0],
            filter: ["blur(30px)", "blur(0px)"],
            duration: [null, 1.5],
        },
        animation_origins: [
            origins.bottom, //def
            origins.center,
            origins.top,
        ]

    },
    HorizontalBlur: {
        defaultGsap: {
            scaleX: [1, 0],
            filter: ["blur(30px)", "blur(0px)"],
            duration: [null, 1.5],
            // stagger: [null, 0]
        },
        animation_origins: [
            origins.right, //def
            origins.center,
            origins.left,
        ]
    },

    LensClose: {
        defaultGsap: {
            scale: [1, 0],
            filter: ["blur(0px)", "blur(10px)"],
            borderRadius: ["0%", "100%"],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    IrisClose: {
        defaultGsap: {
            clipPath: [
                "circle(120%)",
                "circle(0%)"
            ],
            filter: [
                "brightness(1)",
                "brightness(1.8) blur(10px)"
            ],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    Flap: {
        defaultGsap: {
            scaleY: [1, 0],
            duration: [null, 1.5],
            borderRadius: ["0%", "100%"],
            stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },
    Flapy: {
        defaultGsap: {
            scaleY: [1, 0],
            scaleX: [1, 0],
            duration: [null, 1.5],
            borderRadius: ["0%", "100%"],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },
    Cool: {
        defaultGsap: {
            scaleX: [1, 0],
            scaleY: [1, 0],
            duration: [null, 1.5]
        },
        animation_origins: [
            origins.bottomRight, //def
            origins.center, 
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.topLeft, 
            origins.topRight, 
            origins.bottomLeft,
            origins.top,
        ]
    },
    FlayUp: {
        defaultGsap: {
            scaleX: [1, 0],
            scaleY: [1, 0],
            y: [0, -100],
            duration: [null, 1.5]
        },
        animation_origins: [
            origins.center, //def
            origins.bottomRight,
            origins.bottomLeft,
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.topLeft, 
            origins.topRight, 
            origins.top,
        ]
    },
    FlayDown: {
        defaultGsap: {
            scaleX: [1, 0],
            scaleY: [1, 0],
            y: [0, 100],
            duration: [null, 1.5]
        },
        animation_origins: [
            origins.center, //def
            origins.bottomRight,
            origins.bottomLeft,
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.topLeft, 
            origins.topRight, 
            origins.top,
        ]
    },
    PeelAway: {
        defaultGsap: {
            scaleX: [1, 0],
            scaleY: [1, 0],
            x: [0, -185],
            y: [0, -185],
            duration: [null, 1.5]
        },
        animation_origins: [
            origins.center, //def
            origins.bottomRight,
            origins.bottomLeft,
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.topLeft, 
            origins.topRight, 
            origins.top,
        ]
    },
    PeelDown: {
        defaultGsap: {
            scaleX: [1, 0],
            scaleY: [1, 0],
            x: [0, -70],
            y: [0, 70],
            duration: [null, 1.5]
        },
        animation_origins: [
            origins.bottomRight,
            origins.top,
            origins.center, //def
            origins.bottomLeft,
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.topLeft, 
            origins.topRight, 
        ]
    }, 

    EclipseFold: {
        defaultGsap: {
            scaleY: [1, 0],
            x: [0, 150],
            rotateX: [0, 90],
            transformPerspective: [600, 600],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.left,
            origins.right, //def
        ]
    },

    CinemaFlip: {
        defaultGsap: {
            rotateY: [0, 90],
            scaleX: [1, 0],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    PushFall: {
        defaultGsap: {
            rotate: [0, 140],
            scale: [1, 0],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            ...bothScale,
            // origins.center,
            // origins.bottom,
            // origins.top, //def
        ]
    },

    Underline: {
        defaultGsap: {
            rotateX: [0, -95],
            yPercent: [0, 40],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            // origins.bottom,
            // origins.top, //def
        ]
    },

    RisingPanel: {
        defaultGsap: {
            rotateX: [0, 95],
            yPercent: [0, -100],
            opacity: [1, 0], 
            transformPerspective: [700, 700],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    PrismFold: {
        defaultGsap: {
            rotateY: [0, 120],
            skewX: [0, 18],
            scaleX: [1, 0],
            // stagger: [null, 0.8],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    FallingCurtain: {
        defaultGsap: {
            yPercent: [0, 140],
            skewX: [0, 12],
            scaleY: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    HorizonSplit: {
        defaultGsap: {
            scaleX: [1, 0],
            rotateY: [0, -90],
            transformPerspective: [900, 900],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    ZenithFold: {
        defaultGsap: {
            rotateX: [0, 100],
            scaleY: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },
 
    EclipseBlur: {
        defaultGsap: {
            clipPath: [
                "circle(100%)",
                "circle(0%)"
            ],
            filter: [
                "blur(0px)",
                "blur(15px)"
            ],
            scale: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    LiquidPeel: {
        defaultGsap: {
            borderRadius: [
                "0%",
                "65% 35% 70% 30% / 30% 60% 40% 70%"
            ],
            skewX: [0, 25],
            rotate: [0, 35],
            filter: [
                "blur(0px)",
                "blur(5px)"
            ],
            scale: [1, 0]
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    NeonCollapse: {
        defaultGsap: {
            scale: [1, 0],
            rotate: [0, 180],
            filter: [
                "brightness(1) saturate(1)",
                "brightness(2.5) saturate(3) blur(8px)"
            ],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    PrismSlice: {
        defaultGsap: {
            clipPath: [
                "polygon(0 0,100% 0,100% 100%,0 100%)",
                "polygon(0 0,100% 15%,85% 100%,15% 85%)"
            ],
            rotateY: [0, 90],
            transformPerspective: [900, 900],
            filter: [
                "hue-rotate(0deg)",
                "hue-rotate(180deg)"
            ],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },
 
    DiamondCollapse: {
        defaultGsap: {
            clipPath: [
                "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                "polygon(50% 50%,50% 50%,50% 50%,50% 50%)"
            ],
            rotate: [0, 45],
            filter: ["blur(0px)", "blur(8px)"],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    HexagonFold: {
        defaultGsap: {
            clipPath: [
                "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)",
                "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
            ],
            scale: [1, 0],
            rotate: [0, 90],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    SpotlightFade: {
        defaultGsap: {
            clipPath: [
                "ellipse(120% 120% at 50% 50%)",
                "ellipse(0% 0% at 50% 50%)"
            ],
            scale: [1, 0.85],
            filter: [
                "blur(0px)",
                "blur(12px)"
            ],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    TopWedge: {
        defaultGsap: {
            clipPath: [
                "polygon(0 0,100% 0,100% 100%,0 100%)",
                "polygon(50% 0,50% 0,50% 100%,50% 100%)"
            ],
            rotateX: [0, 60],
            transformPerspective: [900, 900],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    BottomCollapse: {
        defaultGsap: {
            clipPath: [
                "polygon(0 0,100% 0,100% 100%,0 100%)",
                "polygon(0 100%,100% 100%,50% 100%,50% 100%)"
            ],
            rotateX: [0, -60],
            transformPerspective: [900, 900],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    }, 

    TrapezoidFall: {
        defaultGsap: {
            clipPath: [
                "polygon(0 0,100% 0,100% 100%,0 100%)",
                "polygon(20% 0,80% 0,60% 100%,40% 100%)"
            ],
            y: [0, 180],
            rotate: [0, -25],
            scale: [1, 0]
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    RibbonPinch: {
        defaultGsap: {
            clipPath: [
                "polygon(0 0,100% 0,100% 100%,0 100%)",
                "polygon(0 50%,50% 20%,100% 50%,50% 80%)"
            ],
            scaleX: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    ShurikenCollapse: {
        defaultGsap: {
            clipPath: [
                "polygon(50% 0%,65% 35%,100% 50%,65% 65%,50% 100%,35% 65%,0% 50%,35% 35%)",
                "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
            ],
            rotate: [0, 270],
            scale: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    },

    StarCollapse: {
        defaultGsap: {
            clipPath: [
                "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
                "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
            ],
            rotate: [0, 180],
            scale: [1, 0],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    }, 

    TunnelClose: {
        defaultGsap: {
            clipPath: [
                "inset(0% 0% 0% 0%)",
                "inset(50% 50% 50% 50%)"
            ],
            scale: [1, 0],
            filter: [
                "blur(0px)",
                "blur(14px)"
            ],
        },
        animation_origins: [
            origins.center,
            origins.bottom,
            origins.top, //def
        ]
    }

}
const useLocal = process.env.NEXT_PUBLIC_DEVELOPMENT_ENV==="local"?local:{}

export const overlay_text_animations = {
    ...module,
    // ...useLocal,
}