import React from 'react';
import ShoeCard from '../ShoeCard/ShoeCard';

const GalleryShop = ({shoes}) => {
    const shoe = {
        image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/17fde102-11ef-4592-ad9a-795b667ed2cb/air-jordan-6-retro-shoes-vXk3FV.png',
        name: 'zapa',
        price: 200
    }
    return (
        <div>
            <p>Shoes Gallery</p>
            <ShoeCard shoe={shoe}></ShoeCard>
        </div>
    )
}

export default GalleryShop