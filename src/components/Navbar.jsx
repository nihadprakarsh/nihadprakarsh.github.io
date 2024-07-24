import React from "react";
import "./Navbar.css"; // Import custom CSS

var Name = "{ NIHAD PRAKARSH }";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="" target="_blank" className="href">
          {Name}
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Timeline
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
