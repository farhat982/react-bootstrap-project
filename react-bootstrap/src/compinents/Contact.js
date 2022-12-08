import React from 'react'
import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import './Contact.css'


const Contact = () => {
  return (
    <div className='main--contact'>
        <div className='details--contact'>
            <h2 className='tel--con'> <BsTelephone/>+44 (0) 1923528891</h2> 
            <h2 className='tel--con'> <BsWhatsapp />+44 7574 913556</h2>
            
            <div className='email--con'>
            <h2>info@sandywords.co.uk</h2>
           
           <div className='button--div'>
            <h2>Order Assignment Just In A Few clicks</h2>
            <button className='btn btn--contact'>Order Now</button>
           </div>
          </div>
        </div>
        </div>
  
  )
}

export default Contact
