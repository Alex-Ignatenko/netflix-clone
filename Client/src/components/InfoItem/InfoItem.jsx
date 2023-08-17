import React from 'react'
import "./InfoItem.scss"

const InfoItem = ({content}) => {
  return (
    <>
    { content&&   
      (<div className='info-container'>
        <img src={content.imgVertical}></img>
      </div>
      )}
    </>
  )
}

export default InfoItem