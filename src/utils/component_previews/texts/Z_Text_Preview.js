import { alltexts } from "../../../utils/comp_dir/alltexts"
// import Z_Text from "../../../registry/z-flux/texts/Z_Text"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Z_Text } from "z-flux-react"

export default function Z_Text_Preview() {

    const [anim, setAnim] = useState("Fade")
    const path = usePathname()
    const controller = useRef(null)
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
                    speed={0.2}
                    className='text-[30px] w6:text-[45px] font-bold text-center flex justify-center items-center py-5 text-amber-200'
                    // text={`${anim} Animation`}
                >
                    <p>{`Z_Text Animation`}</p>
                </Z_Text>

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

                />
                <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    // animationOrder={"random"}
                    className='text-[15px] w6:text-[20px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                />
                {/* <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    animationOrder={"lastToFirst"}
                    className='text-[28px] w6:text-[40px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                /> */}
                {/* <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    progression={"word"}
                    className='text-[28px] w6:text-[40px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum dolor"}
                    animationOrder={"lastToFirst"}
                /> */}
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    animationOrder={"lastToFirst"}
                    progression={"char"}
                    gsapScrollTrigger={{
                        end: "top 15%"
                    }}
                    speed={0.2}
                    className='text-[38px] w6:text-[80px] flex justify-center items-center font-bold text-center'
                    text={"Lorem ipsum"}
                />
            </div>

            <div 
                className='w-full min-h-130 h-auto flex flex-col justify-center items-center relative p-3'
            >
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    animationOrder={"random"}
                    className='text-[18px] w6:text-[25px] font-bold text-center pb-1 text-amber-200'
                    stagger={0.4}
                    text={"Randomized"}
                />
                <Z_Text
                    animation={anim}
                    trigger={"onscroll"}
                    animationOrder={"random"}
                    stagger={0.4}
                    className='text-[13px] w6:text-[16px] flex justify-center items-center font-bold text-center py-0 text-amber-200'
                    text={"Texts randomized on scroll"}
                />
                <Z_Text
                    animation={anim}
                    progression={"char"}
                    animationOrder={"random"}
                    className='text-[13px] w6:text-[16px] py-4'
                    trigger={"onscroll"}
                    gsapScrollTrigger={{
                        end: "top 15%"
                    }}
                    // speed={0.05}
                    text={`
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                    `}
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
                        {
                            progression: "word_line",
                            type: "Animate through Words and Lines"
                        },
                        {
                            progression: "char_line",
                            type: "Animate through Characters and Lines"
                        },
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
                                    className='text-[18px] w6:text-[25px] font-bold text-center pb-1 text-amber-200'
                                    stagger={0.4}
                                    text={"Paragraphs"}
                                />
                                <Z_Text
                                    animation={anim}
                                    trigger={"onscroll"}
                                    stagger={0.4}
                                    className='text-[13px] w6:text-[16px] flex justify-center items-center font-bold text-center py-0 text-amber-200'
                                    text={type}
                                />
                                <Z_Text
                                    animation={anim}
                                    key={index}
                                    progression={progression}
                                    speed={index==0?0.4:null}
                                    className='text-[13px] w6:text-[16px] py-4'
                                    trigger={"onscroll"}
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

            <div className='w-full min-h-full flex flex-col justify-center items-center relative p-3'>
                
                <Z_Text
                    animation={anim}
                    trigger={"inview"}
                    className='text-[20px] w6:text-[30px] flex justify-center items-center font-bold text-center py-5 text-amber-200'
                    text={"Control Animation"}

                />

                <Z_Text
                    animation={anim}
                    className='text-[15px] w6:text-[20px]'
                    controllerRef={controller}
                    style={{color: "white"}}
                    trigger={"inview"}
                    text={`
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio 
                        harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                        harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
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
                        
            {/* <div className="w-full h-auto">
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
                        {
                            progression: "word_line",
                            type: "Animate through Words and Lines"
                        },
                        {
                            progression: "char_line",
                            type: "Animate through Characters and Lines"
                        },
                    ].map((item, index)=>{
                        const {progression, type} = item
                        return (
                            <div 
                                key={index}
                                className='w-full min-h-130 h-auto flex flex-col justify-center items-center relative p-3'
                            >
                                <Z_Text
                                    animation={anim}
                                    trigger={"inview"}
                                    className='text-[22px] w6:text-[30px] font-bold text-center pb-1 text-amber-200'
                                    text={"Paragraphs"}
                                />
                                <Z_Text
                                    animation={anim}
                                    trigger={"inview"}
                                    className='text-[13px] w6:text-[16px] flex justify-center items-center font-bold text-center py-0 text-amber-200'
                                    text={type}
                                />
                                {
                                    [1].map((item2, index)=>{
                                        return (
                                            <Z_Text
                                                animation={anim}
                                                key={index}
                                                progression={progression}
                                                className='text-[13px] w6:text-[16px] py-4'
                                                trigger={index==1?"onscroll":"inview"}
                                                text={`
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                                `}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div> */}
                        
            {/* <div className={`w-full h-auto`}>
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
                            progression: "word",
                            type: "Animate through Words"
                        },
                        {
                            progression: "line",
                            type: "Animate through Lines"
                        },
                        {
                            progression: "word_line",
                            type: "Animate through Words and Lines"
                        },
                        {
                            progression: "char_line",
                            type: "Animate through Characters and Lines"
                        },
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
                                    stagger={0.4}
                                    className='text-[20px] w6:text-[30px] font-bold text-center flex justify-center items-center pb-1 text-amber-200'
                                    text={"Grouped Paragraphs"}
                                />
                                <Z_Text
                                    animation={anim}
                                    trigger={"onscroll"}
                                    progression={progression}
                                    stagger={0.4}
                                    className='text-[13px] w6:text-[16px] font-bold text-center flex justify-center items-center py-0 text-amber-200'
                                    text={`${type} on scroll`}
                                />
                                {
                                    [1,2, 3].map((item2, index)=>{
                                        return (
                                            <Z_Text
                                                animation={anim}
                                                key={index}
                                                progression={progression}
                                                speed={index==0?0.4:null}
                                                className='text-[13px] w6:text-[16px] py-4'
                                                trigger={"onscroll"}
                                                text={`
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut inventore corrupti odio harum ducimus sequi animi tempora ad, enim, facere nemo dolor qui obcaecati maxime. 
                                                `}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div> */}

            <div className='w-full h-full flex flex-col justify-center items-center relative p-3'>
                
                <Z_Text
                    animation={anim}
                    className='text-[20px]'
                    trigger={"inview"}
                    text={`
                        The End
                    `}
                />
            </div>

            <div className='w-full h-12 my-10 justify-center flex items-center cursor-pointer rounded-full p-3' />
        </div>
    )
}
