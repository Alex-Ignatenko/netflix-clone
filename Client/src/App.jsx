import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage';
import BrowsePage from './pages/BrowsePage';
import './App.scss'
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1}/>
        <main className='my-main-app-container'>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/browse" element={<BrowsePage/>} />
        </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
