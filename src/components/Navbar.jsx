import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='mx-auto text-white'>
                            <ul className="navbar-nav ">
                            <li className="nav-item me-5">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="./Aboutus">About me</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="./Skills">Skils</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="/Project">Projects</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link className="nav-link active text-white fw-bold" aria-current="page" to="./Contactus">Contact me</Link>
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