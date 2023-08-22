import React from 'react'
import "./InfoItem.scss"

const InfoItem = ({content}) => {
  return (
    <>
    { content&&   
      (<div className='main-container'>
        <div className="sub-container">
          <div className="info-img-container">
              <img src={content.imgVertical} className='info-img'></img>
            </div>
            <div className="info-detials-container">
                <div className="info-details-sub-container">
                  <div className="info-title-container">
                    <h1>{content.title}</h1>
                  </div>
                  <div className="info-description-container">
                    <p>{content.description}</p>
                  </div>
                  <div className="info-details-container">
                    <span>Type: {content.isSeries? "Series" : "Movie"}</span>
                    <span>Genere: {content.genre}</span>
                    <span>Release Year: {content.year}</span>
                    <span>Duration: {content.duration}</span>
                    <span>Age restriction: +{content.limit}</span>
                  </div>
                  <div className="btn-container">
                  <button><span className="material-symbols-outlined btn-icon">play_circle</span>Play</button>
                  </div>
                </div>
                <div></div>
            </div>
        </div>
      </div>
      )}
    </>
  )
}

export default InfoItem