import { pad_x } from '../../../utils/helper'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {Z_Text} from "z-flux-react"
import Overlay_Text from '../../../registry/z-flux/texts/Overlay_Text'


function HomeDescription(props) {
    const {} = props

    return (
        <div className={`w-full ${pad_x} py-10 mt-20 text-center gap-7 h-auto flex flex-col justify-center items-center max-w-220`}>
            <Z_Text 
                // progression='char_line' 
                // animation='FromRight'
                animation='VerticalReveal'
            >
                <h1 className='text-[30px] font-bold'>Build Interfaces That Move Naturally</h1>
            </Z_Text>

            <Overlay_Text
                // animation='BottomLeftXY'
                animation='HorizontalReveal'
                layers={1}
                layerColor={"black"}
                duration={10}
                // speed={0.05}
                // progression='char_line'
                // className='text-[rosybrown] text-[16px]'
                // text={`
                //     An open-source collection of beautifully animated components that respond naturally to user interactions. 
                //     Easy to use, easy to customize, and simple to copy, paste, or install in any project.
                // `}
            >
                <span>
                    An open-source collection of beautifully animated components that respond naturally to user interactions. 
                    Easy to use, easy to customize, and simple to copy, paste, or install in any project.
                </span>
            </Overlay_Text>
            <div className='flex justify-center items-center flex-wrap gap-3'>
                <Link href={"/getting_started"}>
                    <button type="button" className='px-6 text-[14px] text-black min-h-10 bg-white rounded-full flex justify-center items-center gap-3 cursor-pointer'>
                        <p>Get Started</p>
                        <ArrowUpRight />
                    </button>
                </Link>

                <Link href={"/components/Fade"}>
                    <button type="button" className='px-6 text-[14px] text-white min-h-10 bg-[#222222] rounded-full flex justify-center items-center cursor-pointer'>
                        <p>Browse Components</p>
                    </button>
                </Link>
            </div>

            <div className='flex justify-center items-center gap-1 flex-wrap text-black text-[13px] '>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100s flex justify-center items-center'>
                    <img src="react.png" alt="react icon" className='w-9 h-9' />
                </div>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100s flex justify-center items-center'>
                    <img src="vue.png" alt="vue icon" className='w-11 h-11' />
                </div>
                {/* <div className='min-w-10 min-h-10 rounded-full bg-blue-100 flex justify-center items-center'>Nx</div>
                <div className='min-w-10 min-h-10 rounded-full bg-blue-100 flex justify-center items-center'>Nu</div> */}
            </div>
        </div>
    )
}

export default HomeDescription
