import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import img from "./assets/image/image1.png";  

function App() {
  return (
    <div className="app-container">
      {/* Image above content */}
      {/* <img src={img} height={100} width={100} alt="image" /> */}
      

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            
            {/* Image in navbar */}
            <img src={img} height={50} width={50} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Link</a></li>
                  <li><a className="dropdown-item" href="#">Another link</a></li>
                  <li><a className="dropdown-item" href="#">A third link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid mt-3 text-center">
        <h3>Navbar With Dropdown</h3>
        <p>This example adds a dropdown menu in the navbar.</p>

        <button className="btn btn-primary btn-lg mt-3">
          Click Me 🚀
        </button>
      </div>
    </div>
  );
}

export default App;
