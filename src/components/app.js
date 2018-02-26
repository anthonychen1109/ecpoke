import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Build from './build';
import SignatureBowl from './signaturebowl';
import Soup from './soup';
import Gallery from './gallery';
import Parallax from './parallax';
import Contact from './contact';

// IMAGES
import Parallax_img2 from '../static/images/504.JPG';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropDownMenu = this.dropDownMenu.bind(this);
  }

  dropDownMenu() {
    let x = document.getElementById('dropDownClick');
    if (x.className === 'navbar-list') {
      x.className = ' responsive animated fadeInDown';
    } else {
      x.className = 'navbar-list';
    }
  }

  render() {
    return (
      <div className="app">
        <nav className="fixed-navbar">
          <ul id="dropDownClick" className="navbar-list">
            <li><a href="#about">About</a></li>
            <li><a href="#" data-glf-cuid="7b36cc74-4637-4adf-b894-883c432a5670" data-glf-ruid="4a6796d4-29ae-4e6b-a912-e510e79bdb82" >Online Order</a></li>
            <li className="nav-logo"><a href="/">EC Poke</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="dropDownIcon">
              <a
                href="javascript:void(0)"
                onClick={this.dropDownMenu}
                >
                &#9776;
              </a>
            </li>
          </ul>
        </nav>
        <Navbar />
        <Header />
        <About />
        <Gallery />
        <Build />
        <SignatureBowl />
        <Soup />
        <Parallax img={Parallax_img2} />
        <Contact />
      </div>
    )
  }
}

export default App;
