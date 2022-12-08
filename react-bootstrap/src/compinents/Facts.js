import React from 'react'
import Badge from './Badge'
import './Facts.css'

const Facts = () => {
  return (
  
        <div className='experience' id='Experience'>
                <Badge text1= '100+' text2='Professional' text3='writers working with us.'/>
                <Badge text1= '10min' text2='Average customer ' text3='support response time'/>
                <Badge text1= {'2+'} text2={'Orders we have'} text3={'completed over the years'}/>
                <Badge text1= {'2+'} text2={'Our success rate'} text3={'in assignment assistance'}/>
        </div>
      )
    }
  
export default Facts
