import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// Components
import GalleryModal from './modal';

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

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    var masonryOptions = {
      transitionDuration: 0
    };
    const masonry = images.map((item, index) => {
      return (
        <div key={item+index} className="grid-item">
          <GalleryModal image={require(`../static/images/${item.name}`)}/>
        </div>
      )
    })
    return (
      <div className="gallery-container">
        <div className="gallery container">
          <div>
            <h1>Gallery</h1>
          </div>
          <div>
              <Masonry
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {masonry}
            </Masonry>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
