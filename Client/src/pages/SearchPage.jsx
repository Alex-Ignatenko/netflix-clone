import React, { useContext, useEffect, useState } from "react";
import "./SearchPage.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import axios from "axios";
import { GetURLSearchFilter } from "../services/GetURLSearchFilter";
import Searchbox from "../components/Searchbox/Searchbox";

const SearchPage = () => {
  const { userInfo, dispatch } = useContext(authContext);
  const [contents, setContents] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isGenreMenue,setIsGenreMenue] = useState(false);

  const { search } = useLocation();
  const navigate = useNavigate();

  //Get all the filter options backend requires from url
  const searchParams = new URLSearchParams(search);
  const page = 1;
  const query = searchParams.get("query") || "allContents";
  const genre = searchParams.get("genre") || "allGenres";

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin");
    }
  }, [userInfo]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await axios.get("/search/genres", {
          headers: {
            authorization: userInfo.token,
          },
        });
        setGenres(data);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();
  }, []);

  useEffect(() => {
    const getFilteredContents = async () => {
      try {
        const { data } = await axios.get(
          GetURLSearchFilter(search, { query, genre }),
          {
            headers: {
              authorization: userInfo.token,
            },
          }
        );
        setContents(data.contents);
      } catch (error) {
        console.log(error);
      }
    };
    getFilteredContents();
  }, [query, genre, page]);

  return (
    <>
      <div className="searchPage-main-container">
        <div className="searchPage-searchbar-container">
          <Searchbox showSearch={true} isToggleable={false} />
        </div>
        <div className="searchPage-subcontainer">
          <div className="genres-containr">
            <div className="link-container">
              <div className="big-screen-link-container">
                <Link to={GetURLSearchFilter(search, { genre: "allGenres" })}>
                  All
                </Link>
                {genres.map((genre, i) => (
                  <Link key={i} to={GetURLSearchFilter(search, { genre: genre })}>
                    {genre}
                  </Link>
                ))}
              </div>
              <div className="small-screen-container">
                    Select Genre
                  <span
                    className={
                      "material-symbols-outlined my-icon my-arrow-icon-span"
                    }
                    onClick={() => {
                      setIsGenreMenue(!isGenreMenue);
                    }}
                  >
                    arrow_drop_down
                  </span>
                  {isGenreMenue && (
                    <div className="genreDropdown">
                    <Link to={GetURLSearchFilter(search, { genre: "allGenres" })}>All</Link>
                    {genres.map((genre, i) => (
                      <Link key={i} to={GetURLSearchFilter(search, { genre: genre })}>
                        {genre}
                      </Link>
                    ))}
                    </div>
                  )}
              </div>
            </div>
          </div>
          <div className="contents-container">
            {contents &&
              contents.map((content, i) => (
                <div className="search-res-item" key={i}>
                  <Link to={`/info/${content._id}`}>
                    <img src={content.imgThumb}></img>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
