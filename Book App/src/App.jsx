import React from 'react'
import Book from './component/Book.jsx'
import './App.css'

function App() {
  return (
    <div id='aaa'>
      <Book title="Math" price= {200}/>
      <Book title="Physics" price= {500} />
      <Book title="Chemistry" price= {600} />
    </div>
  )
}

export default App
