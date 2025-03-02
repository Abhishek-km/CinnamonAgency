import React, { useRef } from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
  const navbarCollapseRef = useRef(null);

  const handleNavItemClick = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
      navbarCollapseRef.current.classList.remove('show');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"  onClick={handleNavItemClick}  id='heading'>CINNAMON</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/projects" onClick={handleNavItemClick}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={handleNavItemClick}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleNavItemClick}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/careers" onClick={handleNavItemClick}>Careers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={handleNavItemClick}>Blog</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <Link className="btn btn-primary" to="/collaborate" role="button" onClick={handleNavItemClick}>Lets Collaborate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
