import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="navbar animated fadeInDown hide">
        <ul className="navbar-list">
          <li><a href="#about">About</a></li>
          <li><a href="">Online Order/Menu</a></li>
          <li><a href="/">EC Poke</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
