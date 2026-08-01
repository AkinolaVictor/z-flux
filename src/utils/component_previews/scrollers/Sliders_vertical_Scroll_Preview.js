import React, { useEffect, useState } from 'react'
import VerticalScroll from "../../../registry/z-flux/scrollers/VerticalScroll"
import { usePathname } from 'next/navigation'
import { allscrollers } from '@/utils/comp_dir/allscrollers'


export default function Slider_Vertical_Scroll_Preview({}) {

    const [anim, setAnim] = useState("FadeUp")
    // const [reveal, setReveal] = useState("none")
    const path = usePathname()

    function getFreshData() {
        for(let i=0; i<allscrollers.content.length; i++){
            const each = allscrollers.content[i]
            if(each.href == path){
                return each
            }
        }
        return null
    }

    useEffect(()=>{
        const freshData = getFreshData()
        if(freshData==null) return
        setAnim(freshData.title)
    }, [allscrollers, path])

    const dt = [
        {
            class: "min-w-full h-60 bg-blue-500",
            style: {minWidth: "100%", height: "240px", background: "blue"},
            txt: "Sasd"
        },
        {
            class: "min-w-201 h-20 bg-green-500",
            style: {minWidth: "804px", height: "80px", background: "green"},
            txt: "Sasd"
        },
        {
            class: "min-w-80 h-70 bg-blue-900",
            style: {minWidth: "320px", height: "280px", background: "#1C398E"},
            txt: "Sasd"
        },
        {
            class: "min-w-50 h-101 bg-red-500",
            style: {minWidth: "200px", height: "404px", background: "red"},
            txt: "Sasd"
        },
        {
            class: "min-w-full h-90 bg-green-900",
            style: {minWidth: "100%", height: "360px", background: "#0D542B"},
            txt: "Sasd"
        },
        {
            class: "min-w-110 h-50 bg-blue-300",
            style: {minWidth: "440px", height: "200px", background: "#8EC5FF"},
            txt: "Sasd"
        },
    ]

    return (
        <div>
            <div>
                <div className='w-full h-70 flex flex-col justify-center items-center'>
                    <p className=''>Vertical Scroll</p>
                    {/* <p className=''>Normal Direction</p> */}
                </div>
                
                <VerticalScroll 
                    animation={anim}
                >
                    <div style={{ background: "blue", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is Blue (1)
                        <br />
                        Keep Scrolling for more...
                    </div>
                    <div style={{ background: "red", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is red (2)
                    </div>
                    <div style={{ background: "green", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is green (3)
                    </div>
                    <div style={{ background: "brown", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is brown (4)
                    </div>
                    <div style={{ background: "gray", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is gray (5)
                    </div>
                    <div style={{ background: "#262626", height: "480px", minWidth: "300%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is #262626 (6)
                        <br />
                        And its 3 times wider
                    </div>
                    <div style={{ background: "purple", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is purple (7)
                    </div>
                    <div style={{ background: "orange", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is orange (8)
                    </div>
                </VerticalScroll>
            </div>


            <div>
                <div className='w-full h-70 flex flex-col justify-center items-center'>
                    <p className=''>Vertical Scroll</p>
                    <p className=''>Backward Direction</p>
                </div>

                <VerticalScroll 
                    animation={anim}
                    direction='backward'
                    // startAnimation="bottom"
                    // direction='reverse'
                >
                    <div style={{ background: "blue", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is Blue (1)
                        <br />
                        Keep Scrolling for more...
                    </div>
                    <div style={{ background: "red", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is red (2)
                    </div>
                    <div style={{ background: "green", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is green (3)
                    </div>
                    <div style={{ background: "brown", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is brown (4)
                    </div>
                    <div style={{ background: "gray", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is gray (5)
                    </div>
                    <div style={{ background: "#262626", height: "480px", minWidth: "300%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is #262626 (6)
                        <br />
                        And its 3 times wider
                    </div>
                    <div style={{ background: "purple", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is purple (7)
                    </div>
                    <div style={{ background: "orange", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is orange (8)
                    </div>
                </VerticalScroll>
            </div>


            <div>
                <div className='w-full h-70 flex flex-col justify-center items-center'>
                    <p className=''>Vertical Scroll</p>
                    <p className=''>Reverse Direction</p>
                </div>

                <VerticalScroll 
                    animation={anim}
                    direction='reverse'
                    // startAnimation="bottom"
                    // direction='reverse'
                >
                    <div style={{ background: "blue", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is Blue (1)
                        <br />
                        Keep Scrolling for more...
                    </div>
                    <div style={{ background: "red", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is red (2)
                    </div>
                    <div style={{ background: "green", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is green (3)
                    </div>
                    <div style={{ background: "brown", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is brown (4)
                    </div>
                    <div style={{ background: "gray", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is gray (5)
                    </div>
                    <div style={{ background: "#262626", height: "480px", minWidth: "300%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is #262626 (6)
                        <br />
                        And its 3 times wider
                    </div>
                    <div style={{ background: "purple", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is purple (7)
                    </div>
                    <div style={{ background: "orange", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Color is orange (8)
                    </div>
                </VerticalScroll>
            </div>
            
            <div>
                <div className='w-full h-70 flex flex-col justify-center items-center'>
                    <p className=''>Vertical Scroll</p>
                    <p className=''>Short height</p>
                </div>

                <VerticalScroll animation={anim}>
                    {
                        ["blue","red","green","brown","#333","purple","orange"].map((background, index)=>{
                            return (
                                <div 
                                    key={index} 
                                    style={{
                                        background,
                                        height: "240px",
                                        minWidth: index==3?"416px":"100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "Center"
                                    }}
                                >
                                    <p>Section {index+1}</p>
                                </div>
                            )
                        })
                    }
                </VerticalScroll>
            </div>

            <div>
                <div className='w-full h-70 flex flex-col justify-center items-center'>
                    <p className=''>Vertical Scroll</p>
                    <p className=''>Unequal Heights</p>
                </div>

                <VerticalScroll animation={anim} 
                    startAnimation='top'
                >
                    {
                        dt.map((item, index)=>{
                            return (
                                <div 
                                    key={index} 
                                    style={{display: "flex", justifyContent: "center", alignItems: "center", ...item?.style}}
                                >
                                    <p>Page {index+1}</p>
                                </div>
                            )
                        })
                    }
                </VerticalScroll>
            </div>
            
            <div className='w-full h-120 flex items-center justify-center'>
                The End
            </div>
        </div>
    )
}

