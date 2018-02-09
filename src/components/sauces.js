import React from 'react';

const sauces = [
  {
    name: 'Classic Shoyu'
  },
  {
    name: 'Sweet & Hot'
  },
  {
    name: 'Yuzu Wasabi'
  },
  {
    name: 'Spicy Mayo'
  },
  {
    name: 'Spicy Sesame Oil Shoyu'
  },
  {
    name: 'Ginger Wasabi Shoyu'
  },
  {
    name: 'Ponzu Shoyu'
  },
  {
    name: 'Miso Glaze'
  },
  {
    name: 'Eel Sauce'
  }
]

const Sauce = () => {
  return (
    <div className="bowl-item">
      {sauces.map((item, index) => {
        return (
          <div key={index}>
            <p key={index}>{index+1}. {item.name}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Sauce;
