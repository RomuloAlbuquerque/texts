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
        <li>.
          <NavLink to="/text/two">
            <p className='list-title'>Como o homem chegou mais perto de outros mundos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/text/three">
            <p className='list-title'>Os interesses por trás de obras sobre independência do Brasil</p>
          </NavLink>
        </li>
      </ul>
    );
  };

export default Navbar