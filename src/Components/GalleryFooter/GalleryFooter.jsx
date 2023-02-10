import React from 'react';
import Arrow from '../../assets/icons/Arrow.png'

const GalleryFooter = () => {
  return (
    <div className='galleryFooter'>
      <p>Want to see more shoes?</p>
      <div className="galleryFooter__btn">
        <a href="/shop">
          <img src={Arrow} alt="arrow" />
          Visit the shop!
        </a>
      </div>
    </div>
  )
}

export default GalleryFooter