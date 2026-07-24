import CodeBlock_Custom from "../../registry/locals/CodeBlock_Custom"

export const Overlay_Text_Engine_Props = [
    {
        name: "text",
        type: "string",
        description: "The text you want to animate",
        // more_des: "Many more explanation to help understand better",
        value: 12
    },
    {
        name: "animation",
        type: "string",
        // range: "true | false",
        description: "Which Animation you want. Often the title of this current page. (default is VerticalReveal)",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "animationOrder",
        type: "string",
        range: "normal | reverse | random",
        description: "Whether the animation should play in normal or reverse mode (default is normal)",
        value: true
    },
    {
        name: "animationDirection",
        type: "string",
        // range: "true or false",
        id: "skaajajsq",
        description: <p>
            Direction of animation. If you want the animation to move from left to right, or bottom to top, or from "top right" to "bottom left", or more,
            choose from the above options to suit your purpose. The first option on the list is often the default.
            <br /> 
            <br /> 
            For example if the layers animate from <b>"top"</b> to the <b>"bottom"</b> by default, 
            setting movement="bottom" will change the direction of movement.
            <br />
            <br />
            Try the available options above to suit your taste (it's unique for each animation).
        </p>,
    },
    {
        name: "trigger",
        type: "string",
        range: "onscroll | inview",
        description: "The animation progression, how you want the animation to progressively play (default is char)",
        more_des: <p>
            <b>onscroll</b>: animation responds directly to users scroll
            <br />
            <br />
            <b>inview:</b> animation automatically plays whenever user scrolls text to view (screen)
        </p>,
        value: "value1"
    },
    {
        name: "useOpacity",
        type: "boolean",
        range: "true or false",
        description: "If set to true, the opacity of each layer gets animated also. Its often looking beautiful, try it out.",
    },
    {
        name: "layers",
        type: "str | num | arr",
        // range: "true | false (default) | string",
        description: "How many layer should the overlay be. You can also pass in an array of data (see examples)",
    },
    {
        name: "layerColor",
        type: "string",
        // range: "true | false (default) | string",
        description: "Background color of each layer",
    },
    {
        name: "RenderLayer",
        type: "component",
        range: "function | component",
        description: "You can also render a custom component for each layer block.",
        value: true
    },
    {
        name: "stagger",
        type: "number",
        range: "0 and above (default is 0.2)",
        description: "How fast or slow you want the animation overlay sequence to play. (for multiple layers). SET TO 0 (zero) TO CANCEL THE SEQUENCE",
    },
    {
        name: "duration",
        type: "number",
        // range: "0 and above (default is 0.2)",
        description: "How long in seconds you want the animation to play",
    },
    {
        name: "scrollingElement",
        type: "string",
        description: <p>
            A specific scrollable element you want your animation to respond to.
        </p>,
        more_des: <p>
            By default, the animation keeps track of the nearest scrollable element, 
            (meaning when you set trigger to "onscroll" or "inview", we seek out the nearest scrollable element and make the animation to respond to it)


            <br />
            <br />
            However, If you have a specific scrollable element and you want the animation to 
            respond to this scrollable element, add a class name or id (for example: "container"),
            then set scrollingElement to that class name or id (like this scrollingElement=".container"), 
            you can also use specific tag names like: "html", "body", "nav", "div", "p", "a", "div.thisClass", "p.thisparagraph", "p#thisID", "#thisSpecificID". (or anything related)
            <br />
            <br />
            Note: This is only useful if you want to trigger your scroll animaton based a specific scrollable element, otherwise, just ignore it, it would respond to the nearest scrollable parent element.
        </p>,
        value: 12
    },
    {
        name: "controllerRef",
        type: "useRef",
        description: <div>
            For a manual control over the animation, in case you'll like to pause, play, reverse, restart, seek, (and more),
            use the containerRef for this tasks.
            <br />
            <br />
            See example 2 in the code usage section of the Z_Text animation series (select any of its varieties)    
        </div>,
    },
    {
        name: "textStyle",
        type: "object",
        description: "An object containing all the styles you want to add to your text",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "textClass",
        type: "string",
        description: "All the classes your want to add to the text container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "layerStyle",
        type: "object",
        description: "An object containing all the styles you want to add to the overlay element",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "layerClass",
        type: "string",
        description: "All the classes your want to add to the overlay element",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "containerStyle",
        type: "object",
        description: "An object containing all the styles you want to add to the main element container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "containerClass",
        type: "string",
        description: "All the classes your want to add to the main element container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "timeline",
        type: "gsap timeline",
        range: "your own gsap.timeline()",
        description: "If you want this animation to play sequentially with regards to you own timeline",
        more_des: <CodeBlock_Custom>{`// if you have your own gsap timeline (for example)
const tl = gsap.timeline()
// then pass it to the component, as in
timeline={tl}
        `}</CodeBlock_Custom>,
    },
    {
        name: "gsapScrollTrigger",
        type: "object or function",
        // range: "true | false",
        description: "Control the scrollTrigger by adding more details to it",
        more_des: <p>
            Basically everything that works in a gsap scrollTrigger also work here, 
            <br />
            <br />
            In case you want to use the timeline to do stuffs within the scrollTrigger, pass a function (instead of an object), and receive the timeline as a prop in your function, but ensure to return an object from that function.
        </p>,
        value: true
    },
    {
        name: "extendAnimation",
        type: "object",
        range: <p>sample: {`{color: ["blue", "red"]}`}</p>,
        description: "Add more styles to the animation.",
        more_des: `
            Extend the animation beyond the current state, you can animate any css gsap enabled properties, 
            primarily any style you can animate using gsap also works here (check the usage section for better example)
        `,
        value: true
    },
    // {
    //     name: "Keep this in mind",
    //     type: "",
    //     description: "Learn more about the Text Engine",
    //     more_des: <p>
    //         The underlying TextEngine template used in building this component is an extremely dynamic one, its built using gsap.
    //         <br />
    //         <br />
    //         The idea is to help you abstract the many lines of code you need to do stuffs with gsap (while dealing with texts)
    //         <br />
    //         <br />
    //         With the extendAnimation prop, you can completely transform the entire outlook of the component.
    //         <br />
    //         By default, the animation in the engine is basically to transform the opacity from 0 to 1, you can overwrite this by setting the opacity to [1,1] (with extendAnimation),
    //         You can also add more properties to style, for example if you have a big bold text, you can enlarge (scale) each character, word, lines, etc, as it fully reveals (scale: [0, 1]).
    //         <br />
    //         You can really do much more, its up to you.
    //         <br />
    //         <br />
    //         With the extendAnimation prop, you can completely transform the entire outlook of the component.
    //         <br />
    //         <br />
    //         Also with the timeline and scrolltrigger props, you can do much more, like play and pause the animation whenever you want, control the sequence of the animation, and so much more
    //         <br />
    //         <br />
    //         I recommend that you have a basic knowledge of gsap, it would really make a difference.
    //     </p>
    // }
]