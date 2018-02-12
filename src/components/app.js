import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Build from './build';
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
      x.className = 'responsive';
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
            <li><a href="">Online Order/Menu</a></li>
            <li className="nav-logo"><a href="/">EC Poke</a></li>
            <li><a href="#gallery">Gallery</a></li>
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
        <Parallax img={Parallax_img2} />
        <Contact />
      </div>
    )
  }
}

export default App;
