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
      ) : (<span>running</span>)
      }
    </div>
  );
};

export default SliderItem;

//${isHover && "hovered-item"}
