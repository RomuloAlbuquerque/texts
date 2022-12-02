import './style.css'

import { NavLink } from "react-router-dom"

const AuthorsList = ()=>{
    return (
        <div className="container-author-list">
            <ul>
                <li>
                    <NavLink to='/authors/bukowski' exact>
                        <p>Charles Bukowski</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/authors/freud' exact>
                        <p>Sigmund Freud</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/authors/rodrigues' exact>
                        <p>Nelson Rodrigues</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/authors/brown' exact>
                        <p>Dan Brown</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/authors/thompson' exact>
                        <p>Hunter Thompson</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AuthorsList