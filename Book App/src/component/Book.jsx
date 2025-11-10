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

    function addToCart() {
        if (count > 0) {
          alert(`${props.title} (${count} pcs) added to cart!`)
        } else {
          alert("Please select at least 1 book before adding to cart.")
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

            <button
        onClick={addToCart}
        className="cart-btn"
        style={{
          marginTop: '10px',
          backgroundColor: '#0077b6',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🛒 Add to Cart
      </button>

        </div>
    )
}

export default Book