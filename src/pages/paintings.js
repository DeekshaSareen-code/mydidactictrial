import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import data  from '../resources';

function paintings() {

  // const{images} = data;
  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="block">
      <div style={{ textAlign: "center" }} >
        <div style={{
          padding: "0 40px"
        }}>
          <Carousel 
            pause='hover'
            data={data}
            time={2000}
            width="1850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            wrap={true}
            keyboard={true}
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="100%"
            slideBackgroundColor="black"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            fade={true}
            style={{
              textAlign: "center",
              maxWidth: "1850px",
              maxHeight: "500px",
              margin: "40px auto",
              borderRadius: 16,
              
            }}
            />
        </div>
      </div>
    </div>
  );
}

export default paintings