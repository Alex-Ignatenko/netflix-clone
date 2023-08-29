import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Featured from "../components/Featured/Featured";
import Slider from "../components/Slider/Slider";
import "./BrowsePage.scss"


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
      <main className="main">
        <Featured type = {type}></Featured>
        <div className="sliders-container">
          <Slider type={type} title={`${userInfo.username}` + "`s List"}/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} title='Recommanded'/>
          <Slider type={type} genre="Action"  title={`Action ${type}`}/>
        </div>
      </main>
    </>
  )
}

export default BrowsePage