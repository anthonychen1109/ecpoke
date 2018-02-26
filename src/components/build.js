import React from 'react';

// Components
import Base from './base';
import Proteins from './proteins';
import Mixins from './mixins';
import Sauces from './sauces';
import Toppings from './toppings';
import Crunch from './crunch';

const Build = () => {
  return (
    <div id="menu" className="build-own">
      <div className="customize container">
        <h2 className="menu-header">Menu</h2>
        <div className="build">
          <div className="triangle">
          </div>
          <div>
            <h2>Build Your Bowl</h2>
          </div>
        </div>
        <div className="bowl container">
          <div className="bowl-left">
            <h2><span className="circle">1.</span> Base</h2>
            <Base />
            <h2><span className="circle">2.</span> Protein <span className="sub-header" >$9.75 (2 scoops)</span> <span className="sub-header" >$12.75 (3 scoops)</span></h2>
            <Proteins />
            <h2><span className="circle">3.</span> Mix-ins <span className="sub-header" >(Up to 5)</span></h2>
            <Mixins />
          </div>
          <div className="bowl-right">
            <h2><span className="circle">4.</span> Sauce <span className="sub-header" >(Up to 2)</span></h2>
            <Sauces />
            <h2><span className="circle">5.</span> Toppings <span className="sub-header" >(Up to 4)</span></h2>
            <Toppings />
            <h2><span className="circle">6.</span> Add Crunch <span className="sub-header" >(Up to 3)</span></h2>
            <Crunch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Build;
