import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import {CgClose} from 'react-icons/cg';

const Navbar = () => {
  const [open , setOpen ] = useState(false)
  const links = ['Home','About','Products','Contact'];
  return (
    <nav>
  <div className='navbar'>
  <ul className={open?"ulist close":"ulist"}>

    {
      links.map((item)=>{
        return(
          <>
           <li>
            <NavLink to={"/"+item} className="navlink">{item}</NavLink>
           </li>
          </>
        )
      })
    }
    <li>
        <NavLink to="/Card" className='navlink card-bags'>
        <FaShoppingCart  className='card-addbag'/>
          <span className='card-items'>0</span>
        </NavLink>
    </li>
  </ul>

  {/* responsive nav code */}
  <div className='res-nav'>
    {
      !open?<FiAlignJustify onClick={()=>{
        setOpen(true)
      }} name='menu' className='res-icon'></FiAlignJustify>:
      <CgClose name='menu' onClick={()=>{
        setOpen(false)
      }} className='res-icon'></CgClose>
    }
  </div>
  </div>
    </nav>
  )
}



export default Navbar;



