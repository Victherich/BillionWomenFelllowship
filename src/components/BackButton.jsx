import React from 'react'
import { FaBackward } from 'react-icons/fa'
import "../CSS/BackButton.css"

const BackButton = () => {
  return (
    <div className='BackButtonWrap'>
        <button onClick={()=>window.history.back()}><FaBackward/> Back</button>
    </div>
  )
}

export default BackButton
