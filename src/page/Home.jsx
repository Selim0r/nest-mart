import React from "react";
import Navber from "../component/home/Navber";
import Banner from "../component/home/Banner";
import CardSlider from "../component/home/CardSlider";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navber></Navber>
      <Banner></Banner>
      <div className="App p-5">
        <h1 className="text-[32px] font-bold text-[#253D4E] mb-5">
          Featured Categories
        </h1>
        <CardSlider></CardSlider>
      </div>
    </div>
  );
};

export default Home;
