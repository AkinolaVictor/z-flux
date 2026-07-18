import React from 'react'
import IntegratedScroll from "@/registry/z-flux/transitions/IntegratedScroll"


export default function Transition_Integrated_Scroll_Preview({}) {
    const dt = [
        {
            class: "min-w-full h-60 bg-blue-500",
            txt: "Sasd"
        },
        {
            class: "min-w-201 h-20 bg-green-500",
            txt: "Sasd"
        },
        {
            class: "min-w-80 h-70 bg-blue-900",
            txt: "Sasd"
        },
        {
            class: "min-w-50 h-101 bg-red-500",
            txt: "Sasd"
        },
        {
            class: "min-w-full h-90 bg-green-900",
            txt: "Sasd"
        },
        {
            class: "min-w-110 h-50 bg-blue-300",
            txt: "Sasd"
        },
    ]

    return (
        <div>
            {/* <p>Transition Preview</p> */}
            <div className='w-full h-120'/>
            {/* <IntegratedScroll 
                direction='reverse'
            >
                {
                    ["blue","red","green","brown","#333","purple","orange"].map((item, index)=>{
                        return (
                            <div 
                                key={index} 
                                className={`content_number_${index} min-h-60 min-w-full`}
                                style={{background: item}}
                            >
                                <p>Header {item} {index}</p>
                            </div>
                        )
                    })
                }
            </IntegratedScroll> */}

            <IntegratedScroll >
                {
                    dt.map((item, index)=>{
                        return (
                            <div 
                                key={index} 
                                className={`content_number_${index} ${item.class}`}
                            >
                                <p>Header {item.class} {index}</p>
                            </div>
                        )
                    })
                }
            </IntegratedScroll>
            
            <IntegratedScroll 
                direction='backward'
            >
                {
                    ["blue","red","green","brown","#333","purple","orange"].map((item, index)=>{
                        return (
                            <div 
                                key={index} 
                                className={`content_number_${index} min-h-60 ${index==3?"min-w-104":"min-w-full"}`}
                                style={{background: item}}
                            >
                                <p>Header {item} {index}</p>
                            </div>
                        )
                    })
                }
            </IntegratedScroll>
        </div>
    )
}

