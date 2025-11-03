import React from "react";
import "./Book.css";
import {useState} from 'react'

function Book(props) {
  const [count, setCount] = useState(0);
  function inc() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("You cannot add more than 10 items!");
    }
  }
  function dec() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You cannot go below 0!");
    }
  }
  return (
    <div id="book">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H3eK6K4l8dpa6E5rmZ3BNi3YEr147juAcQ&s"
        alt=""
        height={150}
        width={100}
      />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default Book;
