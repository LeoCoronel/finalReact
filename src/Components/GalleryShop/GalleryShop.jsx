import React, { useEffect, useState } from 'react';
import ShoeCard from '../ShoeCard/ShoeCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchShoes } from '../../redux/slices/shoesSlice';
import { addToCart } from '../../redux/slices/cartSlice';

const GalleryShop = () => {
    const dispatch = useDispatch();
    const shoes = localStorage.getItem('shoes') ? JSON.parse(localStorage.getItem('shoes')) : useSelector((state) => state.shoes.data);    

    const onAdd = (product) => {
        dispatch(addToCart(product));
    }

    useEffect(() => {
        console.log("SHOES DAAT", shoes)
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
            {shoes && shoes?.map((shoe) => {
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