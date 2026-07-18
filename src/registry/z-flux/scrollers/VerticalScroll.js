import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { Fragment, useEffect, useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger)

export default function VerticalScroll({
    scrollingElement,
    direction="normal", //normal, reverse, backward
    children = <div>Nothing to Display, Please add some properly styled content</div>,
    style,
    className,
    startAnimation="bottom",  //top, within, bottom
    gsapScrollTrigger,
    scrollSpeed=1, // -.5, 0.6, 1,2,3,4,5,6 ++
}) {
    const containerRef = useRef()
    const [ready, setReady] = useState(false)
    const [height, setHeight] = useState(0)

    function performCalculations(){
        if(ready) return
        function getTotalWidth(){
            const el = containerRef.current
            if(!el) return
            const children = el.children
            const first = children[0].getBoundingClientRect().width
            let total = 0
            for(let i=0; i<children.length; i++){
                const eachChild = children[i]
                const width = eachChild.getBoundingClientRect().width
                total=total+width
            }
            return total - first
        }

        const totalWidth = getTotalWidth()
        if(totalWidth) setHeight(totalWidth)
        setReady(true)
    }
    
    function initialize_animation(){
        const el = containerRef.current;
        if(!el || !ready) return;

        function findScrollingElement(elem, direct){
            let parent = direct?elem:document.querySelector(elem)
            
            while(parent) {
                const {overflowY} = getComputedStyle(parent)
                if((overflowY === "auto" || overflowY === "scroll") && (parent.scrollHeight > parent.clientHeight)){
                    return parent
                }
                parent = parent.parentElement
            }

            return document.scrollingElement
        }

        const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(el, true);
    
        const useDirection = direction==="normal"?
                            -height:
                            direction==="reverse"?
                            height:
                            direction==="backward"?
                            height:
                            -height

        const mid = (window.innerHeight - el.getBoundingClientRect().height)/2
        const start = startAnimation==="top"?
                      "top top":
                      startAnimation==="within"?
                      `top ${mid}px`:
                      startAnimation==="bottom"?
                      "bottom bottom":
                      startAnimation

        ScrollTrigger.create({
            trigger: el,
            scroller,
            start,
            end: `+=${height/scrollSpeed}px`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self)=>{
                gsap.to(el, {
                    x: `${useDirection*self.progress}`,
                    ease: "power3.out"
                })
            },
            ...gsapScrollTrigger
        })

        return ()=>{
            ScrollTrigger.refresh()
        }
    }

    useEffect(()=>{
        performCalculations()
    }, [])

    useEffect(()=>{
        const anim = initialize_animation()
        return anim
    }, [ready, height])


    return (
        <div 
            ref={containerRef} 
            style={{
                width: "100%", height: "auto", position: "relative",
                display: "flex", 
                alignItems: "flex-start",
                justifyContent: `${direction=="backward"?"flex-end":"flex-start"}`,
                flexDirection: `${direction=="reverse"?"row-reverse":"row"}`,
                ...style
            }}
            className={`${className} scroll_container`}
        >
            {
                React.Children.map(children, (child, index)=>{
                    return (
                        <Fragment key={index}>
                            {child}
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

