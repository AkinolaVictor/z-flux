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