import { NavLink } from "react-router-dom";
import "./style.css";
import Logo from '../../assets/img/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm nav-container">
      <div className="container-fluid">
        <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo-autores-polêmicos"/>
        </NavLink>
        </div>

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

        <div
          className="collapse navbar-collapse container-list"
          id="navbar-main"
        >
          <ul className="navbar-nav offset-md-2 list-nav-main">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/authors/list" activeClassName="active">
                <p>Autores</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
