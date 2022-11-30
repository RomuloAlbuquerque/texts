import './style.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
      <ul>
        <li>
          <NavLink to="/text/one">
            <p className='list-title'>Charles Bukowski</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/text/two">
            <p className='list-title'>Sigmund Freud</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/text/three">
            <p className='list-title'>Nelson Rodrigues</p>
          </NavLink>
        </li>
      </ul>
    );
  };

export default Navbar