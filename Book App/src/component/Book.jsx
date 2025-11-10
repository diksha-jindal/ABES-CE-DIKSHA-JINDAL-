import React, { useState } from 'react'
import './book.css'
function Book(props) {

    const [count, setCount] = useState(0)
    function increment() {
        if (count < 10) {
            setCount(count + 1)
          } else {
            alert("You can buy a maximum of 10 books only!")
          }
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1)
          } else {
            alert("Count cannot be less than 0!")
          }
    }
    return (
        <div id="book">
            <img src={props.img} alt="" height={170} width={170} />
            <h1>Title:{props.title}</h1>
            <h1>Price:{props.price}</h1>

            <div>
                <button onClick={increment}>+</button>
                <span>{count}</span>
                <button onClick={decrement}>-</button>
            </div>

        </div>
    )
}

export default Book