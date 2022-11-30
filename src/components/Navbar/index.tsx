import { NavLink } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm nav-container">
      <div className="container-fluid">
        <NavLink to="/">
          <h4 className="nav-logo-text">Romulo Albuquerque</h4>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-main"
          aria-controls="navbar-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse container-list" id="navbar-main">
          <ul className="navbar-nav offset-md-2 list-nav-main">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/text" activeClassName="active">
                <p>Text</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                <p>Admin</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
