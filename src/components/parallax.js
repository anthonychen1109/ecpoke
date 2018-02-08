import React, { Component } from 'react';
import Order from './order';

class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let divStyle = {
      backgroundAttachment: 'fixed',
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '60vh',
      position: 'relative',
      width: '100%'
    };
    return (
      <div
        className="parallax"
        style={divStyle}
      >
      <Order />
      </div>
    )
  }
}

export default Parallax;
