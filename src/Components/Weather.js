import React from 'react'

export default function Weather(props) {
  return (
    <div>
        {props.tempreature && <p className='info_key'>Tempreature : <span className='info_value'> {props.tempreature} </span></p> }

        

        {props.humidity &&  <p className='info_key'>Humidity : <span className='info_value'> {props.humidity}</span></p>}

        {props.description &&  <p className='info_key'>Description : <span className='info_value'>{props.description}</span></p>}

        {props.country && <p className='info_key'>Country : <span className='info_value'>{props.country}</span></p>}

        {props.country && <p className='info_key'>City : <span className='info_value'>{props.city}</span></p>}

        {props.error &&  <p className='info_key'>Warning : <span className='info_value'>{props.error}</span></p>}
       
       
        
        
    </div>
  )
}

