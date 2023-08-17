import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import "./BrowsePage.scss"
import MySwiper from "../components/MySwiper/MySwiper";


const BrowsePage = ({type}) => {

  const {userInfo, dispatch} = useContext(authContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!userInfo) {
      navigate('/signin?=redirect=/browse');        
  }
  },[userInfo, navigate]);

  return (
    <>
      <Header/>
      <main>
        <Featured type = {type}></Featured>
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