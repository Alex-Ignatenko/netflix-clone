import { useState } from 'react'
import ReactPlayer from 'react-player'
import "./SliderItem.scss"

const SliderItem = ({content}) => {

const [isHover, setIsHover] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`slide-item-container`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {setIsHover(false); setIsPlaying(false)}}
    >
      { !isHover ? (
        <img src={content.imgThumb} />
      ) : (
        <div className='container'>
          <div className='player-or-img'>
            { !isPlaying ? (
                <div className='img-container'>
                  <img src={content.imgThumb} className="detials-img"/>
                </div>
              ) : (
                <div className='player-container'>
                  <ReactPlayer url={content.movie} playing={isPlaying} className="player" />
                </div>
              )
            }

          </div>
          <div className="detials">
            <div className="detials-row1">
              <div className="btn-col1">
                <span className="material-symbols-outlined btn-icon" onClick={()=>{setIsPlaying(!isPlaying)}}>{!isPlaying ? "play_circle" : "stop_circle"}</span>
                <span className="material-symbols-outlined btn-icon">add_circle</span>
              </div>
              <div className="btn-col2">
                <span className="material-symbols-outlined btn-icon">info</span>
              </div>
            </div>
            <div className="detials-row2">
              <span>{content.duration}</span>
              <span>{content.year}</span>
              <span className='age-span'>+{content.limit}</span>
              <span>{content.genre}</span>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default SliderItem;

//${isHover && "hovered-item"}
