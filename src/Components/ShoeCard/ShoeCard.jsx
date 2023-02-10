import React from 'react'

const ShoeCard = ({shoe}) => {
    return (
        <div class="sneakerCard glass" id="${id}">
            <div> 
                <img src={shoe.image ? shoe.image : "https://voax.co/img/noitem.png"} alt="shoe" />
                <p class="sneakerCard__price">${shoe.price}</p>
            </div>
            <div class="sneak__desc">
                <p class="sneakerCard__name">{shoe.name}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default ShoeCard