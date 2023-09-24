import React from 'react';
import './App.css';

const imageUrls = {
  image1: '/images/image1.jpg',
  image2: '/images/image2.jpg',
  image3: '/images/image3.jpg',
  // Add more image URLs as needed
};

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Image Gallery
      </h1>
      <body>
        <div>
          <img src = {imageUrls.image1} className='imgElement' alt="image1" width="700"/>
        </div>
        
      </body>
        
      
    </>
    
  )
}