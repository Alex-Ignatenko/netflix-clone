import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import "./BrowsePage.scss"


const testContent = {
  title: 'Brave',
  description:
    'Brave is a 2012 American 3D computer-animated fantasy comedy-drama adventure film produced by Pixar Animation Studios and released by Walt Disney Pictures. It was directed by Mark Andrews and Brenda Chapman and co-directed by Steve Purcell. The story is by Chapman, with the screenplay by Andrews, Purcell, Chapman and Irene Mecchi.',
  img: 'https://media.npr.org/assets/img/2012/06/19/b23_10bpub.pub16.170_wide-a5bd92b0ba06a0f7da009e797c51f69bae8ee023.jpg',
  imgTitle:
    'https://i.pinimg.com/originals/9e/b2/32/9eb2327de3d6f3a73add59e23ebd0d7f.png',
  imgThumb:
    'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/brave-movie.jpg',
  imgVertical:
    'https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_.jpg',
  movie: 'https://youtu.be/TEHWDA_6e3M',
  trailer: 'https://youtu.be/TEHWDA_6e3M',
  duration: '1 hour 40 min',
  year: '2012',
  limit: '8',
  genre: 'Animation',
  isSeries: false,
}


const BrowsePage = () => {

  const {userInfo, dispatch} = useContext(authContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!userInfo) {
        navigate('/signin?=redirect=/browse');
    }
  }, []);

  return (
    <>
      <Header/>
      <main>
        <Featured content = {testContent}></Featured>
        <div className="my-carosel-container">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  )
}

export default BrowsePage