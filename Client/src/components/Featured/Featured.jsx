import "./Featured.scss"
import React from 'react'

const Featured = ({content}) => {
  
  return (
    <div className="my-featured-container">
        <img className="bg-img" src={content.img}></img>
        <div className="my-feature-dits-container">
            <div className="my-featured-title-img-container">
                <img src={content.imgTitle}></img>
            </div>
            <div className="my-featured-desc-container">
                <p>{content.description}</p>
            </div>
            <div className="my-featured-btn-container">
                <div className="my-featured-btn-left-container">
                    <button><span class="material-symbols-outlined btn-icon">play_circle</span>Play</button>
                    <button className="my-button-secondry"><span class="material-symbols-outlined btn-icon">info</span>Info</button>
                </div>
                <div className="my-featured-btn-right-container">
                    <div className="my-age-box"><p>+{content.limit}</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured

