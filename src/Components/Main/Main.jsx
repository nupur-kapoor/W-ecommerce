import React from 'react'
import './Main.css'
import {useNavigate} from 'react-router-dom'
const Main = ({name}) => {
  const navigate = useNavigate(); 
  return (
    <>
      <div className='Main-Container'>
         <div className='Main-Width'>
            <div className='Main-left'>
             <div className='Main-text'>
             <h1>Best Deals In One Place</h1>
             <h1>{name.name}</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae ea, sapiente veniam tenetur repellat assumenda possimus unde voluptas modi exercitationem illo impedit. Cum, officia eos veniam dignissimos tempora quos?</p>
              <button onClick={()=>navigate('/Products')}>Shop Now</button>
            </div>
             </div>
            <div className='Main-right'>
              <img src='https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww'></img>
            </div>
         </div>
      </div>
    </>
  )
}

export default Main