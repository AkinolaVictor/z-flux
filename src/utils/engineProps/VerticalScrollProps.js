import CodeBlock_Custom from "../../registry/locals/CodeBlock_Custom"

export const VerticalScrollProps = [
    {
        name: "style",
        type: "object",
        description: "An object containing all the styles you want to add to the scroll container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "className",
        type: "string",
        description: "All the classes your want to add to the scroll container",
        // more_des: "Many more explanation to help understand better",
        // value: true
    },
    {
        name: "startAnimation",
        type: "string",
        range: "top | within | bottom ",
        description: "At what position on the screen should the scrolling begin",
        more_des: <p>
            top: to start horizontal movement at the top of the scrollable container
            <br />
            <br />
            within: to start horizontal movement somewhere within the scrollable container
            <br />
            <br />
            bottom: to start horizontal movement at the bottom of the scrollable container
            <br />
            <br />
            Any gsap accepted value can also work here, for example:
            <br />
            <br />
            "top 50px": means to start the animation when the top of this component reaches 50px of the screen (or maybe of a specific scrollable element, depending on your project)
            <br />
            <br />
            "center 50px": means to start the animation when the center of this component reaches 50px of the screen (or maybe of a specific scrollable element, depending on your project)
            <br />
            <br />
            "bottom 390px": means to start the animation when the bottom of this component reaches 390px of the screen (or maybe of a specific scrollable element, depending on your project)
        </p>,
    },
    {
        name: "scrollSpeed",
        type: "number",
        range: "greater or less than 1",
        description: "How fast or slow you want the animation to play while scrolling. (default value is 1)",
        more_des: <p>
            If you want it to scroll slowly, set the value to be less than 1
            <br />
            <br />
            If you want it to scroll fast, set the value to be greater than 1
        </p>,
    },
    {
        name: "direction",
        type: "normal | within | bottom",
        description: "Your preferred scroll direction",
    },
    {
        name: "scrollingElement",
        type: "string",
        description: <p>
            A specific scrollable element you want your animation to respond to.
        </p>,
        more_des: <p>
            By default, the animation keeps track of the nearest scrollable element, 
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
        name: "gsapScrollTrigger",
        type: "object",
        // range: "true | false",
        description: "Control the scrollTrigger by adding more details to it",
        more_des: <p>
            Basically everything that works in a gsap scrollTrigger also work here, 
        </p>,
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