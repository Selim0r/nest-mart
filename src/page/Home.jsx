import React from "react";

import Banner from "../component/home/Banner";
import CardSlider from "../component/home/CardSlider";
import { useLoaderData } from "react-router";
import SmallSection from "../component/home/SmallSection";
import Product from "../component/home/Product";
import Offer from "../component/home/Offer";

const Home = () => {
  const { smallSection, productData } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <div className="App p-5">
        <h1 className="text-[32px] font-bold text-[#253D4E] mb-5">
          Featured Categories
        </h1>
        <CardSlider></CardSlider>
      </div>
      <SmallSection smallSection={smallSection}></SmallSection>
      <Product productData={productData}></Product>
      <Offer></Offer>
    </div>
  );
};

export default Home;
