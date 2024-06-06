import React from 'react'
import './Services.css'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

function Services() {
  return (
    <>
    <div className='Service-container'>
        <div className='Service-content'>
            <div className='Service-data'>
                    <div className='service-sidetext'>
                    <MdOutlineDeliveryDining  className='icn'/>
                        <h5> Free delivery Express</h5>
                    </div>
            </div>
            <div className='Service-data'>
                  <div className='service-middleside'>
                     <RiSecurePaymentFill className='icn' />
                    <h5>Money Refund Guaranteed</h5>
                  </div>
                  <div className='service-middleside'>
                  <MdOutlineDeliveryDining  className='icn'/>
                    <h5>Fast Delivery</h5>
                  </div>
            </div>
            <div className='Service-data'>
                <div className='service-sidetext'>
                <RiSecurePaymentFill className='icn' />
                  <h5>Online Secure Payments</h5>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Services;