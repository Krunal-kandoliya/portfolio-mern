import React from 'react'
import Layout from './layout/Layout'
import About from './pages/About/About'
import Techstack from './components/Techstack/Techstack'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import Contact from './components/contact/Contact'
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext'
import Tada from "react-reveal/Tada";
import Mobilenav from './components/Mobilenavbar/Mobilenav'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  const[theme]=useTheme()
  return (
    <>
    <div id={theme} >
      <ToastContainer/>
      <Mobilenav/>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <Techstack/>
      <Work/>
      <Contact/>
      </div>
      <Tada>
      <div className='footer pb-3 ms-3 '>
  <h4 className='text-center' >
    Made With😁 Krunal &copy; 2024
  </h4>
</div>
      </Tada>

</div>
<ScrollToTop smooth color='#f29f67' style={{backgroundColor:"#1e1e2c" ,borderRadius:"80px" }}  />
    </>
  )
}

export default App
