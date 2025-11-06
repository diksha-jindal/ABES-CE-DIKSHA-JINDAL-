import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Link1() {
        function Home(){
        return <h1>This is Home Page</h1>
    }
    function About(){
        return <h1>About Page</h1>
    }
  return (
    <div>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/">Home  </Link>
        <Link to="/about">about  </Link>
        <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Link1;