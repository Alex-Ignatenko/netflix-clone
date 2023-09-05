import { Link, useLocation, useNavigate} from'react-router-dom';
import axios from 'axios';
import './SigninPage.scss'
import { useState, useEffect, useContext } from "react";
import { USER_SIGNIN } from '../context/reducerActions';
import { authContext } from '../context/authContext';

const SigninPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const {search} = useLocation();
  const redirectInURL = new URLSearchParams(search).get('redirect'); //Current locations URL
  const redirect = redirectInURL? redirectInURL : '/browse';


  const  {userInfo, dispatch} = useContext(authContext);

  useEffect(() => {
    if(userInfo){
     navigate(redirect); 
    }
  },[navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setErrorMessage("Please enter a valid Email and password");
      e.stopPropagation();
    }else {
      try {
        const {data} = await axios.post('/users/signin', {email, password});
        dispatch({type: USER_SIGNIN,payload: data});
        setIsValid(true); 
        navigate(redirect || '/browse');
      } catch (error) {
        setErrorMessage("Invalid Credentials Entered");
        setIsValid(false);
        e.stopPropagation();
      }
    }
  }

  
  return (
    <>
    <div className='signup-container'>
      <div className="signup-header">
          <div className="signup-img-container">
            <img src="\src\assets\netflix_logo.png" alt="Netflix" className='logo-img'/> 
          </div>
        </div>
       <main>
          <div className="signin-card">
            <h1>Sign in</h1>
            <form className="signin-card-body" noValidate validated={isValid} onSubmit={submitHandler}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email address' required/>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
              <span className='error-span'>{errorMessage}</span>
              <button>Sign In</button>
            </form>
            <div className="signin-card-footer">
              <p className='redirect-signup-p'>New to Netflix? <Link to="/"> Sign up</Link></p>
              <p className='captcha-p'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
              <br/>
              <p className='captcha-p'>This is a demo site. use admin@example.com pw: 12345 to log in.</p>
            </div>
          </div>
       </main>
    </div>
   </>
  )
}

export default SigninPage