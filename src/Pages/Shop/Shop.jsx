import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShoes } from '../../redux/slices/shoesSlice';
import GalleryShop from '../../Components/GalleryShop/GalleryShop';

const Shop = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {state})
  return (
    <div>
      <p>Shoes</p>
      {/* <button onClick={e => dispatch(fetchShoes())}>Fetch shoes</button> */}
      <GalleryShop></GalleryShop>
    </div>
  )
}

export default Shop