import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { build_extend_animation, findScrollingElement } from 'z-flux-utils';
import {overlay_text_animations} from "../../../utils/animlations/overlay_text_animations"

gsap.registerPlugin(ScrollTrigger)

function DefalutLayerComponent({data, index}) {
    return (
        <div className=''>
        </div>
    )
}
    
function countNumbers(arg){
    let data = []
    if(typeof(arg)=="number"){
        for(let i=0; i<arg; i++){
            data.push(i)
        }
    } else {
        data = [...arg]
    }
    return data
}

export default function Overlay_Text({
        text, 
        children,
        textClass,
        textStyle,
        layerStyle,
        layerClass,
        containerStyle,
        containerClass,
        scrollingElement,
        trigger, // onscroll, inview
        timeline,
        stagger=0.2,
        duration=1.5,
        layers=1,
        layerColor="white",
        RenderLayer=DefalutLayerComponent,
        animationOrder="normal", //reverse, normal, random
        animation="VerticalReveal",
        extendAnimation,
        gsapScrollTrigger,
        controllerRef=null,
        useOpacity,
        animationDirection=0,
}) {
    const containerRef = useRef(null)
    const heightRef = useRef(null)
    
    const tl = timeline||gsap.timeline({})
    if(controllerRef){
        controllerRef.current = tl
    }
    
    const anim = overlay_text_animations[animation]
    const {defaultGsap, animation_origins, animationStyles} = anim

    function animate_func(){
        // const tl = timeline||gsap.timeline({})
        // if(controllerRef){
        //     controllerRef.current = tl
        // }

        const parent = heightRef.current
        if(!parent) return
        const elements = parent.children
        
        const el = (
            animationOrder==="reverse"?
            [...elements].reverse():
            elements
        )
        
        const ctx = gsap.context(()=>{
            const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(parent, true);

            tl.set(el, {
                opacity: useOpacity?1:1,
                ...build_extend_animation(defaultGsap, "from"),
                ...build_extend_animation(extendAnimation, "from"),
            })

            tl.to(el, {
                opacity: useOpacity?0:1,
                stagger,
                ...build_extend_animation(defaultGsap, "to"),
                duration,
                ...build_extend_animation(extendAnimation, "to"),
            })
            
            const triggerOptions =
                typeof gsapScrollTrigger === "function"
                    ? gsapScrollTrigger(tl) || {}
                    : gsapScrollTrigger || {};
            
            
            if(trigger==="onscroll"){
                ScrollTrigger.create({
                    trigger: el,
                    start: "top 65%",
                    end: "top 30%",
                    animation: tl,
                    scrub: true,
                    scroller,
                    ...triggerOptions
                })
            }

            if(trigger==="inview"){
                ScrollTrigger.create({
                    trigger: el,
                    start: "top bottom",
                    onEnter: () => tl.restart(),
                    onLeaveBack: () => tl.pause(),
                    animation: tl,
                    scroller,
                    ...triggerOptions
                })
            }
        }, elements)
        
        return ()=>{
            ctx.revert();
        }
    }

    // useLayoutEffect(()=>{
    useEffect(()=>{
        const anim = animate_func()
        return anim
    }, [
        animation, 
        animationOrder, 
        scrollingElement, 
        extendAnimation, 
        gsapScrollTrigger, 
        stagger, 
        animationDirection,
        overlay_text_animations,
        tl
    ])

    return (
        <div  
            style={{...containerStyle}}
            className={`overlay_text_container w-auto h-auto flex flex-col justify-center items-center ${containerClass}`}
        >
            <div className='relative w-auto h-auto'>
                {
                    text?
                    <p ref={containerRef} className={`text-parentz ${textClass}`} style={{...textStyle}}>
                        {text}
                    </p>:
                    React.cloneElement(children, {
                        ref: containerRef,
                        style: {
                            ...children.props.style,
                            ...textStyle
                        },
                        className: [
                            children.props.className, 
                            "text-parentz",
                            textClass
                        ].filter(Boolean).join(" ")
                    })
                }

                {/* multiple */}
                <div 
                    ref={heightRef}
                    className={`
                        w-full h-full bg-blacks absolute top-0 left-0
                        flex justify-start items-start
                        text_overlay_container
                    `}
                >
                    {
                        countNumbers(layers).map((data, index)=>{
                            return (
                                <div 
                                    key={index}
                                    className={`each-overlay-block ${layerClass}`}
                                    style={{
                                        width: "100%", height: "100%",
                                        willChange: "transform",
                                        background: layerColor,
                                        transformOrigin: (
                                            typeof(animationDirection)=="number"?
                                            animation_origins[animationDirection]:
                                            animationDirection
                                        ), 
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        ...animationStyles,
                                        ...layerStyle
                                    }}
                                >
                                    <RenderLayer data={data} index={index}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}