import { Link } from 'react-router-dom'
import './SignupPage.scss'


const SignupPage = () => {
    
  return (
    <>
     <div className='signup-container'>
        <header className="signup-header">
            <img
                src="\src\assets\netflix_logo.png"
                alt="Netflix"/> 
        </header>
        <main>
                <h1 className='first-title'>Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="signup-form">
                    <input type="text" placeholder='Email address'/>
                    <button>Get Started {'>'}</button>
                </div>
                <p className='redirect-signin-p'>Already have an account? <Link to="/signin">Sign in</Link></p>
        </main>
     </div>
    </>
  )
}

export default SignupPage