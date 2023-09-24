import React from 'react';
import './App.css';

const imageUrls = {
  image1: '/images/image1.jpg',
  image2: '/images/image2.jpg',
  image3: '/images/image3.jpg',
  image4: '/images/image4.jpg',
  image5: '/images/image5.jpg',
  image6: '/images/image6.jpg',
  image7: '/images/image7.jpg',
  image8: '/images/image8.jpg',
  image9: '/images/image9.jpg',
  image10: '/images/image10.jpg',
  image11: '/images/image11.jpg',
  image12: '/images/image12.jpg',
  image13: '/images/image13.jpg',
  image14: '/images/image14.jpg',
  image15: '/images/image15.jpg',
  image16: '/images/image16.jpg',
  image17: '/images/image17.jpg',
  image18: '/images/image18.jpg',
  image19: '/images/image19.jpg',
  image20: '/images/image20.jpg'
};

const imgwidth = 600;
const imgheight = 337.50;

export default function App() {
  return (
    <>
      <span>
        <h1 className="text-3xl font-bold underline">
          Image Gallery
        </h1>
      </span>

      <div className='searchBar'>
        <span>
          <h2>Search for an image:</h2>
        </span>
        <input type="text" placeholder="Search for an image..." className="text-lg border rounded-md p-2"/>
      </div>
      
      <body>
        <div className='galleryContainer'>

          <div className='imgContainer'>
            <img src = {imageUrls.image1} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>
          
          <div className='imgContainer'>
            <img src = {imageUrls.image2} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>

          <div className='imgContainer'>
            <img src = {imageUrls.image3} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>

          <div className='imgContainer'>
            <img src = {imageUrls.image4} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>

          <div className='imgContainer'>
            <img src = {imageUrls.image5} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>

          <div className='imgContainer'>
            <img src = {imageUrls.image6} className='imgElement' width={imgwidth} height={imgheight}/>
          </div>

        </div>
      </body>
        
      
    </>
    
  )
}