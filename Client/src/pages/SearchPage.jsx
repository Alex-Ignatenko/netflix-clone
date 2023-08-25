import React, { useContext, useEffect, useState } from 'react'
import "./SearchPage.scss"
import Header from '../components/Header/Header'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../context/authContext';
import axios from 'axios';
import { GetURLSearchFilter } from '../Services/GetURLSearchFilter';

const SearchPage = () => {

  const {userInfo, dispatch} = useContext(authContext);
  const [contents, setContents] = useState([]);
  const [genres, setGenres] = useState([]);

  const {search} = useLocation();
  const navigate = useNavigate();

  //Get all the filter options backend requires from url
  const searchParams = new URLSearchParams(search);  

  const page = 1;
  const query = searchParams.get('query') || 'all';
  const genre = searchParams.get('genre') || 'all';




  useEffect(() => {
    if(!userInfo) {
      navigate('/signin?=redirect=/browse');        
  }
  },[userInfo, navigate]);

  useEffect(() => {
    const getGenres = async () => {
      try {
          const {data} = await axios.get('/search/genres',{
            headers: {
              authorization: userInfo.token,
            },
          });
          setGenres(data);
          console.log(data);
      } catch (error) {
          console.log(error);
      }
    };
    getGenres();
  },[]);

  useEffect(() => {
    const getFilteredContents = async () => {
      try {
          const {data} = await axios.get(GetURLSearchFilter(search,{},true), {
            headers: {
              authorization: userInfo.token,
            },
          }); 
          setContents(data.contents);
          console.log(data)
      } catch (error) {
          console.log(error)
      }
  };
  getFilteredContents();
    },[query,genre,page]);

  return (
    <div className='searchPage-container'>
      <div className="genres-containr">
        <div className="link-container">
          <Link>All</Link>
          {
            genres.map(genre => (
                <Link>{genre}</Link>
            ))
          }
        </div>
      </div>
      <div className="contents-container">
        {contents &&
          contents.map(content => (
              <div className="search-res-item">
                <Link to={`/info/${content._id}`}>
                  <img src={content.imgThumb}></img>
                </Link>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default SearchPage