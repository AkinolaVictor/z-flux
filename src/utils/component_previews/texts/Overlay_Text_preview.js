import { alltexts } from "@/utils/comp_dir/alltexts"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Overlay_Text from '../../../registry/z-flux/texts/Overlay_Text'
import { TextRevealByHeight } from "react-web-flux"

function Overlay_Text_preview({
    data
}) {

    const [anim, setAnim] = useState("BottomUp")
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
            
            <div className='w-full h-50 flex flex-col justify-center items-center relative p-3' />

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1/8
                </div>

                <Overlay_Text
                    text={``}
                    trigger={"onscroll"}
                    animation={anim}
                    // stagger={-3}
                    // layers={[..."Z-FLUX ANIMATION".split("")]}
                    layers={[..."  Story Time  ".toUpperCase().split("")]}
                    // RenderLayer={({data, index})=>{
                    //     return (
                    //         <div className="w-full h-full bg-amber-900 flex justify-center items-center">
                    //             <p className="text-white font-bold text-[30px]">{"kdkdkdkdkd"}</p>
                    //         </div>
                    //     )
                    // }}
                    // trigger={"inview"}
                    // animationOrder="reverse"
                    
                >
                    <p>
                        Instead of revealing text one character at a time, this animation unveils the content line by line for a cleaner, more natural reading experience. Each line responds seamlessly to your scrolling, progressing as you move and pausing whenever you stop, giving you complete control over the pace of the animation.
                    </p>
                </Overlay_Text>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center relative p-3' />

            {/* <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    2/8
                </div>
                <Z_Text
                    animation={anim}
                    className='text-[20px]'
                    controllerRef={controller}
                    style={{color: "yellow"}}
                    playInView
                    text={`
                        This text automatically animates each time it's scrolled to view from the bottom
                    `}
                />

                <div className="w-auto flex flex-colx justify-around items-center flex-wrap mt-5">
                    {
                        ["pause", "play", "reverse", "restart"].map((item, index)=>{
                            return (
                                <div 
                                    key={index}
                                    onClick={()=>{controlAnimation(item)}} 
                                    className={`
                                        flex justify-center w-17 items-center gap-2 cursor-pointer rounded-full border px-3 py-1 text-[12px] hover:bg-[#121212]
                                        opacity-70 hover:opacity-100 mt-4 mx-2
                                    `}
                                >
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    3/8
                </div>
                <Z_Text
                    animation={anim}
                    className='w11:text-[20px]'
                    playOnScroll
                    text={`
                        This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed.
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    4/8
                </div>
                <Z_Text
                    animation={anim}
                    progression="word"
                    className='w11:text-[20px]'
                    playOnScroll
                    text={`
                        This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed.
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    5/8
                </div>
                <Z_Text
                    animation={anim}
                    progression="word_line"
                    className='w11:text-[20px]'
                    playOnScroll
                    text={`
                        This text responds directly to your scrolling. As you scroll, more of the content is gradually revealed, creating a smooth, interactive reading experience. Stop scrolling, and the animation pauses instantly. The farther you scroll, the more you uncover; scroll less, and only part of the text is revealed.
                    `}
                />

            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    6/8
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
                    7/8
                </div>
                <Z_Text
                    animation={anim}
                    progression="char_line"
                    playOnScroll
                    className='w11:text-[20px]'
                    style={{color: "yellow"}}
                >
                    <span>
                        Rather than revealing characters one after another, every character within a line animates simultaneously. As you scroll, each line progressively fades into view with all its characters moving together, creating a smooth, synchronized effect that responds naturally to your scrolling and pauses the moment you stop.
                    </span>
                </Z_Text>
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    8/8
                </div>
                <Z_Text
                    animation={anim}
                    className='text-[20px]'
                    playInView
                    text={`
                        The End
                    `}
                />
            </div> */}
        </div>
    )
}

export default Overlay_Text_preview
