import React, { Component } from 'react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo(tag) {
    $('html,body').animate({scrollTop: $(`#${tag}`).offset().top}, 500);
  }

  render() {
    return (
      <div className="navbar animated fadeInDown hide">
        <ul className="navbar-list">
          <li><a href="#about"
            onClick={() => this.scrollTo('about')}
            >About</a></li>
          <li><a href="#" data-glf-cuid="7b36cc74-4637-4adf-b894-883c432a5670" data-glf-ruid="4a6796d4-29ae-4e6b-a912-e510e79bdb82" >Online Order</a></li>
          <li><a href="/">EC Poke</a></li>
          <li><a href="#menu"
            onClick={() => this.scrollTo('menu')}
            >Menu</a></li>
          <li><a href="#gallery"
            onClick={() => this.scrollTo('gallery')}
            >Gallery</a></li>
          <li><a href="#contact"
            onClick={() => this.scrollTo('contact')}
            >Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
