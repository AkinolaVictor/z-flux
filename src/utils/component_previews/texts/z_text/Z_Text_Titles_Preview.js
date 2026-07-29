import Z_Text from '@/registry/z-flux/texts/Z_Text'
import { alltexts } from '@/utils/comp_dir/alltexts'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

function Z_Text_Titles_Preview() {

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
            
            <div className='w-full h-auto flex flex-col justify-center items-center relative p-3'>
                <div className="mb-10"/>
                <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    className='text-[35px] w6:text-[60px] flex justify-center items-center font-bold text-center py-5 text-amber-200'
                    text={"Titles"}
                    gsapScrollTrigger={{
                        // toggleActions: "play pause resume reverse",
                        // start: "top 70%"
                    }}

                />
                <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    // animationOrder={"random"}
                    className='text-[15px] w6:text-[20px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                />
                <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    // gsapScrollTrigger={{
                    //     // toggleActions: "play pause resume reverse",
                    // }}
                    animationOrder={"lastToFirst"}
                    className='text-[28px] w6:text-[40px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                />
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    progression={"word"}
                    gsapScrollTrigger={{
                        // toggleActions: "play pause resume reverse",
                    }}
                    animationOrder={"lastToFirst"}
                    className='text-[28px] w6:text-[40px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum dolor"}
                />
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    progression={"char"}
                    gsapScrollTrigger={{
                        // toggleActions: "play pause resume reverse",
                        // start: "top 60%",
                        // end: "top 30%"
                    }}
                    // animationOrder={"random"}
                    speed={0.1}
                    className='text-[38px] w6:text-[80px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                    // extendAnimation={{x: [1000, 0]}}
                />
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    progression={"char"}
                    gsapScrollTrigger={{
                        // toggleActions: "play pause resume reverse",
                        // start: "top 60%",
                        // end: "top 30%"
                    }}
                    animationOrder={"random"}
                    speed={0.1}
                    className='text-[38px] w6:text-[80px] flex justify-center items-center font-bold text-center'
                    text={"Lorem dolor"}
                    // extendAnimation={{x: [1000, 0]}}
                />
            </div>

        </div>
    )
}

export default Z_Text_Titles_Preview
