import React from 'react'
import './Comp3.css'

function Comp3(props) {
  return (
    <div id='jkl'>
      <h3>{props.item_name}</h3>
      <img src={props.img_url} alt={props.item_name} width="200" height="200" />
      <p>Price: {props.price}</p>
    </div>
  )
}

export default Comp3
