import { NavLink } from 'react-router-dom';
import './style.css';

const AuthorsNavbar = ()=>{
    return (
        <div className="container-author-navbar">
            <NavLink to="/authors/list">
            <div className="button-author-list">
                <span>Lista de Autores</span>
            </div>
            </NavLink>
        </div>
    )
}

export default AuthorsNavbar