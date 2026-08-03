export const clipPath_animation = {

  CenterExpand: {
    clipPath: [
      "circle(0% at 50% 50%)",
      "circle(150% at 50% 50%)"
    ]
  },

  CenterShrink: {
    clipPath: [
      "circle(5% at 50% 50%)",
      "circle(100% at 50% 50%)"
    ]
  },

  AncientTimes: {
    clipPath: [
      "polygon(50% 50%,50% 50%,50% 50%,50% 50%)",
      "polygon(50% 0%,100% 50%,50% 100%,0% 50%)"
    ]
  },

  FlowTopLeft: {
    clipPath: [
      "circle(0% at 0% 0%)",
      "circle(150% at 0% 0%)"
    ]
  },

  FlowTopRight: {
    clipPath: [
      "circle(0% at 100% 0%)",
      "circle(150% at 100% 0%)"
    ]
  },

  FlowBottomLeft: {
    clipPath: [
      "circle(0% at 0% 100%)",
      "circle(150% at 0% 100%)"
    ]
  },

  FlowBottomRight: {
    clipPath: [
      "circle(0% at 100% 100%)",
      "circle(150% at 100% 100%)"
    ]
  },

  HorizontalSlit: {
    clipPath: [
      "inset(48% 0 48% 0)",
      "inset(0 0 0 0)"
    ]
  },

  VerticalSlit: {
    clipPath: [
      "inset(0 48% 0 48%)",
      "inset(0 0 0 0)"
    ]
  },








  IrisReveal: {
    clipPath: [
      "circle(2% at 50% 50%)",
      "circle(200% at 50% 50%)"
    ]
  },

  SpotlightLeft: {
    clipPath: [
      "circle(0% at 0% 50%)",
      "circle(180% at 0% 50%)"
    ]
  },

  SpotlightRight: {
    clipPath: [
      "circle(0% at 100% 50%)",
      "circle(180% at 100% 50%)"
    ]
  },

  HourglassReveal: {
    clipPath: [
      "polygon(50% 50%,50% 50%,50% 50%,50% 50%)",
      "polygon(0 0,100% 0,0 100%,100% 100%)"
    ]
  },

  WaveMask: {
    clipPath: [
      "ellipse(0% 40% at 50% 50%)",
      "ellipse(120% 120% at 50% 50%)"
    ]
  },

  ExpandingHexagon: {
    clipPath: [
      "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)",
      "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)"
    ]
  },

  StarBurstReveal: {
    clipPath: [
      "circle(0% at 50% 50%)",
      "circle(250% at 50% 50%)"
    ],
    rotation: [-20, 0]
  },

  CinematicLetterbox: {
    clipPath: [
      "inset(45% 0 45% 0)",
      "inset(0 0 0 0)"
    ]
  },

  SoftMaskReveal: {
    opacity: [0, 1],
    clipPath: [
      "circle(10% at 50% 50%)",
      "circle(150% at 50% 50%)"
    ],
    filter: [
      "blur(15px)",
      "blur(0px)"
    ]
  }
}
// dk

const saveMeAnimation = {
}

const AdvancedFX = {
    DiamondCollapse: {
        clipPath: [
            "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
            "polygon(50% 50%,50% 50%,50% 50%,50% 50%)"
        ],
        rotate: [0, 45],
        filter: [
            "blur(0px) brightness(1)",
            "blur(8px) brightness(1.4)"
        ],
        duration: [null, 1.6]
    },

    CrystalShatter: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(50% 0,100% 40%,80% 100%,20% 70%)"
        ],
        rotate: [0, 120],
        scale: [1, 0],
        filter: [
            "contrast(1)",
            "contrast(2) blur(6px)"
        ],
        duration: [null, 1.8]
    },

    EclipseBlur: {
        clipPath: [
            "circle(100%)",
            "circle(0%)"
        ],
        filter: [
            "blur(0px)",
            "blur(15px)"
        ],
        scale: [1, 0],
        duration: [null, 1.7]
    },

    LiquidPeel: {
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
        duration: [null, 1.5]
    },

    NeonCollapse: {
        scale: [1, 0],
        rotate: [0, 180],
        filter: [
            "brightness(1) saturate(1)",
            "brightness(2.5) saturate(3) blur(8px)"
        ],
        duration: [null, 1.5]
    },

    PrismSlice: {
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
        duration: [null, 1.8]
    }
}


