import React from 'react';

const base = [
  {
    name: 'White Rice'
  },
  {
    name: 'Brown Rice'
  },
  {
    name: 'Spring Mix'
  },
]

const Base = () => {
  return (
    <div className="bowl-item">
      {base.map((item, index) => {
        return (
          <p key={index}>{index+1}. {item.name}</p>
        )
      })}
    </div>
  )
}

export default Base;
