App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Book from "./component/Book";
import Home from "./component/Home";
import About from "./component/About";
import Login from "./component/Login";
import Register from "./component/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar at top */}
        <Nav />

        {/* Routing section */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/books"
            element={
              <center>
                <div id="aaa">
                  <Book
                    title="Math"
                    price="400"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLl1PDJCVU4a8YgxQo5FRpbj5cREf8sjx6w&s"
                  />
                  <Book
                    title="Physics"
                    price="700"
                    img="https://cdn.iconscout.com/icon/premium/png-256-thumb/physics-book-icon-svg-download-png-1730255.png"
                  />
                  <Book
                    title="Chemistry"
                    price="800"
                    img="https://png.pngtree.com/png-clipart/20231015/original/pngtree-chemistry-text-book-picture-image_13167835.png"
                  />
                  <Book
                    title="Computer"
                    price="1000"
                    img="https://www.helmandbooks.com/images/IMG_COVERPAGE_20230120_010311.jpg"
                  />
                </div>
              </center>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
