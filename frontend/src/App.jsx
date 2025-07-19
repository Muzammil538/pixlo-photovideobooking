// imports 
import {BrowserRouter as Router , Routes, Route} from 'react-router'

// styles
import './App.css'

// components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// pages
import Login from './pages/auth/Login'
import Details from './pages/auth/Details'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyCode from './pages/auth/VerifyCode'
import Home from './pages/Home'



function App() {


  return (
    <>
      <div className='min-h-screen bg-black text-white w-full relative overflow-x-auto overflow-y-hidden'>
        <Router>
          
          <main className='relative w-screen '>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login/>}/>
              <Route path='/details' element={<Details/>}/>
              <Route path='/verifycode' element={<VerifyCode />}/>
              <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            </Routes>
          </main>
          {/* <Footer /> */}
      </Router>
      </div>
    </>
  )
}

export default App
