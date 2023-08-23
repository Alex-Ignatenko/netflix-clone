import { useState } from 'react'
import ReactPlayer from 'react-player'
import "./SliderItem.scss"
import { useNavigate } from 'react-router-dom';

const SliderItem = ({content}) => {

const [isHover, setIsHover] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);

const navigate = useNavigate();

  return (
    <div className={`slide-item-container`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {setIsHover(false); setIsPlaying(false)}}
    >
        <img src={content.imgThumb} className='details-img-1' style={{display: !isHover ? 'block': "none"}}/>
        <div className='container' style={{display: isHover ? 'block': "none"}}>
          <div className='player-or-img'>
            { !isPlaying ? (
                <div className='img-container'>
                  <img src={content.imgThumb} className="detials-img-2"/>
                </div>
              ) : (
                <div className='player-container'>
                  <ReactPlayer url={content.movie} playing={isPlaying} height="100%" width="100%" className="player" />
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
                <span className="material-symbols-outlined btn-icon" onClick={() =>navigate(`/info/${content._id}`)}>info</span>
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
    </div>
  );
};

export default SliderItem;

//${isHover && "hovered-item"}
