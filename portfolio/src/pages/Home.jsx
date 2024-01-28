import React from 'react'

import '../pages/Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../resume.pdf'
import { useTheme } from '../context/ThemeContext';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import Swing from "react-reveal/Swing";

const Home = () => {
  const [theme,setTheme]=useTheme()

  const handletheme=()=>{
    setTheme((prev)=>(prev === 'light' ? 'dark' : 'light' ))
  }
  return (
    <>
    <Swing>
   <div className="container-fluid home-container " id='home' >
    <div className="theme-btn" onClick={handletheme} >
{theme === 'light' ? (<BsFillMoonStarsFill  size={30} />) : (<BsSunFill size={30} />)}
    </div>
    <div className="container home-content ">
      <h2>Hi👋 I'm a</h2>
      <h1>
        <Typewriter
  options={{
    strings: ['Mern Stack Devloper !'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
<div className='home-buttons' >
  <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=9265182294' rel='noreferrer' target='_blank' >Hire me</a>
  
  <a className='btn btn-cv'href={Resume} download='krunal.pdf' >My Resume</a>
</div>
    </div>
   </div>
   </Swing>
    </>
  )
}

export default Home
