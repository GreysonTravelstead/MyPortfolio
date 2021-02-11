import React from 'react';
import profile from '../images/profile.png';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="NavBar"> 
            <nav className="nav">
                <div className="profile">
                    <img src={profile} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="nav_contact">
                    <p className="nav_email">gst0001@mix.wvu.edu</p>
                    <p className="nav_phone">(304) 657-0995</p>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;