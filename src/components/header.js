import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar-banner">
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-left">
          <img className="ecpoke-logo" src={require('../assets/images/logo.jpeg')} alt="ecpoke-logo"/>
        </div>
        <div className="collapse navbar-collapse nav-right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item">
              <Link to="menu" className="nav-link" href="#">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">Contact</Link>
              test
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;
