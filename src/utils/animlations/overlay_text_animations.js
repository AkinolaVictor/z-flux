
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

export const overlay_text_animations = {
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
    FlapRotate: {
        defaultGsap: {
            scaleY: [1, 0],
            scaleX: [1, 0],
            rotate: [0, 120],
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
    BottomLeftXY: {
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
    PeelUp: {
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
}
