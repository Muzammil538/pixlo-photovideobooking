import {BrowserRouter as Router , Routes, Route} from 'react-router'
import './App.css'
import Navbar from './components/layout/Navbar'
import Login from './pages/Login'
import Footer from './components/layout/Footer'
import Details from './pages/Details'
import ForgotPassword from './pages/ForgotPassword'
import VerifyCode from './pages/VerifyCode'


function App() {


  return (
    <>
      <div className='min-h-screen bg-black w-full relative'>
        <Router>
          <Navbar />
          <main className='relative min-h-[cal(100vh-70px)] w-screen '>
            <Routes>
              <Route path="/" element={<h1 className="text-white">Home Page</h1>} />
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
