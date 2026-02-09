import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='mx-auto'>
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/Aboutus"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
                                        }
                                    >
                                        About me
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink
                                        to="/Skills"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
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
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
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
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
                                        }
                                    >
                                        Experience
                                    </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/Contactus" className={({ isActive }) => isActive
                                                ? "nav-link text-info fw-bold active"
                                                : "nav-link text-white fw-bold"
                                        }
                                    >
                                        Contact me
                                    </NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
