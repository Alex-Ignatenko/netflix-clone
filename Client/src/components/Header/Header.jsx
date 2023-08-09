import React, { useState } from 'react'
import "./Header.scss"
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchShown, setisSearchShown] = useState(false);

  const toggleSearchbar = () => {
    setisSearchShown(!isSearchShown)
  }


  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'my-navbar-container scrolled' : 'my-navbar-container'}>
      <div className='my-left-side-container'>
        <img src="\src\assets\netflix_logo.png" alt="Netflix"/>
        <div className='left-side-links-container'>
          <div className='my-link-container'>
            <span class="material-symbols-outlined my-icon">movie</span>
            <NavLink to="/">
              Movies
            </NavLink>
          </div>
          <div className='my-link-container'>
            <span class="material-symbols-outlined my-icon">tv</span> 
            <NavLink to="/">
              TV Shows
            </NavLink>
          </div>      
        </div>
      </div>
      <div className='my-right-side-container'>
        <div className={isSearchShown ? "my-search-container shown" : "my-search-container"}>
          <span onClick={toggleSearchbar} className="material-symbols-outlined my-icon">Search</span> 
          <input type='text' placeholder='Search..,' className={isSearchShown ? 'my-search-input shown' : 'my-search-input'}/> 
        </div>
        <div className="my-account-container">
          <span className="material-symbols-outlined my-icon">face</span>
          <NavLink to="/browse"> User</NavLink>
          <span className={"material-symbols-outlined my-icon my-arrow-icon-span"}>arrow_drop_down</span>
        </div>
      </div>
    </div>
  )
}

export default Header