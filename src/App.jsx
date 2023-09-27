import React, { useState } from 'react';
import './App.css';

const imageUrls = {
  image1: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image1.jpg',
  image2: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image2.jpg',
  image3: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image3.jpg',
  image4: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image4.jpg',
  image5: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image5.jpg',
  image6: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image6.jpg',
  image7: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image7.jpg',
  image8: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image8.jpg',
  image9: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image9.jpg',
  image10: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image10.jpg',
  image11: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image11.jpg',
  image12: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image12.jpg',
  image13: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image13.jpg',
  image14: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image14.jpg',
  image15: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image15.jpg',
  image16: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image16.jpg',
  image17: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image17.jpg',
  image18: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image18.jpg',
  image19: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image19.jpg',
  image20: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image20.jpg',
  image21: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image21.jpg',
  image22: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image22.jpg',
  image23: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image23.jpg',
  image24: 'https://github.com/ThomasLam2142/react-gallery/blob/main/images/image24.jpg',
  //image25: '/images/image25.jpg'
};

const imgwidth = 600;
const imgheight = 337.50;

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the range of images to display based on the currentPage state
  const startIndex = currentPage * 6;
  const endIndex = startIndex + 6;
  const displayedImages = Object.values(imageUrls).slice(startIndex, endIndex);

  function nextClick() {
    setCurrentPage(currentPage + 1);
  }

  function prevClick() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <span>
        <h1 className="text-3xl font-bold underline text-cyan-400">
          Image Gallery
        </h1>
      </span>

      <div className='searchBar'>
        <span>
          <h2 className="text-xl italic text-cyan-400">Search for an image:</h2>
        </span>
        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
      </div>

      <div className='btnContainer'>
        <span className='navBtn' >
          <button className="btn btn-primary btnPrevious" onClick={prevClick}>Previous Page</button>
        </span>
        <span className='navBtn' >
          <button className="btn btn-primary btnNext" onClick={nextClick}>Next Page</button>
        </span>
      </div>

      <div className='galleryContainer'>
        {displayedImages.map((imageUrl, index) => (
          <a href={imageUrl} key={index} target="_blank" rel="noopener noreferrer">
            <div className='imgContainer'>
              <img src={imageUrl} className='imgElement' width={imgwidth} height={imgheight} alt={`Image ${index + 1}`} />
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
