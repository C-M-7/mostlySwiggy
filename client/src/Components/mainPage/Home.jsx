import React from "react";
import CardStack from "./CardStack";
import Footer from "./Footer";
import Main2Carousel from "./Main2Carousel";
import MainCarousel from "./MainCarousel";
import MainOptions2 from "./MainOption2";
import MainOptions1 from "./MainOptions1";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="px-[15%] pt-20">
          <MainCarousel />
          <hr className="mt-8" />
          <Main2Carousel />
          <hr className="mt-8" />
          <CardStack />
        </div>
        <div className="py-[2%]">
          {/* <MainOptions1 /> */}
          {/* <MainOptions2 /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;