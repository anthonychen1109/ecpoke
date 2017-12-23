import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Home from '../components/home';
import Header from '../components/header';
import Footer from '../components/footer';
import About from '../components/about';
import Menu from '../components/menu';
import Contact from '../components/contact';

const Routes = () => {
  return (
      <BrowserRouter>
        <div>
          <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/contact" component={Contact}/>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default Routes;
