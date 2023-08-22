import './PlayerPage.scss'
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../context/authContext';
import axios from 'axios';
import Player from '../components/Player/Player';

const PlayerPage = () => {

    const params = useParams();
    const {id} = params;
    const {userInfo, dispatch} = useContext(authContext);
    const [content, setContent] = useState({});

    const navigate = useNavigate()
  
    useEffect(() => {
      if(!userInfo) {
        navigate('/signin?=redirect=/browse');        
    }
    },[userInfo, navigate]);

    useEffect(() => {

        const getContent = async () => {
          try {
            const res = await axios.get(`/content/get/${id}`,{
                headers: {
                    authorization: userInfo.token,
                },
            });
            setContent(res.data);
          } catch (error) {
            console.log(error.message) 
          }
        };
        getContent();

      },[id,userInfo.token]);

  return (
    <>
      <div className='top-btn-container'>
      <button onClick={() => navigate(-1)}><i className="material-symbols-outlined">exit_to_app</i></button>
      </div>
      <div className='main-container'>
        <Player content={content}></Player>
      </div>
    </>
  )
}

export default PlayerPage