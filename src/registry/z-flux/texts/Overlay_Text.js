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

export default function Overlay_Text(props) {
    const {
        text, 
        children,
        textClass,
        textStyle,
        layerStyle,
        layerClass,
        scrollingElement,
        trigger, // onscroll, inview
        timeline,
        stagger=0.2,
        duration=1.5,
        layers=1,
        RenderLayer=DefalutLayerComponent,
        animationOrder="normal", //reverse, normal, random
        animation="VerticalReveal",
        extendAnimation,
        gsapScrollTrigger,
        controllerRef=null,
        useOpacity,
        movement=0,
    } = props
    const containerRef = useRef(null)
    const heightRef = useRef(null)
    // const [anim, setAnim] = useState(overlay_text_animations[animation])
    
    const tl = timeline||gsap.timeline({})
    if(controllerRef){
        controllerRef.current = tl
    }

    // useEffect(()=>{
    //     setAnim(overlay_text_animations[animation])
    // }, [animation, overlay_text_animations])
    
    // const {defaultGsap, animation_origins, animationStyles} = overlay_text_animations[animation]
    const anim = overlay_text_animations[animation]
    const {defaultGsap, animation_origins, animationStyles} = anim
    function animate_func(){
        const elements = document.querySelectorAll(".each-overlay-block")
        if(!elements) return
        
        const el = (
            animationOrder==="reverse"?
            [...elements].reverse():
            elements
        )
        
        const ctx = gsap.context(()=>{
            const scroller = scrollingElement?document.querySelector(`${scrollingElement}`):findScrollingElement(".overlay_text_container");

            tl.set(el, {
                opacity: useOpacity?1:1,
                ...build_extend_animation(defaultGsap, "from"),
                ...build_extend_animation(extendAnimation, "from"),

            })

            tl.to(el, {
                opacity: useOpacity?0:1,
                stagger,
                duration,
                ...build_extend_animation(defaultGsap, "to"),
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
        
        return ()=>ctx.revert()
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
        movement,
        overlay_text_animations
    ])

    return (
        <div className='overlay_text_container w-auto h-auto flex flex-col justify-center items-center'>
            {/* <div className='relative w-auto h-auto max-w-201'> */}
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
                                    // ref={heightRef}
                                    className={`each-overlay-block ${layerClass}`}
                                    style={{
                                        // margin: 0, padding: 0,
                                        width: "100%", height: "100%",
                                        willChange: "transform",
                                        background: "white",
                                        transformOrigin: (
                                            typeof(movement)=="number"?
                                            animation_origins[movement]:
                                            movement
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