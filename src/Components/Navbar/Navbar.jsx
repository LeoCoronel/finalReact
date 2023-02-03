import React, { useEffect, useRef } from "react";
import Logo from "../../assets/icons/Sneakers.png";
import Cart from "../../assets/icons/Cart.png";
import User from "../../assets/icons/User.png";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          {/* Navigation Left */}
          <ul className="header__nav__links left">
            <li className="header__nav__links__item">
              <a href="#">Home</a>
            </li>
            <li className="header__nav__links__item">
              <a href="./shop.html">Shop</a>
            </li>
          </ul>
          {/* Navigation Logo */}
          <div className="header__logo">
            <img src={Logo} alt="Sneakers Logo" />
          </div>
          {/* Navigation Right */}
          <ul className="header__nav__links right">
            <li className="header__nav__links__item">
              <div className="header__cart">
                <img className="cart-logo" src={Cart} alt="Cart Logo" />
                <div className="cart hidden glass">
                  <div className="product-cart-list"></div>
                  <div className="bottomCart">
                    <p>
                      Total: <span className="totalPrice"></span>
                    </p>
                    <button className="buyCartBtn">Comprar</button>
                  </div>
                </div>
              </div>
            </li>
            <li className="header__nav__links__item">
              <div className="header__login">
                <img src={User} alt="user Logo" />
              </div>
            </li>
          </ul>
        </nav>
        
      </header>
      
      {/* <div className="header__logo__container"></div> */}
    </>
  );
};

export default Navbar;
