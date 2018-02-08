import React from 'react';

// Components
import Header from './header';
import About from './about';
import Build from './build';
import Gallery from './gallery';
import Parallax from './parallax';

// IMAGES
import Parallax_img2 from '../static/images/504.JPG';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Gallery />
      <Build />
      <Parallax img={Parallax_img2} />
    </div>
  )
}

export default App;
