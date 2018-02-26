import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// Components
import GalleryModal from './modal';

const images = [
  {
    name: '414.JPG',
    item: '',
    desc: ''
  },
  {
    name: '428.JPG',
    item: '',
    desc: ''
  },
  {
    name: '479.JPG',
    item: '',
    desc: ''
  },
  {
    name: '481.JPG',
    item: '',
    desc: ''
  },
  {
    name: '488.JPG',
    item: '',
    desc: ''
  },
  {
    name: '491.JPG',
    item: '',
    desc: ''
  },
  {
    name: '493.JPG',
    item: '',
    desc: ''
  },
  {
    name: '500.JPG',
    item: '',
    desc: ''
  },
  {
    name: '504.JPG',
    item: '',
    desc: ''
  },
  {
    name: '507.JPG',
    item: '',
    desc: ''
  },
  {
    name: '564.JPG',
    item: '',
    desc: ''
  },
  {
    name: '583.JPG',
    item: '',
    desc: ''
  },
  {
    name: '588.JPG',
    item: '',
    desc: ''
  },
  {
    name: '666.JPG',
    item: '',
    desc: ''
  },
  {
    name: '769.JPG',
    item: '',
    desc: ''
  },
  {
    name: '773.JPG',
    item: '',
    desc: ''
  }
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
      <div id="gallery" className="gallery-container">
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
