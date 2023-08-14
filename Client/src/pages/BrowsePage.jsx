import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import axios from 'axios';
import Header from "../components/Header/Header";
import Featured from "../components/Featured/Featured";
import "./BrowsePage.scss"


const BrowsePage = () => {

  const {userInfo, dispatch} = useContext(authContext);
  const [randomContent, setRandomContent] = useState({});
  const navigate = useNavigate()



  useEffect(() => {
    if(!userInfo) {
        navigate('/signin?=redirect=/browse');        
    }

    const getRandomContent = async () => {
      try {
        let path = '/content/random';
        let pathtype = '';
        const responce = await axios.get(path + pathtype, {
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

  }, []);

  return (
    <>
      <Header/>
      <main>
        <Featured content = {randomContent}></Featured>
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