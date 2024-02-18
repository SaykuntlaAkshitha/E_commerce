import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'cafe1.web',
    'cafep1.png',
    'cafes3.jpeg',
    'cafes4.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  const sliderStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '130%',
    height: '1250',
    transition: 'transform 0.5s ease-in-out',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    fontSize: '1.5rem',
    backgroundColor: '#A26A42',
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '0',
  };

  return (
    <div style={sliderStyle}>
      <button style={buttonStyle} onClick={prevImage}>&lt;</button>
      <img style={imageStyle} src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button style={nextButtonStyle} onClick={nextImage}>&gt;</button>
    </div>
  );
};

export default ImageSlider;