import { alltexts } from "@/utils/comp_dir/alltexts"
import Z_Text from "../../../registry/z-flux/Z_Text"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"

export default function Z_Text_Preview({
    data
}) {

    const [anim, setAnim] = useState("fade")
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
    

    return (
        <div className='w-full h-full'>
            
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div onClick={()=>controlAnimation("pause")} className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1/6
                </div>
                <div onClick={()=>controlAnimation("play")} className='font-bold darkbg w-10 h-10 absolute right-7 top-20 rounded-full flex justify-center items-center'>
                    play
                </div>
                <div onClick={()=>controlAnimation("reverse")} className='font-bold darkbg w-10 h-10 absolute right-7 top-33 rounded-full flex justify-center items-center'>
                    rev
                </div>
                <div onClick={()=>controlAnimation("restart")} className='font-bold darkbg w-10 h-10 absolute right-7 top-46 rounded-full flex justify-center items-center'>
                    res
                </div>

                <Z_Text
                    animation={anim}
                    controllerRef={controller}
                    className='text-[25px] font-bold text-center'
                    text={`
                        Text Fade Animation Preview Examples (keep scrolling) 
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    2/6
                </div>
                <Z_Text
                    animation={anim}
                    progression="char"
                    className='text-[20px]'
                    style={{color: "yellow"}}
                    playInView
                    text={`
                        This text automatically animates each time it's scrolled to view from the bottom
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    3/6
                </div>
                <Z_Text
                    animation={anim}
                    progression="char"
                    className='w11:text-[20px]'
                    playOnScroll
                    text={`
                        This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed.
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    4/6
                </div>
                <Z_Text
                    animation={anim}
                    progression="line"
                    playOnScroll
                    className='w11:text-[20px]'
                    text={`
                        Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.
                    `}
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    5/6
                </div>
                <Z_Text
                    animation={anim}
                    progression="char_line"
                    // scrollingElement={'.component-preview-container'}
                    playOnScroll
                    className='w11:text-[20px]'
                    style={{color: "yellow"}}
                    // text={`
                    //     Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop.
                    // `}
                >
                    <span 
                        // style={{color: "green"}}
                    >
                        Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop.
                    </span>
                </Z_Text>
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    6/6
                </div>
                <Z_Text
                    animation={anim}
                    className='text-[20px]'
                    // scrollingElement={'.component-preview-container'}
                    playInView
                    text={`
                        The End
                    `}
                />
            </div>
        </div>
    )
}
