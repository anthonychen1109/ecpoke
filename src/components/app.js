import React from 'react';

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

const App = () => {
  return (
    <div className="app">
      <div className="fixed-navbar">
        <ul className="navbar-list">
          <li>About</li>
          <li>Online Order/Menu</li>
          <li>Logo</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
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

export default App;
