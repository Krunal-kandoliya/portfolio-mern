import React,{useState} from 'react'
import Home from '../pages/Home'
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import '../layout/Layout.css'
import Menu from '../menus/Menu';

const Layout = () => {
  const[toggle,settoggle]=useState(true)

  const handletoggle=()=>{
    settoggle(!toggle)
    
  }
  return (
    <>
<div className='sidebar-section' >
    <div className={ toggle ?'sidebar-toggle sidebar' : 'sidebar'}>
        <div className='sidebar-toggle-icons'>
          <p onClick={handletoggle} >
            {
              toggle ?  <AiOutlineDoubleLeft size={25} /> : <AiOutlineDoubleRight size={25} />
            }
             
           </p>
        </div>
            <Menu toggle={toggle} />
    </div>
    <div className='container'>
        <Home/>
    </div>

</div>

    </>
  )
}

export default Layout
