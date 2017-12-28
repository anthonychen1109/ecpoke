import React from 'react';

//COMPONENTS
import Card from './card';
import About from './about';

const Home = () => {
  return (
    <div>
      <h1 className="temporary">COMING SOON...</h1>
      <hr />
    <div id="about"><About /></div>
    <div id="menu" className="body-imgs">
      <Card foodPic={require('../assets/images/pic_500.JPG')} />
      <Card foodPic={require('../assets/images/pic_504.JPG')} />
      <Card foodPic={require('../assets/images/pic_507.JPG')} />
      <Card foodPic={require('../assets/images/pic_558.JPG')} />
      <Card foodPic={require('../assets/images/pic_564.JPG')} />
      <Card foodPic={require('../assets/images/pic_583.JPG')} />
      <Card foodPic={require('../assets/images/pic_588.JPG')} />
      <Card foodPic={require('../assets/images/pic_666.JPG')} />
      <Card foodPic={require('../assets/images/pic_769.JPG')} />
      <Card foodPic={require('../assets/images/pic_773.JPG')} />
    </div>
    </div>
  )
}

export default Home;