const AdvancedClipPathFX = {

    DiamondCollapse: {
        clipPath: [
            "polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
            "polygon(50% 50%,50% 50%,50% 50%,50% 50%)"
        ],
        rotate: [0, 45],
        filter: ["blur(0px)", "blur(8px)"],
        duration: [null, 1.5]
    },

    HexagonFold: {
        clipPath: [
            "polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%)",
            "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
        ],
        scale: [1, 0],
        rotate: [0, 90],
        duration: [null, 1.6]
    },

    IrisClose: {
        clipPath: [
            "circle(120%)",
            "circle(0%)"
        ],
        filter: [
            "brightness(1)",
            "brightness(1.8) blur(10px)"
        ],
        duration: [null, 1.6]
    },

    SpotlightFade: {
        clipPath: [
            "ellipse(120% 120% at 50% 50%)",
            "ellipse(0% 0% at 50% 50%)"
        ],
        scale: [1, 0.85],
        filter: [
            "blur(0px)",
            "blur(12px)"
        ],
        duration: [null, 1.5]
    },

    TopWedge: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(50% 0,50% 0,50% 100%,50% 100%)"
        ],
        rotateX: [0, 60],
        transformPerspective: [900, 900],
        duration: [null, 1.5]
    },

    BottomCollapse: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(0 100%,100% 100%,50% 100%,50% 100%)"
        ],
        rotateX: [0, -60],
        transformPerspective: [900, 900],
        duration: [null, 1.5]
    },

    ChevronSlice: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(0 50%,50% 0,100% 50%,50% 100%)"
        ],
        rotate: [0, 30],
        scale: [1, 0],
        duration: [null, 1.6]
    },

    CrystalBreak: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(10% 10%,90% 0%,70% 100%,20% 70%)"
        ],
        rotate: [0, 120],
        scale: [1, 0],
        filter: [
            "contrast(1)",
            "contrast(2) blur(5px)"
        ],
        duration: [null, 1.7]
    },

    TrapezoidFall: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(20% 0,80% 0,60% 100%,40% 100%)"
        ],
        y: [0, 180],
        rotate: [0, -25],
        duration: [null, 1.5]
    },

    RibbonPinch: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(0 50%,50% 20%,100% 50%,50% 80%)"
        ],
        scaleX: [1, 0],
        duration: [null, 1.4]
    },

    ShurikenCollapse: {
        clipPath: [
            "polygon(50% 0%,65% 35%,100% 50%,65% 65%,50% 100%,35% 65%,0% 50%,35% 35%)",
            "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
        ],
        rotate: [0, 270],
        scale: [1, 0],
        duration: [null, 1.8]
    },

    GlassShard: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(20% 0,100% 15%,80% 100%,0 75%)"
        ],
        rotateY: [0, 90],
        transformPerspective: [1200, 1200],
        filter: [
            "brightness(1)",
            "brightness(2.2) blur(6px)"
        ],
        duration: [null, 1.8]
    },

    StarCollapse: {
        clipPath: [
            "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
            "polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)"
        ],
        rotate: [0, 180],
        scale: [1, 0],
        duration: [null, 1.9]
    },

    PrismCollapse: {
        clipPath: [
            "polygon(0 0,100% 0,100% 100%,0 100%)",
            "polygon(30% 0,70% 0,100% 100%,0 100%)"
        ],
        skewX: [0, 18],
        rotateY: [0, 60],
        transformPerspective: [900, 900],
        duration: [null, 1.6]
    },

    TunnelClose: {
        clipPath: [
            "inset(0% 0% 0% 0%)",
            "inset(50% 50% 50% 50%)"
        ],
        scale: [1, 0],
        filter: [
            "blur(0px)",
            "blur(14px)"
        ],
        duration: [null, 1.7]
    }
}