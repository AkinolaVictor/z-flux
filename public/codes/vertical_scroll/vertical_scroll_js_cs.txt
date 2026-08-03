import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {useLayoutEffect, useMemo, useRef, useState } from 'react';
import { 
    build_extend_animation, 
    findScrollingElement, 
    getScrollHeight, 
    value_negator, 
    vertical_scroll_animations
} from 'z-flux-utils';

gsap.registerPlugin(ScrollTrigger)

export default function VerticalScroll(props) {
    const {
        scrollingElement,
        direction="normal", //normal, reverse, backward
        children = <div>Nothing to Display, Please add some properly styled content</div>,
        style,
        className,
        startAnimation="bottom",  //top, within, bottom
        gsapScrollTrigger,
        scrollSpeed=1, // -.5, 0.6, 1,2,3,4,5,6 ++
        timeline,
        animation,
        extendAnimation,
    } = props

    const containerRef = useRef()
    const [height, setHeight] = useState(0)
    const useAnimation = vertical_scroll_animations[animation]
    const differentDirection = direction==="reverse"||direction==="backward"
    
    const animations = useMemo(() => {
        const from = build_extend_animation(useAnimation, "from");
        const to = build_extend_animation(useAnimation, "to");
        const extendFrom = build_extend_animation(extendAnimation, "from");
        const extendTo = build_extend_animation(extendAnimation, "to");

        if (differentDirection) {
            from.x = value_negator(from, "x");
            extendFrom.x = value_negator(extendFrom, "x");
        }

        return {
            from,
            to,
            extendFrom,
            extendTo,
        };
    }, [useAnimation, extendAnimation, differentDirection]);
    
    useLayoutEffect(() => {
        const observer = new ResizeObserver(() => {
            getScrollHeight(
                containerRef,
                setHeight
            )
            ScrollTrigger.refresh()
        })
        observer.observe(containerRef.current)
        return ()=>observer.disconnect()
    }, [])

    useLayoutEffect(()=>{
        const el = containerRef.current
        if(!el || !height) return;
        const children = [...el.children]
        
        let ctx = gsap.context(()=>{
            
            const useDirection = {
                normal: -height,
                reverse: height,
                backward: height
            }[direction]??-height
            
            const winHeight = window?.innerHeight||innerHeight||0
            const mid = (winHeight - el.getBoundingClientRect().height)/2
            
            const start = {
                top: "top top",
                within: `top ${mid}px`,
                bottom: "bottom bottom",
            }[startAnimation]??startAnimation
            
            const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(el, true);
            const tl = timeline||gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start,
                    end: `+=${height / scrollSpeed}`,
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    ...gsapScrollTrigger 
                }
            });

            tl.to(el, {
                x: useDirection,
                ease: "none"
            });

            gsap.set(children, {
                ...animations.from,
                ...animations.extendFrom,
            });

            children.forEach((child) => {
                gsap.to(child, {
                    ...animations.to,
                    ...animations.extendTo,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: child,
                        containerAnimation: tl,
                        start: (
                            differentDirection?
                            "right 25%":
                            "left 75%"
                        ),
                        end: (
                            differentDirection?
                            "right 75%":
                            "left 25%"
                        ),
                        scrub: true,
                    }
                });
            });
        }, containerRef)

        return ()=>ctx.revert()
    }, [height, containerRef, animation, direction, startAnimation, gsapScrollTrigger, scrollSpeed, timeline, extendAnimation])


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
            {  React.Children.map(children, child => child) }
        </div>
    )
}
