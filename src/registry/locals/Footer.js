import { pad_x } from '../../utils/helper'
import Link from 'next/link'
import React from 'react'


function Footer(props) {
    const {} = props

    return (
        <div className={`w-full ${pad_x} flex justify-center items-center py-9 bg-black`}>
            <p className='opacity-60'>
                Built by  
                <Link href={"https://www.linkedin.com/in/victoral/"} className='opacity-100'>
                    &nbsp;<u>Akinola Victor</u>
                </Link>. 
                The source code is available on 
                <Link href={"https://github.com/AkinolaVictor/z-flux-react"} className='opacity-100 '>
                    &nbsp;<u>GITHUB</u>
                </Link>
            </p>
        </div>
    )
}

export default Footer
