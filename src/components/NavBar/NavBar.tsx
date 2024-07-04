import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h4 className="navbar-brand">Api App</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/contacts">Contacts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/info">Info</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/general">General</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/more">More</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pages/admin">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;