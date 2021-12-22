import React from "react";
import {  Link } from "react-router-dom";
import "./Navigation.css"
import Home from "../pages/Home";

function Navigation () {
    return (
        <header>
                <div class="left">
                    <h3 id="name">
                        <Link to="/home">Emmanuel K. Agyapong</Link>
                    </h3>
                </div>
                    <nav class="menu">
                        <ul class="navbar ml-auto">
                            <li>
                                <Link to={"/projects"} className="nav-link">Projects</Link>
                            </li>
                            <li>
                                <Link to={"/resume"} className="nav-link">Resume</Link>
                            </li>
                            <li>
                                <Link to={"/interests"} className="nav-link">Interests</Link>
                            </li>
                            <li>
                                <Link to={"/contacts"} className="nav-link">Contacts</Link>
                            </li>
                        </ul>
                    </nav>
        </header>
    ); 
}
export default Navigation;