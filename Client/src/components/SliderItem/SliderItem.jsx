import { useState, useEffect, useContext } from 'react'
import ReactPlayer from 'react-player'
import "./SliderItem.scss"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { authContext } from "../../context/authContext";
import { UPDATE_USERLIST } from "../../context/reducerActions";

const SliderItem = ({content}) => {

const [isHover, setIsHover] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const {userInfo, userList, dispatch } = useContext(authContext);
const [isInUserList, setIsInUserList] = useState(false);

const navigate = useNavigate();

useEffect(()  => {

  const isInUserListQuery = async () => {
    try {
      const path = `/user/isinuserlist/${content._id}`
      const response = await axios.get(path, {
        headers: {
          authorization: userInfo.token,
        },});
        setIsInUserList(response.data);
     } catch (error) {
        console.log(error);
     }
  }
  isInUserListQuery();
},[isInUserList]);

const addToUserList = async () => {
  dispatch({type: UPDATE_USERLIST, payload: content._id});
  try {
    const response = await axios.put("user/updateuserlist:id", {
      headers: {
        authorization: userInfo.token,
      },});
  } catch (error) {
    
  }
}

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
                <span className="material-symbols-outlined btn-icon" onClick={addToUserList}>add_circle</span>
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
