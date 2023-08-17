import "./Header.scss"
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { authContext } from "../../context/authContext";
import { USER_SIGNOUT } from "../../context/reducerActions";


const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchShown, setisSearchShown] = useState(false);
  const [isUserMenue, setIsUserMenue] = useState(false);
  const [isContentMenue, setIsContentMenue] = useState(false);
  const [windowResize, setWindowResize] = useState(window.innerWidth);
  const {userInfo, dispatch} = useContext(authContext);


  const navigate = useNavigate()

  const toggleSearchbar = () => {
    setisSearchShown(!isSearchShown)
  }

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  window.onresize = () => {
    setWindowResize(window.innerWidth)
    return () => (window.onresize = null);
  }

  const signOutHandler = () => {
    dispatch({type:USER_SIGNOUT})
    navigate("/");
 };

  return (
    <div className={isScrolled ? 'my-navbar-container scrolled' : 'my-navbar-container'}>
      <div className='my-left-side-container'>
          <NavLink to="/">
            <img src="\src\assets\netflix_logo.png" alt="Netflix"/> 
          </NavLink>
        <div className='left-side-links-container'>

        { windowResize >= 860 ? (

          <>
            <div className='my-link-container'>
              <span className="material-symbols-outlined my-icon">movie</span>
              <NavLink to="/movies">
                Movies
              </NavLink>
            </div>
            <div className='my-link-container'>
              <span className="material-symbols-outlined my-icon">tv</span> 
              <NavLink to="/tvshows">
                TV Shows
              </NavLink>
            </div>  
          </>
          ) : (
            <div className="mobileContentMenu">
              Browse
              <span className={"material-symbols-outlined my-icon my-arrow-icon-span"} onClick={() => {setIsContentMenue(!isContentMenue)}}>arrow_drop_down</span>
              {
                isContentMenue && (
                  <div className="contentDropdown">
                    <div className='my-link-container'>
                      <span class="material-symbols-outlined my-icon">movie</span>
                      <NavLink to="/movies">
                        Movies
                      </NavLink>
                    </div>
                    <div className='my-link-container'>
                      <span class="material-symbols-outlined my-icon">tv</span> 
                      <NavLink to="/tvshows">
                        TV Shows
                      </NavLink>
                  </div> 
                  </div>)
              }
            </div>
          )
        }
    
        </div>
      </div>
      <div className='my-right-side-container'>
        { windowResize >= 860 ? (

          <div className={isSearchShown ? "my-search-container shown" : "my-search-container"}>
            <span onClick={toggleSearchbar} className="material-symbols-outlined my-icon">Search</span> 
            <input type='text' placeholder='Search..,' className={isSearchShown ? 'my-search-input shown' : 'my-search-input'}/> 
          </div>
        ) : (
          <span onClick={toggleSearchbar} className="material-symbols-outlined my-icon">Search</span> 
        )
        }
        <div className="my-account-container">
          <span className="material-symbols-outlined my-icon face-icon">face</span>
          { windowResize >= 480 ?  <span> {userInfo ? userInfo.username : "User"}</span> : <></>}     
          <span className={"material-symbols-outlined my-icon my-arrow-icon-span"} onClick={() => {setIsUserMenue(!isUserMenue)}}>arrow_drop_down</span>
          {
            isUserMenue ? (
              <div className="userDropdown">
                <a onClick={signOutHandler}><span class="material-symbols-outlined my-icon">logout</span> Log out</a>
              </div>) : (<></>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header