import React from 'react'
import './Facts.css'

const Badge = (props) => {
    
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle'>
            {props.text1}
            </div>
            <span>{props.text2}</span>
            <span>{props.text3}</span>
      </div>  
    </div>
  )
}

export default Badge
