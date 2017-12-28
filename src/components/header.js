import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const refreshPage = () => window.location.reload()

  return (
    <div className="navbar-banner">
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-left">
          <img className="ecpoke-logo" src={require('../assets/images/logo.png')} alt="ecpoke-logo"/>
        </div>
        <div className="collapse navbar-collapse nav-right" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#"
                onClick={() => this.refreshPage()}
                >
                  Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;
