import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { GetURLSearchFilter } from '../../Services/GetURLSearchFilter';

import "./Searchbox.scss"

const Searchbox = () => {
    const [query, setQuery] = useState("");
    const [isSearchShown, setisSearchShown] = useState(false);
    const {search, pathname} = useLocation();
    const navigate = useNavigate();

    console.log("search:" + search)

    const toggleSearchbar = () => {
        setisSearchShown(!isSearchShown)
      }

//    const searchClicked = (e) => {
//        const link = GetURLSearchFilter(search, {query: query || 'all'});  
//        navigate(link);
//    };
   
   //Enables search as you type via use effect that fires every query change
    useEffect(() =>{
       if(pathname != '/search' && !query){
           return;
       };
       console.log("query:" + query);
       const link = GetURLSearchFilter(search, {query: query || ''});  
       navigate(link);
   
    },[query]);
   

  return (
    <div className={isSearchShown ? "my-search-container shown" : "my-search-container"}>
        <span onClick={toggleSearchbar} className="material-symbols-outlined my-icon">Search</span> 
        <input type='text' onChange={(e) => setQuery(e.target.value)} placeholder='Search..,' className={isSearchShown ? 'my-search-input shown' : 'my-search-input'}/> 
    </div>
  )
}

export default Searchbox