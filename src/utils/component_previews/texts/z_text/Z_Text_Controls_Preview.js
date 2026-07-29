import Z_Text from '@/registry/z-flux/texts/Z_Text'
import { alltexts } from '@/utils/comp_dir/alltexts'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

function Z_Text_Controls_Preview() {

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
            
            <div className='w-full min-h-full flex flex-col justify-center items-center relative p-3'>
            

                <Z_Text
                    animation={anim}
                    className='text-[23px] w6:text-[33px] flex justify-center items-center text-amber-200 mb-4'
                    // controllerRef={controller}
                    // style={{color: "yellow"}}
                    // animationOrder={"random"}
                    speed={0.1}
                    // progression={"word"}
                    trigger={"onscroll"}
                    text={`
                        Basic Controls
                    `}
                />
                <Z_Text
                    animation={anim}
                    className='text-[15px] w6:text-[20px]'
                    controllerRef={controller}
                    style={{color: "white"}}
                    trigger={"inview"}
                    text={`
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
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
                                        flex justify-center w-17 items-center gap-2 cursor-pointer rounded-full border px-3 py-1 text-[14px] hover:bg-[#121212]
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

        </div>
    )
}

export default Z_Text_Controls_Preview
