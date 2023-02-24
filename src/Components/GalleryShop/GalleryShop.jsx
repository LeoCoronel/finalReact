import React, { useEffect, useState } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoes } from '../../redux/slices/shoesSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const GalleryShop = () => {
    const dispatch = useDispatch();
    const shoes = JSON.parse(localStorage.getItem('shoes')) || useSelector((state) => state);    

    const onAdd = (product) => {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        if(!shoes) {
            console.log("HAY QUE FETCHEAR")
            dispatch(fetchShoes());
        } else {
            console.log("NO SE FETCHEA")
        }
        localStorage.setItem('shoes', JSON.stringify(shoes));
    }, [])

    return (
        <div className='shop__shoes'>
            {shoes?.shoes?.data?.map((shoe) => {
                return (    
                    <ShoeCard 
                        key={shoe.id}
                        shoe={shoe}
                        onAdd={onAdd}
                    />
                )
            })}
        </div>
    )
}

export default GalleryShop