import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Productitem.css'
import { useNavigate } from 'react-router-dom';
const Productitem = () => {
  const api = "https://fakestoreapi.com/products"
   const navigate = useNavigate();
  const [result , setResult] = useState([]);
  
  const getdata = ()=>{
    axios.get(api).then(res=>{
      setResult(res.data);
      // console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  } 
  useEffect(()=>{
    
    getdata();
    console.log(JSON.stringify(result));
  },[]);

  return(
    <>
      {/* {JSON.stringify(result)} */}
      <div className='Product-container'>
      <h1 style={{textAlign:"center"}}>PRODUCTS</h1>
        <div className='product-content'>
            
          {
            result.map((Prdata)=>{
                return(
                    <>
                    <div className='Product-card'>
                        <div className='product-img'>
                          <img src={Prdata.image}></img>
                        </div>
                        <div className='product-title'>{Prdata.title}</div>
                        <div className='product-price'>${Prdata.price}</div>
                        {/* <div className='product-para'>{Prdata.description}</div> */}
                       <div className='btn'>
                       <button id='buy'>BUY</button>
                       <button onClick={()=>{
                          navigate('/Card',{state:Prdata});
                       }}>Add to card</button>
                       </div>
                    </div>
                    </>
                )
            })
          }
        </div>
      </div>
    </>
  )
  }
     
 

export default Productitem;