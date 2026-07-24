import { alltexts } from "../../../utils/comp_dir/alltexts"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Overlay_Text from '../../../registry/z-flux/texts/Overlay_Text'
import gsap from "gsap"

function Overlay_Text_preview() {

    const [anim, setAnim] = useState("VerticalReveal")
    const path = usePathname()
    const controller = useRef(null)

    function getFreshData() {
        for(let i=0; i<alltexts.content.length; i++){
            const each = alltexts.content[i]
            if(each.href == path){
                return each
            }
        }
        return null
    }

    function controlAnimation(which){
        if(controller.current[which]) controller.current?.[which]()
    }

    useEffect(()=>{
        const freshData = getFreshData()
        if(freshData==null) return
        setAnim(freshData.title)
    }, [alltexts, path])

    const tl = gsap.timeline({})
    return (
        <div className='w-full h-full'>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                {/* <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1/8
                </div> */}

                <Overlay_Text 
                    animation={anim}
                    textClass={"p-6"}
                    layerColor="#262626"
                    duration={3}
                >
                    <p className="font-bold text-[30px]">{anim}</p>
                </Overlay_Text>
            </div>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                >
                    <p className="font-bold text-[23px] p-5">Single</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                animation={anim}
                                textClass={"py-3"}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                >
                    <p className="font-bold text-[23px] p-5">Layers</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                animation={anim}
                                textClass={"py-3"}
                                layers={[..."  Story Time  ".toUpperCase().split("")]}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>

            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    // layers={5}
                    layerColor="#a4bfeb"
                >
                    <p className="font-bold text-[23px] p-5">Ordered Flow</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                layerColor="#a4bfeb"
                                animation={anim}
                                textClass={"py-3"}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>
            
            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    layers={5}
                >
                    <p className="font-bold text-[23px] p-5">Ordered Flow With Layers</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                animationDirection={1}
                                animation={anim}
                                textClass={"py-3"}
                                layers={10}
                                // layers={[..."  Story Time  ".toUpperCase().split("")]}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>
            
            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    layers={5}
                >
                    <p className="font-bold text-[23px] p-5">Second Paragraph Reversed</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                animation={anim}
                                animationOrder={index==1?"reverse":"normal"}
                                textClass={"py-3"}
                                layers={[..."  Story Time  ".toUpperCase().split("")]}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>
            
            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    useOpacity={true}
                    layers={5}
                >
                    <p className="font-bold text-[23px] p-5">Reversed With Opacity</p>
                </Overlay_Text>

                {
                    [
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                        "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                    ].map((item, index)=>{
                        return (
                            <Overlay_Text
                                key={index}
                                text={``}
                                trigger={"onscroll"}
                                animation={anim}
                                useOpacity={true}
                                animationOrder={"reverse"}
                                textClass={"py-3"}
                                layers={[..."  Story Time  ".toUpperCase().split("")]}
                            >
                                <p>{item}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>
            
            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    layers={"  FOOD  "}
                    RenderLayer={({data, index})=>{
                        return (
                            <div 
                                key={index}
                                className={`
                                    w-full h-full flex justify-center items-center
                                    bg-[#554971]
                                `}
                            >
                                <p className="font-bold text-[18px]">{data}</p>
                            </div>
                        )
                    }}
                >
                    <p className="font-bold text-[23px] p-5">Tell Your Story</p>
                </Overlay_Text>

                {
                    [
                       {
                            text: "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                            color: "bg-[#554971]",
                            title: "Who Invented Food",
                            desctiption: "The history of how food was invented",
                        },
                        {
                            text: "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                            color: "bg-[#554971]",
                            title: "Special Meals",
                            desctiption: "Some special meal being prepared today",
                        },
                        {
                            text: "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                            color: "bg-[#554971]",
                            title: "Health in View",
                            desctiption: "Learn healthy ways to prepare some food",
                        },
                        {
                            text: "Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.",
                            color: "bg-[#554971]",
                            title: "Food and Hunger",
                            desctiption: "Interesting facts about food and hunger",
                       },
                    ].map((item, index2)=>{
                        const {text, title, color, desctiption} = item
                        
                        return (
                            <Overlay_Text
                                key={index2}
                                text={``}
                                trigger={"onscroll"}
                                animation={anim}
                                useOpacity={true}
                                animationOrder={"reverse"}
                                textClass={"py-1"}
                                gsapScrollTrigger={{
                                    start: "top 50%",
                                    end: "top 10%"
                                }}
                                containerClass={"my-5"}
                                RenderLayer={({data, index})=>{
                                    return (
                                        <div 
                                            key={index}
                                            className={`
                                                w-full h-full flex flex-col justify-center items-center
                                                ${color}
                                            `}
                                        >
                                            <p className="font-bold text-[18px]">{title}</p>
                                            <p className="opacity-70 mt-4">{desctiption}</p>
                                        </div>
                                    )
                                }}
                            >
                                <p>{text}</p>
                            </Overlay_Text>
                        )
                    })
                }
            </div>

            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <Overlay_Text
                    animation={anim}
                    trigger={"onscroll"}
                    layers={2}
                >
                    <p className="font-bold text-[23px] p-5">Fun Fact</p>
                </Overlay_Text>

                <Overlay_Text
                    text={``}
                    trigger={"onscroll"}
                    containerClass={"mt-4"}
                    animation={anim}
                    textClass={"py-3"}
                    // RenderLayer={()=>{
                    //     return (
                    //         <div className="w-full h-full flex flex-col justify-center items-center">
                    //             <p>Cover Layer</p>
                    //             <div className="flex justify-between items-center flex-wrap gap-3 my-2">
                    //                 {
                    //                     [12,2,2,2].map((item, index)=>{
                    //                         return (
                    //                             <div key={index} className="rounded-full w-10 h-10 darkbg">
                                                    
                    //                             </div>
                    //                         )
                    //                     })
                    //                 }
                    //             </div>
                    //         </div>
                    //     )
                    // }}
                >
                    <div className="p-2">
                        <p className="py-1">This Engine can also overlay a full component of moderate size</p>

                        <div className="flex justify-between items-center flex-wrap my-2">
                            {
                                [1,2,3].map((item, index)=>{
                                    return (
                                        <div 
                                            key={index} 
                                            className="w-20 h-20 rounded-[10px] darkbg flex justify-center items-center"
                                        >
                                            <p>Box {index}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="w-full h-20 darkbg rounded-[11px] py-2">
                            
                        </div>
                    </div>                 
                </Overlay_Text>
            </div>

            <div className='w-full h-80 flex flex-col justify-center items-center relative p-3' />
        </div>
    )
}

export default Overlay_Text_preview
