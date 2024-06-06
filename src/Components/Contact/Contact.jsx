import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact-container'>
        <div className='contact-content'>
            <input type='text' placeholder='Enter Your Name' formAction='' required></input>
            <input type='text' placeholder='Enter Your Gmail' required></input>
            <textarea type="text" placeholder='Your Message To Us'>
            </textarea>

            <button>Submit</button>
        </div>
    </div>
  )
}

export default Contact;