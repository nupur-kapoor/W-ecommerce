import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/2.png';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';


const Header = () => {
  return (
    <MainHeader>
        <div className='head'>
            <NavLink to='/'>
            <img className="logo" src={logo}></img>
            </NavLink>
             <Navbar/>
             </div>
    </MainHeader>
  )
}


const MainHeader = styled.header`
           
 background-color:black;
 width:100%;


 .head
 {
    max-width:1100px;
    width:100%;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
 }

 .logo{
    height:100px;
    width:150px;
    object-fit:cover;
}

 `;


export default Header;