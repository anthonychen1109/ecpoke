import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar animated fadeInDown hide">
        <ul className="navbar-list">
          <li>About</li>
          <li>Online Order/Menu</li>
          <li>Logo</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
