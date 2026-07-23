import { generalFunctions } from '../../utils/generalFunctions'
import React from 'react'
import { useSelector } from 'react-redux'
import ModalList from './ModalList'
import ModalMenu from './ModalMenu'


function ModalContainer(props) {
    const {} = props
    const {setGeneralAlpha} = generalFunctions()
    const {modalToggle, modal_state} = useSelector((state)=>state.generalSlice)

    const closeModal = ()=>setGeneralAlpha("modalToggle", false)
    
    if(!modalToggle) return null
    return (
        <div onClick={closeModal} className='w-screen h-screen bg-[#00000093] flex justify-center items-center absolute top-0 left-0'>
            <div className=''>
                {
                    modal_state=="list"?
                    <ModalList />:
                    <ModalMenu />
                }
            </div>
        </div>
    )
}

export default ModalContainer
