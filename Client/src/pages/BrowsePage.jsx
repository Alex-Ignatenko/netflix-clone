import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import axios from 'axios';
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import "./BrowsePage.scss"
import MySwiper from "../components/MySwiper/MySwiper";


const BrowsePage = ({type}) => {

  const {userInfo, dispatch} = useContext(authContext);
  const [randomContent, setRandomContent] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    if(!userInfo) {
      navigate('/signin?=redirect=/browse');        
  }
  },[userInfo, navigate]);

  useEffect(() => {
    const getRandomContent = async () => {
      try {    
        let requestedType = type ? '?type=' +  type : 'all';
        let path = '/content/random' + requestedType;
        const responce = await axios.get(path, {
          headers: {
            authorization: userInfo.token,
          },
        });
        if (responce){
          setRandomContent(responce.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
    const interval = setInterval(() => {
      getRandomContent();
    }, 5000);
    return () => clearInterval(interval);

  }, [type]);

  return (
    <>
      <Header/>
      <main>
        <Featured content = {randomContent}></Featured>
        {/* <div className="my-slider-container">
          <Slider></Slider>
        </div> */}
        <MySwiper title='Recommanded'/>
        <MySwiper type={type} genre="Action"  title={`Action ${type}`}/>
        <MySwiper type={type} genre="Comedy" title={`Comedy ${type}`}/>
      </main>
    </>
  )
}

export default BrowsePage