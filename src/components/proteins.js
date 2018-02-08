import React from 'react';

const proteins = [
  {
    name: 'Tuna'
  },
  {
    name: 'Spicy Tuna'
  },
  {
    name: 'Salmon'
  },
  {
    name: 'Yellowtail Add $1'
  },
  {
    name: 'Organic Tofu'
  },
  {
    name: 'Crab meat Add $1'
  },
  {
    name: 'Eel'
  },
  {
    name: 'Shrimp'
  },
  {
    name: 'Chicken'
  }
]

const Proteins = () => {
  return (
    <div className="bowl-item">
      {proteins.map((item, index) => {
        return (
          <p key={index}>{index+1}. {item.name}</p>
        )
      })}
    </div>
  )
}

export default Proteins
