import React, { useState } from 'react';
import Trash from '../../assets/icons/Trash.svg';

const CartItem = ({shoe, addItem, substractItem, deleteItem}) => {
    const [disabled, setDisabled] = useState(false);

    const animate = () => {
        setDisabled(true);
        setTimeout(() => setDisabled(false), 1000);
    }

    const handleSubstract = () => {
        substractItem(shoe);
        if(shoe.qty === 1) {
            animate();
        }
    }
  return shoe && (
    <div className='cart__item'>
        <img src={shoe.image} alt="" />
        <div className="cart__item__desc">
            <div className="cart__item__desc">
                <p>{shoe.name}</p>
                <div className="addOrSubstract">
                    <button className={shoe.qty === 1 ? disabled ? 'shake disabledBtn' : 'disabledBtn' : ''} onClick={() => handleSubstract()}>-</button>
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