import React from 'react'
import {useState} from 'react'

function Count1() {
    const[count, setCount] = useState(0)
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
        
    </div>
  )
}

export default Count1;
