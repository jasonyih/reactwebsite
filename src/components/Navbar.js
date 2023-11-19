import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
        <nav>
            <ul>
                <li className="li1"><Link to="/" className="nav1">Home</Link></li>
                <li className="li2"><Link to="/about" className="nav2">About Me</Link></li>
                <li className="li3"><Link to="/projects" className="nav3">Projects</Link></li>
                <li className="li4"><Link to="/contact" className="nav4">Contact Info</Link></li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;