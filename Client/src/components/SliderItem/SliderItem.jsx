import { useState } from 'react'
import "./SliderItem.scss"

const SliderItem = ({content}) => {

const [isHover, setIsHover] = useState(false);
  return (
    <div className={`slide-item-container`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      { !isHover ? (
        <img src={content.imgThumb} />
      ) : (
        <div className='card'>
          <div className='player'>
            <img src={content.imgThumb} className="detials-img"></img>
          </div>
          <div className="detials">
            <div className="detials-row1">
              <div className="btn-col1">
                <span className="material-symbols-outlined btn-icon">play_circle</span>
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
