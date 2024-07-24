import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (buttonName) => ({
    backgroundColor: hoveredButton === buttonName ? "#6c757d" : "transparent",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    transform: hoveredButton === buttonName ? "scale(1.02)" : "scale(1)",
    boxShadow:
      hoveredButton === buttonName ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
  });

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a
          href="https://nihadprakarsh.vercel.app/"
          target="_blank"
          className="href"
        >
          {`{ NIHAD PRAKARSH }`}
        </a>
      </div>
      <ul className="navbar-nav">
      <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => handleNavigation("/")}
            style={getButtonStyle("Home")}
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => handleNavigation("/about")}
            style={getButtonStyle("about")}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            About
          </button>
        </li>
        <li className="nav-item">
        <button
            className="nav-link"
            onClick={() => handleNavigation("/blog")}
            style={getButtonStyle("Blog")}
            onMouseEnter={() => handleMouseEnter("Blog")}
            onMouseLeave={handleMouseLeave}
          >
            Blog
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => handleNavigation("/timeline")}
            style={getButtonStyle("timeline")}
            onMouseEnter={() => handleMouseEnter("timeline")}
            onMouseLeave={handleMouseLeave}
          >
            Timeline
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => handleNavigation("/contact")}
            style={getButtonStyle("contact")}
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={() => handleNavigation("/resume")}
            style={getButtonStyle("resume")}
            onMouseEnter={() => handleMouseEnter("resume")}
            onMouseLeave={handleMouseLeave}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
