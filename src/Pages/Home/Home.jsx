import React from "react";
import Hero from "../../Components/Hero/Hero";
import Gallery from "../../Components/Gallery/Gallery";
import GalleryFooter from "../../Components/GalleryFooter/GalleryFooter";
import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.jpg";
import shoe from "../../assets/shoe.png";

const Home = () => {
  const sampleTitle = "Serve Pro Lite";
  const sampleText =
    "Catering to the growing consumer expectation for casual, everyday comfort, the Serve Pro Lite Trainers feature shock-absorbing support for lightweight luxury.";
  return (
    <>
      <Hero />
      <Gallery title={sampleTitle} text={sampleText} bg={bg1} position={'left'} img={shoe} />
      <Gallery title={sampleTitle} text={sampleText} bg={bg2} position={'right'} img={shoe}/>
      <GalleryFooter />
    </>
  );
};

export default Home;
