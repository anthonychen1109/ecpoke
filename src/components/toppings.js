import React from 'react';

const toppings = [
  {
    name: 'Avocado Add $1'
  },
  {
    name: 'Pickled Ginger'
  },
  {
    name: 'Green Onion'
  },
  {
    name: 'Wasabi'
  },
  {
    name: 'Furikake'
  },
  {
    name: 'Seaweed Salad'
  },
  {
    name: 'Kani Salad'
  },
  {
    name: 'Jalapeno'
  },
  {
    name: 'Radish'
  },
  {
    name: 'Lemon'
  },
  {
    name: 'Hawaiian Salt'
  }
]

const Toppings = () => {
  return (
    <div className="bowl-item">
      {toppings.map((item, index) => {
        return (
          <div key={index}>
            <p>{index+1}. {item.name}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Toppings;
