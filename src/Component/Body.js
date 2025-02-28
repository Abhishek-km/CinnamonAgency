import React from 'react'
import props from 'prop-types'

export default function Body(props) {
  return (
    <div className="container mt-5">
      <h1><b>{props.heading}</b></h1>
      <p>{props.paragraph} </p>
      {props.imgUrl != "" && <img 
        src={props.imgUrl}
        className="img-fluid" 
        alt="placeholder" 
        style={{ width: '50%', height: 'auto' }} />}
    </div>
  )
}
