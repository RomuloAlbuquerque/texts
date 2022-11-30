import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#texts-navbar"
          aria-controls="texts-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="texts-navbar">
          <ul>
            <li>
              <NavLink to="/text/one">
                <p className="list-title">Charles Bukowski</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/text/two">
                <p className="list-title">Sigmund Freud</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/text/three">
                <p className="list-title">Nelson Rodrigues</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
