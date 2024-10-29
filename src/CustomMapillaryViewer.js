// src/CustomMapillaryViewer.js

import React, { useState } from 'react';
import MapillaryViewer from './MapillaryViewer'; // Make sure this imports correctly

const CustomMapillaryViewer = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const customImages = [
    '/assets/image1.jpg', // Replace with your image paths
    '/assets/image2.jpg',
    '/assets/shot-panoramic-composition-living-room.jpg', // Your specific panoramic image
    // Add more images as needed
  ];

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % customImages.length);
  };

  const handlePrevious = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + customImages.length) % customImages.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Custom Navigation Viewer</h1>
      <MapillaryViewer
        accessToken="MLY|8467536026656705|49c6eed4428edad15df19c7e1f3a043f" 
        imageUrl={customImages[imageIndex]}
        style={{ width: '100%', height: '400px' }}
      />
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default CustomMapillaryViewer;

//EXIF