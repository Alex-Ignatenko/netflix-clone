import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import Header from "../components/Header/Header";

const BrowsePage = () => {

  const {userInfo, dispatch} = useContext(authContext);
  const navigate = useNavigate()

  useEffect(() => {
    if(!userInfo) {
        navigate('/signin?=redirect=/browse');
    }
  }, []);

  return (
    <>
      <Header>

      </Header>
    </>
  )
}

export default BrowsePage