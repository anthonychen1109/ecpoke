import React from 'react';

const crunch = [
  {
    name: 'Tempura Crisps'
  },
  {
    name: 'Onion Crisps'
  },
  {
    name: 'Garlic Crisps'
  },
  {
    name: 'Sesame Seeds'
  },
  {
    name: 'Seaweed'
  },
  {
    name: 'Grounded Peanuts'
  },
  {
    name: 'Wonton Crisps'
  }
]

const Crunch = () => {
  return (
    <div className="bowl-item">
      {crunch.map((item, index) => {
        return (
          <p key={index}>{index+1}. {item.name}</p>
        )
      })}
    </div>
  )
}

export default Crunch;
