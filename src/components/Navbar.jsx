import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
            <div className="container">

                {/* Toggle Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='mx-auto'>
                        <ul className="navbar-nav text-center">

                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/AboutMe"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/Skills"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/Project"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/Exp"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    Experience
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/Contactus"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link active-link"
                                            : "nav-link"
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar