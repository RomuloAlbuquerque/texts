import './style.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className='container-main'>
      <div className='container-brand'>
        <h1>Romulo Albuquerque</h1>
      </div>
    <div className="container-list-nav">
      <ul className='list-group'>
        <li>
          <NavLink to="/" activeClassName="active my-link" exact>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/text" activeClassName="active">
            <p>Texto</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/feature" activeClassName="active">
            <p>Feature</p>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
