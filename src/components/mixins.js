import React from 'react';

const mixins = [
  {
    name: 'Cucumber'
  },
  {
    name: 'Red Onion'
  },
  {
    name: 'Mango'
  },
  {
    name: 'Edamame'
  },
  {
    name: 'Corn'
  },
  {
    name: 'Cilantro'
  },
  {
    name: 'Carrot'
  },
  {
    name: 'Masago'
  },
  {
    name: 'Tomatoes'
  },
  {
    name: 'Hijiki Seaweed'
  },
  {
    name: 'Spring Mix'
  },
  {
    name: 'Pineapple'
  }
]

const Mixins = () => {
  return (
    <div className="bowl-item">
      {mixins.map((item, index) => {
        return (
          <p key={index}>{index+1}. {item.name}</p>
        )
      })}
    </div>
  )
}

export default Mixins;
