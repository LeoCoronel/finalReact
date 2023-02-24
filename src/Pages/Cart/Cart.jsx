import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    getCartTotal,
    removeItem,
    decreaseItemQty,
    increaseItemQty
} from '../../redux/slices/cartSlice';
import CartItem from '../../Components/CartItem/CartItem';

const Cart = () => {
    const { cart, totalPrice } = useSelector((state) => state.allCart);
    console.log("🚀 ~ file: Cart.jsx:13 ~ Cart ~ cart:", cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const addItem = (product) => {
        dispatch(increaseItemQty(product))
    }

    const substractItem = (product) => {
        dispatch(decreaseItemQty(product));
    }

    const deleteItem = (product) => {
        dispatch(removeItem(product))
    }

    return (
        <div className='cart'>
            <p>Cart ${totalPrice}</p>
            {cart.map((item) => {
                return <CartItem 
                        key={item.id} 
                        shoe={item} 
                        addItem={addItem}
                        substractItem={substractItem}
                        deleteItem={deleteItem}
                        />
            })}
        </div>
    )
}

export default Cart