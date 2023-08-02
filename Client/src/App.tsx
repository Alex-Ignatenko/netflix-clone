
import './App.scss'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage';


function App() {

  return (
    <>
    <BrowserRouter>
        <ToastContainer position="bottom-center" limit={1}/>
        <main>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage/>} />
        </Routes>
        </main>
    </BrowserRouter>
    </>
  )
}

export default App
