import React from "react";
import Upper from "../component/about/Upper";
import MidUper from "../component/about/MidUper";
import MidLowwer from "../component/about/MidLowwer";
import Text from "../component/about/Text";
import Lower from "../component/about/Lower";
import Banner from "../component/about/Banner";

function About() {
  return (
    <div>
      <Upper></Upper>
      <MidUper></MidUper>
      <MidLowwer></MidLowwer>
      <Text></Text>
      <Lower></Lower>
      <Banner></Banner>
    </div>
  );
}

export default About;
