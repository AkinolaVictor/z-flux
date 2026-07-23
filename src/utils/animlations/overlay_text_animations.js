
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

function revoriginss(origin, reverse){

    function reverser(each){
        if(!reverse) return each

        if(each==="top") return "bottom"
        if(each==="bottom") return "top"
        if(each==="left") return "right"
        if(each==="right") return "left"
        if(each==="center") return "center"

        return each
    }

    const originSplit = [...origin.split(" ")]
    let value = origin
    
    // y
    const first = originSplit[0]
    if(first) {
        value = reverser(first)
    }
    
    // x
    const second = originSplit[1]
    if(second) {
        value = `${value} ${reverser(second)}`
    }

    return value
}

export const overlay_text_animations = {
    VerticalReveal: {
        defaultGsap: {
            scaleY: [1, 0],
            duration: [null, 1.5],
        },
        animation_origins: [
            origins.bottom, //def
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
            origins.bottom,
            origins.bottomCenter,
            origins.centerRight, 
            origins.centerLeft, 
            origins.center, 
            origins.topLeft, 
            origins.topRight, 
            origins.bottomLeft,
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
            origins.bottomRight,
            origins.center //def
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
            // origins.top,
            origins.bottomRight,
            origins.center, //def
            origins.bottomLeft,
        ]
    },
}