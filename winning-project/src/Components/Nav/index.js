import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/img/logo/genshin-impact-logo.jpg";
import "./Nav.css";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand d-lg-none" href="#">
                <img src={Logo} alt="Logo" width="150px"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#"> Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us"> About </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cards"> Characters </a>
                    </li>
                    <li className="nav-item">
                        <img className="d-none d-lg-block" src={Logo} alt="Logo" width="150px"/>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#events"> Events </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer"> Contact us </a>
                    </li>
                    <li className="nav-item">
                        <Link to = "/"><button className="btn btn-dark btn-block">Log Out</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;