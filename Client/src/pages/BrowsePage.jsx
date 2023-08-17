import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import "./BrowsePage.scss"
import Slider from "../components/Slider/Slider";


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
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} title='Recommanded'/>
        <Slider type={type} genre="Action"  title={`Action ${type}`}/>
      </main>
    </>
  )
}

export default BrowsePage