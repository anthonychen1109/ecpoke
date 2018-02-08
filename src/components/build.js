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
    <div className="build-own">
      <div className="customize container">
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
            <h2><span className="circle">2.</span> Protein</h2>
            <h5>$9.75 (2 scoops)</h5>
            <h5>$2.75 (3 scoops)</h5>
            <Proteins />
            <h2><span className="circle">3.</span> Mix-ins</h2>
            <p className="text-center">(Up to 5)</p>
            <Mixins />
          </div>
          <div className="bowl-right">
            <h2><span className="circle">4.</span> Sauce</h2>
            <p>(Up to 2)</p>
            <Sauces />
            <h2><span className="circle">5.</span> Toppings</h2>
            <p>(Up to 4)</p>
            <Toppings />
            <h2><span className="circle">6.</span> Add Crunch</h2>
            <p>(Up to 3)</p>
            <Crunch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Build;
