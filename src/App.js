import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Card from './components/card';
import Footer from './components/footer';

// CONTAINERS
import NavBar from './containers/navbar';
import BodyBlock from './containers/body_block';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <hr />
        <BodyBlock />
        <div className="body-imgs">
          <Card foodName="food-title-1" foodPic={require('./images/pic_500.JPG')} foodText="image 1 text"/>
          <Card foodName="food-title-2" foodPic={require('./images/pic_504.JPG')} foodText="image 2 text"/>
          <Card foodName="food-title-3" foodPic={require('./images/pic_507.JPG')} foodText="image 3 text"/>
          <Card foodName="food-title-4" foodPic={require('./images/pic_558.JPG')} foodText="image 4 text"/>
          <Card foodName="food-title-5" foodPic={require('./images/pic_564.JPG')} foodText="image 5 text"/>
          <Card foodName="food-title-6" foodPic={require('./images/pic_583.JPG')} foodText="image 6 text"/>
          <Card foodName="food-title-7" foodPic={require('./images/pic_588.JPG')} foodText="image 7 text"/>
          <Card foodName="food-title-8" foodPic={require('./images/pic_666.JPG')} foodText="image 8 text"/>
          <Card foodName="food-title-9" foodPic={require('./images/pic_769.JPG')} foodText="image 9 text"/>
          <Card foodName="food-title-10" foodPic={require('./images/pic_773.JPG')} foodText="image 10 text"/>
        </div>
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
