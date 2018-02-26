import React from 'react';

const soup = [
  {
    name: 'Miso Soup',
    price: '2.50'
  },
  {
    name: 'Spicy Miso Soup',
    price: '2.50'
  }
]

const Soup = () => {
  return (
    <div className="build-own">
      <div className="customize container">
        <div className="build">
          <div className="triangle">
          </div>
          <div>
            <h2>EC Soup</h2>
          </div>
        </div>

        <div className="soup container">
          {soup.map((item, index) => {
            return (
              <div key={item+index} className="soup-menu">
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Soup;
