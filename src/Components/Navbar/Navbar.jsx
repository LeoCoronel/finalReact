import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Sneakers.png";
import Cart from "../../assets/icons/Cart.png";
import User from "../../assets/icons/User.png";
import Menu from "../../assets/icons/Menu.svg";

const Navbar = () => {
  return (
    <>
      <header className="header">
        {/* Navigation Logo */}
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="Sneakers Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          {/* Menu */}
          <label htmlFor="menu" className="header__nav__label">
            <img src={Menu} alt="Menu" />
          </label>
          <input type="checkbox" id="menu" className="header__nav__checkbox" />
          {/* Menu links */}
          <div className="header__nav__menu">
            {/* Navigation Left */}
            <ul className="header__nav__links left">
              <li className="header__nav__links__item">
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li className="header__nav__links__item">
              <NavLink to="/shop">
                  Shop
                </NavLink>
              </li>
            </ul>
            {/* Navigation Right */}
            <ul className="header__nav__links right">
              <li className="header__nav__links__item">
                <div className="header__cart">
                  <img className="cart-logo" src={Cart} alt="Cart Logo" />
                </div>
              </li>
              <li className="header__nav__links__item">
                <div className="header__login">
                  <img src={User} alt="user Logo" />
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
