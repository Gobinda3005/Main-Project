import React from 'react';


const sampleStyle = {
	width: '100vw',
}
const CarouselPhotos = ({ text }) => {
  return (
    <img
      className='h-auto'
      style={sampleStyle}
      src="https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UF1000,1000_QL80_.jpg"
      alt={text}
      height="100%"
			width="100%"
    />
  );
};

export default CarouselPhotos;
