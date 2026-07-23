import React from 'react'
import VerticalScroll from "../../../registry/z-flux/scrollers/VerticalScroll"


export default function Slider_Vertical_Scroll_Preview({}) {
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
            <div className='w-full h-70 flex flex-col justify-center items-center'>
                <p className=''>Example 1/3</p>
                <p className=''>Keep Scrolling...</p>
            </div>
            
            <VerticalScroll>
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


            <div className='w-full h-70 flex flex-col justify-center items-center'>
                <p className=''>Example 2/3</p>
                <p className=''>Keep Scrolling...</p>
            </div>
            <VerticalScroll direction='backward'>
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
                <div style={{ background: "purple", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Color is purple (6)
                </div>
                <div style={{ background: "orange", textAlign: "center", height: "480px", minWidth: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Color is orange (7)
                </div>
            </VerticalScroll>

            <div className='w-full h-70 flex flex-col justify-center items-center'>
                <p className=''>Example 3/3</p>
                <p className=''>Keep Scrolling...</p>
            </div>

            <VerticalScroll 
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
            
            <div className='w-full h-120 flex items-center justify-center'>
                The End
            </div>
        </div>
    )
}

