import React from 'react'
import { json, useLocation } from 'react-router-dom';
import './Card.css'

const Card = () => {
  const state = useLocation();
  return (
  <>
     
     <div className='Card-Container'>
      <div className='Card-Content'>
        <div className='Card-img'>
           <img src={state.state.image}></img>
        </div>
        <div className='Card-Details'>
              <h3 className='Card-title'>{state.state.title}</h3>
              <p className='Card-para'>{state.state.description}</p>
              <button >Buy</button>
              <button>Cancel</button>
        </div>
      </div>
     </div>
    {/* {JSON.stringify(state.state)} */}
    
    </>
  )
}

export default Card;