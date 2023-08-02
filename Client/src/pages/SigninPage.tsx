import { Link } from 'react-router-dom'
import './SigninPage.scss'

const SigninPage = () => {
  return (
    <>
    <div className='signup-container'>
       <header className="signup-header">
           <img
               src="\src\assets\netflix_logo.png"
               alt="Netflix"/> 
       </header>
       <main>
          <div className="signin-card">
            <h1>Sign in</h1>
            <form className="signin-card-body">
              <input type="text" placeholder='Email address'/>
              <input type="password" placeholder='Password'/>
              <button>Sign In</button>
            </form>
            <div className="signin-card-footer">
              <p className='redirect-signup-p'>New to Netflix?<Link to="/">Sign up</Link></p>
              <p className='captcha-p'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </div>
          </div>
       </main>
    </div>
   </>
  )
}

export default SigninPage