import { useState } from 'react'
import "./SliderItem.scss"

const SliderItem = () => {

const [isHover, setIsHover] = useState(false);
  return (
    <div className={`slider-item ${isHover && "hovered-item"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
    <img src='https://collider.com/wp-content/uploads/inception_movie_poster_banner_03.jpg'></img>
      {isHover && <div >ggfgffggf </div>  }
    </div>
  );
};

export default SliderItem;
