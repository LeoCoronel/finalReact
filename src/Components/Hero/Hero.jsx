import React from "react";
import Shoe from "../../assets/shoe.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>They move us</h1>
        <p>2022</p>
      </div>
      <div className="hero__card">
        <img src={Shoe} alt="" />
        <div className="hero__card__desc">
          <p>
            Caracal | <span>⭐⭐⭐⭐⭐</span>
          </p>
          <div className="hero__card__desc__buy">
            <p>171 $</p>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
