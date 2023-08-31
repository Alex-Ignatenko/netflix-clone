import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Featured from "../components/Featured/Featured";
import Slider from "../components/Slider/Slider";
import axios from "axios";
import "./BrowsePage.scss";
import { UPDATE_USERLIST } from "../context/reducerActions";

const BrowsePage = ({ type }) => {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const { userInfo, userList, dispatch } = useContext(authContext);

  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?=redirect=/browse");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    const getList = async () => {
      try {
        let requestedType = type ? "?type=" + type : "?type=all";
        // let requestedGenre = genre ? "&genre=" + genre : "";
        const path = "/content/getlist" + requestedType;

        const response = await axios.get(path, {
          headers: {
            authorization: userInfo.token,
          },
        });
        if (response) {
          setContents(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [type]);

  useEffect(() => {
    const getList = async () => {
      try {
        const path = "/users/getuserlist?name=" + userInfo.username + "`s List";
        const response = await axios.get(path, {
          headers: {
            authorization: userInfo.token,
          },
        });
        if (response) {
          dispatch({ type: UPDATE_USERLIST, payload: response.data });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, [userInfo]);

  return (
    <>
      <main className="main">
        <Featured type={type}></Featured>
        <div className="sliders-container">
          <Slider
            contentList={userList}
            title={`${userInfo.username}` + "`s List"}
          />
          <Slider contentList={contents} title="Recommanded" />
          {/* <Slider contentList={contents} title="Most-Viewed" />
          <Slider contentList={contents} title="Recently Added" />
          <Slider contentList={contents} title="Action" />
          <Slider contentList={contents} title="Comedy" /> */}

        </div>
      </main>
    </>
  );
};

export default BrowsePage;
