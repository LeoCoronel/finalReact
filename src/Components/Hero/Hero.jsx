import React, { useEffect, useRef } from "react";
import Shoe from "../../assets/shoe.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const locoScroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     lerp: 0.08
  //   });
  // }, []);

  return (
    <div className="smooth-scroller" ref={scrollRef} >
      <div className="hero">
        <div className="section">
          <div className="section__wrapper">
            <div className="content">
              <h1 className="hero-header h-1">THEY</h1>
              <h1 className="hero-header h-2">MOVE</h1>
              <h1 className="hero-header h-3">US</h1>
            </div>
            <div className="pin__wrapper">
              <div className="image__wrapper" id="heroImage">
                <img src={Shoe} alt="" className="image"/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section copy">
          <div className="section__wrapper">
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis doloribus rem dolorem veniam, in impedit, laborum consequatur animi itaque odio veritatis obcaecati dolor voluptas numquam sit repudiandae delectus cumque sunt quo dolorum ipsa? Nisi, cumque odit itaque ducimus suscipit fugiat.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
