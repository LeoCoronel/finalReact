const ShoeCard = ({shoe, addToCart}) => {
    return (
        <div className="sneakerCard" id="${id}">
            <div className='sneakerCard__image'> 
                <img src={shoe.image ? shoe.image : "https://voax.co/img/noitem.png"} alt="shoe" />
                <p>${shoe.price}</p>
            </div>
            <div className="sneakerCard__desc">
                <div className="sneakerCard__desc__name">
                    <p>{shoe.name}</p>
                </div>
                <button onClick={() => addToCart(shoe.id)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ShoeCard