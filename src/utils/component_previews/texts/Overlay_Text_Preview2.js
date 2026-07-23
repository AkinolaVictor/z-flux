import React from 'react'
import Overlay_Text from '../../../registry/z-flux/texts/Overlay_Text'

export default function Overlay_Text_Preview2() {
    return (
        <div className='w-full h-full'>

            
            <div className='w-full h-[60%] flex flex-col justify-center items-center relative p-3' />
            <div className='w-full h-[60%] flex flex-col justify-center items-center relative p-3' >
                <Overlay_Text trigger={"inview"}>
                    <p className="font-bold text-[30px]">Text Overlay</p>
                </Overlay_Text>
            </div>

        </div>
    )
}


