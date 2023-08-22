import ReactPlayer from 'react-player'
import './Player.scss'

const Player = ({content}) => {
  return (
    <>
        <div className='player-container-big'>
            <ReactPlayer url={content.movie} className="player-big" height="100%" width="100%"/> 
        </div>
    </>
  )
}

export default Player