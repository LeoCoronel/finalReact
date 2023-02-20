import React, { useEffect } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoes } from '../../redux/slices/shoesSlice';

const GalleryShop = () => {
    const dispatch = useDispatch();
    const shoes = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchShoes());
    }, [])

    return (
        <div className='shop__shoes'>
            {shoes?.shoes?.data?.map((shoe) => {
                return (    
                    <ShoeCard 
                        key={shoe.id}
                        shoe={shoe}
                    />
                )
            })}
        </div>
    )
}

export default GalleryShop