import Z_Text from '@/registry/z-flux/texts/Z_Text'
import { alltexts } from '@/utils/comp_dir/alltexts'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

function Z_Text_Reverse_Preview() {

    const [anim, setAnim] = useState("Fade")
    const path = usePathname()
    const controller = useRef(null)
    const [moreExamples, setMoreExamples] = useState(0)
    // let moreExamples = useRef(0)

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
        <div className='w-full h-full min-h-full'>
            
            <div className='w-full min-h-full h-auto flex flex-col justify-center items-center relative p-3'>
                {/* <div className='font-bold darkbg w-10 h-10 absolute right-7 top-7 rounded-full flex justify-center items-center'>
                    1
                </div> */}

                <Z_Text
                    animation={anim}
                    className='text-[30px] w6:text-[45px] font-bold text-center flex justify-center items-center py-5 text-amber-200'
                    text={`${anim} Animation`}
                />

                <Z_Text
                    animation={anim}
                    className='text-[13px] w6:text-[15px] flex justify-center items-center font-bold text-center'
                    text={"(Keep Scrolling)"}
                />
            </div>
            
            <div className="w-full h-auto">
                {
                    [
                        {
                            progression: "char",
                            type: "Animate through Characters"
                        },
                        {
                            progression: "word",
                            type: "Animate through Words"
                        },
                        {
                            progression: "line",
                            type: "Animate through Lines"
                        },
                        // {
                        //     progression: "word_line",
                        //     type: "Animate through Words and Lines"
                        // },
                        // {
                        //     progression: "char_line",
                        //     type: "Animate through Characters and Lines"
                        // },
                    ].map((item, index)=>{
                        const {progression, type} = item
                        return (
                            <div 
                                key={index}
                                className='w-full min-h-130 h-auto flex flex-col justify-center items-center relative p-3'
                            >
                                <Z_Text
                                    animation={anim}
                                    trigger={"onscroll"}
                                    progression={progression}
                                    animationOrder={"lastToFirst"}
                                    className='text-[20px] w6:text-[30px] flex justify-center items-center font-bold text-center pb-1 text-amber-200'
                                    text={"From The Back"}
                                />
                                <Z_Text
                                    animation={anim}
                                    trigger={"onscroll"}
                                    progression={progression}
                                    animationOrder={"lastToFirst"}
                                    className='text-[13px] w6:text-[16px] flex justify-center items-center font-bold text-center py-0 text-amber-200'
                                    text={`${type} on scroll`}
                                />
                                <Z_Text
                                    animation={anim}
                                    key={index}
                                    progression={progression}
                                    animationOrder={"lastToFirst"}
                                    className='text-[13px] w6:text-[16px] py-4'
                                    trigger={"onscroll"}
                                    // trigger={index==0?"onscroll":"inview"}
                                    text={`
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                    `}
                                />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Z_Text_Reverse_Preview
