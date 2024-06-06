import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
 const home = useNavigate();
  return (
   <div className='Error-container' style={{textAlign:"center"}}>
    <h1>404</h1>
    <h3>ERROR SOMETHING WRONG WITH THIS URL</h3>
     <button onClick={()=>{
             home('/')
     }}>Go Back</button>
   </div>
  )
}

export default Errorpage