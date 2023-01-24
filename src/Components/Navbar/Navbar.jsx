import React, { useEffect, useRef } from "react";
import Logo from "../../assets/icons/Sneakers.png";
import Cart from "../../assets/icons/Cart.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const iconRef = useRef(null);

  useEffect(() => {
    gsap.from(".header__logo", {
      y: "50vh",
      scale: 6,
      yPercent: -50,
      scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: ".hero",
        endTrigger: ".hero",
        end: "top center",
        start: "top bottom",
      },
    });
    // ScrollTrigger.create({
    //   animation: gsap.from(".header__logo", {
    //     y: "50vh",
    //     scale: 6,
    //     yPercent: -50,
    //   }),
    //   scrub: true,
    //   trigger: ".hero",
    //   start: "top bottom",
    //   endTrigger: ".hero",
    //   end: "top center",
    // });
  }, []);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav__links left">
            <li className="header__nav__links__item">
              <a href="#">Home</a>
            </li>
            <li className="header__nav__links__item">
              <a href="./shop.html">Shop</a>
            </li>
          </ul>
          <ul className="header__nav__links right">
            <li className="header__nav__links__item">
              <a href="#">Home</a>
            </li>
            <li className="header__nav__links__item">
              <a href="./shop.html">Shop</a>
            </li>
          </ul>
        </nav>
        {/* <div class="header__cart">
          <img class="cart-logo" src={Cart} alt="Cart Logo" />
          <div class="cart hidden glass">
            <div class="product-cart-list"></div>
            <div class="bottomCart">
              <p>
                Total: <span class="totalPrice"></span>
              </p>
              <button class="buyCartBtn">Comprar</button>
            </div>
          </div>
        </div> */}
      </header>
      <div ref={iconRef} className="header__logo">
        <img src={Logo} alt="Sneakers Logo" />
      </div>
      <div className="header__logo__container"></div>
    </>
  );
};

export default Navbar;
