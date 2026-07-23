
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import {components_directories} from "../../utils/comp_dir/components_directories"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { generalFunctions } from '../../utils/generalFunctions'

function ComponentMenu(props) {
    const {func} = props
    const [toggleState, setToggleState] = useState([""])
    const [toggleState2, setToggleState2] = useState([""])
    const path = usePathname()
    const {setGeneralAlpha} = generalFunctions()

    function toggler(value){
        setToggleState((prev)=>{
            const curr = [...prev]
            if(curr.includes(value)){
                const ind = curr.indexOf(value)
                curr.splice(ind, 1)
            } else {
                curr.push(value)
            }
            return curr
        })
    }

    function toggler2(value){
        setToggleState2((prev)=>{
            const curr = [...prev]
            if(curr.includes(value)){
                const ind = curr.indexOf(value)
                curr.splice(ind, 1)
            } else {
                curr.push(value)
            }
            return curr
        })
    }

    function click_handler(item){
        func && func()
        // const {title, href, id} = item
    }
    
    function print_content_num(content){
        let num = content.length || 0
        content.forEach((item)=>{
            // if(item.taken) num-- // remove children
            if(item.parent) num-- // remove parent
        })
        return num
    }

    function clickComponents(){
        setGeneralAlpha("modalToggle", false)
    }

    return (
        <div className='w-full mt-5'>

            <div>
                {
                    components_directories.map((item_1, index_1)=>{
                        const hid = !toggleState.includes(item_1.section)
                        const Icon = item_1.Icon
                        return (
                            <div key={index_1} className='flex mb-5 w-full'>
                                <div className='flex flex-col items-center justify-center'>
                                    <div className='flex justify-center items-center min-w-5 min-h-5 rounded-[5px] bg-[#3c3838]'>
                                        <Icon />
                                    </div>
                                    {
                                        hid?
                                        <div className='w-px h-full bg-white opacity-30'></div>:
                                        null
                                    }
                                </div>

                                <div className='text-[13px] w-full'>
                                    <div 
                                        className={`flex justify-between px-2 ${hid?"mb-3":"mb-0"} cursor-pointer ${false?"hidden":""}`}
                                        onClick={()=>toggler(item_1.section)}
                                    >
                                        <p className='opacity-80'>{item_1.section}</p>
                                        <div className='flex items-center justify-center gap-1 hover:bg-[#3c3838] px-0.5 rounded-[5px]'>
                                            {
                                                print_content_num(item_1.content)>1&&
                                                <p className="text-[10px] px-2 py-1 flex justify-center items-center darkbg rounded-full">
                                                    {print_content_num(item_1.content)}
                                                </p>
                                            }
                                            {
                                                hid?
                                                <ChevronUp size={"15px"}/>:
                                                <ChevronDown size={"15px"}/>
                                            }
                                        </div>
                                    </div>

                                    <div className={`${hid?'':"hidden"}`}>
                                        {
                                            item_1.content.map((item_2, index_2)=>{
                                                const {title, href, id, hide, parent, grouped, taken} = item_2
                                                // const isPath = path==href
                                                
                                                if(parent){
                                                    const hid2 = !toggleState2.includes(item_2.id)
                                                    let isActive = false
                                                    for(let i=0; i<grouped.length; i++){
                                                        const checker = grouped[i].href === path
                                                        if(checker) isActive=true
                                                    }

                                                    return (
                                                        <div key={index_2}>
                                                            <div 
                                                                // ${isActive?"bg-[#3c3838]":""}
                                                                className={`
                                                                    cursor-pointer rounded-[3px] w-full px-2 py-3 w6:py-2 hover:bg-[#3c3838] flex justify-between items-center
                                                                    ${isActive&&!hid2?"bg-[#3c3838]":""}
                                                                `}
                                                                onClick={()=>toggler2(id)}
                                                            >
                                                                <div>
                                                                    <p className='w6:text-[12.5px] text-[14px] w-full h-full'>{title}</p>
                                                                </div>

                                                                <div className='flex items-center justify-center gap-1 hover:bg-[#3c3838] px-0.5 rounded-[5px]'>
                                                                    {
                                                                        item_2?.grouped.length>1&&
                                                                        <p className="text-[10px] px-2 py-1 flex justify-center items-center darkbg rounded-full">
                                                                            {item_2?.grouped.length}
                                                                        </p>
                                                                    }
                                                                    {
                                                                        hid2?
                                                                        <ChevronDown size={"15px"}/>:
                                                                        <ChevronUp size={"15px"}/>
                                                                    }
                                                                </div>
                                                                
                                                            </div>

                                                            <div 
                                                                // ${hid2?"hidden":""}
                                                                className={`
                                                                    w-full h-auto relative
                                                                    ${
                                                                        !hid2?"hidden":
                                                                        ""
                                                                    }
                                                                `}
                                                                // style={{borderLeft: "1px solid white"}}
                                                            >
                                                                <div className='absolute top-0 left-2 w-px h-full bg-white opacity-30'/>

                                                                {
                                                                    grouped.map((item_3, index)=>{
                                                                        const {href, title} = item_3
                                                                        const isPath = path==href
                                                                        return (
                                                                            <Link
                                                                                key={index}
                                                                                // onClick={()=>window.location.href=href}
                                                                                onClick={()=>{clickComponents()}}
                                                                                href={href}
                                                                                style={{display: false?"none":"block"}}
                                                                            >
                                                                                <div 
                                                                                    className={`
                                                                                        cursor-pointer rounded-[3px] px-2 pl-3 py-3 w6:py-2 flex justify-start items-center hover:bg-[#3c3838]
                                                                                        ${isPath?"bg-[#3c3838]":""}
                                                                                        ml-auto
                                                                                    `}
                                                                                    style={{
                                                                                        width: "calc(100% - 8px)"
                                                                                    }}
                                                                                >
                                                                                    {/* <div className='w-1 h-1 mr-2 bg-[#b9a2a2] rounded-full' /> */}
                                                                                    {/* <div className='w-auto h-auto mr-2'>
                                                                                        <CircleChevronRight size={14}/>
                                                                                    </div> */}
                                                                                    <p>{title}</p>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                } else {
                                                    if(taken) return null
                                                    const isPath = path==href
                                                    
                                                    return (
                                                        <Link
                                                            key={index_2}
                                                            href={href}
                                                            // onClick={()=>window.location.href=href}
                                                            onClick={()=>{clickComponents()}}
                                                            style={{display: hide?"none":"block"}}
                                                        >
                                                            <div 
                                                                key={index_2} 
                                                                onClick={()=>click_handler(item_2)}
                                                                className={`
                                                                    cursor-pointer rounded-[3px] w-full px-2 py-3 w6:py-2 hover:bg-[#3c3838] 
                                                                    ${isPath?"bg-[#3c3838]":""}
                                                                `}
                                                            >
                                                                <p className='w6:text-[12.5px] text-[14px]  w-full h-full'>{title}</p>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            })

                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className={"w-full h-30"}/>
        </div>
    )
}

export default ComponentMenu
