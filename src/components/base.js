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
          <div key={index}>
            <p>{index+1}. {item.name}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Base;
