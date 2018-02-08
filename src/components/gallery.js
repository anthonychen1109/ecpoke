import React from 'react';

const images = [
  {name: '414.JPG'},
  {name: '428.JPG'},
  {name: '479.JPG'},
  {name: '481.JPG'},
  {name: '488.JPG'},
  {name: '491.JPG'},
  {name: '493.JPG'},
  {name: '500.JPG'},
  {name: '504.JPG'},
  {name: '507.JPG'},
  {name: '564.JPG'},
  {name: '583.JPG'},
  {name: '588.JPG'},
  {name: '666.JPG'},
  {name: '769.JPG'},
  {name: '773.JPG'}
]

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((item,index) => {
        return (
          <div key={index}>
            <img src={require(`../static/images/${item.name}`)} alt="{item.name}"/>
          </div>
        )
      })}
    </div>
  )
}

export default Gallery;
