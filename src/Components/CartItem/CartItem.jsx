import React from 'react';
import Trash from '../../assets/icons/Trash.svg';

const CartItem = ({shoe, addItem, substractItem, deleteItem}) => {
  return shoe && (
    <div className='cart__item'>
        <img src={shoe.image} alt="" />
        <div className="cart__item__desc">
            <div className="cart__item__desc">
                <p>{shoe.name}</p>
                <div className="addOrSubstract">
                    <button onClick={() => substractItem(shoe)}>-</button>
                    <p>{shoe.qty}</p>
                    <button onClick={() => addItem(shoe)}>+</button>
                </div>
            </div>
        </div>
        <div className="cart__item__total">
            <p>Total: ${shoe.qty * shoe.price}</p>
            <button onClick={() => deleteItem(shoe)}>
                <img src={Trash} alt="" />
            </button>
        </div>
    </div>
  )
}

export default CartItem